import { Mail } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "石黒 隼大へのお問い合わせページです。",
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="mb-12 text-center text-primary font-bold">Contact</h1>

      <div className="flex justify-center">
        {/* Email */}
        <div className="bg-card border rounded-lg p-8 text-center hover:shadow-lg hover:border-primary/50 transition-all max-w-md w-full">
          <Mail size={48} className="mx-auto mb-4 text-primary" />
          <h2 className="mb-2 text-primary">Email</h2>
          <a
            href="mailto:shunto.ishiguro.job@gmail.com"
            className="text-primary hover:underline break-all transition-colors"
          >
            shunto.ishiguro.job@gmail.com
          </a>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground">
          ご連絡は、以下よりお願いいたします。
        </p>
      </div>
    </div>
  );
}
