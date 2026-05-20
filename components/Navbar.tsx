import { LANGS, getLang, setLang, type Lang } from '../lib/i18n';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [lang, setLangState] = useState<Lang>('az');
  useEffect(() => {
    setLangState(getLang());
  }, []);
  function switchLang(newLang: Lang) {
    setLangState(newLang);
    setLang(newLang);
    window.location.reload(); // reload to rehydrate language
  }

  return (
    <nav className="w-full flex items-center justify-between py-4 px-6 bg-white border-b">
      <div className="flex items-center gap-2">
        <span className="font-bold text-primary text-lg">MindBridge</span>
      </div>
      <div className="flex gap-4 items-center">
        <a href="/psychologists" className="hover:underline text-sm">Psixoloqlar</a>
        <a href="/chat" className="hover:underline text-sm">Çatbot</a>
        <a href="/dashboard" className="hover:underline text-sm">Panel</a>
        <a href="/login" className="ml-4 px-4 py-1 rounded bg-primary text-white">Login</a>
        <a href="/register" className="ml-2 px-4 py-1 rounded border border-primary text-primary">Qeydiyyat</a>
        <div className="ml-6 flex gap-1">
          {Object.entries(LANGS).map(([k, v]) => (
            <button key={k} onClick={() => switchLang(k as Lang)} className={lang === k ? 'font-bold underline' : 'opacity-50'}>{v}</button>
          ))}
        </div>
      </div>
    </nav>
  );
}
