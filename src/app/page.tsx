import Strengths from "@/components/Strengths";
import Hero from "@/components/Hero";
import UserFriendlyFeatures from "@/components/UserFriendlyFeatures";

export default async function Home() {
  return (
    <main className="w-full min-h-screen py-4">
      <div className="w-full h-screen relative">
        <Hero />

        <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-neutral-dark to-transparent" />
      </div>

      <div className="w-full h-full min-h-screen">
        <Strengths />
      </div>

      <div className="w-full h-full min-h-screen">
        <UserFriendlyFeatures />
      </div>
    </main>
  );
}
