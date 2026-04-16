import { Specialty } from '../types';

export const urology: Specialty = {
  id: 'urology',
  name: 'Urology',
  nameVi: 'Tiết niệu',
  iconName: 'Droplet',
  guidelines: [
    {
      id: 'uro-1', name: 'Balanitis', nameVi: 'Viêm bao quy đầu', icdCode: 'N48.1',
      referralWhen: ['Refractory to supportive measures', 'Accompanied by UTI'],
      referralWhenVi: ['Không đáp ứng với các biện pháp hỗ trợ', 'Kèm theo nhiễm trùng tiểu (UTI)'],
      workup: ['No special requirements', 'Urine Culture & Sensitivity (C&S) and Urinalysis'],
      workupVi: ['Không có yêu cầu đặc biệt', 'Cấy nước tiểu & Kháng sinh đồ (C&S) và Tổng phân tích nước tiểu'],
      urgency: 'routine'
    },
    {
      id: 'uro-2', name: 'Bladder Stones', nameVi: 'Sỏi bàng quang', icdCode: 'N21.0',
      referralWhen: ['Any pediatric patient with urinary stones'],
      referralWhenVi: ['Bất kỳ bệnh nhi nào có sỏi đường tiết niệu'],
      workup: ['See urinary stone algorithm'],
      workupVi: ['Xem phác đồ sỏi đường tiết niệu'],
      urgency: 'routine'
    },
    {
      id: 'uro-3', name: 'Circumcision (Elective)', nameVi: 'Cắt bao quy đầu (Chủ động)', icdCode: 'Z41.2',
      referralWhen: ['Per family request'],
      referralWhenVi: ['Theo yêu cầu của gia đình'],
      workup: ['None required'],
      workupVi: ['Không yêu cầu'],
      urgency: 'routine'
    },
    {
      id: 'uro-4', name: 'Cloacal Anomaly', nameVi: 'Dị tật ổ nhớp', icdCode: 'Q64.12',
      referralWhen: ['Any variant upon diagnosis'],
      referralWhenVi: ['Bất kỳ biến thể nào khi được chẩn đoán'],
      workup: ['None required'],
      workupVi: ['Không yêu cầu'],
      urgency: 'routine'
    },
    {
      id: 'uro-5', name: 'Congenital Adrenal Hyperplasia (CAH)', nameVi: 'Tăng sản tuyến thượng thận bẩm sinh (CAH)', icdCode: 'E25.*',
      referralWhen: ['Refer to Endocrinology for acute crisis', 'Any genital anomalies'],
      referralWhenVi: ['Chuyển đến Nội tiết trong trường hợp cơn cấp tính', 'Bất kỳ bất thường sinh dục nào'],
      workup: ['None required'],
      workupVi: ['Không yêu cầu'],
      urgency: 'urgent'
    },
    {
      id: 'uro-6', name: 'Congenital Cystic Kidney', nameVi: 'Thận nang bẩm sinh', icdCode: 'Q61.*',
      referralWhen: ['Any type of cystic kidney disease'],
      referralWhenVi: ['Bất kỳ loại bệnh thận nang nào'],
      workup: ['Bring copy of ultrasound images to clinic', 'Urinalysis', 'Blood pressure measurement'],
      workupVi: ['Mang theo bản sao hình ảnh siêu âm đến phòng khám', 'Tổng phân tích nước tiểu', 'Đo huyết áp'],
      urgency: 'routine'
    },
    {
      id: 'uro-7', name: 'Duplicated Collection System', nameVi: 'Hệ thống thu thập đôi', icdCode: 'Q63.*',
      referralWhen: ['Any associated hydronephrosis/hydroureter', 'Any lower urinary tract anomaly'],
      referralWhenVi: ['Bất kỳ tình trạng thận ứ nước/niệu quản ứ nước kèm theo nào', 'Bất kỳ bất thường đường tiết niệu dưới nào'],
      workup: ['Bring copies of ultrasound and other imaging'],
      workupVi: ['Mang theo bản sao siêu âm và các hình ảnh khác'],
      urgency: 'routine'
    },
    {
      id: 'uro-8', name: 'Dysfunctional Voiding', nameVi: 'Rối loạn chức năng đi tiểu', icdCode: 'R39.19',
      referralWhen: ['Refractory to timed voiding AND constipation treatment'],
      referralWhenVi: ['Không đáp ứng với việc đi tiểu theo giờ VÀ điều trị táo bón'],
      workup: ['Voiding diary (2 separate days)', 'Stool diary (1 week)'],
      workupVi: ['Nhật ký đi tiểu (2 ngày riêng biệt)', 'Nhật ký đi tiêu (1 tuần)'],
      urgency: 'routine'
    },
    {
      id: 'uro-9', name: 'Dysuria', nameVi: 'Tiểu buốt', icdCode: 'R30.0, F45.8',
      referralWhen: ['Refractory to supportive measures'],
      referralWhenVi: ['Không đáp ứng với các biện pháp hỗ trợ'],
      workup: ['None required'],
      workupVi: ['Không yêu cầu'],
      urgency: 'routine'
    },
    {
      id: 'uro-10', name: 'Urethrocutaneous Fistula', nameVi: 'Rò niệu đạo - da', icdCode: 'N36.0',
      referralWhen: ['Any type upon diagnosis'],
      referralWhenVi: ['Bất kỳ loại nào khi được chẩn đoán'],
      workup: ['None required'],
      workupVi: ['Không yêu cầu'],
      urgency: 'routine'
    },
    {
      id: 'uro-11', name: 'Urinary Frequency', nameVi: 'Tiểu lắt nhắt', icdCode: 'R35.0',
      referralWhen: ['Refractory to constipation treatment (if applicable)'],
      referralWhenVi: ['Không đáp ứng với điều trị táo bón (nếu có)'],
      workup: ['Voiding diary (2 separate days)', 'Stool diary (1 week)'],
      workupVi: ['Nhật ký đi tiểu (2 ngày riêng biệt)', 'Nhật ký đi tiêu (1 tuần)'],
      urgency: 'routine'
    },
    {
      id: 'uro-12', name: 'Gross Hematuria', nameVi: 'Tiểu máu đại thể', icdCode: 'R31.0',
      referralWhen: ['Any gross hematuria'],
      referralWhenVi: ['Bất kỳ trường hợp tiểu máu đại thể nào'],
      workup: ['Bring copies of ultrasound and other imaging', 'Blood pressure measurement', 'CBC including renal function panel'],
      workupVi: ['Mang theo bản sao siêu âm và các hình ảnh khác', 'Đo huyết áp', 'Công thức máu bao gồm chức năng thận'],
      urgency: 'urgent'
    },
    {
      id: 'uro-13', name: 'Microscopic Hematuria', nameVi: 'Tiểu máu vi thể', icdCode: 'R31.*',
      referralWhen: ['Persistent on 3 urinalyses on 3 separate occasions'],
      referralWhenVi: ['Dai dẳng trên 3 lần xét nghiệm nước tiểu vào 3 dịp khác nhau'],
      workup: ['Bring copies of ultrasound and other imaging', 'Blood pressure measurement', 'CBC including renal function panel'],
      workupVi: ['Mang theo bản sao siêu âm và các hình ảnh khác', 'Đo huyết áp', 'Công thức máu bao gồm chức năng thận'],
      urgency: 'routine'
    },
    {
      id: 'uro-14', name: 'Inguinal Hernia', nameVi: 'Thoát vị bẹn', icdCode: 'K40.*',
      referralWhen: ['Any degree of hernia'],
      referralWhenVi: ['Bất kỳ mức độ thoát vị nào'],
      workup: ['None required'],
      workupVi: ['Không yêu cầu'],
      urgency: 'routine'
    },
    {
      id: 'uro-15', name: 'Concealed/Hidden Penis', nameVi: 'Dương vật bị vùi lấp/ẩn', icdCode: 'Q55.64',
      referralWhen: ['Any concealed/hidden penis'],
      referralWhenVi: ['Bất kỳ trường hợp dương vật bị vùi lấp/ẩn nào'],
      workup: ['None required', 'Circumcision not recommended'],
      workupVi: ['Không yêu cầu', 'Không khuyến cáo cắt bao quy đầu'],
      urgency: 'routine'
    },
    {
      id: 'uro-16', name: 'Hydrocele', nameVi: 'Tràn dịch tinh mạc', icdCode: 'N43.*',
      referralWhen: ['Communicating', 'Large', 'Persists beyond 3 months of age'],
      referralWhenVi: ['Thể thông thương', 'Kích thước lớn', 'Tồn tại qua 3 tháng tuổi'],
      workup: ['Bring copies of ultrasound and other imaging', 'If large, circumcision not recommended'],
      workupVi: ['Mang theo bản sao siêu âm và các hình ảnh khác', 'Nếu kích thước lớn, không khuyến cáo cắt bao quy đầu'],
      urgency: 'routine'
    },
    {
      id: 'uro-17', name: 'Hydronephrosis', nameVi: 'Thận ứ nước', icdCode: 'N13.*, Q62.0',
      referralWhen: ['Bilateral (any degree)', 'Unilateral (if worse than mild)', 'Diameter > 5mm', 'Accompanied by UTI'],
      referralWhenVi: ['Hai bên (bất kỳ mức độ nào)', 'Một bên (nếu nặng hơn mức độ nhẹ)', 'Đường kính > 5mm', 'Kèm theo nhiễm trùng tiểu'],
      workup: ['Physical examination', 'Bring copies of ultrasound and other imaging'],
      workupVi: ['Khám thực thể', 'Mang theo bản sao siêu âm và các hình ảnh khác'],
      urgency: 'routine'
    },
    {
      id: 'uro-18', name: 'Hypospadias', nameVi: 'Lỗ tiểu đóng thấp', icdCode: 'Q54.*',
      referralWhen: ['Any degree of hypospadias'],
      referralWhenVi: ['Bất kỳ mức độ lỗ tiểu đóng thấp nào'],
      workup: ['None required (Sickle cell screen? Bleeding disorder history?)', 'Circumcision not recommended'],
      workupVi: ['Không yêu cầu (Sàng lọc hồng cầu hình liềm? Tiền sử rối loạn đông máu?)', 'Không khuyến cáo cắt bao quy đầu'],
      urgency: 'routine'
    },
    {
      id: 'uro-19', name: 'Incontinence', nameVi: 'Tiểu không tự chủ', icdCode: 'R32',
      referralWhen: ['Persistent (primary - for children > 4 years)', 'New onset (secondary - after successful toilet training)'],
      referralWhenVi: ['Dai dẳng (nguyên phát - đối với trẻ > 4 tuổi)', 'Mới khởi phát (thứ phát - sau khi đã huấn luyện đi vệ sinh thành công)'],
      workup: ['Voiding diary (2 days)', 'Initiate constipation treatment (if applicable)', 'Stool diary (1 week)'],
      workupVi: ['Nhật ký đi tiểu (2 ngày)', 'Bắt đầu điều trị táo bón (nếu có)', 'Nhật ký đi tiêu (1 tuần)'],
      urgency: 'routine'
    },
    {
      id: 'uro-20', name: 'Labial Adhesions', nameVi: 'Dính môi bé', icdCode: 'Q52.9',
      referralWhen: ['If accompanied by UTI or incontinence', 'Refractory to topical steroids (6 weeks)'],
      referralWhenVi: ['Nếu kèm theo nhiễm trùng tiểu hoặc tiểu không tự chủ', 'Không đáp ứng với steroid tại chỗ (6 tuần)'],
      workup: ['None required'],
      workupVi: ['Không yêu cầu'],
      urgency: 'routine'
    },
    {
      id: 'uro-21', name: 'Meatal Stenosis', nameVi: 'Hẹp lỗ sáo', icdCode: 'N35.*',
      referralWhen: ['Accompanied by any lower urinary tract symptoms', 'Upward deflected urinary stream', 'UTI'],
      referralWhenVi: ['Kèm theo bất kỳ triệu chứng đường tiết niệu dưới nào', 'Tia nước tiểu lệch lên trên', 'Nhiễm trùng tiểu'],
      workup: ['None required'],
      workupVi: ['Không yêu cầu'],
      urgency: 'routine'
    },
    {
      id: 'uro-22', name: 'Megaureter', nameVi: 'Niệu quản khổng lồ', icdCode: 'N28.82, Q62.2',
      referralWhen: ['Unilateral or bilateral - Any degree of hydroureter'],
      referralWhenVi: ['Một bên hoặc hai bên - Bất kỳ mức độ niệu quản ứ nước nào'],
      workup: ['Bring copies of ultrasound and other imaging', 'Urine C&S and UA (if infected)', 'Lasix renal scan (as directed by clinic)'],
      workupVi: ['Mang theo bản sao siêu âm và các hình ảnh khác', 'Cấy nước tiểu & Kháng sinh đồ và Tổng phân tích nước tiểu (nếu bị nhiễm trùng)', 'Xạ hình thận với Lasix (theo chỉ định của phòng khám)'],
      urgency: 'routine'
    },
    {
      id: 'uro-23', name: 'Micro Penis', nameVi: 'Dương vật nhỏ', icdCode: 'Q55.62',
      referralWhen: ['Penile length less than 2cm'],
      referralWhenVi: ['Chiều dài dương vật dưới 2cm'],
      workup: ['None required'],
      workupVi: ['Không yêu cầu'],
      urgency: 'routine'
    },
    {
      id: 'uro-24', name: 'Multicystic Dysplastic Kidney (MCDK)', nameVi: 'Thận loạn sản đa nang (MCDK)', icdCode: 'Q61.8',
      referralWhen: ['Any type of MCDK'],
      referralWhenVi: ['Bất kỳ loại MCDK nào'],
      workup: ['Bring copies of ultrasound and other imaging', 'Urinalysis', 'Blood pressure measurement'],
      workupVi: ['Mang theo bản sao siêu âm và các hình ảnh khác', 'Tổng phân tích nước tiểu', 'Đo huyết áp'],
      urgency: 'routine'
    },
    {
      id: 'uro-25', name: 'Neurogenic Bladder', nameVi: 'Bàng quang thần kinh', icdCode: 'N31.*',
      referralWhen: ['Any degree of neurogenic bladder'],
      referralWhenVi: ['Bất kỳ mức độ bàng quang thần kinh nào'],
      workup: ['Voiding Cystourethrogram (VCUG)', 'Ultrasound not required (will be done in clinic if needed)', 'Voiding diary', 'Stool diary', 'Constipation treatment'],
      workupVi: ['Chụp bàng quang niệu đạo khi tiểu (VCUG)', 'Không yêu cầu siêu âm (sẽ thực hiện tại phòng khám nếu cần)', 'Nhật ký đi tiểu', 'Nhật ký đi tiêu', 'Điều trị táo bón'],
      urgency: 'routine'
    },
    {
      id: 'uro-26', name: 'Nocturnal Enuresis', nameVi: 'Đái dầm ban đêm', icdCode: 'N39.44',
      referralWhen: ['Persistent past 7 years of age (primary)', 'New onset (secondary)'],
      referralWhenVi: ['Dai dẳng qua 7 tuổi (nguyên phát)', 'Mới khởi phát (thứ phát)'],
      workup: ['Voiding diary', 'Stool diary', 'Constipation treatment'],
      workupVi: ['Nhật ký đi tiểu', 'Nhật ký đi tiêu', 'Điều trị táo bón'],
      urgency: 'routine'
    },
    {
      id: 'uro-27', name: 'Paraphimosis', nameVi: 'Thắt nghẹt bao quy đầu', icdCode: 'N47.*',
      referralWhen: ['Emergent: Call Pediatric Urology on-call'],
      referralWhenVi: ['Tối cấp: Gọi điện cho bác sĩ Tiết niệu Nhi khoa trực'],
      workup: ['None required'],
      workupVi: ['Không yêu cầu'],
      timeframe: 'Emergent',
      timeframeVi: 'Tối cấp',
      urgency: 'emergent'
    },
    {
      id: 'uro-28', name: 'Penile Adhesions', nameVi: 'Dính bao quy đầu', icdCode: 'N47.5',
      referralWhen: ['Any penile adhesions', 'Refractory to topical steroids for 3-4 weeks', 'Post-operative (after circumcision)'],
      referralWhenVi: ['Bất kỳ trường hợp dính bao quy đầu nào', 'Không đáp ứng với steroid tại chỗ trong 3-4 tuần', 'Sau phẫu thuật (sau khi cắt bao quy đầu)'],
      workup: ['None required'],
      workupVi: ['Không yêu cầu'],
      urgency: 'routine'
    },
    {
      id: 'uro-29', name: 'Penile Curvature', nameVi: 'Cong dương vật', icdCode: 'Q55.61',
      referralWhen: ['Any penile curvature impairing function', 'Symptomatic curvature', 'Significant curvature'],
      referralWhenVi: ['Bất kỳ trường hợp cong dương vật nào làm suy giảm chức năng', 'Cong dương vật có triệu chứng', 'Cong dương vật đáng kể'],
      workup: ['None required'],
      workupVi: ['Không yêu cầu'],
      urgency: 'routine'
    },
    {
      id: 'uro-30', name: 'Phimosis', nameVi: 'Hẹp bao quy đầu', icdCode: 'N47.1',
      referralWhen: ['Accompanied by balanitis', 'Refractory to topical steroids (3-4 weeks)'],
      referralWhenVi: ['Kèm theo viêm bao quy đầu', 'Không đáp ứng với steroid tại chỗ (3-4 tuần)'],
      workup: ['None required'],
      workupVi: ['Không yêu cầu'],
      urgency: 'routine'
    },
    {
      id: 'uro-31', name: 'Posterior Urethral Valves (PUV)', nameVi: 'Van niệu đạo sau (PUV)', icdCode: 'Q64.2',
      referralWhen: ['Emergent: Place urethral catheter', 'Call Pediatric Urology on-call'],
      referralWhenVi: ['Tối cấp: Đặt ống thông niệu đạo', 'Gọi điện cho bác sĩ Tiết niệu Nhi khoa trực'],
      workup: ['Bring copy of VCUG', 'Bring copy of ultrasound'],
      workupVi: ['Mang theo bản sao VCUG', 'Mang theo bản sao siêu âm'],
      timeframe: 'Emergent',
      timeframeVi: 'Tối cấp',
      urgency: 'emergent'
    },
    {
      id: 'uro-32', name: 'Pyelonephritis', nameVi: 'Viêm đài bể thận', icdCode: 'N12',
      referralWhen: ['Accompanied by ANY imaging abnormality'],
      referralWhenVi: ['Kèm theo BẤT KỲ bất thường hình ảnh nào'],
      workup: ['Bring or send all lab results', 'Bring copies of ultrasound and other imaging'],
      workupVi: ['Mang theo hoặc gửi tất cả kết quả xét nghiệm', 'Mang theo bản sao siêu âm và các hình ảnh khác'],
      urgency: 'urgent'
    },
    {
      id: 'uro-33', name: 'Solitary Kidney', nameVi: 'Thận độc nhất', icdCode: 'Q60.*',
      referralWhen: ['Accompanied by ANY imaging abnormality'],
      referralWhenVi: ['Kèm theo BẤT KỲ bất thường hình ảnh nào'],
      workup: ['Bring copy of ultrasound', 'Voiding diary', 'Constipation treatment', 'Stool diary'],
      workupVi: ['Mang theo bản sao siêu âm', 'Nhật ký đi tiểu', 'Điều trị táo bón', 'Nhật ký đi tiêu'],
      urgency: 'routine'
    },
    {
      id: 'uro-34', name: 'Spina Bifida Occulta', nameVi: 'Tật nứt đốt sống ẩn', icdCode: 'Q76.0',
      referralWhen: ['Any variant upon diagnosis', 'If upper or lower urinary tract pathology is present'],
      referralWhenVi: ['Bất kỳ biến thể nào khi được chẩn đoán', 'Nếu có bệnh lý đường tiết niệu trên hoặc dưới'],
      workup: ['Bring copy of ultrasound', 'Voiding/catheterization diary', 'Stool diary'],
      workupVi: ['Mang theo bản sao siêu âm', 'Nhật ký đi tiểu/đặt ống thông', 'Nhật ký đi tiêu'],
      urgency: 'routine'
    },
    {
      id: 'uro-35', name: 'Testicular Pain', nameVi: 'Đau tinh hoàn', icdCode: 'R10.2, F45.42',
      referralWhen: ['Refractory to supportive measures'],
      referralWhenVi: ['Không đáp ứng với các biện pháp hỗ trợ'],
      workup: ['Bring copy of ultrasound', 'Scrotal ultrasound'],
      workupVi: ['Mang theo bản sao siêu âm', 'Siêu âm bìu'],
      urgency: 'routine'
    },
    {
      id: 'uro-36', name: 'Testicular Torsion', nameVi: 'Xoắn tinh hoàn', icdCode: 'N44.0*',
      referralWhen: ['Emergent: Call Pediatric Urology on-call'],
      referralWhenVi: ['Tối cấp: Gọi điện cho bác sĩ Tiết niệu Nhi khoa trực'],
      workup: ['None required'],
      workupVi: ['Không yêu cầu'],
      timeframe: 'Emergent',
      timeframeVi: 'Tối cấp',
      urgency: 'emergent'
    },
    {
      id: 'uro-37', name: 'Undescended Testis (Cryptorchidism)', nameVi: 'Tinh hoàn ẩn', icdCode: 'Q53.*',
      referralWhen: ['At time of diagnosis'],
      referralWhenVi: ['Tại thời điểm chẩn đoán'],
      workup: ['Ultrasound not required'],
      workupVi: ['Không yêu cầu siêu âm'],
      urgency: 'routine'
    },
    {
      id: 'uro-38', name: 'Urachal Remnant', nameVi: 'Tồn tại ống niệu rốn', icdCode: 'Q64.4',
      referralWhen: ['Upon diagnosis'],
      referralWhenVi: ['Khi được chẩn đoán'],
      workup: ['Bring copy of ultrasound'],
      workupVi: ['Mang theo bản sao siêu âm'],
      urgency: 'routine'
    },
    {
      id: 'uro-39', name: 'Ureterocele', nameVi: 'Sa lồi niệu quản', icdCode: 'Q62.31',
      referralWhen: ['Any type of ureterocele'],
      referralWhenVi: ['Bất kỳ loại sa lồi niệu quản nào'],
      workup: ['Bring copy of ultrasound'],
      workupVi: ['Mang theo bản sao siêu âm'],
      urgency: 'routine'
    },
    {
      id: 'uro-40', name: 'UPJ Obstruction', nameVi: 'Hẹp khúc nối bể thận - niệu quản (UPJ)', icdCode: 'Q62.11',
      referralWhen: ['Any degree upon diagnosis'],
      referralWhenVi: ['Bất kỳ mức độ nào khi được chẩn đoán'],
      workup: ['Lasix renal scan', 'Bring copy of ultrasound'],
      workupVi: ['Xạ hình thận với Lasix', 'Mang theo bản sao siêu âm'],
      urgency: 'routine'
    },
    {
      id: 'uro-41', name: 'Urethral Stricture', nameVi: 'Hẹp niệu đạo', icdCode: 'N35.0*',
      referralWhen: ['Upon diagnosis'],
      referralWhenVi: ['Khi được chẩn đoán'],
      workup: ['None required'],
      workupVi: ['Không yêu cầu'],
      urgency: 'routine'
    },
    {
      id: 'uro-42', name: 'Urinary Retention', nameVi: 'Bí tiểu', icdCode: 'R33.8',
      referralWhen: ['After any prolonged episode of urinary retention'],
      referralWhenVi: ['Sau bất kỳ đợt bí tiểu kéo dài nào'],
      workup: ['Bring copy of ultrasound', 'Voiding diary', 'Constipation treatment', 'Stool diary'],
      workupVi: ['Mang theo bản sao siêu âm', 'Nhật ký đi tiểu', 'Điều trị táo bón', 'Nhật ký đi tiêu'],
      urgency: 'urgent'
    },
    {
      id: 'uro-43', name: 'Urinary Tract Infection (UTI)', nameVi: 'Nhiễm trùng đường tiết niệu (UTI)', icdCode: 'N39.0',
      referralWhen: ['Recurrent, afebrile', 'After first febrile UTI', 'Any UTI with evidence of urinary tract abnormality on ultrasound'],
      referralWhenVi: ['Tái phát, không sốt', 'Sau lần nhiễm trùng tiểu có sốt đầu tiên', 'Bất kỳ UTI nào có bằng chứng bất thường đường tiết niệu trên siêu âm'],
      workup: ['Urinalysis', 'Urine C&S', 'Bring copy of ultrasound', 'Voiding diary', 'Constipation treatment', 'Stool diary'],
      workupVi: ['Tổng phân tích nước tiểu', 'Cấy nước tiểu & Kháng sinh đồ', 'Mang theo bản sao siêu âm', 'Nhật ký đi tiểu', 'Điều trị táo bón', 'Nhật ký đi tiêu'],
      urgency: 'routine'
    },
    {
      id: 'uro-44', name: 'Varicocele', nameVi: 'Giãn tĩnh mạch thừng tinh', icdCode: 'I86.1',
      referralWhen: ['Symptomatic', 'Grade 2-3', 'If accompanied by testicular size discrepancy'],
      referralWhenVi: ['Có triệu chứng', 'Độ 2-3', 'Nếu kèm theo sự chênh lệch kích thước tinh hoàn'],
      workup: ['Scrotal ultrasound'],
      workupVi: ['Siêu âm bìu'],
      urgency: 'routine'
    },
    {
      id: 'uro-45', name: 'Vesicoureteral Reflux (VUR)', nameVi: 'Trào ngược bàng quang niệu quản (VUR)', icdCode: 'N13.7*',
      referralWhen: ['Any degree of reflux'],
      referralWhenVi: ['Bất kỳ mức độ trào ngược nào'],
      workup: ['Bring copy of VCUG', 'Bring copy of ultrasound', 'Urine C&S', 'Blood pressure measurement'],
      workupVi: ['Mang theo bản sao VCUG', 'Mang theo bản sao siêu âm', 'Cấy nước tiểu & Kháng sinh đồ', 'Đo huyết áp'],
      urgency: 'routine'
    }
  ]
};
