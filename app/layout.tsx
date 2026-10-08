import { Manrope } from 'next/font/google'
import './globals.css'

const manrope = Manrope({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-manrope',
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={manrope.variable}>
      <head>
        <meta name="yandex-verification" content="6680ed477d2743ae" />
        <title>Faro Casino — официальный сайт Фаро Казино: играть онлайн, рабочее зеркало</title>
        <meta
          name="description"
          content="Faro Casino официальный сайт: вход и регистрация в Фаро Казино онлайн. Бонус 333% + 1111 FS, слоты и live-игры, рабочее зеркало Faro Casino для доступа 24/7. Играйте в Фаро Казино официально."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://farocasino28.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://farocasino28.vercel.app/" />
        <meta property="og:title" content="Faro Casino — официальный сайт Фаро Казино: играть онлайн, рабочее зеркало" />
        <meta
          property="og:description"
          content="Faro Casino официальный сайт: вход и регистрация в Фаро Казино онлайн. Бонус 333% + 1111 FS, слоты и live-игры, рабочее зеркало Faro Casino для доступа 24/7. Играйте в Фаро Казино официально."
        />
        <meta property="og:image" content="https://farocasino28.vercel.app/img/hero-vault.jpg" />
        <meta property="og:locale" content="ru_RU" />
        <meta property="og:site_name" content="Faro Casino" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Faro Casino — официальный сайт Фаро Казино: играть онлайн, рабочее зеркало" />
        <meta
          name="twitter:description"
          content="Faro Casino официальный сайт: вход и регистрация в Фаро Казино онлайн. Бонус 333% + 1111 FS, слоты и live-игры, рабочее зеркало Faro Casino для доступа 24/7. Играйте в Фаро Казино официально."
        />
        <meta name="twitter:image" content="https://farocasino28.vercel.app/img/hero-vault.jpg" />
        <meta name="theme-color" content="#0b0c10" />
      </head>
      <body>{children}</body>
    </html>
  )
}
