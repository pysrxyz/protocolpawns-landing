import {
  GithubIcon,
  ProtocolPawnLogo,
  TelegramIcon,
  TwitterIcon,
} from "@/components/Icons";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-100">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="mx-auto w-fit mb-8">
          <img
            src={ProtocolPawnLogo.src}
            alt="ProtocolPawn Logo"
            className="h-12 w-auto"
          />
        </div>
        <ul className="flex justify-evenly max-w-sm my-8">
          <li className="text-center text-sm leading-5">Our Strength</li>
          <li className="text-center text-sm leading-5">Roadmap</li>
          <li className="text-center text-sm leading-5">FAQs</li>
        </ul>
        <div className="flex justify-center space-x-6 md:order-2">
          <a
            href={"https://twitter.com/shitzucommunity"}
            className={"rounded-md py-2 text-sm font-medium"}
            target="_blank"
          >
            <TwitterIcon className="h-6 w-6 text-gray-100" />
          </a>
          <a
            href={"https://t.me/Shitzu_Community"}
            className={"rounded-md py-2 text-sm font-medium"}
            target="_blank"
          >
            <TelegramIcon className="h-6 w-6 text-gray-100" />
          </a>
          <a
            href={"https://github.com/Shitzu-Apes"}
            className={"rounded-md py-2 text-sm font-medium"}
            target="_blank"
          >
            <GithubIcon className="h-6 w-6 text-gray-100" />
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-sm leading-5 text-gray-100">
            Copyright &copy; {new Date().getFullYear()} Protocol Pawns
          </p>
        </div>
      </div>
    </footer>
  );
}
