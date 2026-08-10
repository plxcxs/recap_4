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
                    <div className="color-card-headline"> hex: {color.hex}</div>
                    <div>role: {color.role}</div>{" "}
                    <div>contrast: {color.contrastText}</div>
                </div>
            </div>
        </article>
    );
}
