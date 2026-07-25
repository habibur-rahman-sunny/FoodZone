import { LoaderCircle } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <LoaderCircle className="w-14 h-14 text-violet-600 animate-spin" />
    </div>
  );
}