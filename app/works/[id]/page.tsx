import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
    ArrowLeft,
    Github,
    ExternalLink,
    Database,
    Lock,
    Workflow,
} from 'lucide-react'
import { worksData } from '@/lib/works'

export default function WorkDetailPage({
    params,
}: {
    params: { id: string }
}) {
    const work = worksData.find(w => w.id === params.id)
    if (!work) notFound()

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <Link
                href="/works"
                className="inline-flex items-center gap-2 text-neutral-600 hover:text-neutral-900 mb-8"
            >
                <ArrowLeft size={20} />
                Works に戻る
            </Link>

            <div className="mb-12">
                <h1 className="mb-4">{work.title}</h1>
                <p className="text-neutral-600 mb-6">{work.description}</p>

                <div className="flex flex-wrap gap-3">
                    {work.githubUrl && (
                        <a
                            href={work.githubUrl}
                            target="_blank"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white rounded-lg"
                        >
                            <Github size={20} />
                            GitHub
                        </a>
                    )}
                    {work.demoUrl && (
                        <a
                            href={work.demoUrl}
                            target="_blank"
                            className="inline-flex items-center gap-2 px-4 py-2 border rounded-lg"
                        >
                            <ExternalLink size={20} />
                            デモサイト
                        </a>
                    )}
                </div>
            </div>

            <section className="mb-12">
                <h2 className="mb-4">技術スタック</h2>
                <div className="flex flex-wrap gap-3">
                    {work.technologies.map(tech => (
                        <span
                            key={tech}
                            className="px-4 py-2 bg-neutral-100 rounded-lg"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white border rounded-lg p-6 text-center">
                    <Workflow className="mx-auto mb-4 text-neutral-400" size={48} />
                    <h3>認証フロー</h3>
                </div>
                <div className="bg-white border rounded-lg p-6 text-center">
                    <Database className="mx-auto mb-4 text-neutral-400" size={48} />
                    <h3>DB設計</h3>
                </div>
                <div className="bg-white border rounded-lg p-6 text-center">
                    <Lock className="mx-auto mb-4 text-neutral-400" size={48} />
                    <h3>セキュリティ</h3>
                </div>
            </section>
        </div>
    )
}
