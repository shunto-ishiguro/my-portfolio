import { Calendar } from 'lucide-react';

interface TimelineItem {
    date: string;
    title: string;
    description: string;
    type: 'education' | 'project' | 'internship' | 'hackathon';
}

export default function ExperiencePage() {
    const timeline: TimelineItem[] = [
        {
            date: '2024年4月',
            title: '公立はこだて未来大学 入学',
            description: 'コンピュータサイエンスを専攻',
            type: 'education',
        },
        {
            date: '2024年4月 - 2025年3月',
            title: '高度ICT演習はこんだてプロジェクト',
            description: '学習・設計補助・デザインを担当',
            type: 'project',
        },
        {
            date: '2025年3月',
            title: '美唄ハッカソン',
            description: 'デザイン・フロントエンド開発を担当',
            type: 'hackathon',
        },
        {
            date: '2024年10月',
            title: '競技プログラミング開始',
            description: 'AtCoderでアルゴリズム・データ構造の学習（茶コーダー）',
            type: 'education',
        },
        {
            date: '2025年10月',
            title: 'JPHACKS2025',
            description: 'デザイン・フロントエンド開発を担当',
            type: 'hackathon',
        },
        {
            date: '2025年11月 - 現在',
            title: '株式会社TAMABLE 長期インターン',
            description: 'フルスタックエンジニアとして開発に従事',
            type: 'internship',
        },
        {
            date: '2025年12月',
            title: 'P2HACKS2025',
            description: 'バックエンド・インフラを担当',
            type: 'hackathon',
        },
    ];

    const getTypeStyle = (type: TimelineItem['type']) => {
        switch (type) {
            case 'education':
                return 'bg-blue-100 text-blue-700 border-blue-200';
            case 'project':
                return 'bg-green-100 text-green-700 border-green-200';
            case 'internship':
                return 'bg-purple-100 text-purple-700 border-purple-200';
            case 'hackathon':
                return 'bg-orange-100 text-orange-700 border-orange-200';
            default:
                return 'bg-neutral-100 text-neutral-700 border-neutral-200';
        }
    };

    const getTypeLabel = (type: TimelineItem['type']) => {
        switch (type) {
            case 'education':
                return '教育';
            case 'project':
                return 'プロジェクト';
            case 'internship':
                return 'インターン';
            case 'hackathon':
                return 'ハッカソン';
            default:
                return '';
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <h1 className="mb-12 text-center">Experience</h1>

            <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-200 -ml-px hidden sm:block" />

                <div className="space-y-12">
                    {timeline.map((item, index) => (
                        <div
                            key={index}
                            className={`relative flex flex-col sm:flex-row gap-4 sm:gap-8 ${index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                                }`}
                        >
                            {/* Content */}
                            <div className={`flex-1 ${index % 2 === 0 ? 'sm:text-right' : 'sm:text-left'}`}>
                                <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex items-center gap-2 mb-2 sm:justify-end">
                                        <Calendar size={16} className="text-neutral-500" />
                                        <span className="text-neutral-600">{item.date}</span>
                                    </div>
                                    <h3 className="mb-2">{item.title}</h3>
                                    <p className="text-neutral-600 mb-3">{item.description}</p>
                                    <span className={`inline-block px-3 py-1 rounded-full border text-sm ${getTypeStyle(item.type)}`}>
                                        {getTypeLabel(item.type)}
                                    </span>
                                </div>
                            </div>

                            {/* Timeline Dot */}
                            <div className="absolute left-4 sm:left-1/2 top-6 w-3 h-3 bg-neutral-900 rounded-full -ml-1.5 hidden sm:block" />

                            {/* Spacer for alternating layout */}
                            <div className="flex-1 hidden sm:block" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
