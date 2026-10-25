'use client';
import Link from 'next/link';
import type { SiteTemplatePageProps } from '../../../types';
import { Interior } from '../components/Interior';
import { Reveal } from '../components/ui';
import { Sparkline } from '../components/Dashboard';
import { hrefFor } from '../components/Layout';
import { articles } from '../content/copy';
export default function BlogPage({locale='zh',basePath}:SiteTemplatePageProps){return <Interior locale={locale} basePath={basePath} title={locale==='zh'?'财务手记\n让每一天更有方向':'Financial Journal\nClarity for everyday decisions'} description={locale==='zh'?'关于预算、储蓄与日常支出的实用思考。一般性信息，不构成财务建议。':'Practical thoughts on budgets, savings and everyday spending. General information, not financial advice.'}><div className="va-article-grid">{articles.map((a,i)=><Reveal className="va-article-card va-glass" key={a.slug} delay={i*.1}><Link href={hrefFor(basePath,'blog/'+a.slug)}><div className="va-article-art"><Sparkline/></div><div className="va-article-card-copy"><span className="va-eyebrow">{a.category[locale]}</span><h2>{a.title[locale]}</h2><p>{a.intro[locale]}</p></div></Link></Reveal>)}</div></Interior>}
