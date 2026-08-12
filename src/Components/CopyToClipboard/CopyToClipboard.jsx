import { useState, useEffect } from "react";

export default function CopyToClipboard({ hex }) {
    const [showMessage, setShowMessage] = useState(false);
    async function copy(text) {
        try {
            await navigator.clipboard.writeText(text);
            setShowMessage(true);
        } catch (error) {
            console.error(error.message);
        }
    }

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
                copy(hex);
            }}
        >
            {showMessage ? "Color has been copied" : "Copy Color"}
        </button>
    );
}
