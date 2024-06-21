import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <section className="flex">
        <div className="hidden min-h-screen w-80 md:block">
          <Sidebar />
        </div>
        <div className="w-full p-5 md:max-w-4xl">{children}</div>
      </section>
    </>
  );
}
