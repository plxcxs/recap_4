import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";
import ColorForm from "./Components/Color/ColorForm/ColorForm";

import { uid } from "uid";
import useLocalStorageState from "use-local-storage-state";

function App() {
    const [colors, setColor] = useLocalStorageState("colors", {
        defaultValue: initialColors,
    });
    function handleDeleteColor(idToDelete) {
        setColor(colors.filter((color) => color.id !== idToDelete));
    }
    function handleAddColor(newColor) {
        setColor([{ id: uid(), ...newColor }, ...colors]);
    }
    function handleUpdateColor(updatedColor) {
        setColor(
            colors.map((currentColor) => {
                return currentColor.id === updatedColor.id
                    ? { ...currentColor, ...updatedColor }
                    : currentColor;
            }),
        );
    }

    return (
        <>
            <h1>Theme Creator</h1>
            <ColorForm onSubmitColor={handleAddColor} />
            {colors.length === 0 && <h3>Please choose a color</h3>}
            {colors.map((color) => {
                return (
                    <Color
                        key={color.id}
                        color={color}
                        onDeleteColor={handleDeleteColor}
                        onUpdateColor={handleUpdateColor}
                    />
                );
            })}
        </>
    );
}

export default App;
