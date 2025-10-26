import { instance } from "./axios";

export async function fetchCategoryApi() {
  try {
    const respons = await instance.get("products/category-list");
    return respons.data;
  } catch (error) {
    console.error("Fetch Error is :" + error);
    throw error;
  }
}
