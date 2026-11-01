/* Môn Giáo trình ngữ pháp Hán ngữ hiện đại — 汉语语法教程 (孙德金), bản dịch Lê Thanh Hà.
   Phần lý thuyết tóm tắt theo sách; bài tập 【Sách · 思考与练习】 lấy từ sách, đáp án đối chiếu phần 参考答案 của sách; các bài khác do Claude soạn, chỉ để tham khảo. */
HOC.add({ id: 'ngp', name: 'Giáo trình ngữ pháp Hán ngữ hiện đại', book: '汉语语法教程 (孙德金)', lessons: [
{ n: 1, title: 'Chương I · Khái quát về ngữ pháp 语法概说', texts: [
{ id: 'g1-1', title: 'Ngữ pháp là gì 什么是语法', kind: '语法', src: '（《汉语语法教程》孙德金 · Chương I, Tiết 1, tr.1–5）',
  p: [
    '## 1. Ngữ pháp tồn tại khách quan trong ngôn ngữ',
    'Người bình thường nghe câu 他的个子比我很高 hay 这篇文章一点儿别扭 đều thấy ngay “câu này sai”, dù không giải thích được vì sao. Điều đó cho thấy trong đầu mỗi người đều có ý thức ngữ pháp. Ngôn ngữ nào cũng có trật tự tổ chức, không thể sắp xếp từ lộn xộn: các từ 我们 / 讨论 / 问题 / 经常 / 汉语 chỉ có thể ghép thành 我们经常讨论汉语问题。 hoặc 汉语问题我们经常讨论。, chứ không thể là “问题经常汉语讨论我们”.',
    '## 2. Ngữ pháp là một dạng kiến thức chuyên môn',
    'Nói giỏi một ngôn ngữ không có nghĩa là giải thích được quy luật của nó. Muốn giải thích vì sao 我们经常讨论汉语问题 đúng ngữ pháp, ta phải dùng thuật ngữ và quy tắc: (1) chủ ngữ ở đầu câu, động từ làm vị ngữ ở giữa, tân ngữ ở cuối: CN + VN + TN; (2) phó từ làm trạng ngữ phải đứng trước động từ vị ngữ. Cách diễn đạt này gồm hai thứ: hệ thống thuật ngữ (主语、谓语、宾语、状语、动词、副词…) và trật tự sắp xếp (语序). Vì vậy ngữ pháp là tri thức phải học mới nắm được.',
    '## 3. Ngữ pháp là hệ thống quy tắc tổ hợp',
    'Trẻ em không học từng câu một mà nắm được kiểu câu: biết nói 宝宝吃糖 thì sẽ nói được 宝宝看书、妈妈吃饭 (ai + làm gì + đối tượng). Học ngoại ngữ cũng vậy: học số quy tắc có hạn để nói vô số câu. Ngữ pháp gồm hai phần: phương pháp cấu tạo từ (构词法 – quy tắc ghép các thành phần thành từ) và cú pháp (句法 – quy tắc ghép từ thành câu). Với tiếng Hán, cú pháp quan trọng hơn nhiều.',
    'Ví dụ lỗi thường gặp của người nước ngoài: 他把我的杯子坏了。/ 我把这个问题懂了。 Câu chữ 把 cần một động từ chính; “坏、懂” chỉ là kết quả, nên phải thêm động từ: 他把我的杯子弄坏了。/ 我把这个问题弄懂了。'
  ],
  zh: ['我们经常讨论汉语问题。', '汉语问题我们经常讨论。', '宝宝吃糖。', '妈妈吃饭。', '他把我的杯子弄坏了。', '我把这个问题弄懂了。', '他的个子比我高得多。'],
  notes: [['语法', 'yǔfǎ', 'ngữ pháp'], ['语序', 'yǔxù', 'trật tự từ'], ['主语', 'zhǔyǔ', 'chủ ngữ'], ['谓语', 'wèiyǔ', 'vị ngữ'], ['宾语', 'bīnyǔ', 'tân ngữ'], ['状语', 'zhuàngyǔ', 'trạng ngữ'], ['动词', 'dòngcí', 'động từ'], ['副词', 'fùcí', 'phó từ'], ['构词法', 'gòucífǎ', 'phương pháp cấu tạo từ'], ['句法', 'jùfǎ', 'cú pháp'], ['别扭', 'bièniu', 'trúc trắc, gượng gạo'], ['弄', 'nòng', 'làm (động từ chung chung)']],
  ex: [
    { t: 'tf', q: '【Cơ bản】Đúng hay sai?', items: [
      ['Người bản ngữ nói giỏi thì chắc chắn giải thích được mọi quy tắc ngữ pháp.', false],
      ['Ngữ pháp gồm hai phần lớn: cấu tạo từ và cú pháp.', true],
      ['Với tiếng Hán, cấu tạo từ quan trọng hơn cú pháp.', false],
      ['Phó từ làm trạng ngữ phải đặt trước động từ vị ngữ.', true],
      ['Học ngoại ngữ là học thuộc từng câu một.', false]] },
    { t: 'order', q: '【Cơ bản】Sắp xếp thành câu đúng (chạm theo thứ tự).', items: [
      ['我们', '经常', '讨论', '汉语问题。'],
      ['他', '把', '我的杯子', '弄坏了。'],
      ['妈妈', '在厨房', '做饭。'],
      ['我', '已经', '看完', '那本书了。']] },
    { t: 'mc', q: '【Trung bình】Chọn câu đúng ngữ pháp.', items: [
      ['Câu nào đúng?', ['他比我很高。', '他比我高得多。', '他比我非常高。'], 1],
      ['Câu nào đúng?', ['我把这个问题懂了。', '我把这个问题弄懂了。', '我把懂了这个问题。'], 1],
      ['Câu nào đúng?', ['问题经常汉语讨论我们。', '我们讨论经常汉语问题。', '汉语问题我们经常讨论。'], 2]] },
    { t: 'open', q: '【Nâng cao】Sửa câu sai và giải thích bằng quy tắc ngữ pháp.', items: [
      ['他把我的杯子坏了。', '→ 他把我的杯子弄坏了 (打坏/摔坏)。Câu chữ 把 cần động từ chính + bổ ngữ kết quả; 坏 chỉ là kết quả.'],
      ['我经常汉语讨论问题。', '→ 我经常讨论汉语问题。Trật tự CN + trạng ngữ + ĐT + TN; 汉语问题 là tân ngữ, đứng sau động từ.'],
      ['他的个子比我很高。', '→ 他的个子比我高得多 / 高一点儿。Câu so sánh 比 không dùng 很、非常 trước tính từ.']] }
  ],
  adv: {
    g: [['CN + 把 + TN + ĐT + bổ ngữ', 'câu chữ 把: xử trí đối tượng, phải có động từ chính và thành phần khác đi sau', '他把我的杯子弄坏了。'], ['A + 比 + B + Adj + 得多/一点儿', 'so sánh hơn, không dùng 很/非常', '他的个子比我高得多。']],
    an: [['我们经常讨论汉语问题。', '【主语】我们 【状语】经常 【谓语·动词】讨论 【宾语】汉语问题', 'Chúng tôi thường thảo luận các vấn đề tiếng Hán.']],
    v: [['语感', 'yǔgǎn', 'cảm thụ ngôn ngữ'], ['规则', 'guīzé', 'quy tắc'], ['母语', 'mǔyǔ', 'tiếng mẹ đẻ'], ['病句', 'bìngjù', 'câu sai']],
    s: [['Giải thích lỗi', 'Đọc to câu sai 他把我的杯子坏了 rồi câu đúng, nói bằng tiếng Trung vì sao phải thêm 弄.']],
    w: [['Tự tìm lỗi', 'Viết 3 câu tiếng Trung bạn hay nói sai, sửa lại và ghi quy tắc ngữ pháp liên quan.']]
  } },
{ id: 'g1-2', title: 'Phân tích ngữ pháp và đơn vị ngữ pháp 语法分析与语法单位', kind: '语法', src: '（《汉语语法教程》Chương I, Tiết 2, tr.5–7）',
  p: [
    'Muốn nêu ra quy tắc ngữ pháp thì phải có hệ thống thuật ngữ và phương pháp phân tích. Phân tích ngữ pháp là cơ sở để miêu tả ngữ pháp, và cũng là cách hiệu quả để người học nắm được câu dài, nhất là trong văn viết. Ví dụ câu 我昨天买的那本书被我送给我最好的朋友了。 nếu biết phân tích sẽ nhận ra nòng cốt: (那本书) 被 (我) 送给 (朋友) 了.',
    '## Có thể lấy chữ Hán làm đơn vị phân tích không?',
    'Không. Câu 我们刚刚送走了一位西班牙朋友 có 14 chữ, nhưng tách 我/们/刚/刚/送/走… thì “们刚、西班” chẳng có nghĩa gì. Đơn vị ngữ pháp phải có hai thuộc tính: (1) có nghĩa; (2) có tính tầng bậc – đơn vị nhỏ tổ hợp thành đơn vị lớn.',
    '## Bốn đơn vị ngữ pháp',
    '① Từ tố / ngữ tố (语素): thể kết hợp âm–nghĩa nhỏ nhất, đơn vị cấu tạo từ. Ví dụ 葡萄 là một từ tố, vì tách 葡 và 萄 thì không có nghĩa. ② Từ (词): đơn vị có nghĩa, dùng tự do trong câu, như 书、学习、漂亮. ③ Từ tổ / cụm từ (词组/短语): từ kết hợp với từ, như 汉语课本、我的父母、漂亮的姑娘. ④ Câu (句子): diễn đạt ý trọn vẹn, có ngắt nghỉ lớn trước sau và có ngữ điệu, như 我已经看完了。'
  ],
  zh: ['我昨天买的那本书被我送给我最好的朋友了。', '我们刚刚送走了一位西班牙朋友。', '我的父母都是老师。', '那个漂亮的姑娘是我的同学。', '我已经看完了。'],
  notes: [['语法单位', 'yǔfǎ dānwèi', 'đơn vị ngữ pháp'], ['语素', 'yǔsù', 'từ tố, ngữ tố'], ['词', 'cí', 'từ'], ['词组', 'cízǔ', 'từ tổ, cụm từ'], ['短语', 'duǎnyǔ', 'đoản ngữ, cụm từ'], ['句子', 'jùzi', 'câu'], ['语调', 'yǔdiào', 'ngữ điệu'], ['层次', 'céngcì', 'tầng bậc'], ['葡萄', 'pútao', 'quả nho'], ['西班牙', 'Xībānyá', 'Tây Ban Nha']],
  ex: [
    { t: 'match', q: '【Cơ bản】Nối ví dụ với đơn vị ngữ pháp.', items: [['葡萄', '语素'], ['学习', '词'], ['漂亮的姑娘', '词组'], ['我已经看完了。', '句子']] },
    { t: 'mc', q: '【Cơ bản】Chọn đáp án đúng.', items: [
      ['Đơn vị ngữ pháp nhỏ nhất là:', ['字', '语素', '词', '句子'], 1],
      ['“葡萄” gồm mấy từ tố?', ['1', '2', '3'], 0],
      ['Vì sao không lấy chữ Hán làm đơn vị phân tích?', ['Vì chữ Hán quá khó viết', 'Vì nhiều chữ đứng riêng không có nghĩa, không tạo được tầng bậc', 'Vì tiếng Hán không có ngữ pháp'], 1]] },
    { t: 'fill', q: '【Trung bình】Tìm nòng cốt câu: điền từ còn thiếu.', items: [['我昨天买的那本书被我送给我最好的___了。（tân ngữ chính）', '朋友'], ['那个漂亮的姑娘是我的___。（gợi ý: bạn học）', '同学']] },
    { t: 'open', q: '【Nâng cao】Phân tích câu theo tầng bậc: chỉ ra từ, cụm từ trong câu.', items: [
      ['我们刚刚送走了一位西班牙朋友。', 'Từ: 我们 / 刚刚 / 送 / 走 / 了 / 一 / 位 / 西班牙 / 朋友. Cụm từ: 送走了、一位西班牙朋友、刚刚送走了一位西班牙朋友. Nòng cốt: 我们送走了朋友.'],
      ['我昨天买的那本书被我送给我最好的朋友了。', 'Chủ ngữ: 我昨天买的那本书 (định ngữ 我昨天买的 + 那本书); 被我 (giới từ 被 + tác nhân); vị ngữ: 送给我最好的朋友了.']] }
  ],
  adv: {
    g: [['A 被 B + ĐT + 了', 'câu bị động chữ 被', '那本书被我送给朋友了。']],
    an: [['我昨天买的那本书被我送给我最好的朋友了。', '【定语】我昨天买的 【主语】那本书 【状语】被我 【谓语】送给 【宾语】我最好的朋友 【助词】了', 'Cuốn sách hôm qua tôi mua đã được tôi tặng cho người bạn thân nhất.']],
    v: [['单纯词', 'dānchúncí', 'từ đơn thuần'], ['合成词', 'héchéngcí', 'từ ghép']]
  } },
{ id: 'g1-3', title: 'Hình thức ngữ pháp và ý nghĩa ngữ pháp 语法形式和语法意义', kind: '语法', src: '（《汉语语法教程》Chương I, Tiết 3, tr.7–10）',
  p: [
    'Quy tắc ngữ pháp mang tính khái quát, trừu tượng. Câu “trong tiếng Hán, giữa số từ và danh từ phải có lượng từ” không nói về một từ cụ thể mà khái quát cả loạt hiện tượng: 一本书、三杯茶、十辆车、五个人.',
    '## Hình thức ngữ pháp (语法形式)',
    'So sánh 了 và 了解: 了解 có thể đứng một mình trả lời câu hỏi (这件事你了解吗？——了解。) và có nghĩa từ vựng cụ thể (biết rõ). Còn 了 không dùng độc lập, chỉ đi kèm từ khác (看了、完成了、参加了) và chỉ biểu thị ý nghĩa khái quát: sự việc đã hoàn thành/xuất hiện. Vì vậy 了 là một hình thức ngữ pháp (giống đuôi -s trong books, desks biểu thị số nhiều).',
    'Các loại hình thức ngữ pháp khác: (1) Kiểu câu: câu chữ 把 “CN + 把 + TN + ĐT…” (他把衣服洗干净了、老师把问题讲清楚了) biểu thị “ai đó xử trí người/vật nào đó và tạo ra kết quả”. (2) Trật tự từ: 他打了我 / 我打了他 – cùng từ, khác trật tự, nghĩa hoàn toàn khác. (3) Ngữ điệu: 你去。(câu trần thuật) / 你去？(câu nghi vấn).',
    '## Ý nghĩa ngữ pháp (语法意义)',
    'Ý nghĩa khái quát, trừu tượng do hình thức ngữ pháp biểu đạt gọi là ý nghĩa ngữ pháp. Nó đối lập với ý nghĩa từ vựng (cụ thể). Ví dụ 看、写、研究、讨论、学习 mỗi từ có nghĩa từ vựng riêng (看 = để mắt tiếp xúc với người/vật…), nhưng có chung một ý nghĩa ngữ pháp: biểu thị hành vi, động tác.'
  ],
  zh: ['一本书，三杯茶，十辆车。', '这件事你了解吗？了解。', '他把衣服洗干净了。', '老师把问题讲清楚了。', '弟弟把桌子搬走了。', '他打了我。我打了他。', '你去。你去？'],
  notes: [['语法形式', 'yǔfǎ xíngshì', 'hình thức ngữ pháp'], ['语法意义', 'yǔfǎ yìyì', 'ý nghĩa ngữ pháp'], ['词汇意义', 'cíhuì yìyì', 'ý nghĩa từ vựng'], ['量词', 'liàngcí', 'lượng từ'], ['数词', 'shùcí', 'số từ'], ['了解', 'liǎojiě', 'hiểu rõ'], ['陈述句', 'chénshùjù', 'câu trần thuật'], ['疑问句', 'yíwènjù', 'câu nghi vấn'], ['处置', 'chǔzhì', 'xử trí'], ['抽象', 'chōuxiàng', 'trừu tượng'], ['概括', 'gàikuò', 'khái quát']],
  ex: [
    { t: 'mc', q: '【Cơ bản】Chọn đáp án đúng.', items: [
      ['Cái nào là hình thức ngữ pháp?', ['了解', '了 (trong 看了)', '书'], 1],
      ['你去。và 你去？ khác nhau nhờ hình thức ngữ pháp nào?', ['Trật tự từ', 'Ngữ điệu', 'Hư từ'], 1],
      ['他打了我 / 我打了他 khác nhau nhờ:', ['Trật tự từ', 'Ngữ điệu', 'Lượng từ'], 0]] },
    { t: 'fill', q: '【Cơ bản】Điền lượng từ (hình thức ngữ pháp bắt buộc giữa số từ và danh từ).', items: [['一___书', '本'], ['三___茶', '杯'], ['十___车', '辆'], ['五___人', '个|位']] },
    { t: 'tf', q: '【Sách · 思考与练习 三】Ý nghĩa nào là ý nghĩa ngữ pháp? (✓ = 语法意义, ✗ = 词汇意义)', items: [
      ['为达到某种目的而采取的具体方法。', false],
      ['“高兴起来”中的“起来”表示某种状态开始出现。', true],
      ['“不去了”中的“了”表示变化。', true],
      ['把事情说得超过了原有的程度。', false],
      ['“一……就……”表示一个动作完成，紧接着下一个动作。', true],
      ['这些词都表示动作行为。', true],
      ['这类状语表示动作的工具（如“我用钢笔写信”）。', true],
      ['像胆汁或黄连的味道。', false]] },
    { t: 'open', q: '【Nâng cao】Giải thích.', items: [
      ['Vì sao 了 là hình thức ngữ pháp còn 了解 thì không?', '了解 dùng độc lập được và có nghĩa từ vựng cụ thể (biết rõ); 了 không dùng độc lập, chỉ biểu thị ý nghĩa khái quát (hoàn thành/xuất hiện) → hình thức ngữ pháp.'],
      ['Nêu ý nghĩa ngữ pháp của câu chữ 把: 他把衣服洗干净了。', 'Người/lực lượng nào đó xử trí người/vật nào đó và tạo ra một kết quả (衣服 → 干净).']] }
  ],
  adv: {
    g: [['số từ + lượng từ + danh từ', 'tiếng Hán bắt buộc có lượng từ', '三杯茶、十辆车'], ['ĐT + 了', 'động tác đã hoàn thành', '我看了那本书。']],
    an: [['老师把问题讲清楚了。', '【主语】老师 【状语】把问题 【谓语】讲 【补语】清楚 【助词】了', 'Thầy giáo đã giảng rõ vấn đề.']],
    v: [['后缀', 'hòuzhuì', 'hậu tố'], ['复数', 'fùshù', 'số nhiều'], ['完成', 'wánchéng', 'hoàn thành']]
  } },
{ id: 'g1-4', title: 'Hệ thống ngữ pháp 语法体系', kind: '语法', src: '（《汉语语法教程》Chương I, Tiết 4, tr.10–12）',
  p: [
    'Quy luật ngữ pháp không rời rạc mà có hệ thống; các quy tắc liên hệ nội tại với nhau. Ví dụ: *这个人认真。 là câu chưa hoàn chỉnh; phải nói 这个人很认真。 hoặc 这个人认真，那个人不认真。 Quy tắc: tính từ làm vị ngữ thường phải có phó từ đứng trước, hoặc dùng trong thế đối chiếu. Quy tắc này cũng đúng khi tính từ làm bổ ngữ: *他学习得认真 → 他学习得很认真 / 他学习得认真，我学习得不认真。',
    'Các kiểu câu cũng liên hệ với nhau (quan hệ hoán đổi): 他打伤了对方。→ 他把对方打伤了。→ 对方被他打伤了。 Vì thế khi học phải dùng phương pháp liên hệ: học từ loại thì nghĩ xem nó làm được thành phần câu nào; học thành phần câu thì nghĩ xem từ loại nào đảm nhiệm.',
    '## Hệ thống ngữ pháp',
    'Kết quả miêu tả ngữ pháp một cách có hệ thống của các nhà ngữ pháp gọi là hệ thống ngữ pháp. Vì quan điểm và phương pháp khác nhau, cùng một câu có thể được phân tích khác nhau. Ví dụ 问题我已经解决了。: Hệ thống 1 coi 问题 là chủ ngữ lớn, 我 là chủ ngữ nhỏ (câu chủ vị vị ngữ); Hệ thống 2 coi 问题 là tân ngữ đảo lên trước. Hệ thống nào càng sát thực tế ngôn ngữ thì càng có giá trị thực dụng.'
  ],
  zh: ['这个人很认真。', '这个人认真，那个人不认真。', '他学习得很认真。', '他打伤了对方。', '他把对方打伤了。', '对方被他打伤了。', '问题我已经解决了。'],
  notes: [['语法体系', 'yǔfǎ tǐxì', 'hệ thống ngữ pháp'], ['形容词', 'xíngróngcí', 'tính từ'], ['补语', 'bǔyǔ', 'bổ ngữ'], ['认真', 'rènzhēn', 'chăm chỉ, nghiêm túc'], ['对方', 'duìfāng', 'đối phương'], ['打伤', 'dǎshāng', 'đánh bị thương'], ['变换', 'biànhuàn', 'hoán đổi'], ['解决', 'jiějué', 'giải quyết']],
  ex: [
    { t: 'mc', q: '【Cơ bản】Chọn câu hoàn chỉnh, tự nhiên.', items: [
      ['', ['这个人认真。', '这个人很认真。'], 1],
      ['', ['他学习得认真。', '他学习得很认真。'], 1],
      ['', ['今天冷。', '今天很冷。'], 1]] },
    { t: 'fill', q: '【Trung bình】Chuyển câu theo quan hệ hoán đổi.', items: [['他打伤了对方。→ 他___对方打伤了。', '把'], ['他打伤了对方。→ 对方___他打伤了。', '被'], ['我吃完了饭。→ 我把___吃完了。', '饭']] },
    { t: 'open', q: '【Nâng cao】Chuyển mỗi câu sang câu chữ 把 và câu chữ 被.', items: [
      ['小王打破了杯子。', '小王把杯子打破了。/ 杯子被小王打破了。'],
      ['妹妹吃完了蛋糕。', '妹妹把蛋糕吃完了。/ 蛋糕被妹妹吃完了。'],
      ['问题我已经解决了。 — hai hệ thống ngữ pháp phân tích câu này khác nhau thế nào?', 'HT1: 问题 chủ ngữ lớn, 我 chủ ngữ nhỏ, 已经解决了 vị ngữ. HT2: 问题 là tân ngữ đặt trước, 我 chủ ngữ, 解决 động từ.']] }
  ],
  adv: {
    g: [['很 + Adj (làm vị ngữ)', 'tính từ làm vị ngữ thường cần phó từ', '这个人很认真。'], ['A 把 B + ĐT + bổ ngữ ↔ B 被 A + ĐT + bổ ngữ', 'hoán đổi câu 把/被', '他把对方打伤了。/ 对方被他打伤了。']],
    an: [['他学习得很认真。', '【主语】他 【谓语】学习 得 【补语】很认真', 'Anh ấy học rất chăm chỉ.']],
    v: [['主谓谓语句', 'zhǔwèi wèiyǔjù', 'câu có vị ngữ là cụm chủ vị'], ['联系', 'liánxì', 'liên hệ']]
  } },
{ id: 'g1-5', title: 'Ngữ pháp và ngữ thể 语法与语体', kind: '语法', src: '（《汉语语法教程》Chương I, Tiết 5 + 思考与练习, tr.12–20）',
  p: [
    'Ngôn ngữ có hai ngữ thể cơ bản: văn viết (书面语) và khẩu ngữ (口语). Quy luật ngữ pháp chung là thống nhất, nhưng mỗi ngữ thể có đặc điểm riêng. Ví dụ tính từ: trong văn viết chủ yếu làm định ngữ, trong khẩu ngữ chủ yếu làm vị ngữ.',
    '## Bốn khác biệt chính',
    '(1) Khẩu ngữ dùng nhiều câu ngắn, văn viết nhiều câu dài: 他这个人啊，心眼儿不坏，脑子也聪明，就是不努力。(khẩu ngữ) ↔ 双方希望通过此次访问，促进两国人民的友谊……(văn viết).',
    '(2) Thành phần bổ nghĩa trong khẩu ngữ đơn giản, trong văn viết phức tạp: 这位头脑聪明、相貌出众、才华横溢的同学成功考取了北京大学。 Khi nói thường tách thành câu ngắn: 我这个同学头脑聪明，长得也好，很有才华，他考上了北京大学。',
    '(3) Câu cảm thán, cầu khiến hay gặp trong khẩu ngữ (这座楼真高啊！); một số kết cấu thường gặp trong văn viết (以……为……: 我们青年人要以振兴中华为己任。).',
    '(4) Văn viết dùng nhiều từ nối (因为、如果…), khẩu ngữ ít dùng: 今天身体不舒服，我就不参加了。(nói) ↔ 因为今天身体不舒服，所以我就不参加了。(viết).',
    'Lưu ý: không phải “nói ra là khẩu ngữ, viết ra là văn viết”; căn cứ là hoàn cảnh hình thức đó thường xuất hiện. Ví dụ 我想译这本书为英文。 nghe rất gượng khi nói chuyện; khẩu ngữ phải nói 我想把这本书翻译成英文。'
  ],
  zh: ['他这个人啊，心眼儿不坏，脑子也聪明，就是不努力。', '我这个同学头脑聪明，长得也好，很有才华，他考上了北京大学。', '这座楼真高啊！', '我们青年人要以振兴中华为己任。', '今天身体不舒服，我就不参加了。', '因为今天身体不舒服，所以我就不参加了。', '我想把这本书翻译成英文。'],
  notes: [['语体', 'yǔtǐ', 'ngữ thể'], ['书面语', 'shūmiànyǔ', 'văn viết'], ['口语', 'kǒuyǔ', 'khẩu ngữ'], ['修饰语', 'xiūshìyǔ', 'thành phần tu sức, bổ nghĩa'], ['定语', 'dìngyǔ', 'định ngữ'], ['感叹句', 'gǎntànjù', 'câu cảm thán'], ['祈使句', 'qíshǐjù', 'câu cầu khiến'], ['关联词语', 'guānlián cíyǔ', 'từ ngữ nối'], ['才华横溢', 'cáihuá héngyì', 'tài hoa xuất chúng'], ['以……为己任', 'yǐ… wéi jǐ rèn', 'coi… là trách nhiệm của mình'], ['振兴', 'zhènxīng', 'chấn hưng']],
  ex: [
    { t: 'tf', q: '【Sách · 思考与练习 二】判断下列说法是否正确。', items: [
      ['世界上的语言有的有语法，有的没有语法。', false],
      ['其实只要是中国人，就一定能教好汉语。', false],
      ['语法主要解决的是如何组词成句的问题。', true],
      ['语法内部各个部分之间是互不联系的。', false],
      ['掌握适当的句子分析的方法，对学习语言很有好处。', true],
      ['对汉语来说，进行语法分析完全可以以汉字为单位。', false],
      ['词是语言中最小的语法单位。', false],
      ['口语就是说出来的话，书面语就是写出来的话。', false],
      ['对同一个句子，不同的语法体系会有不同的分析。', true],
      ['书面语的句子一般修饰语比较少。', false]] },
    { t: 'mc', q: '【Sách · 思考与练习 四】判断下面的句子可能出现在口语还是书面语。', items: [
      ['他站起来，走到我面前，拍了拍我的肩膀儿。', ['口语', '书面语'], 0],
      ['他高度赞扬了林区人民为支援国家经济建设、为恢复和保护森林资源所做出的努力。', ['口语', '书面语'], 1],
      ['作为上流人士怡情遣兴的诗词和作为广大人民群众的精神食粮的小说戏剧，不仅只是体裁不同，在内容上也有很大的区别。', ['口语', '书面语'], 1],
      ['原先我吧，一直住在这儿，后来呢，我想换个地方，就搬走了。', ['口语', '书面语'], 0],
      ['看你说的，这事儿我能看着不管吗？', ['口语', '书面语'], 0],
      ['我又来到了这块美好的、边远的、亲切的和热气腾腾的土地上。', ['口语', '书面语'], 1],
      ['为了规范商品房市场计量行为，加强商品房销售面积的计量监督管理，保护买卖双方的合法权益，国家质量技术监督局特制定了这个办法。', ['口语', '书面语'], 1],
      ['算了算了！你什么也别说了。', ['口语', '书面语'], 0],
      ['双方本着求同存异的原则，深入广泛地交换了意见。', ['口语', '书面语'], 1],
      ['一个十七八岁、第一次来到大城市的农村姑娘发现一切都是那么的新鲜，那么的有诱惑力。', ['口语', '书面语'], 1]] },
    { t: 'open', q: '【Sách · 思考与练习 六】把长句改成若干个短句（基本意思不变）。', items: [
      ['售票员是个脸儿红扑扑的、口齿伶俐而且嗓音响亮的小姑娘。', '售票员是个小姑娘，脸儿红扑扑的，口齿伶俐，嗓音也很响亮。'],
      ['这是一个二十几岁，但已经有了丰富的工作经验的帅气的小伙子。', '这个小伙子很帅气，才二十几岁，但已经有了丰富的工作经验。'],
      ['我永远忘不了这个美丽、富饶并且充满了浓厚的传统气息的小山村。', '这个小山村很美丽，也很富饶，充满了浓厚的传统气息，我永远忘不了它。'],
      ['我们来到了一个名叫滨江、有着五万多人口的小城。', '我们来到了一个小城，名叫滨江，有五万多人口。'],
      ['我深深地爱着我勇敢、乐观并且有着强烈的事业心和责任感的父亲。', '我的父亲很勇敢，也很乐观，有强烈的事业心和责任感，我深深地爱着他。']] },
    { t: 'open', q: '【Sách · 思考与练习 七】把短句改成长句（基本意思不变）。', items: [
      ['他是一位将军，已经75岁了，一生充满着传奇色彩。', '他是一位已经75岁、一生充满着传奇色彩的将军。'],
      ['他是一位汉族干部，在民族地区工作了几十年，有着丰富的工作经验。', '他是一位在民族地区工作了几十年、有着丰富工作经验的汉族干部。'],
      ['这就是我的家乡，它美丽、富饶，我日夜思念它。', '这就是我日夜思念的美丽、富饶的家乡。'],
      ['她穿着一件大衣，颜色很鲜艳，做工很不错。', '她穿着一件颜色鲜艳、做工不错的大衣。'],
      ['我不接受这种人，工作马马虎虎，生活随随便便。', '我不接受这种工作马马虎虎、生活随随便便的人。'],
      ['我们都认识这位老师，她年纪很轻，长得很漂亮，教口语课。', '我们都认识这位年纪很轻、长得很漂亮的口语老师。']] },
    { t: 'open', q: '【Sách · 思考与练习 一、五】Ôn khái niệm và so sánh hệ thống ngữ pháp.', items: [
      ['Giải thích các khái niệm: 语法、语法单位、语法形式、语法意义、语法体系、语体、书面语、口语.', 'Xem lại 5 tiết của chương: ngữ pháp = hệ thống quy tắc tổ hợp; đơn vị = 语素/词/词组/句子; hình thức ↔ ý nghĩa ngữ pháp; hệ thống = kết quả miêu tả; ngữ thể = văn viết/khẩu ngữ.'],
      ['这个电影我看了。/ 今天我想出去玩儿。/ 你再等一会儿。— các sách ngữ pháp có thể phân tích khác nhau thế nào?', 'VD 这个电影我看了: có sách coi 这个电影 là chủ ngữ lớn (câu chủ vị vị ngữ), có sách coi là tân ngữ đảo trước. 今天: chủ ngữ hay trạng ngữ thời gian. 一会儿: bổ ngữ thời lượng hay tân ngữ. Khác nhau do quan điểm lý luận khác nhau.']] }
  ],
  adv: {
    g: [['以……为……', 'lấy… làm… (văn viết)', '我们青年人要以振兴中华为己任。'], ['因为……，所以……', 'vì… nên… (văn viết dùng nhiều)', '因为今天身体不舒服，所以我就不参加了。'], ['把 + TN + 翻译成 + …', 'dịch… thành… (khẩu ngữ)', '我想把这本书翻译成英文。']],
    an: [['这位头脑聪明、相貌出众、才华横溢的同学成功考取了北京大学。', '【定语】这位 + 头脑聪明、相貌出众、才华横溢的 【主语】同学 【状语】成功 【谓语】考取 【补语/宾语】了北京大学', 'Người bạn học thông minh, tướng mạo xuất chúng, tài hoa này đã thi đỗ Đại học Bắc Kinh.']],
    v: [['心眼儿', 'xīnyǎnr', 'tâm địa, bụng dạ'], ['口齿伶俐', 'kǒuchǐ línglì', 'ăn nói lưu loát'], ['富饶', 'fùráo', 'giàu có, trù phú'], ['求同存异', 'qiú tóng cún yì', 'tìm điểm chung, gác bất đồng'], ['传奇', 'chuánqí', 'truyền kỳ']],
    w: [['Chuyển ngữ thể', 'Viết một đoạn giới thiệu bạn thân bằng 1 câu dài (văn viết), rồi viết lại bằng 4–5 câu ngắn (khẩu ngữ).']]
  } }
] },
{ n: 2, title: 'Chương II · Ngữ pháp tiếng Hán hiện đại 现代汉语语法', texts: [
{ id: 'g2-1', title: 'Ngữ pháp tiếng phổ thông và ngữ pháp phương ngôn 普通话语法与方言语法', kind: '语法', src: '（《汉语语法教程》Chương II, Tiết 1, tr.21–25）',
  p: [
    '## 1. Tiếng Hán hiện đại, tiếng phổ thông, tiếng Bắc Kinh và phương ngôn',
    'Tiếng Hán hiện đại là ngôn ngữ người Hán thời hiện đại sử dụng. Do phân bố ở nhiều vùng, tiếng Hán sinh ra các biến thể địa phương khác nhau về ngữ âm, từ vựng, ngữ pháp, gọi là phương ngôn (方言): người Bắc Kinh thường nghe không hiểu tiếng Thượng Hải. Ngôn ngữ chung của mọi vùng là tiếng phổ thông (普通话); vì vậy theo quy ước, “ngữ pháp tiếng Hán hiện đại” chính là ngữ pháp tiếng phổ thông, không bao gồm ngữ pháp phương ngôn.',
    'Tiếng phổ thông không phải là tiếng Bắc Kinh. Tiếng Bắc Kinh cũng là một phương ngôn như tiếng Thượng Hải, tiếng Quảng Đông, chỉ khác là nó làm cơ sở cho tiếng phổ thông. Hai bên vẫn khác nhau: tiếng Bắc Kinh có nhiều âm cuốn lưỡi (小街儿 ↔ 小街), có từ riêng như phó từ chỉ mức độ 忒 (tuī) ≈ 太.',
    '## 2. Quan hệ giữa ngữ pháp phổ thông và phương ngôn',
    'Điểm chung là chủ yếu (kiểu câu cơ bản đều là CN–VN–TN: 我学习汉语), nhưng vẫn có khác biệt. So sánh với tiếng Quảng Châu (粤语): 你先走 ↔ 你走先; 多买一些菜 ↔ 买多一些菜 (trạng ngữ đứng sau động từ); 一千五百斤 ↔ 千五斤 (lược số); 我正在读书 ↔ 我读紧书 (đang tiến hành: 正在 + ĐT ↔ ĐT + 紧).',
    'Hai bên ảnh hưởng lẫn nhau. Cách nói miền Nam “ĐT lặp + bổ ngữ kết quả” như 洗洗干净 chưa chắc đã vào tiếng phổ thông, nên các câu 请你把这个问题说说清楚、我要扫扫干净 chưa nên bắt chước tùy tiện. Người học nên nắm bộ phận ổn định của tiếng phổ thông.'
  ],
  zh: ['我学习汉语。', '你先走。', '多买一些菜。', '我正在读书。', '请你把这个问题说清楚。', '下午我要把房间打扫干净。'],
  notes: [['现代汉语', 'xiàndài Hànyǔ', 'tiếng Hán hiện đại'], ['普通话', 'pǔtōnghuà', 'tiếng phổ thông'], ['方言', 'fāngyán', 'phương ngôn, tiếng địa phương'], ['北京话', 'Běijīnghuà', 'tiếng Bắc Kinh'], ['粤语', 'Yuèyǔ', 'tiếng Quảng Đông'], ['儿化', 'érhuà', 'âm cuốn lưỡi (nhi hóa)'], ['正在', 'zhèngzài', 'đang'], ['结果补语', 'jiéguǒ bǔyǔ', 'bổ ngữ kết quả'], ['共同语', 'gòngtóngyǔ', 'ngôn ngữ chung']],
  ex: [
    { t: 'tf', q: '【Cơ bản】Đúng hay sai?', items: [
      ['Ngữ pháp tiếng Hán hiện đại thường chỉ ngữ pháp tiếng phổ thông.', true],
      ['Tiếng Bắc Kinh và tiếng phổ thông là một.', false],
      ['Tiếng Bắc Kinh là phương ngôn cơ sở của tiếng phổ thông.', true],
      ['Ngữ pháp phổ thông và phương ngôn không bao giờ ảnh hưởng nhau.', false]] },
    { t: 'match', q: '【Trung bình】Nối câu tiếng Quảng Châu với câu phổ thông tương ứng.', items: [['你走先', '你先走'], ['买多一些菜', '多买一些菜'], ['我读紧书', '我正在读书'], ['千五斤', '一千五百斤']] },
    { t: 'open', q: '【Nâng cao】Viết lại theo tiếng phổ thông chuẩn.', items: [
      ['这种饮料，喝前要不要搅搅匀呢？', '这种饮料，喝前要不要搅匀呢？/ 要不要搅一搅？'],
      ['我的房间太脏了，下午我要扫扫干净。', '我的房间太脏了，下午我要把它打扫干净。'],
      ['我请我的同屋把这篇文章讲讲明白。', '我请我的同屋把这篇文章讲明白。']] }
  ],
  adv: {
    g: [['正在 + ĐT (+ 呢)', 'đang làm gì (phổ thông)', '我正在读书呢。'], ['先 + ĐT', 'làm trước (trạng ngữ đứng trước ĐT)', '你先走吧。']],
    v: [['上海话', 'Shànghǎihuà', 'tiếng Thượng Hải'], ['标准语', 'biāozhǔnyǔ', 'ngôn ngữ chuẩn'], ['口音', 'kǒuyīn', 'giọng địa phương']]
  } },
{ id: 'g2-2', title: 'Ngữ pháp hiện đại và ngữ pháp Hán ngữ cổ 现代汉语语法与古代汉语语法', kind: '语法', src: '（《汉语语法教程》Chương II, Tiết 2, tr.25–29）',
  p: [
    'Ngữ pháp tiếng Hán hiện đại phát triển từ ngữ pháp Hán ngữ cổ (văn ngôn), hai bên có quan hệ kế thừa. Câu trong 《左传》: 礼，经国家、定社稷、序民人、利后嗣者也。 và câu hiện đại 道德是约束人的行为、协调人际关系、优化社会环境的重要手段。 có kết cấu gần giống nhau; chỉ khác hình thức phán đoán: cổ “A，B者也” ↔ nay “A是B”.',
    'Nhưng cũng nhiều khác biệt: 约之以礼 (công cụ đặt sau cụm động–tân) → nay phải nói 用礼约束自己; 三人行，必有我师焉 (số từ + danh từ trực tiếp) → nay phải có lượng từ: 三个人走在一起……',
    '## Những thành phần văn ngôn còn giữ lại',
    '① Hư từ: 之、其、于、所…: 此次出土文物品种之多，数量之大，都是历史上所罕见的。/ 我很同意大家刚才所提出的建议。',
    '② Kết cấu “V + a + 为 + b” (gọi/biến a thành b): 现在也就称共同语为普通话了。/ 我们要变消极被动为积极主动。 → có thể đổi sang “把 a V为 b”: 把共同语称为普通话. Kết cấu đầu chủ yếu dùng trong văn viết; kết cấu 把 dùng được cả khi nói (khẩu ngữ phải nói 叫作, không nói 叫为).',
    '③ Kết cấu “为……所 + V” (bị động cổ): 基本原则已经为大家所掌握。/ 这个名词已为大家所接受。 Ở đây 为 = 被, và hiện đại cũng có câu 被……所: 平房一天天被高楼所替代。 Ngoài ra 为……所 còn biểu thị phán đoán: 行行都为社会所必需 (为 = 是).'
  ],
  zh: ['道德是约束人的行为的重要手段。', '用礼约束自己。', '三个人走在一起，当中一定有自己的老师。', '我很同意大家刚才所提出的建议。', '现在也就把共同语称为普通话了。', '基本原则已经为大家所掌握。', '平房一天天被高楼所替代。'],
  notes: [['古代汉语', 'gǔdài Hànyǔ', 'Hán ngữ cổ'], ['文言', 'wényán', 'văn ngôn'], ['继承', 'jìchéng', 'kế thừa'], ['判断', 'pànduàn', 'phán đoán'], ['虚词', 'xūcí', 'hư từ'], ['罕见', 'hǎnjiàn', 'hiếm thấy'], ['被动', 'bèidòng', 'bị động'], ['掌握', 'zhǎngwò', 'nắm vững'], ['替代', 'tìdài', 'thay thế'], ['必需', 'bìxū', 'cần thiết']],
  ex: [
    { t: 'mc', q: '【Cơ bản】Chọn đáp án đúng.', items: [
      ['Hình thức phán đoán của Hán ngữ cổ là:', ['A是B', 'A，B者也', 'A为B所'], 1],
      ['Trong 基本原则已经为大家所掌握，为 tương đương:', ['是', '被', '对'], 1],
      ['Trong 行行都为社会所必需，为 tương đương:', ['是', '被', '给'], 0]] },
    { t: 'fill', q: '【Trung bình】Đổi sang kết cấu 把.', items: [['我们要变消极被动为积极主动。→ 我们要___消极被动变为积极主动。', '把'], ['我国历史上曾叫普通话为“国语”。→ 我国历史上曾把普通话叫___“国语”。', '作']] },
    { t: 'open', q: '【Sách · 思考与练习 五】找出下面句子中的古代汉语成分。', items: [
      ['不要把自己的意见强加于别人。', '于'],
      ['甚至每日只能以冷馒头充饥。', '以'],
      ['以为这正是报告文学的生命力和它的审美价值之所在。', '之所在 (之、所)'],
      ['问题是真正的课外阅读尚未成为学生学好课程的必需。', '尚未'],
      ['这反映了改革开放之初人们急于探索的心态。', '之初、于'],
      ['数量之多仅次于首都北京。', '之、于'],
      ['最终能留给读者的肯定不是故事，而仅仅就是那么一种挥之不去的情绪。', '之 (挥之不去)'],
      ['智力好、长相好、性格好的名人毕竟少之又少。', '之 (少之又少)'],
      ['对大使馆，他们视之为衙门，除非万不得已，决不与使馆人员沾边。', '视之为、与']] }
  ],
  adv: {
    g: [['称/叫/变/化 + a + 为 + b', 'gọi/biến a thành b (văn viết)', '我们要变消极被动为积极主动。'], ['把 + a + V为/V作 + b', 'tương đương, dùng cả khi nói', '把共同语称为普通话。'], ['为/被 + tác nhân + 所 + V', 'bị động văn viết', '这个名词已为大家所接受。']],
    an: [['此次出土文物品种之多，数量之大，都是历史上所罕见的。', '【主语】品种之多，数量之大 (之 nối định ngữ–trung tâm) 【谓语】都是 【宾语】历史上所罕见的 (所 + V danh từ hóa)', 'Số chủng loại và số lượng cổ vật khai quật lần này lớn đến mức xưa nay hiếm thấy.']],
    v: [['左传', 'Zuǒzhuàn', 'sách Tả truyện'], ['论语', 'Lúnyǔ', 'Luận ngữ'], ['充饥', 'chōngjī', 'ăn cho đỡ đói'], ['万不得已', 'wàn bù dé yǐ', 'bất đắc dĩ']]
  } },
{ id: 'g2-3', title: 'Đặc điểm chủ yếu của ngữ pháp tiếng Hán hiện đại 现代汉语语法的主要特点', kind: '语法', src: '（《汉语语法教程》Chương II, Tiết 3 + 思考与练习, tr.29–35）',
  p: [
    'Đặc điểm được nhiều nhà ngữ pháp thừa nhận nhất: tiếng Hán thiếu hình thái (缺乏形态). Hình thái (biến đổi hình thức của từ) là khi một từ đổi dạng để biểu thị ý nghĩa ngữ pháp: tiếng Anh book → books, man → men (số nhiều); look → looked → looking (quá khứ, tiếp diễn); he ↔ him (chủ cách ↔ tân cách).',
    'Tiếng Hán không dựa vào hình thái mà dựa vào trật tự từ (语序) và hư từ (虚词): 我打他 / 他打我 – đổi vị trí là đổi chủ ngữ, tân ngữ. 我买一本书 (chưa mua) / 我买了一本书 (đã mua): 了 không phải là dạng biến đổi của 买 như -ed, mà là một trợ từ độc lập.',
    'Hệ quả: (1) tranh luận về việc tính từ, động từ có làm chủ ngữ, tân ngữ được không; (2) danh từ không biến đổi theo số nên thông tin số lượng không rõ: 书已经买回来了 – một cuốn hay nhiều cuốn? (3) Một số đặc điểm khác còn tranh cãi: danh từ trực tiếp bổ nghĩa cho động từ (请你们立即电话报告), lượng từ phong phú…',
    'Lỗi thường gặp của người học nói tiếng Anh: thêm 了 như dấu quá khứ (*我决定了去南方旅行 → 我决定去南方旅行), hay thêm 们 sau số lượng (*三个同学们 → 三个同学).'
  ],
  zh: ['我打他。', '他打我。', '我买一本书。', '我买了一本书。', '书已经买回来了。', '假如发生意外情况，请你们立即电话报告。', '我在路上遇到了三个同学。'],
  notes: [['形态', 'xíngtài', 'hình thái'], ['词形变化', 'cíxíng biànhuà', 'biến đổi hình thức từ'], ['复数', 'fùshù', 'số nhiều'], ['过去时', 'guòqùshí', 'thì quá khứ'], ['助词', 'zhùcí', 'trợ từ'], ['主格', 'zhǔgé', 'chủ cách'], ['宾格', 'bīngé', 'tân cách'], ['缺乏', 'quēfá', 'thiếu']],
  ex: [
    { t: 'tf', q: '【Sách · 思考与练习 二】判断下面的说法是否正确。', items: [
      ['一般所说的现代汉语语法指的就是普通话语法。', true],
      ['北京话和普通话就是一回事。', false],
      ['普通话的语法是很稳定的，不会发生变化。', false],
      ['现代汉语语法和古代汉语语法是完全不同的两个系统。', false],
      ['现代汉语中使用“其”“于”“所”等虚词是错误的。', false],
      ['形态不丰富是汉语语法的一个主要特点。', true],
      ['为了表达复数等语法意义而改变词的形式，是英语等形态丰富的语言常用的手段。', true],
      ['现代汉语语法特点目前已经很清楚了。', false]] },
    { t: 'open', q: '【Sách · 思考与练习 三】英语国家的学生常说出下面的错句，改正并分析原因。', items: [
      ['放假以后，我决定了去南方旅行。', '→ 我决定去南方旅行。了 không phải dấu quá khứ; 决定 mang tân ngữ động từ thì không thêm 了.'],
      ['我昨天去了买一本书。', '→ 我昨天去买了一本书。了 đặt sau động từ chính 买 (động tác hoàn thành).'],
      ['我发誓了以后决不再去看他。', '→ 我发誓以后决不再去看他。'],
      ['三年以前我在这儿开始了学习中文。', '→ 三年以前我在这儿开始学习中文。'],
      ['我在路上遇到了三个同学们。', '→ 三个同学。Có số lượng thì không thêm 们 (们 không phải dấu số nhiều -s).'],
      ['我还有几个朋友们要来这儿学习。', '→ 几个朋友。']] },
    { t: 'open', q: '【Sách · 思考与练习 四】Dịch sang tiếng Anh, so sánh ngữ pháp.', items: [
      ['有人在楼下等你。', 'Someone is waiting for you downstairs. (tiếng Anh dùng is waiting – biến đổi hình thái)'],
      ['外面雪下得很大。', 'It is snowing heavily outside.'],
      ['问题处理得怎么样了？', 'How has the problem been handled?'],
      ['孩子都来了。', 'The children have all come. (danh từ số nhiều -ren)'],
      ['你要的那些书已经买回来了。', 'The books you wanted have been bought. (số nhiều do 那些 chỉ ra, 书 không đổi)']] }
  ],
  adv: {
    g: [['ĐT + 了 + TN', 'động tác đã hoàn thành (không phải thì quá khứ)', '我买了一本书。'], ['số từ + lượng từ + danh từ (không 们)', 'đã có số lượng thì không dùng 们', '三个同学']],
    an: [['十四年来，他自学中医，为群众义务治病六万次。', '【状语】十四年来 【主语】他 【谓语1】自学中医 【状语】为群众 【状语】义务 【谓语2】治病 【补语】六万次', 'Mười bốn năm nay ông tự học Đông y, chữa bệnh miễn phí cho bà con sáu vạn lần.']],
    v: [['孤立语', 'gūlìyǔ', 'ngôn ngữ đơn lập'], ['屈折语', 'qūzhéyǔ', 'ngôn ngữ biến hình']],
    w: [['So sánh với tiếng Việt', 'Tiếng Việt cũng thiếu hình thái như tiếng Hán. Viết 5 câu Việt – Trung song song cho thấy cả hai dùng trật tự từ và hư từ (đã/了, đang/在…).']]
  } }
] },
{ n: 3, title: 'Chương III · Từ và từ loại (I) 词和词类（一）', texts: [
{ id: 'g3-1', title: 'Từ và cấu tạo từ 词和构词', kind: '语法', src: '（《汉语语法教程》Chương III, Tiết 1, tr.36–46）',
  p: [
    '## 1. Chữ, từ tố và từ',
    'Câu 他经常来看我 viết liền nên khó thấy ranh giới từ, nhưng tiếng Hán vẫn có từ. Thí nghiệm 花生长得很好: đọc là “花 / 生长得很好” (hoa mọc tốt) hoặc “花生 / 长得很好” (lạc mọc tốt) chứng tỏ người Trung Quốc có khái niệm “từ”. Chữ Hán là ký hiệu ghi chép; từ là đơn vị biểu đạt ý nghĩa cơ bản.',
    'Quan hệ chữ – từ: (1) âm tiết có nghĩa thì làm từ tố: 好 hào → 爱好、好客; 好 hǎo → 友好、好听. (2) Âm tiết vô nghĩa phải ghép với âm tiết khác mới thành từ tố: 葡萄、徘徊、仿佛. (3) Âm tiết có nghĩa và dùng tự do được thì là từ: 高 (水平很高)、人 (找一个人).',
    '## 2. Các loại từ tố',
    '① Từ tố thành từ ↔ không thành từ: 看、书 vừa ghép từ (看待、书店) vừa đứng một mình (看一本书); còn 桌 (桌子、餐桌), 易 (容易) không dùng độc lập: không nói 一张桌、这件事很易.',
    '② Từ tố thực ↔ hư: thực có nghĩa cụ thể (danh tố 机、电; động tố 看、想; tính tố 美、高). Hư tố biểu thị ý nghĩa ngữ pháp: (a) dùng cấu tạo từ: -子 (桌子、杯子), -儿 (画儿、盖儿), -头 (石头、甜头) – thường đánh dấu danh từ. Nhiều động từ thêm -子/-儿 thành danh từ liên quan: 盖 → 盖子/盖儿, 扣 → 扣子, 剪 → 剪子, 塞 → 塞子. Câu thường gặp: 你把盖子盖上。你用剪子剪一下。 (b) Tự thành từ: 了、的、呢.',
    '## 3. Từ đơn và từ ghép',
    'Từ đơn (单纯词) gồm một từ tố: 大、书、葡萄、仿佛, kể cả: từ dịch âm (咖啡 coffee、沙发 sofa、坦克 tank、吉普 jeep), từ láy âm – song thanh (仿佛、玲珑、伶俐、蜘蛛) và điệp vận (从容、徘徊、葫芦、啰唆), từ tượng thanh (乒乓、哗啦). Từ ghép (合成词) gồm từ hai từ tố trở lên: 大人、书籍、经验.',
    '## 4. Phương pháp cấu tạo từ ghép',
    '(1) Phụ gia (附加式): từ căn + tiền tố/hậu tố. Tiền tố: 第 (第一)、老 (老虎、老师)、初 (初一); hậu tố: -子、-儿、-头. Loại phụ tố: 非 (非法)、准 (准妈妈)、可 (可爱); -者 (记者、读者)、-性 (积极性)、-家 (作家)、-员 (演员)、-观 (人生观)、-手 (歌手)、-式 (中式)、-型 (新型)、-化 (绿化、现代化)、-于 (善于、属于).',
    '(2) Tổ hợp (复合式) – cách chủ yếu, từ căn + từ căn theo quan hệ: chủ vị (地震、心疼、胆小), động tân (放心、下班、留神), chính phụ (小人、白菜、雪白、深入), đẳng lập (开关、窗户、长短), động bổ (提高、纠正、展开), lặp lại (刚刚、渐渐、爸爸). Một số khó quy loại: 书本、船只、马匹、纸张.'
  ],
  zh: ['花生长得很好。', '你最好把扣子扣上。', '你把盖子盖上。', '你用剪子剪一下。', '他是一位有名的作家。', '这个城市的绿化搞得很好。', '我们要提高汉语水平。'],
  notes: [['语素', 'yǔsù', 'từ tố'], ['成词语素', 'chéngcí yǔsù', 'từ tố thành từ'], ['不成词语素', 'bù chéngcí yǔsù', 'từ tố không thành từ'], ['实语素', 'shí yǔsù', 'từ tố thực'], ['虚语素', 'xū yǔsù', 'từ tố hư'], ['单纯词', 'dānchúncí', 'từ đơn'], ['合成词', 'héchéngcí', 'từ ghép'], ['音译词', 'yīnyìcí', 'từ dịch âm'], ['联绵词', 'liánmiáncí', 'từ láy âm'], ['双声', 'shuāngshēng', 'song thanh'], ['叠韵', 'diéyùn', 'điệp vận'], ['拟声词', 'nǐshēngcí', 'từ tượng thanh'], ['词根', 'cígēn', 'từ căn, gốc từ'], ['前缀', 'qiánzhuì', 'tiền tố'], ['后缀', 'hòuzhuì', 'hậu tố'], ['附加式', 'fùjiāshì', 'phương thức phụ gia'], ['复合式', 'fùhéshì', 'phương thức tổ hợp'], ['花生', 'huāshēng', 'lạc, đậu phộng'], ['剪子', 'jiǎnzi', 'cái kéo'], ['盖子', 'gàizi', 'cái nắp']],
  ex: [
    { t: 'mc', q: '【Cơ bản】Từ đơn hay từ ghép?', items: [
      ['葡萄', ['Từ đơn', 'Từ ghép'], 0], ['咖啡', ['Từ đơn', 'Từ ghép'], 0], ['书籍', ['Từ đơn', 'Từ ghép'], 1], ['乒乓', ['Từ đơn', 'Từ ghép'], 0], ['桌子', ['Từ đơn', 'Từ ghép'], 1], ['仿佛', ['Từ đơn', 'Từ ghép'], 0]] },
    { t: 'match', q: '【Trung bình】Nối từ ghép với quan hệ cấu tạo.', items: [['地震', 'chủ vị'], ['下班', 'động tân'], ['雪白', 'chính phụ'], ['开关', 'đẳng lập'], ['提高', 'động bổ'], ['渐渐', 'lặp lại']] },
    { t: 'fill', q: '【Trung bình】Thêm hậu tố/phụ tố để tạo từ (者/家/员/性/化/子).', items: [['读___ (người đọc)', '者'], ['画___ (họa sĩ)', '家'], ['服务___ (nhân viên phục vụ)', '员'], ['积极___ (tính tích cực)', '性'], ['现代___ (hiện đại hóa)', '化'], ['剪___ (cái kéo)', '子']] },
    { t: 'open', q: '【Nâng cao】Giải thích.', items: [
      ['Vì sao 葡萄 chỉ là một từ tố, còn 书店 là hai từ tố?', '葡 và 萄 tách riêng không có nghĩa → cả 葡萄 là một từ tố. 书 (sách) và 店 (cửa hàng) đều có nghĩa → hai từ tố.'],
      ['花生长得很好 có hai cách hiểu nào? Điều đó chứng minh gì?', '花 / 生长得很好 (hoa mọc tốt) và 花生 / 长得很好 (lạc mọc tốt) → trong tiếng Hán “từ” tồn tại khách quan.'],
      ['Cho ví dụ động từ thêm -子/-儿 thành danh từ và đặt câu dùng cả hai.', '盖 → 盖子: 你把盖子盖上。/ 扣 → 扣子: 把扣子扣上。/ 剪 → 剪子: 用剪子剪一下。']] }
  ],
  adv: {
    g: [['把 + N(ĐT+子) + ĐT + 上', 'dùng danh từ và động từ cùng gốc', '你把盖子盖上。'], ['非/可/准 + gốc', 'loại tiền tố', '非法、可爱、准妈妈']],
    an: [['花生长得很好。', 'Cách 1: 【主语】花 【谓语】生长 得 【补语】很好. Cách 2: 【主语】花生 【谓语】长 得 【补语】很好', 'Hoa mọc rất tốt / Lạc mọc rất tốt.']],
    v: [['沙发', 'shāfā', 'ghế sofa'], ['坦克', 'tǎnkè', 'xe tăng'], ['蜘蛛', 'zhīzhū', 'con nhện'], ['徘徊', 'páihuái', 'bồi hồi, đi đi lại lại'], ['啰唆', 'luōsuo', 'lắm lời'], ['留神', 'liúshén', 'chú ý, cẩn thận'], ['纠正', 'jiūzhèng', 'sửa chữa']]
  } },
{ id: 'g3-2', title: 'Khái quát về từ loại 词类概说', kind: '语法', src: '（《汉语语法教程》Chương III, Tiết 2, tr.46–53）',
  p: [
    '## 1. Từ loại là gì',
    'Chia từ thành đồng nghĩa/trái nghĩa hay nghĩa tốt/xấu là phân loại từ vựng. Từ loại (词类) là phân loại ngữ pháp của từ: danh từ, động từ, tính từ…',
    '## 2. Tiêu chí phân loại: chức năng ngữ pháp, không phải ý nghĩa',
    '突然 và 忽然 đều dịch là “suddenly”, đều đứng trước động từ (他突然/忽然离开了这里). Nhưng: 这件事太突然了 (đúng) / *太忽然了; 一个突然的决定 (đúng) / *一个忽然的决定. 突然 dùng giống 漂亮 (这个消息太突然了 – 这个姑娘太漂亮了) → là tính từ; 忽然 chỉ đứng trước động từ/tính từ như 已经 → là phó từ.',
    'Chức năng ngữ pháp gồm: (1) chức năng làm thành phần câu – từ đứng được ở vị trí nào (突然: vị ngữ 事情很突然; định ngữ 突然的情况; trạng ngữ 突然出现了; bổ ngữ 发生得很突然); (2) chức năng tổ hợp – kết hợp được với từ nào (突然 kết hợp được với 很、太、非常).',
    '## 3. Tác dụng của từ loại',
    'Câu gồm các bộ phận A–B–C: 学生 / 都 / 来了、事情 / 慢慢 / 解决了. A là chủ ngữ, B trạng ngữ, C vị ngữ. Gom các từ đứng ở A thành danh từ, ở B thành phó từ, ở C thành động từ → nói được quy luật đặt câu. Nói “danh từ” là nghĩ ngay đến vị trí chủ ngữ, tân ngữ, định ngữ; nói “phó từ” là nghĩ đến trạng ngữ. Không có từ loại thì không có ngữ pháp.',
    '## 4. Kiêm loại (兼类)',
    'Một từ mang chức năng của hai loại trở lên: 工作已经找到了 (danh) / 大家都在工作 (động); 这种批评我不接受 (danh) / 领导批评我们了 (động). Lưu ý từ đồng âm đồng hình không phải kiêm loại: 一把花 (lượng từ) – 把书拿来 (giới từ); 两个人不和 – 我和他; 样子很怪 – 我不怪你.',
    '## 5. Tầng bậc từ loại',
    'Tầng 1: thực từ (实词) – hư từ (虚词). Tầng 2: thể từ (体词: danh từ, đại từ… làm chủ/tân ngữ) – vị từ (谓词: động từ, tính từ làm vị ngữ). Tầng 3: từ loại cơ bản (danh, động, tính…). Tầng 4: tiểu loại, ví dụ động từ cập vật mang tân ngữ (看书、学习汉语) và bất cập vật không mang tân ngữ (休息、劳动、着想).'
  ],
  zh: ['他突然离开了这里。', '这件事太突然了。', '这是一个突然的决定。', '他忽然离开了这里。', '老师正在上课。', '工作已经找到了。', '大家都在工作。', '领导批评我们了。'],
  notes: [['词类', 'cílèi', 'từ loại'], ['语法功能', 'yǔfǎ gōngnéng', 'chức năng ngữ pháp'], ['组合功能', 'zǔhé gōngnéng', 'chức năng tổ hợp'], ['兼类', 'jiānlèi', 'kiêm loại'], ['实词', 'shící', 'thực từ'], ['虚词', 'xūcí', 'hư từ'], ['体词', 'tǐcí', 'thể từ'], ['谓词', 'wèicí', 'vị từ'], ['及物动词', 'jíwù dòngcí', 'động từ cập vật'], ['不及物动词', 'bù jíwù dòngcí', 'động từ bất cập vật'], ['突然', 'tūrán', 'đột ngột (tính từ)'], ['忽然', 'hūrán', 'bỗng nhiên (phó từ)']],
  ex: [
    { t: 'mc', q: '【Cơ bản】突然 hay 忽然?', items: [
      ['这件事太___了。', ['突然', '忽然'], 0], ['这是一个___的决定。', ['突然', '忽然'], 0], ['他___离开了。 (cả hai đều được – chọn đáp án đúng nhất)', ['chỉ 突然', 'chỉ 忽然', 'cả hai'], 2], ['事情发生得很___。', ['突然', '忽然'], 0]] },
    { t: 'tf', q: '【Cơ bản】Đúng hay sai?', items: [
      ['Phân từ loại chủ yếu dựa vào ý nghĩa của từ.', false],
      ['工作 trong 大家都在工作 là động từ.', true],
      ['把 trong 一把花 và 把书拿来 là hiện tượng kiêm loại.', false],
      ['休息 là động từ bất cập vật.', true]] },
    { t: 'match', q: '【Trung bình】Từ ở vị trí nào thì thuộc loại nào? (学生 都 来了)', items: [['学生 (vị trí A – chủ ngữ)', '名词'], ['都 (vị trí B – trạng ngữ)', '副词'], ['来 (vị trí C – vị ngữ)', '动词']] },
    { t: 'open', q: '【Nâng cao】Chứng minh bằng chức năng ngữ pháp.', items: [
      ['Vì sao 突然 là tính từ còn 忽然 là phó từ?', '突然 làm được vị ngữ (很突然), định ngữ (突然的决定), bổ ngữ (发生得很突然), nhận 很/太 → tính từ. 忽然 chỉ làm trạng ngữ trước động từ → phó từ.'],
      ['Tìm 2 từ kiêm loại danh – động và đặt câu.', 'VD: 研究 – 他的研究很有价值 / 我们研究这个问题; 学习 – 学习很重要 / 我学习汉语.']] }
  ],
  adv: {
    g: [['太 + Adj + 了', 'tính từ nhận phó từ mức độ', '这件事太突然了。'], ['Adj + 的 + N', 'tính từ làm định ngữ', '一个突然的决定']],
    an: [['事情慢慢解决了。', '【主语·A】事情 【状语·B】慢慢 【谓语·C】解决了', 'Sự việc dần dần được giải quyết.']],
    v: [['同义词', 'tóngyìcí', 'từ đồng nghĩa'], ['反义词', 'fǎnyìcí', 'từ trái nghĩa'], ['褒义词', 'bāoyìcí', 'từ nghĩa tốt'], ['贬义词', 'biǎnyìcí', 'từ nghĩa xấu'], ['同音词', 'tóngyīncí', 'từ đồng âm']]
  } },
{ id: 'g3-3', title: 'Danh từ 名词', kind: '语法', src: '（《汉语语法教程》Chương III, Tiết 3, tr.54–62）',
  p: [
    '## 1. Đặc điểm ngữ pháp của danh từ',
    '(1) Chủ yếu làm chủ ngữ, tân ngữ; phần lớn làm được định ngữ: 身体已经恢复过来了 (CN) / 你一定要注意身体 (TN) / 身体素质很好 (ĐN). Một số danh từ không làm định ngữ được (如 日夜).',
    '(2) Phần lớn nhận số lượng từ phía trước: 一个人、三本书. Nhưng khoảng 500–600 danh từ không nhận số lượng từ, kể cả 个/种: 语文、眉头、商业、内科、人心、水利 (danh từ phi lượng hóa).',
    '(3) Không nhận phó từ phía trước: *他不人 → 他不是人; *很天气. 不人不鬼 là cụm cố định; 他的脸长得很中国 là cách dùng tu từ tạm thời.',
    '## 2. Các loại danh từ',
    'Danh từ tập hợp (集合名词): 词汇、纸张、马匹、布匹、船只、书本、书籍 – không kết hợp với lượng từ cá thể, chỉ dùng 一些: *两千多个词汇 → 两千多个词; *十张纸张 → 十张纸. Tiếng Hán không cần chia đếm được/không đếm được (一本书、一滴水 đều có lượng từ).',
    'Danh từ không biến đổi về số; 们 không tương đương -s: three teachers = 三位老师, không nói *三位老师们. Tránh lỗi: *几个朋友们、*留学生们很多、*三个女孩子们.',
    '## 3. Danh từ thời gian (时间名词)',
    'Làm CN, TN, ĐN như danh từ thường (明天是星期天 / 开会的日期是明天 / 明天的工作). Khác: (1) phần lớn không nhận số lượng từ (*一个今天), trừ 星期天、周末…: 这个周末; (2) làm trạng ngữ thời gian, đứng trước hoặc sau chủ ngữ: 今天朋友们来看我了 = 朋友们今天来看我了.',
    '## 4. Danh từ nơi chốn (处所名词)',
    '在 đòi hỏi từ chỉ nơi chốn: 他在教室看书 (đúng) / *我在电脑写文章 → 我在电脑上写文章 (thêm 上 để “nơi chốn hóa”). Tiêu chí: kết hợp được với 在/从/到 + __ hoặc 到 __ 去. Gồm: (1) chuyên chỉ nơi chốn: 隔壁、附近、对面、角落、中央、四周、当地; (2) địa danh, tên cơ quan: 上海、图书馆、学校. Sau địa danh không thêm phương vị từ: *我在北京里工作 → 我在北京工作; tên cơ quan thêm hay không đều được: 我在图书馆(里)看书.',
    '## 5. Danh từ phương vị (方位名词)',
    'Đơn: 上 下 前 后 左 右 里 外 中 内 间 旁 东 南 西 北. Kép: đơn + 边/面/头 (上边、上面、上头、左边…; 中、内 không ghép được với cả ba), cùng 之上、以前… Phương vị đơn ít độc lập: phải đi sau danh từ (房间里、教室外) hoặc sau giới từ (往里走); 左/右 không ghép trực tiếp với danh từ: *站在老师左 → 站在老师左边. Phương vị kép dùng như danh từ nơi chốn: 前边有一家商店; ghép với danh từ: 学校前边、桌子上面.',
    'Câu tồn tại “Nơi chốn + 是 + người/vật”: 前面是一条小河 / *图书馆是一个运动场 → 图书馆前面是一个运动场; 隔壁是一位教授 (danh từ chuyên nơi chốn không cần phương vị). Phương vị kép nhận 最: 你站在最前边 / *站在最前.'
  ],
  zh: ['你一定要注意身体。', '我们已经学习了两千多个词。', '我从朋友那里要了十张纸。', '我还有几个朋友要来这儿学习。', '今天朋友们来看我了。', '我在电脑上写文章。', '图书馆前面是一个运动场。', '你站在最前边。'],
  notes: [['名词', 'míngcí', 'danh từ'], ['集合名词', 'jíhé míngcí', 'danh từ tập hợp'], ['时间名词', 'shíjiān míngcí', 'danh từ thời gian'], ['处所名词', 'chùsuǒ míngcí', 'danh từ nơi chốn'], ['方位名词', 'fāngwèi míngcí', 'danh từ phương vị'], ['数量词', 'shùliàngcí', 'số lượng từ'], ['词汇', 'cíhuì', 'từ vựng (tập hợp)'], ['纸张', 'zhǐzhāng', 'giấy (tập hợp)'], ['隔壁', 'gébì', 'nhà bên cạnh'], ['附近', 'fùjìn', 'gần đây'], ['角落', 'jiǎoluò', 'góc'], ['四周', 'sìzhōu', 'xung quanh'], ['存在句', 'cúnzàijù', 'câu tồn tại']],
  ex: [
    { t: 'mc', q: '【Cơ bản】Chọn câu đúng.', items: [
      ['', ['我在电脑写文章。', '我在电脑上写文章。'], 1],
      ['', ['我在北京里工作。', '我在北京工作。'], 1],
      ['', ['三位老师们来了。', '三位老师来了。'], 1],
      ['', ['我们学了两千多个词汇。', '我们学了两千多个词。'], 1],
      ['', ['他站在老师左。', '他站在老师左边。'], 1]] },
    { t: 'fill', q: '【Trung bình】Điền phương vị từ / sửa cho đúng.', items: [['图书馆___是一个运动场。', '前面|前边|后面|后边|旁边'], ['我家在村子的最东___。', '边|面'], ['书在桌子___。', '上|上面|上边'], ['他在黑板___写字。', '上']] },
    { t: 'tf', q: '【Trung bình】Đúng hay sai?', items: [
      ['今天 làm được trạng ngữ, đứng trước hoặc sau chủ ngữ.', true],
      ['们 tương đương -s trong tiếng Anh.', false],
      ['纸张、马匹 là danh từ tập hợp.', true],
      ['Có thể nói 很天气.', false],
      ['隔壁 là danh từ chuyên chỉ nơi chốn.', true]] },
    { t: 'open', q: '【Nâng cao】Sửa câu sai và giải thích.', items: [
      ['我们学校的外国留学生们很多。', '→ 外国留学生很多。很多 đã chỉ số lượng; 们 không dùng như dấu số nhiều.'],
      ['三个女孩子们把鲜花送给代表了。', '→ 三个女孩子把鲜花送给了代表。Có số lượng thì bỏ 们.'],
      ['我从朋友那里要了十张纸张。', '→ 十张纸。纸张 là danh từ tập hợp, không đi với lượng từ cá thể.'],
      ['我在桌子写作业。', '→ 我在桌子上写作业。桌子 không chỉ nơi chốn, cần thêm phương vị từ.']] }
  ],
  adv: {
    g: [['在 + N(nơi chốn) + ĐT', 'làm gì ở đâu', '他在教室看书呢。'], ['N + 上/里/边', 'nơi chốn hóa danh từ thường', '在电脑上、在房间里'], ['Nơi chốn + 是/有 + N', 'câu tồn tại', '前面是一条小河。']],
    an: [['图书馆前面是一个运动场。', '【主语·处所】图书馆前面 (名词+方位词) 【谓语】是 【宾语】一个运动场', 'Phía trước thư viện là một sân vận động.']],
    v: [['眉头', 'méitóu', 'lông mày'], ['内科', 'nèikē', 'khoa nội'], ['船只', 'chuánzhī', 'tàu thuyền'], ['周末', 'zhōumò', 'cuối tuần'], ['对面', 'duìmiàn', 'đối diện'], ['中央', 'zhōngyāng', 'trung tâm']]
  } },
{ id: 'g3-4', title: 'Động từ 动词', kind: '语法', src: '（《汉语语法教程》Chương III, Tiết 4, tr.63–89）',
  p: [
    '## 1. Đặc điểm ngữ pháp',
    '(1) Chủ yếu làm vị ngữ: 客人都走了。/ 我们要多研究问题。 Một số không làm vị ngữ độc lập: *我着想 → 我为你们着想. (2) Thường không nhận 很 (*很学习), khác tính từ (很认真). (3) Phần lớn mang được tân ngữ, tính từ thì không. Động từ tâm lý nhận được 很 nhưng vẫn mang tân ngữ: 很害怕他、很讨厌这个人、很担心这件事.',
    '## 2. Cập vật / bất cập vật (及物 / 不及物)',
    'Xét trong câu cơ bản (không tỉnh lược, không đảo vị trí): 我看书 → 看 cập vật (看、说、听、做、研究、学习、讨论). Bất cập vật: 休息、死亡、结婚、出生. 客人来了 là câu cơ bản nên 来 bất cập vật; 来了一个客人 là câu tồn hiện “Nơi chốn + ĐT + 了/着 + người/vật”: 外边进来了一个人、广场上飘扬着五星红旗.',
    '## 3. Hệ động từ (系动词)',
    '是、姓、叫、像、等于: nối hai bộ phận, không biểu thị động tác. Khác động từ thường: thường không thêm 了/着/过; phủ định chỉ dùng 不 (không dùng 没); không mang động lượng.',
    '## 4. Trợ động từ / động từ năng nguyện (助动词/能愿动词)',
    'Muốn: 想、要、打算、准备; nguyện: 愿意、乐意、肯、敢; khả năng: 能、能够、会、可能、可以; tất yếu: 应该、应当、该、得 (děi)、要、需要; cho phép: 可以、能. Một từ nhiều nghĩa, phủ định khác nhau: 这件事要让他们知道 (tất yếu) → 不要让他们知道; 我要发言 (muốn) → 我不想发言.',
    'Đặc điểm: chỉ đứng trước động từ/tính từ (không trước danh từ); không mang 了着过; hỏi bằng “X不X” (能不能、会不会 – trừ 得); không lặp lại; phủ định: 想/打算/能 dùng cả 不 và 没, phần lớn chỉ dùng 不, 得 không có dạng phủ định. Dùng liền nhau theo trật tự cố định: 可能会 (không *会可能)、应该能够. Một số đứng được trước chủ ngữ để nhấn chủ ngữ: 应该你去，不应该我去; 需要我参加吗？ Trợ động từ thêm thái độ (khả năng, tất yếu, ý nguyện) vào mệnh đề: 他完成这个任务 + 能够 → 他能够完成这个任务.',
    '## 5. Động từ chủ động / thụ động (自主 / 非自主)',
    'Chủ động: con người kiểm soát được (买、看、等、考虑) → dùng trong câu cầu khiến (请等一下), hỏi được X没X và X不X (衣服洗没洗？洗不洗？), có thể tiếp diễn (在修理、修理着) và khởi đầu (洗起来). Thụ động: 塌、丢、懂、忘、病、毕业 → *请你看见、*你毕业一下; chỉ hỏi X没X (东西丢没丢？); *在失败.',
    '## 6. Động từ hình thức (形式动词)',
    '进行、予以、加以、给予、给以: động từ vị ngữ chỉ về hình thức, nghĩa thật nằm ở động từ phía sau: 我们对这个问题进行了认真的讨论 = 我们认真地讨论了这个问题; 公司对这些员工予以奖励. Đặc điểm: sau nó phải là động từ cập vật song âm tiết (*进行了认真的学 → 学习); đối tượng đưa lên trước bằng 对; động từ phía sau có định ngữ (认真的讨论). Tác dụng: trang trọng, nghiêm túc; cân đối nhịp câu.',
    '## 7. Động từ ly hợp (离合动词)',
    'Như 洗澡: 我洗澡了 / 我洗了一会儿澡. Lỗi hay gặp: *见面一个朋友、*结婚她、*毕业大学. Quy tắc: (1) không mang tân ngữ → giới từ + danh từ + ĐT ly hợp: 跟朋友见面、跟她结婚、从大学毕业、向对方道歉、给他帮忙、跟他生气、为演员鼓掌; hoặc chèn đối tượng vào giữa: 见朋友一面、帮他的忙、生他的气. (Văn báo chí mới: 留学海外、落户京城.) (2) Động lượng chèn giữa: 见了一次面 (*见面了一次)、洗了几次澡、散过一次步. (3) Thời lượng: 毕业一年了 (thời gian sau khi xong – 结婚、毕业、开学) ↔ 吵了一个小时架 (thời gian kéo dài – 跳舞、睡觉、考试). (4) Mức tách: 毕了业、开了幕 (chỉ chèn 了着过) ↔ 洗了一个很舒服的澡、觉睡得怎么样 (tách tự do). (5) Lặp lại kiểu AAB: 散散步、帮帮忙、聊聊天.',
    '## 8. Động từ tương hỗ (相互动词)',
    'Chủ thể phải là số nhiều: *我在北京相遇了 → 我们在北京相遇了 / 我跟他在北京相遇了; *他已经分手了 → 他已经跟妻子分手了. Thường chứa 相、互、交、结、合: 相识、互助、交流、结婚、合作.',
    '## 9. Lặp lại động từ (动词重叠)',
    'Hình thức: AA (看看), A一A (看一看), A了A (看了看), ABAB (学习学习, không *学习了学习); chữ sau đọc nhẹ. Lặp được nhiều: đơn âm tiết, động từ động tác, chủ động, khẩu ngữ (帮帮、等等、试试、商量商量); khó lặp: *爱爱、*害怕害怕、*病病、*辅助辅助 (trừ ngữ cảnh đặc biệt: 让他也知道知道我的厉害).',
    'Ý nghĩa: thời gian ngắn, số lần ít (你等等，我给你拿水去); làm thử (你穿穿，看看效果 / 你尝尝); nhẹ nhàng, thư thái (退休以后看看书、下下棋、聊聊天); uyển chuyển (你帮我找找 nhẹ hơn 你帮我找). Còn có tác dụng làm câu hoàn chỉnh: 到外面走走，吸吸新鲜空气.',
    'Không dùng dạng lặp khi: (1) có động lượng/thời lượng: *我先看看一会儿书 → 我先看一会儿书 / 我先看看书; *你等等我一会儿; (2) tân ngữ không xác định: *请你找找一个人 → 找找这个人; (3) đang tiếp diễn hoặc đã xảy ra: *大家正在研究研究 → 大家正在研究这个问题. Dạng lặp hay dùng cho mong muốn, dự định: 我真想好好休息休息。/ 我打算今年暑假到外地走走。'
  ],
  zh: ['我为你们着想。', '外边进来了一个人。', '这件事不要让他们知道。', '考试当中可能会出现一些特殊情况。', '应该你去，不应该我去。', '我们对这个问题进行了认真的讨论。', '我今天跟一个朋友见面。', '我们见过一次面。', '他去年从大学毕业了。', '他们吵了一个小时架。', '我们在北京相遇了。', '这件衣服不错，你穿穿，看看效果。', '我先看一会儿书。', '我打算今年暑假到外地走走。'],
  notes: [['及物动词', 'jíwù dòngcí', 'động từ cập vật'], ['不及物动词', 'bù jíwù dòngcí', 'động từ bất cập vật'], ['系动词', 'xì dòngcí', 'hệ động từ'], ['助动词', 'zhù dòngcí', 'trợ động từ'], ['能愿动词', 'néngyuàn dòngcí', 'động từ năng nguyện'], ['自主动词', 'zìzhǔ dòngcí', 'động từ chủ động (tự chủ)'], ['非自主动词', 'fēi zìzhǔ dòngcí', 'động từ thụ động (phi tự chủ)'], ['形式动词', 'xíngshì dòngcí', 'động từ hình thức'], ['离合动词', 'líhé dòngcí', 'động từ ly hợp'], ['相互动词', 'xiānghù dòngcí', 'động từ tương hỗ'], ['动词重叠', 'dòngcí chóngdié', 'lặp lại động từ'], ['存现句', 'cúnxiànjù', 'câu tồn hiện'], ['动量', 'dòngliàng', 'động lượng (số lần)'], ['时量', 'shíliàng', 'thời lượng'], ['着想', 'zhuóxiǎng', 'nghĩ cho'], ['予以', 'yǔyǐ', 'dành cho, tiến hành'], ['道歉', 'dàoqiàn', 'xin lỗi'], ['鼓掌', 'gǔzhǎng', 'vỗ tay'], ['分手', 'fēnshǒu', 'chia tay'], ['相遇', 'xiāngyù', 'gặp nhau']],
  ex: [
    { t: 'mc', q: '【Cơ bản】Chọn câu đúng (động từ ly hợp).', items: [
      ['', ['我今天见面一个朋友。', '我今天跟一个朋友见面。'], 1],
      ['', ['我想结婚她。', '我想跟她结婚。'], 1],
      ['', ['她已经毕业大学了。', '她已经从大学毕业了。'], 1],
      ['', ['我们见面过一次。', '我们见过一次面。'], 1],
      ['', ['请你帮忙我。', '请你帮我的忙。'], 1]] },
    { t: 'mc', q: '【Cơ bản】Chọn câu đúng (lặp lại động từ).', items: [
      ['', ['我先看看一会儿书。', '我先看一会儿书。'], 1],
      ['', ['大家正在研究研究这个问题。', '大家正在研究这个问题。'], 1],
      ['', ['请你找找一个人。', '请你找找这个人。'], 1],
      ['', ['我真想好好休息休息。', '我真想好好休息了休息。'], 0]] },
    { t: 'fill', q: '【Trung bình】Điền giới từ đúng trước động từ ly hợp.', items: [['我___朋友见面。', '跟|和'], ['他___大学毕业了。', '从'], ['你应该___对方道歉。', '向|跟'], ['大家都___演员鼓掌。', '为|给'], ['别___他生气了。', '跟|和']] },
    { t: 'match', q: '【Trung bình】Nối động từ với loại.', items: [['是', '系动词'], ['应该', '助动词'], ['进行', '形式动词'], ['洗澡', '离合动词'], ['相遇', '相互动词'], ['休息', '不及物动词']] },
    { t: 'order', q: '【Trung bình】Sắp xếp thành câu đúng.', items: [
      ['我们', '对这个问题', '进行了', '认真的讨论。'],
      ['他们', '吵了', '一个小时', '架。'],
      ['考试当中', '可能', '会', '出现一些特殊情况。'],
      ['你', '穿穿', '看看效果。']] },
    { t: 'open', q: '【Nâng cao】Sửa câu sai và giải thích.', items: [
      ['我在北京相遇了。', '→ 我们在北京相遇了 / 我跟他在北京相遇了。相遇 là động từ tương hỗ, chủ thể phải số nhiều.'],
      ['我们对这个文件进行了认真的学。', '→ 认真的学习。Sau động từ hình thức phải là động từ song âm tiết.'],
      ['请你看见！', '→ 请你看一下！看见 là động từ thụ động, không dùng trong câu cầu khiến.'],
      ['毕业 và 吵架 kết hợp với thời lượng khác nhau thế nào?', '毕业一年了: một năm tính từ khi tốt nghiệp (động tác xảy ra nhanh). 吵了一个小时架: việc cãi nhau kéo dài một tiếng.'],
      ['Chuyển sang câu dùng động từ hình thức: 公司奖励了这些员工。', '公司对这些员工给予了奖励 / 予以奖励。']] }
  ],
  adv: {
    g: [['跟/和 + N + 见面/结婚/吵架', 'động từ ly hợp đưa đối tượng lên trước', '我跟朋友见面。'], ['V + 了 + 动量/时量 + O (ly hợp)', 'chèn số lần/thời gian vào giữa', '我洗了一个舒服的澡。'], ['对 + O + 进行/加以/予以 + V(2 âm tiết)', 'câu động từ hình thức, trang trọng', '我们对这个问题进行了研究。'], ['AA / ABAB', 'làm thử, nhẹ nhàng, thời gian ngắn', '你尝尝。我们讨论讨论。']],
    an: [['退休了以后，平常看看书，下下棋，和老朋友聊聊天，倒也不寂寞。', '看看书 (AA)、下下棋、聊聊天 (AAB của động từ ly hợp) → sắc thái nhẹ nhàng, thư thái', 'Nghỉ hưu rồi, thường ngày đọc sách, đánh cờ, tán gẫu với bạn cũ, cũng không thấy cô đơn.']],
    v: [['散步', 'sànbù', 'đi dạo'], ['帮忙', 'bāngmáng', 'giúp đỡ'], ['生气', 'shēngqì', 'tức giận'], ['开学', 'kāixué', 'khai giảng'], ['交流', 'jiāoliú', 'giao lưu'], ['商量', 'shāngliang', 'bàn bạc'], ['加以', 'jiāyǐ', 'tiến hành, gia dĩ']],
    w: [['Nhật ký cuối tuần', 'Viết 6 câu kể cuối tuần thư thái, dùng ít nhất 4 động từ lặp lại (看看、聊聊天…) và 2 động từ ly hợp đúng cách.']]
  } },
{ id: 'g3-5', title: 'Tính từ 形容词 + Bài tập chương III', kind: '语法', src: '（《汉语语法教程》Chương III, Tiết 5 + 思考与练习, tr.90–103）',
  p: [
    '## 1. Đặc điểm ngữ pháp',
    '(1) Chủ yếu làm vị ngữ và định ngữ: 这里的环境非常优美 / 漂亮姑娘谁都喜欢. Một số làm trạng ngữ (我们认真讨论了你的问题), bổ ngữ (衣服洗得很干净 / 衣服洗干净了; nhưng *问题解决迅速了 → 问题解决得很迅速). (2) Phần lớn nhận 很. (3) Thường không mang tân ngữ; một số ít mang tân ngữ với nghĩa “làm cho…/đối với…” (不能肥了自己 = 使自己肥; 你越冷淡他 = 对他冷淡) → coi là kiêm loại động từ.',
    '## 2. Phân loại',
    '① Tính từ thường (性质形容词): 好、漂亮、认真 – làm vị ngữ và định ngữ, nhận 很, biểu thị tính chất.',
    '② Tính từ trạng thái (状态形容词): 雪白、金黄、绿油油、暖洋洋、乱哄哄、黑不溜秋. Làm vị ngữ, định ngữ phải thêm 的: 绿油油的秧苗 / 秧苗绿油油的; không nhận 很 (*很雪白) vì đã hàm mức độ cao; lặp lại kiểu ABAB (雪白雪白), không AABB. 雪白 giàu tính miêu tả hơn 很白: 雪白的墙面上挂着几幅山水画.',
    '③ Tính từ phi vị (非谓形容词 / 区别词): chỉ làm định ngữ: 金、银、大型、小型、中式、西式、急性、慢性、野生、国营、私营、军用、国产、初级、高级、亲生. Không nhận 很; vào được khung 是……的 (汽车是国产的); phủ định bằng 非 (非亲生子女, không *不亲生); một số làm trạng ngữ: 大量人员被调走 / 人员被大量调走 (高速、共同、专门). Phân biệt đồng hình: 非常时期 (phi vị) – 非常高兴 (phó từ); 意外事件 – 发生意外 (danh từ); 高度责任感 – 达到新的高度.',
    '④ Tính từ chỉ làm vị ngữ: 行、精神、对、准时、顺利、合算、可以…: 这个人很行 nhưng *行人/*行的人; 他的男朋友很精神 nhưng *精神的男朋友. Một số làm trạng ngữ: 火车准时到达.',
    '⑤ Tính từ số lượng: 许多、好些、不少: trực tiếp bổ nghĩa danh từ hoặc thêm lượng từ: 我最近买了好些(本)书; thường không làm vị ngữ.',
    '## 3. Lặp lại tính từ',
    'Đơn âm tiết AA (高高、长长), song âm tiết AABB (高高兴兴、清清楚楚、干干净净), giữ thanh điệu gốc. Một số tính từ khẩu ngữ lặp ABAB theo kiểu động từ, nghĩa “làm cho…”: 干净干净 (dọn cho sạch), 舒服舒服 (cho thoải mái), 暖和暖和、凉快凉快、轻松轻松. Chỉ khoảng 17% tính từ song âm tiết lặp được; từ văn viết khó lặp: 漂漂亮亮 (được) / *美美丽丽. Dạng lặp biểu thị mức độ sâu, giàu miêu tả, không nhận 很: *很干干净净、*干干净净极了.'
  ],
  zh: ['这里的环境非常优美。', '衣服洗得很干净。', '问题解决得很迅速。', '雪白的墙面上还挂着几幅山水画。', '这辆汽车是国产的。', '火车准时到达。', '我最近买了好些书。', '平时没有时间打扫，今天咱们得干净干净了。', '孩子们高高兴兴地去上学了。'],
  notes: [['形容词', 'xíngróngcí', 'tính từ'], ['性质形容词', 'xìngzhì xíngróngcí', 'tính từ tính chất'], ['状态形容词', 'zhuàngtài xíngróngcí', 'tính từ trạng thái'], ['非谓形容词', 'fēiwèi xíngróngcí', 'tính từ phi vị (khu biệt từ)'], ['区别词', 'qūbiécí', 'từ khu biệt'], ['重叠', 'chóngdié', 'lặp lại'], ['雪白', 'xuěbái', 'trắng như tuyết'], ['绿油油', 'lǜyóuyóu', 'xanh mơn mởn'], ['暖洋洋', 'nuǎnyángyáng', 'ấm áp'], ['国产', 'guóchǎn', 'sản xuất trong nước'], ['亲生', 'qīnshēng', 'ruột (con đẻ)'], ['准时', 'zhǔnshí', 'đúng giờ'], ['精神', 'jīngshen', 'tươi tỉnh, có thần'], ['好些', 'hǎoxiē', 'khá nhiều'], ['迅速', 'xùnsù', 'nhanh chóng']],
  ex: [
    { t: 'mc', q: '【Cơ bản】Chọn cách nói đúng.', items: [
      ['', ['很雪白的墙', '雪白的墙'], 1], ['', ['不亲生子女', '非亲生子女'], 1], ['', ['他是一个精神的人。', '他很精神。'], 1], ['', ['问题解决迅速了。', '问题解决得很迅速。'], 1], ['', ['房间干干净净极了。', '房间干干净净的。'], 1]] },
    { t: 'tf', q: '【Sách · 思考与练习 二】判断下列说法是否正确。', items: [
      ['汉语中一个汉字就是一个词素。', false], ['汉语中只有汉字，没有词。', false], ['单纯词是由一个词素构成的词，合成词是由两个以上的词素构成的词。', true], ['词类划分的标准是词的意义。', false], ['世界上的语言只有汉语的词有兼类现象。', false], ['要学好汉语，仅仅掌握名词、动词等大类的语法特点是不够的。', true], ['所有的名词前都可以加数量词组。', false], ['动词都可以带宾语。', false], ['只有部分动词可以重叠。', true], ['所有的形容词都可以受副词“很”的修饰。', false]] },
    { t: 'mc', q: '【Sách · 思考与练习 六】指出加点词的词类（名、动、形）。', items: [
      ['这份【工作】是我最想得到的。', ['名', '动', '形'], 0], ['我和同事们经常【工作】到很晚才回家。', ['名', '动', '形'], 1], ['我从三年前开始【学习】汉语。', ['名', '动', '形'], 1], ['我们每个星期有一个下午的业务【学习】时间。', ['名', '动', '形'], 0], ['商品越来越【丰富】。', ['名', '动', '形'], 2], ['我们要努力【丰富】群众的业余文化生活。', ['名', '动', '形'], 1], ['他们的房间从来都这么【干净】。', ['名', '动', '形'], 2], ['今天咱们得【干净干净】了。', ['名', '动', '形'], 1], ['【劳动】是一件很快乐的事情。', ['名', '动', '形'], 0]] },
    { t: 'tf', q: '【Sách · 思考与练习 十】Động từ nào dùng được trong “请 + __ + 一下儿”? (✓ được / ✗ không)', items: [['等', true], ['病', false], ['写', true], ['讨论', true], ['准备', true], ['到达', false], ['得到', false], ['误会', false], ['商量', true], ['失败', false], ['丢失', false], ['分析', true], ['休息', true], ['消失', false], ['及格', false]] },
    { t: 'open', q: '【Sách · 思考与练习 八、十一】Tìm lỗi, sửa và giải thích.', items: [
      ['从河的上游开过来几只船只。', '→ 几只船。船只 là danh từ tập hợp.'],
      ['这两个夫妻一辈子感情都非常好。', '→ 这对夫妻 / 这两口子。夫妻 là danh từ tập hợp, dùng 对.'],
      ['刚才我在路上遇到了三个老师们。', '→ 三个老师 (bỏ 们).'],
      ['我在我的词典找到了这个词的意思。', '→ 在我的词典里/上。词典 cần phương vị từ.'],
      ['我觉得故宫是北京里最有意思的地方。', '→ 北京最有意思的地方 (địa danh không thêm 里).'],
      ['你最好外面等着。', '→ 你最好在外面等着。'],
      ['他们以惊人的迅速准备好了一切。', '→ 以惊人的速度。迅速 là tính từ.'],
      ['我们明天下午出发学校。', '→ 从学校出发。出发 không mang tân ngữ nơi chốn.'],
      ['弟弟明年就毕业大学了。', '→ 明年就大学毕业了 / 从大学毕业了。'],
      ['小明这两年常常帮忙我。', '→ 常常帮我 / 帮我的忙。'],
      ['让我送送你一下儿。', '→ 让我送送你 / 送你一下儿 (không dùng chung).'],
      ['这些书我们可以能借吗？', '→ 可以借吗 (bỏ 能).'],
      ['我们能参加不参加这个舞会？', '→ 能不能参加 (hỏi bằng trợ động từ).'],
      ['今年有多人来这里学习汉语。', '→ 有很多人 / 有许多人。多 không trực tiếp làm định ngữ.'],
      ['我们把房间收拾得干干净净极了。', '→ 干干净净的 / 干净极了。Dạng lặp không đi với 极了.'],
      ['这件事情很主要，大家要重视。', '→ 很重要。主要 là tính từ phi vị.'],
      ['这里的人很友好我们。', '→ 对我们很友好。Tính từ không mang tân ngữ.'],
      ['我已经商量他了。', '→ 我已经跟他商量了。']] },
    { t: 'open', q: '【Sách · 思考与练习 十二】改成用形式动词表达的句子。', items: [
      ['大家认真讨论了这个问题。', '大家对这个问题进行了认真的讨论。'],
      ['学者们深入研究了城市环境治理问题。', '学者们对城市环境治理问题进行了深入的研究。'],
      ['我们应该更多地关注一下儿童教育。', '我们应该对儿童教育给予更多的关注。'],
      ['父母严肃地批评了我。', '父母对我进行了严肃的批评。'],
      ['敌人野蛮地狂轰滥炸这个美丽的城市。', '敌人对这个美丽的城市进行了野蛮的狂轰滥炸。'],
      ['我打算好好调查一下这个地区的生态状况。', '我打算对这个地区的生态状况进行一次认真的调查。']] }
  ],
  adv: {
    g: [['Adj状态 + 的', 'tính từ trạng thái phải có 的', '绿油油的秧苗'], ['是 + 区别词 + 的', 'tính từ phi vị làm vị ngữ qua 是……的', '这辆汽车是国产的。'], ['AABB + 地 + V', 'lặp tính từ làm trạng ngữ miêu tả', '孩子们高高兴兴地去上学了。'], ['ABAB (tính từ → động từ)', 'làm cho…', '咱们得干净干净了。']],
    an: [['这是一座典型的中式建筑，雪白的墙面上还挂着几幅山水画。', '中式 (区别词, làm định ngữ) 建筑; 雪白的 (状态形容词 + 的) 墙面', 'Đây là một kiến trúc kiểu Trung Hoa điển hình, trên bức tường trắng tinh còn treo mấy bức tranh sơn thủy.']],
    v: [['金黄', 'jīnhuáng', 'vàng óng'], ['乱哄哄', 'luànhōnghōng', 'ồn ào hỗn loạn'], ['袖珍', 'xiùzhēn', 'bỏ túi'], ['合算', 'hésuàn', 'có lời, đáng'], ['冷淡', 'lěngdàn', 'lạnh nhạt'], ['苗条', 'miáotiao', 'thon thả']]
  } }
] },
{ n: 4, title: 'Chương IV · Từ và từ loại (II) 词和词类（二）', texts: [
{ id: 'g4-1', title: 'Đại từ 代词', kind: '语法', src: '（《汉语语法教程》Chương IV, Tiết 1, tr.104–110）',
  p: [
    'Các đại từ có chức năng ngữ pháp không giống nhau (我、你、这 giống danh từ; 这么样、怎么样 giống động từ), nhưng vẫn tách thành một loại vì hai tác dụng quan trọng: ① chỉ thị – thay thế; ② liên kết các câu với nhau.',
    'Chỉ thị: A: 我的女朋友就在这张照片里。B: 哪个是你的女朋友？A: (lấy tay chỉ) 这个。 Thay thế: 中国第一家网络大学于4月1日开学，它由清华大学等高校共同开办。(它 = 中国第一家网络大学). Liên kết: 我给你带来了一本书，这本书是我最近刚买到的，很不错。(không thể nói “一本书是我最近刚买到的”).',
    'Đại từ là loại từ khép kín, thường dùng chỉ vài chục từ, chia làm 3 loại: nhân xưng, chỉ thị, nghi vấn.',
    '## 1. Đại từ nhân xưng 人称代词',
    'Ngôi 1: 我、我们、咱、咱们、自己、自个儿. Ngôi 2: 你、你们、您. Ngôi 3: 他、她、它、他们、它们、别人、人家、旁人、大家、诸位、大伙儿.',
    'Ngữ thể: 咱、咱们、自个儿、人家、大伙儿 chủ yếu dùng trong khẩu ngữ; 诸位 mang sắc thái trang trọng.',
    'Phạm vi: 我们 thường chỉ phía người nói, không gồm người nghe; 咱们 gồm cả người nói lẫn người nghe. Học sinh chào thầy: 我们走了，您请回吧。(không dùng 咱们).',
    '人家 vừa chỉ người khác (人家都买了，咱们也买), vừa chỉ chính người nói với giọng nũng nịu (人家都累了，你去吧).',
    '## 2. Đại từ chỉ thị 指示代词',
    'Chuyên chỉ — chỉ gần: 这、此 (văn ngôn)、这些、这里、这儿、此地、这会儿、此时、此刻、这么、这样; chỉ xa: 那、那些、那里、那儿、那会儿、那么、那样; đặc thù: 某、有的. Thành phần văn ngôn như 此 vẫn sống trong tiếng Hán hiện đại.',
    'Phiếm chỉ (chỉ tất cả): 所有、任何、每、各. 所有、任何 đứng thẳng trước danh từ, không thêm lượng từ (所有学校, *所有所学校); 每、各 có thể thêm lượng từ (每所学校、各个地方). 所有、任何 không làm trạng ngữ; 每、各 thì có thể: 我们每前进一步都要付出很大的努力。/ 你们几个各完成一篇作文。',
    '## 3. Đại từ nghi vấn 疑问代词 và hệ thống đối ứng',
    'Chỉ người: 你、我、他 / 这(个人) ↔ 谁、什么人、哪个人. Chỉ vật: 这、那 ↔ 什么、哪. Chỉ thời gian: 这会儿 ↔ 几点、什么时候、哪天. Chỉ nơi chốn: 这儿、那儿 ↔ 哪儿、哪里. Chỉ số lượng: 这些、那些 ↔ 几、多少. Chỉ tình trạng, phương thức: 这样、那样、这么 ↔ 怎么、怎么样. Ba loại đối ứng chỉnh tề → muốn nắm đại từ phải có quan niệm hệ thống.',
    '## 4. Cách dùng hư chỉ 虚指',
    '大家你一言我一语，讨论得很热闹。/ 他看看这儿，摸摸那儿，好像对什么都感兴趣。/ 他很勇敢，哪儿有危险就冲到哪儿。 Ở đây 你、我、这儿、那儿、什么、哪儿 không chỉ đối tượng xác định. Lưu ý: đại từ nhân xưng và chỉ thị chỉ mang nghĩa hư chỉ khi dùng thành đôi.',
    'Khẩu ngữ còn dùng đại từ để nhấn mạnh ngữ khí: 这几天太累了，明天星期天，睡他一天。(他 không chỉ ai).',
    '## 5. Đại từ được bổ nghĩa',
    'Đại từ chỉ thị không nhận bổ nghĩa; nhưng trong văn viết 我、她、他们 có thể nhận định ngữ, bắt buộc có 的: 十五六岁的我；一向谨慎忠厚的她；年轻好事的他们.'
  ],
  zh: ['我的女朋友就在这张照片里。', '哪个是你的女朋友？', '我给你带来了一本书，这本书是我最近刚买到的，很不错。', '我们走了，您请回吧。', '人家都买了，咱们也买。', '我们每前进一步都要付出很大的努力。', '你们几个各完成一篇作文。', '大家你一言我一语，讨论得很热闹。', '他很勇敢，哪儿有危险就冲到哪儿。', '有你这句话，什么困难我都不怕了。'],
  notes: [['代词', 'dàicí', 'đại từ'], ['人称代词', 'rénchēng dàicí', 'đại từ nhân xưng'], ['指示代词', 'zhǐshì dàicí', 'đại từ chỉ thị'], ['疑问代词', 'yíwèn dàicí', 'đại từ nghi vấn'], ['咱们', 'zánmen', 'chúng ta (gồm người nghe)'], ['人家', 'rénjia', 'người ta; (nũng nịu) mình'], ['诸位', 'zhūwèi', 'các vị'], ['大伙儿', 'dàhuǒr', 'mọi người (khẩu ngữ)'], ['任何', 'rènhé', 'bất kỳ'], ['虚指', 'xūzhǐ', 'hư chỉ (chỉ không xác định)'], ['此', 'cǐ', 'này (văn ngôn)'], ['某', 'mǒu', 'nào đó']],
  ex: [
    { t: 'tf', q: '【Cơ bản】Đúng hay sai?', items: [
      ['Tác dụng chính của đại từ là chỉ thị – thay thế và liên kết câu.', true],
      ['我们 luôn bao gồm cả người nghe.', false],
      ['咱、自个儿、大伙儿 chủ yếu dùng trong khẩu ngữ.', true],
      ['所有 có thể làm trạng ngữ như 每.', false],
      ['Đại từ chỉ thị có thể nhận định ngữ: 漂亮的这.', false]] },
    { t: 'mc', q: '【Cơ bản】Chọn đại từ đúng.', items: [
      ['(Học sinh chào thầy) ___ 走了，您请回吧。', ['咱们', '我们', '大家'], 1],
      ['明天 ___ 一起去看电影吧，你也去！', ['咱们', '人家', '诸位'], 0],
      ['___ 学校都要重视安全。', ['所有', '每个', '任何个'], 0],
      ['你们几个 ___ 完成一篇作文。', ['所有', '任何', '各'], 2],
      ['你住在 ___？—— 我住在学校旁边。', ['哪儿', '那儿', '这儿'], 0]] },
    { t: 'match', q: '【Trung bình】Nối đại từ chỉ thị với đại từ nghi vấn đối ứng.', items: [['这儿 / 那儿', '哪儿'], ['这些 / 那些', '几 / 多少'], ['这样 / 那样', '怎么样'], ['这会儿', '什么时候'], ['这个人', '谁']] },
    { t: 'tf', q: '【Trung bình】Đại từ in đậm có dùng theo nghĩa hư chỉ (không chỉ đối tượng xác định) không?', items: [
      ['他看看【这儿】，摸摸【那儿】。', true], ['你看，我的书在【这儿】。', false], ['有你这句话，【什么】困难我都不怕了。', true], ['你想吃【什么】？', false], ['明天星期天，睡【他】一天。', true]] },
    { t: 'fill', q: '【Nâng cao】Điền đại từ nghi vấn để tạo câu hư chỉ.', items: [['他很勇敢，___有危险就冲到哪儿。', '哪儿|哪里'], ['你想吃什么就点___。', '什么'], ['___先到，___就先买票。', '谁…谁']] },
    { t: 'tf', q: '【Sách · 思考与练习 一】Nhận định đúng hay sai?', items: [
      ['代词跟其他词类一样，是根据“我”“这”等词的语法功能分出来的类。', false],
      ['代词内部的系统性很强。', true],
      ['副词除了能作状语外，还可以作其他句子成分。', false],
      ['副词下面的类没有特别的语法特点。', false],
      ['介词是可以和动词区别开的。', true],
      ['所有的连词都可以连接词、词组、句子，甚至段落。', false],
      ['助词既有词汇意义，又有语法意义，是个很重要的类。', false],
      ['象声词只能独立使用，不能充当句子成分。', false]] },
    { t: 'tf', q: '【Sách · 思考与练习 二】Từ nào là đại từ? (✓ đại từ / ✗ không)', items: [['人民', false], ['人家', true], ['家伙', false], ['别人', true], ['自己', true], ['大家', true], ['地方', false], ['这里', true], ['前方', false], ['多少', true], ['其中', true], ['当中', false], ['此时', true], ['彼此', true], ['互相', false], ['其他', true]] }
  ],
  adv: {
    g: [['每 + (lượng từ) + N / 每 + V', 'mỗi; 每 có thể làm trạng ngữ', '我们每前进一步都要付出努力。'], ['哪儿……哪儿 / 谁……谁', 'đại từ nghi vấn hô ứng (hư chỉ)', '谁先到谁先买。'], ['你一言我一语', 'mỗi người một câu (hư chỉ thành đôi)', '大家你一言我一语。'], ['Định ngữ + 的 + 我/她/他们', 'đại từ được bổ nghĩa (văn viết)', '十五六岁的我']],
    an: [['他看看这儿，摸摸那儿，好像对什么都感兴趣。', '这儿、那儿 dùng thành đôi → hư chỉ; 什么 + 都 → chỉ “mọi thứ”', 'Cậu ấy nhìn chỗ này, sờ chỗ kia, dường như cái gì cũng thấy thích thú.']],
    v: [['自个儿', 'zìgěr', 'tự mình (khẩu ngữ)'], ['旁人', 'pángrén', 'người bên cạnh, người khác'], ['此刻', 'cǐkè', 'lúc này'], ['此后', 'cǐhòu', 'từ đó về sau'], ['彼此', 'bǐcǐ', 'lẫn nhau, đôi bên'], ['其中', 'qízhōng', 'trong đó']],
    s: [['Giới thiệu ảnh', 'Cầm một tấm ảnh, dùng 这个、那个、哪个、谁 hỏi – đáp với bạn về người trong ảnh.']],
    w: [['Câu hư chỉ', 'Viết 3 câu dùng cặp đại từ hô ứng: 谁……谁、哪儿……哪儿、什么……什么.']]
  } },
{ id: 'g4-2', title: 'Số từ và lượng từ 数词和量词', kind: '语法', src: '（《汉语语法教程》Chương IV, Tiết 2, tr.110–118）',
  p: [
    '## 1. Số từ: số đếm và số thứ tự',
    'Số đếm: 一、三十一、二分之一、零点三五、倍. Số thứ tự: 第一、初一、老二. Khác tiếng Anh, ranh giới hai loại trong tiếng Hán không rõ: ngoài tiền tố 第, nhiều khi dùng số đếm biểu thị thứ tự: 我住在十一层。/ 我们应该坐300路汽车。',
    '## 2. Biểu đạt số ước lượng',
    '① Thêm 多、来: 二十多个人、十七斤多 (*十七多斤)、十来个人、一百来米. ② Thêm 几: 几十本书、十几件衣服. Chú ý trọng âm: 坐着几个人。(vài người) ↔ 坐着几个人？(hỏi số). ③ Thêm 把 (khẩu ngữ): 个把人、百把条枪. ④ Thêm 左右、上下、以上: 三十岁左右. ⑤ Dùng liền hai số gần nhau: 三四十岁、五六百人.',
    '## 3. Từ thứ tự Thiên can',
    '甲、乙、丙、丁、戊、己、庚、辛、壬、癸 — dùng ghi năm âm lịch (甲午战争、辛亥革命) và để chỉ thứ tự: 他住十号楼甲单元. Bốn từ đầu tương đương 第一…第四, chủ yếu dùng trong văn viết.',
    '## 4. Danh lượng từ',
    '① Chuyên dụng: mỗi danh từ đi với lượng từ nhất định: 一本词典 (*一个词典)、一匹马、一条鱼 — phải học từng từ. ② Tạm thời (mượn danh từ): 一桌子菜、一屋子人、一床东西. Nhóm “一 + danh từ chứa đựng” nhấn mạnh số lượng nhiều và số từ thường chỉ là 一. ③ Đo lường: 公斤、亩、米. ④ Thông dụng: 个、些、点儿、种. 个 ngày càng dùng rộng (一个电影), nhưng nhiều danh từ không thay được: 一张纸 (*一个纸).',
    '## 5. Động lượng từ',
    '① Chuyên dụng: 次、回、遍、趟、下(儿)、顿、阵、番. 次、下 kết hợp rộng; 顿 chỉ đi với 吃、打、骂… ② Công cụ (tạm thời): 他踢了我一脚。/ 我打了他一巴掌。/ 他看了我一眼。',
    '## 6. Lượng từ phức hợp',
    '架次、人次、班次、件次、批次、辆次… = danh lượng từ + 次. 10架次 có thể là 1 máy bay bay 10 lần, 2 máy bay mỗi chiếc 5 lần… nên không hiểu là 10 chiếc. Đặc điểm: không lặp lại; không đi với 这、那; ít đứng trước danh từ; chủ yếu làm bổ ngữ: 飞机一共飞了20架次。',
    '## 7. Lặp lượng từ',
    'AA (个个、件件、次次、趟趟) = “每 + lượng từ + 都”: 这些衣服件件都漂亮。/ 他钓鱼趟趟都有收获。 Dạng “一AA” có 3 nghĩa: ① từng cái (小伙子们一个个身强力壮); ② từng cái một, làm trạng ngữ (我们要一件件仔细检查 = 逐个); ③ nhiều (北京建起了一座座高楼大厦).',
    '## 8. Số từ + tính từ + lượng từ',
    '他手里提着一大包东西。/ 老师抱着一厚本词典。 Nhấn mạnh số lượng to/nhỏ, có ý phóng đại. Lượng từ tạm thời dễ chen tính từ (一大碗饭、一大瓶汽水); lượng từ chuyên dụng hạn chế (*一大件衣服). Tính từ chen vào rất ít: 大、小、厚、薄、长.'
  ],
  zh: ['我住在十一层。', '我们应该坐三百路汽车。', '来了二十多个人。', '他三十岁左右。', '桌子上摆了一桌子菜。', '他踢了我一脚。', '飞机一共飞了二十架次。', '这些衣服件件都很漂亮。', '我们要一件件仔细检查，不要漏掉。', '晚上他吃了一大碗饭。'],
  notes: [['数词', 'shùcí', 'số từ'], ['量词', 'liàngcí', 'lượng từ'], ['基数', 'jīshù', 'số đếm'], ['序数', 'xùshù', 'số thứ tự'], ['概数', 'gàishù', 'số ước lượng'], ['名量词', 'míngliàngcí', 'danh lượng từ'], ['动量词', 'dòngliàngcí', 'động lượng từ'], ['复合量词', 'fùhé liàngcí', 'lượng từ phức hợp'], ['架次', 'jiàcì', 'lượt (máy bay)'], ['人次', 'réncì', 'lượt người'], ['天干', 'tiāngān', 'thiên can'], ['左右', 'zuǒyòu', 'khoảng']],
  ex: [
    { t: 'mc', q: '【Cơ bản】Chọn lượng từ đúng.', items: [
      ['一 ___ 词典', ['个', '本', '张'], 1], ['一 ___ 马', ['只', '匹', '头'], 1], ['一 ___ 鱼', ['条', '头', '个'], 0], ['一 ___ 纸', ['个', '张', '本'], 1], ['去了一 ___ 上海 (một chuyến)', ['趟', '顿', '张'], 0], ['挨了一 ___ 骂', ['顿', '本', '条'], 0]] },
    { t: 'tf', q: '【Cơ bản】Cách biểu đạt số ước lượng nào đúng?', items: [['十七斤多', true], ['十七多斤', false], ['二十多个人', true], ['十来个人', true], ['三四十岁', true], ['三十岁左右', true]] },
    { t: 'match', q: '【Trung bình】Nối dạng lặp lượng từ với ý nghĩa.', items: [['这些衣服件件都很漂亮。', 'mỗi cái đều…'], ['我们要一件件仔细检查。', 'từng cái một (trạng ngữ)'], ['北京建起了一座座高楼。', 'rất nhiều'], ['飞机一共飞了20架次。', 'lượng từ phức hợp']] },
    { t: 'tf', q: '【Trung bình】Câu nào đúng?', items: [['他手里提着一大包东西。', true], ['他穿着一大件衣服。', false], ['晚上他吃了一大碗饭。', true], ['这些架次飞机都很新。', false], ['一个电影', true], ['一个纸', false]] },
    { t: 'order', q: '【Nâng cao】Sắp xếp thành câu.', items: [['我们', '应该', '坐', '300路', '汽车。'], ['他', '手里', '提着', '一大包', '东西。'], ['市儿童医院', '门诊量', '已突破', '5000', '人次。']] },
    { t: 'open', q: '【Nâng cao】Giải thích sự khác nhau.', items: [['飞机一共飞了20次。/ 飞机一共飞了20架次。', 'Câu 1: số lần bay (một hoặc nhiều máy bay, tính lần). Câu 2: tổng “số máy bay × số lần bay” = 20, không biết bao nhiêu chiếc.'], ['坐着几个人。/ 坐着几个人？', 'Trọng âm ở 坐着 → “có vài người ngồi” (số ước lượng); trọng âm ở 几 → hỏi “có mấy người ngồi?”.'], ['摆了三桌子菜 / 摆了一桌子菜', '一桌子菜 nhấn mạnh nhiều (đầy bàn); 三桌子菜 chỉ số lượng khách quan.']] }
  ],
  adv: {
    g: [['Số + 多/来 + lượng từ', 'hơn…, khoảng…', '二十多个人 / 十来个人'], ['Số + lượng từ + 多 (sau đơn vị đo)', 'hơn (phần lẻ)', '十七斤多'], ['AA + 都', 'mỗi… đều', '件件都很漂亮'], ['一 + AA', 'từng…/ rất nhiều…', '一步步提高'], ['一 + 大/小/厚 + lượng từ', 'nhấn mạnh to/nhỏ', '一大碗饭']],
    an: [['北京这些年建起了一座座高楼大厦，修起了一条条宽敞明亮的道路。', '一座座、一条条 = dạng lặp “一AA” biểu thị số lượng nhiều; 建起了、修起了 động từ + bổ ngữ xu hướng', 'Mấy năm nay Bắc Kinh đã xây lên rất nhiều tòa cao ốc, làm nên rất nhiều con đường rộng rãi sáng sủa.']],
    v: [['亩', 'mǔ', 'mẫu (≈ 666 m²)'], ['巴掌', 'bāzhang', 'bàn tay, cái tát'], ['趟', 'tàng', 'chuyến'], ['顿', 'dùn', 'bữa, trận'], ['遍', 'biàn', 'lượt (từ đầu đến cuối)'], ['门诊量', 'ménzhěnliàng', 'lượng khám ngoại trú'], ['逐个', 'zhúgè', 'từng cái một']],
    s: [['Đi chợ', 'Đóng vai mua bán: dùng ít nhất 6 lượng từ khác nhau và 2 cách nói số ước lượng (多、来、左右).']],
    w: [['Miêu tả thành phố', 'Viết 4–5 câu về thành phố của bạn, dùng dạng lặp 一座座、一条条、一个个.']]
  } },
{ id: 'g4-3', title: 'Phó từ 副词', kind: '语法', src: '（《汉语语法教程》Chương IV, Tiết 3, tr.119–125）',
  p: [
    'Phó từ bổ nghĩa, hạn chế động từ, tính từ hoặc cả câu về phương thức, trình độ, thời gian, ngữ khí…: 都、就、毕竟.',
    '## 1. Đặc điểm ngữ pháp',
    '① Chức năng duy nhất là làm trạng ngữ — đặc trưng phân biệt với các loại khác (tính từ 迅速 cũng làm trạng ngữ nhưng còn làm vị ngữ, định ngữ).',
    '② Phần lớn không dùng độc lập; khoảng 65/486 phó từ dùng độc lập được: 不、也许、大概、未必、当然、赶紧、马上、何必、难怪… (小明，赶快！车马上要开了。/ 甲：他没生你的气。乙：也许吧。).',
    '③ Phó từ không nhận bổ nghĩa của từ khác.',
    '④ Một số phó từ phạm vi hạn chế danh từ, đại từ: 就我一个人参加了。/ 光他说没有用。 Một số bổ nghĩa cho cụm số lượng: 刚五点你怎么就起床了？ → nên có cặp câu cùng nghĩa: 我们足足等了你三天 = 我们等了你足足三天. Không vì thế mà nói phó từ làm định ngữ — cả cụm “phó từ + số lượng” mới làm định ngữ. Không nên tùy tiện đổi vị trí.',
    '⑤ Một số phó từ đơn âm tiết có dạng lặp: 白白、常常、刚刚、渐渐、明明、偏偏、稍稍、早早、足足… Dạng lặp ngữ khí mạnh hơn: 他明明知道会出问题，还要这么干！ Có khi chỉ dùng được một dạng: 我今天白来了 (*白白来了).',
    '## 2. Phân loại',
    '① Trình độ: 很、挺、极、最、太、特别、相当、非常、十分、比较、稍微、格外… bổ nghĩa cho tính từ và động từ tâm lý; không bổ nghĩa cho động từ thường, nhưng bổ nghĩa được một số cụm động–tân có tính chất như tính từ: 很有道理、很受欢迎、很花时间、很讲卫生、很会说话、很令人满意 (nhưng *很有一个人、*很花钱、*很受批评).',
    '② Ngữ khí: 也许、大概、难道、究竟、毕竟、偏偏、幸亏、居然、到底、简直、反正、果然… bổ nghĩa cho cả câu, đứng trước hoặc sau chủ ngữ được: 大家也许会原谅我 = 也许大家会原谅我.',
    '③ Thời gian: 已经、正在、立刻、马上、曾经、刚刚、将要、常常、渐渐、一直、终于… liên quan đến biểu đạt “thể”: 客人已经到了 (hoàn thành) / 会议正在进行着 (tiếp diễn) / 我曾经去过那里 (từng trải).',
    '④ Phạm vi: 只、仅仅、就、光、都、全、统统、一共… Phần lớn hạn chế danh từ phía sau (就我没去；光小说就买了十几本), riêng 都、全、统统、一概 chỉ tổng quát thành phần phía trước: 孩子们学习的时候都非常认真。',
    '⑤ Phủ định: 不、没(有)、别 — bổ nghĩa động từ, tính từ, không bổ nghĩa cả câu; dùng độc lập khi đối thoại.',
    '⑥ Tình trạng: 亲自、互相、悄悄、赶紧、渐渐、擅自、专门… chỉ bổ nghĩa cho động từ.',
    '⑦ Nối: 越……越、又、就、也… vừa bổ nghĩa, vừa nối cụm/câu: 我们越学越有兴趣。'
  ],
  zh: ['小明，赶快！车马上要开了。', '就我一个人参加了。', '我们足足等了你三天。', '他明明知道会出问题，还要这么干！', '这本书很有道理。', '也许大家会原谅我。', '客人已经到了。', '会议正在进行着。', '别人都去了，就我没去。', '我们越学越有兴趣。'],
  notes: [['副词', 'fùcí', 'phó từ'], ['状语', 'zhuàngyǔ', 'trạng ngữ'], ['程度副词', 'chéngdù fùcí', 'phó từ trình độ'], ['语气副词', 'yǔqì fùcí', 'phó từ ngữ khí'], ['时间副词', 'shíjiān fùcí', 'phó từ thời gian'], ['范围副词', 'fànwéi fùcí', 'phó từ phạm vi'], ['否定副词', 'fǒudìng fùcí', 'phó từ phủ định'], ['毕竟', 'bìjìng', 'rốt cuộc, dù sao'], ['偏偏', 'piānpiān', 'lại cứ, khăng khăng'], ['足足', 'zúzú', 'trọn, đủ'], ['幸亏', 'xìngkuī', 'may mà'], ['居然', 'jūrán', 'vậy mà, không ngờ']],
  ex: [
    { t: 'match', q: '【Cơ bản】Nối phó từ với loại.', items: [['非常', 'trình độ'], ['难道', 'ngữ khí'], ['曾经', 'thời gian'], ['仅仅', 'phạm vi'], ['别', 'phủ định'], ['悄悄', 'tình trạng']] },
    { t: 'tf', q: '【Cơ bản】Có thể nói như vậy không?', items: [['很有道理', true], ['很有一个人', false], ['很花时间', true], ['很花钱', false], ['很受欢迎', true], ['很受批评', false], ['很学习', false], ['很喜欢', true]] },
    { t: 'mc', q: '【Trung bình】Chọn phó từ thích hợp.', items: [
      ['我今天 ___ 来了，他不在家。', ['白', '白白', '明明'], 0],
      ['他 ___ 知道会出问题，还要这么干！', ['明明', '已经', '都'], 0],
      ['别人都去了，___ 我没去。', ['都', '就', '也'], 1],
      ['客人 ___ 到了，快出来吧。', ['曾经', '已经', '正在'], 1],
      ['我们越学 ___ 有兴趣。', ['越', '又', '都'], 0]] },
    { t: 'tf', q: '【Sách · 思考与练习 四】Theo chức năng ngữ pháp, từ nào là phó từ?', items: [['大力', true], ['迅速', false], ['偏偏', true], ['抓紧', false], ['究竟', true], ['突然', false], ['紧张', false], ['毕竟', true], ['赶快', true], ['连忙', true], ['完毕', false], ['飞快', true], ['偶尔', true], ['忽然', true], ['偶然', false], ['尽量', true]] },
    { t: 'tf', q: '【Sách · 思考与练习 五】Động từ nào kết hợp được với phó từ trình độ (很…)?', items: [['提高', false], ['害怕', true], ['担心', true], ['主张', false], ['小心', true], ['喜欢', true], ['考虑', false], ['批评', false], ['惊讶', true], ['气愤', true], ['生气', true], ['讨论', false], ['学习', false], ['加强', false], ['愿意', true], ['讨厌', true], ['震惊', true], ['遗憾', true], ['愤怒', true]] },
    { t: 'tf', q: '【Sách · 思考与练习 六】Phó từ trong câu có thể chuyển lên trước chủ ngữ không?', items: [
      ['我们毕竟已经不很年轻了。', true], ['你得赶紧把这里的情况告诉他们。', false], ['公司领导也许会同意我们提出的这个方案。', true], ['这种事情经常发生。', false], ['大家都去了，你偏偏一个人留在家里。', true], ['老王大概已经把东西给他寄去了。', true], ['销售方面的事恐怕你得问经理。', true], ['我们这些天一直都在和你联系。', false]] }
  ],
  adv: {
    g: [['很 + 有/受/讲/会 + N', 'cụm động–tân như tính từ', '很有道理 / 很讲卫生'], ['光/就/仅 + N', 'phó từ phạm vi hạn chế danh từ', '光小说就买了十几本。'], ['越……越……', 'càng… càng…', '越学越有兴趣。'], ['明明……还/却……', 'rõ ràng… vậy mà…', '他明明知道，还要这么干。'], ['足足/至少 + số lượng', 'trọn/ít nhất', '足足等了三天']],
    an: [['他买了不少书，光小说就买了十几本。', '光 (phó từ phạm vi) hạn chế danh từ 小说; 就 nhấn mạnh số lượng nhiều', 'Anh ấy mua không ít sách, riêng tiểu thuyết đã mua hơn chục cuốn.']],
    v: [['恰好', 'qiàhǎo', 'vừa đúng'], ['偶尔', 'ǒu’ěr', 'thỉnh thoảng'], ['难怪', 'nánguài', 'thảo nào'], ['何必', 'hébì', 'cần gì phải'], ['擅自', 'shànzì', 'tự ý'], ['格外', 'géwài', 'đặc biệt, hết sức'], ['索性', 'suǒxìng', 'dứt khoát, đành']],
    s: [['Trả lời một từ', 'Bạn hỏi 10 câu, bạn kia chỉ được trả lời bằng một phó từ dùng độc lập: 也许、当然、未必、马上、差不多…']],
    w: [['Đoạn văn phó từ', 'Viết đoạn 80 chữ về một ngày xui xẻo, dùng 偏偏、幸亏、居然、终于、明明.']]
  } },
{ id: 'g4-4', title: 'Giới từ 介词', kind: '语法', src: '（《汉语语法教程》Chương IV, Tiết 4, tr.126–130）',
  p: [
    'Giới từ kết hợp với danh từ, đại từ, cụm danh từ tạo thành cụm giới từ, bổ nghĩa cho động từ, tính từ hoặc cả câu về đối tượng, thời gian, nơi chốn, phương thức… Kết cấu điển hình: Giới từ + N/Đại từ + ĐT/TT.',
    '## 1. Đặc điểm (so với động từ)',
    'Giới từ phần lớn do động từ cổ hư hóa; có từ còn cả hai cách dùng: 在 (他不在家 / 我在图书馆看书)、朝 (脸朝墙 / 大雁朝南方飞去)、比 (我们比一比 / 她比你努力).',
    '① Động từ làm vị ngữ được (咱俩比书法); giới từ và cụm giới từ thì không (*我们从学校). Cụm giới từ chủ yếu làm trạng ngữ; làm bổ ngữ chỉ có 在、给、到、向、于、自、以; làm định ngữ phải có 的.',
    '② Động từ dùng độc lập được, giới từ thì không. ③ Giới từ không lặp lại. ④ Giới từ không mang 了、过; một số mang 着: 朝着、向着、对着、冲着、沿着、顺着、随着、按照着… nhưng 着 ở đây chỉ để hài hòa âm tiết, bỏ đi nghĩa không đổi: 她朝(着)那个方向跑去. (为了 là một giới từ, không phải 为 + 了.)',
    '⑤ Nhiều giới từ (≈40/70) hỏi được bằng “X不X”: 你跟不跟我去？/ 你今天给不给他打电话？',
    '## 2. Ranh giới giới từ – liên từ',
    'Nhóm 和、跟、同、与: 我和小明都去看你 → 和 là liên từ (hai bên ngang hàng, cùng làm chủ ngữ); 我和小明商量一下 → 和 là giới từ (和小明 bổ nghĩa cho 商量, chỉ đối tượng).',
    'Nhóm 因为、由于: sau nó là cụm danh từ → giới từ (因为身体的原因她不能继续工作了); sau nó là cụm phi danh từ, phía sau có 所以、因此 → liên từ (由于他长期工作不认真，所以才出现了这个结果).',
    '## 3. Phân loại (≈70 giới từ)',
    'Thời gian: 在、从、打、自从、于、当、直到. Nơi chốn, phương hướng: 在、从、到、朝、向、往、沿着. Đối tượng: 给、跟、为、对、把、将、被、叫、让、连. Công cụ: 用、拿、以. Phương thức: 通过、依. Căn cứ: 依照、按照、根据、凭、本着. Nguyên nhân – mục đích: 为、为了、因为、由于. So sánh: 比、跟. Loại trừ: 除、除了. Hiệp đồng: 和、同、跟、与. Cự ly: 离. Trải qua: 经、经过、通过、顺. Liên can: 关于、对于、至于、作为.'
  ],
  zh: ['我在图书馆看书。', '大雁朝南方飞去。', '她比你努力。', '你跟不跟我去？', '我和小明商量一下。', '我和小明都去看你。', '因为身体的原因，她不能继续工作了。', '由于他长期工作不认真，所以才出现了这个结果。', '关于这个问题，我们明天再讨论。', '除了小王，大家都来了。'],
  notes: [['介词', 'jiècí', 'giới từ'], ['介词词组', 'jiècí cízǔ', 'cụm giới từ'], ['虚化', 'xūhuà', 'hư hóa'], ['连词', 'liáncí', 'liên từ'], ['朝', 'cháo', 'hướng về'], ['沿着', 'yánzhe', 'men theo'], ['按照', 'ànzhào', 'theo, dựa theo'], ['凭', 'píng', 'dựa vào'], ['本着', 'běnzhe', 'căn cứ theo (tinh thần)'], ['关于', 'guānyú', 'về (việc)'], ['至于', 'zhìyú', 'còn về'], ['除了', 'chúle', 'ngoài, trừ']],
  ex: [
    { t: 'tf', q: '【Cơ bản】Đúng hay sai?', items: [['Giới từ có thể đơn độc làm vị ngữ.', false], ['Giới từ không thể lặp lại.', true], ['Giới từ có thể mang 了、过.', false], ['着 trong 朝着 chủ yếu để hài hòa âm tiết.', true], ['Cụm giới từ chủ yếu làm trạng ngữ.', true]] },
    { t: 'mc', q: '【Cơ bản】Chọn giới từ thích hợp.', items: [
      ['___ 这个问题，我们明天再讨论。', ['关于', '除了', '离'], 0],
      ['学校 ___ 我家很近。', ['离', '从', '对'], 0],
      ['___ 小王，大家都来了。', ['除了', '为了', '按照'], 0],
      ['___ 学好汉语，他每天练习两个小时。', ['为了', '因为', '对于'], 0],
      ['大雁 ___ 南方飞去。', ['朝', '把', '被'], 0]] },
    { t: 'match', q: '【Trung bình】Nối giới từ với quan hệ mà nó đánh dấu.', items: [['自从', 'thời gian'], ['沿着', 'nơi chốn, phương hướng'], ['按照', 'căn cứ'], ['比', 'so sánh'], ['除了', 'loại trừ'], ['关于', 'liên can']] },
    { t: 'tf', q: '【Sách · 思考与练习 七】Từ in đậm là giới từ (✓) hay liên từ (✗)?', items: [
      ['我打算【和】他讨论一下明年的生产计划。', true], ['昨天那件事发生的时候，我【跟】我丈夫都在现场。', false], ['这么大的事情，你最好【和】家里人商量一下。', true], ['机遇【和】挑战往往是并存的。', false], ['【因为】时间的关系，我今天先介绍到这里。', true], ['【由于】最近一段时间天气很不好，因此生产受到了一些影响。', false]] },
    { t: 'order', q: '【Nâng cao】Sắp xếp thành câu (chú ý vị trí cụm giới từ).', items: [['我', '在图书馆', '看书。'], ['他', '对别人', '不太', '热情。'], ['你', '是', '从哪个国家', '来的？'], ['我们', '明天', '从学校', '出发。']] }
  ],
  adv: {
    g: [['在/从/对/给 + N + V', 'cụm giới từ làm trạng ngữ', '他对别人很热情。'], ['V + 在/到/给 + N', 'cụm giới từ làm bổ ngữ', '把书放在桌子上。'], ['Giới từ + X不X', 'hỏi chính phản bằng giới từ', '你跟不跟我去？'], ['因为 + cụm danh từ', '“vì…” (giới từ)', '因为天气的原因，比赛推迟了。']],
    an: [['因为身体的原因她不能继续工作了。', '因为 + 身体的原因 (cụm danh từ) → giới từ, cụm giới từ làm trạng ngữ cả câu', 'Vì lý do sức khỏe, cô ấy không thể tiếp tục làm việc nữa.']],
    v: [['沿着', 'yánzhe', 'dọc theo'], ['顺着', 'shùnzhe', 'thuận theo'], ['随着', 'suízhe', 'cùng với, theo'], ['遵照', 'zūnzhào', 'tuân theo'], ['凭借', 'píngjiè', 'nhờ vào'], ['作为', 'zuòwéi', 'với tư cách là']],
    s: [['Chỉ đường', 'Dùng 从、往、沿着、朝、到、离 chỉ đường từ trường đến nhà bạn.']],
    w: [['Giới từ hay liên từ', 'Mỗi từ 和、跟、因为、由于 viết 2 câu: một câu dùng làm giới từ, một câu làm liên từ.']]
  } },
{ id: 'g4-5', title: 'Liên từ 连词', kind: '语法', src: '（《汉语语法教程》Chương IV, Tiết 5, tr.131–132）',
  p: [
    'Liên từ nối từ, cụm từ và câu: 和、但是、所以… Bản thân không có nghĩa từ vựng cụ thể, chỉ nói rõ quan hệ giữa các thành phần được nối; không dùng độc lập, không làm thành phần câu.',
    '## 1. Phân loại theo đơn vị được nối (≈120 liên từ)',
    'A. Chỉ nối từ ngữ: 和、同、跟、与、而、并、及、以及、连同. Trong đó 和、同、跟、与 thậm chí không nối cụm động từ, cụm tính từ, càng không nối câu — khác với “and” trong tiếng Anh. Câu sai: *我们的教室很大和很干净 → 又大又干净 / 很大，也很干净; *我们复习旧课和我们预习新课 → 我们复习旧课，也预习新课.',
    'B. Nối phân câu, câu, đoạn: 不但、虽然、因为、如果、所以、但是… Có từ chỉ đứng ở vế trước (不但、与其), có từ chỉ đứng vế sau (而且、不如、所以、就).',
    '## 2. Phân loại theo quan hệ',
    'A. Liên từ ngang hàng: hai thành phần không phân chính phụ: 学生和老师 / 聪明而美丽 / 研究并解决 / 或者你们来，或者我们去。',
    'B. Liên từ chính – phụ: thường chỉ nối câu/phân câu; một vế bổ nghĩa cho vế kia: 只要你能按计划完成，我保证兑现我的诺言。(phụ → chính) / 东西不会给你，因为事情还没有搞清楚。(chính → phụ).'
  ],
  zh: ['学生和老师都来了。', '她聪明而美丽。', '我们要研究并解决这个问题。', '或者你们来，或者我们去。', '我们的教室又大又干净。', '只要你能按计划完成，我保证兑现我的诺言。', '东西不会给你，因为事情还没有搞清楚。', '他不但手很巧，而且心眼儿也好。'],
  notes: [['连接', 'liánjiē', 'nối kết'], ['并列', 'bìngliè', 'ngang hàng, đẳng lập'], ['偏正', 'piānzhèng', 'chính – phụ'], ['分句', 'fēnjù', 'phân câu, vế câu'], ['以及', 'yǐjí', 'cùng với, và'], ['与其', 'yǔqí', 'thà… (vế trước)'], ['不如', 'bùrú', 'chẳng bằng'], ['诺言', 'nuòyán', 'lời hứa'], ['兑现', 'duìxiàn', 'thực hiện (lời hứa)']],
  ex: [
    { t: 'tf', q: '【Cơ bản】Câu nào đúng?', items: [['我们的教室很大和很干净。', false], ['我们的教室又大又干净。', true], ['我和他都是学生。', true], ['我们复习旧课和我们预习新课。', false], ['她聪明而美丽。', true], ['我们要研究并解决这个问题。', true]] },
    { t: 'mc', q: '【Trung bình】Liên từ này đứng ở vế nào?', items: [['不但', ['vế trước', 'vế sau'], 0], ['与其', ['vế trước', 'vế sau'], 0], ['而且', ['vế trước', 'vế sau'], 1], ['不如', ['vế trước', 'vế sau'], 1], ['所以', ['vế trước', 'vế sau'], 1]] },
    { t: 'place', q: '【Sách · 思考与练习 九】Chọn liên từ thích hợp điền vào chỗ trống.', o: ['和', '而', '并', '而且', '并且', '然而', '无论', '于是', '因此', '但是'], a: [0, 1, 3, 2, 5, 0, 6, 4],
      text: '1. 昨天晚上，爸爸把我{1}弟弟批评了一顿。\n2. 我有幸找到了一个漂亮{2}贤惠的妻子。\n3. 他不但手很巧，{3}心眼儿也好。\n4. 我们共同研究{4}具体解决了这个难题。\n5. 一直以来，他身体非常不好，{5}他从来没有放弃对事业的追求。\n6. 这些话对我们来说实在是一种非常大的鼓励{6}鞭策。\n7. {7}困难有多大，我们都要坚持下去。\n8. 双方深入地交换了意见，{8}在一些重大的问题上达成了共识。' },
    { t: 'open', q: '【Nâng cao】Sửa câu sai và giải thích.', items: [['诸葛亮叫船上的士兵大声喊叫和擂起鼓来。', '→ 大声喊叫，并擂起鼓来。和 không nối cụm động từ.'], ['我昨天去王府井了，和看了一个朋友。', '→ 我昨天去王府井了，还看了一个朋友。和 không nối câu.'], ['请你把这本书给小明还是小强。', '→ 给小明或者小强。还是 dùng trong câu hỏi lựa chọn.']] }
  ],
  adv: {
    g: [['A 而 B', 'vừa… mà… (nối tính từ, văn viết)', '聪明而美丽'], ['V1 并 V2', 'và (nối động từ)', '研究并解决'], ['又 A 又 B', 'thay cho 和 khi nối tính từ', '又大又干净'], ['只要……就……', 'chỉ cần… thì…', '只要努力，就能成功。'], ['与其……不如……', 'thà… còn hơn…', '与其等车，不如走路。']],
    an: [['只要你能按计划完成，我保证兑现我的诺言。', 'Vế phụ (只要… điều kiện) + vế chính; liên từ chính – phụ', 'Chỉ cần bạn hoàn thành đúng kế hoạch, tôi đảm bảo sẽ thực hiện lời hứa.']],
    v: [['或者', 'huòzhě', 'hoặc (câu trần thuật)'], ['还是', 'háishi', 'hay (câu hỏi lựa chọn)'], ['然而', 'rán’ér', 'thế nhưng'], ['于是', 'yúshì', 'thế là'], ['鞭策', 'biāncè', 'thúc giục, khích lệ'], ['共识', 'gòngshí', 'nhận thức chung']],
    w: [['Tránh “and”', 'Dịch sang tiếng Trung: “Phòng tôi rộng và sạch. Tôi ôn bài cũ và chuẩn bị bài mới. Anh ấy đến và chúng tôi đi ăn.” (không dùng 和 sai).']]
  } },
{ id: 'g4-6', title: 'Trợ từ 助词', kind: '语法', src: '（《汉语语法教程》Chương IV, Tiết 6, tr.133–135）',
  p: [
    'Trợ từ là loại từ đặc biệt của tiếng Hán: 的、了、吗… Mỗi trợ từ có chức năng riêng, nhưng được gom thành một loại vì: ① đều bám vào sau từ, cụm từ hoặc câu, không dùng độc lập, vị trí cố định; ② không có nghĩa từ vựng cụ thể, chỉ có tác dụng hoặc ý nghĩa ngữ pháp; ③ phần lớn đọc nhẹ.',
    'Rất nhiều ý nghĩa và quan hệ ngữ pháp dựa vào trợ từ: 研究问题 (động – tân) ↔ 研究的问题 (chính – phụ). Nắm trợ từ là trọng điểm khi học tiếng Hán.',
    '## Phân loại (≈60–70 trợ từ)',
    '① Trợ từ động thái: 了 (hoàn thành)、着 (tiếp diễn)、过 (từng trải)、起来/上/开 (bắt đầu)、下去 (tiếp tục).',
    '② Trợ từ kết cấu: 的 — thành phần trước là định ngữ (幸福的生活) hoặc tạo kết cấu chữ 的 như danh từ (大的不错); 地 — thành phần trước là trạng ngữ (仔细地研究); 得 — thành phần sau là bổ ngữ (讨论得很热烈); 所 — “所 + V” như danh từ (所问非所答).',
    '③ Trợ từ ngữ khí: 6 từ cơ bản 了、吧、啊、吗、呢、的. Các dạng khác do ghép và biến âm: 了 (le) + 啊 (a) → 啦 (la); 呢 + 啊 → 哪 (na); 好 (hǎo) + 啊 → 好哇 (wa); 去 (qù) + 啊 → 呀 (ya).',
    '④ Trợ từ khác: so sánh 似的、一样、一般; số lượng phạm vi 等、等等、来、把、上下、左右、以内、以上、以下、以来; quan hệ 的话、起见、也好、与否.'
  ],
  zh: ['我们过着幸福的生活。', '大的不错。', '大家仔细地研究了这个问题。', '大家讨论得很热烈。', '我们研究的问题很重要。', '你来啦！', '天气多好哇！', '他高兴得像个孩子似的。', '如果下雨的话，我们就不去了。'],
  notes: [['助词', 'zhùcí', 'trợ từ'], ['动态助词', 'dòngtài zhùcí', 'trợ từ động thái'], ['结构助词', 'jiégòu zhùcí', 'trợ từ kết cấu'], ['语气助词', 'yǔqì zhùcí', 'trợ từ ngữ khí'], ['轻声', 'qīngshēng', 'thanh nhẹ'], ['的字结构', 'de zì jiégòu', 'kết cấu chữ 的'], ['似的', 'shìde', 'giống như'], ['的话', 'dehuà', 'nếu… thì'], ['起见', 'qǐjiàn', 'để, vì mục đích'], ['与否', 'yǔfǒu', 'hay không']],
  ex: [
    { t: 'mc', q: '【Cơ bản】Chọn 的 / 地 / 得.', items: [
      ['幸福 ___ 生活', ['的', '地', '得'], 0], ['仔细 ___ 研究', ['的', '地', '得'], 1], ['讨论 ___ 很热烈', ['的', '地', '得'], 2], ['他高兴 ___ 跳了起来。', ['的', '地', '得'], 2], ['孩子们高高兴兴 ___ 上学去了。', ['的', '地', '得'], 1]] },
    { t: 'match', q: '【Cơ bản】Nối trợ từ động thái với ý nghĩa.', items: [['了', 'hoàn thành'], ['着', 'tiếp diễn'], ['过', 'từng trải'], ['起来', 'bắt đầu'], ['下去', 'tiếp tục']] },
    { t: 'match', q: '【Trung bình】Nối dạng hợp âm của trợ từ ngữ khí.', items: [['了 + 啊', '啦 (la)'], ['呢 + 啊', '哪 (na)'], ['好 + 啊', '好哇 (wa)'], ['去 + 啊', '去呀 (ya)']] },
    { t: 'mc', q: '【Sách · 思考与练习 十一】Đặt trợ từ trong ngoặc vào vị trí nào (①②③)?', items: [
      ['这①一切使我②回忆起痛苦③童年。(的)', ['①', '②', '③'], 2],
      ['经过①三年多②学习，汉语③水平提高不少。(的)', ['①', '②', '③'], 1],
      ['自从①来到②北京以后，我认识③不少中国朋友。(了)', ['①', '②', '③'], 2],
      ['我们明天下①课就出发②去③外地旅行。(了)', ['①', '②', '③'], 0],
      ['我经常看见①他一个人带②孩子去③买东西。(着)', ['①', '②', '③'], 1],
      ['十年前，我曾经在那里①跟②老乡们一起劳动③。(过)', ['①', '②', '③'], 2]] },
    { t: 'open', q: '【Sách · 思考与练习 十】So sánh các cặp cụm từ, nói rõ khác biệt.', items: [
      ['出版图书 / 出版的图书', 'Động – tân (xuất bản sách) / chính – phụ (sách đã xuất bản).'],
      ['十斤西瓜 / 十斤的西瓜', '10 cân dưa hấu (tổng khối lượng) / quả dưa hấu nặng 10 cân (tính chất từng quả).'],
      ['研究问题 / 研究了问题', 'Động – tân chung chung / sự việc đã hoàn thành (了 động thái).'],
      ['昨天回来的 / 昨天回来了', 'Kết cấu chữ 的 = người/vật về hôm qua (như danh từ) / câu trần thuật: hôm qua đã về.']] }
  ],
  adv: {
    g: [['V + 了', 'hoàn thành', '我买了一本书。'], ['V + 着', 'tiếp diễn', '门开着。'], ['V + 过', 'từng trải', '我去过北京。'], ['……似的', 'giống như…', '高兴得像个孩子似的。'], ['如果……的话', 'nếu… thì', '如果下雨的话，就不去了。'], ['为了……起见', 'để…, vì…', '为了安全起见，请系好安全带。']],
    an: [['研究问题 / 研究的问题', 'Không có 的 → quan hệ động – tân; có 的 → định ngữ + trung tâm ngữ (chính – phụ)', 'nghiên cứu vấn đề / vấn đề được nghiên cứu']],
    v: [['也好', 'yěhǎo', 'cũng được'], ['以来', 'yǐlái', 'đến nay'], ['等等', 'děngděng', 'vân vân'], ['一般', 'yìbān', 'giống như (trợ từ so sánh)'], ['所问非所答', 'suǒ wèn fēi suǒ dá', 'hỏi một đằng trả lời một nẻo']],
    s: [['Ngữ khí', 'Đọc cùng một câu “你来” với 吗、吧、啊、呢、了 và nói ý nghĩa khác nhau.']],
    w: [['的 地 得', 'Viết đoạn 5 câu miêu tả buổi họp lớp, mỗi câu có ít nhất một trong 的、地、得.']]
  } },
{ id: 'g4-7', title: 'Từ tượng thanh 象声词', kind: '语法', src: '（《汉语语法教程》Chương IV, Tiết 7, tr.136–137）',
  p: [
    'Từ mô phỏng âm thanh gọi là từ tượng thanh (拟声词): 哗哗 (rào rào)、当当 (boong boong)、轰隆 (ầm ầm — sấm, pháo). Nó không thuộc thực từ, cũng không thuộc hư từ.',
    '## 1. Đặc điểm ngữ pháp',
    '① Dùng độc lập được: “扑通”，有人掉进水里了。',
    '② Làm thành phần câu: Định ngữ — 听着屋外哗哗的雨声 / 远处传来“砰”“砰”的枪声. Trạng ngữ — 山间的小溪哗哗地流着. Vị ngữ — 外面轰隆轰隆的，雨马上就要来了 (phải dạng láy + 的; *轰隆的 không được); 锅里的粥还得咕嘟一会儿 (咕嘟 = 煮, tạm mang tính động từ). Bổ ngữ — 这家伙把地板踩得咯吱咯吱的 / 爆炸声把窗户震得哗啦哗啦的.',
    'Làm vị ngữ và bổ ngữ đều phải thêm 的 và dùng dạng láy.',
    '## 2. Tác dụng diễn đạt',
    'Dùng nhiều trong khẩu ngữ và văn miêu tả, ít dùng trong văn nghị luận, thuyết minh. Dùng đúng chỗ làm lời văn sinh động, giàu hình ảnh.'
  ],
  zh: ['扑通，有人掉进水里了。', '坐在窗前，听着屋外哗哗的雨声。', '山间的小溪哗哗地流着。', '外面轰隆轰隆的，雨马上就要来了。', '锅里的粥还得咕嘟一会儿。', '巨大的爆炸声把窗户震得哗啦哗啦的。'],
  notes: [['象声词', 'xiàngshēngcí', 'từ tượng thanh'], ['拟声词', 'nǐshēngcí', 'từ mô phỏng âm thanh'], ['哗哗', 'huāhuā', 'rào rào'], ['轰隆', 'hōnglōng', 'ầm ầm'], ['扑通', 'pūtōng', 'tõm, bịch'], ['咕嘟', 'gūdū', 'sùng sục (sôi)'], ['咯吱', 'gēzhī', 'cót két'], ['哗啦', 'huālā', 'rào, loảng xoảng'], ['砰', 'pēng', 'đùng, rầm']],
  ex: [
    { t: 'match', q: '【Cơ bản】Nối từ tượng thanh với âm thanh.', items: [['哗哗', 'tiếng mưa, nước chảy'], ['轰隆', 'tiếng sấm, nổ'], ['嘀嗒', 'tiếng đồng hồ'], ['嗡嗡', 'tiếng ruồi, ong'], ['咕嘟', 'tiếng sôi sùng sục'], ['嘻嘻哈哈', 'tiếng cười đùa']] },
    { t: 'mc', q: '【Trung bình】Từ tượng thanh in đậm làm thành phần gì?', items: [
      ['听着屋外【哗哗】的雨声。', ['định ngữ', 'trạng ngữ', 'vị ngữ', 'bổ ngữ'], 0],
      ['小溪【哗哗】地流着。', ['định ngữ', 'trạng ngữ', 'vị ngữ', 'bổ ngữ'], 1],
      ['外面【轰隆轰隆】的，雨马上就要来了。', ['định ngữ', 'trạng ngữ', 'vị ngữ', 'bổ ngữ'], 2],
      ['地板被踩得【咯吱咯吱】的。', ['định ngữ', 'trạng ngữ', 'vị ngữ', 'bổ ngữ'], 3]] },
    { t: 'place', q: '【Sách · 思考与练习 十二】Chọn từ tượng thanh thích hợp.', o: ['砰', '嘀嗒嘀嗒', '呼哧呼哧', '嘻嘻哈哈', '噼里啪啦', '轰隆', '嗡嗡', '咕嘟'], a: [0, 1, 0, 2, 3, 4, 5, 6, 7],
      text: '1. 我们正在路上走着，突然“{1}”的一声，一个人倒在地上。\n2. 躺在床上，听着闹钟{2}的声音，脑子里一片空白。\n3. 他非常生气，转过身，“{3}”地一声关上了门。\n4. 1500米跑下来实在不轻松，站在那儿{4}地喘了半天。\n5. 屋里是一家人{5}的笑声，屋外是{6}的鞭炮声。\n6. 随着“{7}”一声巨响，大楼倒塌了下来。\n7. 我最讨厌苍蝇在耳边{8}个不停。\n8. 粥还不太熟，最好再在火上{9}一会儿。' }
  ],
  adv: {
    g: [['Từ tượng thanh láy + 的 (vị ngữ)', 'miêu tả âm thanh kéo dài', '外面轰隆轰隆的。'], ['Từ tượng thanh + 地 + V', 'làm trạng ngữ', '小溪哗哗地流着。'], ['“X”的一声', 'một tiếng X', '“砰”的一声，门关上了。']],
    v: [['叮当', 'dīngdāng', 'leng keng'], ['滴答', 'dīdā', 'tích tắc, tí tách'], ['噼里啪啦', 'pīlipālā', 'lách tách, đùng đoàng'], ['汪汪', 'wāngwāng', 'gâu gâu'], ['呼哧', 'hūchī', 'hổn hển'], ['乒乒乓乓', 'pīngpīngpāngpāng', 'lốp cốp, loảng xoảng']],
    w: [['Đêm mưa', 'Viết đoạn 60–80 chữ tả một đêm mưa bão, dùng ít nhất 4 từ tượng thanh ở các vị trí khác nhau.']]
  } },
{ id: 'g4-8', title: 'Thán từ 叹词', kind: '语法', src: '（《汉语语法教程》Chương IV, Tiết 8, tr.137–139）',
  p: [
    'Thán từ diễn đạt cảm thán hoặc gọi – đáp: 唉 (than thở)、喂 (gọi)、啊 (đáp).',
    '## 1. Đặc điểm ngữ pháp',
    'Không có nghĩa từ vựng rõ ràng, độc lập rất cao, không quan hệ ngữ pháp với từ ngữ khác, không làm thành phần câu. Có thể đứng đầu câu (唉！考个好成绩真不容易啊。), cuối câu (考个好成绩真不容易啊，唉！) hoặc giữa câu (这些人哪，唉！可是不好惹。).',
    '## 2. Tác dụng biểu đạt',
    'Biểu đạt kinh ngạc, than thở, khen ngợi, bất mãn, đắc ý… và để gọi, trả lời. Cùng một chữ, ngữ điệu khác thì tình cảm khác. Ví dụ 啊: á (ǎ/á) — hỏi vặn: 你到底来不来？啊？; a ngắn — đáp: 啊，我明白了。; a kéo dài — khen: 啊！多么蓝的天！',
    'Thán từ khó học bằng quy tắc, phải qua thực tiễn ngôn ngữ. Chủ yếu dùng trong khẩu ngữ; một thán từ có thể có nhiều cách viết (诶 = 欸 = 哎).',
    '## Điểm chính của chương IV',
    '1. Đại từ: chỉ thị – thay thế, liên kết; nội bộ có tính hệ thống mạnh. 2. Số từ và lượng từ thường đi cùng nhau; lượng từ chuyên dụng phải học từng từ. 3. Phó từ chỉ làm trạng ngữ. 4. Giới từ phát triển từ động từ, có tác dụng đánh dấu quan hệ ngữ pháp. 5. Liên từ chỉ có tác dụng nối. 6. Trợ từ đặc thù và quan trọng, phải nắm từng từ. 7. Từ tượng thanh và thán từ là hai loại đặc thù.'
  ],
  zh: ['唉！考个好成绩真不容易啊。', '喂，你找谁？', '啊，我明白了。', '啊！多么蓝的天！', '你到底来不来？啊？', '哎呀，我忘带钥匙了！', '咦，你怎么来了？'],
  notes: [['叹词', 'tàncí', 'thán từ'], ['感叹', 'gǎntàn', 'cảm thán'], ['呼唤', 'hūhuàn', 'kêu gọi'], ['应答', 'yìngdá', 'ứng đáp'], ['唉', 'āi', 'ôi (than thở)'], ['喂', 'wèi', 'alô, này'], ['哎呀', 'āiyā', 'ối, chà'], ['咦', 'yí', 'ơ (ngạc nhiên)'], ['嗯', 'ńg / ǹg', 'ừ, hả']],
  ex: [
    { t: 'tf', q: '【Cơ bản】Đúng hay sai?', items: [['Thán từ không làm thành phần câu.', true], ['Thán từ chỉ đứng đầu câu.', false], ['Cùng chữ 啊, ngữ điệu khác thì tình cảm khác.', true], ['Thán từ dùng nhiều trong văn nghị luận.', false]] },
    { t: 'match', q: '【Trung bình】Nối thán từ với tình cảm.', items: [['唉', 'than thở'], ['喂', 'gọi'], ['咦', 'ngạc nhiên'], ['哎呀', 'kinh ngạc, phàn nàn'], ['啊 (kéo dài)', 'khen ngợi'], ['嗯', 'đáp lại, đồng ý']] },
    { t: 'tf', q: '【Sách · 思考与练习 八】Câu nào ĐÚNG (✓)? Câu sai (✗) — hãy tự sửa.', items: [
      ['小李住院已经十四多天了。', false], ['这几个孩子十四五岁就上了大学。', true], ['我和朋友喝了三个瓶啤酒。', false], ['我以前没吸烟，也没喝酒。', false], ['以前常常我去那里看电影。', false], ['你在哪个国家来的？', false], ['他不太热情对别人。', false], ['阿里给我告诉今天上课的内容。', false], ['请你把这本书给小明还是小强。', false], ['我昨天去王府井了，和看了一个朋友。', false], ['我决定了夏天去旅行。', false], ['你是什么时候来北京的吗？', false]] },
    { t: 'open', q: '【Sách · 思考与练习 八 · Đáp án tham khảo】Viết lại câu đúng.', items: [
      ['小李住院已经十四多天了。', '小李住院已经十多天了 / 十四天多了。'], ['我和朋友喝了三个瓶啤酒。', '喝了三瓶啤酒。'], ['我以前没吸烟，也没喝酒。', '我以前不吸烟，也不喝酒。(thói quen dùng 不)'], ['以前常常我去那里看电影。', '以前我常常去那里看电影。'], ['你在哪个国家来的？', '你是从哪个国家来的？'], ['他不太热情对别人。', '他对别人不太热情。'], ['阿里给我告诉今天上课的内容。', '阿里告诉我今天上课的内容。'], ['请你把这本书给小明还是小强。', '给小明或者小强。'], ['我昨天去王府井了，和看了一个朋友。', '……，还看了一个朋友。'], ['我决定了夏天去旅行。', '我决定夏天去旅行。'], ['你是什么时候来北京的吗？', '你是什么时候来北京的？']] }
  ],
  adv: {
    g: [['Thán từ + ，+ câu', 'thán từ đứng đầu câu', '唉，真不容易。'], ['Câu + ，+ thán từ', 'thán từ đứng cuối câu', '真不容易啊，唉！']],
    v: [['哦', 'ó / ò', 'ồ (hiểu ra / nghi ngờ)'], ['哼', 'hng', 'hừ (bất mãn)'], ['哈哈', 'hāhā', 'ha ha (đắc ý)'], ['哇', 'wa', 'oa (kinh ngạc)']],
    s: [['Ngữ điệu', 'Đọc 啊 với 3 ngữ điệu (hỏi vặn, đáp, khen) trong 3 tình huống khác nhau.']]
  } }
] },
{ n: 5, title: 'Chương V · Hình thức tổ hợp từ và kết cấu câu 词的组合形式和句法结构', texts: [
{ id: 'g5-1', title: 'Khái quát về từ tổ 词组概说', kind: '语法', src: '（《汉语语法教程》Chương V, Tiết 1, tr.146–152）',
  p: [
    'Từ kết hợp với từ theo một quan hệ nhất định, biểu đạt ý phong phú hơn từ đơn, gọi là từ tổ (词组), còn gọi là đoản ngữ (短语).',
    '## 1. Ranh giới giữa từ và từ tổ',
    'Các tổ hợp như 树根、鱼头、鞋底、白菜、过节 khó phân định. Ba tiêu chí: ① Tính độc lập của thành phần: chỉ cần một thành phần không dùng độc lập được (từ tố không thành từ) thì thường là từ: 棍棒 là từ; 树根 thường được xem là từ tổ. ② Có xen từ khác vào được không: xen được thường là từ tổ (鱼头 → 鱼的头). ③ Ý nghĩa có phải phép cộng nghĩa thành phần không: 红花 “hoa màu đỏ” là từ tổ, nhưng 红花 tên vị thuốc là từ; 白菜 (cải thảo) là từ, 白纸 (giấy trắng) là từ tổ. Tổ hợp song âm tiết dễ được xem là từ.',
    'Việc phân ranh giới cần thiết vì từ là vật liệu có sẵn (như gạch ngói), ngữ pháp nghiên cứu quy luật sắp xếp từ thành câu; may mà phần lớn “từ” trong tiếng Hán đã xác định được.',
    '## 2. Cấu tạo từ tổ',
    'Từ đứng liền nhau chưa chắc thành từ tổ: trong 我们经常一起旅行, 我们经常 hay 经常一起 không phải từ tổ vì không có quan hệ kết cấu; 我们旅行、一起旅行、经常旅行 mới là từ tổ.',
    'Thường quan tâm từ tổ thực từ + thực từ: 中文和英文 (DT+DT)、研究问题 (ĐT+DT)、幸福生活 (TT+DT)、认真学习 (TT+ĐT)、同意参加 (ĐT+ĐT). Với hư từ, chỉ tính 从车站 (giới từ + DT) và 贵重的 (TT/ĐT + 的), vì chúng làm thành phần câu được (我刚从车站来；贵重的给你，一般的给我); còn 老师呢、去吧 chỉ là câu.',
    '## 3. Từ tổ tự do và từ tổ cố định',
    'Từ tổ tự do vô hạn: 电影演员、国产电影、看电影、拍电影… Từ tổ cố định (thành ngữ, quán ngữ): ① hình thức cố định (敲竹杠 không nói 敲木杠); ② nghĩa riêng, không cộng nghĩa (敲竹杠 = lợi dụng điểm yếu để bắt chẹt); ③ chức năng như một từ: như danh từ (风言风语、深情厚谊), động từ (拍马屁、报仇雪恨), tính từ (理直气壮), phó từ (千方百计、接二连三). Có loại nằm giữa: 伤脑筋 (không nói 伤脑袋).',
    'Phải nắm chức năng của thành ngữ. Lỗi thường gặp: *让他们风言风语吧 (风言风语 như danh từ → 听到一些风言风语); *千真万确值得研究 (千真万确 như tính từ, làm vị ngữ: 我的话千真万确); *用全心全意爱着 (全心全意 làm trạng ngữ: 全心全意为人民服务); *取长补短得像… (thành ngữ động từ thường không mang bổ ngữ 得).'
  ],
  zh: ['我们经常一起旅行。', '我刚从车站来。', '贵重的给你，一般的给我。', '我的话千真万确。', '我们要全心全意为人民服务。', '我听到了一些风言风语。', '这件事比较伤脑筋。'],
  notes: [['词组', 'cízǔ', 'từ tổ, cụm từ'], ['短语', 'duǎnyǔ', 'đoản ngữ'], ['语素', 'yǔsù', 'từ tố, hình vị'], ['自由词组', 'zìyóu cízǔ', 'từ tổ tự do'], ['固定词组', 'gùdìng cízǔ', 'từ tổ cố định'], ['成语', 'chéngyǔ', 'thành ngữ'], ['惯用语', 'guànyòngyǔ', 'quán dụng ngữ'], ['敲竹杠', 'qiāo zhúgàng', 'bắt chẹt, chặt chém'], ['风言风语', 'fēng yán fēng yǔ', 'lời đồn đại'], ['千真万确', 'qiān zhēn wàn què', 'hoàn toàn chính xác'], ['全心全意', 'quán xīn quán yì', 'toàn tâm toàn ý'], ['取长补短', 'qǔ cháng bǔ duǎn', 'lấy dài bù ngắn']],
  ex: [
    { t: 'tf', q: '【Cơ bản】Đúng hay sai?', items: [['Hai từ đứng liền nhau luôn tạo thành từ tổ.', false], ['白菜 là từ, 白纸 là từ tổ.', true], ['Từ tổ tự do là vô hạn, từ tổ cố định có hạn.', true], ['老师呢 là một từ tổ.', false], ['Từ tổ cố định có chức năng tương đương một từ.', true]] },
    { t: 'match', q: '【Trung bình】Nối thành ngữ với chức năng tương đương.', items: [['风言风语', 'như danh từ'], ['拍马屁', 'như động từ'], ['理直气壮', 'như tính từ'], ['千方百计', 'như phó từ (trạng ngữ)']] },
    { t: 'tf', q: '【Sách · 思考与练习 二】Nhận định đúng hay sai?', items: [
      ['汉语的词和词组根本区分不开。', false], ['词和词组合在一起，就构成了词组。', false], ['固定词组的作用相当于一个词。', true], ['自由词组是无限的，固定词组是有限的。', true], ['某种意义上说，句法结构是语法的核心。', true], ['根据语法意义，可以把词组分成名词词组、动词词组等。', false], ['形容词和形容词词组的语法功能完全一样。', false], ['词和词的组合具有层次性。', true], ['有歧义的词组进入具体的语言环境中以后，多数情况下会消除歧义。', true]] },
    { t: 'mc', q: '【Sách · 思考与练习 三】Là từ (词) hay từ tổ (词组)?', items: [['走出去', ['词', '词组'], 1], ['公共汽车', ['词', '词组'], 0], ['照相', ['词', '词组'], 0], ['有线电视', ['词', '词组'], 0], ['看完', ['词', '词组'], 1], ['照相机', ['词', '词组'], 0], ['奉献精神', ['词', '词组'], 1], ['看见', ['词', '词组'], 0], ['睡觉', ['词', '词组'], 0], ['看不起', ['词', '词组'], 1]] },
    { t: 'mc', q: '【Sách · 思考与练习 四】Từ tổ cố định hay tự do?', items: [['生活质量', ['cố định', 'tự do'], 1], ['实事求是', ['cố định', 'tự do'], 0], ['马不停蹄', ['cố định', 'tự do'], 0], ['马上解决', ['cố định', 'tự do'], 1], ['斤斤计较', ['cố định', 'tự do'], 0], ['计较得失', ['cố định', 'tự do'], 1], ['来往频繁', ['cố định', 'tự do'], 1], ['常来常往', ['cố định', 'tự do'], 0], ['看朋友', ['cố định', 'tự do'], 1], ['说笑话', ['cố định', 'tự do'], 1], ['打篮球', ['cố định', 'tự do'], 1]] },
    { t: 'open', q: '【Sách · 思考与练习 五 · Nâng cao】Nói chức năng của thành ngữ và đặt câu.', items: [
      ['三心二意', 'Tính từ tính (vị ngữ/trạng ngữ): 学习不能三心二意。'], ['风言风语', 'Danh từ tính: 别理那些风言风语。'], ['花言巧语', 'Danh từ tính: 不要相信他的花言巧语。'], ['一五一十', 'Phó từ tính (trạng ngữ): 他把事情一五一十地告诉了我。'], ['原原本本', 'Trạng ngữ: 请你原原本本地说一遍。'], ['乱七八糟', 'Tính từ tính: 房间里乱七八糟的。'], ['七上八下', 'Tính từ tính: 我心里七上八下的。'], ['千方百计', 'Phó từ tính: 我们要千方百计完成任务。']] }
  ],
  adv: {
    g: [['A 的 B (xen 的)', 'kiểm tra từ tổ: xen được → từ tổ', '鱼头 → 鱼的头'], ['听到 + 风言风语', 'thành ngữ danh từ tính làm tân ngữ', '我听到一些风言风语。'], ['Thành ngữ + 地 + V', 'thành ngữ phó từ tính làm trạng ngữ', '一五一十地说出来']],
    an: [['我们经常一起旅行。', '我们 | 经常一起旅行 (chủ vị); 经常 + 一起旅行; 一起 + 旅行 (trạng trung). 我们经常 không phải từ tổ.', 'Chúng tôi thường cùng nhau đi du lịch.']],
    v: [['马不停蹄', 'mǎ bù tíng tí', 'không ngừng nghỉ'], ['实事求是', 'shí shì qiú shì', 'thực sự cầu thị'], ['斤斤计较', 'jīnjīn jìjiào', 'so đo từng li'], ['接二连三', 'jiē èr lián sān', 'liên tiếp'], ['深情厚谊', 'shēnqíng hòuyì', 'tình sâu nghĩa nặng'], ['理直气壮', 'lǐ zhí qì zhuàng', 'lý lẽ hùng hồn']],
    w: [['Thành ngữ đúng chức năng', 'Chọn 5 thành ngữ đã học, mỗi thành ngữ viết một câu đúng vị trí ngữ pháp (vị ngữ, trạng ngữ, tân ngữ…).']]
  } },
{ id: 'g5-2', title: 'Kết cấu cú pháp 句法结构', kind: '语法', src: '（《汉语语法教程》Chương V, Tiết 2, tr.152–160）',
  p: [
    'Quan hệ ngữ pháp giữa các từ (ngang hàng, bổ nghĩa…) gọi là kết cấu cú pháp — hạt nhân của ngữ pháp, vì mọi cấp đơn vị đều dựa vào nó: quan hệ ngang hàng tạo từ (开关、大小), từ tổ (研究并解决), câu phức (我去了，他也去了).',
    '## 11 loại kết cấu và cách kiểm tra',
    '① Chủ vị 主谓: 大地震动、颜色鲜艳、全体参加 — hỏi “什么/谁 + 怎么样了?”.',
    '② Chính phụ: định trung 定中 (生活态度、美丽的景色、老师的朋友 — hỏi 什么/谁的/什么样的); trạng trung 状中 (积极工作、经常加班、非常健康、对人热情). Có 的 thường là định trung nhưng không tuyệt đối (积极的做好准备 thực ra phải là 地). Danh từ + động từ có thể là trạng trung: 原则同意、电话联系、义务帮助. Trước ĐT/TT là phó từ hoặc cụm giới từ → chắc chắn trạng trung.',
    'Hai động từ đi liền có 4 khả năng: liên động (前往调查、回来休息), động tân (主张退出、反对参加), ngang hàng (研究讨论 — thêm 并 được), trạng trung (监督执行、协商解决、合作完成).',
    '③ Động tân 动宾: 写信、学习汉语、喜欢跳舞 — kiểm tra “V 的是 O”: 反对弃权 → 反对的是弃权 ✓; 抢先占领 → *抢先的是占领 (đây là trạng trung).',
    '④ Động bổ 动补: 看完、洗不干净、穿得很好、来一趟、干净得很. Dấu hiệu: có 得; sau ĐT là 不/TT/cụm động lượng, thời lượng; ĐT đơn âm + ĐT đơn âm (震塌、打死、吵醒); ĐT đơn âm + ĐT song âm (跑岔气、看花眼).',
    '⑤ Ngang hàng 联合: 服装百货、亲戚和朋友、调查研究、美丽大方 — thêm 和、并、而 được.',
    '⑥ Phụ gia 附加: từ ngữ + trợ từ: 他的、进行着、高兴起来.',
    '⑦ Lặp lại 重叠: 事事、件件、看看、讨论讨论、高高兴兴.',
    '⑧ Đồng vị 同位: 首都北京、他们这些人、我的朋友小明 — hai thành phần chỉ cùng một đối tượng.',
    '⑨ Số lượng 数量: 一个、三次、这本、那些.',
    '⑩ Liên động 连动: 出去旅行、来工作、去商店买东西 — kiểm tra “先 V1 后 V2”; hai động tác cùng một chủ ngữ.',
    '⑪ Kiêm ngữ 兼语: 派他去 = 派他 (động tân) + 他去 (chủ vị) — hai động từ khác chủ ngữ.',
    '7 loại đầu dùng cấu tạo cả từ và từ tổ; 4 loại sau (đồng vị, số lượng, liên động, kiêm ngữ) chỉ cấu tạo từ tổ.'
  ],
  zh: ['大地震动了。', '这是老师的朋友。', '他们对人很热情。', '学校原则同意了我们的计划。', '他喜欢跳舞。', '这件衣服洗不干净。', '首都北京是一座古老的城市。', '我们出去旅行吧。', '公司派他去上海。', '我们要研究并解决这个问题。'],
  notes: [['句法结构', 'jùfǎ jiégòu', 'kết cấu cú pháp'], ['主谓', 'zhǔwèi', 'chủ vị'], ['偏正', 'piānzhèng', 'chính phụ'], ['定中', 'dìngzhōng', 'định trung'], ['状中', 'zhuàngzhōng', 'trạng trung'], ['动宾', 'dòngbīn', 'động tân'], ['动补', 'dòngbǔ', 'động bổ'], ['联合/并列', 'liánhé / bìngliè', 'ngang hàng'], ['附加', 'fùjiā', 'phụ gia'], ['同位', 'tóngwèi', 'đồng vị'], ['连动', 'liándòng', 'liên động'], ['兼语', 'jiānyǔ', 'kiêm ngữ']],
  ex: [
    { t: 'match', q: '【Cơ bản】Nối từ tổ với kết cấu.', items: [['颜色鲜艳', 'chủ vị'], ['美丽的景色', 'định trung'], ['认真研究', 'trạng trung'], ['学习汉语', 'động tân'], ['洗干净', 'động bổ'], ['首都北京', 'đồng vị'], ['派他去', 'kiêm ngữ'], ['回来休息', 'liên động']] },
    { t: 'mc', q: '【Sách · 思考与练习 六】Chỉ ra quan hệ kết cấu.', items: [
      ['文化水平', ['主谓', '定中', '动宾', '状中'], 1], ['提高水平', ['主谓', '定中', '动宾', '状中'], 2], ['水平很高', ['主谓', '定中', '动宾', '状中'], 0],
      ['发展经济', ['主谓', '定中', '动宾', '状中'], 2], ['发展很快', ['主谓', '动补', '动宾', '状中'], 0], ['迅速发展', ['主谓', '定中', '动宾', '状中'], 3],
      ['美丽大方', ['并列', '定中', '动宾', '状中'], 0], ['美丽景色', ['并列', '定中', '动宾', '状中'], 1], ['极其美丽', ['并列', '定中', '动宾', '状中'], 3],
      ['牺牲精神', ['主谓', '定中', '动宾', '状中'], 1], ['精神集中', ['主谓', '定中', '动宾', '状中'], 0], ['原则同意', ['主谓', '定中', '动宾', '状中'], 3],
      ['坚持原则', ['主谓', '定中', '动宾', '状中'], 2], ['公平原则', ['主谓', '定中', '动宾', '状中'], 1], ['繁荣市场', ['主谓', '定中', '动宾', '并列'], 2],
      ['繁荣富强', ['主谓', '定中', '动宾', '并列'], 3], ['经济繁荣', ['主谓', '定中', '动宾', '并列'], 0]] },
    { t: 'mc', q: '【Sách · 思考与练习 八】Tổ hợp “động + động” thuộc quan hệ nào?', items: [
      ['感觉疲劳', ['动宾', '连动', '并列', '状中'], 0], ['喜欢学习', ['动宾', '连动', '并列', '状中'], 0], ['学习开车', ['动宾', '连动', '并列', '状中'], 0], ['回来上班', ['动宾', '连动', '并列', '状中'], 1], ['研究解决', ['动宾', '连动', '并列', '状中'], 2],
      ['提前出发', ['动宾', '连动', '并列', '状中'], 3], ['同意解决', ['动宾', '连动', '并列', '状中'], 0], ['协商解决', ['动宾', '连动', '并列', '状中'], 3], ['出去调查', ['动宾', '连动', '并列', '状中'], 1], ['希望退休', ['动宾', '连动', '并列', '状中'], 0]] },
    { t: 'tf', q: '【Trung bình】Phép kiểm tra “V 的是 O” có thành công không? (✓ → động tân)', items: [['写信 → 写的是信', true], ['反对弃权 → 反对的是弃权', true], ['抢先占领 → 抢先的是占领', false], ['喜欢跳舞 → 喜欢的是跳舞', true], ['协商解决 → 协商的是解决', false]] },
    { t: 'open', q: '【Sách · 思考与练习 七 · Nâng cao】Mỗi quan hệ viết 3 từ tổ (tham khảo).', items: [['并列', '老师和学生、聪明美丽、调查研究'], ['定中', '中国文化、新的生活、我的书'], ['状中', '认真学习、非常好、在家休息'], ['主谓', '天气晴朗、身体健康、大家同意'], ['动补', '听懂、洗干净、跑得很快'], ['动宾', '看电影、学习汉语、喜欢音乐'], ['数量', '一本、三次、这些'], ['附加', '我的、看着、热闹起来'], ['重叠', '看看、高高兴兴、天天'], ['同位', '首都北京、我们大家、他们俩']] }
  ],
  adv: {
    g: [['V 的是 O', 'kiểm tra quan hệ động tân', '学习的是汉语'], ['先 V1 后 V2', 'kiểm tra liên động', '先回来后报告'], ['V1 + 并 + V2', 'kiểm tra ngang hàng', '研究并讨论'], ['N + V (trạng trung)', 'danh từ làm trạng ngữ chỉ phương thức', '电话联系 / 原则同意']],
    an: [['公司派他去上海开会。', '派他 (động tân) + 他去上海 (chủ vị) → kiêm ngữ; 去上海开会 → liên động', 'Công ty cử anh ấy đi Thượng Hải họp.']],
    v: [['抢先', 'qiǎngxiān', 'giành trước'], ['弃权', 'qìquán', 'bỏ quyền'], ['协商', 'xiéshāng', 'hiệp thương'], ['监督', 'jiāndū', 'giám sát'], ['岔气', 'chàqì', 'sóc hông'], ['义务', 'yìwù', 'nghĩa vụ, tự nguyện']],
    w: [['Phân loại', 'Lấy một đoạn văn 5 câu trong sách Đọc 3, tìm và gọi tên ít nhất 8 từ tổ theo 11 loại kết cấu.']]
  } },
{ id: 'g5-3', title: 'Loại hình chức năng của từ tổ 词组的功能类型', kind: '语法', src: '（《汉语语法教程》Chương V, Tiết 3, tr.160–165）',
  p: [
    'Từ tổ cũng là đơn vị cấu tạo câu nên cũng phân loại theo chức năng ngữ pháp (làm thành phần gì, kết hợp với gì).',
    '## 1. Từ tổ danh từ',
    '水果、饮料和点心 (ngang hàng)、复杂的问题 (định trung)、三本 (số lượng)、红的 (phụ gia)、首都北京 (đồng vị)、深情厚谊 (cố định). Làm chủ ngữ, tân ngữ, định ngữ; một số làm vị ngữ được trong kiểu câu nhất định (danh từ đơn thường không).',
    '## 2. Từ tổ động từ',
    '研究解决、回答问题、认真思考、回来得很及时、检查检查、访问过、进去参观、叫他来、报仇雪恨、拍马屁. Chủ yếu làm vị ngữ; làm thành phần khác thì bị hạn chế: 派他来的那个经理已经辞职了 (kiêm ngữ làm định ngữ)；进去参观的人太多了；我笑疼了肚子 (động bổ mang tân ngữ)；乐观地生活有益健康 (trạng trung làm chủ ngữ). 拍马屁 dùng như động từ ly hợp: 拍他的马屁.',
    '## 3. Từ tổ tính từ',
    '雄伟而庄重、非常漂亮、漂亮极了、认认真真、花枝招展. Khác tính từ: ① tính từ đơn khó làm vị ngữ tự do, từ tổ thì được: *这个孩子调皮 → 这个孩子很调皮/调皮极了; *纪念碑高大 → 高大而雄伟. ② Tính từ đơn có thể trực tiếp làm trạng ngữ (认真讨论), từ tổ tính từ phải thêm 地 (非常认真地讨论).',
    'Tiêu chuẩn: làm được định ngữ và vị ngữ + nhận bổ nghĩa của phó từ trình độ. Theo đó cũng là từ tổ tính từ: 有/没有 + N (有水平 → 老王很有水平); 会/能 + V (会办事 → 他很会办事); một số ĐT + N (费工夫、伤脑筋 → 这个菜很费工夫).',
    'Có loại chỉ làm định ngữ (như tính từ phi vị): 高层次人才、大容量的洗衣机、大规格、大马力、高含量.',
    '## 4. Từ tổ phó từ',
    'Chỉ làm trạng ngữ: phó từ lặp 非常非常、特别特别 (那里的景色非常非常漂亮); 大幅度、多渠道、多角度、多途径、高速度、高效率 (据说今年要大幅度提高工资；学校应该多渠道筹集办学经费); thành ngữ 千方百计、无论如何、想方设法.',
    '## 5. Từ tổ giới từ',
    'Chủ yếu làm trạng ngữ, nhưng còn làm định ngữ (一篇关于他的文章) và bổ ngữ (推倒在地上), nên tách thành loại riêng.',
    'Tóm lại: từ tổ cùng loại chức năng với từ thì chức năng cơ bản giống nhau, nhưng không hoàn toàn trùng khớp vì không cùng cấp đơn vị.'
  ],
  zh: ['派他来的那个经理已经辞职了。', '进去参观的人太多了。', '我笑疼了肚子。', '乐观地生活有益健康。', '这个孩子调皮极了。', '委员会非常认真地讨论了这个问题。', '老王很有水平。', '他刚买了一台大容量的洗衣机。', '据说今年要大幅度提高工资。', '我看了一篇关于他的文章。'],
  notes: [['名词性词组', 'míngcíxìng cízǔ', 'từ tổ danh từ'], ['动词性词组', 'dòngcíxìng cízǔ', 'từ tổ động từ'], ['形容词性词组', 'xíngróngcíxìng cízǔ', 'từ tổ tính từ'], ['副词性词组', 'fùcíxìng cízǔ', 'từ tổ phó từ'], ['介词词组', 'jiècí cízǔ', 'từ tổ giới từ'], ['雄伟', 'xióngwěi', 'hùng vĩ'], ['庄重', 'zhuāngzhòng', 'trang nghiêm'], ['花枝招展', 'huāzhī zhāozhǎn', 'ăn mặc lộng lẫy'], ['大幅度', 'dà fúdù', 'với biên độ lớn'], ['渠道', 'qúdào', 'kênh, con đường'], ['容量', 'róngliàng', 'dung lượng'], ['费工夫', 'fèi gōngfu', 'tốn công']],
  ex: [
    { t: 'mc', q: '【Cơ bản】Từ tổ thuộc loại chức năng nào?', items: [
      ['复杂的问题', ['danh từ', 'động từ', 'tính từ', 'phó từ'], 0], ['回答问题', ['danh từ', 'động từ', 'tính từ', 'phó từ'], 1], ['漂亮极了', ['danh từ', 'động từ', 'tính từ', 'phó từ'], 2], ['千方百计', ['danh từ', 'động từ', 'tính từ', 'phó từ'], 3], ['首都北京', ['danh từ', 'động từ', 'tính từ', 'phó từ'], 0], ['很有水平', ['danh từ', 'động từ', 'tính từ', 'phó từ'], 2], ['多渠道', ['danh từ', 'động từ', 'tính từ', 'phó từ'], 3], ['高层次', ['danh từ', 'động từ', 'tính từ', 'phó từ'], 2]] },
    { t: 'tf', q: '【Trung bình】Câu nào đúng?', items: [['这个孩子调皮。', false], ['这个孩子很调皮。', true], ['人民英雄纪念碑高大而雄伟。', true], ['委员会非常认真讨论了这个问题。', false], ['委员会非常认真地讨论了这个问题。', true], ['这个菜很费工夫。', true], ['高层次是我们需要的。', false]] },
    { t: 'fill', q: '【Trung bình】Điền từ tổ thích hợp: 大幅度 / 多渠道 / 大容量 / 有水平.', items: [['据说今年要___提高工资。', '大幅度'], ['学校应该___筹集办学经费。', '多渠道'], ['他刚买了一台___的洗衣机。', '大容量'], ['老王很___。', '有水平']] },
    { t: 'open', q: '【Nâng cao】Sửa câu và giải thích theo chức năng từ tổ.', items: [['人民英雄纪念碑高大。', '→ 高大而雄伟 / 很高大。Tính từ đơn khó tự do làm vị ngữ.'], ['他非常认真学习。', '→ 他非常认真地学习。Từ tổ tính từ làm trạng ngữ cần 地.'], ['这台洗衣机是大容量。', '→ 这是一台大容量的洗衣机 / 这台洗衣机容量很大。大容量 chỉ làm định ngữ.']] }
  ],
  adv: {
    g: [['很 + 有/会/能/费/伤 + …', 'từ tổ tính từ nhận phó từ trình độ', '他很会办事。'], ['Cụm tính từ + 地 + V', 'trạng ngữ phải có 地', '非常认真地讨论'], ['大/高/多 + N (định ngữ)', 'từ tổ chỉ làm định ngữ', '高层次人才'], ['大幅度/多渠道 + V', 'từ tổ phó từ làm trạng ngữ', '大幅度提高']],
    an: [['乐观地生活有益健康。', 'Chủ ngữ: 乐观地生活 (từ tổ động từ, trạng trung); vị ngữ: 有益健康', 'Sống lạc quan có lợi cho sức khỏe.']],
    v: [['辞职', 'cízhí', 'từ chức'], ['筹集', 'chóují', 'gây quỹ, huy động'], ['经费', 'jīngfèi', 'kinh phí'], ['马力', 'mǎlì', 'mã lực'], ['含量', 'hánliàng', 'hàm lượng'], ['想方设法', 'xiǎng fāng shè fǎ', 'tìm mọi cách']],
    w: [['Quảng cáo sản phẩm', 'Viết quảng cáo 50–70 chữ cho một máy giặt/điện thoại, dùng 大容量、高效率、多功能、很有特色.']]
  } },
{ id: 'g5-4', title: 'Tầng thứ và hiện tượng đa nghĩa (歧义) của tổ hợp 词组的层次与歧义', kind: '语法', src: '（《汉语语法教程》Chương V, Tiết 4, tr.166–177）',
  p: [
    '## 1. Tính tầng thứ và phân tích tầng thứ',
    'Từ tổ kết hợp theo tầng, không xâu chuỗi tuyến tính: 一个二十几岁的年轻姑娘 = [一个] + [[二十几岁的] + [年轻姑娘]] — gồm 3 tầng.',
    'Hai thành phần kết hợp thành một thể kết cấu phải: ① có nghĩa; ② có quan hệ kết cấu cú pháp; ③ phù hợp nghĩa toàn cụm lớn. Trong 那篇关于定语问题的文章: 定语 kết hợp với 问题 trước, rồi 关于 + 定语问题 (không phải 关于 + 定语).',
    'Hai thành phần trực tiếp kết hợp gọi là thành phần trực tiếp (直接成分); phương pháp tách lần lượt thành phần trực tiếp từng tầng gọi là phân tích tầng thứ (层次分析法). Thường vừa chia tầng vừa ghi quan hệ: 我们认识的朋友 → [我们认识的] định + [朋友] trung; [我们认识] + 的 phụ gia; [我们] chủ + [认识] vị.',
    '## 2. Hiện tượng đa nghĩa (歧义)',
    'Loại a — trùng hai kết cấu: 学习文件 (định trung: “văn kiện học tập” / động tân: “học văn kiện”); 出租汽车 (xe taxi / cho thuê ô tô). Thay danh từ khác thì hết đa nghĩa: 出租电脑、学习汉语 chỉ là động tân.',
    'Loại b — tầng thứ khác nhau: 热爱人民的总理 = [热爱人民]的总理 (vị thủ tướng yêu dân) / 热爱[人民的总理] (yêu thủ tướng của nhân dân); 咬死了猎人的狗 = [咬死了猎人]的狗 (con chó cắn chết thợ săn) / 咬死了[猎人的狗] (cắn chết con chó của thợ săn).',
    'Phần lớn đa nghĩa tự mất khi vào câu cụ thể, nhưng có câu vẫn đa nghĩa: 我在路上遇到了两个单位的朋友 (2 người bạn / bạn của 2 đơn vị). Để rõ: 遇到了两个本单位的朋友 (2 người) hoặc 遇到了那两个单位的朋友 (2 đơn vị). Khi nói, viết cần dùng thủ pháp ngữ pháp tránh câu đa nghĩa.',
    '## Điểm chính của chương V',
    '1. Từ và từ tổ có ranh giới tương đối rõ. 2. Từ tổ chia thành tự do và cố định. 3. Quan hệ ngữ pháp giữa các từ là kết cấu cú pháp (chủ vị, động tân, động bổ…). 4. Theo chức năng chia thành từ tổ danh từ, động từ, tính từ… 5. Tổ hợp từ có tính tầng thứ; tầng thứ khác nhau sinh ra đa nghĩa.'
  ],
  zh: ['一个二十几岁的年轻姑娘', '我们认识的朋友', '刚刚发的学习文件。', '一会儿我们学习文件。', '我们坐出租汽车去。', '他是一位热爱人民的总理。', '这只狼咬死了猎人的狗。', '我在路上遇到了两个本单位的朋友。'],
  notes: [['层次', 'céngcì', 'tầng thứ'], ['直接成分', 'zhíjiē chéngfèn', 'thành phần trực tiếp'], ['层次分析法', 'céngcì fēnxīfǎ', 'phương pháp phân tích tầng thứ'], ['歧义', 'qíyì', 'đa nghĩa, nghĩa mơ hồ'], ['消除', 'xiāochú', 'loại bỏ'], ['出租汽车', 'chūzū qìchē', 'xe taxi; cho thuê ô tô'], ['猎人', 'lièrén', 'thợ săn'], ['总理', 'zǒnglǐ', 'thủ tướng'], ['单位', 'dānwèi', 'đơn vị, cơ quan']],
  ex: [
    { t: 'match', q: '【Cơ bản】Nối cách hiểu với cấu trúc.', items: [['出租汽车 = xe taxi', 'định trung'], ['出租汽车 = cho thuê ô tô', 'động tân'], ['[热爱人民]的总理', 'vị thủ tướng yêu dân'], ['热爱[人民的总理]', 'yêu thủ tướng của nhân dân']] },
    { t: 'order', q: '【Trung bình】Sắp xếp thành cụm từ đúng.', items: [['一个', '二十几岁的', '年轻', '姑娘'], ['那篇', '关于', '定语问题的', '文章'], ['我', '遇到了', '两个', '本单位的', '朋友。']] },
    { t: 'tf', q: '【Sách · 思考与练习 十】Từ tổ nào có đa nghĩa (歧义)?', items: [['解决问题的方法', false], ['欣赏文章的技巧', true], ['两位老师的风格', false], ['两个孩子的父亲', true], ['三个商店的职工', true], ['研究方法', true], ['研究问题', false], ['学习技巧', true], ['学习技术', false]] },
    { t: 'open', q: '【Sách · 思考与练习 十、十一 · Nâng cao】Nêu hai nghĩa và đặt câu để phân biệt.', items: [
      ['两个孩子的父亲', '[两个孩子]的父亲: 他是两个孩子的父亲 (bố của hai đứa trẻ) / 两个[孩子的父亲]: 来了两个孩子的父亲 (hai ông bố).'],
      ['研究方法', 'Định trung: 这是一种新的研究方法。/ Động tân: 我们正在研究方法。'],
      ['批评我的朋友', '[批评我]的朋友: người bạn phê bình tôi / 批评[我的朋友]: phê bình bạn của tôi.'],
      ['研究计划', 'Định trung: 研究计划已经通过了。/ Động tân: 明天我们研究计划。'],
      ['一个企业的领导', '[一个企业]的领导 / 一个[企业的领导] (một vị lãnh đạo).'],
      ['我和他的老师', '[我和他]的老师 (thầy của cả hai) / 我 和 [他的老师] (tôi và thầy của anh ấy).'],
      ['中国医学研究', '[中国医学]研究 (nghiên cứu y học TQ) / 中国[医学研究] (nghiên cứu y học của TQ).']] },
    { t: 'open', q: '【Sách · 思考与练习 九】Phân tích tầng thứ và ghi quan hệ kết cấu (tham khảo).', items: [
      ['我们工作过的地方', '[我们工作过的] định + [地方] trung → [我们工作过] + 的 (phụ gia) → [我们] chủ + [工作过] vị → 工作 + 过 (phụ gia).'],
      ['提高用汉语写作的能力', '提高 động + [用汉语写作的能力] tân → [用汉语写作的] định + 能力 → [用汉语] trạng + 写作.'],
      ['已经做完的练习', '[已经做完的] định + 练习 → 已经 trạng + 做完 → 做 + 完 (động bổ).'],
      ['他们经常研究问题', '他们 chủ + [经常研究问题] vị → 经常 trạng + 研究问题 → 研究 động + 问题 tân.'],
      ['一个刚毕业的小伙子', '一个 (số lượng) định + [刚毕业的小伙子] → [刚毕业的] định + 小伙子 → 刚 trạng + 毕业.'],
      ['我和妈妈的一张照片', '[我和妈妈的] định + [一张照片] → [我和妈妈] (ngang hàng) + 的; 一张 định + 照片.']] }
  ],
  adv: {
    g: [['两个 + 本单位的 + N', 'thêm 本/那 để tránh đa nghĩa', '两个本单位的朋友'], ['那 + 两个 + N 的 + N', 'cố định tầng thứ', '那两个单位的朋友'], ['[A 的] + B', 'định ngữ chứa 的 kết hợp sau cùng', '[我们认识的]朋友']],
    an: [['这只狼咬死了猎人的狗。', '咬死了 + [猎人的狗] → động bổ + tân ngữ; nếu là 一只咬死了猎人的狗 thì [咬死了猎人]的 + 狗 (định trung)', 'Con sói này cắn chết con chó của thợ săn.']],
    v: [['风格', 'fēnggé', 'phong cách'], ['欣赏', 'xīnshǎng', 'thưởng thức'], ['技巧', 'jìqiǎo', 'kỹ xảo'], ['职工', 'zhígōng', 'công nhân viên'], ['领导', 'lǐngdǎo', 'lãnh đạo'], ['模糊', 'móhu', 'mơ hồ']],
    s: [['Hiểu theo hai cách', 'Đọc to 学习文件、出租汽车、研究计划, mỗi cụm đặt hai câu nói theo hai nghĩa; bạn nghe phải đoán bạn đang dùng nghĩa nào.']],
    w: [['Tránh đa nghĩa', 'Viết lại cho rõ nghĩa: 我在路上遇到了两个单位的朋友 (theo cả hai nghĩa); 我和他的老师来了.']]
  } }
] },
{ n: 6, title: 'Chương VI · Câu và thành phần câu (I) 句子和句子成分（一）', texts: [
{ id: 'g6-1', title: 'Khái quát về câu 句子概说', kind: '语法', src: '（《汉语语法教程》Chương VI, Tiết 1, tr.178–186）',
  p: [
    '## 1. Định nghĩa câu',
    'Câu là đơn vị sử dụng trong giao tiếp, biểu đạt một ý trọn vẹn, hoàn thành một nhiệm vụ giao tiếp; còn từ và từ tổ là đơn vị kết cấu (vật liệu). “我经常……” chưa thành câu; “我经常看电影。” mới là câu. Hình thức câu có thể không hoàn chỉnh: 甲：你们俩谁去？乙：我。/ (bỗng hét lên) 火！ — vẫn là câu vì đã hoàn thành giao tiếp trong ngữ cảnh.',
    'Câu luôn có ngữ điệu; cùng tổ hợp từ, ngữ điệu khác thì ý khác: 你来。(trần thuật) / 你来？(nghi vấn) / 你来！(mệnh lệnh). Từ/từ tổ như 也、非常、从、离北京、把这件事 không thành câu nếu đứng riêng; vào hội thoại mới thành câu: 乙：也可以。/ 乙：离北京最近。 Ví như từ là nguyên liệu, câu là món ăn đã nấu.',
    '## 2. Phân loại câu',
    '① Theo đơn vị cấu thành: câu đơn (我从来不看这种书。) – câu phức (我从来不看这种书，所以我对这种书没有评价。). ② Theo ngữ khí: trần thuật, nghi vấn, cảm thán, cầu khiến. ③ Theo tính hoàn chỉnh: câu chủ vị (他们正在上课。) – câu phi chủ vị (下雨了。/ 来！/ 火！), loại sau chủ yếu trong khẩu ngữ.',
    '## 3. Câu và từ tổ — điều kiện thành câu',
    'Từ tổ thêm ngữ điệu chưa chắc thành câu: *孩子病。*小明健康。 → 孩子病了。小明很健康。; *我买了书。 → 我买书了。/ 我买了一本书。 Các thành phần giúp “hoàn thành câu”:',
    '① Ngữ khí: 了 cuối câu; phó từ ngữ khí: 小明也许来。衣服的确漂亮。 ② Tình thái (trợ động từ): 他们应该出发。观众会笑。爸爸可能生气。 ③ Phủ định 不、没(有)、别: 衣服不洗。大家别去。 ④ Trợ từ động thái và phó từ thời gian: 了、着、过; 起来、下去、上; 将、要、在: 大雨下着。飞机在飞行。大桥要塌。 ⑤ Từ chỉ trình độ (很) và cụm số lượng.',
    'Nói “小孩儿哭” người nghe không rõ ý: 小孩儿哭了 / 会哭 / 要哭 / 哭着? Phải chọn thành phần hoàn thành câu theo nhu cầu diễn đạt.'
  ],
  zh: ['我经常看电影。', '你们俩谁去？——我。', '你来。你来？你来！', '这里离哪儿最近？——离北京最近。', '我从来不看这种书，所以我对这种书没有评价。', '孩子病了。', '小明很健康。', '我买了一本书。', '他们应该出发了。', '飞机在飞行。'],
  notes: [['句子', 'jùzi', 'câu'], ['使用单位', 'shǐyòng dānwèi', 'đơn vị sử dụng'], ['结构单位', 'jiégòu dānwèi', 'đơn vị kết cấu'], ['语调', 'yǔdiào', 'ngữ điệu'], ['单句', 'dānjù', 'câu đơn'], ['复句', 'fùjù', 'câu phức'], ['主谓句', 'zhǔwèijù', 'câu chủ vị'], ['非主谓句', 'fēizhǔwèijù', 'câu phi chủ vị'], ['成句', 'chéngjù', 'thành câu'], ['陈述句', 'chénshùjù', 'câu trần thuật'], ['祈使句', 'qíshǐjù', 'câu cầu khiến'], ['感叹句', 'gǎntànjù', 'câu cảm thán']],
  ex: [
    { t: 'tf', q: '【Cơ bản】Đúng hay sai?', items: [['Câu là đơn vị sử dụng, từ tổ là đơn vị kết cấu.', true], ['Câu nào cũng phải có đủ chủ ngữ và vị ngữ.', false], ['Cùng tổ hợp từ, ngữ điệu khác thì ý khác.', true], ['下雨了 là câu phi chủ vị.', true], ['Câu phi chủ vị thường gặp trong văn viết hơn khẩu ngữ.', false]] },
    { t: 'mc', q: '【Cơ bản】Câu thuộc loại nào?', items: [['我从来不看这种书，所以我对这种书没有评价。', ['câu đơn', 'câu phức'], 1], ['他们正在上课。', ['câu chủ vị', 'câu phi chủ vị'], 0], ['来！', ['câu chủ vị', 'câu phi chủ vị'], 1], ['你来？', ['trần thuật', 'nghi vấn', 'cầu khiến'], 1], ['你来！', ['trần thuật', 'nghi vấn', 'cầu khiến'], 2]] },
    { t: 'fill', q: '【Trung bình】Thêm thành phần hoàn thành câu (了/很/会/不/着/一本…).', items: [['孩子病___。', '了'], ['小明___健康。', '很|非常'], ['我买了___书。', '一本|两本|三本'], ['观众___笑。', '会|要'], ['大雨下___。', '着|了'], ['衣服___洗。', '不|没']] },
    { t: 'tf', q: '【Sách · 思考与练习 二】Đúng hay sai?', items: [
      ['句子是语言中的一种使用单位。', true], ['任何一个词组只要带上语调就成为了句子。', false], ['作为一个句子，一定应该是主语谓语齐全的。', false], ['可以从不同的角度给句子分类。', true], ['句子的句法结构关系和语义结构关系都是一致的。', false], ['缺少定语和状语，不影响句子的成立。', false], ['动词和形容词可以自由充当主语。', false], ['汉语的主语一般要求是定指的。', true]] },
    { t: 'tf', q: '【Sách · 思考与练习 三】Tổ hợp nào đứng độc lập thành câu được?', items: [['他们来', false], ['你找一找', true], ['房子塌', false], ['问题解决', false], ['思想解放', false], ['已经出去', false], ['他经常来', true], ['我买了一双鞋', true], ['我看了书', false], ['钱包丢了', true]] },
    { t: 'open', q: '【Nâng cao】Sửa thành câu hoàn chỉnh theo 4 cách khác nhau.', items: [['小孩儿哭', '小孩儿哭了。/ 小孩儿会哭。/ 小孩儿要哭了。/ 小孩儿哭着呢。'], ['我看了书', '我看书了。/ 我看了一本书。/ 我看了那本书。'], ['颜色漂亮', '颜色很漂亮。/ 颜色真漂亮。/ 颜色漂亮极了。']] }
  ],
  adv: {
    g: [['V + 了 + số lượng + N', 'câu hoàn thành phải có số lượng', '我买了一本书。'], ['V + O + 了', 'việc đã xảy ra', '我买书了。'], ['很/非常 + Adj', 'tính từ làm vị ngữ', '小明很健康。'], ['会/要/应该 + V', 'tình thái hoàn thành câu', '观众会笑。']],
    an: [['甲：这里离哪儿最近？乙：离北京最近。', 'Câu trả lời lược chủ ngữ 这里; cụm giới từ 离北京 + 最近 làm câu nhờ ngữ cảnh', 'Đây gần đâu nhất? – Gần Bắc Kinh nhất.']],
    v: [['评价', 'píngjià', 'đánh giá'], ['塌', 'tā', 'sập'], ['完整', 'wánzhěng', 'hoàn chỉnh'], ['交际', 'jiāojì', 'giao tiếp'], ['任务', 'rènwu', 'nhiệm vụ']],
    s: [['Ngữ điệu', 'Đọc 你来、他走了、明天考试 với 3 ngữ điệu trần thuật, nghi vấn, mệnh lệnh/cảm thán.']]
  } },
{ id: 'g6-2', title: 'Cấu thành và phân tích câu 句子的构成和分析', kind: '语法', src: '（《汉语语法教程》Chương VI, Tiết 2, tr.186–196）',
  p: [
    '## 1. Quan hệ cú pháp: thành phần câu',
    'Câu do các bộ phận có quan hệ kết cấu tạo thành: 我们 (chủ ngữ) + 出发了 (vị ngữ). Ngoài chủ ngữ, vị ngữ còn có: tân ngữ (đối tượng của động từ), định ngữ (bổ nghĩa cho trung tâm danh từ tính), trạng ngữ (bổ nghĩa cho trung tâm động/tính từ tính), bổ ngữ (bổ sung cho động/tính từ).',
    'Các khuôn câu: CN–VN (他们来了); CN–ĐT–TN (我们学习中文); ĐN+CN–ĐT–ĐN+TN (我弟弟交了一个女朋友); CN–TrN–ĐT (孩子们经常来); CN–ĐT–BN (我们来晚了). Đầy đủ: (这位)同学[也]听<清楚>了(这句话的)含义.',
    '## 2. Quan hệ ngữ nghĩa',
    'Xoay quanh động tác: chủ thể chủ động – động tác – khách thể bị động; ngoài ra thời gian (我们明天去), công cụ (我用电脑写文章), phương hướng (你往前走), nơi chốn, kết quả, phương thức… Hai tầng không phải lúc nào cũng trùng: 我对他进行了批评 — khách thể 他 nằm ở trạng ngữ, động tác 批评 lại làm tân ngữ của động từ hình thức 进行.',
    '## 3. Mục đích và phương pháp phân tích câu',
    'Phân tích câu = tìm thành phần câu và quan hệ giữa chúng, giúp hiểu câu phức tạp: 小说极为精彩地刻画了这种因为找到了梦所以失去了梦的痛苦。 → nòng cốt 小说刻画了痛苦; [极为精彩地] trạng ngữ; (这种)(因为找到了梦所以失去了梦的) định ngữ.',
    'Ký hiệu: ‖ tách chủ – vị; ( ) định ngữ; [ ] trạng ngữ; 〈 〉 bổ ngữ; gạch dưới động từ vị ngữ và tân ngữ. Ví dụ: (我的)叔叔 ‖ [昨天][给我]寄〈来〉(一个)包裹。 Nòng cốt: 叔叔 – 寄 – 包裹. Tầng 1 là chủ – vị; tân ngữ, trạng ngữ, bổ ngữ nằm trong vị ngữ; định ngữ nằm trong chủ ngữ, tân ngữ.',
    'Định ngữ, trạng ngữ thường là thứ yếu ((我的)照相机不能用了), nhưng có khi bắt buộc: 大家的关心使我非常感动；他们的献身精神深刻教育了我；我真没想到您这么聪明；他正在看书，不要打扰他。'
  ],
  zh: ['我们出发了。', '我们学习中文。', '我弟弟交了一个女朋友。', '孩子们经常来。', '我们来晚了。', '我用电脑写文章。', '我对他进行了批评。', '我的叔叔昨天给我寄来一个包裹。', '大家的关心使我非常感动。'],
  notes: [['句子成分', 'jùzi chéngfèn', 'thành phần câu'], ['主语', 'zhǔyǔ', 'chủ ngữ'], ['谓语', 'wèiyǔ', 'vị ngữ'], ['宾语', 'bīnyǔ', 'tân ngữ'], ['定语', 'dìngyǔ', 'định ngữ'], ['状语', 'zhuàngyǔ', 'trạng ngữ'], ['补语', 'bǔyǔ', 'bổ ngữ'], ['中心语', 'zhōngxīnyǔ', 'trung tâm ngữ'], ['施事', 'shīshì', 'chủ thể (tác nhân)'], ['受事', 'shòushì', 'khách thể (đối tượng)'], ['语义关系', 'yǔyì guānxì', 'quan hệ ngữ nghĩa'], ['包裹', 'bāoguǒ', 'bưu kiện']],
  ex: [
    { t: 'match', q: '【Cơ bản】Nối thành phần câu với vai trò.', items: [['主语', 'đối tượng được trần thuật'], ['谓语', 'trần thuật cho chủ ngữ'], ['宾语', 'đối tượng của động từ'], ['定语', 'bổ nghĩa cho danh từ'], ['状语', 'bổ nghĩa cho động/tính từ'], ['补语', 'bổ sung sau động/tính từ']] },
    { t: 'mc', q: '【Cơ bản】Từ in đậm là thành phần gì?', items: [
      ['【我的】叔叔昨天给我寄来一个包裹。', ['định ngữ', 'trạng ngữ', 'bổ ngữ', 'tân ngữ'], 0], ['我的叔叔【昨天】给我寄来一个包裹。', ['định ngữ', 'trạng ngữ', 'bổ ngữ', 'tân ngữ'], 1], ['我的叔叔昨天给我寄【来】一个包裹。', ['định ngữ', 'trạng ngữ', 'bổ ngữ', 'tân ngữ'], 2], ['我的叔叔昨天给我寄来一个【包裹】。', ['định ngữ', 'trạng ngữ', 'bổ ngữ', 'tân ngữ'], 3], ['我们来【晚】了。', ['định ngữ', 'trạng ngữ', 'bổ ngữ', 'tân ngữ'], 2]] },
    { t: 'mc', q: '【Trung bình】Quan hệ ngữ nghĩa của từ in đậm với động từ?', items: [['我【用电脑】写文章。', ['công cụ', 'thời gian', 'phương hướng', 'khách thể'], 0], ['我们【明天】去。', ['công cụ', 'thời gian', 'phương hướng', 'khách thể'], 1], ['你【往前】走。', ['công cụ', 'thời gian', 'phương hướng', 'khách thể'], 2], ['我对【他】进行了批评。', ['chủ thể', 'khách thể', 'công cụ', 'kết quả'], 1]] },
    { t: 'open', q: '【Nâng cao】Tìm nòng cốt (chủ – động – tân) của câu.', items: [['小说极为精彩地刻画了这种因为找到了梦所以失去了梦的痛苦。', '小说 – 刻画 – 痛苦'], ['这位同学也听清楚了这句话的含义。', '同学 – 听 – 含义'], ['他们的献身精神深刻教育了我。', '精神 – 教育 – 我'], ['几个学生一起搬进来一张桌子。', '学生 – 搬 – 桌子']] },
    { t: 'open', q: '【Sách · 思考与练习 七】Phân tích bằng ký hiệu ‖ ( ) [ ] 〈 〉 (đáp án tham khảo).', items: [
      ['你要的书没有了。', '(你要的)书 ‖ 没有了。'], ['他对孩子一直不关心。', '他 ‖ [对孩子][一直][不]关心。'], ['仔细研究一下是对的。', '[仔细]研究〈一下〉‖ 是对的。'], ['睡觉的时候你最好把窗户打开。', '[(睡觉的)时候] 你 ‖ [最好][把窗户]打〈开〉。'], ['他总是说得含含糊糊的。', '他 ‖ [总是]说得〈含含糊糊的〉。'], ['几个学生一起搬进来一张桌子。', '(几个)学生 ‖ [一起]搬〈进来〉(一张)桌子。'], ['你的回答并没有解决我的问题。', '(你的)回答 ‖ [并][没有]解决(我的)问题。'], ['这个十年前的老朋友最近给我写来一封信。', '(这个)(十年前的)老朋友 ‖ [最近][给我]写〈来〉(一封)信。'], ['我从去年到现在一直没跟他们联系过。', '我 ‖ [从去年到现在][一直][没][跟他们]联系过。'], ['你把昨天那件事细细地给他们讲一遍。', '你 ‖ [把(昨天)(那件)事][细细地][给他们]讲〈一遍〉。']] }
  ],
  adv: {
    g: [['A 对 B 进行 + V(danh hóa)', 'khách thể ở trạng ngữ', '我对他进行了批评。'], ['给 + người + V + 来 + vật', 'trạng ngữ đối tượng + bổ ngữ hướng', '他给我寄来一个包裹。'], ['N 的 + N + 使 + 人 + Adj', 'định ngữ bắt buộc', '大家的关心使我非常感动。']],
    an: [['这位同学也听清楚了这句话的含义。', '(这位)同学 ‖ [也]听〈清楚〉了(这句话的)含义 — có đủ ĐN, CN, TrN, ĐT, BN, TN', 'Bạn học này cũng đã nghe rõ hàm ý của câu nói.']],
    v: [['刻画', 'kèhuà', 'khắc họa'], ['精彩', 'jīngcǎi', 'đặc sắc'], ['含义', 'hányì', 'hàm ý'], ['献身', 'xiànshēn', 'hiến thân'], ['打扰', 'dǎrǎo', 'làm phiền'], ['促进', 'cùjìn', 'thúc đẩy']],
    w: [['Câu đầy đủ', 'Viết 3 câu có đủ định ngữ, trạng ngữ, bổ ngữ và tân ngữ, rồi tự phân tích bằng ký hiệu.']]
  } },
{ id: 'g6-3', title: 'Chủ ngữ và vị ngữ 主语和谓语', kind: '语法', src: '（《汉语语法教程》Chương VI, Tiết 3, tr.196–203）',
  p: [
    '## 1. Khái quát',
    'Chủ ngữ là thành phần được trần thuật đứng đầu câu (trả lời 谁/什么), vị ngữ trần thuật cho chủ ngữ (trả lời 怎么样/怎么了). Chủ ngữ có thể chỉ người (老师‖正在上课), vật, sự việc (打人‖不对), thời gian (一年‖过去了), nơi chốn (外面‖下雨了).',
    'Tiếng Hán không có biến đổi hình thái nên xác định chủ ngữ khó hơn: 老师来了 / 来了一位老师 — 老师 ở câu 2 là chủ ngữ hay tân ngữ vẫn còn tranh luận.',
    '## 2. Từ ngữ làm chủ ngữ',
    'Chủ yếu danh từ, đại từ. Cụm số lượng làm chủ ngữ khi chỉ toàn bộ (一个也不要) hoặc phân phối: 我买了三本书，一本给你，两本给弟弟。',
    'Động từ, tính từ (thường song âm tiết) chỉ làm chủ ngữ trong một số kiểu câu: ① câu phán đoán với 是: 认真学习是每个学生的本分；聪明美丽是女孩子的本钱。 ② câu miêu tả với tính từ đánh giá: 懒惰不好；太认真也不好。 ③ câu sai khiến (使、令、叫、让): 讨论使问题越来越清楚了；争吵使两个人的关系变得很紧张。',
    '## 3. Đặc điểm chủ ngữ',
    '① Thường là định chỉ (xác định): *三个面包已经吃了 → 那三个面包已经吃了; *两个人来了 → 那两个人来了 (trừ câu đặc thù 一个人住一间房). ② Thường lược được khi ngữ cảnh rõ: 她叫王芳，( )今年三十岁，( )十年前参加工作，( )多次获得奖励。',
    '## 4. Từ ngữ làm vị ngữ',
    'Động từ: chủ ngữ là chủ thể thì động từ đứng một mình được (他来); chủ ngữ là khách thể thì phải thêm thành phần: *书买 → 书买了/书买回来了. Từ tổ động từ: 运动会已经开始了 (trạng trung)、问题讨论清楚了 (động bổ)、我们出去谈 (liên động)、你叫他来 (kiêm ngữ)、我同意参加 (động tân).',
    'Tính từ thường không đứng một mình: 天气非常热、他比我努力、孩子高兴极了. Ngoài ra: cụm tính–danh miêu tả (这个姑娘大眼睛，双眼皮), cụm số lượng (这把椅子三条腿；这本书七十页；一人一个房间). Danh từ đơn thường không làm vị ngữ.'
  ],
  zh: ['老师正在上课。', '打人不对。', '外面下雨了。', '我买了三本书，一本给你，两本给弟弟。', '认真学习是每个学生的本分。', '懒惰不好。', '讨论使问题越来越清楚了。', '那两个人来了。', '她叫王芳，今年三十岁，十年前参加工作。', '这个姑娘大眼睛，双眼皮。', '这本书七十页。'],
  notes: [['陈述', 'chénshù', 'trần thuật'], ['定指', 'dìngzhǐ', 'định chỉ, xác định'], ['不定指', 'bú dìngzhǐ', 'bất định chỉ'], ['省略', 'shěnglüè', 'lược bỏ'], ['判断句', 'pànduànjù', 'câu phán đoán'], ['描写句', 'miáoxiějù', 'câu miêu tả'], ['使令', 'shǐlìng', 'sai khiến'], ['本分', 'běnfèn', 'bổn phận'], ['本钱', 'běnqián', 'vốn liếng'], ['懒惰', 'lǎnduò', 'lười biếng'], ['双眼皮', 'shuāngyǎnpí', 'mắt hai mí']],
  ex: [
    { t: 'tf', q: '【Cơ bản】Câu nào đúng?', items: [['三个面包已经吃了。', false], ['那三个面包已经吃了。', true], ['两个人来了。', false], ['书买了。', true], ['书买。', false], ['天气热。', false], ['天气非常热。', true], ['这本书七十页。', true]] },
    { t: 'mc', q: '【Trung bình】Chủ ngữ thuộc loại từ ngữ nào?', items: [
      ['早睡早起对身体有好处。', ['danh từ', 'từ tổ động từ', 'từ tổ số lượng', 'đại từ'], 1], ['失败未必是一件坏事。', ['danh từ', 'động từ', 'tính từ', 'đại từ'], 1], ['今天是五月十三号。', ['danh từ thời gian', 'động từ', 'tính từ', 'đại từ'], 0], ['这里埋藏着许多珍贵的文物。', ['danh từ', 'đại từ nơi chốn', 'tính từ', 'số lượng'], 1], ['我们不参加是对的。', ['danh từ', 'từ tổ chủ vị', 'tính từ', 'số lượng'], 1], ['繁重的工作损害了她的健康。', ['từ tổ định trung', 'từ tổ động tân', 'tính từ', 'đại từ'], 0]] },
    { t: 'mc', q: '【Sách · 思考与练习 六】Vị ngữ do loại từ ngữ nào đảm nhiệm?', items: [
      ['一人一个房间。', ['từ tổ số lượng', 'động từ', 'tính từ', 'từ tổ động bổ'], 0], ['他经常出差。', ['từ tổ trạng trung', 'từ tổ động tân', 'tính từ', 'số lượng'], 0], ['作业做完了。', ['từ tổ động bổ', 'từ tổ động tân', 'tính từ', 'số lượng'], 0], ['咱们讨论讨论。', ['động từ lặp', 'từ tổ động tân', 'tính từ', 'số lượng'], 0], ['这份礼物既体面又实用。', ['từ tổ tính từ ngang hàng', 'động từ', 'số lượng', 'danh từ'], 0], ['我们反对使用武力。', ['từ tổ động tân', 'từ tổ động bổ', 'tính từ', 'số lượng'], 0], ['这本书300页。', ['từ tổ số lượng', 'động từ', 'tính từ', 'danh từ'], 0], ['这个小伙子高高的个子，大大的眼睛。', ['từ tổ tính–danh', 'động từ', 'tính từ', 'số lượng'], 0]] },
    { t: 'open', q: '【Sách · 思考与练习 四】Tách chủ ngữ và vị ngữ bằng “‖”.', items: [
      ['只有知识才能使人成为巨人。', '只有知识 ‖ 才能使人成为巨人。'], ['这样的人到处都有。', '这样的人 ‖ 到处都有。'], ['我的内心里一直存有一份感激。', '我的内心里 ‖ 一直存有一份感激。'], ['昨天是星期天。', '昨天 ‖ 是星期天。'], ['这样对待他是不公平的。', '这样对待他 ‖ 是不公平的。'], ['一个心灵受到过伤害的人更需要这样的关怀。', '一个心灵受到过伤害的人 ‖ 更需要这样的关怀。'], ['明天上午我们有一个活动。', '(明天上午) 我们 ‖ 有一个活动。'], ['同意他参加的请举手。', '同意他参加的 ‖ 请举手。'], ['每天锻炼使我的身体越来越健康了。', '每天锻炼 ‖ 使我的身体越来越健康了。'], ['老王这个人对谁都那么热情。', '老王这个人 ‖ 对谁都那么热情。']] },
    { t: 'open', q: '【Nâng cao】Viết đoạn giới thiệu một người, lược chủ ngữ đúng cách (tham khảo).', items: [['Giới thiệu một người bạn', '我的朋友叫李明，今年二十二岁，( )是河内人，( )大学学的是中文，( )现在在一家公司当翻译。']] }
  ],
  adv: {
    g: [['Adj/V + 是 + N', 'động/tính từ làm chủ ngữ câu phán đoán', '聪明美丽是女孩子的本钱。'], ['V + 使 + 人 + …', 'động từ làm chủ ngữ câu sai khiến', '争吵使关系变得很紧张。'], ['那/这 + số lượng + N + V', 'chủ ngữ phải định chỉ', '那两个人来了。'], ['N + 大眼睛', 'cụm tính–danh làm vị ngữ', '这个姑娘大眼睛。']],
    an: [['我买了三本书，一本给你，两本给弟弟。', '一本、两本 là cụm số lượng làm chủ ngữ trong câu phân phối, có câu tổng thể 三本书 đứng trước', 'Tôi mua ba cuốn sách, một cuốn cho bạn, hai cuốn cho em trai.']],
    v: [['埋藏', 'máicáng', 'chôn giấu'], ['文物', 'wénwù', 'văn vật'], ['损害', 'sǔnhài', 'tổn hại'], ['融洽', 'róngqià', 'hòa hợp'], ['出差', 'chūchāi', 'đi công tác'], ['体面', 'tǐmiàn', 'lịch sự, có thể diện']],
    s: [['Giới thiệu nhân vật', 'Giới thiệu một người nổi tiếng trong 1 phút, chỉ nêu chủ ngữ ở câu đầu, các câu sau lược chủ ngữ.']]
  } },
{ id: 'g6-4', title: 'Tân ngữ 宾语', kind: '语法', src: '（《汉语语法教程》Chương VI, Tiết 4, tr.203–212）',
  p: [
    '## 1. Định nghĩa',
    'Tân ngữ là đối tượng mà động tác đề cập hoặc ảnh hưởng tới; không có động từ thì không có tân ngữ. Không chỉ là đối tượng chịu tác động: 我有两个姐姐 (đối tượng sở hữu)、他扮演一名特务 (vai diễn)、我们赞成开发这个地区 (sự kiện).',
    'Kiểm tra bằng “V 的是什么”: 我们反对建造这座大楼 → 反对的是建造这座大楼 ✓ (động tân); 文章强调指出…… → *强调的是指出 ✗ (không phải động tân).',
    '## 2. Quan hệ ngữ nghĩa động từ – tân ngữ',
    'Phổ biến nhất: động tác – khách thể (学习语言、打扫房间). Ngoài ra: kết quả (写书、织毛衣、做晚饭、挖坑)、công cụ (吃大碗、抽烟斗)、chất liệu (刷油漆)、nơi chốn (住宾馆、吃馆子、飞上海)、mục đích (排电影票). Phân biệt bằng hình thức: 挖了一些土 (khách thể) ↔ 挖了一些坑 (kết quả: 挖成了一些坑 được, *挖成了一些土 không).',
    'Các quan hệ ngoài khách thể có tính cố định, không suy diễn tùy tiện: 吃大碗 được nhưng *吃筷子; 吃馆子 được nhưng *吃餐厅.',
    '## 3. Loại hình tân ngữ',
    '① Danh từ tính (chủ yếu): 他很喜欢狗; động từ đã danh hóa: 我参与了这个问题的讨论；我们应该支持这本书的出版. Song tân ngữ (gần: người; xa: vật) với động từ “cho/nhận”: 朋友送了我一本书；他告诉我一个坏消息；他欠我十块钱 (给、送、借、还、教、问、告诉、请教、托付…).',
    '② Động từ tính: 他们可以自己完成任务；市民们反对拆迁房屋。 ③ Tính từ tính (ít): 我认为不错；我觉得很难看。',
    '## 4. Đặc điểm tân ngữ',
    'Có khi tân ngữ quan hệ với cụm động bổ chứ không với động từ: *哭眼睛 → 哭红了眼睛; *震房子 → 震塌了房子; *急冷汗 → 急出了一身冷汗.',
    'Tân ngữ có thể định chỉ hoặc bất định chỉ (讨论了一个问题 / 这个问题), nhưng sau động từ lặp phải phiếm chỉ hoặc định chỉ: *我看看三本书 → 我看看书 / 我看看那三本书.',
    'Lượng từ lặp không đứng sau động từ: *我喜欢这里的件件衣服 → 这些衣服，件件我都喜欢 (đưa lên đầu câu + 都).'
  ],
  zh: ['我有两个姐姐。', '他扮演一名特务。', '我们反对建造这座大楼。', '他挖了一些坑。', '朋友送了我一本书。', '他告诉我一个坏消息。', '我认为不错。', '她哭红了眼睛。', '我看看那三本书。', '这些衣服，件件我都喜欢。'],
  notes: [['宾语', 'bīnyǔ', 'tân ngữ'], ['双宾语', 'shuāng bīnyǔ', 'song tân ngữ'], ['近宾语', 'jìn bīnyǔ', 'tân ngữ gần (gián tiếp)'], ['远宾语', 'yuǎn bīnyǔ', 'tân ngữ xa (trực tiếp)'], ['扮演', 'bànyǎn', 'đóng vai'], ['特务', 'tèwu', 'đặc vụ'], ['赞成', 'zànchéng', 'tán thành'], ['拆迁', 'chāiqiān', 'giải tỏa, di dời'], ['挖', 'wā', 'đào'], ['油漆', 'yóuqī', 'sơn'], ['欠', 'qiàn', 'nợ']],
  ex: [
    { t: 'match', q: '【Cơ bản】Nối cụm động tân với quan hệ ngữ nghĩa.', items: [['打扫房间', 'khách thể'], ['织毛衣', 'kết quả'], ['抽烟斗', 'công cụ'], ['住宾馆', 'nơi chốn'], ['刷油漆', 'chất liệu'], ['排电影票', 'mục đích']] },
    { t: 'mc', q: '【Sách · 思考与练习 八】Quan hệ ngữ nghĩa của cụm động tân?', items: [
      ['造汽车', ['khách thể', 'kết quả', 'nơi chốn', 'công cụ'], 1], ['修汽车', ['khách thể', 'kết quả', 'nơi chốn', 'công cụ'], 0], ['住楼房', ['khách thể', 'kết quả', 'nơi chốn', 'công cụ'], 2], ['住一个人', ['chủ thể', 'kết quả', 'nơi chốn', 'công cụ'], 0], ['吃食堂', ['khách thể', 'kết quả', 'nơi chốn', 'công cụ'], 2], ['做面条', ['khách thể', 'kết quả', 'nơi chốn', 'công cụ'], 1], ['吃面条', ['khách thể', 'kết quả', 'nơi chốn', 'công cụ'], 0], ['织毛线', ['khách thể', 'chất liệu', 'nơi chốn', 'công cụ'], 1], ['写毛笔', ['khách thể', 'chất liệu', 'nơi chốn', 'công cụ'], 3], ['捆行李', ['khách thể', 'kết quả', 'nơi chốn', 'công cụ'], 0]] },
    { t: 'order', q: '【Trung bình】Sắp xếp câu song tân ngữ.', items: [['朋友', '送了', '我', '一本书。'], ['他', '告诉', '我', '一个坏消息。'], ['他', '欠', '我', '十块钱。'], ['老师', '教', '我们', '汉语语法。']] },
    { t: 'tf', q: '【Trung bình】Câu nào đúng?', items: [['我看看三本书。', false], ['我看看那三本书。', true], ['我喜欢这里的件件衣服。', false], ['这些衣服，件件我都喜欢。', true], ['他挖成了一些坑。', true], ['他挖成了一些土。', false], ['我们吃筷子吧。', false], ['她哭红了眼睛。', true]] },
    { t: 'open', q: '【Sách · 思考与练习 十】Sửa câu sai và giải thích.', items: [
      ['我们听了音乐。', '→ 我们听了一会儿音乐 / 我们听音乐了。(V了 + O trần trụi chưa thành câu)'], ['问题解决。', '→ 问题解决了。(khách thể làm chủ ngữ, động từ không đứng một mình)'], ['三本书我看了。', '→ 那三本书我看了。(chủ đề phải định chỉ)'], ['我想学习学习一本书。', '→ 我想学习学习这本书。(sau động từ lặp tân ngữ phải định chỉ/phiếm chỉ)'], ['他写信，你现在别叫他。', '→ 他正在写信，你现在别叫他。(cần 正在)'], ['想法我觉得离实际的可能性太远。', '→ 这种想法我觉得离实际太远。'], ['颜色漂亮。', '→ 颜色很漂亮。']] },
    { t: 'open', q: '【Sách · 思考与练习 九 · Nâng cao】Thêm tân ngữ và nói quan hệ ngữ nghĩa (tham khảo).', items: [['我想去看___。', '看电影 / 看朋友 (khách thể)'], ['我现在就做___。', '做饭 (kết quả)'], ['他最近写了___。', '写了一本小说 (kết quả)'], ['我以前去过___。', '去过上海 (nơi chốn)'], ['王老师教___。', '教我们汉语 (song tân ngữ)'], ['去那里我们应该走___。', '走小路 (con đường/nơi chốn)'], ['这条小路直通___。', '直通山顶 (nơi chốn)']] }
  ],
  adv: {
    g: [['V 的是 + O', 'kiểm tra quan hệ động tân', '我们反对的是建造这座大楼。'], ['V + 人 + vật', 'song tân ngữ', '他告诉我一个消息。'], ['V + bổ ngữ + O', 'tân ngữ đi với cụm động bổ', '哭红了眼睛'], ['N, 量量 + 都 + V', 'lượng từ lặp đưa lên đầu câu', '件件我都喜欢。']],
    an: [['我们赞成开发这个地区。', '赞成 + [开发这个地区] (sự kiện làm tân ngữ động từ tính); kiểm tra: 我们赞成的是开发这个地区', 'Chúng tôi tán thành khai thác khu vực này.']],
    v: [['烟斗', 'yāndǒu', 'tẩu thuốc'], ['馆子', 'guǎnzi', 'quán ăn'], ['冷汗', 'lěnghàn', 'mồ hôi lạnh'], ['捆', 'kǔn', 'buộc, bó'], ['行李', 'xíngli', 'hành lý'], ['托付', 'tuōfù', 'phó thác']],
    w: [['Tân ngữ kết quả', 'Viết 5 câu với tân ngữ kết quả (写、做、画、挖、织) và 5 câu với tân ngữ nơi chốn (住、吃、飞、跑、去).']]
  } }
] },
{ n: 7, title: 'Chương VII · Câu và thành phần câu (II) 句子和句子成分（二）', texts: [
{ id: 'g7-1', title: 'Định ngữ 定语', kind: '语法', src: '（《汉语语法教程》Chương VII, Tiết 1, tr.216–227）',
  p: [
    'Định ngữ bổ nghĩa hoặc hạn chế cho trung tâm ngữ danh từ tính: 他发表了(精彩的)演说。/(这本书的)出版填补了(这个领域的)研究空白。 Định ngữ và trạng ngữ đều là thành phần bổ nghĩa; sau định ngữ dùng 的, sau trạng ngữ dùng 地 (cùng đọc de).',
    '## 1. Từ ngữ làm định ngữ',
    'Tính từ: (漂亮)姑娘、(很不错的)衣服、(热得要命的)夏天. Danh từ: (图书)质量、(汉代的)文物. Động từ: (做的)衣服比(买的)衣服合身；(我在海边儿照的)照片. Cụm giới từ (ít): (关于他的)传言、(对自己的)批评意见.',
    '## 2. Định ngữ và 的',
    '① Bắt buộc 的: tính từ song âm văn viết (一位美丽的姑娘, *美丽姑娘); tính từ trạng thái (漆黑的夜晚); cụm tính từ ((太高的)价格); động từ/cụm động từ ((自己包的)饺子); cụm giới từ ((对他的)印象); danh từ/đại từ sở hữu ((朋友的)车) — trừ quan hệ thân thuộc: 我爸爸; đại từ làm trung tâm ((平平常常的)我).',
    '② Không dùng 的: tính từ đơn âm ((大)鸡蛋、(小)桌子 — muốn nhấn mạnh: 那件红的风衣); cụm số lượng (三本书, *三本的书).',
    '③ Có hay không đều được: tính từ song âm khẩu ngữ (漂亮(的)女儿; 聪明、干净、健康、认真…); động từ song âm + danh từ mang tính “từ” (解决(的)方案、学习计划、研究方法、参考资料).',
    '的 phân biệt nghĩa: 中国银行 (tên gọi) ≠ 中国的银行 (sở hữu); 北京人 ≠ 北京的人; 十斤西瓜 (số lượng) ≠ 十斤的西瓜 (loại dưa 10 cân/quả).',
    '## 3. Trật tự nhiều định ngữ',
    'Cụm ngang hàng (聪明的、努力的学生；国家、集体和个人的利益) chỉ tính là một định ngữ. Quy tắc cơ bản: định ngữ hạn chế (số lượng, sở hữu, nơi chốn, thời gian, phạm vi) đứng trước định ngữ miêu tả (tính chất, trạng thái, công dụng, nguồn gốc): 那件漂亮的衣服；我的八十多岁的母亲 (*八十多岁的我的母亲)；房间里的古色古香的家具. Sai: *上海是中国一个最大的工业城市 → 上海是中国最大的一个工业城市.',
    'Giữa các định ngữ hạn chế: nơi chốn/phạm vi → sở hữu → thời gian → số lượng: (黑板上)(老师的)(这段)话；(我们单位)(过去的)(一位)同事. Giữa định ngữ miêu tả: tính chất, chất liệu gần trung tâm nhất ((从朋友那儿借来的)(汉语)词典); miêu tả động từ tính trước tính từ tính. Nhấn mạnh có thể đảo: 她挑选了(最贵的)(一件)衣服.',
    '## 4. Chuyển đổi giữa cụm định trung và câu',
    '这是他提出的一个问题 = 这是一个问题 + 他提出了这个问题. Văn viết dồn nhiều định ngữ: 我遇到了一位过去在一个单位、十年没见面的老朋友; khẩu ngữ nên tách: 我遇到了一位老朋友，我们过去在一个单位，十年没见面了。',
    '## 5. Định ngữ giả 准定语',
    'Loại 1: ĐT + thời đoạn + (的) + TN: 我看了一个小时(的)电视；我已经学了一年(的)汉语 — thời đoạn thực chất là bổ ngữ (so với 一部三个小时的电影 là định ngữ thật). Loại 2: động từ ly hợp/quán ngữ chen đối tượng: 你别生我的气 (= 对我生气)；他想敲我的竹杠；帮我的忙；开他的玩笑；打我的主意；扫大家的兴. Dùng trong khẩu ngữ, 的 có thể bỏ, thường mang nghĩa gây thiệt cho ai đó.'
  ],
  zh: ['他发表了精彩的演说。', '她是一位美丽的姑娘。', '自己包的饺子比买的饺子好吃。', '我想要几个大鸡蛋。', '我的八十多岁的母亲身体很好。', '黑板上老师的这段话很重要。', '上海是中国最大的一个工业城市。', '我遇到了一位老朋友，我们过去在一个单位，十年没见面了。', '我看了一个小时的电视。', '你别生我的气。'],
  notes: [['定语', 'dìngyǔ', 'định ngữ'], ['限制性定语', 'xiànzhìxìng dìngyǔ', 'định ngữ hạn chế'], ['描写性定语', 'miáoxiěxìng dìngyǔ', 'định ngữ miêu tả'], ['准定语', 'zhǔn dìngyǔ', 'định ngữ giả'], ['领属', 'lǐngshǔ', 'sở hữu'], ['漆黑', 'qīhēi', 'tối đen'], ['古色古香', 'gǔ sè gǔ xiāng', 'cổ kính'], ['演说', 'yǎnshuō', 'diễn thuyết'], ['填补', 'tiánbǔ', 'lấp đầy'], ['空白', 'kòngbái', 'chỗ trống'], ['传言', 'chuányán', 'lời đồn'], ['扫兴', 'sǎoxìng', 'mất hứng']],
  ex: [
    { t: 'mc', q: '【Cơ bản】Có cần 的 không?', items: [['美丽___姑娘', ['的', 'không dùng'], 0], ['大___鸡蛋', ['的', 'không dùng'], 1], ['三本___书', ['的', 'không dùng'], 1], ['朋友___车', ['的', 'không dùng'], 0], ['漆黑___夜晚', ['的', 'không dùng'], 0], ['我___爸爸 (thân thuộc)', ['bắt buộc 的', 'có thể bỏ 的'], 1], ['自己包___饺子', ['的', 'không dùng'], 0]] },
    { t: 'tf', q: '【Cơ bản】Đúng hay sai?', items: [['她是一位美丽姑娘。', false], ['他有一个漂亮女儿。', true], ['三本的书', false], ['我想要几个大鸡蛋。', true], ['中国银行 và 中国的银行 nghĩa như nhau.', false]] },
    { t: 'order', q: '【Trung bình】Sắp xếp các định ngữ đúng trật tự.', items: [['我的', '八十多岁的', '母亲'], ['黑板上', '老师的', '这段', '话'], ['我们单位', '过去的', '一位', '同事'], ['房间里的', '古色古香的', '家具'], ['从朋友那儿借来的', '汉语', '词典'], ['上海是', '中国', '最大的', '一个', '工业城市。']] },
    { t: 'mc', q: '【Trung bình】Phần in đậm là định ngữ thật hay định ngữ giả (thực chất bổ ngữ/đối tượng)?', items: [['我看了【一个小时】的电视。', ['định ngữ thật', 'định ngữ giả'], 1], ['我看了一部【三个小时】的电影。', ['định ngữ thật', 'định ngữ giả'], 0], ['我借【你】的书。', ['định ngữ thật', 'định ngữ giả'], 0], ['你别生【我】的气。', ['định ngữ thật', 'định ngữ giả'], 1], ['他想敲【我】的竹杠。', ['định ngữ thật', 'định ngữ giả'], 1]] },
    { t: 'fill', q: '【Trung bình】Viết lại bằng định ngữ giả (V + người + 的 + N).', items: [['对他开玩笑 → 开___玩笑', '他的'], ['给我帮忙 → 帮___忙', '我的'], ['对大家扫兴 → 扫___兴', '大家的'], ['对我生气 → 生___气', '我的']] },
    { t: 'open', q: '【Nâng cao】Sửa câu sai về trật tự định ngữ / 的.', items: [['上海是中国一个最大的工业城市。', '上海是中国最大的一个工业城市。'], ['八十多岁的我的母亲还在工作。', '我的八十多岁的母亲还在工作。'], ['古色古香的房间里的家具。', '房间里的古色古香的家具。'], ['这是三本的书。', '这是三本书。'], ['她是一位美丽姑娘。', '她是一位美丽的姑娘。']] },
    { t: 'open', q: '【Nâng cao】Tách câu nhiều định ngữ thành nhiều câu ngắn (khẩu ngữ).', items: [['我遇到了一位过去在一个单位、十年没见面的老朋友。', '我遇到了一位老朋友，我们过去在一个单位，十年没见面了。'], ['这是一本我从朋友那儿借来的很有意思的汉语语法书。', '这是一本汉语语法书，是我从朋友那儿借来的，很有意思。']] }
  ],
  adv: {
    g: [['Hạn chế + miêu tả + N', 'trật tự định ngữ cơ bản', '那件漂亮的衣服'], ['Nơi chốn + sở hữu + thời gian + số lượng + N', 'trật tự định ngữ hạn chế', '我们单位过去的一位同事'], ['V + thời đoạn + 的 + O', 'định ngữ giả (thời lượng)', '学了一年的汉语'], ['V + người + 的 + O (ly hợp)', 'định ngữ giả (đối tượng)', '别生我的气']],
    an: [['(黑板上)(老师的)(这段)话很重要。', 'Ba định ngữ hạn chế: nơi chốn → sở hữu → số lượng, cùng bổ nghĩa cho 话', 'Đoạn lời của thầy trên bảng rất quan trọng.']],
    v: [['合身', 'héshēn', 'vừa người'], ['案子', 'ànzi', 'vụ án'], ['负担', 'fùdān', 'gánh nặng'], ['兼顾', 'jiāngù', 'chiếu cố cả hai'], ['财政收入', 'cáizhèng shōurù', 'thu nhập tài chính'], ['出洋相', 'chū yángxiàng', 'làm trò cười']],
    w: [['Miêu tả đồ vật', 'Miêu tả 3 đồ vật trong phòng, mỗi câu có ít nhất 3 định ngữ đúng trật tự.']]
  } },
{ id: 'g7-2', title: 'Trạng ngữ 状语', kind: '语法', src: '（《汉语语法教程》Chương VII, Tiết 1, tr.227–237）',
  p: [
    'Trạng ngữ bổ nghĩa cho động từ, tính từ, hoặc cả câu: 大家[偶尔]聚一次。我们[特别]满意。[对于这个问题]，我不想发表意见。',
    '## 1. Từ ngữ làm trạng ngữ',
    '① Phó từ: 两国的关系[非常]友好；[毕竟]他的年龄要大一些；政府[千方百计]解决就业问题. ② Tính từ: [认真]研究；[非常热情地]接待；[积极稳妥地]推进改革.',
    '③ Động từ: loại 1 trực tiếp, chỉ phương thức (≈ 以…方式), trạng ngữ hạn chế: 被[抢先]注册；[协商]产生；[旅行]结婚；[合作]生产. Loại 2 phải thêm 地, miêu tả: 他[同情地]看着我；[注意地]盯着. Cụm động từ đều miêu tả: [蹦蹦跳跳地]来到我身边；[哭丧着脸]看着我；不要[躺着]看书.',
    '④ Danh từ: + 地 (ít, ảnh hưởng dịch thuật): [本能地]做出反应；[历史地]看待. (科学地、机械地 là tính từ.) Trực tiếp: [原则]同意 (phạm vi = 在原则上)；[政治]解决 (phương thức)；[电话]联系、[掌声]欢迎 (công cụ = 用…). Chỉ một số danh từ: 全力、书面、现金、义务、重点、真心、手工、武力…',
    '⑤ Cụm số lượng: [一个一个地]检查；[几次]找他；[三番五次地]打电话. ⑥ Cụm giới từ (chức năng chính): [从明天]开始；[对我们]很关心；[按照你的要求]抄写. ⑦ Thành ngữ: [实事求是地]解决问题.',
    '## 2. Trạng ngữ và 地',
    'Trạng ngữ miêu tả thường thêm 地, trạng ngữ hạn chế không thêm. Tính từ song âm: 认真(地)考虑; nhưng có phó từ trình độ thì phải có 地: *很认真考虑 → 很认真地考虑; dạng lặp phải có 地: 远远地躲起来；高高兴兴地出发了. Phó từ trình độ song âm 十分、相当、比较、非常、特别 có thể thêm 地 (khẩu ngữ): 我特别(地)欣赏他的为人. Trạng ngữ hạn chế (thời gian, công cụ, nơi chốn, phạm vi): [正在]商量、[从昨天]、[电话]联系 — không thêm 地.',
    '## 3. Trật tự nhiều trạng ngữ',
    '她[从来][就][没有][跟我][认真地]商量过 (5 trạng ngữ). Trật tự linh hoạt hơn định ngữ (他[一把][将车][从石头中]扯出来 có thể đảo), nhưng không tự do: *我们从北京明天出发 → 我们明天从北京出发；*她把问题跟我不讲清楚 → 她不跟我把问题讲清楚.',
    'Quy luật: ① danh từ thời gian trước phó từ thời gian: 他[现在][正]…；她[现在][已经]结婚了. ② Phó từ: ngữ khí → thời gian → phủ định: 他[似乎][从来][没]高兴过. ③ Nhiều cụm giới từ: xảy ra trước đứng trước ([从天安门][沿着西长安街][向西单]走去); vị trí trước phương hướng ([在屋里][向外面]喊); chủ thể trước đối tượng ([由他][把结果]告诉你). ④ Thời gian, ngữ khí ở trước; trạng ngữ gắn với động tác đứng sát động từ: 他[兴奋地][从哥哥手里][很快地]抢过那封信.',
    '## 4. Chỉ hướng ngữ nghĩa',
    'Trạng ngữ không phải lúc nào cũng nói về động từ: 大家[高高兴兴地]回到家里 (miêu tả chủ ngữ 大家)；咱们[热热地]喝一壶茶 (miêu tả tân ngữ 茶). Định ngữ, bổ ngữ cũng có hiện tượng này.'
  ],
  zh: ['对于这个问题，我不想发表意见。', '两国的关系非常友好。', '他们非常热情地接待了我们。', '我们想旅行结婚。', '他同情地看着我。', '我们明天电话联系吧。', '我很认真地考虑了他的意见。', '她从来就没有跟我认真地商量过。', '我们明天从北京出发。', '他兴奋地从哥哥手里很快地抢过那封信。', '咱们热热地喝一壶茶。'],
  notes: [['状语', 'zhuàngyǔ', 'trạng ngữ'], ['限制性状语', 'xiànzhìxìng zhuàngyǔ', 'trạng ngữ hạn chế'], ['描写性状语', 'miáoxiěxìng zhuàngyǔ', 'trạng ngữ miêu tả'], ['语义指向', 'yǔyì zhǐxiàng', 'chỉ hướng ngữ nghĩa'], ['注册', 'zhùcè', 'đăng ký'], ['协商', 'xiéshāng', 'hiệp thương'], ['本能', 'běnnéng', 'bản năng'], ['稳妥', 'wěntuǒ', 'thỏa đáng, chắc chắn'], ['三番五次', 'sān fān wǔ cì', 'năm lần bảy lượt'], ['兴高采烈', 'xìng gāo cǎi liè', 'hớn hở'], ['躲藏', 'duǒcáng', 'trốn']],
  ex: [
    { t: 'mc', q: '【Cơ bản】Có cần 地 không?', items: [['我很认真___考虑了他的意见。', ['地', 'không dùng'], 0], ['他们高高兴兴___出发了。', ['地', 'không dùng'], 0], ['我们正在___商量一件事。', ['地', 'không dùng'], 1], ['我们电话___联系吧。', ['地', 'không dùng'], 1], ['他同情___看着我。', ['地', 'không dùng'], 0], ['两家公司合作___生产这个产品。', ['地', 'không dùng'], 1]] },
    { t: 'match', q: '【Cơ bản】Nối trạng ngữ với loại từ ngữ.', items: [['[非常]友好', 'phó từ'], ['[认真]研究', 'tính từ'], ['[旅行]结婚', 'động từ'], ['[电话]联系', 'danh từ'], ['[几次]找他', 'cụm số lượng'], ['[从明天]开始', 'cụm giới từ']] },
    { t: 'order', q: '【Trung bình】Sắp xếp trạng ngữ đúng trật tự.', items: [['我们', '明天', '从北京', '出发。'], ['他', '似乎', '从来', '没', '高兴过。'], ['他', '现在', '正', '给我们', '介绍兰州小吃。'], ['我们', '从天安门', '沿着西长安街', '向西单', '走去。'], ['他', '在屋里', '向外面', '大声喊着什么。'], ['她', '从来', '就', '没有', '跟我', '认真地', '商量过。']] },
    { t: 'mc', q: '【Trung bình】Trạng ngữ in đậm miêu tả (chỉ hướng) cái gì?', items: [['大家【高高兴兴地】回到家里。', ['chủ ngữ', 'động từ', 'tân ngữ'], 0], ['咱们【热热地】喝一壶茶。', ['chủ ngữ', 'động từ', 'tân ngữ'], 2], ['他【飞快地】跑了过去。', ['chủ ngữ', 'động từ', 'tân ngữ'], 1], ['他【兴奋地】从哥哥手里抢过那封信。', ['chủ ngữ', 'động từ', 'tân ngữ'], 0]] },
    { t: 'tf', q: '【Trung bình】Câu nào đúng?', items: [['我们从北京明天出发。', false], ['她把问题跟我不讲清楚。', false], ['他正现在兴高采烈地介绍。', false], ['她现在已经和别人结婚了。', true], ['他远远躲藏起来。', false], ['他远远地躲藏起来。', true]] },
    { t: 'open', q: '【Nâng cao】Viết lại với cấu trúc “用/以/在……上 + V” để thấy nghĩa của trạng ngữ danh từ.', items: [['领导已经原则同意了我们的计划。', '领导已经在原则上同意了我们的计划。(phạm vi)'], ['两国政治解决领土争端。', '两国以政治方式解决领土争端。(phương thức)'], ['我们明天可以电话联系。', '我们明天可以用电话联系。(công cụ)'], ['我们掌声欢迎来宾入场。', '我们用掌声欢迎来宾入场。(công cụ)']] }
  ],
  adv: {
    g: [['很/非常 + Adj + 地 + V', 'cụm tính từ làm trạng ngữ phải có 地', '很认真地考虑'], ['N(thời gian) + phó từ thời gian', 'danh từ thời gian đứng trước', '现在已经'], ['ngữ khí + thời gian + phủ định', 'trật tự phó từ', '似乎从来没'], ['在 + nơi + 向/往 + hướng + V', 'vị trí trước hướng', '在屋里向外喊']],
    an: [['他[兴奋地][从哥哥手里][很快地]抢过那封信。', '兴奋地 miêu tả chủ ngữ nên đứng gần chủ ngữ; 很快地 miêu tả động tác nên sát động từ 抢', 'Anh ấy hào hứng giật nhanh lá thư từ tay anh trai.']],
    v: [['就业', 'jiùyè', 'việc làm'], ['大本营', 'dàběnyíng', 'đại bản doanh'], ['哭丧着脸', 'kūsangzhe liǎn', 'mặt mếu máo'], ['争端', 'zhēngduān', 'tranh chấp'], ['询问', 'xúnwèn', 'hỏi han'], ['欣赏', 'xīnshǎng', 'đánh giá cao']],
    w: [['Một buổi sáng', 'Viết đoạn 6 câu kể buổi sáng của bạn, mỗi câu có ít nhất 2 trạng ngữ đúng trật tự (thời gian, nơi chốn, cách thức).']]
  } },
{ id: 'g7-3', title: 'Bổ ngữ (I): khái quát, bổ ngữ kết quả và tình thái 补语（一）', kind: '语法', src: '（《汉语语法教程》Chương VII, Tiết 2, tr.237–247）',
  p: [
    '## 1. Khái quát',
    'Bổ ngữ là thành phần đặc thù và quan trọng của tiếng Hán, nhiều ngôn ngữ không có thành phần tương đương. 我们讨论了这个问题 chỉ có một tầng nghĩa; 我们讨论清楚这个问题了 có hai tầng: 我们讨论这个问题 + 问题清楚了. Câu có bổ ngữ thường là hai biểu đạt gộp lại: 衣服洗干净了 = 衣服洗了 + 衣服干净了.',
    '## 2. Bổ ngữ và tân ngữ',
    'Bổ ngữ luôn đứng sau động/tính từ vị ngữ: V/Adj + (得) + BN: 房间打扫〈干净〉了；你先等〈一会儿〉；大家玩得〈很高兴〉. Phân biệt: thành phần sau là đối tượng của động từ → tân ngữ; nếu không → bổ ngữ. 词典我买了一本 (一本 thay cho 词典 → tân ngữ) ↔ 音乐我听了一会儿 (一会儿 nói thời gian kéo dài → bổ ngữ). Sau động từ là động/tính từ → thường là bổ ngữ (想清楚); là danh từ → thường là tân ngữ.',
    '## 3. Từ ngữ làm bổ ngữ',
    'Động từ làm bổ ngữ trực tiếp có hạn, chủ yếu là động từ phi tự chủ đơn âm: 完、懂、见、倒、掉、断、会、坏、死、醒、着(zháo)、住、走…; song âm: 糊涂、花眼、灰心、及格、上当、清醒、入迷…; và động từ xu hướng 来、去、上、下、进、出、回、过、起、开 cùng các dạng kép 上来、下去、出来、起来…. Tính từ làm bổ ngữ nhiều hơn (大、小、高兴、干净), trừ tính từ trạng thái, phi vị và một số như 方便. Cụm động/tính từ làm bổ ngữ sau 得: 累得〈背都弯了〉；高兴得〈跳了起来〉. Có từ chỉ làm bổ ngữ: 遍 (找遍了每个角落)、尽、足.',
    '## 4. Bổ ngữ kết quả 结果补语',
    'V + BN kết quả: 他听〈懂〉了；我们去〈晚〉了；房间打扫〈干净〉了. Động từ làm bổ ngữ chủ yếu đơn âm: 房子震倒了 (*震倒塌了); tính từ có cả song âm. Tính từ đơn âm 早/晚、快/慢、深/浅、大/小 có thể mang nghĩa “lệch mục tiêu”: 我们来早了 (lẽ ra nên đến muộn hơn) ↔ 孩子长高了 (bình thường). Cụm giới từ làm bổ ngữ cũng là kết quả: 老师站在前面；飞机飞往上海；我把地图挂在墙上 = 我挂地图 + 地图在墙上.',
    '## 5. Bổ ngữ tình thái 情态补语',
    'V/Adj + 得 + BN tình thái: miêu tả tình thái sau khi động tác/trạng thái đã xảy ra: 他的汉语说得〈很好〉；他高兴得〈手舞足蹈起来〉. Việc chưa xảy ra không dùng: *我们明天去爬山，我想爬得很快 → 我想快点儿爬.',
    'Thành phần: cụm tính từ (讲得很清楚；打扫得干干净净的; tính từ trơn phải có vế đối: 他写得工整，我写得不工整); cụm động từ (气得跳了起来；吓得站也站不稳；忙得连理发的时间都没有了). Hai biểu đạt: 他急得转来转去 = 他着急 + 他转来转去.',
    'Lưu ý: ① không dùng động/tính từ lặp: *看看得很认真；*高高兴兴得跳起来. ② Tính từ trạng thái không mang. ③ Động từ có tân ngữ/ly hợp phải lặp động từ: 他跳舞跳得很好；他说汉语说得很流利 = 他汉语说得很流利.',
    'Dạng 个: V + (了) + 个 + BN (khẩu ngữ, động từ đơn âm): 弄了个乱七八糟 = 弄得乱七八糟；打了个落花流水；玩儿了个痛快 = 玩儿得很痛快. Khác với 说个不停、哭个没完没了 (không thêm 了, có thể chuyển lên làm trạng ngữ: 不停地说) — đây là trạng ngữ đặt sau.'
  ],
  zh: ['我们讨论清楚这个问题了。', '衣服洗干净了。', '音乐我听了一会儿。', '我已经找遍了每个角落。', '房子震倒了。', '我们来早了。', '我把地图挂在墙上。', '他的汉语说得很好。', '他高兴得手舞足蹈起来。', '他说汉语说得很流利。', '朋友们昨天在一起玩儿了个痛快。'],
  notes: [['补语', 'bǔyǔ', 'bổ ngữ'], ['结果补语', 'jiéguǒ bǔyǔ', 'bổ ngữ kết quả'], ['情态补语', 'qíngtài bǔyǔ', 'bổ ngữ tình thái'], ['趋向动词', 'qūxiàng dòngcí', 'động từ xu hướng'], ['非自主动词', 'fēizìzhǔ dòngcí', 'động từ phi tự chủ'], ['手舞足蹈', 'shǒu wǔ zú dǎo', 'khoa chân múa tay'], ['落花流水', 'luò huā liú shuǐ', 'tan tác'], ['工整', 'gōngzhěng', 'ngay ngắn'], ['震', 'zhèn', 'rung, chấn động'], ['入迷', 'rùmí', 'mê mẩn']],
  ex: [
    { t: 'mc', q: '【Cơ bản】Thành phần in đậm là tân ngữ hay bổ ngữ?', items: [['词典我买了【一本】。', ['tân ngữ', 'bổ ngữ'], 0], ['音乐我听了【一会儿】。', ['tân ngữ', 'bổ ngữ'], 1], ['问题想【清楚】了。', ['tân ngữ', 'bổ ngữ'], 1], ['我们讨论了【这个问题】。', ['tân ngữ', 'bổ ngữ'], 0], ['你先等【一会儿】。', ['tân ngữ', 'bổ ngữ'], 1]] },
    { t: 'fill', q: '【Sách · 思考与练习 九】Điền bổ ngữ còn thiếu.', items: [['他不小心弄___了衣服。', '脏|破|湿'], ['他们被胜利冲___了头脑。', '昏'], ['我现在还没有看___你。', '透|懂'], ['我想他一定是已经爱___了你。', '上'], ['我的眼泪早就哭___了。', '干'], ['你千万不要累___了身体。', '坏|垮'], ['我还没有搞___你这句话的意思。', '懂|清楚|明白'], ['这场车祸中他摔___了腿。', '断|伤']] },
    { t: 'tf', q: '【Trung bình】Câu nào đúng?', items: [['房子震倒塌了。', false], ['房子震倒了。', true], ['我看看得很认真。', false], ['我看得很认真。', true], ['他跳舞得很好。', false], ['他跳舞跳得很好。', true], ['我们明天去爬山，我想爬得很快。', false], ['他把好好的一个工厂弄了个乱七八糟。', true]] },
    { t: 'open', q: '【Sách · 思考与练习 十】Gộp hai biểu đạt thành một câu có bổ ngữ.', items: [['他喝酒了 + 他醉了', '他喝醉了。'], ['问题研究了 + 问题清楚了', '问题研究清楚了。'], ['他的话我听 + 他的话我懂了', '他的话我听懂了。'], ['医生救了他 + 他活了', '医生救活了他。'], ['他们一起打狼 + 狼死了', '他们一起打死了狼。'], ['他跑步 + 他出了一身汗', '他跑出了一身汗。'], ['老人哭 + 老人眼睛瞎了', '老人哭瞎了眼睛。'], ['大家笑 + 肚子疼了', '大家笑疼了肚子。']] },
    { t: 'open', q: '【Sách · 思考与练习 十二】Gộp thành câu có bổ ngữ tình thái.', items: [['我很累 + 我什么事情都不想做', '我累得什么事情都不想做。'], ['他很高兴 + 他一夜都没有睡觉', '他高兴得一夜都没有睡觉。'], ['他很生气 + 他跳了起来', '他气得跳了起来。'], ['嗓子眼儿很干 + 直冒烟儿', '嗓子眼儿干得直冒烟儿。'], ['我非常忙 + 我一点儿空儿也没有', '我忙得一点儿空儿也没有。'], ['他写汉字 + 汉字很清楚', '他汉字写得很清楚。']] },
    { t: 'open', q: '【Nâng cao】Đổi câu “V 了个 + X” sang câu “V 得 + X” và ngược lại.', items: [['敌人被打了个落花流水。', '敌人被打得落花流水。'], ['朋友们玩儿了个痛快。', '朋友们玩儿得很痛快。'], ['他把房间弄得乱七八糟。', '他把房间弄了个乱七八糟。']] }
  ],
  adv: {
    g: [['V + 完/懂/见/好/住', 'bổ ngữ kết quả thường dùng', '我听懂了。'], ['V + 在/到/往 + nơi chốn', 'cụm giới từ làm bổ ngữ kết quả', '把地图挂在墙上'], ['V + O + V + 得 + Adj', 'lặp động từ khi có tân ngữ', '说汉语说得很流利'], ['Adj + 得 + cụm động từ', 'tình thái mức độ cao', '忙得连饭都没吃'], ['V + 了个 + X', 'tình thái (khẩu ngữ)', '玩儿了个痛快']],
    an: [['老人哭瞎了眼睛。', '哭 + 瞎 (bổ ngữ kết quả) + 眼睛 (tân ngữ của cụm động bổ): 老人哭 + 眼睛瞎了', 'Ông lão khóc đến mù cả mắt.']],
    v: [['醉', 'zuì', 'say'], ['救活', 'jiùhuó', 'cứu sống'], ['嗓子眼儿', 'sǎngziyǎnr', 'cổ họng'], ['冒烟', 'màoyān', 'bốc khói'], ['弯', 'wān', 'cong'], ['哆嗦', 'duōsuo', 'run rẩy']],
    w: [['Hai thành một', 'Viết 5 cặp câu đơn rồi gộp mỗi cặp thành một câu có bổ ngữ kết quả hoặc tình thái.']]
  } },
{ id: 'g7-4', title: 'Bổ ngữ (II): trình độ, số lượng, khả năng 补语（二）', kind: '语法', src: '（《汉语语法教程》Chương VII, Tiết 2, tr.247–257）',
  p: [
    '## 1. Bổ ngữ trình độ 程度补语',
    'Hai dạng: Adj/ĐT tâm lý + 得 + 很/多/要命/要死/不行/不得了; Adj/ĐT tâm lý + 极了/透了/死了/坏了: 我肚子疼得要命；那个地方脏得不得了；我真是害怕极了；情况糟透了；他为这件事急坏了.',
    'Phân biệt với bổ ngữ kết quả: 他被人打死了 (kết quả, nghĩa gốc) ↔ 我现在难受死了 (trình độ, nghĩa phái sinh); 把收音机弄坏了 ↔ 孩子吓坏了; 衣服湿透了 ↔ 他坏透了. Quy luật: trước là động từ động tác → kết quả; trước là tính từ/động từ tâm lý → trình độ. Bổ ngữ trình độ chỉ một biểu đạt, tác dụng như trạng ngữ mức độ: 我难受得不得了 ≈ 我非常难受 ≈ 我难受极了.',
    '## 2. Bổ ngữ số lượng 数量补语',
    'Động lượng và thời lượng: 我们已经商量过〈几次〉了；拍了〈几下儿〉；去过〈两趟〉；等我〈一会儿〉；他毕业〈一年多〉了.',
    'Vị trí tân ngữ: ① tân ngữ chỉ vật: V + BN + O: 我们讨论过几次这个问题 (*讨论过这个问题几次)；我复习了一晚上(的)语法. ② Tân ngữ nơi chốn/người: cả hai: 去过一次图书馆 = 去过图书馆一次. ③ Tân ngữ đại từ: V + O + BN: 他批评过我一次 (*批评过一次我)；我照顾了他几天. Các cách khác: 我学习英语学习了一下午 / 英语我学习了一下午. 了、过 đứng ngay sau động từ: 我去过三次北京 (*去三次过).',
    'Thời đoạn từ khi sự việc xong đến lúc nói: 他死了三年了；他来北京三年了；他走了半天了. Đặc điểm: không chen 了/过 giữa ĐT và TN (*他出了国三年了 → 他出国三年了); tân ngữ đứng trước bổ ngữ (我到北京半年多了); có thể thêm 才、还不到、已经: 我俩认识才一个月. Động từ ly hợp như động tân: 我排了半个小时队 (*排队了半个小时).',
    '## 3. Hình thức khả năng của bổ ngữ kết quả',
    'V + 得/不 + BN: 我看得懂 / 看不懂；他爬得上去 / 爬不上去. ① Chỉ bổ ngữ nghĩa tích cực: 洗得干净 (*洗得脏)；弄得明白 (*弄得糊涂). ② Khẳng định có nhiều cách (做得完 = 能做完), phủ định chỉ một: 讨论不清楚 (*不能讨论清楚); nhấn mạnh: 我肯定能做得完. ③ Hỏi: 你看得清楚吗？= 看得清楚看不清楚？ ④ Phân biệt với tình thái: 他搞得清楚，你搞得不清楚 (tình thái) ↔ 这个问题不难，他搞得清楚 (khả năng). ⑤ 了 (liǎo): 去得了 / 去不了; 这饭我吃不了 có hai nghĩa: không ăn hết (太多了) / không ăn được (太辣了).',
    '## 4. Chỉ hướng ngữ nghĩa của bổ ngữ',
    'Bổ ngữ có thể nói về: động tác (他跑得很快；把绳子抓紧); chủ thể (他喝醉了；我们玩儿得很高兴); khách thể (把房间打扫干净了); công cụ (我把笔都写秃了); nơi chốn (把卧室摆得满满的); kết quả (把坑挖深了；毛衣织长了); đương sự (她哭瞎了眼睛；孟姜女哭倒了长城).',
    '## 5. Bổ ngữ và trạng ngữ',
    '我们[认真地]讨论了这个问题 ≈ 这个问题我们讨论得〈很认真〉. Khác nhau: ① bổ ngữ tình thái mở rộng được (认真极了；比他们认真得多；一次比一次认真), trạng ngữ thì không. ② Trọng tâm: trạng trung ở động từ, động bổ ở bổ ngữ → muốn nhấn trạng thái dùng bổ ngữ: 这个问题我们昨天讨论了，大家讨论得很认真. ③ Bổ ngữ tình thái cho việc đã xảy ra; việc chưa xảy ra dùng trạng ngữ: 我们想很认真地讨论一下 (*想讨论得很认真).'
  ],
  zh: ['我肚子疼得要命。', '情况糟透了。', '我难受极了。', '我们讨论过几次这个问题。', '他批评过我一次。', '他来北京三年了。', '我排了半个小时队。', '这本书我看得懂。', '这个问题讨论不清楚。', '这饭我吃不了。', '我把笔都写秃了。', '这个问题我们讨论得很认真。'],
  notes: [['程度补语', 'chéngdù bǔyǔ', 'bổ ngữ trình độ'], ['数量补语', 'shùliàng bǔyǔ', 'bổ ngữ số lượng'], ['时量', 'shíliàng', 'thời lượng'], ['动量', 'dòngliàng', 'động lượng'], ['可能式', 'kěnéngshì', 'hình thức khả năng'], ['要命', 'yàomìng', 'chết mất, cực kỳ'], ['不得了', 'bùdéliǎo', 'vô cùng'], ['糟', 'zāo', 'tệ'], ['秃', 'tū', 'cùn, trọc'], ['孟姜女', 'Mèng Jiāngnǚ', 'Mạnh Khương Nữ']],
  ex: [
    { t: 'mc', q: '【Cơ bản】Bổ ngữ in đậm là kết quả hay trình độ?', items: [['他被人打【死】了。', ['kết quả', 'trình độ'], 0], ['我现在难受【死】了。', ['kết quả', 'trình độ'], 1], ['他把收音机弄【坏】了。', ['kết quả', 'trình độ'], 0], ['这个孩子吓【坏】了。', ['kết quả', 'trình độ'], 1], ['衣服已经湿【透】了。', ['kết quả', 'trình độ'], 0], ['他真是坏【透】了。', ['kết quả', 'trình độ'], 1]] },
    { t: 'tf', q: '【Cơ bản】Vị trí tân ngữ và bổ ngữ số lượng — đúng hay sai?', items: [['我们讨论过这个问题几次。', false], ['我们讨论过几次这个问题。', true], ['他批评过一次我。', false], ['他批评过我一次。', true], ['我去过图书馆一次。', true], ['我去三次过北京。', false], ['他出了国三年了。', false], ['我排队了半个小时。', false], ['我排了半个小时队。', true]] },
    { t: 'open', q: '【Sách · 思考与练习 十一】Đổi trạng ngữ thành bổ ngữ trình độ.', items: [['这个人非常坏。', '这个人坏透了 / 坏得很。'], ['那个地方相当热。', '那个地方热得很 / 热得要命。'], ['我特别急。', '我急死了 / 急坏了。'], ['我心里非常难过。', '我心里难过极了。'], ['他工作极为认真。', '他工作认真极了 / 认真得很。'], ['老师非常高兴。', '老师高兴极了 / 高兴得不得了。']] },
    { t: 'fill', q: '【Sách · 思考与练习 十三】Hoàn thành bằng hình thức khả năng.', items: [['这本英文书不太难，我看___。', '得懂'], ['这件行李太重，我拿___。', '不动|不起来'], ['我没带钥匙，进___。', '不去'], ['这座山不算太高，我们爬___。', '得上去'], ['衣服实在是太脏了，恐怕洗___。', '不干净'], ['这个会议室坐___一百人吗？', '得下'], ['你现在才出去，晚上你回___吗？', '得来'], ['你的声音太低，我听___。', '不清楚|不见']] },
    { t: 'match', q: '【Trung bình】Bổ ngữ chỉ hướng về đâu?', items: [['他喝醉了。', 'chủ thể'], ['我把房间打扫干净了。', 'khách thể'], ['我把笔都写秃了。', 'công cụ'], ['他把卧室摆得满满的。', 'nơi chốn'], ['我把坑挖深了。', 'kết quả'], ['他跑得很快。', 'động tác']] },
    { t: 'open', q: '【Sách · 思考与练习 十四】Sửa câu sai về bổ ngữ.', items: [['我听了懂你的话。', '我听懂了你的话。'], ['请你把这张表填完清楚。', '请你把这张表填清楚。'], ['他写汉字得越来越好。', '他写汉字写得越来越好。'], ['只要你平安地回得来，我就满足了。', '只要你平安地回来，我就满足了。'], ['洗澡完了，我就去找你。', '洗完澡，我就去找你。'], ['你连一块石头都不能搬动，怎么能把山搬走呢？', '你连一块石头都搬不动，……'], ['山上一棵树都不看见。', '山上一棵树都看不见。'], ['我不能说汉语很流利。', '我汉语说得不太流利。'], ['我今后要努力把汉语学得好。', '……把汉语学好。'], ['他比我做好得多。', '他比我做得好得多。']] }
  ],
  adv: {
    g: [['Adj + 得 + 要命/不得了', 'cực kỳ (trình độ)', '疼得要命'], ['Adj + 极了/透了/死了', 'cực kỳ (trình độ)', '糟透了'], ['V + 得/不 + BN', 'có thể / không thể', '看得懂 / 看不懂'], ['V + 不了 (liǎo)', 'không thể / không hết', '吃不了'], ['V + 了 + O + thời đoạn + 了', 'thời gian từ khi xảy ra đến nay', '他来北京三年了。']],
    an: [['我学习英语学习了一下午。', 'Lặp động từ: 学习英语 (động tân) + 学习了一下午 (động + bổ ngữ thời lượng)', 'Tôi học tiếng Anh suốt một buổi chiều.']],
    v: [['湿透', 'shītòu', 'ướt sũng'], ['照顾', 'zhàogù', 'chăm sóc'], ['钥匙', 'yàoshi', 'chìa khóa'], ['满足', 'mǎnzú', 'thỏa mãn'], ['绳子', 'shéngzi', 'dây thừng'], ['卧室', 'wòshì', 'phòng ngủ']],
    s: [['Có làm được không?', 'Hỏi – đáp bằng hình thức khả năng: 你听得懂吗？你吃得了吗？你搬得动吗？你看得清楚吗？']]
  } },
{ id: 'g7-5', title: 'Thành phần ngoài câu và ôn tập chương VII 句外成分', kind: '语法', src: '（《汉语语法教程》Chương VII, Tiết 3, tr.257–270）',
  p: [
    '## 1. Thành phần ngoài câu là gì',
    'Có những từ ngữ không tham gia kết cấu câu; bỏ chúng đi câu vẫn là câu chủ vị hoàn chỉnh: 她这个人哪，……；老李，你来一下；毫无疑问，这种做法是错误的。 Gọi là thành phần ngoài câu — nằm ngoài kết cấu nhưng vẫn có tác dụng biểu đạt.',
    '## 2. Thành phần gợi ý 提示成分',
    'Đặt riêng một người/vật ở trước hoặc sau câu để làm nổi bật, trong câu dùng đại từ phúc chỉ: 守纪律，这是我们的美德 (vị trí chủ ngữ)；这样的好学生，我很喜欢他 (tân ngữ)；我非常想念他，亲爱的父亲 (đặt sau)；他这个人哪，你别对他太好 (tân ngữ giới từ).',
    '## 3. Thành phần độc lập 独立成分',
    'Không có quan hệ kết cấu lẫn ngữ nghĩa với thành phần trong câu: hô gọi (老王，你的电话)；cảm thán (哎呀，你怎么流血了？)；ứng đáp (好，这件事就这么办吧)；xen vào (我看、说实在的、总的来说、毫无疑问…): 你这个问题，我看很难解决；我这个人，说实在的，对工作还是很认真的；这些问题总的来说需要尽快解决。 Ngữ xen vào có vị trí linh hoạt.',
    'Khác nhau: thành phần gợi ý có quan hệ phúc chỉ với một thành phần trong câu; thành phần độc lập chỉ có tác dụng biểu đạt.',
    '## Điểm chính chương VII',
    'Định ngữ bổ nghĩa danh từ, trạng ngữ bổ nghĩa động/tính từ và câu; cả hai có vấn đề 的/地 và trật tự nhiều thành phần. Có định ngữ giả. Bổ ngữ gồm kết quả (có hình thức khả năng), tình thái, trình độ, số lượng; có nhiều hướng ngữ nghĩa; quan hệ chặt với trạng ngữ. Thành phần ngoài câu gồm gợi ý và độc lập.'
  ],
  zh: ['老李，你来一下。', '毫无疑问，这种做法是错误的。', '守纪律，这是我们的美德。', '这样的好学生，我很喜欢他。', '哎呀，你怎么流血了？', '好，这件事就这么办吧。', '我这个人，说实在的，对工作还是很认真的。', '这些问题总的来说需要尽快解决。'],
  notes: [['句外成分', 'jùwài chéngfèn', 'thành phần ngoài câu'], ['提示成分', 'tíshì chéngfèn', 'thành phần gợi ý'], ['独立成分', 'dúlì chéngfèn', 'thành phần độc lập'], ['插入语', 'chārùyǔ', 'ngữ xen vào'], ['复指', 'fùzhǐ', 'phúc chỉ'], ['毫无疑问', 'háo wú yíwèn', 'không nghi ngờ gì'], ['说实在的', 'shuō shízài de', 'nói thật thì'], ['总的来说', 'zǒng de lái shuō', 'nói chung'], ['美德', 'měidé', 'đức tính tốt']],
  ex: [
    { t: 'mc', q: '【Cơ bản】Phần in đậm thuộc loại nào?', items: [['【老王】，你的电话。', ['gợi ý', 'hô gọi', 'xen vào'], 1], ['【守纪律】，这是我们的美德。', ['gợi ý', 'hô gọi', 'xen vào'], 0], ['这些问题【总的来说】需要尽快解决。', ['gợi ý', 'hô gọi', 'xen vào'], 2], ['【哎呀】，你怎么流血了？', ['cảm thán', 'gợi ý', 'xen vào'], 0], ['你这个问题，【我看】很难解决。', ['gợi ý', 'ứng đáp', 'xen vào'], 2]] },
    { t: 'tf', q: '【Sách · 思考与练习 一】Đúng hay sai?', items: [['定语是修饰名词性中心语的，状语是修饰动词性中心语的。', false], ['名词、形容词、动词都可以自由地作定语。', false], ['所有的形容词都可以作定语。', false], ['只有副词可以作状语。', false], ['多项定语和多项状语的排列是没有规律的。', false], ['状语在语义上不只是指向谓语中心语，还指向其他成分。', true], ['“的”和“地”的使用完全没有规律。', false], ['补语是汉语中一种很特殊的句子成分。', true], ['带结果补语的句子都是由两个表述构成的。', true], ['情态补语和状语有密切的联系。', true]] },
    { t: 'tf', q: '【Sách · 思考与练习 四】Cụm định trung nào BẮT BUỘC thêm 的?', items: [['多么崇高 _ 品格', true], ['带着眼镜 _ 小伙子', true], ['中国 _ 同学', false], ['后面 _ 队伍', true], ['学习 _ 方法', false], ['寒冷 _ 冬天', false], ['勤奋刻苦 _ 精神', true], ['同学 _ 母亲', true], ['粗布 _ 衣服', false], ['他 _ 父亲', false], ['非常流利 _ 发言', true], ['工作 _ 计划', false], ['木头 _ 椅子', false], ['洗干净 _ 衣服', true], ['关于他 _ 问题', true], ['很多 _ 事情', false], ['雪白 _ 羊群', true], ['对他 _ 意见', true]] },
    { t: 'open', q: '【Sách · 思考与练习 二】Đánh dấu định ngữ ( ) và trạng ngữ [ ].', items: [['他使劲把那扇窗户打开。', '他[使劲][把(那扇)窗户]打开。'], ['两三片透明的白云悄悄地游动着。', '(两三片)(透明的)白云[悄悄地]游动着。'], ['劳动人民创造了灿烂的古代文化。', '(劳动)人民创造了(灿烂的)(古代)文化。'], ['我们经常在一起讨论问题。', '我们[经常][在一起]讨论问题。'], ['经理原则同意我们的方案。', '经理[原则]同意(我们的)方案。'], ['我从来不以这种方式和别人交往。', '我[从来][不][以这种方式][和别人]交往。'], ['他一直精心照顾着这个残疾的弟弟。', '他[一直][精心]照顾着(这个)(残疾的)弟弟。']] },
    { t: 'open', q: '【Sách · 思考与练习 五、六】Sắp xếp định ngữ / gộp nhiều biểu đạt thành một câu.', items: [['精美，汉语，那本，我，词典', '我的那本精美的汉语词典'], ['乡下，姑娘，一个，土里土气，十七八岁', '一个十七八岁的土里土气的乡下姑娘'], ['高个子，同学，我们班，很帅，那个', '我们班那个很帅的高个子同学'], ['爸爸是一位经理 + 关心职员 + 办事果断', '爸爸是一位关心职员、办事果断的经理。'], ['我买了一本书 + 很便宜 + 是英文的', '我买了一本很便宜的英文书。'], ['医院接收了一个病人 + 三十多岁 + 病得很重', '医院接收了一个三十多岁、病得很重的病人。']] },
    { t: 'open', q: '【Sách · 思考与练习 七】Sửa câu sai (định ngữ, trạng ngữ).', items: [['有的他的意见还是正确的。', '他的有的意见还是正确的。'], ['我们有了自己企业。', '我们有了自己的企业。'], ['这是刚三岁的他弟弟。', '这是他刚三岁的弟弟。'], ['我有了机会两年前去西藏游览。', '两年前我有了机会去西藏游览。'], ['那个我们学校的操场很小。', '我们学校的那个操场很小。'], ['我很喜欢这个健康能干小伙子。', '我很喜欢这个健康能干的小伙子。'], ['突然从房间里那个人跑出来。', '突然那个人从房间里跑出来。'], ['他很认真工作了很多年。', '他很认真地工作了很多年。'], ['中国朋友热烈隆重举行了欢迎仪式。', '中国朋友热烈隆重地举行了欢迎仪式。'], ['我8点早上去上课。', '我早上8点去上课。'], ['希望你亲自地跟他谈谈。', '希望你亲自跟他谈谈。']] },
    { t: 'order', q: '【Sách · 思考与练习 八】Đặt các trạng ngữ đúng vị trí.', items: [['我', '马上', '就', '给他', '打电话。'], ['他', '刚才', '在外面', '对我', '发了脾气。'], ['他', '从来', '不', '把别人', '放在眼里。'], ['他', '最近', '也', '被坏人', '把腿', '打伤了。'], ['你', '别', '马上', '把这件事', '告诉他。']] }
  ],
  adv: {
    g: [['N/V-cụm，这/他 + …', 'thành phần gợi ý + đại từ phúc chỉ', '守纪律，这是我们的美德。'], ['我看 / 说实在的 / 总的来说', 'ngữ xen vào', '我看，这事不难。'], ['毫无疑问，…', 'khẳng định chắc chắn', '毫无疑问，他是对的。']],
    v: [['使劲', 'shǐjìn', 'dùng sức'], ['灿烂', 'cànlàn', 'rực rỡ'], ['残疾', 'cánjí', 'tàn tật'], ['果断', 'guǒduàn', 'quả quyết'], ['隆重', 'lóngzhòng', 'trọng thể'], ['土里土气', 'tǔlitǔqì', 'quê mùa']],
    s: [['Nêu ý kiến', 'Nói 1 phút về một vấn đề trong lớp, dùng ít nhất 3 ngữ xen vào: 我看、说实在的、总的来说、毫无疑问.']]
  } }
] },
{ n: 8, title: 'Chương VIII · Loại câu và mô hình câu 句类和句型', texts: [
{ id: 'g8-1', title: 'Loại câu; câu trần thuật và câu nghi vấn 句类·陈述句·疑问句', kind: '语法', src: '（《汉语语法教程》Chương VIII, Tiết 1, tr.271–286）',
  p: [
    '## 1. Khái quát về loại câu',
    'Phân theo ngữ khí/chức năng: trần thuật (我昨天去医院看了一个病人。), nghi vấn (她今天怎么没有来？), cầu khiến (你给我出去！), cảm thán (这幅画儿真漂亮啊！). Trần thuật cung cấp thông tin; nghi vấn tìm thông tin; cầu khiến yêu cầu phản ứng bằng hành động; cảm thán bày tỏ tình cảm.',
    'Hình thức và chức năng không luôn trùng: trong phòng kín, 甲：这屋里真热啊！ — câu cảm thán nhưng là yêu cầu mở cửa sổ. Văn nghị luận chủ yếu dùng câu trần thuật.',
    'Loại câu ảnh hưởng cấu tạo: câu trần thuật cần thành phần hoàn thành câu (*信寄 → 信寄了), câu nghi vấn thì không (信寄吗？东西贵吗？). Động từ phi tự chủ không làm câu cầu khiến: 你总丢东西 (*你丢东西！)；我在路上遇到她了 (*我在路上遇到她！).',
    '## 2. Câu trần thuật 陈述句',
    'Báo một sự việc hoặc trình bày lý lẽ, ngữ điệu bằng hơi xuống: 我们以前见过面。社会是人生最好的课堂。 Có thể lược chủ ngữ trong đối thoại (乙：都去了。) hoặc là câu vô chủ (下雨了；轮到你了).',
    'Khẳng định / phủ định; “phủ định + phủ định = khẳng định” nhưng nghĩa không hoàn toàn như khẳng định thường: 我不是不想告诉你 (giải thích lý do: 实在是没有办法); 我不能不帮他一把 = 我必须帮他.',
    'Trợ từ ngữ khí trần thuật: 的、了、呢、嘛、啊、罢了: 他工作从来都很认真的；他不过就是随便说说罢了；本来就应该这样嘛.',
    '## 3. Câu nghi vấn 疑问句',
    '① Hỏi đúng – sai (trả lời 是/对/不/不是): dùng 吗 (你们下午工作吗？); dùng ngữ điệu (现在就出发？); dùng “A不/没A” (你看不看？问题解决没解决？). Lưu ý dạng A不/没A: song âm có “A不AB” và “AB不AB” (学不学习 / 学习不学习); giới từ cũng dùng được (跟不跟); hỏi đã hoàn thành chưa dùng A没A; cuối câu dùng 呢 không dùng 吗 (*买不买吗); khẩu ngữ còn có “A…不A” (看电影不看？).',
    '② Hỏi lựa chọn “(是) A 还是 B”: 你(是)喝茶还是喝咖啡？ Có thể lược thành phần chung (吃米饭还是饺子？) — trừ khi hỏi về chủ ngữ (你做饭还是我做饭？) hoặc trạng ngữ (你是在家办公还是在公司办公？). Có thể 3–4 lựa chọn.',
    '③ Hỏi đặc chỉ (dùng đại từ nghi vấn): người (谁、什么人、哪位 — 哪位 lịch sự hơn), vật (什么、哪本), thời gian (什么时候、几点、哪天), nơi chốn (哪儿 = 什么地方), số lượng (几、多少), nguyên nhân (为什么、因为什么、怎么), cách thức (怎么、用什么方式).',
    '④ Câu phản vấn (hỏi mà không nghi): hình thức phủ định → nghĩa khẳng định (你难道不清楚吗？= 你是清楚的); hình thức khẳng định → nghĩa phủ định (你怎么能告诉他呢？= 你不应该告诉他). Có dạng đúng–sai (难道……吗), đặc chỉ (我能有什么办法呢？), lựa chọn (我是吃了你的，还是喝了你的？). Sắc thái: bất mãn (你这样做，对得起谁呀？), thúc giục (你还不快跑？), nhắc nhở (我不是告诉过你吗？).',
    '⑤ Hỏi suy đoán với 吧 hoặc “……，是吧/对吧？”: 她这会儿该回来了吧？ ⑥ Hỏi tỉnh lược “X + 呢？”: danh từ — tiếp lời (你呢？) hoặc tìm kiếm (我的帽子呢？= 在哪儿); động từ — mang ý giả thiết, không mở đầu hội thoại (我不去呢？= 如果我不去，……?).'
  ],
  zh: ['她今天怎么没有来？', '我不是不想告诉你，我实在是没有办法。', '我不能不帮他一把。', '这个电影你看不看？', '问题解决没解决？', '你喝茶还是喝咖啡？', '你做饭还是我做饭？', '您是哪位？', '你难道不清楚吗？', '你还不快跑？', '她这会儿该回来了吧？', '我的帽子呢？'],
  notes: [['句类', 'jùlèi', 'loại câu'], ['陈述句', 'chénshùjù', 'câu trần thuật'], ['疑问句', 'yíwènjù', 'câu nghi vấn'], ['是非问', 'shìfēiwèn', 'câu hỏi đúng–sai'], ['选择问', 'xuǎnzéwèn', 'câu hỏi lựa chọn'], ['特指问', 'tèzhǐwèn', 'câu hỏi đặc chỉ'], ['反问句', 'fǎnwènjù', 'câu phản vấn'], ['揣测问', 'chuǎicèwèn', 'câu hỏi suy đoán'], ['省略问', 'shěnglüèwèn', 'câu hỏi tỉnh lược'], ['难道', 'nándào', 'lẽ nào'], ['罢了', 'bàle', 'mà thôi'], ['疑问点', 'yíwèndiǎn', 'điểm nghi vấn']],
  ex: [
    { t: 'mc', q: '【Cơ bản】Câu thuộc loại câu hỏi nào?', items: [
      ['你们下午工作吗？', ['đúng–sai', 'lựa chọn', 'đặc chỉ', 'phản vấn'], 0], ['你喝茶还是喝咖啡？', ['đúng–sai', 'lựa chọn', 'đặc chỉ', 'phản vấn'], 1], ['假期什么时候结束？', ['đúng–sai', 'lựa chọn', 'đặc chỉ', 'phản vấn'], 2], ['我能不知道吗？', ['đúng–sai', 'lựa chọn', 'đặc chỉ', 'phản vấn'], 3], ['他们也许还不知道吧？', ['suy đoán', 'lựa chọn', 'đặc chỉ', 'tỉnh lược'], 0], ['老王呢？', ['suy đoán', 'lựa chọn', 'đặc chỉ', 'tỉnh lược'], 3], ['你愿不愿意跟我们合作？', ['đúng–sai', 'lựa chọn', 'đặc chỉ', 'phản vấn'], 0]] },
    { t: 'tf', q: '【Cơ bản】Câu nào đúng?', items: [['这本词典买不买呢？', true], ['这本词典买不买吗？', false], ['信寄吗？', true], ['信寄。', false], ['你丢东西！', false], ['你是在家办公还是在公司办公？', true], ['你做饭还是我？ (hỏi về chủ ngữ, lược 做饭)', false]] },
    { t: 'match', q: '【Trung bình】Nối câu phản vấn với nghĩa thật.', items: [['你难道不清楚吗？', '你是清楚的。'], ['你怎么能告诉他呢？', '你不应该告诉他。'], ['他难道敢打你不成？', '他不敢打你。'], ['你还不快跑？', '你要快跑。'], ['我不是告诉过你吗？', '你不应该又问我。']] },
    { t: 'open', q: '【Trung bình】Đổi sang câu phản vấn.', items: [['你应该帮助他。', '难道你不应该帮助他吗？'], ['我没有办法。', '我能有什么办法呢？'], ['这件事你知道。', '这件事你能不知道吗？'], ['你不该这样对待我。', '我是吃了你的，还是喝了你的？你怎么能这样对待我！']] },
    { t: 'open', q: '【Nâng cao】Đặt câu hỏi cho phần in đậm bằng đại từ nghi vấn.', items: [['【小王】给我打电话了。', '谁给你打电话了？'], ['电影【七点】开演。', '电影几点开演？'], ['我们【坐地铁】去。', '我们怎么去？'], ['她今天没来，【因为病了】。', '她今天为什么没来？'], ['对方有【五个人】参加谈判。', '对方有几个人参加谈判？']] },
    { t: 'open', q: '【Nâng cao】Giải thích ý nghĩa “我不去呢？” trong hai ngữ cảnh.', items: [['甲：你去的话，这个机会就给你。乙：我不去呢？', '如果我不去的话，你把这个机会给谁？'], ['甲：你最好还是去吧。乙：我不去呢？', '如果我不去，可以不可以？/ 你会把我怎么样？']] }
  ],
  adv: {
    g: [['A不A + 呢？', 'hỏi chính phản, không dùng 吗', '你去不去呢？'], ['(是) A 还是 B？', 'hỏi lựa chọn', '你是喝茶还是喝咖啡？'], ['难道……吗？', 'phản vấn', '难道你不知道吗？'], ['……，是吧/对吧？', 'hỏi suy đoán', '他是北京人，对吧？'], ['不是不……', 'phủ định kép, có ý giải thích', '我不是不想去。']],
    an: [['我不是不想告诉你，我实在是没有办法。', 'Phủ định kép 不是不 = muốn nói, kèm câu giải thích nguyên nhân', 'Không phải tôi không muốn nói với bạn, thật sự là tôi không có cách nào.']],
    v: [['达成', 'dáchéng', 'đạt được'], ['协议', 'xiéyì', 'thỏa thuận'], ['看待', 'kàndài', 'nhìn nhận'], ['谈判', 'tánpàn', 'đàm phán'], ['前景', 'qiánjǐng', 'triển vọng'], ['对得起', 'duìdeqǐ', 'xứng đáng với']],
    s: [['Phỏng vấn', 'Phỏng vấn bạn về kỳ nghỉ, dùng đủ 6 loại câu hỏi: 吗、A不A、还是、đại từ nghi vấn、吧、呢.']]
  } },
{ id: 'g8-2', title: 'Câu cầu khiến, câu cảm thán và quan hệ giữa các loại câu 祈使句·感叹句', kind: '语法', src: '（《汉语语法教程》Chương VIII, Tiết 1, tr.286–294）',
  p: [
    '## 1. Câu cầu khiến 祈使句',
    'Biểu đạt mệnh lệnh, thỉnh cầu, cấm đoán: 你过来。咱们准备一下。这里禁止吸烟。',
    'Đặc điểm hình thức: ① chủ ngữ là 你、您、你们、咱们、我们 (không dùng 他、我、她们), thường lược: (你)过来。 ② Vị ngữ là động từ tự chủ; tính từ trơn không được, nhưng “Adj + (一)点儿” được: 快(一)点儿！虚心点儿！你老实点儿。 Thêm 给我 để tăng ngữ khí: 你给我小心点儿！你给我滚出去！ (给我 đã hư hóa: *你给他滚出去). ③ Một số “AA儿的”: 慢慢儿的！悄悄儿的！',
    'Loại: mệnh lệnh (ngắn, dứt khoát: 出去！把箱子抬进来！); cấm đoán (别/不要 + V: 别说话；不要轻举妄动; văn viết: 禁止吸烟、请勿拍照、不许); kiến nghị (uyển chuyển: 你试试吧；咱们走吧；你最好去看一下；该回去了); thỉnh cầu (khách sáo, mở đầu bằng 请、麻烦、劳驾: 请帮我照张相；劳驾让让路；麻烦您帮我看一下东西).',
    '## 2. Câu cảm thán 感叹句',
    'Nhiều câu phi chủ vị: 太好了！真棒！好！ Phó từ 多么、多、真、好、太 chủ yếu dùng trong câu cảm thán, không dùng trong câu trần thuật: *我昨天买了一件真漂亮的衣服 → 我昨天买的那件衣服真漂亮！; *爸爸是一位太伟大的爸爸 → 爸爸太伟大了！ Tính từ là “điểm cảm thán”: 你说得太精彩了！多么美丽的草原啊！ Có câu chỉ một thán từ (唉！嘿！) hoặc cố định: 天哪！我的天哪！',
    '## 3. Liên hệ giữa các loại câu',
    '① Câu trần thuật chứa hình thức nghi vấn làm tân ngữ, cuối câu dùng dấu chấm: 我想知道你什么时候回来。我不知道他是哪个地方的人。我怀疑他是不是真的有这个能力。 (≈ 我想知道你回来的时间。)',
    '② Hình thức nghi vấn, chức năng cầu khiến (uyển chuyển hơn): 您能帮我一下吗？我用一下电话，可以吧？ So: 请帮一下忙 (dứt khoát) / 能帮一下忙吗？ (để người nghe suy nghĩ).',
    '③ “V + 什么 + (O)” = cấm đoán, ngữ khí rất mạnh, phản đối người nghe: 你们吵什么！哭什么！看什么电影！你的功课还没完成呢。等什么！快走吧。 Động từ song âm có khi bị tách: 讨什么论！就这么决定了。'
  ],
  zh: ['你过来。', '这里禁止吸烟。', '快点儿！', '你给我小心点儿！', '别说话。', '咱们走吧。', '麻烦您帮我看一下东西。', '你说得太精彩了！', '多么美丽的草原啊！', '我想知道你什么时候回来。', '您能帮我一下吗？', '哭什么！'],
  notes: [['祈使句', 'qíshǐjù', 'câu cầu khiến'], ['命令句', 'mìnglìngjù', 'câu mệnh lệnh'], ['禁止句', 'jìnzhǐjù', 'câu cấm đoán'], ['建议句', 'jiànyìjù', 'câu kiến nghị'], ['请求句', 'qǐngqiújù', 'câu thỉnh cầu'], ['感叹句', 'gǎntànjù', 'câu cảm thán'], ['请勿', 'qǐng wù', 'xin đừng'], ['劳驾', 'láojià', 'phiền anh/chị'], ['轻举妄动', 'qīng jǔ wàng dòng', 'hành động thiếu suy nghĩ'], ['虚心', 'xūxīn', 'khiêm tốn'], ['怀疑', 'huáiyí', 'nghi ngờ']],
  ex: [
    { t: 'match', q: '【Cơ bản】Nối câu với loại câu cầu khiến.', items: [['把箱子抬进来！', 'mệnh lệnh'], ['请勿拍照！', 'cấm đoán'], ['你最好去看一下。', 'kiến nghị'], ['劳驾让让路。', 'thỉnh cầu'], ['看什么电影！', 'cấm đoán (V + 什么)']] },
    { t: 'tf', q: '【Cơ bản】Câu nào đúng?', items: [['他过来！', false], ['快点儿！', true], ['你高兴！', false], ['你给他滚出去！', false], ['我昨天买了一件真漂亮的衣服。', false], ['爸爸太伟大了！', true], ['我想知道你什么时候回来？', false], ['我想知道你什么时候回来。', true]] },
    { t: 'mc', q: '【Trung bình】Chọn cách nói phù hợp nhất.', items: [['Nhờ người lạ chụp ảnh:', ['给我照张相！', '请帮我照张相。', '照什么相！'], 1], ['Bảo bạn đừng khóc (mạnh):', ['哭什么！', '请哭吧。', '你哭吗？'], 0], ['Biển báo nơi công cộng:', ['别抽烟吧。', '禁止吸烟', '抽什么烟！'], 1], ['Đề nghị nhẹ nhàng:', ['滚！', '咱们先休息一会儿吧。', '给我休息！'], 1]] },
    { t: 'open', q: '【Nâng cao】Đổi câu trần thuật dùng sai phó từ thành câu cảm thán.', items: [['我的爸爸是一位太伟大的爸爸。', '我的爸爸太伟大了！'], ['我昨天买了一件真漂亮的衣服。', '我昨天买的那件衣服真漂亮！'], ['那是一个多么安静的地方。', '那个地方多么安静啊！']] },
    { t: 'open', q: '【Nâng cao】Viết lại câu cầu khiến theo 3 mức: mệnh lệnh → kiến nghị → thỉnh cầu bằng câu hỏi.', items: [['Bảo người khác đóng cửa', '关门！→ 你把门关上吧。→ 您能帮我把门关上吗？'], ['Bảo người khác nói nhỏ', '小声点儿！→ 咱们说话小声点儿吧。→ 能请您说话小声一点儿吗？']] }
  ],
  adv: {
    g: [['Adj + (一)点儿！', 'cầu khiến bằng tính từ', '快点儿！'], ['你给我 + V！', 'tăng ngữ khí mệnh lệnh', '你给我出去！'], ['V + 什么(+O)！', 'cấm đoán, phản đối mạnh', '等什么！快走吧。'], ['多(么) + Adj + 啊！', 'cảm thán', '多么美啊！'], ['能……吗？/ ……，可以吧？', 'thỉnh cầu uyển chuyển', '我用一下电话，可以吧？']],
    an: [['甲：这个问题再讨论一下吧。乙：讨什么论！就这么决定了。', '讨论 bị tách thành 讨 + 什么 + 论 do ngữ khí cấm đoán rất mạnh', 'Còn bàn cái gì nữa! Cứ quyết định như vậy.']],
    v: [['箱子', 'xiāngzi', 'va li, rương'], ['抬', 'tái', 'khiêng'], ['滚', 'gǔn', 'cút'], ['悄悄', 'qiāoqiāo', 'lặng lẽ'], ['籍贯', 'jíguàn', 'quê quán'], ['吵', 'chǎo', 'cãi nhau, ồn']],
    s: [['Đóng vai', 'Đóng vai bố mẹ – con, dùng cả câu mệnh lệnh, cấm đoán (V + 什么), kiến nghị và thỉnh cầu.']]
  } },
{ id: 'g8-3', title: 'Mô hình câu cơ bản và câu tồn hiện 基本句型·存现句', kind: '语法', src: '（《汉语语法教程》Chương VIII, Tiết 2, tr.294–304）',
  p: [
    '## 1. Mô hình câu (kiểu câu)',
    'Mô hình câu là khuôn cấu tạo câu khái quát từ hình thức: S + V + O khái quát 我看电视呢；她也学习汉语；他们经营着这家公司. Định ngữ, trạng ngữ không tính khi khái quát.',
    'Mô hình cơ bản là mô hình không do đảo vị trí, tỉnh lược hay rút gọn mà có: 我看完了那本书 (S+V+O) là cơ bản; 那本书我看完了 (O+S+V), 我那本书看完了 (S+O+V) là phái sinh.',
    '## 2. Năm mô hình câu cơ bản',
    '① S + V (nội động từ): 他们休息了；雨停了；客人走了. Cùng một động từ có thể nội/ngoại động: 客人来了 ↔ 我来一瓶啤酒 (来 = 要).',
    '② S + V + O (ngoại động từ): 我们帮助过她；他害怕狗；她同意参加；我认为你不对.',
    '③ S + vị ngữ tính từ: 天气很冷；样子难看得很；他紧张得脸都白了.',
    '④ S + vị ngữ cụm danh từ (có số lượng hoặc tính từ, mang tính miêu tả/nói rõ): 这个姑娘大眼睛；两个人一间房；这本书七十页. Câu phán đoán khẩu ngữ lược 是: 她(是)上海人；今天(是)星期天 — nhưng phủ định phải có 是: 她不是上海人.',
    '⑤ S + vị ngữ chủ vị: 他性格坚强；公园里鲜花盛开；我对这些兴致不大；他对未来信心十足 (cụm chủ vị làm vị ngữ không tự thành câu; có thể chen trạng ngữ).',
    '## 3. Câu tồn hiện 存现句',
    'Biểu thị sự tồn tại, xuất hiện, mất đi: Nơi chốn/Thời gian + V (着/了/bổ ngữ) + người/vật: 墙上挂着一张画儿 (tồn tại)；前面来了一个人 (xuất hiện)；她家跑了一只猫；昨天死了一个người (mất đi).',
    'Đầu câu: từ nơi chốn (隔壁、前面、桌子上边、在树底下、沿着街道) hoặc thời gian (最近、三天前). Giữa câu: động từ chủ yếu đơn âm, không dùng 吃、喝、看、想、听、知道…; chủ thể của nội động từ chỉ đứng sau động từ trong câu tồn hiện (一个人站着 / 门口站着一个人, *站着一个人). Động từ không đứng trơn: phải có 着/了 hoặc bổ ngữ (树上挂满了果实；门外跑进来一个人). Cuối câu: thường có số lượng; câu tồn tại cho phép định chỉ/bất định chỉ, câu ẩn hiện phải bất định chỉ (楼上走下来一个人, *楼上走下来老王).',
    'Câu tồn tại: ① + 着/了 (脸上带着迷人的微笑；地上坐了几个人 — 着 thiên về trạng thái kéo dài); ② + 是 (远处是一片高楼, vẫn có chút phán đoán); ③ + 有 (前面有一个邮局, trực tiếp nhất); ④ V + 有 (văn viết: 墙上挂有一幅名画儿)；⑤ không động từ + số lượng (天上一片乌云；田野里一片金黄的麦浪).',
    'Câu ẩn hiện: đầu câu là nơi chốn hoặc thời gian (刚才开过去几辆军车); động từ mang nghĩa xuất hiện/mất đi (出现、浮现、消失、死) hoặc có bổ ngữ (搬走、响起、跑过来、溜出去). Câu tồn hiện rất hay dùng khi miêu tả cảnh vật: 饭厅中央放着一张餐桌，上面摆着一个花瓶。墙上挂了几张画儿。'
  ],
  zh: ['那本书我看完了。', '客人走了。', '他对未来信心十足。', '这个姑娘大眼睛。', '她不是上海人。', '墙上挂着一张画儿。', '前面来了一个人。', '门口站着一个人。', '远处是一片高楼。', '前面有一个邮局。', '刚才开过去几辆军车。', '天上一片乌云。'],
  notes: [['句型', 'jùxíng', 'mô hình câu, kiểu câu'], ['基本句型', 'jīběn jùxíng', 'mô hình câu cơ bản'], ['不及物动词', 'bù jíwù dòngcí', 'nội động từ'], ['及物动词', 'jíwù dòngcí', 'ngoại động từ'], ['主谓谓语句', 'zhǔwèi wèiyǔjù', 'câu vị ngữ chủ vị'], ['存现句', 'cúnxiànjù', 'câu tồn hiện'], ['存在句', 'cúnzàijù', 'câu tồn tại'], ['隐现句', 'yǐnxiànjù', 'câu ẩn hiện'], ['盛开', 'shèngkāi', 'nở rộ'], ['兴致', 'xìngzhì', 'hứng thú'], ['乌云', 'wūyún', 'mây đen'], ['麦浪', 'màilàng', 'sóng lúa mì']],
  ex: [
    { t: 'mc', q: '【Cơ bản】Câu thuộc mô hình nào?', items: [['雨停了。', ['S+V', 'S+V+O', 'S+tính từ', 'S+chủ vị'], 0], ['他害怕狗。', ['S+V', 'S+V+O', 'S+tính từ', 'S+chủ vị'], 1], ['天气很冷。', ['S+V', 'S+V+O', 'S+tính từ', 'S+chủ vị'], 2], ['他性格坚强。', ['S+V', 'S+V+O', 'S+tính từ', 'S+chủ vị'], 3], ['两个人一间房。', ['S+cụm danh từ', 'S+V+O', 'S+tính từ', 'S+chủ vị'], 0]] },
    { t: 'tf', q: '【Cơ bản】Câu tồn hiện nào đúng?', items: [['墙上挂着一张画儿。', true], ['墙上挂一张画儿。', false], ['门口站着一个人。', true], ['站着一个人。', false], ['楼上走下来老王。', false], ['楼上走下来一个人。', true], ['桌子上吃着一个苹果。', false], ['树上挂满了果实。', true]] },
    { t: 'match', q: '【Trung bình】Nối câu với ý nghĩa.', items: [['床上躺着一位老人。', 'tồn tại'], ['后面开过来一辆汽车。', 'xuất hiện'], ['她家跑了一只猫。', 'mất đi'], ['前面有一个邮局。', 'tồn tại (有)'], ['远处是一片高楼。', 'tồn tại (是)']] },
    { t: 'order', q: '【Trung bình】Sắp xếp thành câu tồn hiện.', items: [['墙上', '挂着', '一幅', '山水画。'], ['门外', '跑进来', '一个', '孩子。'], ['刚才', '开过去', '几辆', '军车。'], ['饭厅中央', '放着', '一张', '餐桌。']] },
    { t: 'open', q: '【Nâng cao】Dùng câu tồn hiện miêu tả căn phòng của bạn (5–6 câu, tham khảo).', items: [['Miêu tả phòng', '我的房间不大。进门左边是一张床，床上放着两个枕头。窗户前面有一张书桌，桌子上摆着一盏台灯和几本书。墙上挂着一张中国地图。']] }
  ],
  adv: {
    g: [['Nơi + V着 + số lượng + N', 'tồn tại', '墙上挂着一张画儿。'], ['Nơi/Thời gian + V + bổ ngữ xu hướng + 一 + N', 'xuất hiện', '门外跑进来一个人。'], ['Nơi + 是 + N', 'tồn tại (nhấn mạnh cái gì)', '左边是厨房。'], ['Nơi + V + 有 + N', 'tồn tại (văn viết)', '大门上装有监视设备。'], ['S + N + Adj', 'vị ngữ chủ vị', '他身体很好。']],
    an: [['公园里鲜花盛开。', 'Chủ ngữ 公园里 + vị ngữ chủ vị 鲜花盛开 (鲜花 chủ nhỏ + 盛开 vị nhỏ)', 'Trong công viên hoa nở rộ.']],
    v: [['经营', 'jīngyíng', 'kinh doanh'], ['坚强', 'jiānqiáng', 'kiên cường'], ['迷人', 'mírén', 'quyến rũ'], ['威武', 'wēiwǔ', 'oai vệ'], ['监视', 'jiānshì', 'giám sát'], ['浮现', 'fúxiàn', 'hiện lên'], ['溜', 'liū', 'lẻn']],
    w: [['Tả cảnh', 'Viết đoạn 80 chữ tả một quảng trường lúc sáng sớm, dùng ít nhất 5 câu tồn hiện khác nhau.']]
  } },
{ id: 'g8-4', title: 'Câu chữ 把 把字句', kind: '语法', src: '（《汉语语法教程》Chương VIII, Tiết 2, tr.304–312）',
  p: [
    '## 1. Khái quát',
    'Câu có cụm giới từ 把 (将) làm trạng ngữ trước động từ, biểu thị ý nghĩa xử trí: Chủ ngữ + [把 + N] + V…: 我把饺子都吃了；孩子把衣服弄脏了. Xử trí hiểu rộng: động tác tác động lên đối tượng làm nó có kết quả, thay đổi, trạng thái nào đó: 先把他送交公安机关；把它洗干净再说；我把你的名字忘了；我把他恨透了.',
    '## 2. Đặc điểm kết cấu',
    'Tân ngữ của 把: định chỉ hoặc phiếm chỉ, không bất định chỉ: 我把信寄走了 / 我把那封信寄走了 (*我把一封信寄走了 → 我寄走了一封信); phiếm chỉ: 能把意思充分地表达出来；她把每封信都写上了这句话 (*把任何信).',
    'Đoạn động từ: ① không thể chỉ một động từ trơn: *她把我批评 → 她把我批评了；*我把那本书看 → 看完了. Phía sau ít nhất có 了/着/过 (你可以把钱存着), hoặc phía trước có trạng ngữ (别把衣服到处乱丢), hoặc lặp động từ (你好好把这个问题想想). ② Cả đoạn động từ quan hệ với đối tượng: 她把眼睛都哭瞎了 (không nói 哭眼睛). ③ Động từ phải có tính xử trí; không dùng 来、去、到、回来, 遇到、见到、看见… ④ Sau động từ có thể còn danh từ: tân ngữ gián tiếp (我把那件事告诉她了), công cụ/vật liệu (把行李捆上绳子；把门刷了点儿油漆), kết quả gọi tên/nhận định/biến đổi (我们把祖国称为母亲；我把他看作兄弟；把裙子改成了裤子). ⑤ Phủ định đặt trước 把: 我不把这个秘密告诉他 (*把这个秘密不告诉他)；他没把问题搞清楚；你别把电视弄坏了.',
    '## 3. Quan hệ ngữ nghĩa',
    'Thường: chủ thể + 把 + khách thể + động tác (我把杯子打碎了). Còn có: chủ thể + 把 + công cụ (我把笔都写坏了；他砍骨头把刀砍钝了); nguyên nhân + 把 + chủ thể (喝凉水把孩子喝病了 = 因为喝凉水，孩子病了 — khẩu ngữ).',
    '## 4. Khi nào phải dùng, khi nào có thể dùng 把',
    'Bắt buộc: ① động từ mang bổ ngữ có 得: 她把房间打扫得非常干净 (*打扫房间得非常干净); ② bổ ngữ là cụm giới từ: 我把钱存在银行 (*存在银行钱)；把行李放在行李架上; ③ có thành phần kết quả 成、作、为: 我把这本书翻译成英文；我把他看作好朋友.',
    'Có thể dùng hoặc không: động từ + 了/着/过 (我看了那本书 = 我把那本书看了); bổ ngữ kết quả (打扫完房间了 = 把房间打扫完了); động từ lặp hoặc + 一下 (把这个问题认真考虑考虑). Chú ý: 老师改了几份作业 (bất định) ≠ 老师把几份作业改了 (mấy bài cụ thể).'
  ],
  zh: ['我把饺子都吃了。', '孩子把衣服弄脏了。', '我把那封信寄走了。', '你可以把钱存着。', '别把衣服到处乱丢。', '她把眼睛都哭瞎了。', '我把那件事告诉她了。', '我们把祖国称为母亲。', '我不把这个秘密告诉他。', '喝凉水把孩子喝病了。', '她把房间打扫得非常干净。', '我把钱存在银行。'],
  notes: [['把字句', 'bǎzìjù', 'câu chữ 把'], ['处置', 'chǔzhì', 'xử trí'], ['介宾段', 'jièbīnduàn', 'đoạn giới tân'], ['动词段', 'dòngcíduàn', 'đoạn động từ'], ['送交', 'sòngjiāo', 'giao nộp'], ['公安机关', 'gōng’ān jīguān', 'cơ quan công an'], ['捆', 'kǔn', 'buộc'], ['锁', 'suǒ', 'khóa'], ['称为', 'chēngwéi', 'gọi là'], ['看作', 'kànzuò', 'coi là'], ['砍', 'kǎn', 'chặt'], ['钝', 'dùn', 'cùn']],
  ex: [
    { t: 'tf', q: '【Cơ bản】Câu 把 nào đúng?', items: [['我把一封信寄走了。', false], ['我把那封信寄走了。', true], ['她把我批评。', false], ['她把我批评了。', true], ['我把这个秘密不告诉他。', false], ['我不把这个秘密告诉他。', true], ['我把他看见了。', false], ['他没把问题搞清楚。', true], ['我把北京去了。', false]] },
    { t: 'mc', q: '【Cơ bản】Câu nào BẮT BUỘC dùng 把?', items: [['Tôi gửi tiền ở ngân hàng.', ['我存钱在银行。', '我把钱存在银行。'], 1], ['Cô ấy dọn phòng rất sạch.', ['她打扫房间得非常干净。', '她把房间打扫得非常干净。'], 1], ['Tôi dịch cuốn sách này sang tiếng Anh.', ['我翻译这本书成英文。', '我把这本书翻译成英文。'], 1], ['Mọi người để hành lý lên giá.', ['大家都放在行李架上行李。', '大家都把行李放在行李架上。'], 1]] },
    { t: 'open', q: '【Trung bình】Đổi sang câu 把.', items: [['我看完了那本书。', '我把那本书看完了。'], ['你认真考虑考虑这个问题。', '你把这个问题认真考虑考虑。'], ['妈妈洗干净了衣服。', '妈妈把衣服洗干净了。'], ['他告诉了我那件事。', '他把那件事告诉我了。'], ['请你关上门。', '请你把门关上。'], ['我已经做完作业了。', '我已经把作业做完了。']] },
    { t: 'match', q: '【Trung bình】Nối câu với quan hệ ngữ nghĩa.', items: [['我把杯子打碎了。', 'chủ thể + khách thể'], ['我把笔都写坏了。', 'chủ thể + công cụ'], ['喝凉水把孩子喝病了。', 'nguyên nhân + chủ thể'], ['我们把祖国称为母亲。', 'kết quả gọi tên'], ['母亲把裙子改成了裤子。', 'kết quả biến đổi']] },
    { t: 'order', q: '【Nâng cao】Sắp xếp (chú ý vị trí phủ định và trạng ngữ).', items: [['你', '别', '把', '电视', '弄坏了。'], ['他', '没', '把', '问题', '搞清楚。'], ['大家', '都', '把', '行李', '放在行李架上。'], ['我', '把', '他', '看作', '我的好朋友。']] },
    { t: 'open', q: '【Nâng cao】Giải thích sự khác nhau.', items: [['老师改了几份作业。/ 老师把几份作业改了。', 'Câu 1: mấy bài bất kỳ (bất định chỉ). Câu 2: mấy bài cụ thể đã biết (định chỉ).'], ['我寄走了一封信。/ 我把那封信寄走了。', 'Tân ngữ bất định 一封信 không dùng câu 把; tân ngữ định chỉ 那封信 dùng câu 把 được.']] }
  ],
  adv: {
    g: [['S + 把 + O + V + 在/到 + nơi', 'đặt/để ở đâu', '把书放在桌子上。'], ['S + 把 + O + V + 成/作/为 + N', 'biến thành, coi là', '把他看作兄弟。'], ['S + 把 + O + V + 得 + …', 'kết quả/tình thái', '把房间打扫得很干净。'], ['S + 不/没/别 + 把 + O + V…', 'phủ định câu 把', '别把电视弄坏了。'], ['S + 把 + O + V + 给 + người', 'chuyển giao', '把书还给他。']],
    an: [['他砍骨头把刀砍钝了。', '砍骨头 (động tân) rồi 把 + 刀 (công cụ) + 砍钝了 (động bổ): công cụ bị ảnh hưởng', 'Anh ấy chặt xương làm cùn cả dao.']],
    v: [['碎', 'suì', 'vỡ vụn'], ['油漆', 'yóuqī', 'sơn'], ['裙子', 'qúnzi', 'váy'], ['秘密', 'mìmì', 'bí mật'], ['行李架', 'xínglijià', 'giá hành lý'], ['红红火火', 'hónghóng huǒhuǒ', 'phát đạt']],
    s: [['Dọn nhà', 'Bạn và bạn cùng phòng chuẩn bị đón khách: dùng ít nhất 8 câu 把 để phân công việc (把桌子擦干净、把花放在……).']]
  } },
{ id: 'g8-5', title: 'Câu chữ 被, câu phối tỉ và chuyển đổi kiểu câu 被字句·配比句·句式变换', kind: '语法', src: '（《汉语语法教程》Chương VIII, Tiết 2, tr.312–330）',
  p: [
    '## 1. Câu chữ 被 被字句',
    'Câu có 被 (叫、让) biểu thị bị động: Chủ ngữ + 被 + N/Đại từ + V…: 消息被他泄露出去了；我真被你搞糊涂了. Quan hệ ngữ nghĩa: khách thể + 被 + chủ thể + động tác (đơn giản hơn câu 把).',
    'Các dạng: A. 被 + tác nhân + V: 大树被风刮倒了. B. 被 + V (không tác nhân): 他被选为工会主席；他的钱包被偷了. C. 被 + tác nhân + 给 + V (给 tăng ngữ khí): 小王被人给打了. D. 被 + tác nhân + 所 + V (văn viết, động từ trơn): 我深深地被他的精神所感动; dạng cổ hơn: 为……所: 我不会为你的花言巧语所迷惑.',
    'Đặc điểm: ① Chủ ngữ là khách thể, phải định chỉ (*三本书被我送人了 → 那三本书……). ② 被 + tác nhân cụ thể / mơ hồ (被人) / không có tác nhân; 叫、让 thay được ở hai dạng đầu nhưng không thay được khi không có tác nhân. ③ Động từ có khi đứng trơn (他不愿意总被爸爸批评). ④ Phủ định đứng trước 被: 自行车没被别人骑走. ⑤ Nhiều động từ dùng được với 被 mà không dùng với 把: 知道、看见、听见、碰见、理解 (这件事被她知道了, *她把这件事知道了). ⑥ Sau động từ có thể có: tân ngữ gián tiếp (那一千块钱被我借给别人了), kết quả (衣服被树枝划了一个口子), bộ phận thuộc chủ ngữ (他被人打瞎了眼睛).',
    '被 và 把 cùng câu: 他被别人把腿打断了；这本书被人把封面撕掉了 — nghĩa thiệt hại, 被 đứng trước 把, chủ ngữ sở hữu tân ngữ của 把 (= 他的腿被别人打断了).',
    'Cách dùng: câu 被 chủ yếu cho việc bất lợi, không mong muốn: *我们被老师教了汉语；*那个电影被我们看了. Việc không như ý cũng có thể không dùng 被 (bị động ý niệm): 房子震塌了；消息泄露出去了 — thêm 被 thì nhấn mạnh bị động hơn.',
    '## 2. Câu phối tỉ 配比句',
    'Hai cụm số lượng trở lên biểu thị phân phối/đối ứng, nghĩa là “每……各……”: 一人一个苹果；两个人一间房；十个人吃一锅饭. Đặc điểm: ① danh từ đều bất định chỉ (không có 这、那); ② động từ thứ yếu, có thể vắng, không mang 了/着/过 — nhưng khi nghĩa mơ hồ phải có động từ (一人一篇文章 = 写/看/给?); ③ hai cụm thường đổi chỗ được (三个人住一间房 = 一间房住三个人) nhưng không phải luôn luôn (一天看望两次, *两次看望一天；一步一个脚印). Ý nghĩa phi động thái, số lượng có quan hệ hàm số (一个人一碗饭 → 两个人两碗饭).',
    '## 3. Chuyển đổi kiểu câu 句式变换',
    'Các kiểu câu liên hệ với nhau: 我们已经批评了这个人 → 这个人我们已经批评了 → 我们已经对这个人进行了批评 → 这个人，我们已经对他进行了批评. Thủ pháp: chuyển vị trí, tỉnh lược.',
    'S + V + O (我们讨论了这个问题) → O + S + V (这个问题我们讨论了) → S + O + V (我们这个问题讨论了) → (S) + O + V (这个问题讨论了) → S + V (我们讨论了) → S + 把 + O + V. Động từ phi động tác (姓、有、等于) không chuyển được. Tân ngữ bất định phải đổi thành định chỉ khi đưa lên đầu: *两封信我写了 → 那两封信我写了.',
    'Câu tồn hiện → câu thường: 门口站着一个人 → (有)一个人在门口站着；门外跑进来一个人 → 一个人从门外跑进来.',
    'Câu 把 ↔ câu 被: 他把那笔钱丢了 ↔ 那笔钱被他丢了 (việc không như ý). Nhưng 我把问题想清楚了 (*问题被我想清楚了 — không có ý bất lợi); ngược lại 这个秘密被别人知道了 (*别人把这个秘密知道了 — động từ không xử trí).'
  ],
  zh: ['消息被他泄露出去了。', '他的钱包被偷了。', '小王被人给打了。', '我深深地被他的精神所感动。', '自行车没被别人骑走。', '这件事被她知道了。', '他被别人把腿打断了。', '两个人一间房。', '一人一篇文章。', '这个问题我们讨论了。', '那笔钱被他丢了。', '门口站着一个人。'],
  notes: [['被字句', 'bèizìjù', 'câu chữ 被'], ['被动', 'bèidòng', 'bị động'], ['施事', 'shīshì', 'tác nhân'], ['泄露', 'xièlòu', 'tiết lộ'], ['刮倒', 'guādǎo', 'thổi đổ'], ['工会主席', 'gōnghuì zhǔxí', 'chủ tịch công đoàn'], ['耽误', 'dānwu', 'làm lỡ'], ['奥秘', 'àomì', 'bí ẩn'], ['迷惑', 'míhuò', 'mê hoặc'], ['配比句', 'pèibǐjù', 'câu phối tỉ'], ['句式变换', 'jùshì biànhuàn', 'chuyển đổi kiểu câu'], ['撕', 'sī', 'xé']],
  ex: [
    { t: 'tf', q: '【Cơ bản】Câu nào đúng?', items: [['三本书被我送人了。', false], ['那三本书被我送人了。', true], ['自行车被别人没骑走。', false], ['自行车没被别人骑走。', true], ['我们被老师教了汉语。', false], ['这件事被她知道了。', true], ['她把这件事知道了。', false], ['他的钱包被偷了。', true]] },
    { t: 'open', q: '【Sách · 思考与练习 十一】Đổi câu 把 thành câu 被.', items: [['我把衣服弄脏了。', '衣服被我弄脏了。'], ['孩子把玻璃打碎了。', '玻璃被孩子打碎了。'], ['他把书偷走了。', '书被他偷走了。'], ['哥哥把家里的房子卖了。', '家里的房子被哥哥卖了。'], ['我把那个难题解决了。', '那个难题被我解决了。'], ['我把那份东西送给别人了。', '那份东西被我送给别人了。']] },
    { t: 'tf', q: '【Sách · 思考与练习 十二】Câu 被 nào ĐỔI ĐƯỢC sang câu 把?', items: [['问题被他搞清楚了。', true], ['我被别人伤害过。', false], ['密码已经被我成功破译。', true], ['他被人爱过。', false], ['我已经被他说服了。', true], ['她愿意被人欣赏。', false]] },
    { t: 'fill', q: '【Sách · 思考与练习 十三】Điền động từ vào câu phối tỉ.', items: [['两个人___一间房。', '住'], ['十个人___一锅饭。', '吃'], ['一天___三顿饭。', '吃'], ['一百斤米___三个月。', '吃|够吃'], ['一个人___一篇文章。', '写|看']] },
    { t: 'open', q: '【Sách · 思考与练习 十五】Đổi câu tồn hiện thành câu chủ vị thường.', items: [['门口坐着一位老者。', '一位老者在门口坐着。'], ['前面跑过来一群孩子。', '一群孩子从前面跑过来。'], ['桌子上摆着一只花瓶。', '一只花瓶在桌子上摆着。'], ['讲台前站着一位老师。', '一位老师在讲台前站着。'], ['门口开过去一辆汽车。', '一辆汽车从门口开过去。']] },
    { t: 'open', q: '【Sách · 思考与练习 十】Viết 4 cách nói khác cùng nghĩa.', items: [['他撕坏了那本书的封面。', '那本书的封面他撕坏了。/ 他把那本书的封面撕坏了。/ 那本书的封面被他撕坏了。/ 那本书被他撕坏了封面。'], ['我们讨论了这个问题。', '这个问题我们讨论了。/ 我们这个问题讨论了。/ 我们把这个问题讨论了。/ 这个问题讨论了。']] }
  ],
  adv: {
    g: [['A + 被 + B + V + 了', 'bị động (bất lợi)', '钱包被小偷偷了。'], ['A + 被 + V', 'bị động không tác nhân', '他被选为主席。'], ['A + 被 + B + 所 + V', 'bị động văn viết', '被他的精神所感动'], ['A + 被 + B + 把 + bộ phận + V', 'bị + 把 (thiệt hại)', '他被人把腿打断了。'], ['数量 + (V) + 数量', 'phối tỉ', '三个人住一间房。']],
    an: [['我深深地被他的精神所感动。', '深深地 trạng ngữ + 被他的精神 (tác nhân) + 所 + 感动 (động từ trơn) — văn viết', 'Tôi vô cùng cảm động trước tinh thần của anh ấy.']],
    v: [['密码', 'mìmǎ', 'mật mã'], ['破译', 'pòyì', 'giải mã'], ['说服', 'shuōfú', 'thuyết phục'], ['伤害', 'shānghài', 'làm tổn thương'], ['脚印', 'jiǎoyìn', 'dấu chân'], ['看管', 'kānguǎn', 'trông coi']],
    w: [['Một ngày xui xẻo', 'Kể một ngày xui xẻo bằng 6 câu, dùng ít nhất 4 câu 被 và 2 câu 把.']]
  } },
{ id: 'g8-6', title: 'Ôn tập chương VIII 第八章 思考与练习', kind: '语法', src: '（《汉语语法教程》Chương VIII, 思考与练习, tr.325–330）',
  p: [
    '## Điểm chính chương VIII',
    '1. Theo ngữ khí/công dụng có 4 loại câu: trần thuật, nghi vấn, cầu khiến, cảm thán — khác nhau cả về hình thức kết cấu. 2. Câu trần thuật chú ý phủ định kép. 3. Câu nghi vấn nhiều loại, câu phản vấn là điểm khó. 4. Câu cầu khiến có 4 loại: mệnh lệnh, cấm đoán, kiến nghị, thỉnh cầu.',
    '5. Mô hình câu là khuôn cấu tạo câu; có mô hình cơ bản và phái sinh (chuyển vị trí, tỉnh lược…). 6. Kiểu câu đặc thù: tồn hiện, 把, 被, phối tỉ. 7. Giữa các kiểu câu có quan hệ chuyển đổi.',
    'Phần này tổng hợp các bài tập 思考与练习 của chương (二 → 九, 十四) để ôn luyện.'
  ],
  zh: ['他的事迹真让人感动。', '我难道不该表示一点感谢吗？', '你去把信取回来。', '他们是怎么回来的？', '你打算坐飞机还是坐火车去上海？', '这究竟是谁的错？'],
  notes: [['句类', 'jùlèi', 'loại câu'], ['句式', 'jùshì', 'kiểu câu'], ['基本句式', 'jīběn jùshì', 'kiểu câu cơ bản'], ['派生句式', 'pàishēng jùshì', 'kiểu câu phái sinh'], ['移位', 'yíwèi', 'chuyển vị trí'], ['名堂', 'míngtang', 'trò, mánh']],
  ex: [
    { t: 'tf', q: '【Sách · 思考与练习 二】Nhận định nào đúng?', items: [['句类就是根据句子的用途进行的分类。', true], ['各个句类只有用途上的差别，结构形式上没有差别。', false], ['各个句类之间有差别，但是也有密切的联系。', true], ['句式就是句子的构造模式。', true], ['各种句式都是各自独立、互不联系的。', false], ['移位、省略是句式变换的基本手段。', true]] },
    { t: 'mc', q: '【Sách · 思考与练习 三】Câu thuộc loại câu nào?', items: [['他的事迹真让人感动。', ['trần thuật', 'nghi vấn', 'cầu khiến', 'cảm thán'], 3], ['我很感谢你对我的帮助。', ['trần thuật', 'nghi vấn', 'cầu khiến', 'cảm thán'], 0], ['我难道不该表示一点感谢吗？', ['trần thuật', 'nghi vấn (phản vấn)', 'cầu khiến', 'cảm thán'], 1], ['你去把信取回来。', ['trần thuật', 'nghi vấn', 'cầu khiến', 'cảm thán'], 2], ['我不是已经告诉过你吗？', ['trần thuật', 'nghi vấn (phản vấn)', 'cầu khiến', 'cảm thán'], 1], ['他们是怎么回来的？', ['trần thuật', 'nghi vấn', 'cầu khiến', 'cảm thán'], 1]] },
    { t: 'mc', q: '【Sách · 思考与练习 四】Loại câu nghi vấn?', items: [['问题到底该怎么解决？', ['đúng–sai', 'lựa chọn', 'đặc chỉ', 'phản vấn'], 2], ['她今天下午回来？', ['đúng–sai (ngữ điệu)', 'lựa chọn', 'đặc chỉ', 'phản vấn'], 0], ['你为什么要这么做？', ['đúng–sai', 'lựa chọn', 'đặc chỉ', 'phản vấn'], 2], ['她经常会去看望老人吗？', ['đúng–sai', 'lựa chọn', 'đặc chỉ', 'phản vấn'], 0], ['他们明天来不来？', ['đúng–sai (A不A)', 'lựa chọn', 'đặc chỉ', 'phản vấn'], 0], ['这个情况告诉不告诉她？', ['đúng–sai (A不A)', 'lựa chọn', 'đặc chỉ', 'phản vấn'], 0], ['你难道还不明白吗？', ['đúng–sai', 'lựa chọn', 'đặc chỉ', 'phản vấn'], 3]] },
    { t: 'open', q: '【Sách · 思考与练习 五】Đổi câu trần thuật thành câu phản vấn.', items: [['我不愿意有这个结果。', '我难道愿意有这个结果吗？'], ['她已经知道了。', '她难道还不知道吗？'], ['她应该努力学习。', '她难道不应该努力学习吗？'], ['对这种人不能仁慈。', '对这种人怎么能仁慈呢？'], ['这么重要的事情应该告诉他。', '这么重要的事情难道不应该告诉他吗？'], ['这是老同学。', '这不是老同学吗？']] },
    { t: 'open', q: '【Sách · 思考与练习 六】Đổi câu cầu khiến thành dạng câu hỏi.', items: [['你过来。', '你能过来一下吗？'], ['你帮助我一下。', '你能帮我一下吗？'], ['你们早点儿回来。', '你们早点儿回来，好吗？'], ['你把门打开。', '你能把门打开吗？'], ['你好好准备准备。', '你好好准备准备，行吗？']] },
    { t: 'tf', q: '【Sách · 思考与练习 九】Câu nào đúng?', items: [['你是从什么地方回来的吗？', false], ['你打算坐飞机还是火车去上海？', false], ['反正现在也做不完，干脆明天再做呢。', false], ['她难道还不明白吗？', true], ['她到底还想不想去吗？', false], ['这究竟是谁的错？', true], ['他们从北京还是上海回国？', false], ['你究竟在搞什么名堂？', true]] },
    { t: 'open', q: '【Sách · 思考与练习 七、八】Hoàn thành câu bằng hình thức nghi vấn / đặt câu hỏi lựa chọn.', items: [['我不清楚___。', '我不清楚他什么时候来。'], ['我很怀疑___。', '我很怀疑他是不是真的有这个能力。'], ['我始终搞不懂___。', '我始终搞不懂他为什么这么做。'], ['(茶，咖啡)', '你喝茶还是喝咖啡？'], ['(上中学，上大学)', '你弟弟是上中学还是上大学？'], ['(骑自行车，坐车)', '你骑自行车去还是坐车去？']] }
  ],
  adv: {
    g: [['我不知道 + câu hỏi + 。', 'câu hỏi làm tân ngữ (dấu chấm)', '我不知道他是谁。'], ['……，好吗/行吗？', 'cầu khiến bằng câu hỏi', '你早点儿回来，好吗？'], ['怎么能……呢？', 'phản vấn phủ định', '怎么能这样呢？']],
    v: [['事迹', 'shìjì', 'sự tích'], ['仁慈', 'réncí', 'nhân từ'], ['看望', 'kànwàng', 'thăm hỏi'], ['干脆', 'gāncuì', 'dứt khoát'], ['究竟', 'jiūjìng', 'rốt cuộc']]
  } }
] },
{ n: 9, title: 'Chương IX · Tổ hợp câu — Câu phức 复句', texts: [
{ id: 'g9-1', title: 'Khái quát về câu phức 复句概说', kind: '语法', src: '（《汉语语法教程》Chương IX, Tiết 1, tr.331–339）',
  p: [
    '## 1. Câu phức là gì?',
    'Câu do 2 phân câu (分句) trở lên tổ hợp thành gọi là câu phức (复句): 你不去，我也不去。 Câu đứng một mình có một kết cấu chủ vị hoàn chỉnh gọi là câu đơn (单句). Khái niệm “phân câu” chỉ có ý nghĩa đối với câu phức: phân câu là bộ phận cấu thành của câu phức.',
    '## 2. Câu phức và câu đơn',
    'Phân câu thường giống câu đơn về hình thức (虽然我已经毕业了，但是我还要继续努力学习 → 我已经毕业了。/ 我还要继续努力学习。), nhưng phân câu và câu đơn là hai đơn vị khác tính chất: phân câu KHÔNG bắt buộc có thành phần hoàn thành câu. Ví dụ 她认真，你不认真；我说得流利，他说得不太流利；他死，我高兴；身体健康，人才可能幸福 — các phân câu trước nếu đứng riêng thì không thành câu.',
    'Căn cứ phân biệt câu đơn và câu phức: ① Cả câu do MỘT “biểu đạt” (statement — một kết cấu chủ vị lấy động từ/tính từ làm trung tâm) hay HAI biểu đạt trở lên: 他们走了 (câu đơn) / 他们走了，我怎么办？(câu phức). ② Giữa các bộ phận có quan hệ thành phần câu (chủ vị, trạng trung…) hay không: 只有努力学习的人，才会取得这样的成绩 là câu đơn (“……的人” là chủ ngữ); 只要他同意，我就马上办 là câu phức (chỉ có quan hệ điều kiện về logic).',
    'Lưu ý khi phân biệt: ① Dấu câu giúp nhưng không quyết định: 关于你的工作安排问题，我们已经有了一个想法 (câu đơn, trước dấu phẩy là trạng ngữ); 你不说我也知道 (không có dấu phẩy nhưng là câu phức rút gọn). ② Từ nối không quyết định: 无论什么人，都要承担法律责任 (câu đơn, “无论什么人” là chủ ngữ); 家里的气氛似乎因为他的出现变得紧张起来 (câu đơn, “因为……” làm trạng ngữ). ③ Tỉnh lược chủ ngữ: 他站起来，( ) 激动地在屋子里走来走去 — vẫn là câu phức; chủ ngữ cũng có thể xuất hiện ở phân câu sau: ( ) 回到家里，( ) 换上便装，我就开始准备晚饭. ④ Câu phức rút gọn dễ nhầm với câu đơn: 我不达到目的决不罢休；主任答不上来就发了脾气.',
    'Câu đơn không nhất thiết “đơn giản” hơn câu phức: 你去，我比较放心 (câu phức, thành phần đơn giản) so với 他对问题的解释从哪个方面看都不能令人满意 (câu đơn, thành phần phức tạp).',
    '## 3. Phương thức nối kết câu phức',
    '(1) Nối kết hình thức — chủ yếu dùng từ ngữ nối (关联词语): 我不仅要自己富起来，而且要帮助乡亲们一起富起来 (bỏ từ nối thì ý không rõ). Từ nối còn làm rõ quan hệ: 他去，我也去 có thể là 如果他去，那么我也去 (giả thiết) hoặc 因为他去，所以我也去 (nhân quả). Có từ nối phải dùng thành cặp (不是……就是……), có từ chỉ dùng đơn độc: 就是 (他人不错，就是有点儿懒), 以免 (应该早做准备，以免措手不及), 可见 (现在大家纪念他，可见他的精神多么感人). Phần lớn chỉ dùng ở một phân câu, hoặc không cần khi quan hệ đã rõ: 你多关心他，他才会亲近你.',
    '(2) Nối kết ý nghĩa — dựa vào quan hệ ý nghĩa: 爸爸站起身来，走到窗前，拉开窗帘 (trình tự động tác); 大家团结起来，困难肯定能够克服 (điều kiện).',
    '(3) Hình thức + ý nghĩa — không dùng từ nối nhưng có thủ pháp hình thức đặc thù: 母亲同情贫苦的人，这是朴素的阶级意识 (“这” chỉ lại); 文艺批评有两个标准，一个是政治标准，一个是文艺标准 (tổng — phân).',
    '## 4. Loại hình câu phức',
    'Dựa vào quan hệ kết cấu giữa các phân câu, chia thành 2 loại lớn: câu phức LIÊN HỢP (联合复句 — các phân câu ngang hàng, không phân chính phụ) và câu phức CHÍNH PHỤ (偏正复句, còn gọi câu phức chủ tòng 主从复句 — có phân câu chính và phân câu phụ).'
  ],
  zh: ['你不去，我也不去。', '虽然我已经毕业了，但是我还要继续努力学习。', '她认真，你不认真。', '他们走了，我怎么办？', '只要他同意，我就马上办。', '你不说我也知道。', '他站起来，激动地在屋子里走来走去。', '我不仅要自己富起来，而且要帮助乡亲们一起富起来。', '他人不错，就是有点儿懒。', '应该早做准备，以免措手不及。', '大家团结起来，困难肯定能够克服。', '文艺批评有两个标准，一个是政治标准，一个是文艺标准。'],
  notes: [['复句', 'fùjù', 'câu phức'], ['单句', 'dānjù', 'câu đơn'], ['分句', 'fēnjù', 'phân câu'], ['关联词语', 'guānlián cíyǔ', 'từ ngữ nối (quan hệ từ)'], ['表述', 'biǎoshù', 'biểu đạt (statement)'], ['联合复句', 'liánhé fùjù', 'câu phức liên hợp'], ['偏正复句', 'piānzhèng fùjù', 'câu phức chính phụ'], ['主从复句', 'zhǔcóng fùjù', 'câu phức chủ tòng'], ['紧缩句', 'jǐnsuōjù', 'câu rút gọn'], ['省略', 'shěnglüè', 'tỉnh lược'], ['措手不及', 'cuòshǒu bùjí', 'trở tay không kịp'], ['乡亲', 'xiāngqīn', 'bà con đồng hương'], ['承担', 'chéngdān', 'gánh vác'], ['罢休', 'bàxiū', 'thôi, bỏ qua'], ['朴素', 'pǔsù', 'mộc mạc, chất phác']],
  ex: [
    { t: 'tf', q: '【Cơ bản】Đây là câu phức (复句)?', items: [['你不去，我也不去。', true], ['我不同意你的看法。', false], ['我不同意你的看法，所以不能按照你的意见办。', true], ['他们走了。', false], ['他们走了，我怎么办？', true], ['关于你的工作安排问题，我们已经有了一个想法。', false], ['你不说我也知道。', true], ['无论什么人，都要承担法律责任。', false], ['家里的气氛似乎因为他的出现变得紧张起来。', false], ['只要他同意，我就马上办。', true]] },
    { t: 'mc', q: '【Cơ bản】Chọn đáp án đúng.', items: [
      ['Câu phức do ít nhất bao nhiêu phân câu tạo thành?', ['1', '2', '3', '4'], 1],
      ['Căn cứ quan trọng nhất để phân biệt câu đơn/câu phức là:', ['có dấu phẩy hay không', 'có từ nối hay không', 'số “biểu đạt” (trung tâm vị ngữ) và quan hệ giữa các bộ phận', 'độ dài của câu'], 2],
      ['“只有努力学习的人，才会取得这样的成绩。” là:', ['câu phức điều kiện', 'câu đơn (“……的人” là chủ ngữ)', 'câu rút gọn', 'câu phức nhân quả'], 1],
      ['“家里的气氛似乎因为他的出现变得紧张起来。” — “因为他的出现” là:', ['phân câu nguyên nhân', 'trạng ngữ trong câu đơn', 'chủ ngữ', 'bổ ngữ'], 1],
      ['Phân câu khác câu đơn ở chỗ:', ['phân câu ngắn hơn', 'phân câu không bắt buộc có thành phần hoàn thành câu', 'phân câu không có động từ', 'phân câu không có chủ ngữ'], 1],
      ['“爸爸站起身来，走到窗前，拉开窗帘。” nối kết bằng:', ['từ ngữ nối', 'ý nghĩa (trình tự động tác)', 'hình thức + ý nghĩa', 'dấu chấm phẩy'], 1],
      ['“母亲同情贫苦的人，这是朴素的阶级意识。” nối kết bằng:', ['từ ngữ nối', 'ý nghĩa thuần túy', 'hình thức + ý nghĩa (đại từ “这”)', 'không có nối kết'], 2],
      ['Câu phức chính phụ còn gọi là:', ['câu phức ngang hàng', 'câu phức chủ tòng', 'câu phức nhiều tầng', 'câu rút gọn'], 1]
    ] },
    { t: 'match', q: '【Trung bình】Nối từ nối với cách dùng.', items: [['不是……就是……', 'phải dùng thành cặp'], ['以免', 'chỉ dùng đơn độc (mục đích, tránh)'], ['可见', 'chỉ dùng đơn độc (suy ra)'], ['就是 (他人不错，就是有点儿懒)', 'chỉ dùng đơn độc (chuyển ngoặt nhẹ)'], ['如果……那么……', 'có thể dùng một vế hoặc cả cặp']] },
    { t: 'fill', q: '【Trung bình】Thêm từ nối để làm rõ quan hệ của “他去，我也去”.', items: [['___他去，那么我也去。（giả thiết）', '如果|要是|假如'], ['___他去，所以我也去。（nhân quả）', '因为'], ['___他去，我就也去。（suy luận, dựa vào việc đã biết）', '既然'], ['___他去，我才去。（điều kiện tất yếu）', '只有'], ['___他去不去，我都去。（vô điều kiện）', '不管|无论']] },
    { t: 'tf', q: '【Trung bình】Nhận định nào đúng?', items: [['Câu đơn luôn đơn giản hơn câu phức.', false], ['Câu có dấu phẩy chắc chắn là câu phức.', false], ['Câu không có dấu phẩy vẫn có thể là câu phức (câu rút gọn).', true], ['Phân câu sau tỉnh lược chủ ngữ thì cả câu trở thành câu đơn.', false], ['Chủ ngữ có thể xuất hiện ở phân câu sau và tỉnh lược ở phân câu trước.', true], ['Có câu phức không thể dùng từ nối.', true]] },
    { t: 'open', q: '【Nâng cao】Câu đơn hay câu phức? Giải thích theo hai tiêu chí (số biểu đạt; quan hệ thành phần).', items: [['他看了半个多小时，回家睡觉去了。', 'Có tranh luận; theo tiêu chí “biểu đạt” có hai trung tâm (看、回家睡觉), phân câu sau tỉnh lược chủ ngữ 他 → câu phức.'], ['他不接受这个奖励，我觉得很奇怪。', 'Có hai cách hiểu: “他不接受这个奖励” là chủ ngữ của “我觉得很奇怪” (câu đơn), hoặc quan hệ nguyên nhân–kết quả (câu phức).'], ['我不达到目的决不罢休。', 'Câu phức rút gọn: (如果)我不达到目的，(我)决不罢休 — hai biểu đạt.'], ['主任答不上来就发了脾气。', 'Câu phức rút gọn: 主任答不上来，就发了脾气.']] }
  ],
  adv: {
    g: [['……，就是……', 'chuyển ngoặt nhẹ (đơn độc)', '他人不错，就是有点儿懒。'], ['……，以免……', 'để tránh', '应该早做准备，以免措手不及。'], ['……，可见……', 'đủ thấy', '大家都纪念他，可见他多么受人尊敬。']],
    an: [['你不说我也知道。', '【Phân câu 1】你不说 【Từ nối】也 【Phân câu 2】我知道 → câu phức rút gọn, hai biểu đạt (说、知道)'], ['只有努力学习的人，才会取得这样的成绩。', '【Chủ ngữ】只有努力学习的人 【Trạng ngữ】才会 【Vị ngữ】取得 【Tân ngữ】这样的成绩 → câu đơn (một trung tâm vị ngữ)']],
    v: [['激动', 'jīdòng', 'xúc động'], ['便装', 'biànzhuāng', 'thường phục'], ['窗帘', 'chuānglián', 'rèm cửa'], ['克服', 'kèfú', 'khắc phục'], ['标准', 'biāozhǔn', 'tiêu chuẩn']]
  } },
{ id: 'g9-2', title: 'Câu phức liên hợp 联合复句', kind: '语法', src: '（《汉语语法教程》Chương IX, Tiết 2, tr.339–342）',
  p: [
    'Câu phức liên hợp: các phân câu không phân chính phụ, nhưng quan hệ đa dạng, chia thành 5 loại.',
    '## 1. Câu phức ngang hàng 并列复句',
    'Nói về mấy sự việc, tình hình, phương diện của cùng một người/vật, quan hệ bình đẳng: 花儿绽开了笑脸，小鸟在欢快地歌唱 (không từ nối)；这是全中国人民的胜利，也是全世界人民的胜利；我们既要有冲天的干劲，也要有科学的分析；他不是我们的朋友，而是我们的敌人. Từ nối: 也、又、还、另外、既……也/又……、不是……而是……、一方面……一方面……、一边……一边…….',
    '## 2. Câu phức lựa chọn 选择复句',
    '(1) Lựa chọn thương lượng (hỏi): 你(是)一个人去呢，还是两个人一起去？ — từ nối 还是, vế trước có thể thêm 是. (2) Lựa chọn quyết đoán (không cái này thì cái kia, ngữ khí kiên quyết): 或者你放弃，或者他放弃；不是鱼死，就是网破；要么把老虎打死，要么被老虎吃掉. (3) Lựa chọn lấy–bỏ (so sánh rồi lấy một bỏ một): 他宁肯自己饿肚子，也要去帮助这些比他更困难的人；宁可……，决不……；与其这么痛苦地拖着，不如早一些了断.',
    '## 3. Câu phức tăng tiến 递进复句',
    'Phân câu sau tăng tiến hơn phân câu trước một bậc, trọng tâm ở phân câu sau: 他不但学习很努力，而且很愿意帮助别人；我们的祖国不只土地辽阔，而且物产丰富；不但孩子要积极上进，父母也应该不断地学习. Dạng đặc biệt: 不但没(不)……反而…… (tăng tiến từ góc độ phủ định): 风不但没停，反而越来越大了; 尚且……何况……呢？ (dùng phản vấn tăng hiệu quả): 孩子尚且能够关心别人，何况大人呢？ Từ nối: 不但/不仅/不只……而且/并且/也/还……, 甚至, 更.',
    '## 4. Câu phức liên quan (nối tiếp) 承接复句',
    'Liên tục nêu các động tác/sự kiện nối tiếp nhau theo thứ tự: 他突然站起来，来到电话前，拿起电话，对着话筒说着什么；我先把这点儿事情做完，然后再跟你走；大家商量完会议议程，接着又把一些细节问题讨论了一下. Từ nối: 先……然后/再……、接着、于是、便、就. Khác với ngang hàng: các phân câu nối tiếp theo trình tự, không đổi chỗ được.',
    '## 5. Câu phức giải thích 解说复句',
    'Phân câu này giải thích, nói rõ cho phân câu kia: “三个臭皮匠，合成一个诸葛亮”，这就是说，群众有伟大的创造力；我们已经形成了一个决议，即，立即开始项目的招标工作；有两种不完全的知识，一种是现成书本上的知识，一种是偏于感性和局部性的知识 (tổng — phân). Từ nối: 就是说、即、也就是说、比如.'
  ],
  zh: ['花儿绽开了笑脸，小鸟在欢快地歌唱。', '我们既要有冲天的干劲，也要有科学的分析。', '他不是我们的朋友，而是我们的敌人。', '你是一个人去呢，还是两个人一起去？', '要么把老虎打死，要么被老虎吃掉。', '与其这么痛苦地拖着，不如早一些了断。', '他不但学习很努力，而且很愿意帮助别人。', '风不但没停，反而越来越大了。', '孩子尚且能够关心别人，何况大人呢？', '我先把这点儿事情做完，然后再跟你走。', '我们已经形成了一个决议，即立即开始项目的招标工作。'],
  notes: [['并列', 'bìngliè', 'ngang hàng, song song'], ['选择', 'xuǎnzé', 'lựa chọn'], ['递进', 'dìjìn', 'tăng tiến'], ['承接', 'chéngjiē', 'nối tiếp (liên quan)'], ['解说', 'jiěshuō', 'giải thích'], ['绽开', 'zhànkāi', 'nở ra'], ['干劲', 'gànjìn', 'nhiệt huyết làm việc'], ['宁肯/宁可', 'nìngkěn/nìngkě', 'thà'], ['与其……不如', 'yǔqí…bùrú', 'thà… còn hơn…'], ['了断', 'liǎoduàn', 'chấm dứt'], ['辽阔', 'liáokuò', 'bao la'], ['物产', 'wùchǎn', 'sản vật'], ['尚且', 'shàngqiě', 'còn (huống chi)'], ['何况', 'hékuàng', 'huống hồ'], ['臭皮匠', 'chòu píjiàng', 'thợ da tồi (thành ngữ)'], ['招标', 'zhāobiāo', 'mời thầu']],
  ex: [
    { t: 'match', q: '【Cơ bản】Nối cặp từ nối với loại câu phức liên hợp.', items: [['既……也……', 'ngang hàng'], ['不是……而是……', 'ngang hàng (phủ định–khẳng định)'], ['还是', 'lựa chọn thương lượng'], ['要么……要么……', 'lựa chọn quyết đoán'], ['与其……不如……', 'lựa chọn lấy–bỏ'], ['不但……而且……', 'tăng tiến'], ['尚且……何况……', 'tăng tiến (phản vấn)'], ['先……然后……', 'nối tiếp'], ['即/就是说', 'giải thích']] },
    { t: 'mc', q: '【Cơ bản】Câu sau thuộc loại câu phức nào?', items: [
      ['这是你的书，那是我的书。', ['ngang hàng', 'lựa chọn', 'tăng tiến', 'nối tiếp'], 0],
      ['你喝茶还是喝咖啡？', ['ngang hàng', 'lựa chọn', 'tăng tiến', 'giải thích'], 1],
      ['他不仅会说汉语，而且会说日语。', ['ngang hàng', 'lựa chọn', 'tăng tiến', 'nối tiếp'], 2],
      ['他洗了脸，然后吃早饭。', ['ngang hàng', 'lựa chọn', 'tăng tiến', 'nối tiếp'], 3],
      ['我有一个想法，就是大家一起去旅行。', ['ngang hàng', 'lựa chọn', 'tăng tiến', 'giải thích'], 3],
      ['宁可站着死，也不跪着生。', ['ngang hàng', 'lựa chọn', 'tăng tiến', 'nối tiếp'], 1],
      ['雨不但没停，反而下得更大了。', ['ngang hàng', 'lựa chọn', 'tăng tiến', 'giải thích'], 2],
      ['他一边听音乐，一边写作业。', ['ngang hàng', 'lựa chọn', 'tăng tiến', 'nối tiếp'], 0],
      ['不是你去，就是我去。', ['ngang hàng', 'lựa chọn', 'tăng tiến', 'nối tiếp'], 1],
      ['大家讨论完了，接着又开始投票。', ['ngang hàng', 'lựa chọn', 'giải thích', 'nối tiếp'], 3]
    ] },
    { t: 'fill', q: '【Cơ bản】Điền từ nối thích hợp.', items: [['这本书___便宜，___有用。', '既…又'], ['我们去爬山___去游泳？', '还是'], ['他___会唱歌，___会跳舞。', '不但…而且'], ['___你去，___我去，反正得有人去。', '要么…要么|或者…或者'], ['___在家里闷着，___出去走走。', '与其…不如'], ['他___是不想去，___是没时间。', '不…而'], ['我们先吃饭，___再去看电影。', '然后'], ['大人___做不到，___孩子呢？', '尚且…何况']] },
    { t: 'tf', q: '【Trung bình】Câu nào đúng?', items: [['他不但没生气，反而笑了。', true], ['他不但生气，反而笑了。', false], ['与其坐车去，不如走路去。', true], ['与其坐车去，还是走路去。', false], ['你要咖啡还是茶？', true], ['你要咖啡或者茶？（hỏi lựa chọn）', false], ['宁可饿死，也不吃这种东西。', true], ['孩子尚且明白，何况大人呢？', true]] },
    { t: 'place', q: '【Trung bình】Chọn từ nối điền vào chỗ trống.', o: ['而是', '还是', '要么', '反而', '何况', '然后', '一方面', '即'], a: [0, 1, 2, 2, 3, 4, 5, 6, 6, 7], text: '1. 他不是不想帮忙，{0}帮不上忙。 2. 你想今天去{1}明天去？ 3. {2}你来，{3}我去，总得见一面。 4. 吃了药，病不但没好，{4}更重了。 5. 这么简单的问题老师都答错了，{5}学生呢？ 6. 你先把作业做完，{6}再看电视。 7. 我们{7}要发展经济，{8}要保护环境。 8. 会议决定了一件事，{9}下个月开始放假。' },
    { t: 'order', q: '【Trung bình】Sắp xếp thành câu phức.', items: [['他', '不但', '自己', '学习好，', '而且', '经常', '帮助', '同学。'], ['与其', '在这儿', '等，', '不如', '我们', '自己', '去找。'], ['我', '先', '去', '银行，', '然后', '去', '邮局。'], ['你', '是', '坐飞机', '去', '还是', '坐火车', '去？']] },
    { t: 'open', q: '【Nâng cao】Phân biệt các cặp, đặt câu minh họa.', items: [['宁可……也…… vs 与其……不如……', '宁可: chọn cái (thường bất lợi) đứng sau 宁可 để đạt mục đích: 我宁可走路，也不坐他的车. 与其……不如: bỏ cái sau 与其, chọn cái sau 不如: 与其坐车，不如走路.'], ['不但……而且…… vs 不但没……反而……', 'Cái trước tăng tiến thuận (他不但会说，而且说得很好); cái sau tăng tiến trái với dự đoán, vế trước phủ định (他不但没帮我，反而说我的坏话).'], ['并列复句 vs 承接复句', 'Ngang hàng: các phân câu bình đẳng, thường đổi chỗ được. Nối tiếp: theo trình tự thời gian, không đổi chỗ (*然后再跟你走，我先做完).']] }
  ],
  adv: {
    g: [['不是……就是……', 'không A thì B', '他不是在图书馆，就是在教室。'], ['……，甚至……', 'thậm chí', '他忙得连饭都忘了吃，甚至忘了睡觉。'], ['一方面……，另一方面……', 'một mặt… mặt khác…', '一方面要学习，另一方面要锻炼身体。'], ['与其说……，不如说……', 'nói là A chẳng bằng nói là B', '与其说他是老师，不如说他是朋友。']],
    an: [['前面是山，后面是水，中间是一片肥沃的土地。', '【①】前面是山 |ngang hàng| 【②】后面是水 |ngang hàng| 【③】中间是一片肥沃的土地 → câu liên hợp kéo dài được']],
    v: [['欢快', 'huānkuài', 'vui vẻ'], ['胜利', 'shènglì', 'thắng lợi'], ['敌人', 'dírén', 'kẻ thù'], ['饿肚子', 'è dùzi', 'nhịn đói'], ['细节', 'xìjié', 'chi tiết'], ['议程', 'yìchéng', 'chương trình nghị sự']]
  } },
{ id: 'g9-3', title: 'Câu phức chính phụ 偏正复句', kind: '语法', src: '（《汉语语法教程》Chương IX, Tiết 3, tr.342–352）',
  p: [
    'Các phân câu không ngang hàng mà chia chính — phụ. Khác với câu liên hợp: quan hệ cấp 1 của câu chính phụ KHÔNG kéo dài được: 因为风太大，又有雨，所以比赛改期了 — phân câu thêm vào chỉ ngang hàng với vế nguyên nhân (quan hệ cấp 2), cả câu vẫn là nhân quả. Tiêu chí xác định câu chính/phụ chủ yếu là trật tự và từ nối, không phải ý nghĩa.',
    '## 1. Câu phức nhân quả 因果复句',
    'A. Nhân quả nói rõ (dùng sự thật đã có để nói nguyên nhân): 因为事情太多，所以我没去找你；由于他学习非常刻苦，他的成绩提高得很快；我之所以没有告诉你，主要是怕你太着急. Từ nối: 因为、由于、所以、因此、因而、以致、之所以……是因为…….',
    'B. Nhân quả suy luận (từ một căn cứ suy ra kết quả/quyết định): 既然他根本没有这个打算，我们也就不必勉强他了；他为她做了这么多事情，可见他还是爱她的. Từ nối: 既然……就/也/那么……、可见.',
    'Phân biệt A và B: 因为你不愿意说，所以我不问了 — dùng khi người nghe muốn biết lý do, người nói giải thích nguyên nhân. 既然你不愿意说，我就不问了 — dựa vào tình hình đã có, người nói tự đưa ra quyết định/phán đoán (không phải giải thích). Trả lời lời nhờ vả “我现在太忙” chỉ nói được 既然你很忙，那就算了吧, không nói *因为你很忙，所以就算了吧.',
    '## 2. Câu phức mục đích 目的复句',
    'Phân câu phụ nêu mục đích: 为了适应当前形势的要求，我们必须尽快调整政策 (phụ trước); 我们必须尽快调整政策，以便适应当前的形势要求；你最好事先跟他打个招呼，以免被动；我们要早点儿准备，省得到时候手忙脚乱 (chính trước, phụ sau — đều đổi được thành 为了……). Từ nối: 为了、以便、以免、省得、免得、好.',
    '## 3. Câu phức điều kiện 条件复句',
    'A. Điều kiện đủ (không loại trừ điều kiện khác): 你只要有决心，就一定能够实现自己的理想；只要一想到她，我的内心就很难平静. B. Điều kiện cần (loại trừ điều kiện khác): 只有具备了这些条件，我们才能录用你；除非你放弃这一主张，才会有光明的出路. C. Vô điều kiện (bất kỳ điều kiện nào cũng cùng kết quả; vế phụ thường chứa hình thức nghi vấn: đại từ nghi vấn, V不V, A还是B): 谎言不管重复多少遍，都不能成为事实；无论你怎么说，我都不会答应. Dạng “Chủ ngữ + 再 + …，也……”: 困难再大，我们也要按时完成任务；她再不好，也是你的母亲啊 (= 不管/无论困难有多大…).',
    '## 4. Câu phức giả thiết 假设复句',
    'A. Điều kiện và kết quả nhất trí: 如果明天下雨，我们就不去了；假如我把一切都告诉你，你会更加痛苦；要是你不这样做，怎么会有这个下场呢？ Văn viết dùng 若、倘若、假使; khẩu ngữ dùng “……的话” (đơn độc hoặc kết hợp 如果/要是): 你不同意的话，那就算了吧. B. Điều kiện và kết quả không nhất trí (câu nhượng bộ 让步复句): 即使我们将来有钱了，也要继续保持节俭的作风；就是天上下刀子，我们也要准时到达；纵然他有上天入地的本事，我们也不会让他跑掉. So sánh: *如果我们将来有钱了，我们也要保持节俭的作风 / *即使我们将来有钱了，我们一定要到各地好好走一走 — 如果 thuận theo điều kiện, 即使 kết quả trái với điều kiện.',
    '## 5. Câu phức chuyển ngoặt 转折复句',
    'Phân câu sau trái/ngược ý phân câu trước; trọng tâm ở câu chính (sau). A. Chuyển ngoặt mạnh: vế trước dựa vào vế sau, hai vế đều dùng từ nối: 虽然许多人反对他的意见，但是他始终坚持自己的意见；这孩子虽然年纪不大，可是志气不小；道理虽然讲清楚了，然而问题仍然没有解决；尽管对方有了这个态度，我们还是要坚持原来的方案；我们固然取得了一些成绩，却丝毫不能放松……. Hai hình thức đặc biệt: “A是A，就是/可是……” (便宜是便宜，就是质量差一点儿) và “A归A，……” (朋友归朋友，事情该怎么办还得怎么办). B. Chuyển ngoặt nhẹ: vế trước độc lập hơn, không dùng từ nối; vế sau dùng 不过、只是: 他是好人，只是不太会处理人际关系；我肯定会去，不过我想单独去. Vế sau của chuyển ngoặt nhẹ có thể thay bằng 但是/可是/却, nhưng chuyển ngoặt mạnh thường không thay bằng 只是/不过: *老人年纪虽然大了，只是仍然充满了活力.'
  ],
  zh: ['因为事情太多，所以我没去找你。', '我之所以没有告诉你，主要是怕你太着急。', '既然你不愿意说，我就不问了。', '你最好事先跟他打个招呼，以免被动。', '我们要早点儿准备，省得到时候手忙脚乱。', '只有具备了这些条件，我们才能录用你。', '无论你怎么说，我都不会答应。', '困难再大，我们也要按时完成任务。', '你不同意的话，那就算了吧。', '就是天上下刀子，我们也要准时到达。', '这孩子虽然年纪不大，可是志气不小。', '便宜是便宜，就是质量差一点儿。', '他是好人，只是不太会处理人际关系。'],
  notes: [['因果', 'yīnguǒ', 'nhân quả'], ['之所以', 'zhīsuǒyǐ', 'sở dĩ'], ['既然', 'jìrán', 'đã… thì'], ['勉强', 'miǎnqiǎng', 'ép buộc'], ['以便', 'yǐbiàn', 'để tiện, nhằm'], ['以免', 'yǐmiǎn', 'để tránh'], ['省得', 'shěngde', 'đỡ phải, khỏi phải'], ['手忙脚乱', 'shǒumáng jiǎoluàn', 'luống cuống'], ['录用', 'lùyòng', 'tuyển dụng'], ['除非', 'chúfēi', 'trừ phi'], ['谎言', 'huǎngyán', 'lời nói dối'], ['即使', 'jíshǐ', 'cho dù'], ['纵然', 'zòngrán', 'dẫu cho'], ['节俭', 'jiéjiǎn', 'tiết kiệm'], ['让步', 'ràngbù', 'nhượng bộ'], ['转折', 'zhuǎnzhé', 'chuyển ngoặt'], ['固然', 'gùrán', 'tuy rằng, đành rằng'], ['尽管', 'jǐnguǎn', 'mặc dù'], ['志气', 'zhìqì', 'chí khí']],
  ex: [
    { t: 'match', q: '【Cơ bản】Nối từ nối với loại câu phức chính phụ.', items: [['因为……所以……', 'nhân quả nói rõ'], ['既然……就……', 'nhân quả suy luận'], ['以免', 'mục đích'], ['只要……就……', 'điều kiện đủ'], ['只有……才……', 'điều kiện cần'], ['无论……都……', 'vô điều kiện'], ['如果……就……', 'giả thiết (nhất trí)'], ['即使……也……', 'giả thiết nhượng bộ'], ['虽然……但是……', 'chuyển ngoặt mạnh'], ['……，不过……', 'chuyển ngoặt nhẹ']] },
    { t: 'fill', q: '【Cơ bản】Điền cặp từ nối.', items: [['___下雨，我们___不去了。', '如果…就|要是…就'], ['___你努力，___一定能学好。', '只要…就'], ['___多练习，___能说得流利。', '只有…才'], ['___天气怎么样，我们___要去。', '不管…都|无论…都'], ['___你已经知道了，___不用我再说了。', '既然…就'], ['___他很累，___还在工作。', '虽然…但是|虽然…可是'], ['___明天下大雨，我___要去。', '即使…也|就是…也'], ['___他病了，___没来上课。', '因为…所以'], ['我们早点儿走，___迟到。', '以免|省得|免得'], ['他___没来，是因为生病了。', '之所以']] },
    { t: 'mc', q: '【Trung bình】Chọn từ nối đúng.', items: [
      ['___你不想去，那就别去了。', ['因为', '既然', '虽然', '即使'], 1],
      ['___他同意，我们___能开始。', ['只要……就', '只有……才', '无论……都', '如果……也'], 1],
      ['___我们将来有钱了，___要保持节俭的作风。', ['如果……就', '即使……也', '因为……所以', '只有……才'], 1],
      ['天快黑了，你快走吧，___路上不安全。', ['以便', '以免', '因此', '可见'], 1],
      ['老人年纪虽然大了，___仍然充满了活力。', ['只是', '不过', '但是', '就是'], 2],
      ['病已经好了，___还有一点儿咳嗽。', ['虽然', '只是', '而且', '所以'], 1],
      ['他天天都来看你，___他很关心你。', ['因为', '可见', '虽然', '以免'], 1],
      ['___你怎么解释，他都不相信。', ['即使', '无论', '只要', '虽然'], 1],
      ['___你帮我，我___能完成这个任务。（điều kiện cần）', ['只要……就', '只有……才', '既然……就', '虽然……但是'], 1],
      ['我们要把计划订得详细一点儿，___大家执行。', ['以免', '以便', '省得', '何况'], 1]
    ] },
    { t: 'tf', q: '【Trung bình】Câu nào đúng?', items: [['既然你很忙，那就算了吧。', true], ['因为你很忙，所以就算了吧。（đáp lại khi người kia từ chối giúp）', false], ['如果我们将来有钱了，我们也要保持节俭的作风。', false], ['即使我们将来有钱了，我们也要保持节俭的作风。', true], ['只要你有决心，就一定能实现理想。', true], ['只要你有决心，才能实现理想。', false], ['无论天气很好，我都去。', false], ['无论天气好不好，我都去。', true], ['老人年纪虽然大了，只是仍然充满了活力。', false], ['便宜是便宜，就是质量差一点儿。', true]] },
    { t: 'place', q: '【Trung bình】Chọn từ nối điền vào chỗ trống.', o: ['之所以', '既然', '以便', '除非', '不管', '的话', '纵然', '尽管', '归', '不过'], a: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], text: '1. 我{0}这么做，是因为没有别的办法。 2. {1}大家都同意，那就这么办吧。 3. 请留下电话号码，{2}我们跟您联系。 4. {3}你亲自去请，否则他不会来。 5. {4}遇到什么困难，我们都不怕。 6. 你明天有空{5}，来我家吃饭吧。 7. {6}有千难万险，我们也要前进。 8. {7}他工作很忙，还是每天锻炼身体。 9. 朋友{8}朋友，原则还是要坚持的。 10. 这件衣服很漂亮，{9}有点儿贵。' },
    { t: 'order', q: '【Trung bình】Sắp xếp thành câu phức.', items: [['只有', '多', '练习，', '才', '能', '说得', '流利。'], ['既然', '你', '已经', '决定了，', '我', '就', '不', '说', '什么了。'], ['不管', '多', '忙，', '他', '都', '坚持', '锻炼。'], ['即使', '失败了，', '我', '也', '不', '后悔。'], ['他', '之所以', '成功，', '是因为', '他', '非常', '努力。']] },
    { t: 'open', q: '【Nâng cao】Viết lại câu theo yêu cầu.', items: [['我们要早点儿准备，省得到时候手忙脚乱。（dùng 为了）', '为了避免到时候手忙脚乱，我们要早点儿准备。'], ['困难再大，我们也要按时完成任务。（dùng 不管）', '不管困难有多大，我们也要按时完成任务。'], ['因为你不愿意说，所以我不问了。（đổi sang suy luận）', '既然你不愿意说，我就不问了。'], ['这件衣服挺便宜的，可是质量太差了。（dùng A是A）', '便宜是便宜，可是质量太差了。'], ['我们是朋友，但事情该怎么办还得怎么办。（dùng A归A）', '朋友归朋友，事情该怎么办还得怎么办。']] }
  ],
  adv: {
    g: [['之所以……，是因为……', 'sở dĩ… là vì…', '我之所以来晚了，是因为路上堵车。'], ['除非……，否则/不然……', 'trừ phi… nếu không…', '除非你去请，否则他不会来。'], ['A是A，就是……', 'A thì có A, chỉ là…', '好是好，就是太贵了。'], ['……，好……', 'để (mục đích, khẩu ngữ)', '你留个电话，我好跟你联系。']],
    an: [['因为风太大，又有雨，所以比赛改期了。', '【①】因为风太大 ||ngang hàng|| 【②】又有雨 |nhân quả| 【③】所以比赛改期了 → quan hệ cấp 1 (nhân quả) không kéo dài; ①② ngang hàng là cấp 2'], ['只有具备了这些条件，我们才能录用你。', '【Phân câu phụ】只有具备了这些条件 (điều kiện cần) 【Phân câu chính】我们才能录用你']],
    v: [['调整', 'tiáozhěng', 'điều chỉnh'], ['被动', 'bèidòng', 'bị động'], ['下场', 'xiàchǎng', 'kết cục'], ['人际关系', 'rénjì guānxì', 'quan hệ giữa người với người'], ['单独', 'dāndú', 'một mình'], ['原则', 'yuánzé', 'nguyên tắc']]
  } },
{ id: 'g9-4', title: 'Câu phức nhiều tầng, câu rút gọn và vận dụng 多重复句·紧缩句·复句的运用', kind: '语法', src: '（《汉语语法教程》Chương IX, Tiết 4–6, tr.352–358）',
  p: [
    '## 1. Câu phức nhiều tầng 多重复句',
    'Câu phức do 3 phân câu trở lên, quan hệ từ 2 tầng trở lên. Ví dụ: ①我们都在这里，|(nhân quả) ②如果我们走了，||(giả thiết) ③这些工作谁来做？ Tầng 1 giữa ① và ②③ là nhân quả; tầng 2 giữa ② và ③ là giả thiết. Câu 3 tầng: 感性认识的材料积累多了，|就会产生一个飞跃，||变成了理性认识，|||这就是认识的过程. Câu phức nhiều tầng dùng nhiều trong văn viết, nhất là văn nghị luận; phân tích tầng giúp viết rõ ràng và đọc hiểu chính xác.',
    'Cách phân tích: tìm ranh giới lớn nhất trước (thường nhờ từ nối như 所以、但是、如果 đứng đầu một nhóm phân câu, hoặc dấu chấm phẩy), xác định quan hệ tầng 1, rồi tiếp tục chia từng nhóm.',
    '## 2. Câu rút gọn 紧缩句',
    'Hai phân câu có quan hệ câu phức rút gọn thành một câu không ngắt: 她不去就不去吧 (= 她如果不去，就不去吧)；组织起来才有力量 (= 只有组织起来，才有力量)；谁动炸死谁 (= 谁要是动一动，我就炸死谁)；我不问也明白八成 (= 我即使不问，也明白八成). Bản chất vẫn là câu phức (hai biểu đạt), không được phân tích như câu đơn. Chủ yếu dùng trong khẩu ngữ.',
    'Loại hình: (1) Cùng chủ ngữ, nối bằng phó từ: 就 (我打个电话就来；她不满意就发脾气)、才 (我跑了一个小时才跑到；他是不好好工作才被开除的)、也 (我们没有事也不会来找你；我死了也不会离开的)、再 (我回去再给你打电话；你有能耐再骂我一句)、还 (我不走难道还赖在这儿？)、都 (我谈了几次都没有谈成；有钱哪儿都能买到). (2) Khác chủ ngữ: 你说出来就放了你 (= 如果你说出来，我就放了你)；打死我也不怨你；她有水平找她去.',
    'Khung câu rút gọn thường dùng: 一……就…… (老师一讲我就明白)；再……也…… (再怎么说我们也是朋友；再穷不能穷教育)；不……也…… (不说我也明白)；不……不…… (不当家不知道柴米油盐贵)；đại từ nghi vấn … đại từ nghi vấn (谁这样做谁倒霉；得什么病吃什么药)；số từ … số từ (多一个人多一份力量；省一分钱是一分钱).',
    '## 3. Vận dụng câu phức — những lỗi cần tránh',
    '① Vị trí từ nối: hai phân câu cùng chủ ngữ → từ nối đứng SAU chủ ngữ: *不但人能够了解自然，而且能战胜自然 → 人不但能够了解自然，而且能战胜自然. Khác chủ ngữ → từ nối vế trước đứng TRƯỚC chủ ngữ: *我不但喜欢看电影，而且她也喜欢 → 不但我喜欢看电影，而且她也喜欢.',
    '② Không lẫn từ nối của các quan hệ khác nhau: *只有努力学习，就一定能学好 (只有 → 只要)；*既然你不明白，所以我可以告诉你 (bỏ 所以).',
    '③ Sắp xếp chủ ngữ hợp lý, không tùy tiện đổi chủ ngữ: *他……惨遭批斗，并迫使他和妻子离婚 → ……并被迫和妻子离婚. Có thể tỉnh lược chủ ngữ cho gọn: 我去看望过他，而且( )不只看望过一次.',
    '④ Khẩu ngữ ít dùng từ nối và hay dùng câu rút gọn; văn viết (nghị luận, thuyết minh) dùng từ nối nhiều hơn để lập luận chặt chẽ.'
  ],
  zh: ['她不去就不去吧。', '组织起来才有力量。', '我不问也明白八成。', '我打个电话就来。', '我跑了一个小时才跑到。', '我们没有事也不会来找你。', '我回去再给你打电话。', '老师一讲我就明白。', '再怎么说我们也是朋友。', '不当家不知道柴米油盐贵。', '谁这样做谁倒霉。', '多一个人多一份力量。', '人不但能够了解自然，而且能战胜自然。'],
  notes: [['多重复句', 'duōchóng fùjù', 'câu phức nhiều tầng'], ['层次', 'céngcì', 'tầng bậc'], ['飞跃', 'fēiyuè', 'bước nhảy vọt'], ['理性认识', 'lǐxìng rènshi', 'nhận thức lý tính'], ['紧缩', 'jǐnsuō', 'rút gọn, co lại'], ['八成', 'bāchéng', 'tám phần, phần lớn'], ['开除', 'kāichú', 'đuổi (việc/học)'], ['能耐', 'néngnai', 'bản lĩnh'], ['赖', 'lài', 'ăn vạ, ở lì'], ['倒霉', 'dǎoméi', 'xui xẻo'], ['当家', 'dāngjiā', 'quản việc nhà'], ['柴米油盐', 'chái mǐ yóu yán', 'củi gạo dầu muối'], ['批斗', 'pīdòu', 'đấu tố'], ['战胜', 'zhànshèng', 'chiến thắng']],
  ex: [
    { t: 'mc', q: '【Cơ bản】Câu rút gọn tương ứng với câu phức nào?', items: [
      ['她不去就不去吧。', ['她如果不去，就不去吧。', '她虽然不去，但是去吧。', '她因为不去，所以不去。'], 0],
      ['组织起来才有力量。', ['只要组织起来，就有力量。', '只有组织起来，才有力量。', '即使组织起来，也有力量。'], 1],
      ['我不问也明白八成。', ['我如果不问，就明白八成。', '我即使不问，也明白八成。', '我因为不问，所以明白八成。'], 1],
      ['你说出来就放了你。', ['如果你说出来，我就放了你。', '虽然你说出来，我也放了你。', '你一说出来，你就放了你。'], 0],
      ['打死我也不怨你。', ['即使你打死我，我也不怨你。', '如果你打死我，我就怨你。', '因为你打死我，所以不怨你。'], 0],
      ['她有水平找她去。', ['既然她有水平，你就找她去。', '虽然她有水平，你也找她去。', '只有她有水平，才找她去。'], 0]
    ] },
    { t: 'fill', q: '【Cơ bản】Điền phó từ để tạo câu rút gọn (就/才/也/再/都).', items: [['我吃了饭___走。', '再|就'], ['他一看___明白了。', '就'], ['我等了半天___等到他。', '才'], ['你不说我___知道。', '也'], ['我找了好几次___没找到。', '都'], ['不到长城非好汉，我们不到长城___不回来。', '决|就'], ['谁先到谁___买票。', '就'], ['你想好了___回答。', '再']] },
    { t: 'match', q: '【Trung bình】Nối câu rút gọn với khung câu.', items: [['老师一讲我就明白。', '一……就……'], ['再忙也要吃饭。', '再……也……'], ['不说我也明白。', '不……也……'], ['不得病不知道健康的重要。', '不……不……'], ['得什么病吃什么药。', 'nghi vấn … nghi vấn'], ['省一分钱是一分钱。', 'số từ … số từ']] },
    { t: 'tf', q: '【Trung bình】Câu nào đúng (chú ý vị trí từ nối)?', items: [['人不但能够了解自然，而且能战胜自然。', true], ['不但人能够了解自然，而且能战胜自然。', false], ['不但我喜欢看电影，而且她也喜欢看电影。', true], ['我不但喜欢看电影，而且她也喜欢看电影。', false], ['只有努力学习，就一定能学好。', false], ['只要努力学习，就一定能学好。', true], ['既然你不明白，所以我可以告诉你。', false], ['既然你不明白，我可以告诉你。', true]] },
    { t: 'open', q: '【Nâng cao】Phân tích tầng và quan hệ (dùng | cho tầng 1, || cho tầng 2).', items: [['因为我们都在这里，如果我们走了，这些工作谁来做？', '因为我们都在这里，|(nhân quả) 如果我们走了，||(giả thiết) 这些工作谁来做？'], ['虽然他很聪明，但是不努力，所以成绩不好。', '虽然他很聪明，||(chuyển ngoặt) 但是不努力，|(nhân quả) 所以成绩不好。'], ['只要大家团结一致，我们就能克服困难，而且能取得更大的成绩。', '只要大家团结一致，|(điều kiện) 我们就能克服困难，||(tăng tiến) 而且能取得更大的成绩。']] },
    { t: 'open', q: '【Nâng cao】Sửa câu sai và nói lý do.', items: [['不但他会说汉语，而且会说日语。', '他不但会说汉语，而且会说日语。(cùng chủ ngữ → từ nối sau chủ ngữ)'], ['只有你同意，我们就可以开始。', '只要你同意，我们就可以开始。/ 只有你同意，我们才可以开始。'], ['既然你来了，所以就坐一会儿吧。', '既然你来了，就坐一会儿吧。(bỏ 所以)'], ['无论天气很冷，他都去跑步。', '无论天气多冷，他都去跑步。(vế vô điều kiện cần hình thức nghi vấn)']] }
  ],
  adv: {
    g: [['一……就……', 'hễ… là…', '我一有困难就去找他。'], ['再……也……', 'dù… cũng…', '再有水平我也不用。'], ['谁……谁……', 'ai… người đó…', '谁先完成谁先走。'], ['越……越……', 'càng… càng…', '雨越下越大。']],
    an: [['谁动炸死谁。', '= 谁(要是)动一动，(我就)炸死谁 → câu rút gọn khác chủ ngữ, quan hệ giả thiết'], ['组织起来才有力量。', '= (只有)组织起来，才有力量 → câu rút gọn cùng chủ ngữ, điều kiện cần']],
    v: [['积累', 'jīlěi', 'tích lũy'], ['感性', 'gǎnxìng', 'cảm tính'], ['议论文', 'yìlùnwén', 'văn nghị luận'], ['发脾气', 'fā píqi', 'nổi nóng'], ['长见识', 'zhǎng jiànshi', 'mở mang hiểu biết'], ['惨遭', 'cǎnzāo', 'thảm bị']]
  } },
{ id: 'g9-5', title: 'Ôn tập chương IX — Câu phức 复句综合练习', kind: '语法', src: '（《汉语语法教程》Chương IX, 思考与练习, tr.359–366; đáp án theo phần 参考答案 của sách）',
  p: [
    '## Điểm chính của chương',
    '1. Câu không chỉ có câu đơn, câu phức cũng là câu. 2. Câu do 2 phân câu trở lên tổ hợp thành là câu phức. 3. Câu đơn và phân câu khác tính chất: câu đơn phải có thành phần hoàn thành câu, phân câu thì không bắt buộc.',
    '4. Câu đơn có một “biểu đạt” (một trung tâm vị ngữ), câu phức có hai trở lên. 5. Phân biệt câu đơn/câu phức cần chú ý dấu câu, từ nối, tỉnh lược chủ ngữ, câu rút gọn. 6. Ba phương thức nối kết: hình thức, ý nghĩa, hình thức + ý nghĩa.',
    '7. Hai loại lớn: liên hợp (ngang hàng, lựa chọn, tăng tiến, nối tiếp, giải thích) và chính phụ (nhân quả, mục đích, điều kiện, giả thiết, chuyển ngoặt). 8. Câu phức nhiều tầng thường dùng trong văn viết. 9. Câu rút gọn bản chất vẫn là câu phức, dùng nhiều trong khẩu ngữ. 10. Khi dùng câu phức chú ý vị trí từ nối, quan hệ logic, chủ ngữ các phân câu, khác biệt khẩu ngữ — văn viết.',
    '## Bảng tóm tắt từ nối',
    'Ngang hàng: 也、又、既……又/也……、不是……而是……、一方面……一方面……｜Lựa chọn: 还是、或者……或者……、要么……要么……、不是……就是……、宁可……也(不)……、与其……不如……｜Tăng tiến: 不但/不仅……而且/还/也……、不但不/没……反而……、尚且……何况……、甚至｜Nối tiếp: 先……然后/再……、接着、于是｜Giải thích: 就是说、即',
    'Nhân quả: 因为……所以……、由于……因此/因而……、之所以……是因为……、既然……就……、可见｜Mục đích: 为了、以便、以免、省得、免得｜Điều kiện: 只要……就……、只有……才……、除非……才/否则……、无论/不管……都/也……｜Giả thiết: 如果/要是/假如/倘若……就……、……的话、即使/就是/纵然……也……｜Chuyển ngoặt: 虽然/尽管/固然……但是/可是/然而/却……、不过、只是、A是A……、A归A……'
  ],
  zh: ['北京不仅是中国的政治中心，而且是文化中心。', '只有勤奋刻苦的人，才能取得大的成就。', '困难不仅没有吓倒他，反而坚定了他的信心。', '既然你已经答应了，就应该兑现自己的诺言。', '现在已经是冬天了，天气却不怎么冷。', '我有两个愿望，一个是找一个好妻子，一个是有一份稳定的工作。', '不达到目的决不罢休。', '跳进黄河都洗不清。'],
  notes: [['勤奋', 'qínfèn', 'cần cù'], ['镇定自如', 'zhèndìng zìrú', 'bình tĩnh tự nhiên'], ['毫不畏惧', 'háobù wèijù', 'không hề sợ hãi'], ['锤炼', 'chuíliàn', 'rèn luyện, tôi luyện'], ['兑现', 'duìxiàn', 'thực hiện (lời hứa)'], ['诺言', 'nuòyán', 'lời hứa'], ['交涉', 'jiāoshè', 'giao thiệp, thương lượng'], ['泥泞', 'nínìng', 'lầy lội'], ['朗照', 'lǎngzhào', 'chiếu sáng rực'], ['瞒', 'mán', 'giấu giếm'], ['珍惜', 'zhēnxī', 'trân trọng'], ['兴旺', 'xīngwàng', 'thịnh vượng'], ['倘若', 'tǎngruò', 'nếu như (văn viết)'], ['预见', 'yùjiàn', 'dự kiến, thấy trước']],
  ex: [
    { t: 'tf', q: '【Sách · 思考与练习 二】Nhận định đúng hay sai?', items: [['句子就是指单句，复句是几个单句组合起来的复合句。', false], ['分句就是单句。', false], ['单句和复句根本无法区别开来。', false], ['复句的连接方式不只是用关联词语，还有其他方式。', true], ['只要是使用了关联词语的句子一定是复句。', false], ['根据语义关系，一般把复句分成联合复句和偏正复句。', false], ['偏正复句也被称为主从复句。', true], ['转折复句是联合复句中的一个重要类型。', false], ['多重复句在口语中使用很多。', false], ['应该把紧缩句当作单句来分析。', false]] },
    { t: 'mc', q: '【Sách · 思考与练习 三】Câu đơn hay câu phức?', items: [
      ['只有勤奋刻苦的人，才能取得大的成就。', ['câu đơn', 'câu phức'], 0],
      ['北京不仅是中国的政治中心，而且是文化中心。', ['câu đơn', 'câu phức'], 1],
      ['我不说你也明白。', ['câu đơn', 'câu phức'], 1],
      ['他出去买报纸去了。', ['câu đơn', 'câu phức'], 0],
      ['老师走到前面，在黑板上写了几句话。', ['câu đơn', 'câu phức'], 1],
      ['穿上衣服，戴好帽子，他镇定自如地走了出去。', ['câu đơn', 'câu phức'], 1],
      ['为了孩子们的健康，你们必须关掉这个工厂。', ['câu đơn', 'câu phức'], 0],
      ['我回来的时候，门是开着的。', ['câu đơn', 'câu phức'], 0],
      ['为了解决好这个问题，我们研究了很多次。', ['câu đơn', 'câu phức'], 1],
      ['你离开这里，我们都会想念你的。', ['câu đơn', 'câu phức'], 1]
    ] },
    { t: 'open', q: '【Sách · 思考与练习 四】Ghép hai biểu đạt thành một câu phức (mẫu: 你坚持下去 / 你一定会成功 → 只要你坚持下去，就一定会成功).', items: [['他是我们的老师 / 他是我们的朋友', '他既是我们的老师，也是我们的朋友。/ 他不仅是我们的老师，而且是我们的朋友。'], ['孩子做完了作业 / 孩子出去玩了', '孩子做完了作业，然后出去玩了。'], ['他年纪不小了 / 他身体非常好', '他虽然年纪不小了，但是身体非常好。'], ['我将来有了钱 / 我想开一家公司', '如果我将来有了钱，我想开一家公司。'], ['你不帮助我 / 我可以做好这件事', '即使你不帮助我，我也可以做好这件事。'], ['你不想承担这个任务 / 我不勉强你', '既然你不想承担这个任务，我就不勉强你。'], ['这本书确实不错 / 这本书太贵了', '这本书确实不错，就是太贵了。/ 这本书不错是不错，可是太贵了。'], ['我们取得了很大的成绩 / 我们不能骄傲', '虽然我们取得了很大的成绩，但是我们不能骄傲。']] },
    { t: 'mc', q: '【Sách · 思考与练习 五】Câu phức thuộc loại nào?', items: [
      ['他们一个跟着一个，手拉着手，向前面走去。', ['ngang hàng', 'nối tiếp', 'giải thích', 'tăng tiến'], 0],
      ['你要想吃什么，尽管跟我说。', ['giả thiết', 'nhân quả', 'chuyển ngoặt', 'mục đích'], 0],
      ['困难再大，我们也要如期完成任务。', ['giả thiết', 'điều kiện (vô điều kiện)', 'chuyển ngoặt', 'nhân quả'], 1],
      ['战火催促着人们的成长，也锤炼着人们的友谊。', ['ngang hàng', 'tăng tiến', 'lựa chọn', 'nối tiếp'], 0],
      ['我很喜欢书法，不过这些年一直没有时间练习。', ['chuyển ngoặt', 'ngang hàng', 'nhân quả', 'giả thiết'], 0],
      ['即使是刀山火海，我也会毫不畏惧。', ['giả thiết (nhượng bộ)', 'điều kiện', 'nhân quả', 'tăng tiến'], 0],
      ['我有两个愿望，一个是找一个好妻子，一个是有一份稳定的工作。', ['giải thích', 'ngang hàng', 'lựa chọn', 'nối tiếp'], 0],
      ['困难不仅没有吓倒他，反而坚定了他的信心。', ['tăng tiến', 'chuyển ngoặt', 'ngang hàng', 'nhân quả'], 0],
      ['既然你已经答应了，就应该兑现自己的诺言。', ['nhân quả (suy luận)', 'điều kiện', 'giả thiết', 'mục đích'], 0],
      ['现在已经是冬天了，天气却不怎么冷。', ['chuyển ngoặt', 'nhân quả', 'ngang hàng', 'tăng tiến'], 0]
    ] },
    { t: 'tf', q: '【Sách · 思考与练习 六】Câu sau có phải câu rút gọn (紧缩句) không?', items: [['她从来都没有这么激动过。', false], ['我跟他们交涉了几次都没有成功。', true], ['她也对我详细介绍了一遍。', false], ['死了亲人也没这么伤心。', true], ['说完我才明白。', true], ['我现在才明白他这句话的意思。', false], ['你们明天再来吧。', false], ['你有本事再说一遍。', true]] },
    { t: 'mc', q: '【Sách · 思考与练习 七】Quan hệ giữa hai bộ phận của câu rút gọn (mẫu: 你不来也没关系 — giả thiết).', items: [
      ['有钱你就拿来。', ['giả thiết', 'nhân quả', 'chuyển ngoặt', 'nối tiếp'], 0],
      ['困难再大也要完成。', ['điều kiện (vô điều kiện)', 'nhân quả', 'nối tiếp', 'mục đích'], 0],
      ['不达到目的决不罢休。', ['giả thiết', 'ngang hàng', 'chuyển ngoặt', 'tăng tiến'], 0],
      ['我下了班就来找你。', ['nối tiếp', 'nhân quả', 'giả thiết', 'chuyển ngoặt'], 0],
      ['他出了事才来找我。', ['điều kiện', 'ngang hàng', 'lựa chọn', 'tăng tiến'], 0],
      ['生病就麻烦了。', ['giả thiết', 'nhân quả', 'ngang hàng', 'chuyển ngoặt'], 0],
      ['跳进黄河都洗不清。', ['giả thiết (nhượng bộ: 即使……也……)', 'nhân quả', 'mục đích', 'nối tiếp'], 0],
      ['我扔了也不会给你。', ['giả thiết (nhượng bộ: 即使……也……)', 'nhân quả', 'nối tiếp', 'điều kiện đủ'], 0]
    ] },
    { t: 'fill', q: '【Sách · 思考与练习 八】Điền từ nối thích hợp.', items: [['这孩子___脑子聪明，心眼儿___好。', '不但…也|不仅…也|既…又'], ['这场斗争___你死___我活。', '不是…就是'], ['残疾人___能够做到，___我们健全人呢？', '都…何况|尚且…何况'], ['___你把我杀了，我___不会告诉你。', '即使…也|就是…也'], ['对孩子___要有爱心，___还要有耐心。', '不但…而且|不仅…而且'], ['价钱确实很便宜，___质量不太好。', '只是|不过|就是'], ['我们要把所有可能的情况都想到，___到时候不知所措。', '以免|省得|免得'], ['___你已经知道了，为什么还来问我？', '既然'], ['___天气怎么样，这个计划不能改变。', '不管|无论'], ['___生活比较艰苦，___我的决心并没有丝毫的改变。', '虽然…但是|尽管…可是']] },
    { t: 'open', q: '【Sách · 思考与练习 九】Sửa câu sai.', items: [['她在工作中遇到困难的时候，不仅不灰心，不后退，而是迎着困难上。', '她在工作中遇到困难的时候，不仅不灰心，不后退，反而迎着困难上。(不仅不……反而……)'], ['只有把经济建设搞好，才国家的实力能增强。', '只有把经济建设搞好，国家的实力才能增强。'], ['不但我给他准备了吃的东西，还准备了用的东西。', '我不但给他准备了吃的东西，还准备了用的东西。'], ['她只有半个小时了，跑着到学校去。', '她只有半个小时了，所以只好跑着到学校去。'], ['虽然天下雨，运动会但是照常进行。', '虽然天下雨，但是运动会照常进行。'], ['这本书内容不是不好，而是价钱太贵。', '这本书不是内容不好，而是价钱太贵。(不是……而是…… phủ định 内容不好, khẳng định 价钱太贵)'], ['既小李不会唱歌，也不会跳舞，别请他了。', '小李既不会唱歌，也不会跳舞，别请他了。'], ['不管道路这样泥泞，但是他仍然坚持前进。', '尽管道路这样泥泞，但是他仍然坚持前进。'], ['尽管你有什么困难，同学们一定会帮助你的。', '不管你有什么困难，同学们都会帮助你的。'], ['她基础虽然不好，学习方法也有问题。', '她不但基础不好，学习方法也有问题。']] },
    { t: 'open', q: '【Sách · 思考与练习 十】Đổi câu phức thường thành câu rút gọn.', items: [['你如果不同意的话，那就算了。', '你不同意就算了。'], ['要是你想参加，就早点儿告诉我。', '想参加就早点儿告诉我。'], ['你既然不想去，那就别去。', '不想去就别去。'], ['我就是饿死，也决不来求你。', '我饿死也不来求你。'], ['虽然现在有钱了，也不该乱花。', '有钱也不该乱花。'], ['不管困难有多大，我也一定能做好。', '困难再大我也能做好。'], ['谁要是批评他，他就骂谁。', '谁批评他他骂谁。'], ['我无论怎么想，也想不起来。', '我怎么想也想不起来。'], ['他已经累了，可是也不休息。', '他累了也不休息。'], ['如果出了问题，那可怎么办？', '出了问题怎么办？'], ['他虽然身体不好，但没有影响工作。', '他身体不好也没影响工作。'], ['只要你打个电话，一切不就都知道了吗？', '打个电话不就都知道了吗？'], ['你想来的话，那就来吧。', '想来就来吧。'], ['你即使不说，我也明白为什么。', '你不说我也明白为什么。']] },
    { t: 'open', q: '【Sách · 思考与练习 十一】Phân tích câu phức hai tầng (| tầng 1, || tầng 2) và nói rõ quan hệ.', items: [['虽然是满月，天上却有一层淡淡的云，所以不能朗照。', '虽然是满月，||(chuyển ngoặt) 天上却有一层淡淡的云，|(nhân quả) 所以不能朗照。'], ['他要是在外边有了相好，即使能够瞒过你，可不能瞒过我。', '他要是在外边有了相好，|(giả thiết) 即使能够瞒过你，||(nhượng bộ/chuyển ngoặt) 可不能瞒过我。'], ['人不犯我，我不犯人；人若犯我，我必犯人。', '人不犯我，||(giả thiết) 我不犯人；|(ngang hàng) 人若犯我，||(giả thiết) 我必犯人。'], ['把人想得好了，就发现到处是好人；把人想得坏了，就发现到处是坏人。', '把人想得好了，||(giả thiết/điều kiện) 就发现到处是好人；|(ngang hàng) 把人想得坏了，||(giả thiết/điều kiện) 就发现到处是坏人。'], ['只有代表群众，才能教育群众，只有做群众的学生，才能做群众的先生。', '只有代表群众，||(điều kiện) 才能教育群众，|(ngang hàng) 只有做群众的学生，||(điều kiện) 才能做群众的先生。'], ['只要我们为人民的利益坚持好的，为人民的利益改正错的，我们这个队伍就一定会兴旺起来。', '只要我们为人民的利益坚持好的，||(ngang hàng) 为人民的利益改正错的，|(điều kiện) 我们这个队伍就一定会兴旺起来。'], ['倘若你想把一切错误都关在门外，那你也必将永远被关在真理的门外；倘若你想避免任何失败，那你也必定永远得不到成功。', '……关在门外，||(giả thiết) 那你也必将……门外；|(ngang hàng) 倘若你想避免任何失败，||(giả thiết) 那你也必定永远得不到成功。'], ['我们不但要看到近期的需要，而且必须预见到远期的需要；不但要依据生产建设发展的要求，而且必须充分估计到现代科学技术的发展趋势。', '……近期的需要，||(tăng tiến) 而且……远期的需要；|(ngang hàng) 不但要依据……要求，||(tăng tiến) 而且必须……发展趋势。']] }
  ],
  adv: {
    g: [['A也好，B也好，都……', 'dù A hay B đều…', '你去也好，他去也好，都可以。'], ['……，否则……', 'nếu không thì', '快走吧，否则要迟到了。'], ['……，从而……', 'từ đó, nhờ đó', '改进了方法，从而提高了效率。']],
    v: [['如期', 'rúqī', 'đúng hạn'], ['催促', 'cuīcù', 'thúc giục'], ['书法', 'shūfǎ', 'thư pháp'], ['残疾人', 'cánjírén', 'người khuyết tật'], ['不知所措', 'bùzhī suǒcuò', 'không biết làm sao'], ['趋势', 'qūshì', 'xu thế']]
  } }
] },
{ n: 10, title: 'Chương X · Diễn đạt thời gian và hệ thống “thể” 时间表达与体', texts: [
{ id: 'g10-1', title: 'Khái quát; thời điểm và thời đoạn 时点和时段', kind: '语法', src: '（《汉语语法教程》Chương X, Tiết 1–2, tr.367–378）',
  p: [
    '## 1. Khái quát về diễn đạt thời gian',
    'Diễn đạt thời gian không chỉ là dùng danh từ thời gian (今天、去年) hay phó từ thời gian (就、已经、正、才), mà bao gồm mọi vấn đề liên quan đến thời gian. 甲：你去吗？乙：不去。 — không có từ chỉ thời gian nhưng vẫn ngầm nói về tương lai. Một câu thiếu thông tin thời gian thường không hoàn chỉnh: nói đột ngột “孩子生病” thì người nghe không biết là 孩子病了、孩子要病了 hay 孩子病过; nhưng trong ngữ cảnh kể chuyện quá khứ (那几年，孩子生病，我下岗……) thì lại tự nhiên.',
    'Tiếng Hán không có “thì quá khứ” như -ed tiếng Anh; 了 KHÔNG phải dấu hiệu quá khứ. Lỗi thường gặp: *在我很小的时候，我就发现了我很喜欢中国；*我听说了他到上海去了；*父母强迫了我跟一个姑娘结婚 — các động từ này không mang 了.',
    '## 2. Thời điểm và thời đoạn',
    'Lấy thời gian nói làm “hiện tại”, trước là “quá khứ”, sau là “tương lai”. Gán trị số cụ thể (8 giờ, 10 giờ, 12 giờ) → THỜI ĐIỂM (时点) — một điểm trên trục thời gian. Khoảng giữa hai thời điểm → THỜI ĐOẠN (时段), đo bằng 小时、分钟、秒…. Lỗi: *我在那儿等了三月 (三月 = tháng Ba, thời điểm → 三个月)；*我二十分就做完了 (→ 二十分钟).',
    '## 3. Thời điểm và điểm mốc',
    'Định vị thời điểm cần điểm mốc tham chiếu; thường lấy thời gian nói: 前天—昨天—今天—明天—后天；上个星期—这个星期—下个星期；去年—今年—明年. Khi kể chuyện quá khứ hay bàn kế hoạch tương lai, điểm mốc là thời điểm của sự kiện, nên dùng 当天/第一天 (ngày đó), 第二天 (hôm sau), 前一天 (hôm trước) — không dùng 明天/昨天: *我是9月10日到北京的……明天，别的一个人和我一起参观故宫 → 第二天. Kế hoạch: 大概8号到北京，当天要去拜访一位老朋友……第二天打算到部里…….',
    '## 4. Hình thức diễn đạt',
    'Thời điểm: (1) danh từ thời gian: 今天、早上、明年、星期一; (2) 这/那 + từ thời gian: 这会儿、那时、此刻、这一天、这个星期、这段时间; (3) mượn ngày lễ: 我们打算劳动节结婚 (国庆节、儿童节、春节、中秋节、圣诞节…); mượn sự kiện: Sự kiện + 时/的时候/之际: 上课铃响的时候，他还在外面站着；临分手时，我送给他一件礼物；你不能在公司用人之际离开. Thời đoạn: số lượng + 天/小时/分钟/年…, số lượng + 时期/阶段/段时间. Chú ý: 一段时间 (thời đoạn) ≠ 这段时间 (thời điểm): 我们准备了一段时间 / *我们准备了这段时间；我们这段时间作了充分的准备 / *我们一段时间作了…. Tương tự 一天 (đoạn) – 这一天 (điểm), 一年 – 这一年.',
    '## 5. Hỏi thời điểm và thời đoạn',
    'Hỏi thời điểm: 什么时候？ (cơ bản) — 几点？哪天？几号？星期几？哪个星期？几月？哪年？ Hỏi thời đoạn: 多长时间？ (cơ bản; 多少时间 ít dùng) — 几秒钟/多少秒钟？几分钟？几个小时？几天？几个星期？几个月？几年？',
    '## 6. Vị trí trong câu',
    'Giống nhau: cả hai đều làm chủ ngữ, tân ngữ (今天是10号；一天足够了；会期是一天), định ngữ (三点的电影；三个小时的电影). Khác nhau: thời điểm làm TRẠNG NGỮ (trước động từ), không làm bổ ngữ: 他们明年毕业. Thời đoạn chủ yếu làm BỔ NGỮ (sau động từ): 他们毕业一年了; đứng trước động từ chỉ khi diễn đạt ý đặc biệt: 他们一年就把项目完成了 (nhấn mạnh nhanh, 就)；他们一年才把项目完成 (nhấn mạnh chậm, 才).'
  ],
  zh: ['我在那儿等了三个月。', '我二十分钟就做完了。', '我是九月十日到北京的，第二天参观了故宫。', '我们打算劳动节结婚。', '上课铃响的时候，他还在外面站着。', '临分手时，我送给他一件礼物。', '我们准备了一段时间。', '我们这段时间作了充分的准备。', '他们明年毕业。', '他们毕业一年了。', '他们一年就把项目完成了。', '三个小时的电影不算太长。'],
  notes: [['时点', 'shídiǎn', 'thời điểm'], ['时段', 'shíduàn', 'thời đoạn'], ['参照点', 'cānzhàodiǎn', 'điểm mốc tham chiếu'], ['说话时间', 'shuōhuà shíjiān', 'thời gian nói'], ['当天', 'dàngtiān', 'ngay hôm đó'], ['第二天', 'dì-èr tiān', 'ngày hôm sau'], ['劳动节', 'Láodòng Jié', 'Ngày Quốc tế Lao động'], ['国庆节', 'Guóqìng Jié', 'Quốc khánh'], ['中秋节', 'Zhōngqiū Jié', 'Tết Trung thu'], ['之际', 'zhījì', 'lúc, khi (văn viết)'], ['临', 'lín', 'sắp, lúc sắp'], ['阶段', 'jiēduàn', 'giai đoạn'], ['会期', 'huìqī', 'thời gian hội nghị'], ['开播', 'kāibō', 'bắt đầu phát sóng'], ['下岗', 'xiàgǎng', 'mất việc']],
  ex: [
    { t: 'mc', q: '【Sách · 思考与练习 三】Thời điểm (时点) hay thời đoạn (时段)?', items: [
      ['这时', ['thời điểm', 'thời đoạn'], 0], ['一会儿', ['thời điểm', 'thời đoạn'], 1], ['星期一', ['thời điểm', 'thời đoạn'], 0], ['一天', ['thời điểm', 'thời đoạn'], 1], ['那会儿', ['thời điểm', 'thời đoạn'], 0], ['一季度', ['thời điểm', 'thời đoạn'], 0], ['那天', ['thời điểm', 'thời đoạn'], 0], ['一星期', ['thời điểm', 'thời đoạn'], 1], ['三个月', ['thời điểm', 'thời đoạn'], 1], ['三月', ['thời điểm', 'thời đoạn'], 0], ['那个月', ['thời điểm', 'thời đoạn'], 0], ['第一天', ['thời điểm', 'thời đoạn'], 0], ['一年', ['thời điểm', 'thời đoạn'], 1], ['两三天', ['thời điểm', 'thời đoạn'], 1], ['一段时间', ['thời điểm', 'thời đoạn'], 1], ['两点', ['thời điểm', 'thời đoạn'], 0], ['两个钟头', ['thời điểm', 'thời đoạn'], 1], ['十分钟', ['thời điểm', 'thời đoạn'], 1]
    ] },
    { t: 'fill', q: '【Cơ bản】Điền từ để thành thời đoạn / thời điểm đúng.', items: [['我在中国学习了三___月。', '个'], ['我二十___就做完了。', '分钟'], ['他每天睡八___小时。', '个'], ['你等了多___时间？', '长'], ['电影几___开始？', '点'], ['你在北京住了几___？', '天|年|个月']] },
    { t: 'match', q: '【Cơ bản】Nối câu hỏi với câu trả lời phù hợp.', items: [['你什么时候来的？', '昨天来的。'], ['你来了多长时间了？', '两个星期了。'], ['今天几号？', '十五号。'], ['你每天学习几个小时？', '四个小时。'], ['你哪年毕业？', '明年。'], ['你学了几年汉语？', '三年。']] },
    { t: 'tf', q: '【Trung bình】Câu nào đúng?', items: [['我们准备了一段时间。', true], ['我们准备了这段时间。', false], ['我们这段时间作了充分的准备。', true], ['他们明年毕业。', true], ['他们毕业明年。', false], ['他们毕业一年了。', true], ['我在那儿等了三月。', false], ['我是九月十日到的，明天参观了故宫。', false], ['我是九月十日到的，第二天参观了故宫。', true], ['他们一年就把项目完成了。', true]] },
    { t: 'place', q: '【Trung bình】Kể chuyện quá khứ / kế hoạch: chọn từ chỉ thời điểm theo điểm mốc sự kiện.', o: ['第二天', '当天', '前一天', '那天', '明天', '昨天'], a: [1, 0, 2, 3, 4, 5], text: '去年我8号到上海，{0}晚上就去看了一位老朋友，{1}又参观了博物馆。出发的{2}，我还在忙着收拾行李。{3}的事我到现在还记得。——（nói với bạn hôm nay）{4}我们一起去看电影吧，{5}我已经买好票了。' },
    { t: 'order', q: '【Trung bình】Sắp xếp câu (chú ý vị trí thời điểm/thời đoạn).', items: [['我', '明天', '下午', '去', '图书馆。'], ['他', '在中国', '住了', '两年。'], ['我们', '一个小时', '就', '把', '作业', '做完了。'], ['上课铃', '响的时候，', '他', '还在', '外面。']] },
    { t: 'open', q: '【Sách · 思考与练习 四】Tìm từ ngữ biểu đạt thời gian trong câu.', items: [['两年前的今天，也是在日本……这一天使我永生难忘。', '两年前的今天；这一天'], ['他明天的这个时候肯定已经离开那里了。', '明天的这个时候'], ['五月三日下午从一点到三点，我们长谈了两个小时。', '五月三日下午从一点到三点；两个小时'], ['那年冬天，七哥差不多满十二岁了。', '那年冬天'], ['你可以在这里多等他一些时候。', '一些时候'], ['他五十岁的时候得了个儿子。', '五十岁的时候'], ['他肚子不好，一小时上三趟厕所。', '一小时'], ['我至今连他的面还没有见过。', '至今'], ['我有朝一日一定要报了这个仇。', '有朝一日'], ['咱们从今往后谁也不欠谁的了。', '从今往后'], ['时间定在明天下午两点。', '明天下午两点']] }
  ],
  adv: {
    g: [['……的时候 / ……时', 'khi…', '我醒来的时候已经九点了。'], ['……之际', 'vào lúc… (văn viết)', '在毕业之际，我们拍了合影。'], ['从……起/开始', 'kể từ…', '从下个月起，我开始工作。'], ['……以来', 'từ… đến nay', '改革开放以来，变化很大。']],
    an: [['他们一年就把项目完成了。', '【Chủ ngữ】他们 【Trạng ngữ (thời đoạn)】一年 【Trạng ngữ】就、把项目 【Vị ngữ】完成 【Trợ từ】了 → thời đoạn đứng trước động từ, nhấn mạnh nhanh'], ['他们毕业一年了。', '【Chủ ngữ】他们 【Vị ngữ】毕业 【Bổ ngữ (thời đoạn)】一年 【Trợ từ】了']],
    v: [['永生难忘', 'yǒngshēng nánwàng', 'suốt đời khó quên'], ['冠军', 'guànjūn', 'quán quân'], ['有朝一日', 'yǒuzhāo yīrì', 'một ngày nào đó'], ['从今往后', 'cóngjīn wǎnghòu', 'từ nay về sau'], ['至今', 'zhìjīn', 'đến nay'], ['季度', 'jìdù', 'quý']]
  } },
{ id: 'g10-2', title: 'Thời gian và động từ: tình trạng của động từ và của câu 动词情状·句子情状', kind: '语法', src: '（《汉语语法教程》Chương X, Tiết 3, tr.379–384）',
  p: [
    '## 1. Tính thời gian của động từ',
    'Động từ có đặc điểm thời gian riêng: 讨论 kéo dài được; 爆炸 bắt đầu cũng là kết thúc; 成为 có điểm kết thúc; 知道 chỉ trạng thái tĩnh. Đặc điểm này quyết định khả năng kết hợp: động từ không kéo dài được thì không đi với 正在/在/着: *他现在正在毕业着；*这个老人在死. Trạng thái vốn có của động từ gọi là tình trạng động từ (情状, situation).',
    '## 2. Bốn loại động từ theo tình trạng',
    '(1) Động từ TĨNH THÁI (静态): trạng thái như nhau ở mọi thời điểm, không kéo dài theo kiểu động, không thêm 正在 phía trước, không thêm 着 phía sau: 我是老师；他有许多朋友；三加四等于七. Khác: 在、姓、像、不如、知道、相信、认识、觉得、明白、怕、属于.',
    '(2) Động từ HOẠT ĐỘNG (活动): tính động thái mạnh, về lý có thể kéo dài vô tận; trước thêm 正在/在, sau thêm 着: 女儿一直不停地说着；他们已经讨论了很长时间了，还没讨论完. Khác: 走、跑、说、唱、写、做、吃、研究、调查、分析、观察、记录、生产、照顾、学习、锻炼、旋转、生活.',
    '(3) Động từ KẾT THÚC (终结): có quá trình nhưng hướng về điểm kết thúc tất yếu, thường là kết cấu động bổ: 解开 (giải → 开)；冰已经化成水了；马路已经拓宽了. Khác: 成为、化作、变为、扩大、缩小、提高、降低、拉长、缩短、抓紧、打通、改正、消灭、打败. Có từ kéo dài được (提高), có từ không (打开).',
    '(4) Động từ TỨC THỜI (瞬间): bắt đầu và kết thúc gần như trùng nhau, không kéo dài, không đi với 正在/在/着: 他死了；孩子已经醒了；儿子大学毕业了. Khác: 爆炸、塌、破坏、跌倒、下班、出院、断、到达、结束、停止、开始、看见、发现、见到、出发、失踪、丢失、发生、决定.',
    '## 3. Tình trạng của câu',
    'Tình trạng của câu không nhất thiết trùng với động từ. (1) Động từ kiêm hai loại: 墙上挂着一幅画 (tĩnh) / 他正在往墙上挂着画 (động); tương tự 贴、粘、放、摆、躺、蹲、抱、穿、戴、坐. (2) Cùng một động từ, câu có tình trạng khác nhau do thành phần khác: 他在门口站着 (tĩnh)；他腾的一下站了起来 (tức thời)；我想一直看下去 (hoạt động)；我看了一个电影 (kết thúc — cụm số lượng hạn định)；我要不停地跑下去 (hoạt động)；我就跑了一千米 (kết thúc).'
  ],
  zh: ['我是老师。', '三加四等于七。', '女儿一直不停地说着。', '他们已经讨论了很长时间了，还没讨论完。', '我想解开这根绳子。', '冰已经化成水了。', '他死了。', '孩子已经醒了。', '墙上挂着一幅画。', '他正在往墙上挂画。', '他腾的一下站了起来。', '我看了一个电影。'],
  notes: [['情状', 'qíngzhuàng', 'tình trạng (situation)'], ['静态', 'jìngtài', 'tĩnh thái'], ['动态', 'dòngtài', 'động thái'], ['活动', 'huódòng', 'hoạt động'], ['终结', 'zhōngjié', 'kết thúc'], ['瞬间', 'shùnjiān', 'tức thời, khoảnh khắc'], ['持续', 'chíxù', 'tiếp diễn, kéo dài'], ['爆炸', 'bàozhà', 'nổ'], ['拓宽', 'tuòkuān', 'mở rộng (đường)'], ['绳子', 'shéngzi', 'dây thừng'], ['塌方', 'tāfāng', 'sạt lở'], ['失踪', 'shīzōng', 'mất tích'], ['消灭', 'xiāomiè', 'tiêu diệt'], ['旋转', 'xuánzhuǎn', 'xoay tròn'], ['腾的一下', 'téng de yīxià', 'phắt một cái']],
  ex: [
    { t: 'mc', q: '【Sách · 思考与练习 五】Loại tình trạng của động từ.', items: [
      ['学习', ['tĩnh thái', 'hoạt động', 'kết thúc', 'tức thời'], 1], ['决定', ['tĩnh thái', 'hoạt động', 'kết thúc', 'tức thời'], 3], ['害怕', ['tĩnh thái', 'hoạt động', 'kết thúc', 'tức thời'], 0], ['生产', ['tĩnh thái', 'hoạt động', 'kết thúc', 'tức thời'], 1], ['消灭', ['tĩnh thái', 'hoạt động', 'kết thúc', 'tức thời'], 2], ['属于', ['tĩnh thái', 'hoạt động', 'kết thúc', 'tức thời'], 0], ['失踪', ['tĩnh thái', 'hoạt động', 'kết thúc', 'tức thời'], 3], ['缩小', ['tĩnh thái', 'hoạt động', 'kết thúc', 'tức thời'], 2], ['生活', ['tĩnh thái', 'hoạt động', 'kết thúc', 'tức thời'], 1], ['毕业', ['tĩnh thái', 'hoạt động', 'kết thúc', 'tức thời'], 3], ['生气', ['tĩnh thái', 'hoạt động', 'kết thúc', 'tức thời'], 0], ['丢失', ['tĩnh thái', 'hoạt động', 'kết thúc', 'tức thời'], 3], ['变为', ['tĩnh thái', 'hoạt động', 'kết thúc', 'tức thời'], 2], ['锻炼', ['tĩnh thái', 'hoạt động', 'kết thúc', 'tức thời'], 1], ['发生', ['tĩnh thái', 'hoạt động', 'kết thúc', 'tức thời'], 3], ['旋转', ['tĩnh thái', 'hoạt động', 'kết thúc', 'tức thời'], 1], ['打败', ['tĩnh thái', 'hoạt động', 'kết thúc', 'tức thời'], 2]
    ] },
    { t: 'mc', q: '【Sách · 思考与练习 六】Động từ in đậm (trong ngoặc) dùng ở trạng thái tĩnh hay động?', items: [
      ['门口【蹲】着一个人。', ['tĩnh', 'động'], 0], ['天气冷，快把衣服【穿】上。', ['tĩnh', 'động'], 1], ['离得太远我听不清楚，你【坐】过来一点儿。', ['tĩnh', 'động'], 1], ['大门两边【贴】着大红的春联。', ['tĩnh', 'động'], 0], ['孩子你【抱】一会儿。', ['tĩnh', 'động'], 1], ['听到声音，我赶紧【蹲】了下去。', ['tĩnh', 'động'], 1], ['老人在床上静静地【躺】着。', ['tĩnh', 'động'], 0], ['他刚把红灯笼【挂】到外面。', ['tĩnh', 'động'], 1], ['那些画儿很快就【贴】好了。', ['tĩnh', 'động'], 1], ['她的怀里【抱】着一个婴儿。', ['tĩnh', 'động'], 0], ['他慢慢地【躺】下去。', ['tĩnh', 'động'], 1], ['墙上【挂】着不少油画儿。', ['tĩnh', 'động'], 0]
    ] },
    { t: 'tf', q: '【Cơ bản】Câu nào đúng?', items: [['他正在学习。', true], ['他正在毕业。', false], ['我知道着这件事。', false], ['他们在讨论着。', true], ['孩子正在醒。', false], ['价格在一天天降低着。', true], ['他是着老师。', false], ['炸弹爆炸了。', true]] },
    { t: 'match', q: '【Trung bình】Nối câu với tình trạng của câu.', items: [['他在门口站着。', 'tĩnh thái'], ['他腾的一下站了起来。', 'tức thời'], ['我想一直看下去。', 'hoạt động'], ['我看了一个电影。', 'kết thúc'], ['我就跑了一千米。', 'kết thúc (cụm số lượng)'], ['大家还在商量。', 'hoạt động']] },
    { t: 'tf', q: '【Sách · 思考与练习 二】Nhận định đúng hay sai?', items: [['句子一般都要包含时间的信息。', true], ['表达时间的一些助词或副词可以使句子完整。', true], ['一般只有句子才有时间性，动词没有时间性。', false], ['动词的情状和句子的情状总是一致的。', false], ['在汉语中，已然体意义的表达不只是靠助词“了”。', true], ['体标记“了”只能表达过去时间里事件处于已然状态。', false], ['体标记“着”既用来表示静态的持续，也用来表达动态的持续。', true], ['决定“起来”“下去”是不是体标记的主要因素是动词本身的意义。', true]] },
    { t: 'open', q: '【Nâng cao】Vì sao câu sau sai? Sửa lại.', items: [['他现在正在毕业着。', '毕业 là động từ tức thời, không kéo dài → 他现在快毕业了 / 他刚毕业。'], ['我正在知道这件事。', '知道 là động từ tĩnh thái, không đi với 正在 → 我知道这件事。'], ['这个老人在死。', '死 là động từ tức thời → 这个老人快死了。'], ['墙上正在挂着一张画儿。', 'Tiếp diễn tĩnh thái không dùng 正在 → 墙上挂着一张画儿。']] }
  ],
  adv: {
    g: [['V + 着 (tĩnh)', 'trạng thái tồn tại', '门开着。'], ['正在 + V (động)', 'đang diễn ra', '他正在写信。'], ['一直 + V + 下去', 'tiếp tục mãi', '我要一直学下去。']],
    an: [['我看了一个电影。', '【Chủ ngữ】我 【Vị ngữ】看 【Thể】了 【Tân ngữ】一个电影 → động từ hoạt động, nhưng cụm số lượng tạo điểm kết thúc → câu kết thúc']],
    v: [['春联', 'chūnlián', 'câu đối Tết'], ['灯笼', 'dēnglong', 'đèn lồng'], ['婴儿', 'yīng\'ér', 'trẻ sơ sinh'], ['油画', 'yóuhuà', 'tranh sơn dầu'], ['蹲', 'dūn', 'ngồi xổm'], ['怀里', 'huáili', 'trong lòng (ôm)']]
  } },
{ id: 'g10-3', title: 'Thể hoàn thành 了 và thể tương lai 已然体·将然体', kind: '语法', src: '（《汉语语法教程》Chương X, Tiết 4, tr.384–397）',
  p: [
    '## 1. “Thể” là gì?',
    'Trạng thái của sự kiện ở các giai đoạn khác nhau trong tiến trình thời gian (bắt đầu, tiếp diễn, đã xảy ra…) gọi là “thể” (体, aspect). Tiếng Anh coi trọng “thì” (tense: quá khứ/hiện tại/tương lai), tiếng Hán coi trọng “thể”: sự kiện đã bắt đầu chưa, đã thực hiện chưa, có tiếp tục không. Ví dụ: I met him yesterday… He thought… → 我昨天见到了他……他认为这个问题应该早解决 (không nói *他认为了). Việc đã thực hiện chưa chắc ở quá khứ: 明天下了课我就去找你. Hình thức chủ yếu: trợ từ động thái sau động từ (了、着、过), kèm một số phó từ.',
    '## 2. Thể hoàn thành (已然体) — 了',
    'Sự kiện ở trạng thái đã xuất hiện/xảy ra: 我刚买了一本词典；我仔细地看了一遍说明书 (chưa thực hiện: 我买一本词典). Có thể nhấn bằng 已经: 这个电影他已经看了三遍了. Bổ ngữ kết quả tự mang nghĩa hoàn thành nên 了 không bắt buộc: 他腾地站起来；书已经找到，你就别着急了；明天我做完作业就去看你; động từ kết thúc cũng vậy: 他已经成为一名光荣的教师；价格已经降低不少.',
    'Bản chất của hoàn thành là BIẾN ĐỔI (từ trạng thái A sang B): 我已经知道了 (不知→知道)；叶子已经红了 (绿→红)；饺子熟了；我饿了. Phủ định + V + 了: 我不去了 (去→不去)；我已经不是孩子了. Trợ động từ + V + 了: 孩子会走路了；我想回去了. Danh từ + 了 (khẩu ngữ, tỉnh lược động từ): 我已经三十岁了；她都大姑娘了 (phủ định phải có động từ: 我还不到三十岁).',
    '了₁ (sau động từ) và 了₂ (cuối câu): 了₂ = hoàn thành + ngữ khí xác nhận. 他去了上海 (nói sự kiện đã xảy ra) / 他去上海了 (xác nhận việc đã thành sự thật — thư ký trả lời sếp “他现在在吧？” → 他去上海了). 了₂ có tác dụng hoàn thành câu, 了₁ thì không: *我吃了饭。(phải 我吃了一碗饭 hoặc 我吃了饭，还要去……) — quy tắc “động từ mang 了₁ thì tân ngữ phải có định ngữ”. Nối tiếp sự kiện chỉ dùng 了₁: 代表团回到了北京，就受到了……接见 / *代表团回到北京了，就…….',
    'Nhấn mạnh thời gian/nơi chốn/cách thức… của sự kiện đã hoàn thành: Chủ ngữ + (是) + thời gian/nơi chốn/phương thức + V + (O) + 的: 我是10号到北京的；他是坐飞机来的；这次演讲她是用英语讲的；我是为了你才这样做的. Chỉ dùng khi cả hai bên đều biết sự kiện đã xảy ra (甲：在哪儿买的？). 是 có thể lược, 的 không lược: 我用英语讲 (chưa xảy ra) / 我用英语讲的 (đã xảy ra); *我明天来的.',
    'Phủ định: 没(有) + V/Adj, KHÔNG có 了: 她还没写完；老师没来；叶子没红. Lỗi: *昨天我没在那儿等了他；*我没有看了这本历史书.',
    'Lưu ý khi dùng 了: ① Có 常常、经常、一直、每天… (thói quen, lặp lại) thì không dùng 了: *我来中国以前，几乎每年冬天都得了感冒. ② Câu liên động/kiêm ngữ: 了 sau động từ thứ hai (cuối): *我们到了郭沫若故居参观 → 我们到郭沫若故居参观了；*父母强迫了我跟……结婚；*公司派了我去南方出差 → 公司派我去南方出了差. ③ Tân ngữ là cụm chủ vị/động tân thì động từ trước không mang 了: *他认为了这个问题很简单；*我发现了他是个很有意思的人；*我喜欢了学汉语；*我同意了帮助他. ④ Có bổ ngữ hoặc 到/在/给 thì 了 đứng sau chúng: *他把那些汉字都写了对 → 写对了；*他放了下东西 → 放下了东西；*他坐了在…中间 → 坐在了…中间. ⑤ “V……以前” không dùng 了: *来了中国以前 → 来中国以前.',
    '## 3. Thể tương lai (将然体)',
    'Sự kiện sắp xảy ra ở thời điểm gần sau lúc nói: 车快开了；孩子要醒了. Hình thức: 快/要/快要/就要 + V/Adj + 了 (bắt buộc có 了): 我们快要毕业了；他明天就要回来了；香山的红叶快红了. Lưu ý: ① Không thiếu 了: *快要下雨，我们赶快回学校吧 → 快要下雨了. ② Trước 要/就要 có thể có từ chỉ thời gian; trước 快/快要 thì KHÔNG: *我们明天快考试了 → 我们明天就要考试了；*下个月我的生日快要到了 → 下个月我的生日就要到了. ③ Động từ tức thời và kết thúc rất hay dùng trong kiểu này (快到了、快毕业了).'
  ],
  zh: ['我刚买了一本词典。', '这个电影他已经看了三遍了。', '书已经找到了，你就别着急了。', '叶子已经红了。', '我不去了。', '孩子会走路了。', '他去上海了。', '代表团回到了北京，就受到了领导的接见。', '我是十号到北京的。', '他是坐飞机来的。', '她还没写完。', '公司派我去南方出了差。', '我们快要毕业了。', '他明天就要回来了。'],
  notes: [['体', 'tǐ', 'thể (aspect)'], ['时态', 'shítài', 'thì (tense)'], ['已然体', 'yǐrántǐ', 'thể hoàn thành'], ['将然体', 'jiāngrántǐ', 'thể tương lai'], ['体标记', 'tǐ biāojì', 'dấu hiệu thể'], ['变化', 'biànhuà', 'biến đổi'], ['确认', 'quèrèn', 'xác nhận'], ['说明书', 'shuōmíngshū', 'bản hướng dẫn'], ['接见', 'jiējiàn', 'tiếp kiến'], ['演讲', 'yǎnjiǎng', 'diễn thuyết'], ['故居', 'gùjū', 'nhà cũ (danh nhân)'], ['出差', 'chūchāi', 'đi công tác'], ['强迫', 'qiǎngpò', 'ép buộc'], ['红叶', 'hóngyè', 'lá đỏ']],
  ex: [
    { t: 'tf', q: '【Cơ bản】Câu nào đúng?', items: [['我昨天买了一本词典。', true], ['我没有看了这本书。', false], ['我没有看这本书。', true], ['他认为了这个问题很简单。', false], ['我来中国以前，每年冬天都得了感冒。', false], ['我们快要毕业了。', true], ['我们明天快考试了。', false], ['我们明天就要考试了。', true], ['快要下雨，我们回去吧。', false], ['我是坐飞机来的。', true], ['我明天来的。', false], ['他把那些汉字都写对了。', true]] },
    { t: 'fill', q: '【Cơ bản】Điền 了 nếu cần; nếu không được dùng 了 thì để trống (đáp án “—”).', items: [['他放下___东西就出去了。', '了'], ['我们到郭沫若故居参观___。', '了'], ['老师没来___。', '—'], ['春天到___，天气暖和起来了。', '了'], ['他坐在___我旁边。', '了'], ['我同意___帮助他。', '—']] },
    { t: 'mc', q: '【Trung bình】Chọn câu phù hợp ngữ cảnh.', items: [
      ['Sếp hỏi “他现在在吧？”, thư ký trả lời:', ['他去了上海。', '他去上海了。'], 1],
      ['甲：你说的是真的吗？乙：没错，___', ['代表团已经回到了北京。', '代表团已经回到北京了。'], 1],
      ['Nối tiếp hai sự kiện:', ['代表团回到了北京，就受到了接见。', '代表团回到北京了，就受到了接见。'], 0],
      ['Thấy bạn mặc áo mới, hỏi:', ['你在哪儿买？', '你在哪儿买的？'], 1],
      ['Nói sắp đến sinh nhật (tháng sau):', ['下个月我的生日快要到了。', '下个月我的生日就要到了。'], 1],
      ['Phủ định của “我看完了”:', ['我没看完了。', '我没看完。', '我不看完了。'], 1],
      ['Kể chuyện: “Tôi nghe nói anh ấy đi Thượng Hải rồi.”', ['我听说了他到上海去了。', '我听说他到上海去了。'], 1],
      ['Câu kiêm ngữ đúng:', ['父母强迫了我跟她结婚。', '父母强迫我跟她结了婚。'], 1]
    ] },
    { t: 'match', q: '【Trung bình】Nối câu “了” với sự biến đổi nó biểu thị.', items: [['我已经知道了。', 'không biết → biết'], ['叶子红了。', 'xanh → đỏ'], ['我不去了。', 'đi → không đi'], ['孩子会走路了。', 'chưa biết đi → biết đi'], ['她都大姑娘了。', 'cô bé → thiếu nữ'], ['他没有父母了。', 'có → không có']] },
    { t: 'open', q: '【Sách · 思考与练习 十】Hỏi/nhấn mạnh thời gian, nơi chốn, cách thức… bằng “是……的”.', items: [['他已经回来了。(thời gian / cách thức / nơi chốn)', '他是昨天回来的。/ 他是坐火车回来的。/ 他是从上海回来的。'], ['东西已经买到了。(thời gian / nơi chốn / cách thức)', '东西是上午买到的。/ 东西是在北京买到的。/ 东西是请人帮忙买到的。'], ['钱丢了。(thời gian / nơi chốn)', '钱是昨天丢的。/ 钱是在车上丢的。'], ['电脑修好了。(người làm / thời gian / nơi chốn / cách thức)', '电脑是我朋友修好的。/ 电脑是昨天修好的。/ 电脑是在公司修好的。/ 电脑是用这种办法修好的。'], ['客人走了。(thời gian / cách thức / nơi chốn)', '客人是10分钟前走的。/ 客人是骑自行车走的。/ 客人是从我这儿走的。']] },
    { t: 'open', q: '【Nâng cao】Sửa câu sai về “了”.', items: [['上个星期，我们到了郭沫若故居参观。', '上个星期，我们到郭沫若故居参观了。'], ['去年夏天，公司派了我去南方出差。', '去年夏天，公司派我去南方出了差。'], ['跟他谈话以后，我发现了他是个很有意思的人。', '……我发现他是个很有意思的人。'], ['来了中国以前，我一句中国话也不会说。', '来中国以前，我一句中国话也不会说。'], ['我把自行车送了给新入学的同学。', '我把自行车送给了新入学的同学。'], ['来中国以后，我们俩一直在一个班学习了汉语。', '来中国以后，我们俩一直在一个班学习汉语。']] }
  ],
  adv: {
    g: [['V了……就……', 'làm xong… thì…', '明天下了课我就去找你。'], ['是……的', 'nhấn thời gian/cách thức việc đã xảy ra', '你是怎么来的？'], ['快(要)……了 / 就要……了', 'sắp…', '火车就要开了。']],
    an: [['代表团已经回到了北京，就受到了领导的接见。', '【Phân câu 1】代表团 已经 回到 了₁ 北京 【Phân câu 2】就 受到 了₁ 领导的接见 → nối tiếp sự kiện dùng 了₁'], ['我是十号到北京的。', '【Chủ ngữ】我 【是】 【Thời gian】十号 【Vị ngữ】到北京 【的】 → nhấn thời gian của việc đã xảy ra']],
    v: [['词典', 'cídiǎn', 'từ điển'], ['光荣', 'guāngróng', 'vẻ vang'], ['施工', 'shīgōng', 'thi công'], ['饺子', 'jiǎozi', 'sủi cảo'], ['感冒', 'gǎnmào', 'cảm cúm'], ['合影', 'héyǐng', 'chụp ảnh chung']]
  } },
{ id: 'g10-4', title: 'Thể tiếp diễn 着 và thể quá khứ (từng trải) 过 持续体·曾然体', kind: '语法', src: '（《汉语语法教程》Chương X, Tiết 4, tr.397–406）',
  p: [
    '## 1. Thể tiếp diễn (持续体)',
    'Sự kiện ở trạng thái kéo dài không ngừng; người nói quan tâm đến trạng thái tiếp diễn, không phải lúc bắt đầu hay kết thúc: 大家都在不停地唱着歌儿；灯一直亮着. Hình thức điển hình: V/Adj + 着 + (O): 他仔细地打量着我；门开着；这时天还黑着. Hình thức khác: V + (O) + 呢 (他们上课呢)；在/正/正在 + V + (O) + (呢) (他们在讨论；会议正在进行) — các hình thức này CHỈ dùng cho tiếp diễn động.',
    'Tiếp diễn ĐỘNG (动态持续): sự việc có thay đổi (vị trí, lực, lời nói…): 两个人肩并肩走着；大家正愉快地跳着舞. Đặc điểm: ① động từ hoạt động, một phần động từ kết thúc (我们在不断地提高着自己的水平；价格还在一天天降低着); ② dùng được cả 着 lẫn 在/正在…呢, hoặc kết hợp: 这个老师正在上着课呢；外面正下着雨呢; ③ nhấn tiếp diễn: V着V着 (động từ đơn âm): 我们走着走着，不知不觉走到了山脚下；她说着说着，哭了起来.',
    'Tiếp diễn TĨNH (静态持续): sự việc giữ nguyên một trạng thái không đổi: 屋里的灯一直亮着；我去的时候，发现门开着；双方的关系一直僵持着. Đặc điểm: ① động từ tĩnh thái (trừ 是、属于、等于), vd. 担心、坐、站、躺; ② động từ kiêm loại: 他们正在往墙上挂着画儿呢 (động) / 墙上挂着一些画儿 (tĩnh)；她手上拿着一本词典；地上铺着一块地毯; ③ chỉ dùng 着, KHÔNG dùng 在/正在: *墙上正在挂着一张画儿.',
    'Lưu ý khi dùng 着: ① 着 đứng ngay sau động từ, trước tân ngữ; động từ ly hợp thì chen giữa: *下雨着 → 下着雨；*低头着 → 低着头；*鼓掌着 → 鼓着掌. ② Sau động từ có thời lượng/động lượng thì không dùng 着 (mâu thuẫn tiếp diễn ↔ kết thúc), đổi thành 了: *我呆呆地站着一会儿 → 站了一会儿；*我等着一个半小时 → 等了…；*瞪着我一眼 → 瞪了我一眼. ③ Có nơi chốn sau động từ thì dùng 在, không dùng 着, cũng không dùng cả hai: *躺着床上 → 躺在床上；*坐着汽车里 → 坐在汽车里；*一直坐着在办公室里 → 坐在办公室里. ④ Động tác đi kèm động tác khác: động từ trước phải có 着: 他正坐着听收音机呢；他们紧紧握着我们的手说：“欢迎！”；他带着难舍难分的心情回宾馆去了.',
    '## 2. Thể quá khứ / từng trải (曾然体) — 过',
    'Sự kiện đã xảy ra trong quá khứ và đã kết thúc trong quá khứ; trọng tâm là có hay không có trải nghiệm, ảnh hưởng đến hiện tại không quan trọng: 我以前去过那个地方 — 你去过几次？去过两次；那个地方我以前去过一次.',
    'Quan hệ với thể hoàn thành: 过 nhất định ở quá khứ; 了 thường ở quá khứ nhưng cũng có thể ở tương lai. Có cụm số lượng thì khác biệt nhỏ: 她去了一趟北京 ≈ 她去过一趟北京. Không có số lượng thì khác rõ: 她去了北京 (giờ cô ấy đang ở Bắc Kinh, không có ở đây) / 她去过北京 (đã từng đi, giờ ở đây). 孩子胖了 (giờ béo) / 孩子胖过 (từng béo, giờ không). 了 kết hợp được với 起来 (孩子终于胖了起来), 过 thì không (*孩子胖过起来).',
    'Lưu ý khi dùng 过: ① Việc thường xuyên, lặp lại thì không dùng 过: *那个节目经常播送过. ② Câu liên động/kiêm ngữ: 过 sau động từ sau: *我们去过首都剧场看话剧 → 我们去首都剧场看过话剧；*公司派过我去北京 → 公司派我去过北京. Động từ ly hợp/động tân: 过 chen giữa: *当记者过 → 当过记者；*请假过 → 请过假. ③ Diễn tả có từng xảy ra trong quá khứ thì phải có 过: 我们国家从来没有闹过地震；我去过那儿一次，我可以告诉你们怎么去. ④ Trước động từ chỉ dùng thời gian xác định, không dùng thời gian bất định như 有一天、有时候: *有一天，我去过上海；*我有时候看过中国电影.'
  ],
  zh: ['大家都在不停地唱着歌儿。', '灯一直亮着。', '外面正下着雨呢。', '我们走着走着，不知不觉走到了山脚下。', '墙上挂着一些画儿。', '她手上拿着一本词典。', '他正坐着听收音机呢。', '我呆呆地站了一会儿。', '他们吃饭后躺在床上。', '我以前去过那个地方。', '她去了北京。', '她去过北京。', '我们去首都剧场看过话剧。', '我们国家从来没有闹过地震。'],
  notes: [['持续体', 'chíxùtǐ', 'thể tiếp diễn'], ['曾然体', 'céngrántǐ', 'thể từng trải (quá khứ)'], ['打量', 'dǎliang', 'quan sát, ngắm nghía'], ['肩并肩', 'jiān bìng jiān', 'vai kề vai'], ['僵持', 'jiāngchí', 'giằng co'], ['地毯', 'dìtǎn', 'thảm'], ['鼓掌', 'gǔzhǎng', 'vỗ tay'], ['瞪', 'dèng', 'trừng mắt'], ['书呆子', 'shūdāizi', 'mọt sách'], ['难舍难分', 'nánshě nánfēn', 'quyến luyến không rời'], ['经历', 'jīnglì', 'trải nghiệm'], ['播送', 'bōsòng', 'phát sóng'], ['话剧', 'huàjù', 'kịch nói'], ['闹地震', 'nào dìzhèn', 'xảy ra động đất']],
  ex: [
    { t: 'tf', q: '【Cơ bản】Câu nào đúng?', items: [['外面下着雨。', true], ['外面下雨着。', false], ['她低着头不说话。', true], ['我在那儿等着一个半小时。', false], ['我在那儿等了一个半小时。', true], ['他躺着床上。', false], ['他躺在床上。', true], ['墙上正在挂着一张画儿。', false], ['我去过长城两次。', true], ['我当记者过。', false], ['我当过记者。', true], ['有一天，我去过上海。', false]] },
    { t: 'mc', q: '【Cơ bản】Chọn 了, 着 hay 过.', items: [
      ['他手里拿___一本书。', ['了', '着', '过'], 1], ['我以前学___日语，现在忘了。', ['了', '着', '过'], 2], ['我昨天买___一件衣服。', ['了', '着', '过'], 0], ['门开___，屋里没人。', ['了', '着', '过'], 1], ['你吃___北京烤鸭吗？', ['了', '着', '过'], 2], ['她笑___说：“欢迎你！”', ['了', '着', '过'], 1], ['我们谈___半个小时了。', ['了', '着', '过'], 0], ['这个地方我从来没来___。', ['了', '着', '过'], 2]
    ] },
    { t: 'mc', q: '【Trung bình】Nghĩa của câu.', items: [
      ['她去了北京。', ['Cô ấy đang ở Bắc Kinh (không ở đây).', 'Cô ấy từng đi Bắc Kinh, giờ ở đây.'], 0],
      ['她去过北京。', ['Cô ấy đang ở Bắc Kinh (không ở đây).', 'Cô ấy từng đi Bắc Kinh, giờ ở đây.'], 1],
      ['孩子胖了。', ['Đứa bé giờ béo lên.', 'Đứa bé từng béo, giờ không.'], 0],
      ['孩子胖过。', ['Đứa bé giờ béo lên.', 'Đứa bé từng béo, giờ không.'], 1],
      ['他们正在往墙上挂着画儿呢。', ['tiếp diễn động', 'tiếp diễn tĩnh'], 0],
      ['墙上挂着一些画儿。', ['tiếp diễn động', 'tiếp diễn tĩnh'], 1]
    ] },
    { t: 'place', q: '【Trung bình】Điền 了/着/过/在.', o: ['着', '了', '过', '在'], a: [0, 0, 1, 2, 3, 1, 0, 2], text: '1. 他紧紧握{0}我的手。 2. 我们走{1}走着，天就黑了。 3. 她走了以后，我呆呆地站{2}一会儿。 4. 我小时候在农村住{3}几年。 5. 他坐{4}汽车里看报纸。 6. 电话响{5}很长时间，他居然没醒。 7. 他带{6}难舍难分的心情回去了。 8. 我们国家从来没有闹{7}地震。' },
    { t: 'order', q: '【Trung bình】Sắp xếp câu.', items: [['他', '正', '坐着', '听', '收音机', '呢。'], ['地上', '铺着', '一块', '地毯。'], ['我们', '去', '首都剧场', '看过', '话剧。'], ['公司', '派', '我', '去过', '北京。'], ['外面', '正', '下着', '雨', '呢。']] },
    { t: 'open', q: '【Nâng cao】Sửa câu sai.', items: [['今天早上还下雨着他们就出发了。', '今天早上还下着雨他们就出发了。'], ['他们鼓掌着热烈欢迎我们留学生。', '他们鼓着掌热烈欢迎我们留学生。'], ['“书呆子！”老黄瞪着我一眼。', '“书呆子！”老黄瞪了我一眼。'], ['上午，他一直坐着在办公室里。', '上午，他一直坐在办公室里。'], ['我来北京以后，一个人去过旅游。', '我来北京以后，一个人去旅游过。/ 一个人去旅过游。'], ['来中国以前，我有时候看过中国电影。', '来中国以前，我有时候看中国电影。/ 我看过中国电影。'], ['那个节目经常播送过。', '那个节目经常播送。']] }
  ],
  adv: {
    g: [['V着V着，……', 'đang… thì…', '她说着说着，哭了起来。'], ['V₁着(O)V₂', 'làm V₂ trong trạng thái V₁', '他笑着说。'], ['从来没(有)V过', 'chưa từng bao giờ', '我从来没见过这么美的地方。']],
    an: [['他正坐着听收音机呢。', '【Chủ ngữ】他 【Phó từ】正 【V₁+着】坐着 (cách thức) 【V₂】听 【Tân ngữ】收音机 【Ngữ khí】呢']],
    v: [['收音机', 'shōuyīnjī', 'đài radio'], ['握手', 'wòshǒu', 'bắt tay'], ['宾馆', 'bīnguǎn', 'khách sạn'], ['烤鸭', 'kǎoyā', 'vịt quay'], ['剧场', 'jùchǎng', 'nhà hát'], ['居然', 'jūrán', 'thế mà, lại']]
  } },
{ id: 'g10-5', title: 'Thể bắt đầu 起来 và thể tiếp tục 下去 起始体·接续体', kind: '语法', src: '（《汉语语法教程》Chương X, Tiết 4, tr.406–412）',
  p: [
    '## 1. Thể bắt đầu (起始体) — 起来',
    'Sự việc vừa mới bắt đầu: 想到这些，她伤心地哭起来；他们不知道因为什么又吵起来了. Hình thức: V/Adj + 起来: 天气也热起来了；关系已经好起来了. Còn dùng 上、开: 你怎么也跟着哭上了？还没说几句，两个人就吵开了. Với 起来, 了 có thể có hoặc không và có thể đứng trước (哭了起来); với 上/开 thì bắt buộc có 了 và 了 chỉ đứng sau (吵开了).',
    'Phân biệt 起来 dấu hiệu thể và 起来 động từ xu hướng: 她突然站起来 (xu hướng thật: ngồi → đứng, từ dưới lên) / 她突然笑起来 (bắt đầu cười — nghĩa hư, dấu hiệu thể). Quyết định bởi nghĩa động từ: động từ có nghĩa di chuyển từ dưới lên (站、坐、抬、举、跳、拿、爬…) → thường là xu hướng; động từ không có nghĩa đó (说、唱、哭、笑、吵、讨论、商量、学、热、好…) → thường là thể bắt đầu. Một số động từ trong ngữ cảnh vẫn có thể bắt đầu: 你的身体还没恢复，怎么举起杠铃来了；他就迫不及待地跳了起来.',
    'Có tân ngữ hoặc động từ ly hợp: V + 起 + O + 来: 大家高高兴兴地唱起歌儿来；他们怎么又吵起架来了？',
    '## 2. Thể tiếp tục (接续体) — 下去',
    'Sự kiện đang tiến hành và sẽ tiếp tục sau lúc nói: 我们坐在那里静静地听她唱下去 (đang liên tục — hay đi với 一直)；你怎么停下来了？接着说下去 (tạm ngắt rồi tiếp — hay đi với 接着). Khác với thể tiếp diễn 着: 着 nói trạng thái từ trước đến lúc nói (天都亮了，灯怎么还开着？快去关上); 下去 chú ý sự kéo dài SAU lúc nói.',
    'Phân biệt với 下去 xu hướng: 请你把这本书读下去 (thể tiếp tục) / 请你把这本书拿下去 (xu hướng: cầm xuống). Động từ có nghĩa di chuyển vị trí (走、跑、跳、爬 — chủ thể tự di chuyển; 拿、搬、扔、放 — làm vật khác di chuyển) → 下去 thường là xu hướng; động từ không di chuyển (说、唱、吵、听、看、写、读、活、坚持) → thể tiếp tục. Có khi nhập nhằng, cần ngữ cảnh: 你得跑下去 (đứng trên dốc: chạy xuống / đang thi chạy sắp bỏ cuộc: chạy tiếp đi).',
    'Khác 起来: sau V + 下去 (thể tiếp tục) KHÔNG có tân ngữ: 大家讨论起这个问题来了 / *我们得讨论下这个问题去 → 这个问题我们得讨论下去；我们这个问题得讨论下去. Với động từ ly hợp không tách được lên đầu câu thì phần “tân ngữ” mất đi: *你们别再吵架下去了 → 你们别再吵下去了; tách được thì đưa lên đầu: 这个舞还应该跳下去.'
  ],
  zh: ['想到这些，她伤心地哭起来。', '天气也热起来了。', '还没说几句，两个人就吵开了。', '听到这个消息，她忍不住哭了起来。', '她突然站起来。', '她突然笑起来。', '大家高高兴兴地唱起歌儿来。', '你怎么停下来了？接着说下去。', '请你把这本书读下去。', '请你把这本书拿下去。', '这个问题我们得讨论下去。', '你们别再吵下去了。'],
  notes: [['起始体', 'qǐshǐtǐ', 'thể bắt đầu'], ['接续体', 'jiēxùtǐ', 'thể tiếp tục'], ['趋向动词', 'qūxiàng dòngcí', 'động từ xu hướng'], ['伤心', 'shāngxīn', 'đau lòng'], ['吵架', 'chǎojià', 'cãi nhau'], ['忍不住', 'rěnbuzhù', 'không nhịn được'], ['杠铃', 'gànglíng', 'tạ đòn'], ['迫不及待', 'pòbùjídài', 'nóng lòng không chờ được'], ['恢复', 'huīfù', 'hồi phục'], ['接着', 'jiēzhe', 'tiếp theo, tiếp tục'], ['坚持', 'jiānchí', 'kiên trì'], ['咬牙', 'yǎoyá', 'cắn răng'], ['峡谷', 'xiágǔ', 'hẻm núi'], ['开阔', 'kāikuò', 'rộng mở']],
  ex: [
    { t: 'mc', q: '【Sách · 思考与练习 八】“起来/下去” là dấu hiệu thể hay động từ xu hướng?', items: [
      ['风已经刮起来了。', ['dấu hiệu thể', 'động từ xu hướng'], 0], ['你先把这张桌子搬下去。', ['dấu hiệu thể', 'động từ xu hướng'], 1], ['太高，跳起来都摸不到。', ['dấu hiệu thể', 'động từ xu hướng'], 1], ['音乐一响，大家都高兴地跳了起来。', ['dấu hiệu thể', 'động từ xu hướng'], 0], ['还有400米，你得咬牙坚持下去。', ['dấu hiệu thể', 'động từ xu hướng'], 0], ['这种时候，就是火海，我也要跳下去。', ['dấu hiệu thể', 'động từ xu hướng'], 1], ['出了峡谷，前面突然开阔起来。', ['dấu hiệu thể', 'động từ xu hướng'], 0], ['不管怎么样，我们也要坚强地活下去。', ['dấu hiệu thể', 'động từ xu hướng'], 0], ['你把头抬起来。', ['dấu hiệu thể', 'động từ xu hướng'], 1], ['你敢从这儿跳下去吗？', ['dấu hiệu thể', 'động từ xu hướng'], 1]
    ] },
    { t: 'tf', q: '【Cơ bản】Câu nào đúng?', items: [['大家唱起歌儿来。', true], ['大家唱起来歌儿。', false], ['他们又吵起架来了。', true], ['我们得讨论下这个问题去。', false], ['这个问题我们得讨论下去。', true], ['你们别再吵架下去了。', false], ['你们别再吵下去了。', true], ['两个人就吵开了。', true], ['孩子胖过起来。', false]] },
    { t: 'fill', q: '【Cơ bản】Điền 起来 hoặc 下去.', items: [['天气慢慢暖和___了。', '起来'], ['你说得很好，接着说___。', '下去'], ['听了这个笑话，大家都笑了___。', '起来'], ['不管多难，我都要学___。', '下去'], ['孩子突然哭___了。', '起来'], ['这样下去不行，我们不能再等___了。', '下去']] },
    { t: 'match', q: '【Trung bình】Nối thể với dấu hiệu.', items: [['thể hoàn thành (已然体)', 'V + 了'], ['thể tương lai (将然体)', '快/要/就要 + V + 了'], ['thể từng trải (曾然体)', 'V + 过'], ['thể tiếp diễn (持续体)', 'V + 着 / 在 + V'], ['thể bắt đầu (起始体)', 'V + 起来'], ['thể tiếp tục (接续体)', 'V + 下去']] },
    { t: 'order', q: '【Trung bình】Sắp xếp câu.', items: [['大家', '高高兴兴地', '唱起', '歌儿', '来。'], ['这个问题', '我们', '得', '讨论', '下去。'], ['听到', '这个消息，', '她', '忍不住', '哭了', '起来。'], ['你', '怎么', '停下来了？', '接着', '说', '下去。']] },
    { t: 'open', q: '【Nâng cao】Giải thích hai nghĩa của câu theo ngữ cảnh.', items: [['你得跑下去。', 'Đứng trên dốc: chạy xuống dưới (bổ ngữ xu hướng). Đang thi chạy sắp bỏ cuộc: không được dừng, chạy tiếp (dấu hiệu thể tiếp tục).'], ['他站起来了。/ 他笑起来了。', '站起来: xu hướng từ dưới lên (thực). 笑起来: bắt đầu cười (hư, dấu hiệu thể bắt đầu).'], ['请你把这本书读下去。/ 请你把这本书拿下去。', '读下去: đọc tiếp (thể tiếp tục). 拿下去: cầm xuống dưới (xu hướng).']] }
  ],
  adv: {
    g: [['V起O来', 'bắt đầu làm gì (có tân ngữ)', '他们聊起天来。'], ['看起来/听起来', 'trông có vẻ / nghe có vẻ', '这件衣服看起来不错。'], ['……下去', 'tiếp tục', '这样下去可不行。']],
    an: [['大家高高兴兴地唱起歌儿来。', '【Chủ ngữ】大家 【Trạng ngữ】高高兴兴地 【V】唱起 【Tân ngữ】歌儿 【来】 → V起O来, thể bắt đầu']],
    v: [['刮风', 'guā fēng', 'gió thổi'], ['摸', 'mō', 'sờ, chạm'], ['火海', 'huǒhǎi', 'biển lửa'], ['坚强', 'jiānqiáng', 'kiên cường'], ['抬头', 'táitóu', 'ngẩng đầu'], ['笑话', 'xiàohua', 'truyện cười']]
  } },
{ id: 'g10-6', title: 'Ôn tập chương X — Thời gian và “thể” 时间表达综合练习', kind: '语法', src: '（《汉语语法教程》Chương X, 思考与练习, tr.413–419; đáp án theo phần 参考答案 của sách）',
  p: [
    '## Điểm chính của chương',
    '1. Biểu đạt thời gian là mặt quan trọng của biểu đạt ngôn ngữ; mỗi ngôn ngữ có đặc điểm riêng. 2. Tiếng Hán coi trọng “thể”, tiếng Anh coi trọng “thì”. 3. Thời điểm và thời đoạn là hai hình thức cơ bản; thời gian nói thường là điểm mốc định vị.',
    '4. Động từ có tính thời gian; chia thành tĩnh thái, hoạt động, tức thời, kết thúc. 5. Tình trạng của động từ và của câu có thể khác nhau. 6. Ý nghĩa “thể” chủ yếu nhờ trợ từ động thái (了、着、过), cùng các hình thức khác.',
    '7. Hệ thống thể: hoàn thành (V了), tương lai (快/要……了), từng trải (V过), tiếp diễn (V着/在V), bắt đầu (V起来), tiếp tục (V下去) — mỗi thể có hình thức ngữ pháp riêng.',
    '## Bảng tóm tắt',
    'Thể hoàn thành: 我吃了一碗饭｜phủ định 没V (không 了)｜是……的 nhấn thời gian/cách thức. Thể tương lai: 快/快要/要/就要……了 (trước 快 không có từ thời gian). Thể tiếp diễn: 着 (tĩnh & động), 在/正在……呢 (chỉ động); không đi với thời lượng, nơi chốn sau động từ. Thể từng trải: 过; phủ định 没V过; không dùng với 有一天/经常. Thể bắt đầu: 起来 / V起O来 / 上了 / 开了. Thể tiếp tục: 下去, không mang tân ngữ.'
  ],
  zh: ['这个问题早就解决了。', '这个项目还得做下去。', '电影马上就开演了。', '这本书我好像在哪儿见过。', '机器还在正常运转。', '春天到了，天气也暖和起来了。', '我从来没有去过那里。', '我们正坐着聊天儿，突然门开了。'],
  notes: [['开演', 'kāiyǎn', 'bắt đầu diễn'], ['现场', 'xiànchǎng', 'hiện trường'], ['运转', 'yùnzhuǎn', 'vận hành'], ['画报', 'huàbào', 'họa báo'], ['亲眼', 'qīnyǎn', 'tận mắt'], ['陌生人', 'mòshēngrén', 'người lạ'], ['导游', 'dǎoyóu', 'hướng dẫn viên'], ['游览', 'yóulǎn', 'du lãm'], ['下功夫', 'xià gōngfu', 'bỏ công sức'], ['大佛', 'dàfó', 'tượng Phật lớn'], ['水灾', 'shuǐzāi', 'lũ lụt']],
  ex: [
    { t: 'mc', q: '【Sách · 思考与练习 七】Câu biểu đạt thể nào?', items: [
      ['这个问题早就解决了。', ['hoàn thành', 'tương lai', 'từng trải', 'tiếp diễn', 'bắt đầu', 'tiếp tục'], 0],
      ['这个项目还得做下去。', ['hoàn thành', 'tương lai', 'từng trải', 'tiếp diễn', 'bắt đầu', 'tiếp tục'], 5],
      ['电影马上就开演了。', ['hoàn thành', 'tương lai', 'từng trải', 'tiếp diễn', 'bắt đầu', 'tiếp tục'], 1],
      ['详细情况我已经知道了。', ['hoàn thành', 'tương lai', 'từng trải', 'tiếp diễn', 'bắt đầu', 'tiếp tục'], 0],
      ['这本书我好像在哪儿见过。', ['hoàn thành', 'tương lai', 'từng trải', 'tiếp diễn', 'bắt đầu', 'tiếp tục'], 2],
      ['他最先赶到现场。', ['hoàn thành', 'tương lai', 'từng trải', 'tiếp diễn', 'bắt đầu', 'tiếp tục'], 0],
      ['机器还在正常运转。', ['hoàn thành', 'tương lai', 'từng trải', 'tiếp diễn', 'bắt đầu', 'tiếp tục'], 3],
      ['敌人被全部消灭。', ['hoàn thành', 'tương lai', 'từng trải', 'tiếp diễn', 'bắt đầu', 'tiếp tục'], 0],
      ['孩子们正高兴地玩着。', ['hoàn thành', 'tương lai', 'từng trải', 'tiếp diễn', 'bắt đầu', 'tiếp tục'], 3],
      ['天气慢慢暖和起来了。', ['hoàn thành', 'tương lai', 'từng trải', 'tiếp diễn', 'bắt đầu', 'tiếp tục'], 4]
    ] },
    { t: 'place', q: '【Sách · 思考与练习 九】Điền dấu hiệu thể thích hợp (了/着/过/起来/下去).', o: ['过', '了', '下去', '着', '起来'], a: [0, 1, 1, 2, 3, 1, 1, 0, 1, 3, 1, 4, 1, 2], text: '1. 以前我只是在画报上看到{0}长城，今天终于亲眼看到{1}。 2. 你怎么突然停下来{2}？接着唱{3}啊。 3. 我们正坐{4}聊天儿，突然门开{5}，一个陌生人走{6}进来。 4. 我从来没有去{7}那里。我想到{8}那儿，先找一个当地的导游，带{9}我去游览。 5. 春天到{10}，天气也暖和{11}了。 6. 虽然你们下{12}很大的功夫，但问题还没有查清楚，所以还得查{13}。' },
    { t: 'open', q: '【Sách · 思考与练习 十一】Sửa câu sai (theo đáp án sách).', items: [
      ['我晚上就到了那儿，明天先参观了大佛，又买了些东西。', '我晚上就到了那儿，第二天，先参观了大佛，又买了些东西。'],
      ['我去的时候，看见大门正在开着。', '我去的时候，看见大门正开着。'],
      ['以前我有的时候看过这个电影。', '以前我看过这个电影。'],
      ['这里过去从来没发生这样的事情。', '这里过去从来没发生过这样的事情。'],
      ['我明天一下课了就去找你。', '我明天一下了课就去找你。'],
      ['昨天晚上我们讨论一下儿了这个问题。', '昨天晚上我们讨论了一下儿这个问题。'],
      ['我们去了工厂以前已经了解了一点儿工厂的情况。', '我们去工厂以前已经了解了一点儿工厂的情况。'],
      ['我听说了他毕业以后就到上海去了。', '我听说他毕业以后就到上海去了。'],
      ['以前我吃了烤鸭，我还想吃一次。', '以前我吃过烤鸭，我还想吃一次。'],
      ['以前，黄河经常发生了大水灾。', '以前，黄河经常发生大水灾。'],
      ['我前天晚上看一个特别有意思的电影。', '我前天晚上看了一个特别有意思的电影。'],
      ['他过来坐了在我的旁边。', '他过来坐在了我的旁边。'],
      ['办完事以后，我还去了看我的一个朋友。', '办完事以后，我还去看了我的一个朋友。'],
      ['我在那里游泳过一次。', '我在那里游过一次泳。'],
      ['我到过别的大学继续学习中文。', '我到别的大学继续学习过中文。'],
      ['广州来的火车正到着站。', '广州来的火车就要到站了。'],
      ['他们都站着主楼前边。', '他们都站在主楼前边。'],
      ['他拉自己的儿子上楼了。', '他拉着自己的儿子上楼了。'],
      ['房子里的电话响着很长时间，他居然没醒。', '房子里的电话响了很长时间，他居然没醒。'],
      ['他们谈着半个小时了。', '他们谈了半个小时了。']
    ] },
    { t: 'tf', q: '【Trung bình】Tổng hợp: câu nào đúng?', items: [['我从来没有去过那里。', true], ['我从来没有去了那里。', false], ['他拉着自己的儿子上楼了。', true], ['火车快要到站了。', true], ['火车明天快要到站了。', false], ['他们谈了半个小时了。', true], ['他们都站在主楼前边。', true], ['以前我吃了烤鸭，我还想吃一次。', false]] },
    { t: 'open', q: '【Nâng cao】Viết đoạn văn 5–6 câu kể một chuyến đi trong quá khứ, dùng đủ: 是……的, 第二天, V了, V过, V着, V起来.', items: [['Đoạn văn của em', '我是去年八月去西安的。到西安的当天，我就去看了钟楼。第二天，我们参观了兵马俑。我以前在书上看过兵马俑的照片，可是亲眼看到的时候，我还是激动起来了。导游一边走，一边给我们讲着历史故事。']] }
  ],
  adv: {
    g: [['V了 + thời lượng + 了', 'đã… được (vẫn còn tiếp)', '我学了两年汉语了。'], ['一 + V了……就……', 'vừa… liền…', '我一下了课就去找你。'], ['正 + V着 + 呢', 'đang…', '他们正开着会呢。']],
    v: [['兵马俑', 'bīngmǎyǒng', 'tượng binh mã'], ['钟楼', 'zhōnglóu', 'tháp chuông'], ['激动', 'jīdòng', 'xúc động'], ['历史', 'lìshǐ', 'lịch sử'], ['当地', 'dāngdì', 'địa phương']]
  } }
] }
] });
