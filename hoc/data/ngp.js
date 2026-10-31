/* Môn Giáo trình ngữ pháp Hán ngữ hiện đại — 汉语语法教程 (孙德金), bản dịch Lê Thanh Hà. Chương I–III.
   Phần lý thuyết tóm tắt theo sách; bài tập 【Sách · 思考与练习】 lấy từ sách, các bài khác và đáp án do Claude soạn, chỉ để tham khảo. */
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
      ['为了表达复数等语法意义，汉语常常改变词的形式。', false],
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
] }
] });
