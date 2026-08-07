import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import "./App.css";

function App() {
    return (
        <>
            <h1>Theme Creator</h1>
            {initialColors.map((color) => {
                return (
                    <Card
                        key={color.id}
                        hex={color.hex}
                        role={color.role}
                        contrastText={color.contrastText}
                    />
                );
            })}

            <Card />
        </>
    );
}

/* const role = "role";
const hex = "hex";
const color = "red"; */
console.log("Hello friend !");
export default App;
export function Card({ hex, role, contrastText }) {
    return (
        <article>
            <a href="https://youtube.com"></a>
            <div
                id="color_card"
                style={{
                    backgroundColor: hex,
                    color: contrastText,
                    width: "200px",
                }}
            >
                {" "}
                {hex} {role}
            </div>
        </article>
    );
}
