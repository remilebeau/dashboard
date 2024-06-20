import DashboardCard from "@/components/dashboard/DashboardCard";
import { Folder, MessageCircle, Newspaper, User } from "lucide-react";
import PostsTable from "@/components/posts/PostsTable";
export default function Home() {
  return (
    <>
      <article className="mb-5 flex flex-col justify-between gap-5 md:flex-row">
        <DashboardCard
          title="Posts"
          count={100}
          icon={<Newspaper className="h-20 w-20" />}
        />
        <DashboardCard
          title="Categories"
          count={12}
          icon={<Folder className="h-20 w-20" />}
        />
        <DashboardCard
          title="Users"
          count={750}
          icon={<User className="h-20 w-20" />}
        />
        <DashboardCard
          title="Comments"
          count={1200}
          icon={<MessageCircle className="h-20 w-20" />}
        />
      </article>

      <PostsTable title="Latest Posts" limit={5} />
    </>
  );
}
