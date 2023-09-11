
import { LoaderFunction } from "@remix-run/node";
import { authenticator } from "~/utils/auth.server";

export let loader: LoaderFunction = ({ request }) => {
  return authenticator.authenticate("keycloak", request, {
    successRedirect: "/",
    failureRedirect: "/login",
  });
};