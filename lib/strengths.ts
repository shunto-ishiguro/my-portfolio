import {
  Blocks,
  Gauge,
  type LucideIcon,
  Network,
  Palette,
  Shield,
  Zap,
} from "lucide-react";

export interface Strength {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const strengths: Strength[] = [
  {
    icon: Zap,
    title: "開発スピード",
    description: "要件を素早く理解し、効率的に実装する能力",
  },
  {
    icon: Gauge,
    title: "パフォーマンス志向",
    description: "ユーザー体験を考慮した最適化を重視",
  },
  {
    icon: Blocks,
    title: "保守性・拡張性",
    description: "コードの可読性と将来の変更を見据えた設計",
  },
  {
    icon: Palette,
    title: "デザイン",
    description: "UI/UXを考慮した実装とデザインシステムの理解",
  },
  {
    icon: Shield,
    title: "セキュアな設計",
    description: "認証・認可を含むセキュリティを意識した開発",
  },
  {
    icon: Network,
    title: "ネットワークの知識",
    description: "TCP/IPやDNSなどネットワーク基盤への理解",
  },
];
