import { Specialty } from '../types';

export const nephrology: Specialty = {
  id: 'nephrology',
  name: 'Nephrology',
  nameVi: 'Thận học',
  iconName: 'Activity',
  guidelines: [
    {
      id: 'nephro-1', name: 'Microhematuria', nameVi: 'Tiểu máu vi thể', icdCode: 'R31.1',
      referralWhen: ['Persistent (3 urinalyses on 3 separate occasions)'],
      referralWhenVi: ['Dai dẳng (3 lần xét nghiệm nước tiểu vào 3 dịp khác nhau)'],
      workup: ['Urinalysis with microscopy', 'Renal ultrasound', 'Urine Calcium/Creatinine ratio'],
      workupVi: ['Tổng phân tích nước tiểu có soi cặn', 'Siêu âm thận', 'Tỷ lệ Canxi/Creatinine niệu'],
      urgency: 'routine'
    },
    {
      id: 'nephro-2', name: 'Proteinuria', nameVi: 'Tiểu protein', icdCode: 'R80.9',
      referralWhen: ['First morning urine with proteinuria >= +1'],
      referralWhenVi: ['Nước tiểu buổi sáng đầu tiên có protein niệu >= +1'],
      workup: ['First morning Urinalysis', 'Urine Protein/Creatinine ratio', 'Basic Metabolic Panel (BMP)'],
      workupVi: ['Tổng phân tích nước tiểu buổi sáng đầu tiên', 'Tỷ lệ Protein/Creatinine niệu', 'Bảng chuyển hóa cơ bản (BMP)'],
      urgency: 'routine'
    },
    {
      id: 'nephro-3', name: 'Hypertension', nameVi: 'Tăng huyết áp', icdCode: 'I10',
      referralWhen: ['BP > 95th percentile for age, sex, height on 3 separate days'],
      referralWhenVi: ['Huyết áp > bách phân vị thứ 95 theo tuổi, giới tính, chiều cao vào 3 ngày khác nhau'],
      workup: ['Renal ultrasound with Doppler', 'Echocardiogram', 'BMP, Urinalysis'],
      workupVi: ['Siêu âm thận có Doppler', 'Siêu âm tim', 'BMP, Tổng phân tích nước tiểu'],
      urgency: 'urgent'
    },
    {
      id: 'nephro-4', name: 'Nephrotic Syndrome', nameVi: 'Hội chứng thận hư', icdCode: 'N04.9',
      referralWhen: ['Edema, heavy proteinuria, hypoalbuminemia, hyperlipidemia'],
      referralWhenVi: ['Phù, protein niệu nhiều, giảm albumin máu, tăng lipid máu'],
      workup: ['Urinalysis', 'Comprehensive Metabolic Panel (CMP)', 'Lipid panel'],
      workupVi: ['Tổng phân tích nước tiểu', 'Bảng chuyển hóa toàn diện (CMP)', 'Bảng lipid'],
      urgency: 'urgent'
    },
    {
      id: 'nephro-5', name: 'Acute Glomerulonephritis', nameVi: 'Viêm cầu thận cấp', icdCode: 'N00.9',
      referralWhen: ['Gross hematuria, edema, hypertension, oliguria'],
      referralWhenVi: ['Tiểu máu đại thể, phù, tăng huyết áp, thiểu niệu'],
      workup: ['Urinalysis', 'BMP', 'C3, C4, ASO titer'],
      workupVi: ['Tổng phân tích nước tiểu', 'BMP', 'C3, C4, Định lượng ASO'],
      urgency: 'emergent'
    },
    {
      id: 'nephro-6', name: 'Chronic Kidney Disease', nameVi: 'Bệnh thận mãn tính', icdCode: 'N18.9',
      referralWhen: ['Decreased eGFR, structural kidney abnormality, prolonged proteinuria/hematuria'],
      referralWhenVi: ['Giảm eGFR, bất thường cấu trúc thận, tiểu protein/tiểu máu kéo dài'],
      workup: ['BMP', 'Renal ultrasound', 'Urinalysis'],
      workupVi: ['BMP', 'Siêu âm thận', 'Tổng phân tích nước tiểu'],
      urgency: 'routine'
    }
  ]
};
