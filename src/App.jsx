import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/Color/ColorForm/ColorForm";
import { useState } from "react";
import { uid } from "uid";

function App() {
    const [colors, setColor] = useState(initialColors);
    function handleAddColor(newColor) {
        setColor([{ id: uid(), ...newColor }, ...colors]);
    }
    return (
        <>
            <h1>Theme Creator</h1>
            <ColorForm onSubmitColor={handleAddColor} />
            {colors.map((color) => {
                return <Color key={color.id} color={color} />;
            })}
        </>
    );
}

export default App;
