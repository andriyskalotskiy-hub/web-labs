export default function CvHeader({ name, group }) {
  return (
    <header>
    <h1>{name}</h1>
    <p>Студент кібербезпеки · {group} · другий курс</p>
    <nav aria-label="Розділи резюме">
      <a href="#about">Про мене</a> |
      <a href="#education">Освіта</a> |
      <a href="#projects">Навчальні роботи</a> |
      <a href="#skills">Навички</a>
    </nav>
  </header>
  )
}
