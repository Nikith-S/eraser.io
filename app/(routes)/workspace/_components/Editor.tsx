"use client";
import React, { useEffect } from "react";
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
import Warning from "@editorjs/warning";

const Editor = () => {
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
          warning: Warning,
        },
      });
    };

    initEditor();
  }, []);

  return (
    <div>
      <div id="editorjs" className=""></div>
    </div>
  );
};

export default Editor;
