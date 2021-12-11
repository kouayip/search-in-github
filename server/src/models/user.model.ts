export interface UserModel {
  id: number;
  login: string;
  avatar_url?: string | null;
  type?: string | null;
  gravatar_id?: string | null;
  url?: string | null;
  organizations_url?: string | null;
  bio?: string | null;
  location: string;
  email: string;
  name: string;
  company: string;
  blog: string;
  twitter_username: string;
  public_repos: number;
  private_gists: number;
  followers: number;
  following: number;
  total_private_repos: number;
  owned_private_repos: number;
  created_at?: Date | string;
  updated_at?: Date | string;
}
