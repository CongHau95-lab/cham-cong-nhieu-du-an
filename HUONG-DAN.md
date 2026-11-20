# CenSC Crew: hướng dẫn thiết lập

App quản lý nhiều dự án, mỗi dự án có công nhân, hạng mục công việc (cốp pha, cốt thép…), lương theo ngày hiệu lực.
Chủ thấy mọi dự án. Mỗi tài khoản khác chỉ thấy đúng một dự án được chủ cấp, với quyền Xem / Nhận xét / Chỉnh sửa
và công tắc "Xem lương" (mặc định tắt).

## 1. Firebase (đã tạo sẵn)
Project **cham-cong-da-du-an-4a9d3** (gói Spark, miễn phí, vùng Singapore) đã có đủ:
- Authentication: bật đăng nhập Email/Password.
- Firestore Database (asia-southeast1) với luật trong `firestore.rules` đã Publish.
- Realtime Database (asia-southeast1) với luật trong `database.rules.json` đã Publish.
- Ứng dụng web đã đăng ký; `web/firebase-config.js` đã dán sẵn apiKey, projectId, databaseURL.

Nếu sau này phải làm lại ở một project khác: console.firebase.google.com > Add project (tắt Analytics) > Authentication > Email/Password >
Firestore (production, asia-southeast1) > Rules dán `firestore.rules` > Realtime Database (locked) > Rules dán `database.rules.json` >
Project settings > Add app Web > chép apiKey, projectId, databaseURL vào `web/firebase-config.js`.

## 2. Đưa lên GitHub Pages
Tạo repo, đưa toàn bộ thư mục này lên nhánh main, vào Settings > Pages > Source: GitHub Actions.
Tab Actions > Build chạy ra: trang web (iPhone cài từ Safari: Chia sẻ > Thêm vào MH chính), file .apk (Android), bộ cài .exe (Windows), .dmg (Mac).

## 3. Lần đầu dùng
1. Mở app, **Đăng ký** bằng email của bạn, bấm liên kết xác minh trong thư.
2. Bấm **Tôi là Chủ** (chỉ hiện khi hệ thống chưa có Chủ). Từ giờ bạn là Chủ phần mềm chính. Xóa tài khoản rồi đăng ký lại bằng đúng email này, bạn vẫn là Chủ.
3. **Nạp dữ liệu có sẵn**: tab Các dự án > **Nạp dự án từ file…** > chọn `Bai-duc-dam-so-3.json`. App tạo dự án mới và nạp hạng mục, công nhân, chấm công, tiền cơm/nhà trọ, cài đặt.
4. Hoặc tự tạo: Các dự án > Thêm dự án, rồi Hạng mục, Công nhân > Nhập từ Excel / file.
5. Tab **Tài khoản**: người khác đăng ký xong, bạn chọn vai trò và dự án.

## 3b. Vai trò và quyền
| Vai trò | Quyền chính |
|---|---|
| Chủ phần mềm | Toàn quyền. Chủ chính (người đầu tiên) là người duy nhất bổ nhiệm/miễn nhiệm Chủ khác, và không ai giáng quyền được. |
| Admin tổng | Mọi dự án, mọi số liệu kể cả lương. Cấp quyền cho BOD trở xuống. Không đổi được Chủ hay Admin tổng khác. |
| BOD | Xem mọi dự án, mọi chi phí và lương. Không chỉnh sửa. |
| Kỹ sư hiện trường | Chấm công, sửa hạng mục, xem công nhân; xem tổng chi phí theo hạng mục nhưng không xem lương cá nhân. |
| Admin dự án | Trong dự án được giao: công nhân, chấm công, nhập thuế TNCN/BHXH/công đoàn, xuất bảng lương và phiếu lương. Không quản lý tài khoản. |
| Đội trưởng dự án (foreman) | Chấm công trong dự án được giao; chỉ xem công nhân và hạng mục, không xem lương và chi phí. |
| Công nhân | Chỉ xem phiếu lương của chính mình khi được công bố. |
Dự án đã dừng: mọi vai trò trừ Chủ/Admin tổng chỉ được xem.

**Người kế nhiệm**: Tài khoản > chọn người > "Chỉ định làm người kế nhiệm…" (chỉ Chủ chính thấy nút này). Người này có toàn quyền như Chủ, cấp và giáng quyền người khác, nhưng không giáng quyền được Chủ chính và không tạo thêm Chủ.

## 3c. Lương, phiếu lương, phân tích
- Tab **Lương**: chọn kỳ (lịch tùy chỉnh) hoặc theo hạng mục. Nhập thuế TNCN, BHXH, phí công đoàn, khoản khác cho từng người (Admin dự án, Admin tổng, Chủ). Xuất bảng lương Excel (3 trang: Bảng lương, Theo hạng mục, Chi tiết hạng mục).
- **Phiếu lương**: xuất PDF / ảnh PNG / Excel, mỗi người một file hoặc gộp một file, gửi từng nhân viên. Bấm "Phát hành phiếu cho công nhân" để công nhân tự xem phiếu của mình trong tab Phiếu lương.
- Tab **Chi phí**: biểu đồ chi phí và số công theo hạng mục, theo ngày. Xuất Excel kèm biểu đồ thật.
- **Chấm công phân bổ**: với người làm gián tiếp (foreman, kỹ sư, admin dự án), đánh dấu "Gián tiếp" trong hồ sơ rồi chọn ký hiệu A khi chấm công. Chi phí người đó được chia cho các hạng mục có làm trong ngày, tỷ lệ theo chi phí công nhân trực tiếp.

## 4. Cách tính (theo mẫu BCC)
Lương ngày = lương tháng ÷ 26. Cộng ngày công = làm tròn 0,1 của (công + giờ tăng ca ÷ 8 × 1,5).
Thành tiền = cộng ngày công × lương ngày + nhà trọ + tiền cơm × công. Đổi lương từ ngày X: thêm dòng mới trong hồ sơ công nhân;
kỳ có đổi lương được tách theo từng mức, cột Điều chỉnh trên BCC bù phần chênh. Khoản cộng/trừ tay: mục "Điều chỉnh tay".
Mọi con số (÷26, ÷8, ×1,5, cơm, nhà trọ, khung giờ tăng ca) chỉnh được ở tab Cài đặt.

## 5. Bảo mật
Sau khi cập nhật bản này, vào Firebase Console > Firestore Database > Rules, dán nội dung `firestore.rules` mới rồi **Publish**. Chưa publish thì vai trò mới sẽ bị máy chủ từ chối.
Lương, CCCD, ngân hàng nằm ở vùng dữ liệu riêng, máy chủ chỉ trả cho Chủ hoặc tài khoản được bật "Xem lương" của đúng dự án đó.
File sao lưu .json có thông tin riêng: giữ ở nơi an toàn, đừng đưa lên GitHub.
Phần mềm do Nguyễn Công Hậu tạo.
