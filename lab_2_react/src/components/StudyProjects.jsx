export default function StudyProjects({ projects }) {
  return (
    <section id="projects">
      <h2>Навчальні роботи</h2>
      <p>Досвід поки здобуваю під час навчання. Ось декілька виконаних робіт.</p>
      {projects.map((project) => (
        <article key={project.title}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </article>
      ))}
    </section>
  )
}
