import Card from "@/components/Card";
import SearchInput from "@/components/SearchInput";
import { Button } from "@/components/ui/button";
import { MorphingText } from "@/components/ui/morphing-text";
import { WordRotate } from "@/components/ui/word-rotate";
import { texts } from "@/lib/data";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";

export default function Home() {
  return (
    <>
      <section className="bg-white animate-fade-in-up text-gray-800 py-20 space-y-4">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Discover the Art of{" "}
            {/* <span className="playfair text-indigo-600">Writing</span> */}
            <MorphingText
              className="text-7xl playfair font-bold text-blue-600 dark:text-white"
              texts={texts}
            />{" "}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Read insightful articles that inform, inspire, and ignite your
            curiosity.
          </p>
        </div>
        <div className="w-full pt-5 flex justify-center items-center">
          <div className="px-6 max-w-xl w-full">
            <SearchInput />
          </div>
        </div>
      </section>

      <section className="px-6 mt-5">
        <div className="flex px-6 justify-between items-center">
          <h2 className="text-2xl font-semibold">Recent Articles</h2>
          <InteractiveHoverButton>View All Articles</InteractiveHoverButton>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 col-span-3 gap-6 py-5 px-6">
          <Card />
          <Card />
          <Card />
        </div>
      </section>
    </>
  );
}
