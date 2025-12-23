import { useState } from "preact/hooks";

export default function InteractiveCounter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        padding: "2rem",
        background: "rgba(255, 255, 255, 0.03)",
        borderRadius: "12px",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        textAlign: "center",
      }}
    >
      <h3 style={{ margin: "0 0 1rem 0", color: "#e4e4e7" }}>
        Interactive Island
      </h3>
      <p
        style={{ fontSize: "0.9rem", color: "#a1a1aa", marginBottom: "1.5rem" }}
      >
        Bu bileşen <strong>Preact</strong> ile çalışıyor ve sayfaya "hydrate"
        edildi. Diğer her şey statik HTML!
      </p>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <button
          onClick={() => setCount(count - 1)}
          style={{
            padding: "0.5rem 1rem",
            background: "#27272a",
            border: "none",
            color: "white",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          -
        </button>

        <span
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            fontFamily: "monospace",
            color: "var(--color-aurora-2)",
            minWidth: "3ch",
          }}
        >
          {count}
        </span>

        <button
          onClick={() => setCount(count + 1)}
          style={{
            padding: "0.5rem 1rem",
            background: "var(--color-aurora-2)",
            border: "none",
            color: "white",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
