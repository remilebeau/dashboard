import { ThemeToggle } from "@/components/ThemeToggle";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex h-[100vh] items-center justify-center">
      <div className="absolute bottom-5 right-5">
        <ThemeToggle />
      </div>
      {children}
    </div>
  );
}
