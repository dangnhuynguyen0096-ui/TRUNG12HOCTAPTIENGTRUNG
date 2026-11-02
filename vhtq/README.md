# Văn học Trung Quốc (中国文学史)

App riêng cho môn Văn học Trung Quốc, theo giáo trình *Bài giảng giản lược lịch sử văn học Trung Quốc* (中国文学史，补充生词版).
Mở `vhtq/index.html` qua GitHub Pages. Dùng chung khung `../hoc/app.js` và `../hoc/style.css` với app học theo môn, nhưng là một app riêng, chỉ có môn này.

- `data/vhtq.js`: 12 bài (Thượng thiên – cổ đại, Trung thiên – hiện đại, Hạ thiên – đương đại, và bài tổng ôn), 38 văn bản.
  Mỗi văn bản có: nguyên văn tiếng Trung, bài giảng tiếng Việt (`vi`), từ vựng, bài tập sách 【Sách】 và bài tập bổ sung 【Cơ bản/Trung bình/Nâng cao】, phần nâng cao (cấu trúc, phân tích câu, từ mở rộng, đề viết).
- Bản 1 file để mở thẳng trên máy: `python3 vhtq/tools/build_offline.py Van-hoc-Trung-Quoc.html`.
