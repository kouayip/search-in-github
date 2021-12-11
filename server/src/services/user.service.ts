import axios from "axios";
import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient();

export class UserService {
  async saveToDB(user: User) {
    console.log("USER FETCH", user);
    return await prisma.user.create({
      data: {
        id: user.id,
        login: user.login,
        avatar_url: user.avatar_url,
        type: user.type,
        gravatar_id: user.gravatar_id,
        url: user.url,
        organizations_url: user.organizations_url,
        bio: user.bio,
        location: user.location,
        email: user.email,
        name: user.name,
        company: user.company,
        blog: user.blog,
        twitter_username: user.twitter_username,
        public_repos: user.public_repos,
        private_gists: user.private_gists,
        followers: user.followers,
        following: user.following,
        total_private_repos: user.total_private_repos,
        owned_private_repos: user.owned_private_repos,
        created_at: user.created_at,
        updated_at: user.updated_at,
      },
    });
  }

  async getUserByUsername(username: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: {
        login: username,
      },
    });
  }

  async fetchUser(username: string): Promise<User> {
    return axios
      .get<User>(`https://api.github.com/users/${username}`, {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      })
      .then((res) => {
        if (res.data.login) {
          this.saveToDB(res.data);
        }
        return res.data;
      });
  }
}
