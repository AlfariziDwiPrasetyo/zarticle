"use client";

import "@blocknote/core/fonts/inter.css";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/shadcn/style.css";
import { useEffect, useRef, useState } from "react";

export default function BlockNote() {
  const editor = useCreateBlockNote();
  const [html, setHTML] = useState<string>("");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const onChange = async () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(async () => {
      const html = await editor.blocksToHTMLLossy(editor.document);
      setHTML(html);
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
