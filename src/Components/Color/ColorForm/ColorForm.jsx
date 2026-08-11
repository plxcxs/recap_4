import ColorInput from "../ColorInput/ColorInput";

export default function ColorForm({
    color = { role: "some color", hex: "#123456", contrastText: "#ffffff" },
    isEdit,
    className,
    onSubmitColor,
}) {
    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        onSubmitColor(isEdit ? { ...data, id: color.id } : data);
    }
    return (
        <form
            className={`color-form ${className ?? ""}`}
            onSubmit={handleSubmit}
        >
            <label htmlFor="role">
                role
                <br />
                <input
                    type="text"
                    name="role"
                    id="role"
                    defaultValue={color.role}
                />
            </label>

            <label htmlFor="hex">
                hex
                <br />
                <ColorInput id="hex" defaultValue={color.hex} />
            </label>

            <label htmlFor="contrastText">
                contrast
                <br />
                <ColorInput
                    id="contrastText"
                    defaultValue={color.contrastText}
                />
            </label>
            <button>{isEdit ? "Update Color" : "Add Color"}</button>
        </form>
    );
}
