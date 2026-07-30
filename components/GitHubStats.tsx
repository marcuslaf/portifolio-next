import { fetchGitHubUser } from "@/lib/github";
import { Star, GitFork, Users, BookOpen, ExternalLink } from "lucide-react";

export async function GitHubStats() {
  const user = await fetchGitHubUser();

  if (!user) {
    return (
      <div className="bg-bg-card border border-border rounded-2xl p-6 text-center text-text-muted text-sm">
        Não foi possível carregar as estatísticas do GitHub no momento.
      </div>
    );
  }

  const stats = [
    {
      icon: BookOpen,
      label: "Repositórios",
      value: user.public_repos,
    },
    {
      icon: Star,
      label: "Estrelas",
      value: user.total_stars ?? 0,
    },
    {
      icon: Users,
      label: "Seguidores",
      value: user.followers,
    },
    {
      icon: GitFork,
      label: "Seguindo",
      value: user.following,
    },
  ];

  return (
    <div className="bg-bg-card border border-border rounded-2xl p-6">
      <div className="flex items-center gap-4 mb-5">
        <img
          src={user.avatar_url}
          alt="Marcus Lafaiete"
          className="w-16 h-16 rounded-full border-2 border-accent"
        />
        <div>
          <h3 className="font-semibold text-lg">marcuslaf</h3>
          <a
            href={user.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-accent hover:underline"
          >
            @marcuslaf <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.label}
              className="bg-bg-tertiary rounded-xl p-4 text-center"
            >
              <Icon className="w-5 h-5 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-xs text-text-muted">{stat.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
