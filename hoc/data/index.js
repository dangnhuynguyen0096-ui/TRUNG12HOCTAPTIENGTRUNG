/* Danh sách môn. Mỗi môn là 1 file data/<id>.js gọi HOC.add({...}). Thêm môn mới chỉ cần thêm 1 dòng ở đây. */
var SUBJECTS = [
  { id: 'dnh', name: 'Đất nước học Trung Quốc', book: '中国概况', skill: '国情' },
  { id: 'doc2', name: 'Đọc 2', book: '汉语阅读教程 第一册', skill: '阅读' },
  { id: 'doc3', name: 'Đọc 3', book: '发展汉语 · 高级阅读 (I)', skill: '阅读' },
  { id: 'kn3', name: 'Nghe 3', book: '发展汉语 · 高级听力 (I)', skill: '听说' },
  { id: 'vud', name: 'Văn Ứng Dụng', book: '汉语应用文写作教程', skill: '写作' },
  { id: 'ky3', name: 'Khẩu ngữ 3', book: '发展汉语 · 高级口语 (I)', skill: '口语' },
  { id: 'hntm', name: 'Hán ngữ thương mại (viết)', book: '外贸写作 · 外贸书信', skill: '商务' },
  { id: 'vhtq', name: 'Văn học Trung Quốc', book: '中国文学史', skill: '文学' },
  { id: 'ngp', name: 'Giáo trình ngữ pháp Hán ngữ hiện đại', book: '汉语语法教程', skill: '语法' },
  { id: 'dkq', name: 'Đi khắp Trung Quốc', book: '图说天下 · 走遍中国', skill: '游记', nc: true },
  { id: 'fj', name: 'Căn phòng riêng cho chính mình', book: '一间只属于自己的房间 · 伍尔夫', skill: '读物', nc: true, read: true }
];
