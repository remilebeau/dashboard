import { ArrowLeftCircle } from "lucide-react";
import Link from "next/link";

interface BackButtonProps {
  text: string;
  link: string;
}

export default function BackButton({ text, link }: BackButtonProps) {
  return (
    <Link
      href={link}
      className="mb-5 flex items-center gap-1 font-bold hover:underline"
    >
      <ArrowLeftCircle size={18} />
      {text}
    </Link>
  );
}
