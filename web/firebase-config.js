/* Cấu hình Firebase của dự án "Chấm công nhiều dự án" (project cham-cong-da-du-an-4a9d3).
   apiKey không phải mật khẩu: quyền truy cập do Firestore Rules quyết định.
   - databaseURL: Realtime Database, bật đồng bộ tức thì.
   - pollMs: số mili giây giữa hai lần hỏi dữ liệu mới khi kênh tức thì chưa nối được (mặc định khoảng 4 giây). */
window.FIREBASE_CONFIG = {
  apiKey: 'AIzaSyAC04y81L5EvUbMwg0qFggQ8dirPvrEWKk',
  projectId: 'cham-cong-da-du-an-4a9d3',
  databaseURL: 'https://cham-cong-da-du-an-4a9d3-default-rtdb.asia-southeast1.firebasedatabase.app'
  // , pollMs: 4000
};
