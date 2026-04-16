import { Specialty } from '../types';

export const ophthalmology: Specialty = {
  id: 'ophthalmology',
  name: 'Ophthalmology',
  nameVi: 'Mắt',
  iconName: 'Eye',
  guidelines: [
    {
      id: 'ophth-1', name: 'Visual Acuity/Behavior Abnormalities', nameVi: 'Bất thường thị lực/hành vi', icdCode: 'H53.9',
      referralWhen: ['No social smile or eye contact at 3 months', 'Strabismus (constant or intermittent) past 4 months', '2-line difference in visual acuity between eyes'],
      referralWhenVi: ['Không có nụ cười giao tiếp hoặc giao tiếp bằng mắt lúc 3 tháng', 'Lác (thường xuyên hoặc ngắt quãng) qua 4 tháng', 'Chênh lệch 2 dòng thị lực giữa hai mắt'],
      workup: ['Vision screening results'],
      workupVi: ['Kết quả sàng lọc thị lực'],
      urgency: 'routine'
    },
    {
      id: 'ophth-2', name: 'Ocular Media Opacities', nameVi: 'Đục môi trường trong suốt của mắt', icdCode: 'H43.3',
      referralWhen: ['Dim or asymmetric red reflex', 'White reflex (leukocoria) - Emergent referral to rule out retinoblastoma'],
      referralWhenVi: ['Phản xạ đỏ mờ hoặc không đối xứng', 'Phản xạ trắng (đồng tử trắng) - Chuyển tuyến tối cấp để loại trừ u nguyên bào võng mạc'],
      workup: ['None required'],
      workupVi: ['Không yêu cầu'],
      timeframe: 'Emergent for leukocoria',
      timeframeVi: 'Tối cấp đối với đồng tử trắng',
      urgency: 'emergent'
    },
    {
      id: 'ophth-3', name: 'Nystagmus', nameVi: 'Rung giật nhãn cầu', icdCode: 'H55.00',
      referralWhen: ['Any child with nystagmus', 'New onset/acute nystagmus requires emergent evaluation'],
      referralWhenVi: ['Bất kỳ trẻ nào bị rung giật nhãn cầu', 'Rung giật nhãn cầu mới khởi phát/cấp tính cần đánh giá tối cấp'],
      workup: ['Neurological exam documentation'],
      workupVi: ['Hồ sơ khám thần kinh'],
      urgency: 'urgent'
    },
    {
      id: 'ophth-4', name: 'Strabismus', nameVi: 'Lác (Lé)', icdCode: 'H50.9',
      referralWhen: ['Constant strabismus at any age', 'Intermittent strabismus persisting past 4 months'],
      referralWhenVi: ['Lác thường xuyên ở bất kỳ độ tuổi nào', 'Lác ngắt quãng kéo dài qua 4 tháng'],
      workup: ['None required'],
      workupVi: ['Không yêu cầu'],
      urgency: 'routine'
    },
    {
      id: 'ophth-5', name: 'Nasolacrimal Duct Obstruction', nameVi: 'Tắc ống lệ mũi', icdCode: 'H04.53',
      referralWhen: ['Tearing/discharge persisting past 1 year', 'Acute dacryocystitis (swelling, redness, pain at inner canthus)'],
      referralWhenVi: ['Chảy nước mắt/đổ ghèn kéo dài qua 1 tuổi', 'Viêm túi lệ cấp tính (sưng, đỏ, đau ở khóe mắt trong)'],
      workup: ['None required'],
      workupVi: ['Không yêu cầu'],
      urgency: 'routine'
    },
    {
      id: 'ophth-6', name: 'Ptosis', nameVi: 'Sụp mi', icdCode: 'H02.40',
      referralWhen: ['Ptosis obscuring visual axis (risk of amblyopia)', 'New onset ptosis', 'Accompanied by pupillary abnormality (suspect Horner\'s)'],
      referralWhenVi: ['Sụp mi che khuất trục thị giác (nguy cơ nhược thị)', 'Sụp mi mới khởi phát', 'Kèm theo bất thường đồng tử (nghi ngờ hội chứng Horner)'],
      workup: ['None required'],
      workupVi: ['Không yêu cầu'],
      urgency: 'urgent'
    }
  ]
};
