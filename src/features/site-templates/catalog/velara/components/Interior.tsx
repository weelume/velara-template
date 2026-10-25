'use client';
import type { ReactNode } from 'react';
import type { SiteTemplatePageProps } from '../../../types';
import { Layout } from './Layout';
import { Reveal } from './ui';
export function Interior({children,title,description,...props}:SiteTemplatePageProps&{children:ReactNode;title:string;description:string}){return <Layout {...props}><div className="va-interior-hero"><Reveal className="va-container"><p className="va-eyebrow">VELARA AI / {props.locale==='en'?'FINANCIAL CLARITY':'清晰财务生活'}</p><h1>{title}</h1><p>{description}</p></Reveal></div><div className="va-interior"><div className="va-container">{children}</div></div></Layout>}
