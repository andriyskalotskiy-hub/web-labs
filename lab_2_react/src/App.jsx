import CvHeader from './components/CvHeader'
import AboutMe from './components/AboutMe'
import Education from './components/Education'
import StudyProjects from './components/StudyProjects'
import Skills from './components/Skills'
import Interests from './components/Interests'
import CvFooter from './components/CvFooter'

const studyProjects = [
  {
    "title": "Моделювання комп’ютерної мережі",
    "description": "У Cisco Packet Tracer з’єднував мережеві пристрої, налаштовував адресацію та перевіряв обмін даними між вузлами."
  },
  {
    "title": "Завдання з програмування на C#",
    "description": "Працював із масивами, класами, інтерфейсами та алгоритмами сортування. Створював прості застосунки Windows Forms."
  },
  {
    "title": "Дослідження завантаження GitHub",
    "description": "Через Chrome DevTools дослідив HTTP-запити, перенаправлення, часові етапи завантаження, TLS та cookie."
  }
]

export default function App() {
  return (
    <>
      <CvHeader name="Андрій Скалоцький" group="Кб-205" />
      <main>
        <AboutMe />
        <Education />
        <StudyProjects projects={studyProjects} />
        <Skills />
        <Interests />
      </main>
      <CvFooter />
    </>
  )
}
