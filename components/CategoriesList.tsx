import { getCategories } from "@/lib/actions/category";
import React from "react";

async function CategoriesList() {
  const categories = await getCategories();
  return (
    <>
      {categories.data?.map((category) => (
        <li key={category.id}>{category.name}</li>
      ))}
    </>
  );
}

export default CategoriesList;
