import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/Color/ColorForm/ColorForm";
import { useState } from "react";
function App() {
    const [initialColor, setInitialColor] = useState(initialColors);
    function handleSubmitColor(newColor) {
        setInitialColor([newColor, ...initialColor]);
    }
    return (
        <>
            <h1>Theme Creator</h1>
            <ColorForm onSubmitColor={handleSubmitColor} />
            {initialColor.map((color) => {
                return <Color key={color.id} color={color} />;
            })}
        </>
    );
}

export default App;
