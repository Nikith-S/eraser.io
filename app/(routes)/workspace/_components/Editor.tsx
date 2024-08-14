"use client";
import React, { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
// @ts-ignore
import Header from "@editorjs/header";
// @ts-ignore
import List from "@editorjs/list";
// @ts-ignore
import Checklist from "@editorjs/checklist";
// @ts-ignore
import Paragraph from "@editorjs/paragraph";
// @ts-ignore
import Warning from "@editorjs/warning"; // Import Warning if needed, otherwise remove

const Editor = ({ fileData, rawDocument }) => {
  const editorInstance = useRef(null);

  useEffect(() => {
    const initEditor = () => {
      const editor = new EditorJS({
        holder: "editorjs",
        tools: {
          header: {
            class: Header,
            shortcut: "CMD+SHIFT+H",
            config: {
              placeholder: "Enter a Header",
            },
          },
          list: {
            class: List,
            inlineToolbar: true,
            config: {
              defaultStyle: "unordered",
            },
          },
          checklist: {
            class: Checklist,
            inlineToolbar: true,
          },
          paragraph: Paragraph,
          warning: Warning, // Make sure this is intended or remove if not used
        },
        data: fileData?.document ? JSON.parse(fileData.document) : rawDocument,
      });

      editorInstance.current = editor;
    };

    initEditor();

    return () => {
      if (editorInstance.current) {
        editorInstance.current.destroy();
        editorInstance.current = null;
      }
    };
  }, [fileData, rawDocument]);

  return (
    <div>
      <div id="editorjs" className=""></div>
    </div>
  );
};

export default Editor;
