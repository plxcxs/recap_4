import "./Color.css";

export default function Color({ color }) {
    return (
        <article>
            <div
                className="color-card"
                style={{
                    backgroundColor: color.hex,
                    color: color.contrastText,
                    width: "200px",
                }}
            >
                <span>
                    <div className="color-card-headline"> hex: {color.hex}</div>
                    <div>role: {color.role}</div>{" "}
                    <div>contrast: {color.contrastText}</div>
                </span>{" "}
            </div>
        </article>
    );
}
