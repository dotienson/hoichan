import { Specialty } from '../types';

export const pulmonology: Specialty = {
  id: 'pulmonology',
  name: 'Pulmonology',
  nameVi: 'Hô hấp',
  iconName: 'Wind',
  guidelines: [
    {
      id: 'pulm-1', name: 'Apnea < 1 year old', nameVi: 'Ngưng thở < 1 tuổi', icdCode: 'P28.4',
      referralWhen: ['Symptomatic infant < 1 year old'],
      referralWhenVi: ['Trẻ sơ sinh có triệu chứng < 1 tuổi'],
      workup: ['Neonatal or hospital records', 'Chest X-ray'],
      workupVi: ['Hồ sơ sơ sinh hoặc bệnh viện', 'X-quang ngực'],
      urgency: 'urgent'
    },
    {
      id: 'pulm-2', name: 'Asthma', nameVi: 'Hen suyễn', icdCode: 'J45.909',
      referralWhen: ['Poorly controlled', 'Systemic steroids >2 times/year', 'Exacerbation requiring hospitalization', 'Moderate/severe persistent asthma'],
      referralWhenVi: ['Kiểm soát kém', 'Dùng steroid toàn thân >2 lần/năm', 'Đợt cấp cần nhập viện', 'Hen suyễn dai dẳng mức độ trung bình/nặng'],
      workup: ['Spirometry (if > 6 years old)', 'Allergy testing results'],
      workupVi: ['Đo hô hấp ký (nếu > 6 tuổi)', 'Kết quả xét nghiệm dị ứng'],
      urgency: 'routine'
    },
    {
      id: 'pulm-3', name: 'Chronic Cough', nameVi: 'Ho mãn tính', icdCode: 'R05.3',
      referralWhen: ['No improvement after appropriate bronchodilators, oral steroids, antibiotics'],
      referralWhenVi: ['Không cải thiện sau khi dùng thuốc giãn phế quản, steroid uống, kháng sinh phù hợp'],
      workup: ['Chest X-ray', 'Spirometry (if > 6 years old)'],
      workupVi: ['X-quang ngực', 'Đo hô hấp ký (nếu > 6 tuổi)'],
      urgency: 'routine'
    },
    {
      id: 'pulm-4', name: 'Bronchopulmonary Dysplasia (BPD)', nameVi: 'Loạn sản phổi phế quản (BPD)', icdCode: 'P27.1',
      referralWhen: ['Premature infant with history of BPD requiring respiratory follow-up', 'Home oxygen dependent'],
      referralWhenVi: ['Trẻ sinh non có tiền sử BPD cần theo dõi hô hấp', 'Phụ thuộc oxy tại nhà'],
      workup: ['NICU discharge summary', 'Recent chest X-ray'],
      workupVi: ['Tóm tắt xuất viện NICU', 'X-quang ngực gần đây'],
      urgency: 'routine'
    },
    {
      id: 'pulm-5', name: 'Cystic Fibrosis', nameVi: 'Xơ nang', icdCode: 'E84.9',
      referralWhen: ['Positive newborn screen', 'Respiratory/GI symptoms suspicious for CF'],
      referralWhenVi: ['Sàng lọc sơ sinh dương tính', 'Triệu chứng hô hấp/tiêu hóa nghi ngờ xơ nang'],
      workup: ['Sweat chloride test', 'Genetic testing results'],
      workupVi: ['Xét nghiệm clo trong mồ hôi', 'Kết quả xét nghiệm di truyền'],
      urgency: 'urgent'
    },
    {
      id: 'pulm-6', name: 'Recurrent Pneumonia', nameVi: 'Viêm phổi tái phát', icdCode: 'J18.9',
      referralWhen: ['> 2 episodes of pneumonia in 1 year', '> 3 episodes of pneumonia in lifetime', 'Pneumonia not completely resolved on X-ray'],
      referralWhenVi: ['> 2 đợt viêm phổi trong 1 năm', '> 3 đợt viêm phổi trong đời', 'Viêm phổi không giải quyết hoàn toàn trên X-quang'],
      workup: ['All previous chest X-rays', 'Immunoglobulin levels (IgG, IgA, IgM, IgE)'],
      workupVi: ['Tất cả các phim X-quang ngực trước đó', 'Nồng độ Immunoglobulin (IgG, IgA, IgM, IgE)'],
      urgency: 'routine'
    },
    {
      id: 'pulm-7', name: 'Stridor', nameVi: 'Thở rít', icdCode: 'R06.1',
      referralWhen: ['Prolonged stridor', 'Accompanied by dyspnea, cyanosis, failure to thrive'],
      referralWhenVi: ['Thở rít kéo dài', 'Kèm theo khó thở, tím tái, chậm lớn'],
      workup: ['Airway fluoroscopy or neck X-ray'],
      workupVi: ['Nội soi đường thở hoặc X-quang cổ'],
      urgency: 'urgent'
    }
  ]
};
