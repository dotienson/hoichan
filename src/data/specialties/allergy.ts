import { Specialty } from '../types';

export const allergy: Specialty = {
  id: 'allergy',
  name: 'Allergy & Immunology',
  nameVi: 'Dị ứng & Miễn dịch',
  iconName: 'ShieldAlert',
  guidelines: [
    {
      id: 'allergy-1', name: 'Anaphylaxis', nameVi: 'Sốc phản vệ', icdCode: 'T78.2',
      referralWhen: ['If cause of anaphylaxis is unclear or reaction is particularly severe', 'If family wants to learn more about other potential allergies', 'Anaphylaxis due to food, medication, exercise, or venom'],
      referralWhenVi: ['Nếu nguyên nhân gây sốc phản vệ không rõ ràng hoặc phản ứng đặc biệt nghiêm trọng', 'Nếu gia đình muốn tìm hiểu thêm về các dị ứng tiềm ẩn khác', 'Sốc phản vệ do thức ăn, thuốc, tập thể dục hoặc nọc độc'],
      workup: ['Detailed history of the event', 'List of suspected triggers'],
      workupVi: ['Bệnh sử chi tiết về sự kiện', 'Danh sách các tác nhân nghi ngờ'],
      urgency: 'urgent'
    },
    {
      id: 'allergy-2', name: 'Food Allergy', nameVi: 'Dị ứng thức ăn', icdCode: 'Z91.01',
      referralWhen: ['History of allergic symptoms (anaphylaxis, urticaria, angioedema, pruritus, wheezing, GI reaction) related to food exposure', 'Patient diagnosed with food allergy needing ongoing guidance'],
      referralWhenVi: ['Tiền sử có các triệu chứng dị ứng (sốc phản vệ, nổi mề đay, phù mạch, ngứa, thở khò khè, phản ứng tiêu hóa) liên quan đến việc tiếp xúc với thức ăn', 'Bệnh nhân được chẩn đoán dị ứng thức ăn cần được hướng dẫn liên tục'],
      workup: ['Food diary', 'Previous allergy testing results (if any)'],
      workupVi: ['Nhật ký thức ăn', 'Kết quả xét nghiệm dị ứng trước đó (nếu có)'],
      urgency: 'routine'
    },
    {
      id: 'allergy-3', name: 'Allergic Rhinitis', nameVi: 'Viêm mũi dị ứng', icdCode: 'J30.9',
      referralWhen: ['Persistent symptoms uncontrolled by antihistamines and nasal steroids', 'Accompanied by poorly controlled asthma', 'Suspected nasal polyps'],
      referralWhenVi: ['Các triệu chứng dai dẳng không kiểm soát được bằng thuốc kháng histamin và steroid xịt mũi', 'Kèm theo hen suyễn kiểm soát kém', 'Nghi ngờ polyp mũi'],
      workup: ['Trial of nasal corticosteroids for at least 4 weeks'],
      workupVi: ['Thử dùng corticosteroid xịt mũi trong ít nhất 4 tuần'],
      urgency: 'routine'
    },
    {
      id: 'allergy-4', name: 'Chronic Urticaria', nameVi: 'Mề đay mãn tính', icdCode: 'L50.9',
      referralWhen: ['Urticaria lasting > 6 weeks', 'Unresponsive to high-dose antihistamines', 'Accompanied by life-threatening angioedema'],
      referralWhenVi: ['Mề đay kéo dài > 6 tuần', 'Không đáp ứng với thuốc kháng histamin liều cao', 'Kèm theo phù mạch đe dọa tính mạng'],
      workup: ['CBC, ESR, CRP', 'TSH, Free T4'],
      workupVi: ['Công thức máu, Tốc độ máu lắng, CRP', 'TSH, Free T4'],
      urgency: 'routine'
    },
    {
      id: 'allergy-5', name: 'Immunodeficiency', nameVi: 'Suy giảm miễn dịch', icdCode: 'D84.9',
      referralWhen: ['Abnormal recurrent infections (e.g., >2 pneumonias/year, >4 otitis media/year)', 'Opportunistic infections', 'Failure to thrive with chronic diarrhea'],
      referralWhenVi: ['Nhiễm trùng tái phát bất thường (ví dụ: >2 lần viêm phổi/năm, >4 lần viêm tai giữa/năm)', 'Nhiễm trùng cơ hội', 'Chậm lớn kèm theo tiêu chảy mãn tính'],
      workup: ['CBC with differential', 'Quantitative immunoglobulins (IgG, IgA, IgM, IgE)'],
      workupVi: ['Công thức máu có đếm số lượng bạch cầu', 'Định lượng immunoglobulin (IgG, IgA, IgM, IgE)'],
      urgency: 'urgent'
    }
  ]
};
