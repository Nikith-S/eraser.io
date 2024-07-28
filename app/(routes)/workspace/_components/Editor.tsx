"use client";
import React, { useEffect } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";

const Editor = () => {
  useEffect(() => {
    initEditor();
  }, []);
  const initEditor = () => {
    const editor = new EditorJS({
      /**
       * Id of Element that should contain Editor instance
       */
      tools: {
        header: Header,
      },
      holder: "editorjs",
    });
  };

  return (
    <div>
      <div id="editorjs" className=""></div>
    </div>
  );
};

export default Editor;
