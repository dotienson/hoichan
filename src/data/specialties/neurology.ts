import { Specialty } from '../types';

export const neurology: Specialty = {
  id: 'neurology',
  name: 'Neurology',
  nameVi: 'Thần kinh',
  iconName: 'Brain',
  guidelines: [
    {
      id: 'neuro-1', name: 'First Unprovoked Seizure', nameVi: 'Co giật không do sốt lần đầu', icdCode: 'R56.9',
      referralWhen: ['After first unprovoked seizure'],
      referralWhenVi: ['Sau cơn co giật không do sốt lần đầu'],
      workup: ['Order EEG before first visit. If EEG abnormal, schedule urgently.', 'MRI Brain (if indicated)'],
      workupVi: ['Chỉ định điện não đồ (EEG) trước lần khám đầu tiên. Nếu EEG bất thường, lên lịch khám khẩn cấp.', 'MRI não (nếu có chỉ định)'],
      urgency: 'urgent'
    },
    {
      id: 'neuro-2', name: 'Developmental Delay', nameVi: 'Chậm phát triển', icdCode: 'F88',
      referralWhen: ['Concerns for delay in: gross/fine motor, speech, cognitive, personal/social'],
      referralWhenVi: ['Lo ngại về chậm phát triển: vận động thô/tinh, ngôn ngữ, nhận thức, cá nhân/xã hội'],
      workup: ['Developmental screening tools (e.g., ASQ)', 'Hearing/Vision screening'],
      workupVi: ['Các công cụ sàng lọc phát triển (ví dụ: ASQ)', 'Sàng lọc thính lực/thị lực'],
      urgency: 'routine'
    },
    {
      id: 'neuro-3', name: 'Headaches', nameVi: 'Đau đầu', icdCode: 'R51.9',
      referralWhen: ['Acute onset severe headache', 'Headache with focal neurological deficit', 'Headache with papilledema (refer to ED)'],
      referralWhenVi: ['Đau đầu dữ dội khởi phát cấp tính', 'Đau đầu kèm theo thiếu sót thần kinh khu trú', 'Đau đầu kèm theo phù gai thị (chuyển đến phòng cấp cứu)'],
      workup: ['Neurological exam documentation', 'MRI Brain (if red flags present)'],
      workupVi: ['Hồ sơ khám thần kinh', 'MRI não (nếu có dấu hiệu cảnh báo nguy hiểm)'],
      urgency: 'urgent'
    },
    {
      id: 'neuro-4', name: 'Epilepsy', nameVi: 'Động kinh', icdCode: 'G40.909',
      referralWhen: ['Recurrent seizures', 'Poorly controlled epilepsy', 'Side effects of antiepileptic drugs'],
      referralWhenVi: ['Co giật tái phát', 'Động kinh kiểm soát kém', 'Tác dụng phụ của thuốc chống động kinh'],
      workup: ['EEG reports', 'Anti-epileptic drug levels'],
      workupVi: ['Kết quả điện não đồ (EEG)', 'Nồng độ thuốc chống động kinh'],
      urgency: 'routine'
    },
    {
      id: 'neuro-5', name: 'Movement Disorders', nameVi: 'Rối loạn vận động', icdCode: 'G25.9',
      referralWhen: ['Tics affecting daily life', 'Chorea', 'Dystonia'],
      referralWhenVi: ['Tật máy giật (Tics) ảnh hưởng đến cuộc sống hàng ngày', 'Múa vờn', 'Loạn trương lực cơ'],
      workup: ['Video of abnormal movements (if possible)'],
      workupVi: ['Video về các chuyển động bất thường (nếu có thể)'],
      urgency: 'routine'
    },
    {
      id: 'neuro-6', name: 'Neuromuscular Disorders', nameVi: 'Rối loạn thần kinh cơ', icdCode: 'G70.9',
      referralWhen: ['Progressive muscle weakness', 'Areflexia', 'Suspected muscular dystrophy'],
      referralWhenVi: ['Yếu cơ tiến triển', 'Mất phản xạ', 'Nghi ngờ loạn dưỡng cơ'],
      workup: ['CPK level', 'EMG/NCS (if available)'],
      workupVi: ['Nồng độ CPK', 'Điện cơ đồ/Đo tốc độ dẫn truyền thần kinh (nếu có)'],
      urgency: 'urgent'
    }
  ]
};
