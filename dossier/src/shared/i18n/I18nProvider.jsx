import { createContext, useContext, useMemo, useState } from 'react'
import { en } from './en'
import { ua } from './ua'

const dictionaries = { en, ua }

const I18nContext = createContext({
  locale: 'ua',
  setLocale: () => {},
  t: (key) => key,
})

export function I18nProvider({ children }) {
  const [locale, setLocale] = useState('ua')

  const value = useMemo(() => {
    const dictionary = dictionaries[locale] ?? dictionaries.en

    return {
      locale,
      setLocale,
      t: (key, params = {}) => {
        const template = dictionary[key] ?? dictionaries.en[key] ?? key

        return Object.entries(params).reduce(
          (message, [paramKey, value]) => message.replaceAll(`{${paramKey}}`, String(value)),
          template,
        )
      },
    }
  }, [locale])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  return useContext(I18nContext)
}
