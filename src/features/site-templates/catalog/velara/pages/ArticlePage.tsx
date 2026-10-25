'use client';
import Link from 'next/link';
import type { SiteTemplatePageProps } from '../../../types';
import { Interior } from '../components/Interior';
import { Sparkline } from '../components/Dashboard';
import { hrefFor } from '../components/Layout';
import { articles } from '../content/copy';
export function ArticlePage({locale='zh',basePath,index}:SiteTemplatePageProps&{index:number}){const article=articles[index];return <Interior locale={locale} basePath={basePath} title={article.title[locale]} description={article.intro[locale]}><article className="va-prose"><div className="va-article-art"><Sparkline/></div><p className="va-eyebrow">{article.category[locale]} / 2026.10.25</p>{article.paragraphs.map((p,i)=><p key={i}>{p[locale]}</p>)}<Link className="va-text-link" href={hrefFor(basePath,'blog')}>{locale==='zh'?'浏览全部手记':'Browse all articles'}</Link></article></Interior>}
