import ArticlesList from "@/components/ArticlesList";
import React, { Suspense } from "react";

function page() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 col-span-3 gap-6 py-5 px-6">
      <Suspense fallback={<p className="text-center">Loading...</p>}>
        <ArticlesList />
      </Suspense>
    </div>
  );
}

export default page;
