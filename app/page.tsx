import Link from 'next/link'
import { Github, Zap, Gauge, Blocks, Palette, Shield, LucideIcon } from 'lucide-react'

export default function TopSectionPage() {
  const today = new Date()
  const birthDate = new Date(2005, 4, 1) // 2005年5月生まれ（月は0始まり）
  let age = today.getFullYear() - birthDate.getFullYear()
  const monthDiff = today.getMonth() - birthDate.getMonth()
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--
  }

  const strengths: { icon: LucideIcon; title: string; description: string }[] = [
    { icon: Zap, title: '開発スピード', description: '要件を素早く理解し、効率的に実装する能力' },
    { icon: Gauge, title: 'パフォーマンス志向', description: 'ユーザー体験を考慮した最適化を重視' },
    { icon: Blocks, title: '保守性・拡張性', description: 'コードの可読性と将来の変更を見据えた設計' },
    { icon: Palette, title: 'デザイン', description: 'UI/UXを考慮した実装とデザインシステムの理解' },
    { icon: Shield, title: 'セキュアな設計', description: '認証・認可を含むセキュリティを意識した開発' },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      {/* Profile */}
      <div className="flex flex-col items-center gap-8 mb-16">
        <img
          src="/my-icon.png"
          alt="石黒 隼大"
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover"
        />

        <div className="text-center">
          <h1 className="mb-2">石黒 隼大</h1>
          <div className="text-muted-foreground mb-4 space-y-1.5">
            <p>{age}歳 / 2028卒</p>
            <p>公立はこだて未来大学</p>
            <p>システム情報科学部 情報アーキテクチャ学科</p>
          </div>
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center gap-2">
            <span className="px-3 py-1 bg-primary/15 text-primary text-sm rounded-full text-center font-medium">Web開発</span>
            <span className="px-3 py-1 bg-primary/15 text-primary text-sm rounded-full text-center font-medium">モバイルアプリ開発</span>
            <span className="px-3 py-1 bg-primary/15 text-primary text-sm rounded-full text-center font-medium">フロントエンド</span>
            <span className="px-3 py-1 bg-primary/15 text-primary text-sm rounded-full text-center font-medium">バックエンド</span>
          </div>
        </div>
      </div>

      {/* Strengths */}
      <section className="mb-16 text-center">
        <h2 className="mb-8 text-primary font-bold">強み</h2>
        <ul className="space-y-4 sm:space-y-3 inline-block text-left">
          {strengths.map((s, i) => {
            const Icon = s.icon
            return (
              <li key={i} className="flex items-start sm:items-center gap-3">
                <Icon size={18} className="text-primary shrink-0 mt-0.5 sm:mt-0" />
                <span className="flex flex-col sm:flex-row sm:items-center">
                  <span className="font-medium">{s.title}</span>
                  <span className="text-muted-foreground text-sm sm:text-base sm:ml-2 sm:before:content-['—_']">{s.description}</span>
                </span>
              </li>
            )
          })}
        </ul>
      </section>

      {/* Navigation */}
      <section className="mb-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <NavCard href="/experience" title="Experience" desc="経歴・プロジェクト履歴" />
        <NavCard href="/skills" title="Skills" desc="技術スタック一覧" />
        <NavCard href="/works" title="Works" desc="制作物・実績" />
        <NavCard href="/contact" title="Contact" desc="お問い合わせ" />
      </section>

      {/* External Links */}
      <section className="border-t pt-8 grid md:grid-cols-2 gap-6">
        <ExternalCard
          icon={<Github size={28} />}
          title="GitHub"
          desc="私のGitHubをご覧いただけます"
          href="https://github.com/shunto-ishiguro"
        />
        <ExternalCard
          icon={<img
            src="https://img.atcoder.jp/assets/top/img/logo_bk.svg"
            alt="AtCoder"
            className="h-12 w-auto" />}
          title="AtCoder"
          desc="アルゴリズム力・論理的思考力を育てるため競技プログラミングを続けております"
          href="https://atcoder.jp/users/Shunto09"
        />
      </section>
    </div>
  )
}

function NavCard({ href, title, desc }: { href: string; title: string; desc: string }) {
  return (
    <Link
      href={href}
      className="p-6 bg-card border rounded-lg hover:shadow-lg hover:border-primary/50 transition-all block"
    >
      <h3 className="mb-2 text-primary font-bold">{title}</h3>
      <p className="text-muted-foreground">{desc}</p>
    </Link>
  )
}

function ExternalCard({
  icon,
  title,
  desc,
  href,
}: {
  icon: React.ReactNode
  title: string
  desc: string
  href: string
}) {
  return (
    <div className="bg-card border rounded-lg p-6 flex gap-4">
      <div className="text-primary">{icon}</div>
      <div>
        <h3 className="text-primary font-bold">{title}</h3>
        <p className="text-muted-foreground mb-2">{desc}</p>
        <a href={href} className="text-primary hover:underline">
          {href} →
        </a>
      </div>
    </div>
  )
}
