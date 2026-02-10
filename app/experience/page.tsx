import { Calendar } from "lucide-react";
import type { Metadata } from "next";
import { timeline, typeConfig } from "@/lib/experience";

export const metadata: Metadata = {
  title: "Experience",
  description: "石黒 隼大の経歴・活動実績です。",
};

export default function ExperiencePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="mb-12 text-center text-primary font-bold">Experience</h1>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-[18px] sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-primary/40 sm:-ml-px" />

        <div className="space-y-6 sm:space-y-12">
          {timeline.map((item, index) => {
            const config = typeConfig[item.type];
            return (
              <div
                key={item.title}
                className={`relative flex flex-row sm:gap-8 ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-3 sm:left-1/2 top-5 sm:top-6 w-3 h-3 rounded-full sm:-ml-1.5 bg-primary ring-4 ring-background" />

                {/* Content */}
                <div
                  className={`flex-1 pl-10 sm:pl-0 ${index % 2 === 0 ? "sm:text-right" : "sm:text-left"}`}
                >
                  <div className="bg-card border rounded-xl p-4 sm:p-6 shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-200">
                    <div
                      className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"}`}
                    >
                      <Calendar size={14} className="text-primary" />
                      <span className="text-muted-foreground text-xs sm:text-sm font-medium">
                        {item.date}
                      </span>
                    </div>
                    <h2 className="mb-1.5 text-base sm:text-lg font-semibold text-foreground">
                      {item.title}
                    </h2>
                    <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                      {item.description}
                    </p>
                    <span
                      className={`inline-block px-2.5 py-0.5 rounded-full border text-xs font-medium ${config.style}`}
                    >
                      {config.label}
                    </span>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden sm:block" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
