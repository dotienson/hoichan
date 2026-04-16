import { Specialty } from '../types';

export const infectious: Specialty = {
  id: 'infectious',
  name: 'Infectious Disease',
  nameVi: 'Truyền nhiễm',
  iconName: 'ShieldAlert',
  guidelines: [
    {
      id: 'id-1', name: 'Recurring Fevers', nameVi: 'Sốt tái phát', icdCode: 'R50.9',
      referralWhen: ['Recurring fevers of unknown origin for months', 'No evidence of rheumatologic disorder or malignancy'],
      referralWhenVi: ['Sốt tái phát không rõ nguyên nhân trong nhiều tháng', 'Không có bằng chứng về rối loạn thấp khớp hoặc bệnh lý ác tính'],
      workup: ['CBC, ESR, CRP', 'Blood cultures during fever', 'Urinalysis'],
      workupVi: ['Công thức máu, Tốc độ máu lắng, CRP', 'Cấy máu trong lúc sốt', 'Tổng phân tích nước tiểu'],
      urgency: 'routine'
    },
    {
      id: 'id-2', name: 'Latent TB Infection', nameVi: 'Nhiễm lao tiềm ẩn', icdCode: 'Z22.2',
      referralWhen: ['Confusion or concerns regarding treatment'],
      referralWhenVi: ['Nhầm lẫn hoặc lo ngại về việc điều trị'],
      workup: ['PPD or IGRA results', 'Chest X-ray'],
      workupVi: ['Kết quả xét nghiệm PPD hoặc IGRA', 'X-quang ngực'],
      urgency: 'routine'
    },
    {
      id: 'id-3', name: 'Recurrent MRSA Infection', nameVi: 'Nhiễm trùng MRSA tái phát', icdCode: 'B95.62',
      referralWhen: ['Recurrent MRSA skin/soft tissue infection despite decolonization'],
      referralWhenVi: ['Nhiễm trùng da/mô mềm do MRSA tái phát mặc dù đã khử khuẩn'],
      workup: ['Wound culture results'],
      workupVi: ['Kết quả cấy dịch vết thương'],
      urgency: 'routine'
    },
    {
      id: 'id-4', name: 'Lyme Disease', nameVi: 'Bệnh Lyme', icdCode: 'A69.20',
      referralWhen: ['Suspected complicated Lyme disease (neuro, cardio, joint)', 'Refractory Lyme disease'],
      referralWhenVi: ['Nghi ngờ bệnh Lyme biến chứng (thần kinh, tim mạch, khớp)', 'Bệnh Lyme kháng trị'],
      workup: ['Lyme serology (ELISA and Western Blot)'],
      workupVi: ['Huyết thanh học Lyme (ELISA và Western Blot)'],
      urgency: 'urgent'
    },
    {
      id: 'id-5', name: 'HIV Infection / Exposure', nameVi: 'Nhiễm / Phơi nhiễm HIV', icdCode: 'Z20.6',
      referralWhen: ['Infant born to HIV-positive mother', 'Child diagnosed with HIV'],
      referralWhenVi: ['Trẻ sơ sinh sinh ra từ mẹ nhiễm HIV', 'Trẻ được chẩn đoán nhiễm HIV'],
      workup: ['Maternal HIV records', 'HIV DNA PCR (for infants)'],
      workupVi: ['Hồ sơ HIV của mẹ', 'HIV DNA PCR (đối với trẻ sơ sinh)'],
      urgency: 'urgent'
    }
  ]
};
