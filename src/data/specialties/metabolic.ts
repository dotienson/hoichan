import { Specialty } from '../types';

export const metabolic: Specialty = {
  id: 'metabolic',
  name: 'Metabolic Disorders',
  nameVi: 'Rối loạn chuyển hóa',
  iconName: 'Activity',
  guidelines: [
    {
      id: 'metab-1', name: 'Developmental Regression / Cognitive Decline', nameVi: 'Thoái triển phát triển / Suy giảm nhận thức', icdCode: 'F88',
      referralWhen: ['Developmental regression (transient or progressive)', 'Cognitive decline after intercurrent illness', 'Unexplained mental status changes'],
      referralWhenVi: ['Thoái triển phát triển (thoáng qua hoặc tiến triển)', 'Suy giảm nhận thức sau bệnh lý xen kẽ', 'Thay đổi trạng thái tinh thần không rõ nguyên nhân'],
      workup: ['Ammonia, Lactic acid', 'Plasma amino acids, Urine organic acids'],
      workupVi: ['Amoniac, Axit lactic', 'Axit amin huyết tương, Axit hữu cơ niệu'],
      urgency: 'urgent'
    },
    {
      id: 'metab-2', name: 'Hypoglycemia / Recurrent Hypoglycemia', nameVi: 'Hạ đường huyết / Hạ đường huyết tái phát', icdCode: 'E16.2',
      referralWhen: ['Symptoms suggesting hypoglycemia after prolonged fasting', 'Documented hypoglycemia (< 50 mg/dl)', 'Accompanied by metabolic acidosis, elevated lactic acid, abnormal ketones'],
      referralWhenVi: ['Các triệu chứng gợi ý hạ đường huyết sau khi nhịn ăn kéo dài', 'Hạ đường huyết được ghi nhận (< 50 mg/dl)', 'Kèm theo nhiễm toan chuyển hóa, tăng axit lactic, xeton bất thường'],
      workup: ['Critical sample during hypoglycemia (Glucose, Insulin, Cortisol, GH, Ketones, Lactic acid)'],
      workupVi: ['Mẫu bệnh phẩm quan trọng trong lúc hạ đường huyết (Glucose, Insulin, Cortisol, GH, Ketones, Axit lactic)'],
      urgency: 'emergent'
    },
    {
      id: 'metab-3', name: 'Unexplained Metabolic Acidosis', nameVi: 'Nhiễm toan chuyển hóa không rõ nguyên nhân', icdCode: 'E87.2',
      referralWhen: ['Persistent or recurrent metabolic acidosis', 'Increased anion gap'],
      referralWhenVi: ['Nhiễm toan chuyển hóa dai dẳng hoặc tái phát', 'Tăng khoảng trống anion'],
      workup: ['ABG/VBG, Electrolytes', 'Lactic acid, Ammonia', 'Urine organic acids'],
      workupVi: ['Khí máu động mạch/tĩnh mạch, Điện giải đồ', 'Axit lactic, Amoniac', 'Axit hữu cơ niệu'],
      urgency: 'urgent'
    },
    {
      id: 'metab-4', name: 'Hyperammonemia', nameVi: 'Tăng amoniac máu', icdCode: 'E72.20',
      referralWhen: ['Elevated ammonia not due to liver failure'],
      referralWhenVi: ['Tăng amoniac không do suy gan'],
      workup: ['Liver function tests (LFTs)', 'Plasma amino acids'],
      workupVi: ['Xét nghiệm chức năng gan (LFTs)', 'Axit amin huyết tương'],
      urgency: 'emergent'
    },
    {
      id: 'metab-5', name: 'Abnormal Newborn Screen (NBS)', nameVi: 'Sàng lọc sơ sinh (NBS) bất thường', icdCode: 'P96.89',
      referralWhen: ['Positive newborn screen for metabolic disorder'],
      referralWhenVi: ['Sàng lọc sơ sinh dương tính với rối loạn chuyển hóa'],
      workup: ['Confirmatory testing as recommended by NBS program'],
      workupVi: ['Xét nghiệm xác nhận theo khuyến cáo của chương trình NBS'],
      urgency: 'urgent'
    }
  ]
};
