'use client'

import Link from 'next/link'
import { Github, ExternalLink } from 'lucide-react'
import { Work } from '@/lib/works'

export function WorksGrid({ works }: { works: Work[] }) {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <h1 className="mb-4 text-center">Works</h1>
            <p className="text-center text-neutral-600 mb-12 max-w-2xl mx-auto">
                これまでに携わったプロジェクトや制作物の一覧です。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {works.map(work => (
                    <div
                        key={work.id}
                        className="bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
                    >
                        <div className="w-full h-48 bg-neutral-200 flex items-center justify-center">
                            <span className="text-neutral-400">Project Image</span>
                        </div>

                        <div className="p-6 flex-1 flex flex-col">
                            <h3 className="mb-2">{work.title}</h3>
                            <p className="text-neutral-600 mb-4 flex-1">
                                {work.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {work.technologies.slice(0, 3).map((tech, index) => (
                                    <span
                                        key={index}
                                        className="px-2 py-1 bg-neutral-100 text-neutral-700 rounded text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                                {work.technologies.length > 3 && (
                                    <span className="px-2 py-1 text-neutral-500 text-sm">
                                        +{work.technologies.length - 3}
                                    </span>
                                )}
                            </div>

                            <div className="flex items-center gap-3">
                                <Link
                                    href={`/works/${work.id}`}
                                    className="flex-1 px-4 py-2 bg-neutral-900 text-white rounded-lg hover:bg-neutral-700 transition-colors text-center"
                                >
                                    詳細を見る
                                </Link>

                                {work.githubUrl && (
                                    <a
                                        href={work.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 border border-neutral-300 rounded-lg hover:bg-neutral-50"
                                    >
                                        <Github size={20} />
                                    </a>
                                )}

                                {work.demoUrl && (
                                    <a
                                        href={work.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 border border-neutral-300 rounded-lg hover:bg-neutral-50"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
