import "./Color.css";
import { useState } from "react";
import ColorForm from "./ColorForm/ColorForm";
import CopyToClipboard from "../CopyToClipboard/CopyToClipboard";
export default function Color({ color, onDeleteColor, onUpdateColor }) {
    const [isVisible, setIsVisible] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    function handleDelete() {
        if (isVisible) {
            onDeleteColor(color.id);
        }
        setIsVisible(true);
    }

    function handleCancel() {
        setIsVisible(false);
    }
    function handleEdit() {
        setIsEditing(!isEditing);
    }
    function handleUpdate(updatedColor) {
        onUpdateColor(updatedColor);
        setIsEditing(false);
    }
    console.log("Color prop:", color);
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
                    <CopyToClipboard hex={color.hex} />
                    <p>role: {color.role}</p>
                    <p>contrast: {color.contrastText}</p>
                    <p>
                        {color.contrastCheck?.overall === "Yup"
                            ? "✅ Contrast OK"
                            : "❌ Contrast insufficient"}
                    </p>
                </div>
                <ColorForm
                    color={color}
                    isEdit={isEditing}
                    className={isEditing ? "" : "display-none"}
                    onSubmitColor={handleUpdate}
                />
                <div className={isVisible ? "" : "display-none"}>
                    <h3>delete color ?</h3>
                    <button onClick={handleCancel}>cancel</button>
                </div>

                <button onClick={handleDelete}>
                    {isVisible ? "Confirm Delete" : "Delete"}
                </button>
                <button onClick={handleEdit}>
                    {isEditing ? "Cancel" : "Edit"}
                </button>
            </div>
        </article>
    );
}
