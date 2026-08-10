import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/Color/ColorForm/ColorForm";
import { useState } from "react";
import { uid } from "uid";

function App() {
    const [colors, setColor] = useState(initialColors);
    function handleDeleteColor(idToDelete) {
        setColor(colors.filter((color) => color.id !== idToDelete));
    }
    function handleAddColor(newColor) {
        setColor([{ id: uid(), ...newColor }, ...colors]);
    }
    if (colors.length === 0) {
        return (
            <>
                <h1>Theme Creator</h1>
                <ColorForm onSubmitColor={handleAddColor} />
                {colors.map((color) => {
                    return (
                        <Color
                            key={color.id}
                            color={color}
                            onDeleteColor={handleDeleteColor}
                        />
                    );
                })}
                <h3>Please choose a color</h3>
            </>
        );
    }
    return (
        <>
            <h1>Theme Creator</h1>
            <ColorForm onSubmitColor={handleAddColor} />
            {colors.map((color) => {
                return (
                    <Color
                        key={color.id}
                        color={color}
                        onDeleteColor={handleDeleteColor}
                    />
                );
            })}
        </>
    );
}

export default App;
