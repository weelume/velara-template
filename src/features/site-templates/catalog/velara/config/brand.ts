export type Locale = 'zh' | 'en';
export type Bilingual = Record<Locale, string>;
export const brand = { name: { zh: 'Velara AI', en: 'Velara AI' }, year: 2026, tagline: { zh: '让每一笔支出更清晰', en: 'Clarity for every financial decision' } };
export const asset = (name: string) => '/templates/velara/' + name;
