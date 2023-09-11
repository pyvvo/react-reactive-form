// app/routes/auth/keycloak.tsx

import { LoaderFunction, redirect, ActionFunction } from "@remix-run/node";
import { authenticator } from "~/utils/auth.server";

export let loader: LoaderFunction = () => redirect("/login");

export let action: ActionFunction = ({ request }) => {
  return authenticator.authenticate("keycloak", request);
};