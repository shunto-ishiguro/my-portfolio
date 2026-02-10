import { strengths } from "@/lib/strengths";

export function StrengthsSection() {
  return (
    <section className="mb-16 text-center">
      <h2 className="mb-8 text-primary font-bold">強み</h2>
      <ul className="space-y-4 sm:space-y-3 inline-block text-left">
        {strengths.map((s) => {
          const Icon = s.icon;
          return (
            <li
              key={s.title}
              className="flex items-start sm:items-center gap-3"
            >
              <Icon
                size={18}
                className="text-primary shrink-0 mt-0.5 sm:mt-0"
              />
              <span className="flex flex-col sm:flex-row sm:items-center">
                <span className="font-medium">{s.title}</span>
                <span className="text-muted-foreground text-sm sm:text-base sm:ml-2 sm:before:content-['—_']">
                  {s.description}
                </span>
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
