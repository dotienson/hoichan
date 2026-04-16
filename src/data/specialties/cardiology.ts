import { Specialty } from '../types';

export const cardiology: Specialty = {
  id: 'cardiology',
  name: 'Cardiology',
  nameVi: 'Tim mạch',
  iconName: 'HeartPulse',
  guidelines: [
    {
      id: 'cardio-1', name: 'Heart Murmur', nameVi: 'Tiếng thổi ở tim', icdCode: 'R01.1',
      referralWhen: ['< 1 month old or any age with symptoms: (Failure to thrive/poor feeding, cyanosis, weak pulses, respiratory distress)'],
      referralWhenVi: ['< 1 tháng tuổi hoặc bất kỳ độ tuổi nào có triệu chứng: (Chậm lớn/bú kém, tím tái, mạch yếu, suy hô hấp)'],
      workup: ['Echocardiogram', 'ECG', 'Chest X-ray'],
      workupVi: ['Siêu âm tim', 'Điện tâm đồ (ECG)', 'X-quang ngực'],
      urgency: 'urgent'
    },
    {
      id: 'cardio-2', name: 'Chest Pain - Exertional', nameVi: 'Đau ngực - Khi gắng sức', icdCode: 'R07.9',
      referralWhen: ['Chest pain during exertion'],
      referralWhenVi: ['Đau ngực trong lúc gắng sức'],
      workup: ['ECG', 'Echocardiogram'],
      workupVi: ['Điện tâm đồ (ECG)', 'Siêu âm tim'],
      urgency: 'urgent'
    },
    {
      id: 'cardio-3', name: 'Syncope - Exertional', nameVi: 'Ngất - Khi gắng sức', icdCode: 'R55',
      referralWhen: ['Syncope or near-syncope occurring DURING physical exertion'],
      referralWhenVi: ['Ngất hoặc gần ngất xảy ra TRONG LÚC gắng sức'],
      workup: ['ECG', 'Echocardiogram'],
      workupVi: ['Điện tâm đồ (ECG)', 'Siêu âm tim'],
      urgency: 'emergent'
    },
    {
      id: 'cardio-4', name: 'Palpitations / Arrhythmia', nameVi: 'Đánh trống ngực / Rối loạn nhịp tim', icdCode: 'R00.2',
      referralWhen: ['Sensation of rapid heartbeat, skipped beats', 'Accompanied by dizziness, syncope, chest pain', 'Family history of sudden cardiac death'],
      referralWhenVi: ['Cảm giác tim đập nhanh, bỏ nhịp', 'Kèm theo chóng mặt, ngất, đau ngực', 'Tiền sử gia đình có người đột tử do tim'],
      workup: ['ECG', 'Holter monitor (if available)'],
      workupVi: ['Điện tâm đồ (ECG)', 'Máy theo dõi Holter (nếu có)'],
      urgency: 'urgent'
    },
    {
      id: 'cardio-5', name: 'Cyanosis', nameVi: 'Tím tái', icdCode: 'R23.0',
      referralWhen: ['Central cyanosis (lips, oral mucosa)', 'Oxygen saturation < 95% unexplained by respiratory causes'],
      referralWhenVi: ['Tím tái trung tâm (môi, niêm mạc miệng)', 'Độ bão hòa oxy < 95% không giải thích được do nguyên nhân hô hấp'],
      workup: ['Pulse oximetry (pre and post-ductal)', 'Echocardiogram', 'Hyperoxia test'],
      workupVi: ['Đo độ bão hòa oxy qua mạch đập (trước và sau ống động mạch)', 'Siêu âm tim', 'Nghiệm pháp tăng oxy'],
      urgency: 'emergent'
    }
  ]
};
