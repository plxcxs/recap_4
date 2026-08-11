import "./Color.css";
import { useState } from "react";

export default function Color({ color, onDeleteColor }) {
    const [isVisible, setIsVisible] = useState(false);

    function handleDelete() {
        if (isVisible) {
            onDeleteColor(color.id);
        }
        setIsVisible(true);
    }

    function handleCancel() {
        setIsVisible(false);
    }

    return (
        <article>
            <div
                className="color-card"
                style={{
                    backgroundColor: color.hex,
                    color: color.contrastText,
                }}
            >
                <div>
                    <h2 className="color-card-headline"> hex: {color.hex}</h2>
                    <p>role: {color.role}</p>
                    <p>contrast: {color.contrastText}</p>
                </div>
                <div className={isVisible ? "" : "display-none"}>
                    <h3>delete color ?</h3>
                    <button onClick={handleCancel}>cancel</button>
                </div>

                <button onClick={handleDelete}>
                    {isVisible ? "Confirm Delete" : "Delete"}
                </button>
            </div>
        </article>
    );
}
