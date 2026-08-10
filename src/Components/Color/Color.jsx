import "./Color.css";

export default function Color({ color }) {
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
            </div>
        </article>
    );
}
