import { createContext, useContext, useState, ReactNode } from "react"
import { Locale, getTranslations, Translations } from "@/lib/i18n"

interface LocaleContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined)

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    // Try to get from localStorage, default to browser language
    const saved = localStorage.getItem("locale") as Locale | null
    if (saved && (saved === "ru" || saved === "en")) {
      return saved
    }
    // Check browser language
    const browserLang = navigator.language.split("-")[0]
    return browserLang === "ru" ? "ru" : "en"
  })

  const setLocaleWithStorage = (newLocale: Locale) => {
    setLocale(newLocale)
    localStorage.setItem("locale", newLocale)
  }

  return (
    <LocaleContext.Provider
      value={{
        locale,
        setLocale: setLocaleWithStorage,
        t: getTranslations(locale),
      }}
    >
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (context === undefined) {
    throw new Error("useLocale must be used within a LocaleProvider")
  }
  return context
}

