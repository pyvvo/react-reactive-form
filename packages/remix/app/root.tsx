import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";
import mainStyles from "~/styles/style.css";
import darkStyles from "~/styles/dark.css";
import clsx from 'clsx';
import { ThemeProvider, useTheme, NonFlashOfWrongThemeEls, Theme } from '~/utils/theme-provider';
import { getThemeSession } from "./utils/theme.server";
import { AuthProvider, IKeycloakProviderProps, PyvvoThemeProvider } from "@hm/ui";
import { pyTheme } from "./theme";
import Keycloak from "keycloak-js";
import { FC } from "react";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  {
    rel: 'stylesheet',
    href: mainStyles,
  },
  {
    rel: 'stylesheet',
    href: darkStyles,
    media: '(prefers-color-scheme: dark)',
  },
];


// function App() {
//   const [theme] = useTheme();

//   return (
//     <html lang="en" className={clsx(theme)}>
//       {/* ... */}
//     </html>
//   );
// }

export type LoaderData = {
  theme: Theme | null;
};

export const loader: LoaderFunction = async ({ request }) => {
  const themeSession = await getThemeSession(request);

  const data: LoaderData = {
    theme: themeSession.getTheme(),
  };

  return data;
};

export default function AppWithProviders() {
  const data = useLoaderData<LoaderData>()
  return (
    <PyvvoThemeProvider theme={pyTheme}>
      <App />
    </PyvvoThemeProvider>
  )
}

{/* <ThemeProvider specifiedTheme={data.theme}> */ }
{/* </ThemeProvider> */ }
export function App() {
  // const [theme] = useTheme();
  const data = useLoaderData<LoaderData>();
  // console.log(clsx(theme));

  return (
    <html lang="en" >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        <NonFlashOfWrongThemeEls ssrTheme={Boolean(data.theme)} />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
