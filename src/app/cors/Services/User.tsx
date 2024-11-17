import { environment } from "../environment/environment";
import { IUser } from "../interfaces/iuser";

interface FetchUserDataResponse {
  isSuccess: boolean;
  errorMessage?: string;
}

const fetchUserData = async (
  userUrl: string,
  requestBody: IUser
): Promise<FetchUserDataResponse> => {
  try {
    const response = await fetch(userUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      const errorMessage =
        errorResponse?.errors?.email ||
        "An error occurred while processing the request.";
      return { isSuccess: false, errorMessage:errorMessage };
    }

    return { isSuccess: true };
  } catch (error) {
    console.error("Error fetching user data:", error);
    return { isSuccess: false, errorMessage: "net work error"};
  }
};

const postUserData = async (
  requestBody: IUser
): Promise<FetchUserDataResponse> => {
  return await fetchUserData(`${environment.baseUrl}/user`, requestBody);
};

export default postUserData;
