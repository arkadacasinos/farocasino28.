'use client'

import { useEffect, useState, type ReactNode } from 'react'

const ROULETTE_START_SECONDS = 1 * 3600 + 48 * 60 + 54

function formatCountdown(total: number) {
  const pad = (n: number) => String(n).padStart(2, '0')
  const hours = Math.floor(total / 3600)
  const minutes = Math.floor((total % 3600) / 60)
  const seconds = total % 60
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}

function Ic({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  )
}

const ICON_GIFT = (
  <>
    <rect x="3" y="8" width="18" height="4" rx="1" />
    <path d="M12 8v13" />
    <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
    <path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5" />
  </>
)

const ICON_BAG = (
  <>
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </>
)

const ICON_TARGET = (
  <>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </>
)

const ICON_TROPHY = (
  <>
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </>
)

const ICON_CHEST = (
  <>
    <rect x="2" y="3" width="20" height="5" rx="1" />
    <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
    <path d="M10 12h4" />
  </>
)

const ICON_MULTIPLY = (
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="m15 9-6 6" />
    <path d="m9 9 6 6" />
  </>
)

const ICON_USERS = (
  <>
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </>
)

const ICON_CROWN = (
  <>
    <path d="M11.56 3.27a.5.5 0 0 1 .88 0l2.95 5.6a1 1 0 0 0 1.52.3l4.27-3.67a.5.5 0 0 1 .8.52l-2.83 10.25a1 1 0 0 1-.96.73H5.81a1 1 0 0 1-.96-.73L2.02 6.02a.5.5 0 0 1 .8-.52l4.27 3.67a1 1 0 0 0 1.52-.3z" />
    <path d="M5 21h14" />
  </>
)

const ICON_CLOCK = (
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </>
)

const ICON_MENU = (
  <>
    <path d="M4 6h16" />
    <path d="M4 12h16" />
    <path d="M4 18h16" />
  </>
)

const ICON_CLOSE = (
  <>
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </>
)

const ICON_DOWNLOAD = (
  <>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <path d="m7 10 5 5 5-5" />
    <path d="M12 15V3" />
  </>
)

const ICON_COIN_F = (
  <>
    <circle cx="12" cy="12" r="9" />
    <path d="M14.5 9H10v6" />
    <path d="M10 12h3.5" />
  </>
)

const ICON_FLAG = (
  <>
    <rect x="2" y="5" width="20" height="14" rx="2" />
    <path d="M2 10h20" />
    <path d="M2 14.5h20" />
  </>
)

const ICON_CHEVRON = <path d="m6 9 6 6 6-6" />

const ICON_CHAT = <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />

const NAV_ITEMS: { label: string; href: string; icon: ReactNode }[] = [
  { label: 'Бонусы', href: '#faro-casino-oficialnyy', icon: ICON_GIFT },
  { label: 'Магазин', href: '#platezhi', icon: ICON_BAG },
  { label: 'Миссии', href: '#faro-casino-oficialnyy', icon: ICON_TARGET },
  { label: 'Гонка рефералов', href: '#itog', icon: ICON_TROPHY },
  { label: 'Сундуки', href: '#faro-casino-oficialnyy', icon: ICON_CHEST },
  { label: 'Умножение баланса', href: '#faro-casino-oficialnyy', icon: ICON_MULTIPLY },
  { label: 'Реферальная программа', href: '#itog', icon: ICON_USERS },
  { label: 'VIP Клуб', href: '#faro-casino-oficialnyy', icon: ICON_CROWN },
]

export function CasinoShell() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [secondsLeft, setSecondsLeft] = useState(ROULETTE_START_SECONDS)

  useEffect(() => {
    const id = setInterval(() => {
      setSecondsLeft(current => (current <= 1 ? ROULETTE_START_SECONDS : current - 1))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className={menuOpen ? 'k7d2-shell k7d2-open' : 'k7d2-shell'}>
      <header className="k7d2-topbar">
        <a className="k7d2-logo" href="#faro-casino" aria-label="Faro Casino — к началу страницы">
          <img src="/icon.png" alt="" width={30} height={30} />
          <span>
            <b>FARO</b> CASINO
          </span>
        </a>
        <button
          className="k7d2-burger"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="k7d2-nav"
          aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
          onClick={() => setMenuOpen(value => !value)}
        >
          <Ic>{menuOpen ? ICON_CLOSE : ICON_MENU}</Ic>
        </button>
      </header>

      <div className="k7d2-scrim" onClick={closeMenu} aria-hidden="true" />

      <div className="k7d2-body">
        <aside className="k7d2-rail" id="k7d2-nav">
          <div className="k7d2-wheel">
            <img src="/img/roulette.jpg" alt="Рулетка удачи Faro Casino" width={52} height={52} />
            <div>
              <strong>Рулетка удачи</strong>
              <span className="k7d2-timer">
                <Ic>{ICON_CLOCK}</Ic>
                {formatCountdown(secondsLeft)}
              </span>
            </div>
          </div>

          <nav className="k7d2-menu" aria-label="Разделы Faro Casino">
            <ul>
              {NAV_ITEMS.map(item => (
                <li key={item.label}>
                  <a href={item.href} onClick={closeMenu}>
                    <Ic>{item.icon}</Ic>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button className="k7d2-lang" type="button">
            <Ic>{ICON_FLAG}</Ic>
            Русский
            <Ic className="k7d2-chev">{ICON_CHEVRON}</Ic>
          </button>
        </aside>

        <main className="k7d2-main">
          <section className="k7d2-banner" aria-labelledby="k7d2-hero-title">
            <img
              className="k7d2-banner-art"
              src="/img/hero-vault.jpg"
              alt="Сейф с золотыми слитками и монетами Faro Casino"
              width={1000}
              height={600}
              fetchPriority="high"
            />
            <div className="k7d2-banner-text">
              <h1 id="k7d2-hero-title">
                Welcome Pack
                <br />
                333% + 1 111 FS
              </h1>
              <p>Начните свою победную серию на лучших условиях!</p>
              <a className="k7d2-btn-gold" href="#faro-casino-igrat">
                Депозит
              </a>
            </div>
            <div className="k7d2-dots" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
          </section>

          <div className="k7d2-cards">
            <section className="k7d2-card" aria-labelledby="k7d2-card-streak">
              <img src="/img/streak-cash.jpg" alt="" width={480} height={360} loading="lazy" />
              <h2 id="k7d2-card-streak">Депозитный стрик</h2>
              <p>Чем длиннее серия депозитов, тем ценнее призы</p>
              <a className="k7d2-btn-gold" href="#platezhi">
                Начать стрик
              </a>
              <div className="k7d2-steps" aria-label="Шаги депозитного стрика">
                <span className="k7d2-step" aria-hidden="true">
                  <Ic>{ICON_GIFT}</Ic>
                </span>
                <span className="k7d2-step" aria-hidden="true">
                  <Ic>{ICON_GIFT}</Ic>
                </span>
                <span className="k7d2-step" aria-hidden="true">
                  <Ic>{ICON_GIFT}</Ic>
                </span>
                <span className="k7d2-step">4</span>
                <span className="k7d2-step">5</span>
                <span className="k7d2-step">6</span>
                <span className="k7d2-step" aria-hidden="true">
                  <Ic>{ICON_GIFT}</Ic>
                </span>
                <span className="k7d2-step" aria-hidden="true">
                  <Ic>{ICON_GIFT}</Ic>
                </span>
              </div>
            </section>

            <section className="k7d2-card" aria-labelledby="k7d2-card-app">
              <img src="/img/app-woman.jpg" alt="" width={480} height={360} loading="lazy" />
              <h2 id="k7d2-card-app">Faro Casino App</h2>
              <p>Скачивайте мобильное приложение и получайте эксклюзивные бонусы</p>
              <span className="k7d2-android">
                <Ic>{ICON_DOWNLOAD}</Ic>
                Доступно для Android
              </span>
              <a className="k7d2-btn-gold" href="#prilozhenie">
                Скачать
              </a>
            </section>

            <section className="k7d2-card" aria-labelledby="k7d2-card-missions">
              <img src="/img/missions-dart.jpg" alt="" width={480} height={360} loading="lazy" />
              <h2 id="k7d2-card-missions">Миссии</h2>
              <p>Выполняйте задания, собирайте Faro Coins и обменивайте их на награды</p>
              <p className="k7d2-mrow">
                Завершите 3 депозита
                <span className="k7d2-coins">
                  <Ic>{ICON_COIN_F}</Ic>
                  +12 Faro Coins
                </span>
              </p>
              <a className="k7d2-btn-dark" href="#faro-casino-oficialnyy">
                Начать
              </a>
            </section>
          </div>
        </main>
      </div>

      <a className="k7d2-chat" href="#voprosy-i-otvety" aria-label="Вопросы и ответы о Faro Casino">
        <Ic>{ICON_CHAT}</Ic>
      </a>
    </div>
  )
}
