const roadmaps = [
  {
    title: "Telegram Wallet",
    description:
      "The immediate next step for Protocol Pawns is to launch inside the Near Telegram wallet from HOT. There is an app store dedicated to games.",
  },
  {
    title: "Money Match",
    description:
      "There will also be money matches and a betting feature. Those are technically also implemented in the smart contract, but haven’t be launched yet.",
  },
  {
    title: "Fungible Token",
    description:
      "There will be a play2earn FT that can earn protocol revenue from wager matches and betting. It needs to be paired in an LP and sold to the protocol to earn revenue.",
  },
];

export default function Roadmap() {
  return (
    <section>
      <div>
        <h2 className="flex flex-col max-w-7xl mx-auto">
          <div className="text-sky-400">Roadmap</div>
          <div className="text-white text-5xl font-bold my-4">
            Develop to the Next Steps
          </div>
          <div className="text-xl text-gray-400">
            In order to enhance the user experience the development roadmap for
            our chess game update consists of several key milestones.
          </div>
        </h2>

        <div className="flex flex-col max-w-7xl mx-auto my-8">
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {roadmaps.map((roadmap, index) => (
              <li
                key={roadmap.title}
                className="col-span-1 flex flex-col bg-gradient-to-tr from-neutral-dark via-neutral-700 to-neutral-dark rounded-lg shadow divide-y divide-neutral-700 max-w-sm"
              >
                <div className="flex-1 flex flex-col p-8">
                  <h3 className="text-3xl font-bold text-white">
                    <div>{(index + 1).toString().padStart(2, "0")}</div>
                    <div className="text-xl my-4 font-semibold">
                      {roadmap.title}
                    </div>
                  </h3>
                  <p className="text-base text-gray-400">
                    {roadmap.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
