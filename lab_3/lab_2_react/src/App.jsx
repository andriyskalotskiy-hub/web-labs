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
    <div className="min-h-screen bg-[#0b1220] font-sans text-[#d7e0ed] [color-scheme:dark]">
      <div className="mx-auto max-w-[1180px] px-[18px] pt-8 pb-6 min-[721px]:px-10 min-[721px]:pt-16">
      <CvHeader name="Андрій Скалоцький" group="Кб-205" />
      <main className="my-8 grid grid-cols-1 items-start gap-4 min-[721px]:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] min-[721px]:gap-6">
        <AboutMe />
        <Education />
        <StudyProjects projects={studyProjects} />
        <Skills />
        <Interests />
      </main>
      <CvFooter />
      </div>
    </div>
  )
}
