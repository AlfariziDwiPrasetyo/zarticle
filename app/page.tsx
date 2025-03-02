import Card from "@/components/Card";
import SearchInput from "@/components/SearchInput";
import { Button } from "@/components/ui/button";
import { MorphingText } from "@/components/ui/morphing-text";
import { texts } from "@/lib/data";
import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import ArticlesList from "@/components/ArticlesList";
import { Suspense } from "react";
import UsersList from "@/components/UsersList";
import CategoriesList from "@/components/CategoriesList";
import { ScaleLoader } from "react-spinners";

export default async function Home() {
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
          <Suspense fallback={<p className="text-center">Loading...</p>}>
            <ArticlesList />
          </Suspense>
        </div>
      </section>

      <section className="px-6 mt-16">
        <div className="flex px-6 justify-between items-center">
          <h2 className="text-2xl font-semibold">Articles</h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-10 col-span-3 gap-6 py-5 px-6">
          <div className="md:col-span-7 grid grid-cols-2 gap-4">
            <Suspense fallback={<p className="text-center">Loading...</p>}>
              <ArticlesList />
            </Suspense>
          </div>

          <div className="md:col-span-3">
            <div className="px-2">
              <h3 className="font-semibold">Recommended Topics</h3>
              <div className="my-5">
                <Suspense
                  fallback={
                    <div className="flex justify-center">
                      <ScaleLoader />
                    </div>
                  }
                >
                  <ul className="flex flex-wrap gap-2 [&>*]:px-4 [&>*]:bg-[#F2F2F2] [&>*]:flex [&>*]:items-center [&>*]:justify-center [&>*]:text-black [&>*]:py-2 [&>*]:rounded-full">
                    <CategoriesList />
                  </ul>
                </Suspense>
              </div>
            </div>
            <div className="px-2">
              <h3 className="font-semibold">Top Writers</h3>
              <div className="my-5">
                <Suspense
                  fallback={
                    <div className="flex justify-center">
                      <ScaleLoader />
                    </div>
                  }
                >
                  <ul className="space-y-4">
                    <UsersList />
                  </ul>
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
