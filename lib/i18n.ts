// i18n language util — placeholder
export type Lang = 'az' | 'ru';

export const LANGS: Record<Lang, string> = {
  az: 'AZ',
  ru: 'RU',
};

export const defaultLang: Lang = 'az';

export function getLang(): Lang {
  if (typeof window === 'undefined') return defaultLang;
  return (localStorage.getItem('lang') as Lang) || defaultLang;
}

export function setLang(lang: Lang) {
  if (typeof window !== 'undefined') {
    localStorage.setItem('lang', lang);
  }
}
