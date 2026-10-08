const HASHTAGS: { label: string; href: string }[] = [
  { label: '#FaroCasino', href: '#faro-casino' },
  { label: '#FaroCasinoЗеркало', href: '#faro-casino-zerkalo' },
  { label: '#FaroCasinoИграть', href: '#faro-casino-igrat' },
  { label: '#FaroCasinoОфициальный', href: '#faro-casino-oficialnyy' },
  { label: '#FaroCasinoОфициальныйСайт', href: '#faro-casino-oficialnyy-sayt' },
  { label: '#FaroКазино', href: '#faro-casino' },
  { label: '#ФароКазино', href: '#faro-casino' },
  { label: '#ФароКазиноЗеркало', href: '#faro-casino-zerkalo' },
  { label: '#ФароКазиноЗеркалоРабочее', href: '#zerkalo-rabochee' },
  { label: '#ФароКазиноИграть', href: '#faro-casino-igrat' },
  { label: '#ФароКазиноОнлайн', href: '#faro-casino-onlayn' },
  { label: '#ФароКазиноОфициальный', href: '#faro-casino-oficialnyy' },
  { label: '#ФароКазиноОфициальныйСайт', href: '#faro-casino-oficialnyy-sayt' },
]

export function SiteFooter() {
  return (
    <footer className="k7d2-footer">
      <nav className="k7d2-tags" aria-label="Навигация по хэштегам Faro Casino">
        {HASHTAGS.map(tag => (
          <a key={tag.label} href={tag.href}>
            {tag.label}
          </a>
        ))}
      </nav>
      <p className="k7d2-note">
        18+ | Faro Casino поддерживает ответственную игру: устанавливайте лимиты и играйте только на те суммы, которые
        готовы потратить. Материалы страницы носят информационный характер. © 2026 Faro Casino.
      </p>
    </footer>
  )
}
