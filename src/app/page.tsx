import Strengths from "@/components/Strengths";
import Hero from "@/components/Hero";

export default async function Home() {
  return (
    <main className="w-full min-h-screen py-4">
      <div className="w-full h-screen relative">
        <Hero />

        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent" />
      </div>
      <div className="w-full h-full min-h-screen">
        <Strengths />
      </div>
    </main>
  );
}
