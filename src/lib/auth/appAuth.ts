import { SvelteKitAuth, type JWT, type Session } from 'sk-auth';
import { GoogleOAuth2Provider } from 'sk-auth/providers';

import { Data } from '$lib/data/Data';

let db = new Data();

import dotenv from 'dotenv';
dotenv.config();

export const appAuth = new SvelteKitAuth({
	providers: [
		new GoogleOAuth2Provider({
			clientId: process.env['GOOGLE_OAUTH_CLIENT_ID'],
			clientSecret: process.env['GOOGLE_OAUTH_CLIENT_SECRET'],
			profile(profile) {
				return { ...profile, provider: 'google' };
			}
		})
	],
	callbacks: {
		// @ts-ignore This is ignored because this is the only way to deny login bruh
		async jwt(token: JWT, profile) {
			if (profile?.provider) { // If user has just logged in 
				const userDb = await db.getUserByEmail(profile.email);
				if (!userDb) {
					if (!await db.createUser(profile.email, profile.name)) {
						return {
							...token,
							deny: true
						};
					}
				}

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
			return {
				...token,
				deny: false
			};
		},

		// @ts-ignore This is ignored because this is the only way to deny login bruh
		session(token: JWT, session: Session) {
			if (token.deny === true) {
				return undefined
			}
			return session;
		}
	},
	jwtSecret: process.env['JWT_SECRET_KEY'],
    host: process.env['HOST'],
    protocol: process.env['PROTOCOL'],

});