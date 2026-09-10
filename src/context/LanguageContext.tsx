import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';
import { TRANSLATIONS, Translations } from '../data/translations';
import { audioSynth } from '../utils/audioSynth';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: Translations;
  isBengali: boolean;
  isMixed: boolean;
  bi: (enText: string, bnText: string, separator?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('portfolio_lang') as Language;
      if (saved === 'mixed' || saved === 'bn' || saved === 'en') return saved;
    }
    return 'mixed';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio_lang', language);
      document.documentElement.lang = language === 'bn' ? 'bn' : 'en';
    }
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    audioSynth.playSfx('click');
  };

  const toggleLanguage = () => {
    setLanguageState((prev) => {
      if (prev === 'mixed') return 'bn';
      if (prev === 'bn') return 'en';
      return 'mixed';
    });
    audioSynth.playSfx('click');
  };

  const bi = (enText: string, bnText: string, separator = ' // ') => {
    if (language === 'mixed') return `${enText}${separator}${bnText}`;
    if (language === 'bn') return bnText;
    return enText;
  };

  const value: LanguageContextType = {
    language,
    setLanguage,
    toggleLanguage,
    t: TRANSLATIONS[language] || TRANSLATIONS.mixed,
    isBengali: language === 'bn',
    isMixed: language === 'mixed',
    bi
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
