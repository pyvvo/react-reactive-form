import { createCookieSessionStorage } from "@remix-run/node";

const COOKIE_NAME = "haddock3_webapp_session";

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: COOKIE_NAME,
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    maxAge: 60*60,
    // expires: new Date(),
    secrets: ["somebadsecret"],
  },
});

export const { getSession, commitSession, destroySession } = sessionStorage;

