/* Môn Giáo trình ngữ pháp Hán ngữ hiện đại — 汉语语法教程 (孙德金), bản dịch Lê Thanh Hà.
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
    { t: 'fill', q: '【Nâng cao】Điền đại từ nghi vấn để tạo câu hư chỉ.', items: [['他很勇敢，___有危险就冲到哪儿。', '哪儿|哪里'], ['你想吃什么就点___。', '什么'], ['___先到，___就先买票。', '谁']] },
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
    { t: 'tf', q: '【Sách · 思考与练习 四】Theo chức năng ngữ pháp, từ nào là phó từ?', items: [['大力', true], ['迅速', false], ['偏偏', true], ['抓紧', false], ['究竟', true], ['突然', false], ['紧张', false], ['毕竟', true], ['赶快', true], ['连忙', true], ['完毕', false], ['飞快', false], ['偶尔', true], ['忽然', true], ['偶然', false], ['尽量', true]] },
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
    { t: 'mc', q: '【Sách · 思考与练习 三】Là từ (词) hay từ tổ (词组)?', items: [['走出去', ['词', '词组'], 1], ['公共汽车', ['词', '词组'], 0], ['照相', ['词', '词组'], 0], ['有线电视', ['词', '词组'], 0], ['看完', ['词', '词组'], 1], ['照相机', ['词', '词组'], 0], ['奉献精神', ['词', '词组'], 1], ['看见', ['词', '词组'], 0], ['睡觉', ['词', '词组'], 0], ['看不起', ['词', '词组'], 0]] },
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
    { t: 'tf', q: '【Sách · 思考与练习 十】Từ tổ nào có đa nghĩa (歧义)?', items: [['解决问题的方法', false], ['欣赏文章的技巧', true], ['两位老师的风格', true], ['两个孩子的父亲', true], ['三个商店的职工', true], ['研究方法', true], ['研究问题', false], ['学习技巧', true], ['学习技术', false]] },
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
] }
] });
