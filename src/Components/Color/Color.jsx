import "./Color.css";
import { useState } from "react";
import ColorForm from "./ColorForm/ColorForm";
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
                {!isEditing && <button onClick={handleEdit}>Edit</button>}
            </div>
        </article>
    );
}
