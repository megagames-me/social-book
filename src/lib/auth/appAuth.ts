import { SvelteKitAuth, type JWT, type Session } from 'sk-auth';
import { GoogleOAuth2Provider } from 'sk-auth/providers';

import { Data } from '$lib/data/Data';

// Initialize db
let db = new Data();

// Get env variables
import dotenv from 'dotenv';
dotenv.config();

export const appAuth = new SvelteKitAuth({
	providers: [
		new GoogleOAuth2Provider({
			clientId: process.env['GOOGLE_OAUTH_CLIENT_ID'],
			clientSecret: process.env['GOOGLE_OAUTH_CLIENT_SECRET'],
			profile(profile) {
				// Add provider variable to profile
				return { ...profile, provider: 'google' };
			}
		})
	],
	callbacks: {
		// @ts-ignore This is ignored because this is the only way to deny login bruh
		async jwt(token: JWT, profile) {
			if (profile?.provider) { // If user has just logged in 
				// Check if the user that just logged in exists
				const userDb = await db.getUserByEmail(profile.email);
				if (!userDb) {
					// If it doesn't exist, create it. 
					if (!await db.createUser(profile.email, profile.name)) {
						// if creation fails, i.e. db not working or rejected email, deny login
						return {
							...token,
							deny: true
						};
					}
				}

				// Format data of the token
				const { provider, ...account } = profile;
				token = {
					...token,
					user: {
						...(token.user ?? {}),
						id: userDb?.id,
						connections: { ...(token.user?.connections ?? {}), [provider]: account }
					},
					deny: false
				};
			}
			// If everything goes well, do not deny the token
			return {
				...token,
				deny: false
			};
		},

		// @ts-ignore This is ignored because this is the only way to deny login bruh
		session(token: JWT, session: Session) {
			// Log out if token is denied
			if (token.deny === true || !Data.allowedEmail(session?.user?.email)) {
				return undefined
			}
			return session;
		}
	},
	jwtSecret: process.env['JWT_SECRET_KEY'],
    host: process.env['SK_HOST'],
    protocol: process.env['SK_PROTOCOL'],

});