import { t, type Language } from "~/i18n";

export interface MenuItem {
  name: string;
  url: string;
  highlighted: boolean;
}

export function getMainMenu(lang: Language): MenuItem[] {
  const txt = t(lang);
  return [
    { name: txt.nav.home, url: `/${lang}`, highlighted: false },
    { name: txt.nav.events, url: `/${lang}/events`, highlighted: false },
    { name: txt.nav.spots, url: `/${lang}/spots`, highlighted: false },
    { name: txt.nav.videos, url: `/${lang}/videos`, highlighted: false },
    { name: txt.nav.contact, url: `/${lang}/contact`, highlighted: false },
  ];
}

export function getHomePath(lang: Language): string {
  return `/${lang}`;
}
