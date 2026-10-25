'use client';
import type { SiteTemplatePageProps } from '../../../types';
import { Layout } from '../components/Layout';
import { Pricing, FAQ } from '../components/Sections';
export default function PricingPage({locale='zh',basePath}:SiteTemplatePageProps){return <Layout locale={locale} basePath={basePath}><Pricing locale={locale} basePath={basePath}/><FAQ locale={locale} basePath={basePath}/></Layout>}
