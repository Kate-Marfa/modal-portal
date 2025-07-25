import React from "react";

export function ModalTextareaContent({ text, setText }) {
  return (
    <textarea
      rows={4}
      colums={5}
      value={text}
      onChange={(e) => setText(e.target.value)}
      style={{ width: "100%", padding: "8px", width: "280px" }}
      placeholder="Type your text here..."
    />
  );
}
