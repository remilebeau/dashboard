import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { LucideIcon } from "lucide-react";

type DashboardCardProps = {
  title: string;
  count: number;
  icon: React.ReactElement<LucideIcon>;
};

export default function DashboardCard({
  title,
  count,
  icon,
}: DashboardCardProps) {
  return (
    <Card className="bg-secondary p-4 pb-0">
      <CardContent>
        <h3 className="mb-4 text-center text-3xl font-bold">{title}</h3>
        <div className="flex items-center justify-center gap-5">
          {icon}
          <h3 className="text-5xl font-semibold">{count}</h3>
        </div>
      </CardContent>
    </Card>
  );
}
