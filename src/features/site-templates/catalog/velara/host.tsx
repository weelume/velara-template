'use client';
import { createContext, useContext, type ReactNode } from 'react';
import { brand, type Bilingual } from './config/brand';
export interface VelaraHostConfig { brandName: Bilingual; logo?: string; lightLogo?: string; marketplaceHref?: string; marketplaceLabel?: Bilingual; marketplaceAriaLabel?: Bilingual; filing?: ReactNode }
const Context = createContext<VelaraHostConfig>({ brandName: brand.name });
export function VelaraHostProvider({ children, ...config }: VelaraHostConfig & { children: ReactNode }) { return <Context.Provider value={config}>{children}</Context.Provider>; }
export const useVelaraHost = () => useContext(Context);
