export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  topics: string[];
  updated_at: string;
}

export interface GitHubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  total_stars?: number;
}

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  const res = await fetch(
    "https://api.github.com/users/marcuslaf/repos?per_page=60&sort=updated",
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) return [];

  const repos: GitHubRepo[] = await res.json();

  return repos
    .filter((r) => !r.fork && r.name !== "marcuslaf")
    .sort((a, b) => b.stargazers_count - a.stargazers_count);
}

export async function fetchGitHubUser(): Promise<GitHubUser | null> {
  try {
    const res = await fetch("https://api.github.com/users/marcuslaf", {
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;

    const user: GitHubUser = await res.json();

    const reposRes = await fetch(
      "https://api.github.com/users/marcuslaf/repos?per_page=60&sort=updated",
      { next: { revalidate: 3600 } }
    );

    if (reposRes.ok) {
      const repos: GitHubRepo[] = await reposRes.json();
      user.total_stars = repos
        .filter((r) => !r.fork)
        .reduce((acc, r) => acc + r.stargazers_count, 0);
    }

    return user;
  } catch {
    return null;
  }
}
