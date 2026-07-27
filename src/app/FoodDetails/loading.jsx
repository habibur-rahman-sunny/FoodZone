"use client";

import { PulseLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <PulseLoader color="#7c3aed" size={15} />
    </div>
  );
}