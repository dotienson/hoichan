import { Specialty } from '../types';

export const rheumatology: Specialty = {
  id: 'rheumatology',
  name: 'Rheumatology',
  nameVi: 'Cơ xương khớp',
  iconName: 'Activity',
  guidelines: [
    {
      id: 'rheum-1', name: 'Arthralgias', nameVi: 'Đau khớp', icdCode: 'M25.50',
      referralWhen: ['Prolonged joint swelling', 'Prolonged limping', 'Joint contracture'],
      referralWhenVi: ['Sưng khớp kéo dài', 'Đi khập khiễng kéo dài', 'Co rút khớp'],
      workup: ['CBC, ESR, CRP', 'X-ray of affected joint'],
      workupVi: ['Công thức máu, Tốc độ máu lắng, CRP', 'X-quang khớp bị ảnh hưởng'],
      urgency: 'routine'
    },
    {
      id: 'rheum-2', name: 'Weakness', nameVi: 'Yếu cơ', icdCode: 'M62.81',
      referralWhen: ['Prolonged weakness not due to neurological issues', 'Typical DM rash', 'MRI shows muscle edema'],
      referralWhenVi: ['Yếu cơ kéo dài không do nguyên nhân thần kinh', 'Phát ban điển hình của viêm cơ địa', 'MRI cho thấy phù nề cơ'],
      workup: ['CPK, Aldolase, LDH, AST', 'MRI of muscle'],
      workupVi: ['CPK, Aldolase, LDH, AST', 'MRI cơ'],
      urgency: 'urgent'
    },
    {
      id: 'rheum-3', name: 'Malar Rash', nameVi: 'Phát ban cánh bướm', icdCode: 'L93.0',
      referralWhen: ['Prolonged rash, ulcers', 'Positive Lupus antibodies', 'Other systemic signs of Lupus'],
      referralWhenVi: ['Phát ban kéo dài, loét', 'Kháng thể Lupus dương tính', 'Các dấu hiệu toàn thân khác của Lupus'],
      workup: ['ANA, dsDNA, Sm, Ro, La', 'CBC, Urinalysis'],
      workupVi: ['ANA, dsDNA, Sm, Ro, La', 'Công thức máu, Tổng phân tích nước tiểu'],
      urgency: 'urgent'
    },
    {
      id: 'rheum-4', name: 'Fever of Unknown Origin (FUO)', nameVi: 'Sốt không rõ nguyên nhân', icdCode: 'R50.9',
      referralWhen: ['Fever lasting > 2 weeks', 'No source of infection found', 'Suspected Still\'s disease, Kawasaki, Lupus'],
      referralWhenVi: ['Sốt kéo dài > 2 tuần', 'Không tìm thấy nguồn lây nhiễm', 'Nghi ngờ bệnh Still, Kawasaki, Lupus'],
      workup: ['CBC, ESR, CRP, Blood culture', 'Echocardiogram (if Kawasaki suspected)'],
      workupVi: ['Công thức máu, Tốc độ máu lắng, CRP, Cấy máu', 'Siêu âm tim (nếu nghi ngờ Kawasaki)'],
      urgency: 'urgent'
    },
    {
      id: 'rheum-5', name: 'Vasculitis', nameVi: 'Viêm mạch', icdCode: 'I77.6',
      referralWhen: ['Prolonged or complicated Henoch-Schonlein Purpura (HSP)', 'Suspected systemic vasculitis'],
      referralWhenVi: ['Ban xuất huyết Henoch-Schonlein (HSP) kéo dài hoặc biến chứng', 'Nghi ngờ viêm mạch toàn thân'],
      workup: ['Urinalysis, BUN, Creatinine', 'CBC, ESR, CRP'],
      workupVi: ['Tổng phân tích nước tiểu, BUN, Creatinine', 'Công thức máu, Tốc độ máu lắng, CRP'],
      urgency: 'urgent'
    }
  ]
};
