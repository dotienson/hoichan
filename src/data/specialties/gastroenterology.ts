import { Specialty } from '../types';

export const gastroenterology: Specialty = {
  id: 'gastroenterology',
  name: 'Gastroenterology',
  nameVi: 'Tiêu hóa',
  iconName: 'Activity',
  guidelines: [
    {
      id: 'gi-1', name: 'Chronic Abdominal Pain', nameVi: 'Đau bụng mãn tính', icdCode: 'R10.4',
      referralWhen: ['Persistent pain despite routine care', 'Pain with weight loss, failure to thrive', 'Pain awakening patient at night', 'Pain with fever, vomiting, diarrhea, GI bleeding'],
      referralWhenVi: ['Đau dai dẳng mặc dù đã chăm sóc thường quy', 'Đau kèm sụt cân, chậm lớn', 'Đau làm bệnh nhân thức giấc vào ban đêm', 'Đau kèm sốt, nôn mửa, tiêu chảy, xuất huyết tiêu hóa'],
      workup: ['CBC, ESR, CRP', 'Comprehensive Metabolic Panel (CMP)', 'Stool studies (Occult blood, O&P, culture)'],
      workupVi: ['Công thức máu, Tốc độ máu lắng, CRP', 'Bảng chuyển hóa toàn diện (CMP)', 'Xét nghiệm phân (Máu ẩn, Ký sinh trùng, Cấy phân)'],
      urgency: 'routine'
    },
    {
      id: 'gi-2', name: 'Celiac Disease', nameVi: 'Bệnh Celiac', icdCode: 'K90.0',
      referralWhen: ['Abnormal celiac markers (TTG, endomysial Ab)', 'Unexplained failure to thrive or weight loss', 'Unexplained diarrhea', 'Family history of symptomatic celiac disease'],
      referralWhenVi: ['Dấu ấn celiac bất thường (TTG, kháng thể nội mô)', 'Chậm lớn hoặc sụt cân không rõ nguyên nhân', 'Tiêu chảy không rõ nguyên nhân', 'Tiền sử gia đình mắc bệnh celiac có triệu chứng'],
      workup: ['Tissue Transglutaminase (tTG) IgA', 'Total IgA level'],
      workupVi: ['Kháng thể Tissue Transglutaminase (tTG) IgA', 'Nồng độ IgA toàn phần'],
      urgency: 'routine'
    },
    {
      id: 'gi-3', name: 'Chronic Constipation', nameVi: 'Táo bón mãn tính', icdCode: 'K59.00',
      referralWhen: ['Refractory to optimal medical therapy (osmotic laxatives, lifestyle changes)', 'Suspected Hirschsprung\'s disease', 'Accompanied by failure to thrive'],
      referralWhenVi: ['Kháng trị với liệu pháp y tế tối ưu (thuốc nhuận tràng thẩm thấu, thay đổi lối sống)', 'Nghi ngờ bệnh Hirschsprung', 'Kèm theo chậm lớn'],
      workup: ['Abdominal X-ray (KUB)'],
      workupVi: ['X-quang bụng (KUB)'],
      urgency: 'routine'
    },
    {
      id: 'gi-4', name: 'Inflammatory Bowel Disease (IBD - Crohn\'s/UC)', nameVi: 'Bệnh viêm ruột (IBD - Crohn/Viêm loét đại tràng)', icdCode: 'K52.9',
      referralWhen: ['Prolonged bloody diarrhea', 'Abdominal pain with weight loss, fever, failure to thrive', 'Perianal lesions (fistula, abscess)'],
      referralWhenVi: ['Tiêu chảy ra máu kéo dài', 'Đau bụng kèm sụt cân, sốt, chậm lớn', 'Tổn thương quanh hậu môn (rò, áp xe)'],
      workup: ['CBC, ESR, CRP', 'Stool calprotectin', 'Stool culture'],
      workupVi: ['Công thức máu, Tốc độ máu lắng, CRP', 'Calprotectin trong phân', 'Cấy phân'],
      urgency: 'urgent'
    },
    {
      id: 'gi-5', name: 'Gastroesophageal Reflux Disease (GERD)', nameVi: 'Bệnh trào ngược dạ dày thực quản (GERD)', icdCode: 'K21.9',
      referralWhen: ['Refractory to acid suppression (PPI/H2RA)', 'Accompanied by failure to thrive, hematemesis, dysphagia', 'Respiratory complications (aspiration pneumonia, poorly controlled asthma)'],
      referralWhenVi: ['Kháng trị với thuốc ức chế axit (PPI/H2RA)', 'Kèm theo chậm lớn, nôn ra máu, khó nuốt', 'Biến chứng hô hấp (viêm phổi hít, hen suyễn kiểm soát kém)'],
      workup: ['Upper GI series (if anatomical issue suspected)'],
      workupVi: ['Chụp X-quang đường tiêu hóa trên (nếu nghi ngờ vấn đề giải phẫu)'],
      urgency: 'routine'
    }
  ]
};
