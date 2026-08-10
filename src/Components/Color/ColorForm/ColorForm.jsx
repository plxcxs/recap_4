import ColorInput from "../ColorInput/ColorInput";

export default function ColorForm({
    onSubmitColor,
    initialData = {
        role: "some color",
        hex: "#123456",
        contrastText: "#ffffff",
    },
}) {
    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        onSubmitColor(data);
    }
    return (
        <form className="color-form" onSubmit={handleSubmit}>
            <label htmlFor="role">
                role
                <br />
                <input
                    type="text"
                    name="role"
                    id="role"
                    defaultValue={initialData.role}
                />
            </label>

            <label htmlFor="hex">
                hex
                <br />
                <ColorInput id="hex" defaultValue={initialData.hex} />
            </label>

            <label htmlFor="contrastText">
                contrast
                <br />
                <ColorInput
                    id="contrastText"
                    defaultValue={initialData.contrastText}
                />
            </label>
            <button>Add Color</button>
        </form>
    );
}
