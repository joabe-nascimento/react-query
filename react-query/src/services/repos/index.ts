import { UseQueryOptions, useQuery } from "react-query";
import { createUseReposKey } from './keys'
import api from "../global/api";
import { Repo } from "./types";

export const useRepos = (
  username: string,
  options?: UseQueryOptions<Repo[]>
) => {
  return useQuery(  
    createUseReposKey(username),
    () =>
      api
        .get<Repo[]>(`/users/${username}/repos?sort=created&per_page=15`)
        .then((response) => response.data),
    options
  );
};
