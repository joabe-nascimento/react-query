import { QueryKey } from "react-query";

export const createUserUserKey = (username: string): QueryKey => ["userUser", username];
