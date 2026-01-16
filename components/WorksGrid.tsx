'use client'

import Image from 'next/image'
import { Github, ExternalLink } from 'lucide-react'
import { Work } from '@/lib/works'
import { getTechIconUrl } from '@/lib/tech-icons'

export function WorksGrid({ works }: { works: Work[] }) {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <h1 className="mb-4 text-center text-primary font-bold">Works</h1>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                これまでに携わったプロジェクトや制作物の一覧です。
            </p>

            <div className="flex flex-col gap-8">
                {works.map(work => (
                    <div
                        key={work.id}
                        className="bg-card border rounded-xl overflow-hidden hover:shadow-xl hover:border-primary/50 transition-all p-8"
                    >
                            <h3 className="text-2xl mb-3 text-primary font-bold">{work.title}</h3>
                            <p className="text-muted-foreground mb-6 text-base leading-relaxed">
                                {work.description}
                            </p>

                            <div className="mb-6">
                                <p className="text-sm text-muted-foreground mb-2 font-medium">技術スタック</p>
                                <div className="flex flex-wrap gap-2">
                                {work.technologies.map((tech, index) => {
                                    const iconUrl = getTechIconUrl(tech)
                                    return (
                                        <span
                                            key={index}
                                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/15 text-primary rounded-md text-sm font-medium"
                                        >
                                            {iconUrl && (
                                                <Image
                                                    src={iconUrl}
                                                    alt={tech}
                                                    width={16}
                                                    height={16}
                                                    className="w-4 h-4"
                                                    unoptimized
                                                />
                                            )}
                                            {tech}
                                        </span>
                                    )
                                })}
                                </div>
                            </div>

                            {work.roles && work.roles.length > 0 && (
                                <div className="mb-6">
                                    <p className="text-sm text-muted-foreground mb-2 font-medium">役割</p>
                                    <div className="flex flex-wrap gap-2">
                                        {work.roles.map((role, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1.5 border border-primary/30 text-primary rounded-md text-sm font-medium"
                                            >
                                                {role}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div className="flex items-center gap-4">
                                {work.githubUrl && (
                                    <a
                                        href={work.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2.5 border rounded-lg hover:bg-primary/10 hover:border-primary/50 transition-colors"
                                    >
                                        <Github size={22} className="text-primary" />
                                    </a>
                                )}

                                {work.demoUrl && (
                                    <a
                                        href={work.demoUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2.5 border rounded-lg hover:bg-primary/10 hover:border-primary/50 transition-colors"
                                    >
                                        <ExternalLink size={22} className="text-primary" />
                                    </a>
                                )}
                            </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
