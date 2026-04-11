import { useState } from "react";
import { motion } from "framer-motion";
import { handleNavigationClick } from "../utils/navigation";

const categories = [
  {
    id: "all",
    label: "All",
    description:
      "A quick look across steel structures, roofing, flooring, fabrication, and civil execution work.",
  },
  {
    id: "peb",
    label: "PEB Structures",
    description:
      "Pre-engineered building frames built for long spans, faster erection, and efficient site execution.",
  },
  {
    id: "roofing",
    label: "Metal Roofing",
    description:
      "Roofing systems detailed for weather protection, clean finishes, and durable industrial coverage.",
  },
  {
    id: "vdf",
    label: "VDF Flooring",
    description:
      "Flatness-focused flooring work planned for heavy use, movement efficiency, and dependable finish quality.",
  },
  {
    id: "building",
    label: "Building Fabrication",
    description:
      "Fabrication-led building packages prepared for practical assembly, structural clarity, and execution speed.",
  },
  {
    id: "civil",
    label: "Civil Construction",
    description:
      "Ground-up civil work aligned with the structural package to keep project delivery coordinated end to end.",
  },
];

const projects = [
  {
    title: "PEB Frame Installation",
    category: "peb",
    image: "/projects/peb1.jpg",
    stage: "Steel structure execution",
    detail: "Clear-span primary framing",
  },
  {
    title: "Industrial Shed Assembly",
    category: "peb",
    image: "/projects/peb2.jpg",
    stage: "On-site erection progress",
    detail: "Fast-track structural package",
  },
  {
    title: "Standing Seam Roofing",
    category: "roofing",
    image: "/projects/metal1.jpg",
    stage: "Roof enclosure work",
    detail: "Weather-ready roof system",
  },
  {
    title: "Industrial Roofing Bay",
    category: "roofing",
    image: "/projects/metal2.jpg",
    stage: "Sheeting and detailing",
    detail: "Wide coverage installation",
  },
  {
    title: "VDF Floor Pour",
    category: "vdf",
    image: "/projects/vdf1.jpg",
    stage: "Flooring execution",
    detail: "Level industrial slab finish",
  },
  {
    title: "Floor Finishing Zone",
    category: "vdf",
    image: "/projects/vdf2.jpg",
    stage: "Surface completion work",
    detail: "High-utility work surface",
  },
  {
    title: "Civil Foundation Works",
    category: "civil",
    image: "/projects/civil1.jpg",
    stage: "Site preparation and base works",
    detail: "Coordinated groundwork package",
  },
  {
    title: "Core Civil Progress",
    category: "civil",
    image: "/projects/civil2.jpg",
    stage: "Execution milestone",
    detail: "Project-ready support systems",
  },
  {
    title: "Fabrication Bay Exterior",
    category: "building",
    image: "/projects/feb1.jpg",
    stage: "Fabricated building delivery",
    detail: "Integrated steel envelope",
  },
  {
    title: "Fabricated Structure Detail",
    category: "building",
    image: "/projects/feb2.jpg",
    stage: "Structural package review",
    detail: "Built-up frame components",
  },
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const visibleProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const activeCategoryData =
    categories.find((category) => category.id === activeCategory) ??
    categories[0];
  const showFeaturedLayout =
    activeCategory === "all" && visibleProjects.length > 3;

  return (
    <section
      className="bg-[var(--color-steel-50)] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16"
      id="projects"
    >
      <motion.div
        animate={{ opacity: 1, y: 0 }}
        className="rounded-[32px] border border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(248,251,255,1),rgba(237,243,248,0.94))] px-5 py-8 shadow-[0_32px_80px_-52px_rgba(10,34,68,0.18)] sm:px-8 sm:py-10 lg:px-10 lg:py-12"
        initial={{ opacity: 0, y: 28 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.18 }}
      >
        <div className="grid gap-10 lg:grid-cols-[minmax(280px,0.78fr)_minmax(0,1.22fr)] lg:gap-12">
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-brand-gold)]">
                Project Gallery
              </p>
              <h2 className="mt-4 max-w-[11ch] text-4xl font-semibold leading-[0.95] tracking-[-0.06em] text-[var(--color-brand-blue-deep)] sm:text-5xl">
                A filtered view of recent project work
              </h2>
              <p className="mt-6 max-w-[34ch] text-base leading-7 text-[var(--color-text-muted)] sm:text-lg">
                Inspired by the existing Westeel projects page, this section
                brings the same category-led browsing into the homepage while
                keeping the visual system consistent with the rest of the site.
              </p>
            </div>

            <div className="mt-8 rounded-[28px] border border-[rgba(10,34,68,0.1)] bg-[linear-gradient(180deg,rgba(10,34,68,1),rgba(13,36,71,0.96))] p-6 text-white shadow-[0_30px_64px_-44px_rgba(10,34,68,0.4)]">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[rgba(242,192,110,0.78)]">
                    Active Category
                  </p>
                  <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[var(--color-steel-50)]">
                    {activeCategoryData.label}
                  </p>
                </div>
                <span className="text-4xl font-black tracking-[-0.08em] text-[var(--color-brand-gold)]">
                  {String(visibleProjects.length).padStart(2, "0")}
                </span>
              </div>

              <p className="mt-5 max-w-[30ch] text-sm leading-7 text-[rgba(238,244,250,0.74)] sm:text-[0.98rem]">
                {activeCategoryData.description}
              </p>

              <a
                className="mt-6 inline-flex items-center rounded-full bg-[var(--color-brand-gold)] px-5 py-3 text-sm font-semibold text-[var(--color-brand-blue-deep)] transition hover:bg-[var(--color-brand-gold-soft)]"
                href="/#contact"
                onClick={(event) => handleNavigationClick(event, "/#contact")}
              >
                Discuss a similar project
              </a>
            </div>
          </div>

          <div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => {
                const isActive = category.id === activeCategory;

                return (
                  <button
                    key={category.id}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition sm:px-5 ${
                      isActive
                        ? "border-[var(--color-brand-blue-deep)] bg-[var(--color-brand-blue-deep)] text-white shadow-[0_18px_32px_-24px_rgba(10,34,68,0.36)]"
                        : "border-[rgba(10,34,68,0.12)] bg-white text-[var(--color-text-muted)] hover:border-[rgba(226,139,23,0.34)] hover:text-[var(--color-brand-blue-deep)]"
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                    type="button"
                  >
                    {category.label}
                  </button>
                );
              })}
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {visibleProjects.map((project, index) => (
                <motion.article
                  key={`${activeCategory}-${project.title}`}
                  animate={{ opacity: 1, y: 0 }}
                  className={`group relative overflow-hidden rounded-[28px] border border-[rgba(10,34,68,0.1)] bg-[var(--color-brand-blue-deep)] shadow-[0_28px_64px_-44px_rgba(10,34,68,0.34)] ${
                    showFeaturedLayout && index === 0
                      ? "sm:col-span-2 xl:col-span-2 xl:row-span-2"
                      : ""
                  }`}
                  initial={{ opacity: 0, y: 18 }}
                  layout
                  transition={{
                    duration: 0.35,
                    ease: "easeOut",
                    delay: index * 0.04,
                  }}
                >
                  <div
                    className={`relative w-full ${
                      showFeaturedLayout && index === 0
                        ? "min-h-[360px] sm:min-h-[420px]"
                        : "min-h-[280px]"
                    }`}
                  >
                    <img
                      alt={project.title}
                      className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                      src={project.image}
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,16,29,0.08)_0%,rgba(6,16,29,0.24)_34%,rgba(6,16,29,0.82)_100%)]" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(226,139,23,0.2),_transparent_28%)]" />

                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="inline-flex rounded-full border border-white/18 bg-white/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-brand-gold-soft)] backdrop-blur-md">
                            {categories.find(
                              (category) => category.id === project.category,
                            )?.label ?? "Project"}
                          </span>
                          <h3 className="mt-4 text-2xl font-semibold tracking-[-0.05em] text-white">
                            {project.title}
                          </h3>
                        </div>

                        <span className="hidden rounded-full border border-white/12 bg-[rgba(6,16,29,0.42)] px-3 py-1 text-xs font-medium text-[rgba(238,244,250,0.72)] backdrop-blur md:inline-flex">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-[rgba(238,244,250,0.72)]">
                        <span className="rounded-full bg-white/10 px-3 py-1 backdrop-blur-md">
                          {project.stage}
                        </span>
                        <span className="rounded-full bg-white/10 px-3 py-1 backdrop-blur-md">
                          {project.detail}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
