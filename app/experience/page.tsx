import { Calendar } from "lucide-react";

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  type: "education" | "project" | "internship" | "hackathon";
}

export default function ExperiencePage() {
  const timeline: TimelineItem[] = [
    {
      date: "2024年4月",
      title: "公立はこだて未来大学 入学",
      description: "コンピュータサイエンスを専攻",
      type: "education",
    },
    {
      date: "2024年4月 - 2025年3月",
      title: "高度ICT演習はこんだてプロジェクト",
      description:
        "実際にリリースしているアプリケーション「はこんだて」のメンバーとしてプロジェクトに携わった",
      type: "project",
    },
    {
      date: "2025年3月",
      title: "美唄ハッカソン",
      description: "フロントエンド開発を担当",
      type: "hackathon",
    },
    {
      date: "2024年10月",
      title: "競技プログラミング",
      description: "AtCoderでアルゴリズム・データ構造の学習を始める",
      type: "education",
    },
    {
      date: "2025年10月",
      title: "JPHACKS2025",
      description: "フロントエンド開発を担当",
      type: "hackathon",
    },
    {
      date: "2025年11月 - 現在",
      title: "株式会社TAMABLE 長期インターン",
      description: "エンジニアとして社内ツールやECサイトの開発に携わる",
      type: "internship",
    },
    {
      date: "2025年12月",
      title: "P2HACKS2025",
      description: "バックエンド・インフラを担当",
      type: "hackathon",
    },
  ];

  const getTypeStyle = (type: TimelineItem["type"]) => {
    switch (type) {
      case "education":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "project":
        return "bg-green-100 text-green-700 border-green-200";
      case "internship":
        return "bg-purple-100 text-purple-700 border-purple-200";
      case "hackathon":
        return "bg-orange-100 text-orange-700 border-orange-200";
      default:
        return "bg-neutral-100 text-neutral-700 border-neutral-200";
    }
  };

  const getTypeLabel = (type: TimelineItem["type"]) => {
    switch (type) {
      case "education":
        return "教育";
      case "project":
        return "プロジェクト";
      case "internship":
        return "インターン";
      case "hackathon":
        return "ハッカソン";
      default:
        return "";
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="mb-12 text-center text-primary font-bold">Experience</h1>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-[18px] sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-primary/40 sm:-ml-px" />

        <div className="space-y-6 sm:space-y-12">
          {timeline.map((item, index) => (
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
                  <h3 className="mb-1.5 text-base sm:text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                    {item.description}
                  </p>
                  <span
                    className={`inline-block px-2.5 py-0.5 rounded-full border text-xs font-medium ${getTypeStyle(item.type)}`}
                  >
                    {getTypeLabel(item.type)}
                  </span>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="flex-1 hidden sm:block" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
