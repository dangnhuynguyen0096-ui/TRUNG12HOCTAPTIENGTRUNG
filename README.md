# Lớn lên cùng tiếng Trung (bản 2: 3D + micro + 4 khoa)

Mở `index.html` qua một trang web (GitHub Pages, Netlify, hoặc `python -m http.server` trên máy) để:
- chơi offline sau lần mở đầu (service worker lưu mọi file, kể cả three.js, hanzi-writer và dữ liệu nét chữ);
- dùng micro nói tiếng Trung (Chrome/Edge, cần mạng cho phần nhận giọng nói).

Cấu trúc:
- `content-hk1.js`, `content-hk1b.js`: nội dung HK1 (Hán ngữ giáo trình Q1 bài 1–15, Khán đồ thuyết thoại thượng).
- `world.js`: phòng 3D kiểu sa bàn (mỗi bài khóa một phòng + 4 phòng khoa Nghe/Nói/Đọc/Viết).
- `app.js`: luồng game, micro, chấm điểm, 4 khoa, cấp bậc.
- `strokes-hk1.js`: dữ liệu nét chữ từ hanzi-writer-data (giấy phép Arphic PL, xem `vendor/hanzi-writer-data-LICENSE.txt`).
