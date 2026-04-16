import React from 'react';
import { Guideline } from '../data';
import { Stethoscope } from 'lucide-react';

interface ConditionDetailProps {
  condition: Guideline | null;
  language: 'en' | 'vi';
}

export const ConditionDetail: React.FC<ConditionDetailProps> = ({ condition, language }) => {
  if (!condition) {
    return (
      <div className="flex-1 flex items-center justify-center bg-slate-100 h-full min-h-0">
        <div className="text-center">
          <Stethoscope className="mx-auto h-12 w-12 text-slate-300" />
          <h3 className="mt-2 text-sm font-medium text-slate-900">
            {language === 'vi' ? 'No condition selected (Chưa chọn bệnh lý)' : 'No condition selected'}
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            {language === 'vi' ? 'Select a condition from the list to view referral guidelines. (Chọn một bệnh lý từ danh sách để xem hướng dẫn hội chẩn.)' : 'Select a condition from the list to view referral guidelines.'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <aside className="flex-1 overflow-y-auto bg-slate-100 p-5 flex flex-col gap-4 h-full min-h-0">
      <div className="text-[0.8rem] font-bold text-slate-600 uppercase shrink-0">
        {language === 'vi' ? 'Decision Panel (Kết quả đề xuất)' : 'Decision Panel'}
      </div>
      
      <div className={`bg-white p-4 rounded shadow-sm border-t-4 shrink-0 ${condition.urgency === 'emergent' ? 'border-red-600' : condition.urgency === 'urgent' ? 'border-amber-600' : 'border-blue-600'}`}>
        <div className={`inline-block px-3 py-1 rounded-full text-[0.75rem] font-bold uppercase mb-2 ${condition.urgency === 'emergent' ? 'bg-red-100 text-red-800' : condition.urgency === 'urgent' ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-800'}`}>
          Urgency: {condition.urgency === 'emergent' ? 'Emergent' : condition.urgency === 'urgent' ? 'Urgent' : 'Routine'}
          {language === 'vi' && <span className="ml-1 opacity-80 normal-case italic">({condition.urgency === 'emergent' ? 'Tối cấp' : condition.urgency === 'urgent' ? 'Khẩn cấp' : 'Thường quy'})</span>}
        </div>
        <h3 className={`text-[1.1rem] font-bold mt-2 ${condition.urgency === 'emergent' ? 'text-red-600' : condition.urgency === 'urgent' ? 'text-amber-600' : 'text-blue-800'}`}>
          {condition.name}
          {language === 'vi' && condition.nameVi && (
            <div className="text-[0.9rem] font-normal italic opacity-80 mt-0.5">{condition.nameVi}</div>
          )}
        </h3>
        {condition.icdCode && (
          <div className="text-sm text-slate-500 font-mono mt-1">ICD-10: {condition.icdCode}</div>
        )}
        
        <div className="mt-3 text-[0.85rem] leading-relaxed">
          <div className="flex gap-2 mb-1.5">
            <span className="text-blue-800 font-bold">•</span>
            <div><b>When to Refer{language === 'vi' && <span className="font-normal italic text-slate-500 ml-1">(Khi nào cần hội chẩn)</span>}:</b>
              <ul className="ml-4 mt-1 space-y-1">
                {condition.referralWhen.map((item, idx) => (
                  <li key={idx} className="mb-1.5">
                    - {item}
                    {language === 'vi' && condition.referralWhenVi?.[idx] && (
                      <div className="text-[0.75rem] text-slate-500 italic ml-3">{condition.referralWhenVi[idx]}</div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {condition.timeframe && (
            <div className="flex gap-2 mb-1.5">
              <span className="text-blue-800 font-bold">•</span>
              <div>
                <b>Timeframe / Notes{language === 'vi' && <span className="font-normal italic text-slate-500 ml-1">(Thời gian đáp ứng)</span>}:</b> {condition.timeframe}
                {language === 'vi' && condition.timeframeVi && (
                  <div className="text-[0.75rem] text-slate-500 italic mt-0.5">{condition.timeframeVi}</div>
                )}
              </div>
            </div>
          )}
          
          <div className="flex gap-2 mb-1.5">
            <span className="text-blue-800 font-bold">•</span>
            <div><b>Pre-referral Workup{language === 'vi' && <span className="font-normal italic text-slate-500 ml-1">(Chuẩn bị trước khi hội chẩn)</span>}:</b>
              <ul className="ml-4 mt-1 space-y-1">
                {condition.workup.map((item, idx) => (
                  <li key={idx} className="mb-1.5">
                    - {item}
                    {language === 'vi' && condition.workupVi?.[idx] && (
                      <div className="text-[0.75rem] text-slate-500 italic ml-3">{condition.workupVi[idx]}</div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {condition.requirements && condition.requirements.length > 0 && (
            <div className="flex gap-2 mb-1.5">
              <span className="text-blue-800 font-bold">•</span>
              <div><b>Additional Requirements{language === 'vi' && <span className="font-normal italic text-slate-500 ml-1">(Yêu cầu thêm)</span>}:</b>
                <ul className="ml-4 mt-1 space-y-1">
                  {condition.requirements.map((item, idx) => (
                    <li key={idx} className="mb-1.5">
                      - {item}
                      {language === 'vi' && condition.requirementsVi?.[idx] && (
                        <div className="text-[0.75rem] text-slate-500 italic ml-3">{condition.requirementsVi[idx]}</div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};
