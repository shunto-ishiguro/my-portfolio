import Link from 'next/link'
import { Github, ExternalLink, User } from 'lucide-react'

export default function TopSectionPage() {
  const currentYear = new Date().getFullYear()
  const age = currentYear - 2005

  const strengths = [
    { title: '開発スピード', description: '要件を素早く理解し、効率的に実装する能力' },
    { title: 'パフォーマンス志向', description: 'ユーザー体験を考慮した最適化を重視' },
    { title: '保守性・拡張性', description: 'コードの可読性と将来の変更を見据えた設計' },
    { title: 'デザイン', description: 'UI/UXを考慮した実装とデザインシステムの理解' },
    { title: 'セキュアな設計', description: '認証・認可を含むセキュリティを意識した開発' },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      {/* Profile */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-neutral-200 flex items-center justify-center">
          <User size={64} className="text-neutral-400" />
        </div>

        <div className="text-center md:text-left">
          <h1 className="mb-2">石黒 隼大</h1>
          <p className="text-neutral-600">
            {age}歳 / 公立はこだて未来大学
          </p>
        </div>
      </div>

      {/* Strengths */}
      <section className="mb-16">
        <h2 className="mb-8">強み</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {strengths.map((s, i) => (
            <div key={i} className="p-6 bg-white border rounded-lg">
              <h3 className="mb-2">{s.title}</h3>
              <p className="text-neutral-600">{s.description}</p>
            </div>
          ))}
        </div>
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
          icon={<Github size={32} />}
          title="GitHub"
          desc="コードの品質と設計思想をご覧いただけます"
          href="https://github.com/shunto-ishiguro"
        />
        <ExternalCard
          icon={<ExternalLink size={32} />}
          title="AtCoder"
          desc="アルゴリズム力・論理的思考力を育てるため競技プログラミングを続けております"
          href="#"
        />
      </section>
    </div>
  )
}

function NavCard({ href, title, desc }: { href: string; title: string; desc: string }) {
  return (
    <Link
      href={href}
      className="p-6 bg-white border rounded-lg hover:shadow-lg transition-all block"
    >
      <h3 className="mb-2">{title}</h3>
      <p className="text-neutral-600">{desc}</p>
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
    <div className="bg-white border rounded-lg p-6 flex gap-4">
      <div className="text-neutral-600">{icon}</div>
      <div>
        <h3>{title}</h3>
        <p className="text-neutral-600 mb-2">{desc}</p>
        <a href={href} className="hover:underline">
          {href} →
        </a>
      </div>
    </div>
  )
}
