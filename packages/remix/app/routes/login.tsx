import { LoaderFunction, json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { authenticator } from "~/utils/auth.server";

export let loader: LoaderFunction = async ({ request }) => {
    // if the user is not authenticated, redirect to login
    const res = await authenticator.isAuthenticated(request);
    // console.log({ res });
    return json(res);
};

// app/routes/login.tsx
export default function Login() {
    const user = useLoaderData();
    // console.log({ user });

    return (
        <Form action="/auth/keycloak" method="post">
            <button>Login with Keycloak</button>
        </Form>
    );
}