"use client";

import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/shadcn/style.css";
import { useEffect, useRef, useState } from "react";

type BlockNoteProps = {
  onContentChange: (content: string) => void;
};

export default function BlockNote({ onContentChange }: BlockNoteProps) {
  const editor = useCreateBlockNote();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const onChange = async () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(async () => {
      const content = await editor.blocksToHTMLLossy(editor.document);
      onContentChange(content);
    }, 500);
  };

  useEffect(() => {
    onChange();
  }, []);

  return (
    <BlockNoteView
      className="px-1"
      editor={editor}
      theme="light"
      onChange={onChange}
      shadCNComponents={{}}
    />
  );
}
