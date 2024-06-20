import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Newspaper } from "lucide-react";

export default function DashboardCard() {
  return (
    <Card className="bg-secondary p-4 pb-0">
      <CardContent>
        <h3 className="text-3xl text-center mb-4 font-bold">Posts</h3>
        <div className="flex gap-5 justify-center items-center">
          <Newspaper className="h-20 w-20" />
          <h3 className="text-5xl font-semibold">200</h3>
        </div>
      </CardContent>
    </Card>
  );
}
