import { Mail } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <h1 className="mb-12 text-center">Contact</h1>

            <div className="flex justify-center">
                {/* Email */}
                <div className="bg-white border border-neutral-200 rounded-lg p-8 text-center hover:shadow-lg transition-shadow max-w-md w-full">
                    <Mail size={48} className="mx-auto mb-4 text-neutral-600" />
                    <h3 className="mb-2">Email</h3>
                    <a
                        href="mailto:shunto.ishiguro.job@gmail.com"
                        className="text-neutral-600 hover:text-neutral-900 break-all transition-colors"
                    >
                        shunto.ishiguro.job@gmail.com
                    </a>
                </div>
            </div>

            <div className="mt-12 text-center">
                <p className="text-neutral-600">
                    ご連絡は、以下よりお願いいたします。
                </p>
            </div>
        </div>
    );
}