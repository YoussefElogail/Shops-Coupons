import { environment } from "../environment/environment";
import { ICategory } from "../interfaces/icategory";

const fetchCategoriesData = async (endPoint: string): Promise<ICategory[]> => {
  try {
    const response = await fetch(endPoint, {
      method: "GET",
      next: {
        revalidate: 21600,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data as ICategory[];
  } catch (error) {
    console.error("Fetching Categories data failed:", error);
    throw error;
  }
};

const fetchSingleCategory = async (endPoint: string): Promise<ICategory> => {
  try {
    const response = await fetch(endPoint, {
      method: "GET",
      next: {
        revalidate: 21600,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data as ICategory;
  } catch (error) {
    console.error("Fetching Categories data failed:", error);
    throw error;
  }
};

const GetCategories = async (lang: string) => {
  try {
    const CategoriesData = await fetchCategoriesData(
      `${environment.baseUrl}/category-user/${lang}`
    );
    return CategoriesData;
  } catch (error) {
    console.error("Error in retrieving Categories data:", error);
    return [];
  }
};
const GetStoresByCategory = async (lang: string, id: string) => {
  try {
    const CategoriesData = await fetchSingleCategory(
      `${environment.baseUrl}/category-user/${lang}/${id}`
    );
    return CategoriesData as ICategory;
  } catch (error) {
    console.error("Error in retrieving Categories data:", error);
    return {} as ICategory;
  }
};
export { GetCategories, GetStoresByCategory };
