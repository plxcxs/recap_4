import { useState, useEffect } from "react";
async function copy(text) {
    try {
        await navigator.clipboard.writeText(text);
    } catch (error) {
        console.error(error.message);
    }
}

export default function CopyToClipboard({ color }) {
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        if (showMessage) {
            setTimeout(() => {
                setShowMessage(false);
            }, 3000);
        }
    }, [showMessage]);

    return (
        <button
            onClick={() => {
                copy(color);
                setShowMessage(true);
            }}
        >
            {showMessage ? "Color has been copied" : "Copy Color"}
        </button>
    );
}
