/* Nội dung HK1 — Hán ngữ giáo trình (汉语教程 修订本) Quyển 1 (上), bài 1–8.
   Mỗi bài = một "ngày" trong đời bé lớp 1. Thêm học kỳ mới bằng cách thêm vào CONTENT.semesters.
   Cú pháp hội thoại:
     {c:'mom', zh, py, vi}                 nhân vật nói
     {c:'panda', vi}                       gấu trúc dẫn chuyện (tiếng Việt)
     {me:'gợi ý', opts:[[zh,py,vi],...]}   bé trả lời; phương án ĐẦU TIÊN là đúng (game tự xáo trộn)
   {sur} {surPy} {name} {namePy} được thay bằng tên tiếng Trung người chơi chọn. */
window.CONTENT = {
  characters: {
    panda:   { name: 'Pàn Pàn', zh: '盼盼', face: '🐼' },
    mom:     { name: 'Mẹ', zh: '妈妈', face: '👩' },
    dad:     { name: 'Bố', zh: '爸爸', face: '👨' },
    gege:    { name: 'Anh trai', zh: '哥哥', face: '🧑' },
    meimei:  { name: 'Em gái', zh: '妹妹', face: '👧' },
    teacher: { name: 'Thầy Vương', zh: '王老师', face: '👨‍🏫' },
    mike:    { name: 'Mike', zh: '麦克', face: '👱‍♂️' },
    mali:    { name: 'Mary', zh: '玛丽', face: '👩‍🦰' },
    auntie:  { name: 'Cô hàng xóm', zh: '阿姨', face: '👩‍🦱' },
    seller:  { name: 'Cô bán hoa quả', zh: '阿姨', face: '👵' },
    cook:    { name: 'Cô nhà ăn', zh: '阿姨', face: '👩‍🍳' }
  },
  semesters: [
    {
      id: 'hk1', label: 'HK1', stage: 'Lớp 1', age: 6, face: '🧒',
      book: '汉语教程 第一册（上）· Bài 1–8',
      intro: 'Bé vào lớp 1 và bắt đầu học tiếng Trung. Mỗi ngày là một bài trong giáo trình.',
      lessons: [
        {
          id: 'hk1-l1', no: 1, day: 'Ngày 1', time: '06:30', scene: 'bedroom',
          vi: 'Thức dậy, chào mẹ', zh: '你好', py: 'Nǐ hǎo',
          vocab: [
            ['你', 'nǐ', 'bạn, cậu', '🫵'], ['好', 'hǎo', 'tốt, khỏe', '👍'], ['你好', 'nǐ hǎo', 'xin chào', '👋'],
            ['一', 'yī', 'một', '1️⃣'], ['五', 'wǔ', 'năm', '5️⃣'], ['八', 'bā', 'tám', '8️⃣'],
            ['大', 'dà', 'to, lớn', '🐘'], ['不', 'bù', 'không', '🙅'], ['口', 'kǒu', 'miệng', '👄'],
            ['白', 'bái', 'trắng', '⚪'], ['女', 'nǚ', 'nữ, con gái', '👧'], ['马', 'mǎ', 'con ngựa', '🐴']
          ],
          story: [
            { c: 'panda', vi: 'Reng reng! 6 giờ 30 rồi. Chào em, anh là gấu trúc Pàn Pàn. Hôm nay em bắt đầu học tiếng Trung đấy!' },
            { c: 'panda', vi: 'Mẹ vào phòng gọi em dậy. Người Trung Quốc chào nhau bằng 你好.' },
            { c: 'mom', zh: '你好！', py: 'Nǐ hǎo!', vi: 'Chào con!' },
            { me: 'Chào lại mẹ', opts: [['你好！', 'Nǐ hǎo!', 'Con chào mẹ!'], ['不好！', 'Bù hǎo!', 'Không tốt!'], ['八！', 'Bā!', 'Tám!']] },
            { c: 'panda', vi: 'Giỏi lắm! Bây giờ mẹ đếm ngón tay cùng em.' },
            { c: 'mom', zh: '一、五、八！', py: 'Yī, wǔ, bā!', vi: 'Một, năm, tám!' },
            { me: 'Mẹ giơ 5 ngón tay. Em đọc là gì?', opts: [['五！', 'Wǔ!', 'Năm!'], ['八！', 'Bā!', 'Tám!'], ['一！', 'Yī!', 'Một!']] },
            { c: 'mom', zh: '好！', py: 'Hǎo!', vi: 'Giỏi!' }
          ],
          tones: [['妈', 'mā', 1], ['麻', 'má', 2], ['马', 'mǎ', 3], ['骂', 'mà', 4], ['八', 'bā', 1], ['白', 'bái', 2], ['五', 'wǔ', 3], ['大', 'dà', 4], ['一', 'yī', 1], ['口', 'kǒu', 3]],
          grammar: [
            { t: 'Chào hỏi', d: 'Gặp ai cũng có thể nói 你好. Người kia đáp lại cũng bằng 你好.', ex: [['你好！', 'Nǐ hǎo!', 'Xin chào!']] },
            { t: 'Bốn thanh điệu', d: 'Thanh 1 (ā) ngang cao, thanh 2 (á) đi lên, thanh 3 (ǎ) xuống rồi lên, thanh 4 (à) đi xuống mạnh. Cùng âm "ma" mà khác thanh là khác nghĩa.', ex: [['妈 · 麻 · 马 · 骂', 'mā · má · mǎ · mà', 'mẹ · cây gai · ngựa · mắng']] },
            { t: 'Biến điệu thanh 3', d: 'Hai thanh 3 đứng liền nhau thì chữ đầu đọc thành thanh 2: 你好 đọc là ní hǎo.', ex: [['你好', 'nǐ hǎo → ní hǎo', 'xin chào']] }
          ],
          order: [[['你', '好'], 'Xin chào'], [['白', '马'], 'Ngựa trắng'], [['不', '大'], 'Không to']]
        },
        {
          id: 'hk1-l2', no: 2, day: 'Ngày 2', time: '07:00', scene: 'kitchen',
          vi: 'Bữa sáng cùng cả nhà', zh: '汉语不太难', py: 'Hànyǔ bú tài nán',
          vocab: [
            ['忙', 'máng', 'bận', '🏃'], ['吗', 'ma', '(từ để hỏi) … không?', '❓'], ['很', 'hěn', 'rất', '➕'],
            ['汉语', 'Hànyǔ', 'tiếng Hán', '📕'], ['难', 'nán', 'khó', '😣'], ['太', 'tài', 'quá, lắm', '‼️'],
            ['爸爸', 'bàba', 'bố', '👨'], ['妈妈', 'māma', 'mẹ', '👩'], ['他', 'tā', 'anh ấy, cậu ấy', '🙋‍♂️'],
            ['她', 'tā', 'chị ấy, cô ấy', '🙋‍♀️'], ['男', 'nán', 'nam', '👦'], ['哥哥', 'gēge', 'anh trai', '🧑'],
            ['弟弟', 'dìdi', 'em trai', '👶'], ['妹妹', 'mèimei', 'em gái', '👧']
          ],
          story: [
            { c: 'panda', vi: '7 giờ sáng. Cả nhà ngồi ăn sáng. Bố ăn rất nhanh, hình như bố vội.' },
            { me: 'Hỏi bố: "Bố có bận không?"', opts: [['爸爸，你忙吗？', 'Bàba, nǐ máng ma?', 'Bố ơi, bố bận không?'], ['爸爸，你好！', 'Bàba, nǐ hǎo!', 'Con chào bố!'], ['汉语难吗？', 'Hànyǔ nán ma?', 'Tiếng Hán khó không?']] },
            { c: 'dad', zh: '很忙。', py: 'Hěn máng.', vi: 'Rất bận.' },
            { c: 'gege', zh: '汉语难吗？', py: 'Hànyǔ nán ma?', vi: 'Tiếng Hán có khó không em?' },
            { me: 'Trả lời anh: không khó lắm', opts: [['不太难。', 'Bú tài nán.', 'Không khó lắm.'], ['很忙。', 'Hěn máng.', 'Rất bận.'], ['你好！', 'Nǐ hǎo!', 'Xin chào!']] },
            { c: 'meimei', zh: '妈妈，哥哥很忙！', py: 'Māma, gēge hěn máng!', vi: 'Mẹ ơi, anh trai bận lắm!' },
            { c: 'mom', zh: '他很忙，她不忙。', py: 'Tā hěn máng, tā bù máng.', vi: 'Anh ấy bận, em ấy không bận.' },
            { c: 'panda', vi: 'Nhà em có 爸爸, 妈妈, 哥哥 và 妹妹. Nhớ nhé: 他 là "anh ấy", 她 là "cô ấy", đọc giống nhau.' }
          ],
          tones: [['忙', 'máng', 2], ['很', 'hěn', 3], ['难', 'nán', 2], ['太', 'tài', 4], ['他', 'tā', 1], ['汉', 'hàn', 4], ['哥', 'gē', 1], ['妹', 'mèi', 4], ['男', 'nán', 2], ['语', 'yǔ', 3]],
          grammar: [
            { t: 'Câu hỏi với 吗', d: 'Thêm 吗 vào cuối câu kể để hỏi "có… không?".', ex: [['你忙吗？', 'Nǐ máng ma?', 'Bạn có bận không?'], ['汉语难吗？', 'Hànyǔ nán ma?', 'Tiếng Hán khó không?']] },
            { t: '很 / 不 / 不太 + tính từ', d: 'Tính từ làm vị ngữ thường có 很 đứng trước. Phủ định dùng 不; 不太 nghĩa là "không… lắm".', ex: [['我很忙。', 'Wǒ hěn máng.', 'Tôi rất bận.'], ['汉语不太难。', 'Hànyǔ bú tài nán.', 'Tiếng Hán không khó lắm.']] },
            { t: 'Thanh nhẹ', d: 'Chữ thứ hai trong 爸爸, 妈妈, 哥哥 đọc nhẹ và ngắn, không có dấu thanh.', ex: [['爸爸 · 妈妈', 'bàba · māma', 'bố · mẹ']] }
          ],
          order: [[['你', '忙', '吗'], 'Bạn có bận không?'], [['汉语', '不', '太', '难'], 'Tiếng Hán không khó lắm.'], [['爸爸', '很', '忙'], 'Bố rất bận.']]
        },
        {
          id: 'hk1-l3', no: 3, day: 'Ngày 3', time: '09:00', scene: 'street',
          vi: 'Đi phố cùng mẹ', zh: '明天见', py: 'Míngtiān jiàn',
          vocab: [
            ['学', 'xué', 'học', '📚'], ['英语', 'Yīngyǔ', 'tiếng Anh', '🔤'], ['对', 'duì', 'đúng', '✅'],
            ['明天', 'míngtiān', 'ngày mai', '🌄'], ['见', 'jiàn', 'gặp', '👀'], ['去', 'qù', 'đi', '🚶'],
            ['邮局', 'yóujú', 'bưu điện', '🏤'], ['寄', 'jì', 'gửi', '📮'], ['信', 'xìn', 'thư', '✉️'],
            ['银行', 'yínháng', 'ngân hàng', '🏦'], ['取', 'qǔ', 'rút, lấy', '🏧'], ['钱', 'qián', 'tiền', '💰'],
            ['六', 'liù', 'sáu', '6️⃣'], ['七', 'qī', 'bảy', '7️⃣'], ['九', 'jiǔ', 'chín', '9️⃣'], ['北京', 'Běijīng', 'Bắc Kinh', '🏯']
          ],
          story: [
            { c: 'panda', vi: 'Sáng thứ bảy, em đi phố cùng mẹ và gặp cô hàng xóm.' },
            { c: 'auntie', zh: '你学英语吗？', py: 'Nǐ xué Yīngyǔ ma?', vi: 'Cháu học tiếng Anh à?' },
            { me: 'Không, cháu học tiếng Hán', opts: [['不，学汉语。', 'Bù, xué Hànyǔ.', 'Không ạ, cháu học tiếng Hán.'], ['对。', 'Duì.', 'Đúng ạ.'], ['明天见！', 'Míngtiān jiàn!', 'Mai gặp lại!']] },
            { c: 'auntie', zh: '去北京吗？', py: 'Qù Běijīng ma?', vi: 'Có đi Bắc Kinh không?' },
            { me: 'Đúng vậy ạ', opts: [['对。', 'Duì.', 'Đúng ạ.'], ['不太难。', 'Bú tài nán.', 'Không khó lắm.'], ['很忙。', 'Hěn máng.', 'Rất bận.']] },
            { c: 'auntie', zh: '你去邮局寄信吗？', py: 'Nǐ qù yóujú jì xìn ma?', vi: 'Chị đi bưu điện gửi thư à?' },
            { c: 'mom', zh: '不去。去银行取钱。', py: 'Bú qù. Qù yínháng qǔ qián.', vi: 'Không. Tôi đi ngân hàng rút tiền.' },
            { c: 'auntie', zh: '明天见！', py: 'Míngtiān jiàn!', vi: 'Mai gặp nhé!' },
            { me: 'Chào cô, mai gặp lại', opts: [['明天见！', 'Míngtiān jiàn!', 'Mai gặp lại cô!'], ['你好！', 'Nǐ hǎo!', 'Xin chào!'], ['不去。', 'Bú qù.', 'Không đi.']] }
          ],
          grammar: [
            { t: 'Biến điệu của 不', d: '不 vốn đọc bù. Đứng trước một chữ thanh 4 thì đọc thành bú.', ex: [['不去', 'bú qù', 'không đi'], ['不太难', 'bú tài nán', 'không khó lắm']] },
            { t: 'Động từ + tân ngữ', d: 'Trật tự giống tiếng Việt: học + tiếng Hán, gửi + thư.', ex: [['学汉语', 'xué Hànyǔ', 'học tiếng Hán'], ['寄信', 'jì xìn', 'gửi thư']] },
            { t: '去 + nơi chốn + việc làm', d: 'Nói đi đâu trước, làm gì sau.', ex: [['去银行取钱。', 'Qù yínháng qǔ qián.', 'Đi ngân hàng rút tiền.']] }
          ],
          order: [[['我', '学', '汉语'], 'Tôi học tiếng Hán.'], [['去', '银行', '取', '钱'], 'Đi ngân hàng rút tiền.'], [['你', '去', '邮局', '寄', '信', '吗'], 'Bạn đi bưu điện gửi thư à?']]
        },
        {
          id: 'hk1-l4', no: 4, day: 'Ngày 4', time: '07:30', scene: 'gate',
          vi: 'Cổng trường, gặp bạn mới', zh: '你去哪儿', py: 'Nǐ qù nǎr',
          vocab: [
            ['今天', 'jīntiān', 'hôm nay', '📅'], ['昨天', 'zuótiān', 'hôm qua', '⏪'], ['星期', 'xīngqī', 'tuần, thứ', '🗓️'],
            ['几', 'jǐ', 'mấy', '❔'], ['二', 'èr', 'hai', '2️⃣'], ['三', 'sān', 'ba', '3️⃣'], ['四', 'sì', 'bốn', '4️⃣'],
            ['哪儿', 'nǎr', 'ở đâu', '🧭'], ['那儿', 'nàr', 'đằng kia', '👉'], ['我', 'wǒ', 'tôi, mình', '🙋'],
            ['回', 'huí', 'về', '↩️'], ['学校', 'xuéxiào', 'trường học', '🏫'], ['再见', 'zàijiàn', 'tạm biệt', '👋'],
            ['对不起', 'duìbuqǐ', 'xin lỗi', '🙇'], ['没关系', 'méi guānxi', 'không sao', '👌'], ['天安门', "Tiān'ānmén", 'Thiên An Môn', '🚩']
          ],
          story: [
            { c: 'panda', vi: 'Đến cổng trường. Em gặp Mike, bạn mới đến từ nước Mỹ.' },
            { c: 'mike', zh: '今天星期几？', py: 'Jīntiān xīngqī jǐ?', vi: 'Hôm nay thứ mấy?' },
            { me: 'Hôm nay thứ Ba', opts: [['今天星期二。', 'Jīntiān xīngqī\'èr.', 'Hôm nay thứ Ba.'], ['今天星期几？', 'Jīntiān xīngqī jǐ?', 'Hôm nay thứ mấy?'], ['我回学校。', 'Wǒ huí xuéxiào.', 'Mình về trường.']] },
            { me: 'Hỏi Mike: "Bạn đi đâu?"', opts: [['你去哪儿？', 'Nǐ qù nǎr?', 'Bạn đi đâu?'], ['你去吗？', 'Nǐ qù ma?', 'Bạn đi không?'], ['没关系！', 'Méi guānxi!', 'Không sao!']] },
            { c: 'mike', zh: '我去天安门，你去不去？', py: 'Wǒ qù Tiān\'ānmén, nǐ qù bu qù?', vi: 'Mình đi Thiên An Môn, bạn có đi không?' },
            { me: 'Không đi, mình về trường', opts: [['不去，我回学校。', 'Bú qù, wǒ huí xuéxiào.', 'Không, mình về trường.'], ['我去天安门。', 'Wǒ qù Tiān\'ānmén.', 'Mình đi Thiên An Môn.'], ['对不起！', 'Duìbuqǐ!', 'Xin lỗi!']] },
            { c: 'mike', zh: '再见！', py: 'Zàijiàn!', vi: 'Tạm biệt!' },
            { me: 'Chào tạm biệt Mike', opts: [['再见！', 'Zàijiàn!', 'Tạm biệt!'], ['你好！', 'Nǐ hǎo!', 'Xin chào!'], ['明天！', 'Míngtiān!', 'Ngày mai!']] },
            { c: 'panda', vi: 'Ối! Em chạy vội, va phải bạn Mary làm rơi hộp quà.' },
            { me: 'Xin lỗi Mary', opts: [['对不起！', 'Duìbuqǐ!', 'Xin lỗi bạn!'], ['没关系！', 'Méi guānxi!', 'Không sao!'], ['再见！', 'Zàijiàn!', 'Tạm biệt!']] },
            { c: 'mali', zh: '没关系！', py: 'Méi guānxi!', vi: 'Không sao đâu!' }
          ],
          grammar: [
            { t: 'Hỏi thứ: 星期几', d: '星期 + số: 星期一 là thứ Hai … 星期六 là thứ Bảy, Chủ nhật là 星期天 (hay 星期日).', ex: [['今天星期几？', 'Jīntiān xīngqī jǐ?', 'Hôm nay thứ mấy?'], ['今天星期二。', 'Jīntiān xīngqī\'èr.', 'Hôm nay thứ Ba.']] },
            { t: 'Câu hỏi chính phản: V 不 V', d: 'Ghép thể khẳng định và phủ định để hỏi, không dùng 吗 nữa.', ex: [['你去不去？', 'Nǐ qù bu qù?', 'Bạn có đi không?']] },
            { t: 'Âm cuốn lưỡi 儿', d: '哪儿, 那儿: chữ 儿 làm âm cuối cuốn lưỡi, đọc dính vào chữ trước.', ex: [['你去哪儿？', 'Nǐ qù nǎr?', 'Bạn đi đâu?']] }
          ],
          order: [[['今天', '星期', '几'], 'Hôm nay thứ mấy?'], [['你', '去', '哪儿'], 'Bạn đi đâu?'], [['我', '回', '学校'], 'Tôi về trường.'], [['你', '去', '不', '去'], 'Bạn có đi không?']]
        },
        {
          id: 'hk1-l5', no: 5, day: 'Ngày 5', time: '19:00', scene: 'living',
          vi: 'Thầy giáo đến thăm nhà', zh: '这是王老师', py: 'Zhè shì Wáng lǎoshī',
          vocab: [
            ['这', 'zhè', 'đây, này', '👇'], ['是', 'shì', 'là', '🟰'], ['老师', 'lǎoshī', 'thầy, cô giáo', '👨‍🏫'],
            ['您', 'nín', 'ngài, ông/bà (kính trọng)', '🎩'], ['请', 'qǐng', 'mời, xin', '🫴'], ['进', 'jìn', 'vào', '🚪'],
            ['坐', 'zuò', 'ngồi', '🪑'], ['喝', 'hē', 'uống', '🥤'], ['茶', 'chá', 'trà', '🍵'],
            ['谢谢', 'xièxie', 'cảm ơn', '🙏'], ['不客气', 'bú kèqi', 'không có gì', '😊'], ['工作', 'gōngzuò', 'công việc, làm việc', '💼'],
            ['身体', 'shēntǐ', 'sức khỏe, cơ thể', '💪'], ['十', 'shí', 'mười', '🔟'], ['日', 'rì', 'mặt trời, ngày', '☀️']
          ],
          story: [
            { c: 'panda', vi: 'Buổi tối, thầy Vương chủ nhiệm đến thăm nhà em. Em ra mở cửa và giới thiệu thầy với bố.' },
            { me: 'Giới thiệu: "Đây là thầy Vương, đây là bố con"', opts: [['这是王老师，这是我爸爸。', 'Zhè shì Wáng lǎoshī, zhè shì wǒ bàba.', 'Đây là thầy Vương, đây là bố em.'], ['王老师，您好！', 'Wáng lǎoshī, nín hǎo!', 'Em chào thầy Vương!'], ['不客气！', 'Bú kèqi!', 'Không có gì!']] },
            { c: 'dad', zh: '王老师，您好！请进！请坐！', py: 'Wáng lǎoshī, nín hǎo! Qǐng jìn! Qǐng zuò!', vi: 'Chào thầy Vương! Mời thầy vào! Mời thầy ngồi!' },
            { c: 'panda', vi: 'Mẹ pha trà, em bưng ra mời thầy.' },
            { me: 'Mời thầy uống trà', opts: [['请喝茶！', 'Qǐng hē chá!', 'Mời thầy uống trà!'], ['请进！', 'Qǐng jìn!', 'Mời vào!'], ['谢谢！', 'Xièxie!', 'Cảm ơn!']] },
            { c: 'teacher', zh: '谢谢！', py: 'Xièxie!', vi: 'Cảm ơn em!' },
            { me: 'Đáp lại lời cảm ơn', opts: [['不客气！', 'Bú kèqi!', 'Không có gì ạ!'], ['对不起！', 'Duìbuqǐ!', 'Xin lỗi!'], ['谢谢！', 'Xièxie!', 'Cảm ơn!']] },
            { c: 'dad', zh: '工作忙吗？', py: 'Gōngzuò máng ma?', vi: 'Công việc của thầy có bận không?' },
            { c: 'teacher', zh: '不太忙。', py: 'Bú tài máng.', vi: 'Không bận lắm.' },
            { c: 'dad', zh: '身体好吗？', py: 'Shēntǐ hǎo ma?', vi: 'Thầy có khỏe không?' },
            { c: 'teacher', zh: '很好！', py: 'Hěn hǎo!', vi: 'Rất khỏe!' }
          ],
          grammar: [
            { t: 'Câu chữ 是: A 是 B', d: 'Dùng để giới thiệu, nói "A là B". Phủ định: A 不是 B.', ex: [['这是王老师。', 'Zhè shì Wáng lǎoshī.', 'Đây là thầy Vương.']] },
            { t: '请 + động từ', d: 'Lời mời lịch sự: 请进 (mời vào), 请坐 (mời ngồi), 请喝茶 (mời uống trà).', ex: [['请喝茶！', 'Qǐng hē chá!', 'Mời uống trà!']] },
            { t: '您: "bạn" kính trọng', d: 'Dùng 您 với thầy cô, người lớn tuổi. Vị ngữ là tính từ thì không dùng 是: 身体很好.', ex: [['您好！', 'Nín hǎo!', 'Cháu chào ông/bà/thầy!'], ['身体很好。', 'Shēntǐ hěn hǎo.', 'Sức khỏe rất tốt.']] }
          ],
          order: [[['这', '是', '王老师'], 'Đây là thầy Vương.'], [['请', '喝', '茶'], 'Mời uống trà.'], [['工作', '忙', '吗'], 'Công việc có bận không?'], [['身体', '很', '好'], 'Sức khỏe rất tốt.']]
        },
        {
          id: 'hk1-l6', no: 6, day: 'Ngày 6', time: '09:30', scene: 'classroom',
          vi: 'Làm quen trong lớp', zh: '我学习汉语', py: 'Wǒ xuéxí Hànyǔ',
          vocab: [
            ['请问', 'qǐngwèn', 'xin hỏi', '🙋'], ['贵姓', 'guìxìng', 'quý danh (họ gì)', '📛'], ['姓', 'xìng', 'họ', '🏷️'],
            ['叫', 'jiào', 'tên là, gọi', '📣'], ['名字', 'míngzi', 'tên', '🪪'], ['哪', 'nǎ', 'nào', '🤷'],
            ['国', 'guó', 'nước', '🌏'], ['人', 'rén', 'người', '🧍'], ['中国', 'Zhōngguó', 'Trung Quốc', '🇨🇳'],
            ['美国', 'Měiguó', 'nước Mỹ', '🇺🇸'], ['越南', 'Yuènán', 'Việt Nam', '🇻🇳'], ['学习', 'xuéxí', 'học tập', '📖'],
            ['什么', 'shénme', 'cái gì', '🤔'], ['汉字', 'Hànzì', 'chữ Hán', '🈶'], ['发音', 'fāyīn', 'phát âm', '🗣️'],
            ['书', 'shū', 'sách', '📘'], ['谁', 'shéi', 'ai', '🕵️'], ['的', 'de', 'của', '🔗'],
            ['那', 'nà', 'kia, đó', '👉'], ['杂志', 'zázhì', 'tạp chí', '📰'], ['朋友', 'péngyou', 'bạn bè', '🤝']
          ],
          story: [
            { c: 'panda', vi: 'Giờ ra chơi, Mike đến làm quen với em. (Bài này có thêm từ 越南 để em nói mình là người Việt Nam.)' },
            { c: 'mike', zh: '请问，你贵姓？', py: 'Qǐngwèn, nǐ guìxìng?', vi: 'Xin hỏi, bạn họ gì?' },
            { me: 'Nói họ của em', opts: [['我姓{sur}。', 'Wǒ xìng {surPy}.', 'Mình họ {surVi}.'], ['我叫麦克。', 'Wǒ jiào Màikè.', 'Mình tên là Mike.'], ['我是美国人。', 'Wǒ shì Měiguó rén.', 'Mình là người Mỹ.']] },
            { c: 'mike', zh: '你叫什么名字？', py: 'Nǐ jiào shénme míngzi?', vi: 'Bạn tên là gì?' },
            { me: 'Nói tên đầy đủ', opts: [['我叫{full}。', 'Wǒ jiào {fullPy}.', 'Mình tên là {fullVi}.'], ['我姓什么？', 'Wǒ xìng shénme?', 'Mình họ gì?'], ['这是书。', 'Zhè shì shū.', 'Đây là sách.']] },
            { me: 'Hỏi Mike là người nước nào', opts: [['你是哪国人？', 'Nǐ shì nǎ guó rén?', 'Bạn là người nước nào?'], ['你是谁的书？', 'Nǐ shì shéi de shū?', '(sai ngữ pháp)'], ['你叫什么？', 'Nǐ jiào shénme?', 'Bạn tên gì?']] },
            { c: 'mike', zh: '我是美国人。你是哪国人？', py: 'Wǒ shì Měiguó rén. Nǐ shì nǎ guó rén?', vi: 'Mình là người Mỹ. Bạn là người nước nào?' },
            { me: 'Mình là người Việt Nam', opts: [['我是越南人。', 'Wǒ shì Yuènán rén.', 'Mình là người Việt Nam.'], ['我是美国人。', 'Wǒ shì Měiguó rén.', 'Mình là người Mỹ.'], ['我学习汉语。', 'Wǒ xuéxí Hànyǔ.', 'Mình học tiếng Hán.']] },
            { c: 'mike', zh: '汉语难吗？', py: 'Hànyǔ nán ma?', vi: 'Tiếng Hán có khó không?' },
            { me: 'Chữ Hán rất khó, phát âm không khó lắm', opts: [['汉字很难，发音不太难。', 'Hànzì hěn nán, fāyīn bú tài nán.', 'Chữ Hán rất khó, phát âm không khó lắm.'], ['汉字不太难，发音很忙。', 'Hànzì bú tài nán, fāyīn hěn máng.', '(sai nghĩa)'], ['我叫汉语。', 'Wǒ jiào Hànyǔ.', '(sai nghĩa)']] },
            { c: 'panda', vi: 'Mike cầm một quyển sách trên bàn thầy.' },
            { c: 'mike', zh: '这是什么书？', py: 'Zhè shì shénme shū?', vi: 'Đây là sách gì?' },
            { me: 'Đây là sách tiếng Trung', opts: [['这是中文书。', 'Zhè shì Zhōngwén shū.', 'Đây là sách tiếng Trung.'], ['这是谁的书？', 'Zhè shì shéi de shū?', 'Đây là sách của ai?'], ['那是杂志。', 'Nà shì zázhì.', 'Kia là tạp chí.']] },
            { c: 'mike', zh: '这是谁的书？', py: 'Zhè shì shéi de shū?', vi: 'Đây là sách của ai?' },
            { me: 'Sách của thầy giáo', opts: [['这是老师的书。', 'Zhè shì lǎoshī de shū.', 'Đây là sách của thầy.'], ['这是老师书的。', 'Zhè shì lǎoshī shū de.', '(sai trật tự)'], ['我是老师。', 'Wǒ shì lǎoshī.', 'Mình là thầy giáo.']] }
          ],
          grammar: [
            { t: 'Hỏi họ tên', d: '您贵姓？/你贵姓？ hỏi họ một cách lịch sự, đáp 我姓…. Hỏi tên: 你叫什么名字？, đáp 我叫….', ex: [['请问，您贵姓？', 'Qǐngwèn, nín guìxìng?', 'Xin hỏi, ông/bà họ gì?'], ['我叫{full}。', 'Wǒ jiào {fullPy}.', 'Mình tên là {fullVi}.']] },
            { t: 'Đại từ nghi vấn 什么 / 谁 / 哪', d: 'Đặt đúng vào chỗ cần hỏi, giữ nguyên trật tự câu, KHÔNG thêm 吗.', ex: [['这是什么？', 'Zhè shì shénme?', 'Đây là cái gì?'], ['你是哪国人？', 'Nǐ shì nǎ guó rén?', 'Bạn là người nước nào?']] },
            { t: 'Trợ từ 的: "của"', d: 'Người sở hữu + 的 + vật. Ngược trật tự với tiếng Việt.', ex: [['老师的书', 'lǎoshī de shū', 'sách của thầy'], ['我朋友的杂志', 'wǒ péngyou de zázhì', 'tạp chí của bạn tôi']] }
          ],
          order: [[['你', '叫', '什么', '名字'], 'Bạn tên là gì?'], [['你', '是', '哪', '国', '人'], 'Bạn là người nước nào?'], [['这', '是', '谁', '的', '书'], 'Đây là sách của ai?'], [['那', '是', '我', '朋友', '的', '杂志'], 'Kia là tạp chí của bạn tôi.']]
        },
        {
          id: 'hk1-l7', no: 7, day: 'Ngày 7', time: '12:00', scene: 'canteen',
          vi: 'Ăn trưa ở nhà ăn', zh: '你吃什么', py: 'Nǐ chī shénme',
          vocab: [
            ['中午', 'zhōngwǔ', 'buổi trưa', '🕛'], ['吃', 'chī', 'ăn', '🍽️'], ['饭', 'fàn', 'cơm, bữa ăn', '🍛'],
            ['食堂', 'shítáng', 'nhà ăn', '🍱'], ['馒头', 'mántou', 'bánh màn thầu', '🫓'], ['米饭', 'mǐfàn', 'cơm trắng', '🍚'],
            ['要', 'yào', 'muốn, cần', '🙋‍♀️'], ['个', 'gè', 'cái, chiếc (lượng từ)', '🔢'], ['碗', 'wǎn', 'bát', '🥣'],
            ['鸡蛋', 'jīdàn', 'trứng gà', '🥚'], ['汤', 'tāng', 'canh', '🍲'], ['饺子', 'jiǎozi', 'sủi cảo', '🥟'],
            ['包子', 'bāozi', 'bánh bao', '🍘'], ['面条', 'miàntiáo', 'mì sợi', '🍜'], ['这些', 'zhèxiē', 'những cái này', '🫳']
          ],
          story: [
            { c: 'mike', zh: '中午你去哪儿吃饭？', py: 'Zhōngwǔ nǐ qù nǎr chī fàn?', vi: 'Trưa nay bạn đi đâu ăn cơm?' },
            { me: 'Mình đi nhà ăn', opts: [['我去食堂。', 'Wǒ qù shítáng.', 'Mình đi nhà ăn.'], ['我吃馒头。', 'Wǒ chī mántou.', 'Mình ăn màn thầu.'], ['我回学校。', 'Wǒ huí xuéxiào.', 'Mình về trường.']] },
            { c: 'panda', vi: 'Ở nhà ăn của trường.' },
            { c: 'mike', zh: '你吃什么？', py: 'Nǐ chī shénme?', vi: 'Bạn ăn gì?' },
            { me: 'Mình ăn màn thầu', opts: [['我吃馒头。', 'Wǒ chī mántou.', 'Mình ăn màn thầu.'], ['我喝茶。', 'Wǒ hē chá.', 'Mình uống trà.'], ['我去食堂。', 'Wǒ qù shítáng.', 'Mình đi nhà ăn.']] },
            { c: 'mike', zh: '你要几个？', py: 'Nǐ yào jǐ ge?', vi: 'Bạn lấy mấy cái?' },
            { me: 'Một cái. Bạn ăn không?', opts: [['一个。你吃吗？', 'Yí ge. Nǐ chī ma?', 'Một cái. Bạn ăn không?'], ['一碗。你吃吗？', 'Yì wǎn. Nǐ chī ma?', 'Một bát. Bạn ăn không?'], ['几个？', 'Jǐ ge?', 'Mấy cái?']] },
            { c: 'mike', zh: '不吃，我吃米饭。你喝什么？', py: 'Bù chī, wǒ chī mǐfàn. Nǐ hē shénme?', vi: 'Không, mình ăn cơm. Bạn uống gì?' },
            { me: 'Mình lấy một bát canh trứng', opts: [['我要一碗鸡蛋汤。', 'Wǒ yào yì wǎn jīdàn tāng.', 'Mình lấy một bát canh trứng.'], ['我要一个鸡蛋汤。', 'Wǒ yào yí ge jīdàn tāng.', '(sai lượng từ)'], ['我吃一碗。', 'Wǒ chī yì wǎn.', 'Mình ăn một bát.']] },
            { me: 'Hỏi cô nhà ăn: những cái này là gì?', opts: [['这些是什么？', 'Zhèxiē shì shénme?', 'Những cái này là gì ạ?'], ['这是谁的？', 'Zhè shì shéi de?', 'Cái này của ai?'], ['你吃什么？', 'Nǐ chī shénme?', 'Bạn ăn gì?']] },
            { c: 'cook', zh: '这是饺子，这是包子，那是面条。', py: 'Zhè shì jiǎozi, zhè shì bāozi, nà shì miàntiáo.', vi: 'Đây là sủi cảo, đây là bánh bao, kia là mì.' }
          ],
          grammar: [
            { t: 'Số + lượng từ + danh từ', d: 'Tiếng Trung luôn cần lượng từ giữa số và danh từ: 个 dùng chung, 碗 cho thứ đựng trong bát.', ex: [['一个馒头', 'yí ge mántou', 'một cái màn thầu'], ['一碗汤', 'yì wǎn tāng', 'một bát canh']] },
            { t: '几: hỏi số lượng nhỏ', d: 'Dùng 几 khi đoán con số dưới 10, phải có lượng từ đi sau.', ex: [['你要几个？', 'Nǐ yào jǐ ge?', 'Bạn lấy mấy cái?']] },
            { t: 'Biến điệu của 一', d: '一 trước thanh 4 đọc yí (一个 yí ge); trước thanh 1, 2, 3 đọc yì (一碗 yì wǎn).', ex: [['一个 · 一碗', 'yí ge · yì wǎn', 'một cái · một bát']] }
          ],
          order: [[['你', '吃', '什么'], 'Bạn ăn gì?'], [['你', '要', '几', '个'], 'Bạn lấy mấy cái?'], [['我', '要', '一', '碗', '鸡蛋', '汤'], 'Tôi lấy một bát canh trứng.'], [['这', '是', '饺子'], 'Đây là sủi cảo.']]
        },
        {
          id: 'hk1-l8', no: 8, day: 'Ngày 8', time: '17:00', scene: 'market',
          vi: 'Đi chợ mua hoa quả', zh: '苹果一斤多少钱', py: 'Píngguǒ yì jīn duōshao qián',
          vocab: [
            ['买', 'mǎi', 'mua', '🛒'], ['水果', 'shuǐguǒ', 'hoa quả', '🍇'], ['苹果', 'píngguǒ', 'quả táo', '🍎'],
            ['斤', 'jīn', 'cân (0,5 kg)', '⚖️'], ['贵', 'guì', 'đắt', '💎'], ['吧', 'ba', 'nhé, đi (đề nghị)', '💬'],
            ['多少', 'duōshao', 'bao nhiêu', '🔢'], ['块', 'kuài', 'đồng (tệ)', '💴'], ['毛', 'máo', 'hào', '🪙'],
            ['两', 'liǎng', 'hai (trước lượng từ)', '✌️'], ['还', 'hái', 'còn, nữa', '➕'], ['别的', 'biéde', 'cái khác', '🔀'],
            ['橘子', 'júzi', 'quả quýt', '🍊'], ['怎么', 'zěnme', 'thế nào', '❓'], ['卖', 'mài', 'bán', '🏪'],
            ['一共', 'yígòng', 'tổng cộng', '🧮'], ['给', 'gěi', 'đưa, cho', '🤲'], ['找', 'zhǎo', 'trả lại (tiền thừa)', '💱']
          ],
          story: [
            { c: 'panda', vi: 'Chiều tan học, mẹ cho em tự đi mua hoa quả ở sạp đầu ngõ. Mẹ đứng ngay bên cạnh.' },
            { c: 'seller', zh: '你买什么？', py: 'Nǐ mǎi shénme?', vi: 'Cháu mua gì?' },
            { me: 'Cháu mua hoa quả. Táo bao nhiêu một cân?', opts: [['我买水果。苹果一斤多少钱？', 'Wǒ mǎi shuǐguǒ. Píngguǒ yì jīn duōshao qián?', 'Cháu mua hoa quả. Táo một cân bao nhiêu tiền ạ?'], ['我卖水果。', 'Wǒ mài shuǐguǒ.', 'Cháu bán hoa quả.'], ['苹果几个？', 'Píngguǒ jǐ ge?', 'Táo mấy quả?']] },
            { c: 'seller', zh: '三块。', py: 'Sān kuài.', vi: 'Ba đồng.' },
            { me: 'Đắt quá! Hai đồng rưỡi nhé', opts: [['三块？太贵了。两块五吧。', 'Sān kuài? Tài guì le. Liǎng kuài wǔ ba.', 'Ba đồng ạ? Đắt quá. Hai đồng rưỡi nhé.'], ['三块？太贵了。二块五吧。', 'Sān kuài? Tài guì le. Èr kuài wǔ ba.', '(sai: trước lượng từ dùng 两)'], ['不贵。', 'Bú guì.', 'Không đắt.']] },
            { c: 'seller', zh: '你要几斤？', py: 'Nǐ yào jǐ jīn?', vi: 'Cháu lấy mấy cân?' },
            { me: 'Cháu mua năm cân', opts: [['我买五斤。', 'Wǒ mǎi wǔ jīn.', 'Cháu mua năm cân.'], ['我买五个斤。', 'Wǒ mǎi wǔ ge jīn.', '(sai lượng từ)'], ['五块。', 'Wǔ kuài.', 'Năm đồng.']] },
            { c: 'seller', zh: '还要别的吗？', py: 'Hái yào biéde ma?', vi: 'Còn lấy gì nữa không?' },
            { me: 'Hỏi giá quýt', opts: [['橘子怎么卖？', 'Júzi zěnme mài?', 'Quýt bán thế nào ạ?'], ['橘子怎么买？', 'Júzi zěnme mǎi?', 'Quýt mua thế nào?'], ['橘子是什么？', 'Júzi shì shénme?', 'Quýt là gì?']] },
            { c: 'seller', zh: '两块。', py: 'Liǎng kuài.', vi: 'Hai đồng.' },
            { me: 'Lấy hai cân. Tổng cộng bao nhiêu tiền?', opts: [['要两斤。一共多少钱？', 'Yào liǎng jīn. Yígòng duōshao qián?', 'Lấy hai cân. Tổng cộng bao nhiêu tiền ạ?'], ['要二斤。多少钱？', 'Yào èr jīn. Duōshao qián?', '(sai: dùng 两斤)'], ['一共两斤。', 'Yígòng liǎng jīn.', 'Tổng cộng hai cân.']] },
            { c: 'seller', zh: '一共十六块五。你给十六块吧。', py: 'Yígòng shíliù kuài wǔ. Nǐ gěi shíliù kuài ba.', vi: 'Tổng cộng 16 đồng 5 hào. Cháu đưa 16 đồng thôi.' },
            { me: 'Đưa tiền: "Cháu gửi tiền ạ"', opts: [['给你钱。', 'Gěi nǐ qián.', 'Cháu gửi cô tiền.'], ['找你钱。', 'Zhǎo nǐ qián.', 'Trả lại tiền cho cô.'], ['买你钱。', 'Mǎi nǐ qián.', '(sai nghĩa)']] },
            { c: 'seller', zh: '这是五十，找你三十四块。', py: 'Zhè shì wǔshí, zhǎo nǐ sānshísì kuài.', vi: 'Đây là 50, cô trả lại cháu 34 đồng.' },
            { c: 'mom', zh: '很好！', py: 'Hěn hǎo!', vi: 'Giỏi lắm!' }
          ],
          grammar: [
            { t: 'Hỏi giá', d: '… 多少钱？ hỏi giá trực tiếp; … 怎么卖？ hỏi "bán thế nào" (giá theo cân, theo quả).', ex: [['苹果一斤多少钱？', 'Píngguǒ yì jīn duōshao qián?', 'Táo bao nhiêu tiền một cân?'], ['橘子怎么卖？', 'Júzi zěnme mài?', 'Quýt bán thế nào?']] },
            { t: '太 … 了', d: 'Diễn tả mức độ quá cao: 太贵了 = đắt quá.', ex: [['太贵了！', 'Tài guì le!', 'Đắt quá!']] },
            { t: '吧 cuối câu', d: 'Làm câu thành lời đề nghị, mặc cả nhẹ nhàng.', ex: [['两块五吧。', 'Liǎng kuài wǔ ba.', 'Hai đồng rưỡi nhé.']] },
            { t: '两 và 二', d: 'Đếm số dùng 二; trước lượng từ dùng 两: 两斤, 两块, 两个.', ex: [['两斤橘子', 'liǎng jīn júzi', 'hai cân quýt']] },
            { t: 'Tiền Trung Quốc', d: 'Khẩu ngữ: 块 (đồng) · 毛 (hào) · 分 (xu). Văn viết: 元 · 角 · 分. 1 块 = 10 毛.', ex: [['十六块五（毛）', 'shíliù kuài wǔ (máo)', '16 đồng 5 hào']] }
          ],
          order: [[['苹果', '一', '斤', '多少', '钱'], 'Táo một cân bao nhiêu tiền?'], [['太', '贵', '了'], 'Đắt quá!'], [['橘子', '怎么', '卖'], 'Quýt bán thế nào?'], [['一共', '多少', '钱'], 'Tổng cộng bao nhiêu tiền?']]
        }
      ]
    },
    { id: 'hk2', label: 'HK2', stage: 'Lớp 6', age: 11, face: '👦', book: 'Đang chờ nạp từ thư mục HK2', locked: true, lessons: [] },
    { id: 'hk3', label: 'HK3', stage: 'Lớp 10', age: 15, face: '🧑', book: 'Đang chờ nạp từ thư mục học kì 3', locked: true, lessons: [] },
    { id: 'hk4', label: 'HK4', stage: 'Sinh viên', age: 18, face: '🧑‍🎓', book: 'Đang chờ nạp từ thư mục học kì 4', locked: true, lessons: [] }
  ]
};

/* Thử thách cuối mỗi ngày.
   gram: chạm vào đúng từ trong câu (phân tích ngữ pháp)
   pic : nhìn tranh, chọn câu mô tả đúng (kiểu 看图说话); phương án ĐẦU TIÊN là đúng
   Câu "điền từ" được game tự tạo từ phần xếp câu + từ mới. */
window.CONTENT.challenges = {
  'hk1-l1': {
    gram: [{ s: ['你', '好'], q: 'Chạm vào chữ có nghĩa "tốt, khỏe"', a: '好' }],
    pic: [{ p: '👩 👋 🧒', v: 'Xin chào!', opts: ['你好！', '八！', '不大。'] }, { p: '🐴 ⚪', v: 'Ngựa trắng', opts: ['白马', '大口', '五马'] }]
  },
  'hk1-l2': {
    gram: [{ s: ['你', '忙', '吗'], q: 'Chạm vào từ biến câu kể thành câu hỏi', a: '吗' }, { s: ['汉语', '不', '太', '难'], q: 'Chạm vào tính từ làm vị ngữ', a: '难' }],
    pic: [{ p: '👨 💼 🏃 ⏰', v: 'Bố rất bận.', opts: ['爸爸很忙。', '爸爸不忙。', '妈妈很难。'] }, { p: '🧑 👧 👶', v: 'Anh trai, em gái, em trai', opts: ['哥哥、妹妹、弟弟', '爸爸、妈妈、哥哥', '弟弟、哥哥、妈妈'] }]
  },
  'hk1-l3': {
    gram: [{ s: ['去', '银行', '取', '钱'], q: 'Chạm vào từ chỉ nơi chốn', a: '银行' }, { s: ['我', '学', '汉语'], q: 'Chạm vào động từ', a: '学' }],
    pic: [{ p: '👩 ➡️ 🏦 💰', v: 'Đi ngân hàng rút tiền.', opts: ['去银行取钱。', '去邮局寄信。', '学英语。'] }, { p: '🧒 ✉️ ➡️ 🏤', v: 'Đi bưu điện gửi thư.', opts: ['去邮局寄信。', '去银行取钱。', '明天见。'] }]
  },
  'hk1-l4': {
    gram: [{ s: ['你', '去', '不', '去'], q: 'Câu hỏi chính phản: chạm vào chữ phủ định', a: '不' }, { s: ['今天', '星期', '几'], q: 'Chạm vào từ để hỏi', a: '几' }],
    pic: [{ p: '🧒 ↩️ 🏫', v: 'Tôi về trường.', opts: ['我回学校。', '我去天安门。', '今天星期二。'] }, { p: '🧒 💥 👩‍🦰 🎁', v: 'Xin lỗi!', opts: ['对不起！', '没关系！', '再见！'] }]
  },
  'hk1-l5': {
    gram: [{ s: ['这', '是', '王老师'], q: 'Chạm vào động từ "là"', a: '是' }, { s: ['请', '喝', '茶'], q: 'Chạm vào từ dùng để mời', a: '请' }],
    pic: [{ p: '👨‍🏫 🪑 🍵', v: 'Mời uống trà!', opts: ['请喝茶！', '请进！', '工作忙吗？'] }, { p: '🚪 👨‍🏫 👨', v: 'Mời vào!', opts: ['请进！', '不客气！', '身体好吗？'] }]
  },
  'hk1-l6': {
    gram: [{ s: ['这', '是', '老师', '的', '书'], q: 'Chạm vào trợ từ mang nghĩa "của"', a: '的' }, { s: ['你', '是', '哪', '国', '人'], q: 'Chạm vào từ để hỏi', a: '哪' }],
    pic: [{ p: '👱‍♂️ 🇺🇸', v: 'Cậu ấy là người Mỹ.', opts: ['他是美国人。', '他是中国人。', '他是越南人。'] }, { p: '📘 👉 👨‍🏫', v: 'Đây là sách của thầy.', opts: ['这是老师的书。', '这是我的杂志。', '那是朋友的书。'] }]
  },
  'hk1-l7': {
    gram: [{ s: ['一', '碗', '汤'], q: 'Chạm vào lượng từ', a: '碗' }, { s: ['你', '要', '几', '个'], q: 'Chạm vào từ hỏi số lượng', a: '几' }],
    pic: [{ p: '🧒 🍽️ 🥟🥟', v: 'Tôi ăn sủi cảo.', opts: ['我吃饺子。', '我喝汤。', '我吃面条。'] }, { p: '1️⃣ 🥣 🥚🍲', v: 'Một bát canh trứng', opts: ['一碗鸡蛋汤', '一个鸡蛋汤', '两碗米饭'] }]
  },
  'hk1-l8': {
    gram: [{ s: ['太', '贵', '了'], q: 'Chạm vào tính từ', a: '贵' }, { s: ['两', '块', '五', '吧'], q: 'Chạm vào trợ từ biến câu thành lời đề nghị', a: '吧' }],
    pic: [{ p: '🍎 ⚖️ 💴❓', v: 'Táo một cân bao nhiêu tiền?', opts: ['苹果一斤多少钱？', '橘子怎么卖？', '给你钱。'] }, { p: '🍊🍊 ⚖️ 2️⃣', v: 'Lấy hai cân quýt.', opts: ['要两斤橘子。', '要二斤橘子。', '买两块苹果。'] }]
  }
};
