import { useQuery } from "@tanstack/react-query";
import { User } from "../types/user";
import { API_URL } from "../constants/apiURL";

export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async (): Promise<Array<User>> => {
      const response = await fetch(API_URL + "/users");
      return await response.json();
    },
  });
};
