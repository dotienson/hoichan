import { Specialty } from '../types';

export const endocrinology: Specialty = {
  id: 'endocrinology',
  name: 'Endocrinology',
  nameVi: 'Nội tiết',
  iconName: 'Activity',
  guidelines: [
    {
      id: 'endo-1', name: 'Congenital Hypothyroidism (Neonatal)', nameVi: 'Suy giáp bẩm sinh (Sơ sinh)', icdCode: 'E03.1',
      referralWhen: ['Neonate with abnormal newborn screen'],
      referralWhenVi: ['Trẻ sơ sinh có kết quả sàng lọc sơ sinh bất thường'],
      workup: ['Confirmatory Thyroid Function Tests (TSH, Free T4)'],
      workupVi: ['Xét nghiệm chức năng tuyến giáp xác nhận (TSH, Free T4)'],
      urgency: 'urgent'
    },
    {
      id: 'endo-2', name: 'Diabetes Type 1 & 2 / Hyperglycemia', nameVi: 'Đái tháo đường Tuýp 1 & 2 / Tăng đường huyết', icdCode: 'E10.9, E11.9',
      referralWhen: ['Increased thirst and urination', 'Weight loss', 'Vomiting (DKA)', 'Coma (DKA)', 'Deep breathing (DKA)'],
      referralWhenVi: ['Tăng khát và đi tiểu nhiều', 'Sụt cân', 'Nôn mửa (Nhiễm toan ceton do đái tháo đường - DKA)', 'Hôn mê (DKA)', 'Thở sâu (DKA)'],
      workup: ['Fasting blood glucose, HbA1c', 'Urinalysis (for glucose and ketones)'],
      workupVi: ['Đường huyết lúc đói, HbA1c', 'Tổng phân tích nước tiểu (tìm glucose và xeton)'],
      timeframe: 'Emergent if DKA suspected',
      timeframeVi: 'Tối cấp nếu nghi ngờ DKA',
      urgency: 'emergent'
    },
    {
      id: 'endo-3', name: 'Precocious Puberty', nameVi: 'Dậy thì sớm', icdCode: 'E30.1',
      referralWhen: ['Signs of puberty (breast, testicular, pubic hair development) before age 8 (females) or 9 (males)'],
      referralWhenVi: ['Các dấu hiệu dậy thì (phát triển vú, tinh hoàn, lông mu) trước 8 tuổi (nữ) hoặc 9 tuổi (nam)'],
      workup: ['Bone age X-ray', 'LH, FSH, Estradiol/Testosterone levels'],
      workupVi: ['X-quang tuổi xương', 'Nồng độ LH, FSH, Estradiol/Testosterone'],
      urgency: 'routine'
    },
    {
      id: 'endo-4', name: 'Thyroid Abnormalities (Acquired)', nameVi: 'Bất thường tuyến giáp (Mắc phải)', icdCode: 'E07.9',
      referralWhen: ['Goiter', 'Hyperthyroid symptoms (weight loss, tachycardia, tremors)', 'Hypothyroid symptoms (weight gain, fatigue, constipation, failure to thrive)'],
      referralWhenVi: ['Bướu cổ', 'Triệu chứng cường giáp (sụt cân, nhịp tim nhanh, run)', 'Triệu chứng suy giáp (tăng cân, mệt mỏi, táo bón, chậm lớn)'],
      workup: ['TSH, Free T4', 'Thyroid antibodies (TPO, TgAb)'],
      workupVi: ['TSH, Free T4', 'Kháng thể tuyến giáp (TPO, TgAb)'],
      urgency: 'routine'
    },
    {
      id: 'endo-5', name: 'Short Stature', nameVi: 'Thấp lùn', icdCode: 'E34.3',
      referralWhen: ['Height < 3rd percentile', 'Decreased growth velocity (crossing 2 major percentiles)'],
      referralWhenVi: ['Chiều cao < bách phân vị thứ 3', 'Tốc độ tăng trưởng giảm (vượt qua 2 bách phân vị chính)'],
      workup: ['Bone age X-ray', 'IGF-1, IGFBP-3', 'Comprehensive Metabolic Panel (CMP)', 'Celiac screening'],
      workupVi: ['X-quang tuổi xương', 'IGF-1, IGFBP-3', 'Bảng chuyển hóa toàn diện (CMP)', 'Sàng lọc Celiac'],
      urgency: 'routine'
    }
  ]
};
