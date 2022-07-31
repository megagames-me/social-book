/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	interface Locals {
		userid: string;
	}

	// interface Platform {}

	interface Session {
		user?: {
			connections:{
				google : {
					sub: string;
					name: string;
					given_name: string;
					family_name: string;
					picture: string;
					email: string;
					email_verified: boolean,
					locale: string,
					hd: string,
					provider: string;
				}
			}
			
		}
	}

	// interface Stuff {}
}