# Học tiếng Trung theo môn

App riêng, không đụng tới game ở thư mục gốc. Mở `hoc/index.html` qua GitHub Pages.

- `app.js`, `style.css`: khung dùng chung cho mọi môn (đọc có bấm giờ, bài tập sách tự chấm, thẻ từ có lặp lại ngắt quãng, nghe chính tả, luyện nói bằng micro, ghép câu và xếp đoạn, phân tích câu, viết có nút chép lệnh nhờ AI chấm).
- `data/index.js`: danh sách môn.
- `data/<môn>.js`: dữ liệu một môn. Định dạng ghi ở đầu `app.js`.

Thêm môn mới: tạo `data/<id>.js` gọi `HOC.add({...})` và thêm một dòng vào `data/index.js`.
Tiến độ học lưu trong trình duyệt (localStorage) của từng máy.
