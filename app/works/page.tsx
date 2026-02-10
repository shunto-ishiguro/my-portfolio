import { WorksGrid } from "@/components/WorksGrid";
import { worksData } from "@/lib/works";

export default function WorksPage() {
  return <WorksGrid works={worksData} />;
}
