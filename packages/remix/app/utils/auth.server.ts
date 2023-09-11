// app/utils/auth.server.ts
import { Authenticator } from "remix-auth";
import { sessionStorage } from '~/session.server';
import {
    KeycloakStrategy,
} from "remix-auth-keycloak";

// Create an instance of the authenticator, pass a generic with what your
// strategies will return and will be stored in the session
export const authenticator = new Authenticator<string>(sessionStorage);

let keycloakStrategy = new KeycloakStrategy(
    {
        useSSL: false,
        domain: "localhost:8080",
        realm: "pyvvo",
        clientID: "pichaa",
        clientSecret: "n5towu5mDKi6wnDABwkzvysAPTyjGpBY",
        callbackURL: "http://localhost:3000/callback",
    },
    async ({ accessToken, refreshToken, extraParams, profile }) => {
        // Get the user data from your DB or API using the tokens and profile
        
        return profile.emails[0].value;
    }
);

authenticator.use(keycloakStrategy);