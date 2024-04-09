import {
  GithubIcon,
  ProtocolPawnLogo,
  TelegramIcon,
  TwitterIcon,
} from "@/components/Icons";
import { NAVIGATION, SOCIAL_MEDIA } from "@/content";

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-gray-100 ">
      <div className="md:max-w-7xl mx-auto">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8 md:gap-10">
          <div className="mx-auto md:mx-0 w-fit mb-8 md:mb-0 md:ml-5">
            <a href={"/"}>
              <img
                src={ProtocolPawnLogo.src}
                alt="ProtocolPawn Logo"
                className="h-12 w-auto"
              />
            </a>
          </div>
          <ul className="md:order-2 flex justify-evenly max-w-sm my-8 md:gap-10">
            {NAVIGATION.navigation.map((item) => (
              <li key={item.title} className="text-center text-sm leading-5">
                <a href={`#${item.id}`}>{item.title}</a>
              </li>
            ))}
          </ul>
          <div className="flex justify-center space-x-6 md:order-2">
            <a
              href={SOCIAL_MEDIA.social_media.twitter.url}
              className={"rounded-md py-2 text-sm font-medium"}
              target="_blank"
            >
              <TwitterIcon className="h-6 w-6 text-gray-100" />
            </a>
            <a
              href={SOCIAL_MEDIA.social_media.telegram.url}
              className={"rounded-md py-2 text-sm font-medium"}
              target="_blank"
            >
              <TelegramIcon className="h-6 w-6 text-gray-100" />
            </a>
            <a
              href={SOCIAL_MEDIA.social_media.github.url}
              className={"rounded-md py-2 text-sm font-medium"}
              target="_blank"
            >
              <GithubIcon className="h-6 w-6 text-gray-100" />
            </a>
          </div>
          <div className="mt-8 md:order-1 md:mt-0 md:mr-auto">
            <p className="text-center text-sm leading-5 text-gray-100">
              Copyright &copy; {new Date().getFullYear()} Protocol Pawns
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
