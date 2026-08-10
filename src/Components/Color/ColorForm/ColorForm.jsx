import ColorInput from "../ColorInput/ColorInput";

export default function ColorForm({
    onSubmitColor,
    initialData = {
        role: "some color",
        hex: "#123456",
        contrastText: "#ffffff",
    },
}) {
    function handleSubmit() {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        onSubmitColor(data);
    }
    return (
        <form className="colorForm" onSubmit={handleSubmit}>
            <label htmlFor="role">
                role
                <br />
                <input type="text" name="role" id="role" />
            </label>

            <label htmlFor="hex">
                primary
                <br />
                <ColorInput id="hex" defaultValue={initialData.hex} />
                {/*     <input type="text" id="hex" />
                <input type="color" name="" id="" /> */}
            </label>

            <label htmlFor="contrast">
                contrast
                <br />
                <ColorInput
                    id="contrastText"
                    defaultValue={initialData.contrastText}
                />
                {/* <input type="text" />
                <input type="color" name="" id="" /> */}
            </label>
            <button>Add Color</button>
        </form>
    );
}
