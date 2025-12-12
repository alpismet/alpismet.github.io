import { useEffect, useState } from "preact/hooks";

const categories = [
  { id: "all", label: "Tümü" },
  { id: "game-dev", label: "Oyun & App" },
  { id: "3d-art", label: "3D & Animasyon" },
  { id: "graphic-design", label: "Grafik Tasarım" },
  { id: "physical-art", label: "Fiziksel Sanat" },
  { id: "video-production", label: "Video Prodüksiyon" },
  { id: "software", label: "Yazılım" },
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
          {cat.label}
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
          padding: 0.5rem 1.25rem;
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: transparent;
          color: #a1a1aa;
          cursor: pointer;
          font-family: var(--font-sans);
          font-weight: 500;
          transition: all 0.2s;
        }

        .filter-btn:hover {
          background: rgba(255, 255, 255, 0.05);
          color: white;
        }

        .filter-btn.active {
          background: var(--color-primary);
          border-color: var(--color-primary);
          color: white;
          box-shadow: 0 0 15px rgba(139, 92, 246, 0.3);
        }
      `}</style>
    </div>
  );
}
