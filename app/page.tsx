import Link from 'next/link'
import Image from 'next/image'
import { Github, Zap, Gauge, Blocks, Palette, Shield, Box, Brain, Network, Cloud, LucideIcon } from 'lucide-react'

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
    { icon: Network, title: 'ネットワークの知識', description: 'TCP/IPやDNSなどネットワーク基盤への理解' },
  ]

  const interests: { icon: LucideIcon; title: string }[] = [
    { icon: Shield, title: 'サイバーセキュリティ' },
    { icon: Gauge, title: 'パフォーマンスチューニング' },
    { icon: Box, title: '3D技術' },
    { icon: Brain, title: 'AI技術' },
  ]

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
      {/* Profile */}
      <div className="flex flex-col items-center gap-8 mb-16">
        <Image
          src="/my-icon.png"
          alt="石黒 隼大"
          width={160}
          height={160}
          className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover"
          priority
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
            <span className="px-3 py-1 bg-primary/15 text-primary text-sm rounded-full text-center font-medium">モバイル開発</span>
            <span className="px-3 py-1 bg-primary/15 text-primary text-sm rounded-full text-center font-medium">フロントエンド開発</span>
            <span className="px-3 py-1 bg-primary/15 text-primary text-sm rounded-full text-center font-medium">バックエンド開発</span>
          </div>
        </div>
      </div>

      {/* About */}
      <section className="mb-16 max-w-2xl mx-auto text-center">
        <h2 className="mb-6 text-primary font-bold">About</h2>
        <p className="text-muted-foreground text-base sm:text-lg leading-loose tracking-wide text-balance">
          2005年生まれ、北海道出身の大学生です。コンピュータサイエンスの基礎を大切にしながら、サイバーセキュリティ、パフォーマンスチューニング、クラウド技術やアルゴリズムといった領域に強い関心を持ち日々学んでいます。技術の深い理解と幅広い実践力を兼ね備え、あらゆる課題を本質から解決できるフルスタックエンジニアを目指しています。
        </p>
      </section>

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

      {/* External Links */}
      <section className="border-t pt-8 grid md:grid-cols-2 gap-6">
        <ExternalCard
          icon={<Github size={28} />}
          title="GitHub"
          desc="私のGitHubをご覧いただけます"
          href="https://github.com/shunto-ishiguro"
        />
        <ExternalCard
          icon={<Image
            src="https://img.atcoder.jp/assets/top/img/logo_bk.svg"
            alt="AtCoder"
            width={100}
            height={48}
            className="h-12 w-auto"
            unoptimized
          />}
          title="AtCoder"
          desc="アルゴリズム力・論理的思考力を育てるため競技プログラミングを続けております。（現在は茶コーダー）"
          href="https://atcoder.jp/users/Shunto09"
        />
      </section>
    </div>
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
