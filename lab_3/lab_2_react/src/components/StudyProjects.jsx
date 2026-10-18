export default function StudyProjects({ projects }) {
  return (
    <section id="projects" className="scroll-mt-6 rounded-xl border border-[#28374b] bg-[#101b2c] p-[23px] shadow-lg shadow-black/10 min-[721px]:p-7">
      <p className="mb-[9px] text-[11px] font-bold tracking-[0.16em] text-[#69dfd0]">03 / ПРАКТИКА</p>
      <h2 className="mb-[18px] text-[25px] leading-[1.3] font-bold tracking-[-0.025em] text-[#f1f5fb]">Що вже пробував</h2>
      <p className="mb-3 leading-[1.7] last:mb-0 text-sm text-[#9facbf]">Досвід поки здобуваю під час навчання. Ось декілька виконаних робіт.</p>
      {projects.map((project) => (
        <article key={project.title} className="mt-[22px] border-t border-[#28374b] pt-0.5">
          <h3 className="mt-5 mb-[7px] text-base leading-normal font-bold text-[#e9eff8]">{project.title}</h3>
          <p className="mb-3 leading-[1.7] last:mb-0 text-sm text-[#9facbf]">{project.description}</p>
        </article>
      ))}
    </section>
  )
}
