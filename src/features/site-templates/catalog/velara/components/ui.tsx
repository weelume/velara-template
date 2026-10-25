'use client';
import { useEffect, useRef, useState, type ReactNode, type ButtonHTMLAttributes } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { asset, type Locale } from '../config/brand';
export function Reveal({ children, delay = 0, className = '', kind = 'rise' }: { children: ReactNode; delay?: number; className?: string; kind?: 'rise' | 'scale' | 'left' | 'fade' }) {
  const reduced = useReducedMotion();
  const start = kind === 'scale' ? { opacity: 0, scale: .9 } : kind === 'left' ? { opacity: 0, x: -30 } : kind === 'fade' ? { opacity: 0 } : { opacity: 0, y: 20 };
  return <motion.div className={className} initial={reduced ? false : start} whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .6, delay: reduced ? 0 : delay, ease: [.22, 1, .36, 1] }}>{children}</motion.div>;
}
export function Button({ children, tone = 'primary', ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { tone?: 'primary' | 'ghost' | 'light' }) { return <button {...props} className={'va-button va-' + tone + ' ' + (props.className ?? '')}>{children}</button>; }
export function Icon({ name, className = '' }: { name: string; className?: string }) {
  const paths: Record<string, ReactNode> = {
    bolt: <path d="m13 2-9 12h7l-1 8 10-13h-7z" />,
    wallet: <><rect x="3" y="5" width="18" height="15" rx="3" /><path d="M3 8h15M16 12h5v5h-5z" /></>,
    shield: <><path d="m12 2 8 4v6c0 5-8 10-8 10S4 17 4 12V6z" /><path d="m8 12 3 3 5-6" /></>,
    eye: <><path d="M3 3l18 18M10 5h2c6 0 10 7 10 7s-1 3-4 5M6 6c-3 2-4 6-4 6s4 7 10 7h2" /><path d="M9 9a4 4 0 0 0 6 6" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18" /></>,
    headphones: <><path d="M4 14v-3a8 8 0 0 1 16 0v3" /><rect x="3" y="12" width="4" height="8" rx="2" /><rect x="17" y="12" width="4" height="8" rx="2" /></>,
    lock: <><rect x="4" y="10" width="16" height="12" rx="2" /><path d="M8 10V6a4 4 0 0 1 8 0v4M12 15v3" /></>,
    chart: <><path d="M3 20V4M3 20h18M7 16V9M12 16V5M17 16v-5" /></>,
    bell: <><path d="M5 17h14l-2-3V9a5 5 0 0 0-10 0v5zM10 21h4" /></>,
    check: <path d="m5 12 4 4L20 5" />,
  };
  return <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name] ?? paths.chart}</svg>;
}
/** 减少动态效果时默认暂停视频；离屏和后台标签也停止，显式播放失败提示可人工恢复。 */
export function Video({ name, locale, className = '' }: { name: string; locale: Locale; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null); const reduced = useReducedMotion(); const [failed, setFailed] = useState(false); const [manual, setManual] = useState(false);
  useEffect(() => { const video = ref.current; if (!video) return; let visible = true;
    const update = () => { if ((!reduced || manual) && visible && !document.hidden) void video.play().catch(error => { console.error('[Velara] video_play_failed', { media: name, reason: error.name }); setFailed(true); }); else video.pause(); };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; update(); }); observer.observe(video); document.addEventListener('visibilitychange', update); update();
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', update); video.pause(); };
  }, [name, reduced, manual]);
  return <><video ref={ref} className={className} muted loop playsInline preload="metadata" aria-label={locale === 'zh' ? '动态背景视频' : 'Animated background video'} onError={() => { console.error('[Velara] video_load_failed', { media: name }); setFailed(true); }}><source src={asset(name)} type="video/mp4" /></video>{(reduced || failed) && <button className="va-media-control" onClick={() => { setManual(v => !v); setFailed(false); }}>{locale === 'zh' ? (manual ? '暂停背景' : '播放背景') : (manual ? 'Pause background' : 'Play background')}</button>}</>;
}
export function Heading({ number, label, title, description, center = false }: { number: string; label: string; title: string; description?: string; center?: boolean }) { return <header className={'va-heading ' + (center ? 'va-center' : '')}><p className="va-eyebrow">{number}. <span>—</span> {label}</p><h2>{title}</h2>{description && <p>{description}</p>}</header>; }

