import {
  NearIcon,
  ProtocolPawnLogo,
  TelegramIcon,
  TwitterIcon,
} from "@/components/Icons";
import Link from "next/link";
import { NAVIGATION, SOCIAL_MEDIA } from "@/content";

const navigation = NAVIGATION.navigation.map((item) => ({
  name: item.title,
  href: `#${item.id}`,
  current: false,
}));

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <details
      className={`transparent container mx-auto
    [&_span:first-of-type]:open:rotate-45 [&_span:first-of-type]:open:translate-y-0
    [&_span:nth-of-type(2)]:open:opacity-0
    [&_span:last-of-type]:open:-rotate-45 [&_span:last-of-type]:open:translate-y-0
    `}
    >
      <summary className="list-none">
        <div className="mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between max-w-7xl mx-auto">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <div className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 ml-4">
                <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span
                    aria-hidden="true"
                    className="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out -translate-y-1.5"
                  ></span>
                  <span
                    aria-hidden="true"
                    className="block absolute h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out"
                  ></span>
                  <span
                    aria-hidden="true"
                    className="block absolute h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out translate-y-1.5"
                  ></span>
                </div>
              </div>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <Link
                href={"/"}
                className="flex flex-shrink-0 items-center text-white"
              >
                <img
                  className="h-8 w-auto mr-2"
                  src={ProtocolPawnLogo.src}
                  alt="ProtocolPawn Logo"
                />
                Protocol Pawns
              </Link>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="hidden sm:flex space-x-4">
                {/* gradient bg to act like border of the button have gradient (from left gray to right white) */}
                <div className="bg-gradient-to-r from-gray-800 via-neutral-600 to-neutral-500 rounded-lg w-36 p-0.5">
                  <a
                    href={SOCIAL_MEDIA.social_media.near.url}
                    className="flex items-center justify-center bg-black hover:bg-transparent text-white px-2 py-3 rounded-lg w-full"
                    target="_blank"
                  >
                    Play Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </summary>

      <div
        className="sm:hidden fixed top-20 right-0 w-full z-30 bg-black"
        style={{ height: "calc(100vh - 5rem)" }}
      >
        <div className="w-full">
          <div className="space-y-1 px-2 pb-3 pt-2 flex flex-col justify-center itesm-center text-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={classNames(
                  item.current ? "text-gray-300" : "text-white",
                  "block px-3 py-2 text-2xl my-3"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="w-fit mx-auto mt-16">
          <div className="flex space-x-4">
            {/* gradient bg to act like border of the button have gradient (from left gray to right white) */}
            <div className="bg-gradient-to-r from-gray-800 via-neutral-600 to-neutral-500 rounded-lg w-36 p-0.5">
              <button className="bg-black hover:bg-transparent text-white px-2 py-3 rounded-lg w-full">
                Play Now
              </button>
            </div>
          </div>
        </div>

        <div className="w-fit mx-auto mt-14 text-white font-light">
          <h2 className="mb-4 text-center">Follow Us</h2>
          <ul className="flex gap-10 items-center">
            <li>
              <a href={SOCIAL_MEDIA.social_media.twitter.url} target="_blank">
                <TwitterIcon className="w-8 h-8" />
              </a>
            </li>
            <li className="h-fit">
              <a href={SOCIAL_MEDIA.social_media.near.url} target="_blank">
                <NearIcon className="w-6 h-6" />
              </a>
            </li>
            <li>
              <a href={SOCIAL_MEDIA.social_media.telegram.url} target="_blank">
                <TelegramIcon className="w-8 h-8" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </details>
  );
}
