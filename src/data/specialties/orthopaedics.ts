import { Specialty } from '../types';

export const orthopaedics: Specialty = {
  id: 'orthopaedics',
  name: 'Orthopaedics',
  nameVi: 'Chấn thương chỉnh hình',
  iconName: 'Bone',
  guidelines: [
    {
      id: 'ortho-1', name: 'Flat Feet', nameVi: 'Bàn chân bẹt', icdCode: 'M21.4',
      referralWhen: ['Joint stiffness', 'Limited subtalar joint motion', 'Convex sole'],
      referralWhenVi: ['Cứng khớp', 'Hạn chế vận động khớp dưới sên', 'Lòng bàn chân lồi'],
      workup: ['Consider tarsal coalition', 'Consider JRA', 'Weight-bearing foot X-rays'],
      workupVi: ['Xem xét dính khớp cổ chân', 'Xem xét viêm khớp dạng thấp thiếu niên', 'X-quang bàn chân chịu lực'],
      urgency: 'routine'
    },
    {
      id: 'ortho-2', name: 'Chronic Knee Pain', nameVi: 'Đau đầu gối mãn tính', icdCode: 'M25.56',
      referralWhen: ['Knee pain for 3 weeks or more', 'Positive X-ray', 'Positive MRI'],
      referralWhenVi: ['Đau đầu gối từ 3 tuần trở lên', 'X-quang có bất thường', 'MRI có bất thường'],
      workup: ['Knee X-rays (AP, Lateral, Sunrise views)'],
      workupVi: ['X-quang đầu gối (Thẳng, Nghiêng, Chếch)'],
      urgency: 'routine'
    },
    {
      id: 'ortho-3', name: 'Scoliosis', nameVi: 'Vẹo cột sống', icdCode: 'M41.9',
      referralWhen: ['Angle of Trunk Rotation (ATR) >= 5', 'X-ray shows curve >= 20 degrees (11 yrs - adult) or >= 10 degrees (0-10 yrs)'],
      referralWhenVi: ['Góc xoay thân (ATR) >= 5', 'X-quang cho thấy đường cong >= 20 độ (11 tuổi - người lớn) hoặc >= 10 độ (0-10 tuổi)'],
      workup: ['Standing PA and Lateral spine X-rays'],
      workupVi: ['X-quang cột sống đứng thẳng và nghiêng'],
      urgency: 'routine'
    },
    {
      id: 'ortho-4', name: 'Developmental Dysplasia of the Hip (DDH)', nameVi: 'Loạn sản khớp háng phát triển (DDH)', icdCode: 'Q65.89',
      referralWhen: ['Positive Barlow/Ortolani signs on clinical exam', 'Abnormal hip ultrasound', 'Asymmetric gluteal/thigh folds'],
      referralWhenVi: ['Dấu hiệu Barlow/Ortolani dương tính khi khám lâm sàng', 'Siêu âm khớp háng bất thường', 'Nếp gấp mông/đùi không đối xứng'],
      workup: ['Hip ultrasound (if < 6 months)', 'AP pelvis X-ray (if > 6 months)'],
      workupVi: ['Siêu âm khớp háng (nếu < 6 tháng)', 'X-quang khung chậu thẳng (nếu > 6 tháng)'],
      urgency: 'urgent'
    },
    {
      id: 'ortho-5', name: 'Toe Walking', nameVi: 'Đi nhón gót', icdCode: 'R26.89',
      referralWhen: ['Persists past 3 years of age', 'Accompanied by heel cord contracture', 'Suspected neurological cause'],
      referralWhenVi: ['Kéo dài qua 3 tuổi', 'Kèm theo co rút gân gót', 'Nghi ngờ nguyên nhân thần kinh'],
      workup: ['Neurological exam documentation'],
      workupVi: ['Hồ sơ khám thần kinh'],
      urgency: 'routine'
    },
    {
      id: 'ortho-6', name: 'Bowed Legs / Knock Knees', nameVi: 'Chân vòng kiềng / Chân chữ X', icdCode: 'M21.20',
      referralWhen: ['Asymmetry', 'Progressive worsening', 'Accompanied by pain or limping', 'Outside physiological limits for age'],
      referralWhenVi: ['Không đối xứng', 'Tiến triển xấu đi', 'Kèm theo đau hoặc đi khập khiễng', 'Nằm ngoài giới hạn sinh lý theo tuổi'],
      workup: ['Standing AP lower extremity X-rays'],
      workupVi: ['X-quang chi dưới đứng thẳng'],
      urgency: 'routine'
    },
    {
      id: 'ortho-7', name: 'Limping', nameVi: 'Đi khập khiễng', icdCode: 'R26.2',
      referralWhen: ['Unexplained limping', 'Lasting > 1 week', 'Accompanied by fever or severe pain'],
      referralWhenVi: ['Đi khập khiễng không rõ nguyên nhân', 'Kéo dài > 1 tuần', 'Kèm theo sốt hoặc đau dữ dội'],
      workup: ['CBC, ESR, CRP', 'X-rays of affected limb'],
      workupVi: ['Công thức máu, Tốc độ máu lắng, CRP', 'X-quang chi bị ảnh hưởng'],
      urgency: 'urgent'
    }
  ]
};
