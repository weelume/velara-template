import type { ReactNode } from 'react';
import './globals.css';
export const metadata = { title: 'Velara', description: '让每一笔支出更清晰 · Smarter financial insights' };
export default function Layout({ children }: {
    children: ReactNode;
}) { return <html lang="zh-CN"><body>{children}</body></html>; }
