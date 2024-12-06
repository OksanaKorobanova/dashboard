import { Card, CardContent } from '@/components/ui/card';
import { LucideIcon } from 'lucide-react';

type DashboardCardProps = {
  title: string;
  count: number;
  icon: React.ReactElement<LucideIcon>;
};

const DashboardCard = ({ title, count, icon }: DashboardCardProps) => {
  return (
    <Card className='p-4 pb-0'>
      <CardContent>
        <h3 className='text-xl text-center mb-4 font-bold text-zinc-700 dark:text-zinc-200'>
          {title}
        </h3>
        <div className='flex gap-5 justify-center items-center'>
          {icon}
          <h3 className='text-5xl font-semibold text-zinc-900 dark:text-zinc-200'>
            {count}
          </h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
