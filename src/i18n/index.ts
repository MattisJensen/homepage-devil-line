import de from "./translations/de";
import en from "./translations/en";

export const languages = ["de", "en"] as const;
export type Language = (typeof languages)[number];
export const defaultLanguage: Language = "de";

export const languageNames: Record<Language, string> = {
  de: "Deutsch",
  en: "English",
};

const translations: Record<Language, typeof de> = { de, en };

export function t(lang: Language) {
  return translations[lang];
}

export function localizedPath(lang: Language, path: string): string {
  if (path === "/" || path === "") return `/${lang}`;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `/${lang}${cleanPath}`;
}

export function switchLanguagePath(
  currentPath: string,
  targetLang: Language,
): string {
  const pathWithoutLang = currentPath.replace(/^\/(de|en)/, "") || "/";
  return localizedPath(targetLang, pathWithoutLang);
}

export function getStaticLangPaths() {
  return languages.map((lang) => ({ params: { lang } }));
}
