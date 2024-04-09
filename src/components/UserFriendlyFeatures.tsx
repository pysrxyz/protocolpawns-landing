import ChessboardImage from "@/assets/images/chessboard.png";

export default function UserFriendlyFeatures() {
  return (
    <section className="py-12 px-4 bg-[#222]">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white my-4">
            Simple and easy to play
          </h2>
          <p className="text-lg text-gray-400">
            Familiar look with casual mood and tone
          </p>
        </div>

        <div className="w-full py-20">
          <div className="flex flex-col-reverse md:flex-row justify-center gap-20">
            <div className="flex flex-col justify-start">
              <h3>
                <div className="text-lg text-gray-400 max-w-lg">
                  Our chess game offers a simple and easy way to play while
                  maintaining a familiar look and feel. The traditional chess
                  look gives players a sense of familiarity and comfort.
                  <br />
                  <br />
                  This familiar look and feel not only make our chess game more
                  enjoyable for experienced players, but also help to bridge the
                  gap between physical and digital chess for those who are new
                  to the game. 
                </div>
              </h3>
            </div>

            <div className="">
              <img
                src={ChessboardImage.src}
                alt="Features Hero"
                className="ml-auto max-w-lg w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
