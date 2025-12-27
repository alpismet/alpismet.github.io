import { useState } from "preact/hooks";

export default function InteractiveCounter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        padding: "2rem",
        background: "var(--color-white-03)",
        borderRadius: "12px",
        border: "1px solid var(--color-white-05)",
        textAlign: "center",
      }}
    >
      <h3 style={{ margin: "0 0 1rem 0", color: "var(--color-text-contrast)" }}>
        <i18n lang="en" data-i18n="counter-title">
          Interactive Island
        </i18n>
        <i18n lang="tr" hidden data-i18n="counter-title">
          Etkileşimli Ada
        </i18n>
      </h3>
      <p
        style={{
          fontSize: "0.9rem",
          color: "var(--color-text-dim)",
          marginBottom: "1.5rem",
        }}
      >
        <i18n lang="en" data-i18n="counter-body">
          This component runs with <strong>Preact</strong> and is hydrated on
          the page. Everything else is static HTML!
        </i18n>
        <i18n lang="tr" hidden data-i18n="counter-body">
          Bu bileşen <strong>Preact</strong> ile çalışıyor ve sayfaya "hydrate"
          edildi. Diğer her şey statik HTML!
        </i18n>
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
            background: "var(--color-ui-dark)",
            border: "none",
            color: "var(--color-white)",
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
            color: "var(--color-white)",
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
