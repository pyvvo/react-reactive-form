import type { V2_MetaFunction } from "@remix-run/node";
import { CNDIcon, ButtonCva, PyvvoThemeProvider } from '@hm/ui';
import { cva } from "class-variance-authority";
import { Theme, useTheme } from '~/utils/theme-provider';
import { pyTheme } from "~/theming";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};




export default function Index() {
  const [, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT));
    console.log('done');

  };

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <h1 className="text-center text-2xl font-extrabold tracking-tight">
        <span className="block uppercase text-yellow-800 drop-shadow-md">
          Indie Stack
        </span>
      </h1>
      <div className="bg-white dark:bg-red-900">
        <h1 className="text-gray-900 dark:text-white">Hello world</h1>
        <PyvvoThemeProvider theme={pyTheme}>
          <ButtonCva intent={"primary"} size={"medium"} />
        </PyvvoThemeProvider>
      </div>
      <button onClick={toggleTheme}>Toggle</button>
      {/* <Button className={ButtonVariants({ intent:"secondary", size:"small", roundness:"round" })}>Click Me</Button> */}
      {/* <CNDIcon className="fill-blue-600" width={200} /> */}
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
