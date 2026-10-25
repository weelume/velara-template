'use client';
import type { SiteTemplatePageProps } from '../../../types';
import { Layout } from '../components/Layout';
import { Features, GlobalPayments, Security, FAQ } from '../components/Sections';
export default function FeaturesPage({locale='zh',basePath}:SiteTemplatePageProps){const props={locale,basePath};return <Layout {...props}><Features {...props}/><GlobalPayments {...props}/><Security {...props}/><FAQ {...props}/></Layout>}
