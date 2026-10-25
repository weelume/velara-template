'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import type { SiteTemplatePageProps } from '../../../types';
import { brand, type Locale } from '../config/brand';
import { nav } from '../content/copy';
import { useVelaraHost } from '../host';
import '../theme.css';
export const hrefFor = (base: string, slug = '') => (base || '') + (slug ? '/' + slug : '/') ;
export function Layout({ children, locale = 'zh', basePath, hero = false }: SiteTemplatePageProps & { children: ReactNode; hero?: boolean }) {
  const host = useVelaraHost(), pathname = usePathname(), reduced = useReducedMotion(); const [open, setOpen] = useState(false), menuButton = useRef<HTMLButtonElement>(null);
  const [languageHref, setLanguageHref] = useState('');
  const neutral = locale === 'en' ? basePath.replace(/\/en$/, '') : basePath;
  const currentSlug = pathname?.slice(basePath.length).replace(/^\//, '') ?? '';
  const target = (locale === 'zh' ? neutral + '/en' : neutral) + (currentSlug ? '/' + currentSlug : '/');
  useEffect(() => { const update = () => setLanguageHref(target + window.location.search + window.location.hash); update(); window.addEventListener('hashchange', update); return () => window.removeEventListener('hashchange', update); }, [target]);
  useEffect(() => { if (!open) return; const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); menuButton.current?.focus(); } }; document.addEventListener('keydown', onKey); return () => document.removeEventListener('keydown', onKey); }, [open]);
  return <div className="va-root" lang={locale === 'zh' ? 'zh-CN' : 'en'}><a className="va-skip" href="#va-main">{locale === 'zh' ? '跳至正文' : 'Skip to content'}</a>
    <nav className={'va-nav ' + (hero ? 'va-nav-hero' : '')} aria-label={locale === 'zh' ? '主导航' : 'Main navigation'}>
      <Link href={hrefFor(basePath)} className="va-brand">{host.lightLogo && <img src={host.lightLogo} alt="" width="24" height="24" />}<span>{host.brandName[locale]}</span></Link>
      <div className="va-nav-links">{nav.map(n => <Link key={n.slug} href={hrefFor(basePath, n.slug)} aria-current={currentSlug === n.slug ? 'page' : undefined}>{n.label[locale]}</Link>)}</div>
      <div className="va-nav-actions"><Link className="va-lang" href={languageHref || target} aria-label={locale === 'zh' ? '切换至英文' : 'Switch to Chinese'}>{locale === 'zh' ? 'EN' : '中文'}</Link><Link className="va-nav-cta" href={hrefFor(basePath,'contact')}>{locale === 'zh' ? '开始体验' : 'Get started'}</Link><button ref={menuButton} className="va-menu-button" aria-label={locale === 'zh' ? (open ? '关闭菜单' : '打开菜单') : (open ? 'Close menu' : 'Open menu')} aria-expanded={open} aria-controls="va-menu" onClick={() => setOpen(v => !v)}><span /><span /></button></div>
      <AnimatePresence>{open && <motion.div id="va-menu" className="va-mobile-menu" initial={reduced ? false : { opacity:0, height:0 }} animate={{ opacity:1, height:'auto' }} exit={{ opacity:0,height:0 }}>{nav.map(n => <Link key={n.slug} href={hrefFor(basePath,n.slug)} onClick={() => setOpen(false)}>{n.label[locale]}</Link>)}</motion.div>}</AnimatePresence>
    </nav>
    <main id="va-main">{children}</main><Footer locale={locale} basePath={basePath} />
    {host.marketplaceHref && <Link href={host.marketplaceHref} className="va-market" aria-label={host.marketplaceAriaLabel?.[locale]}>{host.lightLogo && <img src={host.lightLogo} width="24" height="24" alt="" />}<span>{host.brandName[locale]}</span></Link>}
  </div>;
}
function Footer({ locale, basePath }: { locale: Locale; basePath: string }) {
  const host = useVelaraHost();
  const groups = [{ title: {zh:'产品',en:'Product'}, links: nav.slice(0,3) }, { title:{zh:'了解更多',en:'Explore'}, links:[nav[3],nav[4],{slug:'about',label:{zh:'关于我们',en:'About us'}}] }, {title:{zh:'规则与支持',en:'Resources'},links:[{slug:'privacy',label:{zh:'隐私政策',en:'Privacy policy'}},{slug:'terms',label:{zh:'使用条款',en:'Terms of use'}},{slug:'contact',label:{zh:'使用支持',en:'Support'}}]}];
  return <footer className="va-footer"><div className="va-horizon" aria-hidden="true"><div className="va-planet-arc" />{['Singapore','Malaysia','United States','Indonesia','Japan'].map((c,i)=><div className="va-country" key={c} style={{left:(9+i*19)+'%', top:((i%3)*24+12)+'px',animationDelay:(i*.4)+'s'}}><span>{locale === 'zh' ? ['新加坡','马来西亚','美国','印度尼西亚','日本'][i] : c}</span><i /></div>)}</div><div className="va-container va-footer-columns"><div><Link className="va-brand" href={hrefFor(basePath)}>{host.brandName[locale]}</Link><p>{brand.tagline[locale]}</p><small>{locale === 'zh' ? '财务界面演示 · 无真实金融服务' : 'Financial interface demo · No live financial services'}</small></div>{groups.map(g=><div key={g.title.en}><h4>{g.title[locale]}</h4>{g.links.map(l=><Link href={hrefFor(basePath,l.slug)} key={l.slug}>{l.label[locale]}</Link>)}</div>)}</div><div className="va-container va-footer-bottom"><span>© {brand.year} {host.brandName[locale]}</span>{host.marketplaceHref && <Link href={host.marketplaceHref}>{host.marketplaceLabel?.[locale]}</Link>}{host.filing}</div><div className="va-wordmark" aria-hidden="true">{host.brandName[locale].replaceAll(' ','').toUpperCase()}</div></footer>;
}
