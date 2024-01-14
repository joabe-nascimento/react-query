import { UseQueryOptions, useQuery } from "react-query";
import { createUserUserKey } from "./keys";
import api from "../global/api";
import { User } from "./types";


export const useUser = (username: string, options?: UseQueryOptions<User>) => {
  return useQuery(
    createUserUserKey(username),
    () => api.get<User>(`/users/${username}`).then((response) => response.data),
    options
  );
};
    