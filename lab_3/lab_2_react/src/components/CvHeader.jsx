export default function CvHeader({ name, group }) {
  return (
    <header className="border-b border-[#28374b] pb-10">
    <p className="text-[11px] font-bold tracking-[0.16em] text-[#69dfd0]">ОСОБИСТЕ РЕЗЮМЕ / 2026</p>
    <h1 className="my-6 text-[clamp(40px,6.3vw,76px)] leading-[1.08] font-bold tracking-[-0.045em] text-[#69dfd0]">{name}</h1>
    <p className="my-2 leading-[1.7] text-[#9facbf]">Студент кібербезпеки · захист даних · ігри та модифікації</p>
    <p className="my-2 leading-[1.7] text-[#9facbf]">Другий курс · група {group}</p>
    <nav className="mt-[26px] flex flex-wrap gap-2.5" aria-label="Розділи резюме">
      <a className="rounded-md border border-[#28374b] px-3.5 py-[7px] text-[13px] transition-colors hover:border-[#69dfd0] hover:bg-[#132c33] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#69dfd0]" href="#about">Про мене</a>
      <a className="rounded-md border border-[#28374b] px-3.5 py-[7px] text-[13px] transition-colors hover:border-[#69dfd0] hover:bg-[#132c33] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#69dfd0]" href="#education">Освіта</a>
      <a className="rounded-md border border-[#28374b] px-3.5 py-[7px] text-[13px] transition-colors hover:border-[#69dfd0] hover:bg-[#132c33] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#69dfd0]" href="#projects">Навчальні роботи</a>
      <a className="rounded-md border border-[#28374b] px-3.5 py-[7px] text-[13px] transition-colors hover:border-[#69dfd0] hover:bg-[#132c33] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#69dfd0]" href="#skills">Навички</a>
      <a className="rounded-md border border-[#28374b] px-3.5 py-[7px] text-[13px] transition-colors hover:border-[#69dfd0] hover:bg-[#132c33] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#69dfd0]" href="#interests">Інтереси та цілі</a>
    </nav>
  </header>
  )
}
