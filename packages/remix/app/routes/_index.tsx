import type { V2_MetaFunction } from "@remix-run/node";
import { CNDIcon,Button } from '@hm/ui';
import { cva } from "class-variance-authority";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

const ButtonVariants = cva(
  /* button base style */
  "h-fit text-white uppercase transition-colors duration-150",
  {
      variants: {
          /* button colors */
          intent: {
              primary:
                  "bg-green-500 hover:bg-green-600",
              secondary:
                  "bg-red-500 hover:bg-red-600",
              default:
                  "bg-gray-500 hover:bg-gray-600",
          },

          /* button sizes */
          size: {
              small: ["text-sm", "py-1", "px-2"],
              medium: ["text-base", "py-2", "px-4"],
              large: ["text-lg", "py-4", "px-8"],
          },

          /* button roundness */
          roundness: {
              square: "rounded-none",
              round: "rounded-md",
              pill: "rounded-full",
          },
      },

      // defaults
      defaultVariants: {
          intent: "default",
          size: "medium",
          roundness: "round"
      },
  }
);

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Welcome to Remix</h1>
      <h1 className="text-center text-2xl font-extrabold tracking-tight">
        <span className="block uppercase text-yellow-800 drop-shadow-md">
          Indie Stack
        </span>
      </h1>
      {/* <Button className={ButtonVariants({ intent:"secondary", size:"small", roundness:"round" })}>Click Me</Button> */}
      <CNDIcon className="fill-blue-600" width={200} />
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
