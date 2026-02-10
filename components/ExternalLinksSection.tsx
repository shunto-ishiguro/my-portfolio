import { Github } from "lucide-react";
import Image from "next/image";

export function ExternalLinksSection() {
  return (
    <section className="border-t pt-8 grid md:grid-cols-2 gap-6">
      <ExternalCard
        icon={<Github size={28} />}
        title="GitHub"
        desc="私のGitHubをご覧いただけます"
        href="https://github.com/shunto-ishiguro"
      />
      <ExternalCard
        icon={
          <Image
            src="https://img.atcoder.jp/assets/top/img/logo_bk.svg"
            alt="AtCoder"
            width={100}
            height={48}
            className="h-12 w-auto"
            unoptimized
          />
        }
        title="AtCoder"
        desc="アルゴリズム力・論理的思考力を育てるため競技プログラミングを続けております。（現在は茶コーダー）"
        href="https://atcoder.jp/users/Shunto09"
      />
    </section>
  );
}

function ExternalCard({
  icon,
  title,
  desc,
  href,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  href: string;
}) {
  return (
    <div className="bg-card border rounded-lg p-6 flex gap-4">
      <div className="text-primary">{icon}</div>
      <div>
        <h2 className="text-primary font-bold">{title}</h2>
        <p className="text-muted-foreground mb-2">{desc}</p>
        <a href={href} className="text-primary hover:underline">
          {href} →
        </a>
      </div>
    </div>
  );
}
