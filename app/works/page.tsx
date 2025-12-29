import { worksData } from '@/lib/works'
import { WorksGrid } from '@/components/WorksGrid'

export default function WorksPage() {
    return <WorksGrid works={worksData} />
}
