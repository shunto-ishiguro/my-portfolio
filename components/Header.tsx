'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export function Header() {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()

    const navItems = [
        { href: '/', label: 'Top' },
        { href: '/experience', label: 'Experience' },
        { href: '/skills', label: 'Skills' },
        { href: '/works', label: 'Works' },
        { href: '/contact', label: 'Contact' },
    ]

    return (
        <header className="fixed top-0 inset-x-0 z-50 bg-white border-b">
            <nav className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">
                <Link href="/" className="font-medium">
                    Shunto Ishiguro
                </Link>

                <div className="hidden md:flex gap-8">
                    {navItems.map(item => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={
                                pathname === item.href
                                    ? 'text-neutral-900'
                                    : 'text-neutral-500 hover:text-neutral-900'
                            }
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                <button className="md:hidden" onClick={() => setOpen(!open)}>
                    {open ? <X /> : <Menu />}
                </button>
            </nav>
        </header>
    )
}
