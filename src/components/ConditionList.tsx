import React, { useState } from 'react';
import { Specialty, Guideline } from '../data';
import { Search } from 'lucide-react';

interface ConditionListProps {
  specialty: Specialty | null;
  selectedConditionId: string | null;
  onSelectCondition: (id: string) => void;
  language: 'en' | 'vi';
}

const UrgencyBadge: React.FC<{ urgency: Guideline['urgency'], isSelected?: boolean, language: 'en' | 'vi' }> = ({ urgency, isSelected, language }) => {
  switch (urgency) {
    case 'emergent':
      return (
        <span className={`inline-flex flex-col items-center px-3 py-1 rounded-full text-[0.75rem] font-bold uppercase leading-tight ${isSelected ? 'bg-white/20 text-white' : 'bg-red-100 text-red-800'}`}>
          <span>Emergent</span>
          {language === 'vi' && <span className="text-[0.6rem] opacity-80 font-normal normal-case italic">Tối cấp</span>}
        </span>
      );
    case 'urgent':
      return (
        <span className={`inline-flex flex-col items-center px-3 py-1 rounded-full text-[0.75rem] font-bold uppercase leading-tight ${isSelected ? 'bg-white/20 text-white' : 'bg-amber-100 text-amber-800'}`}>
          <span>Urgent</span>
          {language === 'vi' && <span className="text-[0.6rem] opacity-80 font-normal normal-case italic">Khẩn cấp</span>}
        </span>
      );
    case 'routine':
      return (
        <span className={`inline-flex flex-col items-center px-3 py-1 rounded-full text-[0.75rem] font-bold uppercase leading-tight ${isSelected ? 'bg-white/20 text-white' : 'bg-blue-100 text-blue-800'}`}>
          <span>Routine</span>
          {language === 'vi' && <span className="text-[0.6rem] opacity-80 font-normal normal-case italic">Thường quy</span>}
        </span>
      );
    default:
      return null;
  }
};

export const ConditionList: React.FC<ConditionListProps> = ({
  specialty,
  selectedConditionId,
  onSelectCondition,
  language,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  if (!specialty) {
    return (
      <div className="flex-1 flex items-center justify-center bg-white border-r border-slate-200 h-full min-h-0">
        <p className="text-slate-500 text-sm">
          {language === 'vi' ? 'Please select a specialty (Vui lòng chọn một chuyên khoa)' : 'Please select a specialty'}
        </p>
      </div>
    );
  }

  const filteredConditions = specialty.guidelines.filter((g) =>
    g.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    (g.nameVi && g.nameVi.toLowerCase().includes(searchQuery.toLowerCase())) ||
    (g.icdCode && g.icdCode.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="bg-white border-r border-slate-200 flex flex-col h-full min-h-0">
      <div className="p-4 border-b border-slate-200 shrink-0">
        <div className="text-[0.7rem] uppercase tracking-wider text-slate-600 font-bold mb-2">
          {specialty.name}
          {language === 'vi' && specialty.nameVi && <span className="ml-1 opacity-75 italic normal-case">({specialty.nameVi})</span>}
        </div>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-8 pr-2 py-2 border border-slate-200 rounded bg-slate-50 text-[0.8rem] focus:outline-none focus:border-blue-800 focus:ring-1 focus:ring-blue-800 transition-colors"
            placeholder={language === 'vi' ? "Search conditions... (Tìm kiếm bệnh lý)" : "Search conditions..."}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 min-h-0">
        {filteredConditions.length === 0 ? (
          <div className="text-center text-slate-500 text-sm">
            {language === 'vi' ? 'No results found. (Không tìm thấy kết quả nào.)' : 'No results found.'}
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {filteredConditions.map((condition) => {
              const isSelected = condition.id === selectedConditionId;
              return (
                <button
                  key={condition.id}
                  onClick={() => onSelectCondition(condition.id)}
                  className={`text-left border p-2.5 rounded-md transition-all ${
                    isSelected 
                      ? 'bg-blue-800 text-white border-blue-800' 
                      : 'bg-white border-slate-200 text-slate-900 hover:border-blue-800 hover:bg-blue-50'
                  }`}
                >
                  <div className="font-medium mb-1 text-[0.85rem]">
                    {condition.name}
                    {language === 'vi' && condition.nameVi && (
                      <div className={`text-[0.75rem] italic font-normal mt-0.5 ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                        {condition.nameVi}
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className={`text-xs font-mono ${isSelected ? 'text-blue-200' : 'text-slate-500'}`}>
                      {condition.icdCode ? `ICD-10: ${condition.icdCode}` : ''}
                    </span>
                    <UrgencyBadge urgency={condition.urgency} isSelected={isSelected} language={language} />
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
