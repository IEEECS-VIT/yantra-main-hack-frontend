"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const BackButton = () => (
  <Link
    href="/"
    className="p-2 hover:bg-gray-100 rounded-full transition-colors"
  >
    <ArrowLeft className="h-6 w-6" />
  </Link>
);

export default BackButton;
