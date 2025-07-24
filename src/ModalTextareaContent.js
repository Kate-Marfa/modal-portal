import React from "react";

export function ModalTextareaContent({ text, setText }) {
    return (
        <textarea
            rows={4}
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ width: '100%', padding: '8px' }}
            placeholder="Type your text here..."
        />
    )
}