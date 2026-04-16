import React from 'react';
import { Specialty } from '../data';
import { Search } from 'lucide-react';

interface SidebarProps {
  specialties: Specialty[];
  selectedSpecialtyId: string | null;
  onSelectSpecialty: (id: string) => void;
  language: 'en' | 'vi';
}

export const Sidebar: React.FC<SidebarProps> = ({
  specialties,
  selectedSpecialtyId,
  onSelectSpecialty,
  language,
}) => {
  return (
    <aside className="bg-white border-r border-slate-200 p-4 flex flex-col gap-5 h-full overflow-y-auto min-h-0">
      <div>
        <input 
          type="text" 
          className="w-full p-2 bg-slate-100 border border-slate-200 rounded text-[0.8rem] mb-2.5 focus:outline-none focus:border-blue-800" 
          placeholder={language === 'vi' ? "Search ICD / Specialty... (Tìm mã bệnh / Chuyên khoa)" : "Search ICD / Specialty..."} 
        />
        <div className="text-[0.7rem] uppercase tracking-wider text-slate-600 font-bold mb-2">
          {language === 'vi' ? 'Specialties (Chuyên khoa)' : 'Specialties'}
        </div>
        <ul className="space-y-1">
          {specialties.map((specialty) => {
            const isSelected = specialty.id === selectedSpecialtyId;
            return (
              <li key={specialty.id}>
                <button
                  onClick={() => onSelectSpecialty(specialty.id)}
                  className={`w-full text-left flex flex-col gap-0.5 px-3 py-2 rounded-md transition-colors ${
                    isSelected
                      ? 'bg-blue-50 text-blue-800 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span className="truncate text-[0.9rem]">{specialty.name}</span>
                  {language === 'vi' && specialty.nameVi && (
                    <span className="truncate text-[0.7rem] opacity-75 italic font-normal">{specialty.nameVi}</span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};
