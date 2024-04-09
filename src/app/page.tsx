import Strengths from "@/components/Strengths";
import Hero from "@/components/Hero";
import UserFriendlyFeatures from "@/components/UserFriendlyFeatures";
import Roadmap from "@/components/Roadmap";
import BeginMatch from "@/components/BeginMatch";
import FAQ from "@/components/FAQ";

export default async function Home() {
  return (
    <main className="w-full py-4">
      <div
        className="w-full relative"
        style={{
          height: "calc(100vh - 5rem)",
        }}
      >
        <Hero />

        <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-neutral-dark to-transparent" />
      </div>

      <div className="w-full min-h-screen bg-neutral-dark">
        <Strengths />
      </div>

      <div className="w-full bg-[#222]">
        <UserFriendlyFeatures />
      </div>

      <div className="w-full py-20">
        <Roadmap />
      </div>

      <div className="w-full h-[60vh] md:h-screen">
        <BeginMatch />
      </div>

      <div className="w-full">
        <FAQ />
      </div>
    </main>
  );
}
