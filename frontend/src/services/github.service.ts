import { fetchApi } from "../config/api";
import { User } from "../utils/User";

export const getUserProfileByUsername = async (
  username: string
): Promise<User> => fetchApi<User>(`/users/${username}`);
