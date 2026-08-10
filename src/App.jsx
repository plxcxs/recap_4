import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/Color/ColorForm/ColorForm";
import { useState } from "react";
import { uid } from "uid";

function App() {
    const [initialColor, setInitialColor] = useState(initialColors);
    function handleAddColor(newColor) {
        setInitialColor([{ id: uid(), ...newColor }, ...initialColor]);
    }
    return (
        <>
            <h1>Theme Creator</h1>
            <ColorForm onSubmitColor={handleAddColor} />
            {initialColor.map((color) => {
                return <Color key={color.id} color={color} />;
            })}
        </>
    );
}

export default App;
