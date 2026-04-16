import { Specialty } from '../types';

export const hematology: Specialty = {
  id: 'hematology',
  name: 'Hematology',
  nameVi: 'Huyết học',
  iconName: 'Droplet',
  guidelines: [
    {
      id: 'hem-1', name: 'Anemia', nameVi: 'Thiếu máu', icdCode: 'D64.9',
      referralWhen: ['If symptomatic -> Admit', 'If confirmed mild twice -> Refer', 'If confirmed moderate/severe twice -> Urgent admission'],
      referralWhenVi: ['Nếu có triệu chứng -> Nhập viện', 'Nếu xác nhận mức độ nhẹ 2 lần -> Chuyển tuyến', 'Nếu xác nhận mức độ trung bình/nặng 2 lần -> Nhập viện khẩn cấp'],
      workup: ['CBC with differential', 'Reticulocyte count', 'Iron panel (Iron, TIBC, Ferritin)'],
      workupVi: ['Công thức máu có đếm số lượng bạch cầu', 'Hồng cầu lưới', 'Bảng sắt (Sắt, TIBC, Ferritin)'],
      urgency: 'urgent'
    },
    {
      id: 'hem-2', name: 'Thrombocytopenia', nameVi: 'Giảm tiểu cầu', icdCode: 'D69.6',
      referralWhen: ['If symptomatic -> Urgent referral/admit', 'If mild & confirmed twice on CBC -> Refer'],
      referralWhenVi: ['Nếu có triệu chứng -> Chuyển tuyến khẩn cấp/nhập viện', 'Nếu mức độ nhẹ & xác nhận 2 lần trên công thức máu -> Chuyển tuyến'],
      workup: ['CBC with differential', 'Peripheral blood smear'],
      workupVi: ['Công thức máu có đếm số lượng bạch cầu', 'Phết máu ngoại vi'],
      urgency: 'urgent'
    },
    {
      id: 'hem-3', name: 'Coagulopathy / Abnormal Bleeding', nameVi: 'Bệnh lý đông máu / Chảy máu bất thường', icdCode: 'D68.9',
      referralWhen: ['Prolonged bleeding after trauma/surgery', 'Family history of bleeding disorder', 'Abnormal bruising'],
      referralWhenVi: ['Chảy máu kéo dài sau chấn thương/phẫu thuật', 'Tiền sử gia đình mắc bệnh rối loạn đông máu', 'Bầm tím bất thường'],
      workup: ['PT, PTT, INR', 'CBC with platelets'],
      workupVi: ['PT, PTT, INR', 'Công thức máu có tiểu cầu'],
      urgency: 'routine'
    },
    {
      id: 'hem-4', name: 'Sickle Cell Disease', nameVi: 'Bệnh hồng cầu hình liềm', icdCode: 'D57.1',
      referralWhen: ['Positive newborn screen', 'Acute pain crisis, acute chest syndrome, splenomegaly'],
      referralWhenVi: ['Sàng lọc sơ sinh dương tính', 'Cơn đau cấp tính, hội chứng ngực cấp, lách to'],
      workup: ['Hemoglobin electrophoresis', 'CBC with reticulocyte count'],
      workupVi: ['Điện di Hemoglobin', 'Công thức máu với hồng cầu lưới'],
      urgency: 'emergent'
    },
    {
      id: 'hem-5', name: 'Leukocytosis / Leukopenia', nameVi: 'Tăng / Giảm bạch cầu', icdCode: 'D72.80',
      referralWhen: ['Prolonged unexplained leukocytosis/leukopenia', 'Suspected malignancy (acute leukemia)'],
      referralWhenVi: ['Tăng/giảm bạch cầu kéo dài không rõ nguyên nhân', 'Nghi ngờ bệnh lý ác tính (bệnh bạch cầu cấp)'],
      workup: ['CBC with differential', 'Peripheral blood smear'],
      workupVi: ['Công thức máu có đếm số lượng bạch cầu', 'Phết máu ngoại vi'],
      urgency: 'urgent'
    }
  ]
};
