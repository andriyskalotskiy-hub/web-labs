export default function CvHeader({ name, group }) {
  return (
    <header>
    <h1>{name}</h1>
    <p>Студент кібербезпеки · захист даних · ігри та модифікації</p>
    <p>Другий курс · група {group}</p>
    <nav aria-label="Розділи резюме">
      <a href="#about">Про мене</a> |
      <a href="#education">Освіта</a> |
      <a href="#projects">Навчальні роботи</a> |
      <a href="#skills">Навички</a> |
      <a href="#interests">Інтереси та цілі</a>
    </nav>
  </header>
  )
}
