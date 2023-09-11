import { LoaderFunction, redirect, ActionFunction, LoaderArgs } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { getSession, sessionStorage } from "~/session.server";
import { authenticator } from "~/utils/auth.server";


// export let loader: LoaderFunction = () => redirect("/login");

export async function loader({ request }: LoaderArgs) {
  // if the user is authenticated, redirect to /dashboard
  const b = await authenticator.isAuthenticated(request, {
    failureRedirect: "/login"
  });
  // console.log({ b });

  return b;
}

export let action: ActionFunction = async ({ request }) => {
  // const session = await getSession(request.headers.get("Cookie"));
  // await sessionStorage.destroySession(session);
  const a = await authenticator.logout(request, { redirectTo: "/login" });
  // console.log({ a });
return a;
};

export default function Logout() {
  const c = useActionData();
  // console.log({ c });

  return (
    <Form action="/logout" method="post">
      <button>Logout with Keycloak</button>
    </Form>
  );
}