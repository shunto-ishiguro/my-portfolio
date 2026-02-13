import type { Metadata } from "next";
import Image from "next/image";
import { skillCategories } from "@/lib/skills";
import { getTechIconUrl } from "@/lib/tech-icons";

export const metadata: Metadata = {
  title: "Skills",
  description: "石黒 隼大の技術スキル一覧です。",
};

export default function SkillsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="mb-12 text-center text-primary font-bold">Skills</h1>

      <div className="space-y-6">
        {skillCategories.map((category) => (
          <div
            key={category.category}
            className="bg-card border rounded-lg p-6 hover:shadow-lg hover:border-primary/50 transition-all"
          >
            <h2 className="mb-4 pb-3 border-b border-primary/30 font-semibold text-primary">
              {category.category}
            </h2>

            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => {
                const iconUrl = getTechIconUrl(skill);
                return (
                  <div
                    key={skill}
                    className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-primary/10 transition-colors"
                  >
                    <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                      {iconUrl && (
                        <Image
                          src={iconUrl}
                          alt={skill}
                          title={skill}
                          width={24}
                          height={24}
                          className="w-6 h-6 object-contain"
                          unoptimized
                        />
                      )}
                    </div>
                    <span className="text-foreground">{skill}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 p-6 bg-primary/10 border border-primary/30 rounded-lg text-center">
        <p className="text-foreground">
          これらの技術を活用し、幅広く対応可能です。
          <br />
          常に新しい技術も学び続けます。
        </p>
      </div>
    </div>
  );
}
