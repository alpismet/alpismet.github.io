import { useEffect, useState } from "preact/hooks";

const categories = [
  { id: "all", label: { en: "All", tr: "Tümü" } },
  { id: "game-dev", label: { en: "Game & App", tr: "Oyun & App" } },
  { id: "3d-art", label: { en: "3D & Animation", tr: "3D & Animasyon" } },
  { id: "graphic-design", label: { en: "Graphic Design", tr: "Grafik Tasarım" } },
  { id: "physical-art", label: { en: "Physical Art", tr: "Fiziksel Sanat" } },
  {
    id: "video-production",
    label: { en: "Video Production", tr: "Video Prodüksiyon" },
  },
  { id: "software", label: { en: "Software", tr: "Yazılım" } },
];

export default function CategoryFilter() {
  const [activeCategory, setActiveCategory] = useState("all");

  useEffect(() => {
    // Sayfa yüklendiğinde URL'den hash okuyabiliriz (Opsiyonel)
    // Şimdilik sadece DOM manipülasyonu yapacağız.
    filterProjects(activeCategory);
  }, [activeCategory]);

  const filterProjects = (category) => {
    const projects = document.querySelectorAll(".project-item");

    projects.forEach((project) => {
      const projectCategory = project.getAttribute("data-category");

      if (category === "all" || projectCategory === category) {
        project.style.display = "block";
        // Animasyon eklenebilir
        project.style.opacity = "1";
        project.style.transform = "translateY(0)";
      } else {
        project.style.display = "none";
        project.style.opacity = "0";
        project.style.transform = "translateY(20px)";
      }
    });
  };

  return (
    <div className="category-filter">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`filter-btn ${activeCategory === cat.id ? "active" : ""}`}
          onClick={() => setActiveCategory(cat.id)}
        >
          <i18n lang="en" data-i18n={`category-${cat.id}`}>
            {cat.label.en}
          </i18n>
          <i18n lang="tr" hidden data-i18n={`category-${cat.id}`}>
            {cat.label.tr}
          </i18n>
        </button>
      ))}
      <style>{`
        .category-filter {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 3rem;
          justify-content: center;
        }
        
        .filter-btn {
          padding: 0.5rem 1.5rem;
          border-radius: 100px;
          border: 1px solid var(--color-white-10);
          background: var(--color-white-05);
          backdrop-filter: blur(10px);
          color: var(--color-text-strong);
          cursor: pointer;
          font-family: var(--font-sans);
          font-weight: 500;
          letter-spacing: 0.02em;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .filter-btn:hover {
          background: var(--color-white-15);
          border-color: var(--color-white-30);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px var(--color-black-20);
        }

        .filter-btn.active {
          background: linear-gradient(135deg, var(--color-aurora-1), var(--color-aurora-3));
          border-color: var(--color-transparent);
          color: var(--color-white);
          box-shadow: 0 0 20px var(--color-glow-category-filter);
        }
      `}</style>
    </div>
  );
}
