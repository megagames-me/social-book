import { appAuth } from '$lib/auth/appAuth';

// Expose endpoints for authentication

export const { get: GET, post: POST } = appAuth;