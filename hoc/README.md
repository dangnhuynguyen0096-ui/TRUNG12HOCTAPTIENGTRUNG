# Học tiếng Trung theo môn

App riêng, không đụng tới game ở thư mục gốc. Mở `hoc/index.html` qua GitHub Pages.

- `app.js`, `style.css`: khung dùng chung cho mọi môn (đọc có bấm giờ, bài tập sách tự chấm, thẻ từ có lặp lại ngắt quãng, nghe chính tả, luyện nói bằng micro, ghép câu và xếp đoạn, phân tích câu, viết có nút chép lệnh nhờ AI chấm).
- `data/index.js`: danh sách môn.
- `data/<môn>.js`: dữ liệu một môn. Định dạng ghi ở đầu `app.js`.

Thêm môn mới: tạo `data/<id>.js` gọi `HOC.add({...})` và thêm một dòng vào `data/index.js`.
Tiến độ học lưu trong trình duyệt (localStorage) của từng máy.

Sách đọc (môn có `read: true`): chỉ có tab Đọc và Từ vựng; từ khó gạch chân (`notes`), câu khó tô nền (`hard: [[câu, giải thích, dịch]]`), ô từ vựng nằm cạnh bài (điện thoại: nút 📒).
Muốn giữ một sách chỉ ở bản trên máy (không lên repo), để file dữ liệu ở ngoài và thêm vào lúc dựng bản offline: `python3 hoc/tools/build_offline.py ra.html duong/dan/sach.js`.

Nghe nhiều bài liên tục (`#/nghe`, nút 🎧 ở trang chủ): tích bài khóa ở nhiều môn, máy đọc nối tiếp từng câu; câu có từ khó (`notes`) thì ô 💡 hiện pinyin và nghĩa, có thể bật đọc to nghĩa tiếng Việt. Lựa chọn lưu trong máy.
Nghe từ vựng nhiều bài (`#/nghe-tu`): chọn bài ở nhiều môn, máy đọc từng từ trong `notes` (chữ Hán, nghĩa tiếng Việt, câu trong bài có từ đó); nút ⭐ đánh dấu đã thuộc (ghi vào lịch ôn thẻ từ).
Tìm bài (ô 🔍 ở trang chủ): tìm theo tên bài, tên chương, loại bài, tên môn (gõ không dấu cũng được, "bài 2" lọc đúng số bài); gõ chữ Hán thì tìm cả trong nội dung.
Ngữ pháp 3 môn thương mại (`hntm`, `dtm`, `tmns`): mỗi bài có văn bản loại `语法` gồm các thẻ xếp Cơ bản → Trung cấp → Nâng cao (cấu trúc, ý nghĩa, dùng trong thương mại, câu trong bài, ví dụ thêm, lỗi thường gặp). Một điểm chỉ giảng đầy đủ một lần; bài khác có thẻ ↪ link về đó. Trang `#/ngu-phap` (📚 ở trang chủ) liệt kê mọi điểm. Nguồn soạn ở `tools/ngu-phap/`, chạy `node hoc/tools/build_grammar.js` để ghi vào cuối `data/<môn>.js` (bài tập điền từ, chọn câu đúng và câu nghe được sinh tự động).
