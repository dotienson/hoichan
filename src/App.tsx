import React, { useState } from 'react';
import { specialties } from './data';
import { Sidebar } from './components/Sidebar';
import { ConditionList } from './components/ConditionList';
import { ConditionDetail } from './components/ConditionDetail';

export default function App() {
  const [language, setLanguage] = useState<'en' | 'vi'>('en');
  const [selectedSpecialtyId, setSelectedSpecialtyId] = useState<string | null>(specialties[0]?.id || null);
  const [selectedConditionId, setSelectedConditionId] = useState<string | null>(null);

  const selectedSpecialty = specialties.find((s) => s.id === selectedSpecialtyId) || null;
  const selectedCondition = selectedSpecialty?.guidelines.find((g) => g.id === selectedConditionId) || null;

  const handleSelectSpecialty = (id: string) => {
    setSelectedSpecialtyId(id);
    setSelectedConditionId(null);
  };

  return (
    <div className="flex flex-col h-screen w-full bg-slate-50 text-slate-900 font-sans overflow-hidden">
      <header className="h-14 bg-blue-800 text-white flex items-center justify-between px-5 shrink-0">
        <div className="flex items-center gap-4">
          <div className="text-xl font-bold flex items-center gap-2">
            <span>{language === 'vi' ? 'Sunny Hội chẩn Nhi' : 'SunnyConsult'}</span>
          </div>
          {language === 'vi' && (
            <span className="text-[0.7rem] bg-red-600 text-white px-2 py-1 rounded font-medium flex items-center">
              Bản dịch tiếng Việt chưa được kiểm định
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 text-sm font-medium">
          <button 
            onClick={() => setLanguage('en')} 
            className={`px-2.5 py-1 rounded transition-colors ${language === 'en' ? 'bg-white text-blue-800' : 'hover:bg-white/20'}`}
          >
            EN
          </button>
          <button 
            onClick={() => setLanguage('vi')} 
            className={`px-2.5 py-1 rounded transition-colors ${language === 'vi' ? 'bg-white text-blue-800' : 'hover:bg-white/20'}`}
          >
            VI
          </button>
        </div>
      </header>
      <div className="grid grid-cols-[240px_320px_1fr] flex-1 min-h-0">
        <Sidebar
          specialties={specialties}
          selectedSpecialtyId={selectedSpecialtyId}
          onSelectSpecialty={handleSelectSpecialty}
          language={language}
        />
        <ConditionList
          specialty={selectedSpecialty}
          selectedConditionId={selectedConditionId}
          onSelectCondition={setSelectedConditionId}
          language={language}
        />
        <ConditionDetail condition={selectedCondition} language={language} />
      </div>
    </div>
  );
}

