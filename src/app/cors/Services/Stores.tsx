import { environment } from "../environment/environment";
import { IStore } from "../interfaces/istore";

const fetchStoresData = async (url: string): Promise<any> => {
  try {
    const response = await fetch(url, {
      method: "GET",
      next: {
        revalidate: 21600,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data as IStore[];
  } catch (error) {
    console.error("Fetching stores data failed:", error);
    throw error;
  }
};

const fetchStoresIds = async (url: string): Promise<any> => {
  try {
    const response = await fetch(url, {
      method: "GET",
      next: {
        revalidate: 21600,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data?.data as number[];
  } catch (error) {
    console.error("Fetching stores data failed:", error);
    throw error;
  }
};

interface IStoreResponse {
  data: IStore[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}
const fetchAllStoresData = async (
  url: string,
  pag: number
): Promise<IStoreResponse> => {
  try {
    const response = await fetch(url, {
      method: "GET",
      next: {
        revalidate: 21600,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return {
      data: data?.data as IStore[],
      current_page: data?.current_page,
      last_page: data?.last_page,
      per_page: data?.per_page,
      total: data?.total,
    };
  } catch (error) {
    console.error("Fetching coupons data failed:", error);
    throw error;
  }
};

const useFeaturedStores = async (lang: string) => {
  try {
    const storesData = await fetchStoresData(
      `${environment.baseUrl}/store-featured/${lang}`
    );
    return storesData;
  } catch (error) {
    console.error("Error in retrieving stores data:", error);
    return [];
  }
};
const GetAllStores = async (lang: string, page: number = 1) => {
  try {
    const storesData = await fetchAllStoresData(
      `${environment.baseUrl}/store-user/${lang}?page=${page}`,
      page
    );
    return storesData as IStoreResponse;
  } catch (error) {
    console.error("Error in retrieving coupons data:", error);
    return {
      data: [],
      current_page: 1,
      last_page: 1,
      per_page: 0,
      total: 0,
    };
  }
};
const GetSingleStore = async (lang: string, id: string) => {
  try {
    const storeData = await fetchStoresData(
      `${environment.baseUrl}/store-user/${lang}/${id}`
    );
    return storeData as IStore;
  } catch (error) {
    console.error("Error in retrieving store data:", error);
    return {} as IStore;
  }
};
const fetchSearchStoresData = async (searchParam: string, lang: string) => {
  try {
    const storesData = await fetchStoresData(
      `${environment.baseUrl}/search-store/${lang}/${searchParam}`
    );
    return storesData;
  } catch (error) {
    console.error("Error in retrieving stores data:", error);
    return [];
  }
};
const getStoresId = async () => {
  try {
    const storesIds = await fetchStoresData(`${environment.baseUrl}/storeIds`);
    return storesIds;
  } catch (error) {
    console.error("Error in retrieving Categories data:", error);
    return [];
  }
};
export {
  useFeaturedStores,
  GetAllStores,
  GetSingleStore,
  fetchSearchStoresData,
  getStoresId,
};
