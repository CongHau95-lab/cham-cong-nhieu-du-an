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
2. Bấm **Tôi là Chủ** (chỉ hiện khi hệ thống chưa có Chủ). Từ giờ bạn là Chủ.
3. Tab **Các dự án** > Thêm dự án (đặt tình trạng Còn làm / Đã nghỉ khi cần).
4. Trong dự án: **Hạng mục** (thêm, bớt, đổi màu), **Công nhân** > Nhập từ Excel / file (dán cột Họ tên, Chức vụ, Lương tháng, Ngân hàng, Số tài khoản, CCCD; hoặc chọn file .json).
5. Tab **Tài khoản**: người khác đăng ký xong, bạn chọn dự án + quyền, bật "Xem lương" nếu cần.

## 4. Cách tính (theo mẫu BCC)
Lương ngày = lương tháng ÷ 26. Cộng ngày công = làm tròn 0,1 của (công + giờ tăng ca ÷ 8 × 1,5).
Thành tiền = cộng ngày công × lương ngày + nhà trọ + tiền cơm × công. Đổi lương từ ngày X: thêm dòng mới trong hồ sơ công nhân;
kỳ có đổi lương được tách theo từng mức, cột Điều chỉnh trên BCC bù phần chênh. Khoản cộng/trừ tay: mục "Điều chỉnh tay".
Mọi con số (÷26, ÷8, ×1,5, cơm, nhà trọ, khung giờ tăng ca) chỉnh được ở tab Cài đặt.

## 5. Bảo mật
Lương, CCCD, ngân hàng nằm ở vùng dữ liệu riêng, máy chủ chỉ trả cho Chủ hoặc tài khoản được bật "Xem lương" của đúng dự án đó.
File sao lưu .json có thông tin riêng: giữ ở nơi an toàn, đừng đưa lên GitHub.
Phần mềm do Nguyễn Công Hậu tạo.
