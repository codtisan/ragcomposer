"use client";
import { knowledgeBaseData } from "@/samples/knowledge-base";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Graph() {
  const knowledgeBases = knowledgeBaseData;
  const router = useRouter();

  useEffect(() => {
    router.push(`/graph/` + knowledgeBases[0]._id);
  }, []);
}
