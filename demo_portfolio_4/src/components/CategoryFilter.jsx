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
          padding: 0.5rem 1.5rem;
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          color: #e2e8f0;
          cursor: pointer;
          font-family: var(--font-sans);
          font-weight: 500;
          letter-spacing: 0.02em;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .filter-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }

        .filter-btn.active {
          background: linear-gradient(135deg, var(--color-aurora-1), var(--color-aurora-3));
          border-color: transparent;
          color: white;
          box-shadow: 0 0 20px rgba(var(--color-aurora-1-rgb), 0.4);
        }
      `}</style>
    </div>
  );
}
