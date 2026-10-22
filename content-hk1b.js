/* HK1 phần 2: Hán ngữ giáo trình Q1 bài 9–15, phòng 3D cho từng bài,
   và bài Khán đồ thuyết thoại (看图说话 上册) gắn vào các bài phù hợp. */
(function (C) {
  var hk1 = C.semesters[0];
  Object.assign(C.characters, {
    clerk:     { name: 'Cô giao dịch', zh: '营业员', face: '👩‍💼' },
    staff:     { name: 'Chú văn phòng', zh: '职员', face: '🧑‍💼' },
    secretary: { name: 'Cô thư ký', zh: '秘书', face: '👩‍💻' },
    principal: { name: 'Hiệu trưởng Mã', zh: '马校长', face: '👴' },
    prof:      { name: 'Giáo sư Vương', zh: '王教授', face: '🧑‍🔬' },
    edward:    { name: 'Anh Edward', zh: '爱德华', face: '🧔' },
    roland:    { name: 'Chị Roland', zh: '罗兰', face: '👱‍♀️' },
    lee:       { name: 'Anh Lee', zh: '李昌浩', face: '🧑' },
    tianfang:  { name: 'Điền Phương', zh: '田芳', face: '👧' },
    zhangdong: { name: 'Trương Đông', zh: '张东', face: '👦' },
    lin:       { name: 'Cô Lâm', zh: '林老师', face: '👩‍🏫' },
    manager:   { name: 'Chú Quan (giám đốc)', zh: '关经理', face: '👔' },
    officer:   { name: 'Chú hải quan', zh: '海关', face: '👮' }
  });

  /* phòng 3D + nhân vật có mặt cho bài 1–8 */
  var rooms = { 'hk1-l1': ['bedroom', ['mom']], 'hk1-l2': ['kitchen', ['dad', 'gege', 'meimei', 'mom']], 'hk1-l3': ['street', ['auntie', 'mom']],
    'hk1-l4': ['gate', ['mike', 'mali']], 'hk1-l5': ['living', ['teacher', 'dad', 'mom']], 'hk1-l6': ['classroom', ['mike', 'mali', 'teacher']],
    'hk1-l7': ['canteen', ['mike', 'cook']], 'hk1-l8': ['market', ['seller', 'mom']] };
  hk1.lessons.forEach(function (l) { if (rooms[l.id]) { l.room = rooms[l.id][0]; l.cast = rooms[l.id][1]; } });

  hk1.lessons.push(
    {
      id: 'hk1-l9', no: 9, day: 'Ngày 9', time: '15:00', scene: 'living', room: 'bank', cast: ['clerk', 'dad', 'mali'],
      vi: 'Cùng bố ra ngân hàng đổi tiền', zh: '我换人民币', py: 'Wǒ huàn rénmínbì',
      vocab: [
        ['下午', 'xiàwǔ', 'buổi chiều', '🌇'], ['上午', 'shàngwǔ', 'buổi sáng', '🌤️'], ['图书馆', 'túshūguǎn', 'thư viện', '🏛️'],
        ['要', 'yào', 'muốn, cần (năng nguyện)', '🙋'], ['换', 'huàn', 'đổi', '🔁'], ['小姐', 'xiǎojiě', 'cô (gọi phụ nữ trẻ)', '👩‍💼'],
        ['营业员', 'yíngyèyuán', 'nhân viên giao dịch', '🧾'], ['人民币', 'rénmínbì', 'nhân dân tệ', '💴'], ['百', 'bǎi', 'trăm', '💯'],
        ['千', 'qiān', 'nghìn', '🔟'], ['万', 'wàn', 'vạn (10 000)', '🏔️'], ['美元', 'měiyuán', 'đô la Mỹ', '💵'],
        ['等', 'děng', 'đợi', '⏳'], ['一会儿', 'yíhuìr', 'một lát', '⏱️'], ['先生', 'xiānsheng', 'ông, ngài', '🤵'], ['数', 'shǔ', 'đếm', '🧮']
      ],
      story: [
        { c: 'mali', zh: '下午我去图书馆，你去不去？', py: 'Xiàwǔ wǒ qù túshūguǎn, nǐ qù bu qù?', vi: 'Chiều nay mình đi thư viện, bạn có đi không?' },
        { me: 'Không đi, mình phải đi ngân hàng đổi tiền', opts: [['我不去。我要去银行换钱。', 'Wǒ bú qù. Wǒ yào qù yínháng huàn qián.', 'Mình không đi. Mình phải đi ngân hàng đổi tiền.'], ['我去图书馆。', 'Wǒ qù túshūguǎn.', 'Mình đi thư viện.'], ['我要去邮局寄信。', 'Wǒ yào qù yóujú jì xìn.', 'Mình đi bưu điện gửi thư.']] },
        { c: 'panda', vi: 'Ở ngân hàng Trung Quốc. Bố để em tự nói với cô giao dịch.' },
        { me: 'Gọi cô giao dịch: "Cô ơi, cháu đổi tiền"', opts: [['小姐，我换钱。', 'Xiǎojiě, wǒ huàn qián.', 'Cô ơi, cháu đổi tiền.'], ['先生，我换钱。', 'Xiānsheng, wǒ huàn qián.', '(sai cách gọi)'], ['小姐，我取钱。', 'Xiǎojiě, wǒ qǔ qián.', 'Cô ơi, cháu rút tiền.']] },
        { c: 'clerk', zh: '您换什么钱？', py: 'Nín huàn shénme qián?', vi: 'Quý khách đổi tiền gì?' },
        { me: 'Đổi nhân dân tệ', opts: [['我换人民币。', 'Wǒ huàn rénmínbì.', 'Cháu đổi nhân dân tệ.'], ['我换美元。', 'Wǒ huàn měiyuán.', 'Cháu đổi đô la.'], ['我要人民。', 'Wǒ yào rénmín.', '(thiếu chữ)']] },
        { c: 'clerk', zh: '换多少？', py: 'Huàn duōshao?', vi: 'Đổi bao nhiêu?' },
        { me: 'Hai trăm đô la Mỹ', opts: [['二百美元。', 'Èrbǎi měiyuán.', 'Hai trăm đô la Mỹ.'], ['两千美元。', 'Liǎngqiān měiyuán.', 'Hai nghìn đô la Mỹ.'], ['二十美元。', 'Èrshí měiyuán.', 'Hai mươi đô la Mỹ.']] },
        { c: 'clerk', zh: '请等一会儿……先生，给您钱。请数数。', py: 'Qǐng děng yíhuìr…… Xiānsheng, gěi nín qián. Qǐng shǔshu.', vi: 'Xin đợi một lát… Thưa ông, gửi ông tiền. Xin ông đếm lại.' },
        { me: 'Đúng rồi ạ. Cảm ơn cô!', opts: [['对了。谢谢！', 'Duì le. Xièxie!', 'Đúng rồi ạ. Cảm ơn cô!'], ['不客气！', 'Bú kèqi!', 'Không có gì!'], ['请数数。', 'Qǐng shǔshu.', 'Xin đếm lại.']] },
        { c: 'clerk', zh: '不客气！', py: 'Bú kèqi!', vi: 'Không có gì!' }
      ],
      grammar: [
        { t: '先生 / 小姐', d: '先生 dùng gọi đàn ông, 小姐 gọi phụ nữ trẻ. Có thể ghép họ phía trước: 王小姐, 张先生.', ex: [['王小姐', 'Wáng xiǎojiě', 'cô Vương'], ['张先生', 'Zhāng xiānsheng', 'ông Trương']] },
        { t: '要 + động từ', d: '要 đứng trước động từ, nghĩa là "muốn, phải, sẽ" làm gì.', ex: [['我要去银行换钱。', 'Wǒ yào qù yínháng huàn qián.', 'Tôi phải đi ngân hàng đổi tiền.']] },
        { t: '请等一会儿', d: 'Câu lịch sự: "Xin đợi một lát".', ex: [['请等一会儿。', 'Qǐng děng yíhuìr.', 'Xin đợi một lát.']] },
        { t: 'Ba thanh 3 liền nhau', d: 'Thường hai chữ đầu đọc thành thanh 2, chữ cuối giữ thanh 3.', ex: [['我很好', 'wǒ hěn hǎo → wó hén hǎo', 'tôi rất khỏe']] },
        { t: 'Số lớn', d: '百 trăm, 千 nghìn, 万 vạn (mười nghìn). 二百 = 200, 一千 = 1 000, 一万 = 10 000.', ex: [['二百美元', 'èrbǎi měiyuán', '200 đô la Mỹ']] }
      ],
      order: [[['我', '要', '去', '银行', '换', '钱'], 'Tôi phải đi ngân hàng đổi tiền.'], [['您', '换', '什么', '钱'], 'Quý khách đổi tiền gì?'], [['请', '等', '一会儿'], 'Xin đợi một lát.'], [['下午', '我', '去', '图书馆'], 'Buổi chiều tôi đi thư viện.']]
    },
    {
      id: 'hk1-l10', no: 10, day: 'Ngày 10', time: '10:00', scene: 'classroom', room: 'office', cast: ['staff'],
      vi: 'Đi tìm thầy ở văn phòng', zh: '他住哪儿', py: 'Tā zhù nǎr',
      vocab: [
        ['办公室', 'bàngōngshì', 'văn phòng', '🏢'], ['职员', 'zhíyuán', 'nhân viên', '🧑‍💼'], ['找', 'zhǎo', 'tìm', '🔍'],
        ['在', 'zài', 'ở, có mặt', '📍'], ['家', 'jiā', 'nhà', '🏠'], ['呢', 'ne', '(trợ từ khẳng định)', '💬'],
        ['住', 'zhù', 'ở, sống', '🛏️'], ['楼', 'lóu', 'tòa nhà', '🏬'], ['门', 'mén', 'cửa, cổng', '🚪'],
        ['房间', 'fángjiān', 'phòng', '🛋️'], ['号', 'hào', 'số', '🔢'], ['知道', 'zhīdào', 'biết', '💡'],
        ['电话', 'diànhuà', 'điện thoại', '☎️'], ['号码', 'hàomǎ', 'số (điện thoại)', '#️⃣'], ['零', 'líng', 'số 0', '0️⃣'],
        ['手机', 'shǒujī', 'điện thoại di động', '📱'], ['学生', 'xuésheng', 'học sinh', '🧑‍🎓']
      ],
      story: [
        { c: 'panda', vi: 'Em cần gửi thầy Vương bài vẽ. Em đến văn phòng nhà trường.' },
        { me: 'Xin hỏi, đây là văn phòng ạ?', opts: [['请问，这是办公室吗？', 'Qǐngwèn, zhè shì bàngōngshì ma?', 'Xin hỏi, đây là văn phòng ạ?'], ['请问，你是谁？', 'Qǐngwèn, nǐ shì shéi?', 'Xin hỏi, chú là ai?'], ['这是办公室。', 'Zhè shì bàngōngshì.', 'Đây là văn phòng.']] },
        { c: 'staff', zh: '是。你找谁？', py: 'Shì. Nǐ zhǎo shéi?', vi: 'Đúng. Cháu tìm ai?' },
        { me: 'Thầy Vương có ở đây không? Cháu là học sinh của thầy', opts: [['王老师在吗？我是他的学生。', 'Wáng lǎoshī zài ma? Wǒ shì tā de xuésheng.', 'Thầy Vương có ở đây không ạ? Cháu là học sinh của thầy.'], ['王老师住哪儿？', 'Wáng lǎoshī zhù nǎr?', 'Thầy Vương ở đâu?'], ['我是王老师。', 'Wǒ shì Wáng lǎoshī.', 'Cháu là thầy Vương.']] },
        { c: 'staff', zh: '他不在。他在家呢。', py: 'Tā bú zài. Tā zài jiā ne.', vi: 'Thầy không có ở đây. Thầy ở nhà.' },
        { me: 'Thầy ở đâu ạ?', opts: [['他住哪儿？', 'Tā zhù nǎr?', 'Thầy sống ở đâu ạ?'], ['他在吗？', 'Tā zài ma?', 'Thầy có ở đây không?'], ['他住几楼？', 'Tā zhù jǐ lóu?', 'Thầy ở tòa mấy?']] },
        { c: 'staff', zh: '他住十八楼一门，房间号是601。', py: 'Tā zhù shíbā lóu yī mén, fángjiān hào shì liù líng yāo.', vi: 'Thầy ở tòa 18, cửa 1, số phòng 601.' },
        { me: 'Chú có biết số điện thoại của thầy không?', opts: [['您知道他的电话号码吗？', 'Nín zhīdào tā de diànhuà hàomǎ ma?', 'Chú có biết số điện thoại của thầy không ạ?'], ['您知道他的房间吗？', 'Nín zhīdào tā de fángjiān ma?', 'Chú có biết phòng thầy không?'], ['您的手机号码是多少？', 'Nín de shǒujī hàomǎ shì duōshao?', 'Số di động của chú là bao nhiêu?']] },
        { c: 'staff', zh: '知道，62931074。', py: 'Zhīdào, liù èr jiǔ sān yāo líng qī sì.', vi: 'Biết, 62931074.' },
        { me: 'Số di động của thầy là bao nhiêu?', opts: [['他的手机号码是多少？', 'Tā de shǒujī hàomǎ shì duōshao?', 'Số di động của thầy là bao nhiêu ạ?'], ['他的手机是什么？', 'Tā de shǒujī shì shénme?', 'Điện thoại của thầy là cái gì?'], ['他住几号？', 'Tā zhù jǐ hào?', 'Thầy ở số mấy?']] },
        { c: 'staff', zh: '不知道。', py: 'Bù zhīdào.', vi: 'Chú không biết.' },
        { me: 'Cảm ơn chú', opts: [['谢谢您。', 'Xièxie nín.', 'Cháu cảm ơn chú.'], ['不客气。', 'Bú kèqi.', 'Không có gì.'], ['没关系。', 'Méi guānxi.', 'Không sao.']] },
        { c: 'staff', zh: '不客气。', py: 'Bú kèqi.', vi: 'Không có gì.' }
      ],
      grammar: [
        { t: '在 làm động từ', d: '在 = "có mặt, ở". 王老师在吗？ hỏi người có ở đó không. 他在家 = thầy ở nhà.', ex: [['王老师在吗？', 'Wáng lǎoshī zài ma?', 'Thầy Vương có ở đây không?'], ['他不在。', 'Tā bú zài.', 'Thầy không có ở đây.']] },
        { t: '呢 cuối câu kể', d: 'Thêm 呢 để khẳng định một sự thật, giọng nhẹ nhàng.', ex: [['他在家呢。', 'Tā zài jiā ne.', 'Thầy đang ở nhà đấy.']] },
        { t: 'Đọc số điện thoại, số phòng', d: 'Đọc từng chữ số. Số 1 thường đọc là yāo để khỏi nhầm với 7.', ex: [['601', 'liù líng yāo', 'phòng 601'], ['62931074', 'liù èr jiǔ sān yāo líng qī sì', 'số điện thoại']] },
        { t: '请问，……？', d: 'Mở đầu khi hỏi người lạ: "Xin hỏi…".', ex: [['请问，这是办公室吗？', 'Qǐngwèn, zhè shì bàngōngshì ma?', 'Xin hỏi, đây là văn phòng phải không?']] }
      ],
      order: [[['你', '找', '谁'], 'Cháu tìm ai?'], [['王老师', '在', '吗'], 'Thầy Vương có ở đây không?'], [['他', '在', '家', '呢'], 'Thầy ở nhà đấy.'], [['您', '知道', '他', '的', '电话', '号码', '吗'], 'Chú có biết số điện thoại của thầy không?']]
    },
    {
      id: 'hk1-l11', no: 11, day: 'Ngày 11', time: '08:00', scene: 'classroom', room: 'hall', cast: ['secretary', 'principal', 'prof', 'edward', 'roland', 'lee'],
      vi: 'Khách quý và lưu học sinh đến trường', zh: '我们都是留学生', py: 'Wǒmen dōu shì liúxuéshēng',
      vocab: [
        ['秘书', 'mìshū', 'thư ký', '📋'], ['先', 'xiān', 'trước', '1️⃣'], ['介绍', 'jièshào', 'giới thiệu', '🎤'],
        ['一下儿', 'yíxiàr', 'một chút, thử', '☝️'], ['位', 'wèi', 'vị (lượng từ kính trọng)', '🎩'], ['教授', 'jiàoshòu', 'giáo sư', '🧑‍🔬'],
        ['校长', 'xiàozhǎng', 'hiệu trưởng', '🏫'], ['欢迎', 'huānyíng', 'hoan nghênh, chào mừng', '🎉'], ['留学生', 'liúxuéshēng', 'lưu học sinh', '✈️'],
        ['也', 'yě', 'cũng', '➕'], ['我们', 'wǒmen', 'chúng tôi', '🫂'], ['你们', 'nǐmen', 'các bạn', '👥'],
        ['他们', 'tāmen', 'họ', '🧑‍🤝‍🧑'], ['都', 'dōu', 'đều', '💯'], ['和', 'hé', 'và', '🔗'],
        ['俩', 'liǎ', 'hai (người)', '✌️'], ['学生', 'xuésheng', 'học sinh', '🧑‍🎓'], ['没什么', 'méi shénme', 'không sao', '👌'], ['韩国', 'Hánguó', 'Hàn Quốc', '🇰🇷']
      ],
      story: [
        { c: 'panda', vi: 'Sáng thứ hai, trường đón khách. Cô thư ký giới thiệu giáo sư Vương với thầy hiệu trưởng.' },
        { c: 'secretary', zh: '我先介绍一下儿，这位是王教授。这是马校长。', py: 'Wǒ xiān jièshào yíxiàr, zhè wèi shì Wáng jiàoshòu. Zhè shì Mǎ xiàozhǎng.', vi: 'Tôi xin giới thiệu trước, vị này là giáo sư Vương. Đây là hiệu trưởng Mã.' },
        { c: 'principal', zh: '欢迎您，王教授。', py: 'Huānyíng nín, Wáng jiàoshòu.', vi: 'Hoan nghênh ngài, giáo sư Vương.' },
        { c: 'prof', zh: '谢谢！', py: 'Xièxie!', vi: 'Cảm ơn!' },
        { c: 'panda', vi: 'Giáo sư dẫn theo mấy anh chị lưu học sinh. Em làm quen với anh Edward nhé.' },
        { me: 'Hỏi: Anh là lưu học sinh ạ?', opts: [['你是留学生吗？', 'Nǐ shì liúxuéshēng ma?', 'Anh là lưu học sinh ạ?'], ['你是校长吗？', 'Nǐ shì xiàozhǎng ma?', 'Anh là hiệu trưởng ạ?'], ['你们都是谁？', 'Nǐmen dōu shì shéi?', 'Các anh là ai?']] },
        { c: 'edward', zh: '是。', py: 'Shì.', vi: 'Đúng vậy.' },
        { me: 'Chị Roland cũng là lưu học sinh ạ?', opts: [['罗兰也是留学生吗？', 'Luólán yě shì liúxuéshēng ma?', 'Chị Roland cũng là lưu học sinh ạ?'], ['罗兰都是留学生吗？', 'Luólán dōu shì liúxuéshēng ma?', '(dùng sai 都)'], ['罗兰是留学生也吗？', 'Luólán shì liúxuéshēng yě ma?', '(sai vị trí 也)']] },
        { c: 'edward', zh: '她也是留学生。我们都是留学生。', py: 'Tā yě shì liúxuéshēng. Wǒmen dōu shì liúxuéshēng.', vi: 'Chị ấy cũng là lưu học sinh. Bọn anh đều là lưu học sinh.' },
        { me: 'Trương Đông và Điền Phương cũng đều là lưu học sinh ạ?', opts: [['张东和田芳也都是留学生吗？', 'Zhāng Dōng hé Tián Fāng yě dōu shì liúxuéshēng ma?', 'Trương Đông và Điền Phương cũng đều là lưu học sinh ạ?'], ['张东和田芳都也是留学生吗？', 'Zhāng Dōng hé Tián Fāng dōu yě shì liúxuéshēng ma?', '(sai thứ tự 也都)'], ['张东也田芳是留学生吗？', 'Zhāng Dōng yě Tián Fāng shì liúxuéshēng ma?', '(sai)']] },
        { c: 'edward', zh: '不，他们俩不是留学生。他们都是中国学生。', py: 'Bù, tāmen liǎ bú shì liúxuéshēng. Tāmen dōu shì Zhōngguó xuésheng.', vi: 'Không, hai bạn ấy không phải lưu học sinh. Họ đều là học sinh Trung Quốc.' },
        { me: 'Hỏi anh Lee: Anh cũng là người Trung Quốc ạ?', opts: [['你也是中国人吗？', 'Nǐ yě shì Zhōngguó rén ma?', 'Anh cũng là người Trung Quốc ạ?'], ['你都是中国人吗？', 'Nǐ dōu shì Zhōngguó rén ma?', '(dùng sai 都)'], ['你是哪儿人？', 'Nǐ shì nǎr rén?', 'Anh là người ở đâu?']] },
        { c: 'lee', zh: '不是。我是韩国人。', py: 'Bú shì. Wǒ shì Hánguó rén.', vi: 'Không phải. Anh là người Hàn Quốc.' },
        { me: 'Xin lỗi anh', opts: [['对不起。', 'Duìbuqǐ.', 'Em xin lỗi.'], ['没什么。', 'Méi shénme.', 'Không sao.'], ['欢迎。', 'Huānyíng.', 'Hoan nghênh.']] },
        { c: 'lee', zh: '没什么。', py: 'Méi shénme.', vi: 'Không sao đâu.' }
      ],
      grammar: [
        { t: '也 và 都', d: 'Hai phó từ này đứng TRƯỚC động từ. Có cả hai thì viết 也都 (không viết 都也).', ex: [['她也是留学生。', 'Tā yě shì liúxuéshēng.', 'Chị ấy cũng là lưu học sinh.'], ['我们都是留学生。', 'Wǒmen dōu shì liúxuéshēng.', 'Chúng tôi đều là lưu học sinh.'], ['他们也都是学生。', 'Tāmen yě dōu shì xuésheng.', 'Họ cũng đều là học sinh.']] },
        { t: 'Động từ + 一下儿', d: 'Làm nhẹ đi hành động, nghĩa "một chút, thử".', ex: [['我介绍一下儿。', 'Wǒ jièshào yíxiàr.', 'Tôi xin giới thiệu một chút.']] },
        { t: '位: lượng từ kính trọng', d: 'Dùng cho người, lịch sự hơn 个.', ex: [['这位是王教授。', 'Zhè wèi shì Wáng jiàoshòu.', 'Vị này là giáo sư Vương.']] },
        { t: '们: số nhiều của người', d: '我们 chúng tôi, 你们 các bạn, 他们 họ. 俩 = hai người.', ex: [['他们俩', 'tāmen liǎ', 'hai người họ']] }
      ],
      order: [[['我们', '都', '是', '留学生'], 'Chúng tôi đều là lưu học sinh.'], [['她', '也', '是', '留学生'], 'Chị ấy cũng là lưu học sinh.'], [['我', '先', '介绍', '一下儿'], 'Tôi xin giới thiệu trước.'], [['他们', '也', '都', '是', '学生'], 'Họ cũng đều là học sinh.']]
    },
    {
      id: 'hk1-l12', no: 12, day: 'Ngày 12', time: '14:00', scene: 'classroom', room: 'library', cast: ['edward', 'lin', 'tianfang'],
      vi: 'Thư viện: học ở đâu, thấy thế nào', zh: '你在哪儿学习', py: 'Nǐ zài nǎr xuéxí',
      vocab: [
        ['语言', 'yǔyán', 'ngôn ngữ', '🗣️'], ['大学', 'dàxué', 'đại học', '🎓'], ['怎么样', 'zěnmeyàng', 'thế nào', '🤔'],
        ['觉得', 'juéde', 'cảm thấy, thấy', '💭'], ['语法', 'yǔfǎ', 'ngữ pháp', '📐'], ['听', 'tīng', 'nghe', '👂'],
        ['说', 'shuō', 'nói', '🗨️'], ['比较', 'bǐjiào', 'tương đối, khá', '⚖️'], ['容易', 'róngyì', 'dễ', '😌'],
        ['读', 'dú', 'đọc', '📖'], ['写', 'xiě', 'viết', '✍️'], ['但是', 'dànshì', 'nhưng', '↔️'],
        ['给', 'gěi', 'cho, với', '🎁'], ['新', 'xīn', 'mới', '✨'], ['同学', 'tóngxué', 'bạn học', '🧒'], ['班', 'bān', 'lớp', '🏷️']
      ],
      story: [
        { c: 'panda', vi: 'Buổi chiều em vào thư viện, gặp lại anh Edward đang đọc sách.' },
        { me: 'Anh học tiếng Hán ở đâu ạ?', opts: [['你在哪儿学习汉语？', 'Nǐ zài nǎr xuéxí Hànyǔ?', 'Anh học tiếng Hán ở đâu ạ?'], ['你学习汉语在哪儿？', 'Nǐ xuéxí Hànyǔ zài nǎr?', '(sai trật tự)'], ['你去哪儿学习？', 'Nǐ qù nǎr xuéxí?', 'Anh đi đâu học?']] },
        { c: 'edward', zh: '在北京语言大学。', py: 'Zài Běijīng Yǔyán Dàxué.', vi: 'Ở Đại học Ngôn ngữ Bắc Kinh.' },
        { me: 'Thầy cô của các anh thế nào?', opts: [['你们的老师怎么样？', 'Nǐmen de lǎoshī zěnmeyàng?', 'Thầy cô của các anh thế nào ạ?'], ['你们的老师是谁？', 'Nǐmen de lǎoshī shì shéi?', 'Thầy cô của các anh là ai?'], ['老师怎么样你们？', 'Lǎoshī zěnmeyàng nǐmen?', '(sai)']] },
        { c: 'edward', zh: '很好！', py: 'Hěn hǎo!', vi: 'Rất tốt!' },
        { me: 'Anh thấy học tiếng Hán có khó không?', opts: [['你觉得学习汉语难吗？', 'Nǐ juéde xuéxí Hànyǔ nán ma?', 'Anh thấy học tiếng Hán có khó không?'], ['你觉得汉语怎么样吗？', 'Nǐ juéde Hànyǔ zěnmeyàng ma?', '(thừa 吗)'], ['汉语很难。', 'Hànyǔ hěn nán.', 'Tiếng Hán rất khó.']] },
        { c: 'edward', zh: '我觉得语法不太难。听和说也比较容易，但是读和写很难。', py: 'Wǒ juéde yǔfǎ bú tài nán. Tīng hé shuō yě bǐjiào róngyì, dànshì dú hé xiě hěn nán.', vi: 'Anh thấy ngữ pháp không khó lắm. Nghe và nói cũng khá dễ, nhưng đọc và viết rất khó.' },
        { c: 'lin', zh: '我给你们介绍一下儿，这位是新同学。', py: 'Wǒ gěi nǐmen jièshào yíxiàr, zhè wèi shì xīn tóngxué.', vi: 'Cô giới thiệu với các em, đây là bạn học mới.' },
        { me: 'Hỏi bạn mới: Bạn học ở lớp nào?', opts: [['你在哪个班学习？', 'Nǐ zài nǎ ge bān xuéxí?', 'Bạn học ở lớp nào?'], ['你是哪个班？', 'Nǐ shì nǎ ge bān?', '(chưa đủ ý)'], ['你在哪儿学习汉语？', 'Nǐ zài nǎr xuéxí Hànyǔ?', 'Bạn học tiếng Hán ở đâu?']] },
        { c: 'tianfang', zh: '在103班。', py: 'Zài yāo líng sān bān.', vi: 'Ở lớp 103.' },
        { me: 'Cô giáo của các bạn là ai?', opts: [['你们的老师是谁？', 'Nǐmen de lǎoshī shì shéi?', 'Cô giáo của các bạn là ai?'], ['你们的老师怎么样？', 'Nǐmen de lǎoshī zěnmeyàng?', 'Cô giáo của các bạn thế nào?'], ['谁是你们老师的？', 'Shéi shì nǐmen lǎoshī de?', '(sai)']] },
        { c: 'tianfang', zh: '我们的老师是林老师。', py: 'Wǒmen de lǎoshī shì Lín lǎoshī.', vi: 'Cô giáo của bọn mình là cô Lâm.' }
      ],
      grammar: [
        { t: 'Hỏi bằng đại từ nghi vấn', d: '谁 ai, 什么 gì, 哪/哪儿 nào/đâu, 怎么样 thế nào, 几/多少 mấy/bao nhiêu. Đặt vào chỗ cần hỏi, không thêm 吗.', ex: [['你们的老师怎么样？', 'Nǐmen de lǎoshī zěnmeyàng?', 'Thầy cô các bạn thế nào?']] },
        { t: '在 + nơi chốn + động từ', d: 'Nơi chốn đứng TRƯỚC động từ, ngược với tiếng Việt.', ex: [['你在哪儿学习汉语？', 'Nǐ zài nǎr xuéxí Hànyǔ?', 'Bạn học tiếng Hán ở đâu?']] },
        { t: '觉得 + nhận xét', d: 'Nói cảm nghĩ của mình.', ex: [['我觉得语法不太难。', 'Wǒ juéde yǔfǎ bú tài nán.', 'Tôi thấy ngữ pháp không khó lắm.']] },
        { t: '给 + người + động từ', d: '给 làm giới từ: làm gì cho ai / với ai.', ex: [['我给你们介绍一下儿。', 'Wǒ gěi nǐmen jièshào yíxiàr.', 'Tôi giới thiệu với các bạn.']] },
        { t: '和 nối danh từ, 但是 nối câu', d: '和 chỉ nối từ với từ (听和说). Nối hai vế ngược ý dùng 但是.', ex: [['听和说比较容易，但是读和写很难。', 'Tīng hé shuō bǐjiào róngyì, dànshì dú hé xiě hěn nán.', 'Nghe và nói khá dễ, nhưng đọc và viết rất khó.']] }
      ],
      order: [[['你', '在', '哪儿', '学习', '汉语'], 'Bạn học tiếng Hán ở đâu?'], [['你们', '的', '老师', '怎么样'], 'Thầy cô các bạn thế nào?'], [['我', '觉得', '语法', '不', '太', '难'], 'Tôi thấy ngữ pháp không khó lắm.'], [['你', '在', '哪个', '班', '学习'], 'Bạn học ở lớp nào?']]
    },
    {
      id: 'hk1-l13', no: 13, day: 'Ngày 13', time: '11:00', scene: 'gate', room: 'airport', cast: ['mom', 'dad', 'officer'],
      vi: 'Sân bay: va li và hải quan', zh: '这是不是中药', py: 'Zhè shì bu shì zhōngyào',
      vocab: [
        ['没有', 'méiyǒu', 'không có', '🚫'], ['箱子', 'xiāngzi', 'va li, hòm', '🧳'], ['有', 'yǒu', 'có', '✋'],
        ['这儿', 'zhèr', 'ở đây', '📍'], ['重', 'zhòng', 'nặng', '🏋️'], ['黑', 'hēi', 'đen', '⚫'], ['红', 'hóng', 'đỏ', '🔴'],
        ['轻', 'qīng', 'nhẹ', '🪶'], ['旧', 'jiù', 'cũ', '🏚️'], ['药', 'yào', 'thuốc', '💊'], ['中药', 'zhōngyào', 'thuốc bắc', '🌿'],
        ['茶叶', 'cháyè', 'lá trà', '🍃'], ['里', 'lǐ', 'bên trong', '📦'], ['日用品', 'rìyòngpǐn', 'đồ dùng hằng ngày', '🧴'],
        ['件', 'jiàn', 'chiếc (áo, việc)', '👕'], ['衣服', 'yīfu', 'quần áo', '👚'], ['把', 'bǎ', 'cái (đồ có cán)', '🪓'],
        ['雨伞', 'yǔsǎn', 'cái ô', '🌂'], ['瓶', 'píng', 'chai, lọ', '🍾'], ['香水', 'xiāngshuǐ', 'nước hoa', '🌸'],
        ['本', 'běn', 'quyển', '📗'], ['词典', 'cídiǎn', 'từ điển', '📚'], ['张', 'zhāng', 'tờ, tấm', '📄'], ['笔', 'bǐ', 'bút', '🖊️']
      ],
      story: [
        { c: 'panda', vi: 'Kỳ nghỉ, cả nhà bay sang Bắc Kinh thăm bạn của bố. Mọi người đang lấy hành lý.' },
        { c: 'mom', zh: '你没有箱子吗？', py: 'Nǐ méiyǒu xiāngzi ma?', vi: 'Con không có va li à?' },
        { me: 'Có ạ. Của con ở đây', opts: [['有啊。我的在这儿呢。', 'Yǒu a. Wǒ de zài zhèr ne.', 'Có ạ. Của con ở đây này.'], ['没有。', 'Méiyǒu.', 'Không có.'], ['我的在那儿。', 'Wǒ de zài nàr.', 'Của con ở đằng kia.']] },
        { c: 'mom', zh: '我的很重，你的重不重？', py: 'Wǒ de hěn zhòng, nǐ de zhòng bu zhòng?', vi: 'Của mẹ nặng lắm, của con có nặng không?' },
        { me: 'Cái đen rất nặng, cái đỏ khá nhẹ', opts: [['这个黑的很重，那个红的比较轻。', 'Zhè ge hēi de hěn zhòng, nà ge hóng de bǐjiào qīng.', 'Cái đen này rất nặng, cái đỏ kia khá nhẹ.'], ['这个红的很重，那个黑的比较轻。', 'Zhè ge hóng de hěn zhòng, nà ge hēi de bǐjiào qīng.', '(ngược màu)'], ['我的不重。', 'Wǒ de bú zhòng.', 'Của con không nặng.']] },
        { c: 'mom', zh: '你的箱子很新，我的很旧。', py: 'Nǐ de xiāngzi hěn xīn, wǒ de hěn jiù.', vi: 'Va li của con mới, của mẹ cũ rồi.' },
        { me: 'Cái mới là của bạn. Cái cũ này là của con', opts: [['那个新的是朋友的。这个旧的是我的。', 'Nà ge xīn de shì péngyou de. Zhè ge jiù de shì wǒ de.', 'Cái mới kia là của bạn. Cái cũ này là của con.'], ['那个新的是我的。', 'Nà ge xīn de shì wǒ de.', 'Cái mới kia là của con.'], ['这个旧的是朋友。', 'Zhè ge jiù de shì péngyou.', '(thiếu 的)']] },
        { c: 'panda', vi: 'Đến quầy hải quan. Chú hải quan mở va li của bố.' },
        { c: 'officer', zh: '先生，这些黑的是什么东西？', py: 'Xiānsheng, zhèxiē hēi de shì shénme dōngxi?', vi: 'Thưa ông, những thứ màu đen này là gì?' },
        { c: 'dad', zh: '这是一些药。', py: 'Zhè shì yìxiē yào.', vi: 'Đây là ít thuốc.' },
        { c: 'officer', zh: '什么药？', py: 'Shénme yào?', vi: 'Thuốc gì?' },
        { c: 'dad', zh: '中药。', py: 'Zhōngyào.', vi: 'Thuốc bắc.' },
        { c: 'officer', zh: '这是不是药？', py: 'Zhè shì bu shì yào?', vi: 'Cái này có phải thuốc không?' },
        { me: 'Không phải thuốc, đây là lá trà', opts: [['这不是药，这是茶叶。', 'Zhè bú shì yào, zhè shì cháyè.', 'Cái này không phải thuốc, đây là lá trà ạ.'], ['这是药，不是茶叶。', 'Zhè shì yào, bú shì cháyè.', 'Đây là thuốc, không phải trà.'], ['这没有药。', 'Zhè méiyǒu yào.', 'Ở đây không có thuốc.']] },
        { c: 'officer', zh: '那个箱子里是什么？', py: 'Nà ge xiāngzi li shì shénme?', vi: 'Trong va li kia là gì?' },
        { me: 'Đều là đồ dùng hằng ngày', opts: [['都是日用品。', 'Dōu shì rìyòngpǐn.', 'Đều là đồ dùng hằng ngày ạ.'], ['都是中药。', 'Dōu shì zhōngyào.', 'Đều là thuốc bắc.'], ['也是日用品。', 'Yě shì rìyòngpǐn.', 'Cũng là đồ dùng hằng ngày.']] },
        { c: 'dad', zh: '有两件衣服、一把雨伞和一瓶香水，还有一本书、一本词典、两张光盘和三支笔。', py: 'Yǒu liǎng jiàn yīfu, yì bǎ yǔsǎn hé yì píng xiāngshuǐ, hái yǒu yì běn shū, yì běn cídiǎn, liǎng zhāng guāngpán hé sān zhī bǐ.', vi: 'Có hai chiếc áo, một cái ô và một chai nước hoa, còn có một quyển sách, một quyển từ điển, hai đĩa CD và ba cây bút.' }
      ],
      grammar: [
        { t: '有 / 没有', d: '有 = có; phủ định là 没有 (không dùng 不有).', ex: [['你没有箱子吗？', 'Nǐ méiyǒu xiāngzi ma?', 'Bạn không có va li à?']] },
        { t: 'Cụm chữ 的', d: 'Tính từ/đại từ + 的 thay cho danh từ đã biết: 黑的 = cái màu đen, 我的 = cái của tôi.', ex: [['这个黑的很重。', 'Zhè ge hēi de hěn zhòng.', 'Cái đen này rất nặng.'], ['这个旧的是我的。', 'Zhè ge jiù de shì wǒ de.', 'Cái cũ này là của tôi.']] },
        { t: 'Lượng từ', d: '件 áo/việc · 把 đồ có cán (ô, ghế) · 瓶 chai · 本 quyển · 张 tờ, tấm · 支 cây (bút).', ex: [['两件衣服、一把雨伞、一瓶香水', 'liǎng jiàn yīfu, yì bǎ yǔsǎn, yì píng xiāngshuǐ', 'hai chiếc áo, một cái ô, một chai nước hoa']] },
        { t: 'Câu hỏi 是不是', d: 'Ghép khẳng định và phủ định: 是不是 = có phải… không.', ex: [['这是不是药？', 'Zhè shì bu shì yào?', 'Cái này có phải thuốc không?']] }
      ],
      order: [[['你', '没有', '箱子', '吗'], 'Bạn không có va li à?'], [['我', '的', '在', '这儿', '呢'], 'Của tôi ở đây này.'], [['这', '是', '不', '是', '药'], 'Cái này có phải thuốc không?'], [['那个', '红', '的', '比较', '轻'], 'Cái đỏ kia khá nhẹ.']]
    },
    {
      id: 'hk1-l14', no: 14, day: 'Ngày 14', time: '16:30', scene: 'gate', room: 'bikes', cast: ['teacher', 'manager', 'tianfang'],
      vi: 'Tan học: tìm xe đạp', zh: '你的车是新的还是旧的', py: 'Nǐ de chē shì xīn de háishi jiù de',
      vocab: [
        ['经理', 'jīnglǐ', 'giám đốc', '👔'], ['好久', 'hǎojiǔ', 'lâu lắm', '⌛'], ['啊', 'à', 'à, ồ', '😮'],
        ['马马虎虎', 'mǎmahūhū', 'tàm tạm', '🤷'], ['最近', 'zuìjìn', 'gần đây', '📆'], ['刚', 'gāng', 'vừa mới', '⏱️'],
        ['开学', 'kāi xué', 'khai giảng', '🎒'], ['有点儿', 'yǒudiǎnr', 'hơi, một chút', '🤏'], ['还是', 'háishi', 'hay là', '🔀'],
        ['咖啡', 'kāfēi', 'cà phê', '☕'], ['杯', 'bēi', 'cốc, tách', '🥤'], ['车', 'chē', 'xe', '🚗'],
        ['自行车', 'zìxíngchē', 'xe đạp', '🚲'], ['汽车', 'qìchē', 'ô tô', '🚙'], ['颜色', 'yánsè', 'màu sắc', '🎨'],
        ['蓝', 'lán', 'xanh lam', '🔵'], ['辆', 'liàng', 'chiếc (xe)', '🚌']
      ],
      story: [
        { c: 'panda', vi: 'Tan học. Bố của bạn Tiểu Quan (chú Quan, giám đốc) đến đón và gặp lại thầy Vương.' },
        { c: 'manager', zh: '王老师，好久不见了。', py: 'Wáng lǎoshī, hǎojiǔ bú jiàn le.', vi: 'Thầy Vương, lâu quá không gặp.' },
        { c: 'teacher', zh: '啊！关经理，欢迎，欢迎！', py: 'À! Guān jīnglǐ, huānyíng, huānyíng!', vi: 'Ồ! Anh Quan, hoan nghênh, hoan nghênh!' },
        { c: 'manager', zh: '您身体好吗？', py: 'Nín shēntǐ hǎo ma?', vi: 'Thầy có khỏe không?' },
        { c: 'teacher', zh: '很好。您身体怎么样？', py: 'Hěn hǎo. Nín shēntǐ zěnmeyàng?', vi: 'Rất khỏe. Anh thế nào?' },
        { c: 'manager', zh: '马马虎虎。', py: 'Mǎmahūhū.', vi: 'Tàm tạm.' },
        { c: 'teacher', zh: '最近工作忙不忙？', py: 'Zuìjìn gōngzuò máng bu máng?', vi: 'Gần đây công việc có bận không?' },
        { c: 'manager', zh: '不太忙，您呢？', py: 'Bú tài máng, nín ne?', vi: 'Không bận lắm, còn thầy?' },
        { c: 'teacher', zh: '刚开学，有点儿忙。喝点儿什么？茶还是咖啡？', py: 'Gāng kāi xué, yǒudiǎnr máng. Hē diǎnr shénme? Chá háishi kāfēi?', vi: 'Vừa khai giảng nên hơi bận. Anh uống gì? Trà hay cà phê?' },
        { c: 'manager', zh: '喝杯茶吧！', py: 'Hē bēi chá ba!', vi: 'Uống tách trà nhé!' },
        { c: 'panda', vi: 'Ngoài bãi xe có rất nhiều xe đạp. Bạn Điền Phương không tìm thấy xe của mình.' },
        { c: 'tianfang', zh: '我的车呢？', py: 'Wǒ de chē ne?', vi: 'Xe của mình đâu rồi?' },
        { me: 'Xe của bạn màu gì?', opts: [['你的车是什么颜色的？', 'Nǐ de chē shì shénme yánsè de?', 'Xe của bạn màu gì?'], ['你的车是什么的？', 'Nǐ de chē shì shénme de?', '(thiếu 颜色)'], ['你的车在哪儿颜色？', 'Nǐ de chē zài nǎr yánsè?', '(sai)']] },
        { c: 'tianfang', zh: '蓝的。', py: 'Lán de.', vi: 'Màu xanh.' },
        { me: 'Mới hay cũ?', opts: [['是新的还是旧的？', 'Shì xīn de háishi jiù de?', 'Mới hay cũ?'], ['是新的或者旧的吗？', 'Shì xīn de huòzhě jiù de ma?', '(câu hỏi lựa chọn phải dùng 还是)'], ['新的旧的？', 'Xīn de jiù de?', '(thiếu 还是)']] },
        { c: 'tianfang', zh: '新的。', py: 'Xīn de.', vi: 'Mới.' },
        { me: 'Chiếc xanh kia có phải của bạn không?', opts: [['那辆蓝的是不是你的？', 'Nà liàng lán de shì bu shì nǐ de?', 'Chiếc màu xanh kia có phải của bạn không?'], ['那个蓝的是你吗？', 'Nà ge lán de shì nǐ ma?', '(sai nghĩa)'], ['那辆红的是不是你的？', 'Nà liàng hóng de shì bu shì nǐ de?', 'Chiếc màu đỏ kia có phải của bạn không?']] },
        { c: 'tianfang', zh: '哪辆？', py: 'Nǎ liàng?', vi: 'Chiếc nào?' },
        { me: 'Chiếc kia', opts: [['那辆。', 'Nà liàng.', 'Chiếc kia.'], ['那个人。', 'Nà ge rén.', 'Người kia.'], ['那本。', 'Nà běn.', 'Quyển kia.']] },
        { c: 'tianfang', zh: '不是。……啊，我的车在那儿呢。', py: 'Bú shì. …… À, wǒ de chē zài nàr ne.', vi: 'Không phải… À, xe của mình ở đằng kia kìa.' }
      ],
      grammar: [
        { t: 'Câu hỏi lựa chọn với 还是', d: 'A 还是 B? = A hay B? Không thêm 吗.', ex: [['茶还是咖啡？', 'Chá háishi kāfēi?', 'Trà hay cà phê?'], ['是新的还是旧的？', 'Shì xīn de háishi jiù de?', 'Mới hay cũ?']] },
        { t: 'Câu hỏi tỉnh lược với 呢', d: 'Danh từ/đại từ + 呢? hỏi lại câu vừa nói, hoặc hỏi "… đâu?".', ex: [['不太忙，您呢？', 'Bú tài máng, nín ne?', 'Không bận lắm, còn thầy?'], ['我的车呢？', 'Wǒ de chē ne?', 'Xe của tôi đâu?']] },
        { t: '有点儿 + tính từ', d: 'Hơi…, thường chỉ điều không như ý.', ex: [['有点儿忙', 'yǒudiǎnr máng', 'hơi bận']] },
        { t: 'Lượng từ 辆 và 杯', d: '辆 cho xe cộ, 杯 cho cốc/tách.', ex: [['那辆蓝的', 'nà liàng lán de', 'chiếc màu xanh kia'], ['喝杯茶吧', 'hē bēi chá ba', 'uống tách trà nhé']] }
      ],
      order: [[['茶', '还是', '咖啡'], 'Trà hay cà phê?'], [['我', '的', '车', '呢'], 'Xe của tôi đâu?'], [['你', '的', '车', '是', '什么', '颜色', '的'], 'Xe của bạn màu gì?'], [['刚', '开学', '有点儿', '忙'], 'Vừa khai giảng, hơi bận.']]
    },
    {
      id: 'hk1-l15', no: 15, day: 'Ngày 15', time: '20:00', scene: 'living', room: 'living', cast: ['mike', 'dad', 'teacher'],
      vi: 'Buổi tối: kể về gia đình', zh: '你们公司有多少职员', py: 'Nǐmen gōngsī yǒu duōshao zhíyuán',
      vocab: [
        ['口', 'kǒu', '(lượng từ đếm người trong nhà)', '👨‍👩‍👧‍👦'], ['全', 'quán', 'toàn, cả', '🏠'], ['照片', 'zhàopiàn', 'ảnh', '🖼️'],
        ['看', 'kàn', 'xem, nhìn', '👀'], ['姐姐', 'jiějie', 'chị gái', '👩'], ['只', 'zhǐ', 'chỉ', '☝️'],
        ['做', 'zuò', 'làm', '🛠️'], ['大夫', 'dàifu', 'bác sĩ', '🩺'], ['医院', 'yīyuàn', 'bệnh viện', '🏥'],
        ['公司', 'gōngsī', 'công ty', '🏢'], ['商店', 'shāngdiàn', 'cửa hàng', '🏪'], ['律师', 'lǜshī', 'luật sư', '⚖️'],
        ['外贸', 'wàimào', 'ngoại thương', '🚢'], ['小', 'xiǎo', 'nhỏ', '🐭'], ['大概', 'dàgài', 'khoảng', '〰️'],
        ['多', 'duō', 'hơn (số lẻ)', '➕'], ['外国', 'wàiguó', 'nước ngoài', '🌍']
      ],
      story: [
        { c: 'panda', vi: 'Buổi tối Mike sang chơi. Em mở album ảnh gia đình.' },
        { c: 'mike', zh: '你家有几口人？', py: 'Nǐ jiā yǒu jǐ kǒu rén?', vi: 'Nhà bạn có mấy người?' },
        { me: 'Nhà mình có năm người: bố, mẹ, anh trai, em gái và mình', opts: [['我家有五口人，爸爸、妈妈、哥哥、妹妹和我。', 'Wǒ jiā yǒu wǔ kǒu rén, bàba, māma, gēge, mèimei hé wǒ.', 'Nhà mình có năm người: bố, mẹ, anh trai, em gái và mình.'], ['我家有五个口人。', 'Wǒ jiā yǒu wǔ ge kǒu rén.', '(thừa 个)'], ['我家是五口人。', 'Wǒ jiā shì wǔ kǒu rén.', '(dùng 有, không dùng 是)']] },
        { c: 'mike', zh: '你有没有全家的照片？', py: 'Nǐ yǒu méiyǒu quán jiā de zhàopiàn?', vi: 'Bạn có ảnh cả nhà không?' },
        { me: 'Có một tấm. Bạn xem, đây là ảnh cả nhà mình', opts: [['有一张。你看，这是我们全家的照片。', 'Yǒu yì zhāng. Nǐ kàn, zhè shì wǒmen quán jiā de zhàopiàn.', 'Có một tấm. Bạn xem, đây là ảnh cả nhà mình.'], ['有一本。你看。', 'Yǒu yì běn. Nǐ kàn.', '(sai lượng từ)'], ['没有照片。', 'Méiyǒu zhàopiàn.', 'Không có ảnh.']] },
        { me: 'Bạn có anh chị không?', opts: [['你有哥哥姐姐吗？', 'Nǐ yǒu gēge jiějie ma?', 'Bạn có anh chị không?'], ['你有没有哥哥姐姐吗？', 'Nǐ yǒu méiyǒu gēge jiějie ma?', '(thừa 吗)'], ['你是哥哥吗？', 'Nǐ shì gēge ma?', 'Bạn là anh à?']] },
        { c: 'mike', zh: '我没有哥哥，也没有姐姐，只有两个弟弟。', py: 'Wǒ méiyǒu gēge, yě méiyǒu jiějie, zhǐ yǒu liǎng ge dìdi.', vi: 'Mình không có anh, cũng không có chị, chỉ có hai em trai.' },
        { me: 'Bố mẹ bạn làm nghề gì?', opts: [['你爸爸、妈妈做什么工作？', 'Nǐ bàba, māma zuò shénme gōngzuò?', 'Bố mẹ bạn làm nghề gì?'], ['你爸爸、妈妈在哪儿？', 'Nǐ bàba, māma zài nǎr?', 'Bố mẹ bạn ở đâu?'], ['你爸爸做工作什么？', 'Nǐ bàba zuò gōngzuò shénme?', '(sai trật tự)']] },
        { c: 'mike', zh: '我妈妈是大夫，在医院工作，爸爸是一家公司的经理。', py: 'Wǒ māma shì dàifu, zài yīyuàn gōngzuò, bàba shì yì jiā gōngsī de jīnglǐ.', vi: 'Mẹ mình là bác sĩ, làm ở bệnh viện, bố là giám đốc một công ty.' },
        { c: 'panda', vi: 'Thầy Vương cũng đến thăm, đang nói chuyện với bố em.' },
        { c: 'teacher', zh: '你们是一家什么公司？', py: 'Nǐmen shì yì jiā shénme gōngsī?', vi: 'Công ty anh là công ty gì?' },
        { c: 'dad', zh: '是一家外贸公司。', py: 'Shì yì jiā wàimào gōngsī.', vi: 'Là một công ty ngoại thương.' },
        { c: 'teacher', zh: '是一家大公司吗？', py: 'Shì yì jiā dà gōngsī ma?', vi: 'Là công ty lớn à?' },
        { c: 'dad', zh: '不大，是一家比较小的公司。', py: 'Bú dà, shì yì jiā bǐjiào xiǎo de gōngsī.', vi: 'Không lớn, là công ty khá nhỏ.' },
        { c: 'teacher', zh: '有多少职员？', py: 'Yǒu duōshao zhíyuán?', vi: 'Có bao nhiêu nhân viên?' },
        { c: 'dad', zh: '大概有一百多个职员。', py: 'Dàgài yǒu yìbǎi duō ge zhíyuán.', vi: 'Khoảng hơn một trăm nhân viên.' },
        { c: 'teacher', zh: '都是中国职员吗？', py: 'Dōu shì Zhōngguó zhíyuán ma?', vi: 'Đều là nhân viên Trung Quốc à?' },
        { c: 'dad', zh: '不都是中国职员，也有外国职员。', py: 'Bù dōu shì Zhōngguó zhíyuán, yě yǒu wàiguó zhíyuán.', vi: 'Không phải tất cả là người Trung Quốc, cũng có nhân viên nước ngoài.' }
      ],
      grammar: [
        { t: 'Hỏi số người trong nhà', d: '你家有几口人？ Lượng từ 口 dùng riêng cho người trong gia đình, đáp: 我家有五口人.', ex: [['你家有几口人？', 'Nǐ jiā yǒu jǐ kǒu rén?', 'Nhà bạn có mấy người?']] },
        { t: '有没有 …？', d: 'Câu hỏi chính phản của 有, không thêm 吗.', ex: [['你有没有全家的照片？', 'Nǐ yǒu méiyǒu quán jiā de zhàopiàn?', 'Bạn có ảnh cả nhà không?']] },
        { t: '几 và 多少', d: '几 cho số nhỏ (dưới 10), phải có lượng từ; 多少 cho số lớn, lượng từ có thể bỏ.', ex: [['有多少职员？', 'Yǒu duōshao zhíyuán?', 'Có bao nhiêu nhân viên?']] },
        { t: '不都 khác 都不', d: '不都是 = không phải tất cả đều là; 都不是 = tất cả đều không phải.', ex: [['不都是中国职员。', 'Bù dōu shì Zhōngguó zhíyuán.', 'Không phải tất cả là nhân viên Trung Quốc.']] },
        { t: 'Số + 多', d: '一百多 = hơn một trăm (số lẻ không rõ).', ex: [['一百多个职员', 'yìbǎi duō ge zhíyuán', 'hơn một trăm nhân viên']] },
        { t: 'Hỏi nghề nghiệp', d: '做什么工作？ Đáp: 是 + nghề; 在 + nơi + 工作.', ex: [['我妈妈是大夫，在医院工作。', 'Wǒ māma shì dàifu, zài yīyuàn gōngzuò.', 'Mẹ tôi là bác sĩ, làm ở bệnh viện.']] }
      ],
      order: [[['你', '家', '有', '几', '口', '人'], 'Nhà bạn có mấy người?'], [['你', '爸爸', '做', '什么', '工作'], 'Bố bạn làm nghề gì?'], [['我', '妈妈', '在', '医院', '工作'], 'Mẹ tôi làm ở bệnh viện.'], [['不', '都', '是', '中国', '职员'], 'Không phải tất cả là nhân viên Trung Quốc.']]
    }
  );

  Object.assign(C.challenges, {
    'hk1-l9': { gram: [{ s: ['我', '要', '去', '银行'], q: 'Chạm vào động từ năng nguyện (muốn, phải)', a: '要' }, { s: ['王', '小姐'], q: 'Chạm vào họ', a: '王' }],
      pic: [{ p: '💵 🔁 💴', v: 'Tôi đổi nhân dân tệ.', opts: ['我换人民币。', '我换美元钱。', '我数数。'] }, { p: '🧾 ⏳ ⏱️', v: 'Xin đợi một lát.', opts: ['请等一会儿。', '请数数。', '不客气！'] }] },
    'hk1-l10': { gram: [{ s: ['他', '在', '家', '呢'], q: 'Chạm vào trợ từ cuối câu', a: '呢' }, { s: ['他', '住', '哪儿'], q: 'Chạm vào từ để hỏi nơi chốn', a: '哪儿' }],
      pic: [{ p: '🚪 6️⃣0️⃣1️⃣', v: 'Số phòng là 601.', opts: ['房间号是六零一。', '房间号是六零七。', '手机号码是多少？'] }, { p: '👨‍🏫 ➡️ 🏠', v: 'Thầy đang ở nhà.', opts: ['他在家呢。', '他不在家。', '他住十八楼。'] }] },
    'hk1-l11': { gram: [{ s: ['我们', '都', '是', '留学生'], q: 'Chạm vào phó từ "đều"', a: '都' }, { s: ['他们', '也', '都', '是', '学生'], q: 'Chạm vào phó từ "cũng"', a: '也' }],
      pic: [{ p: '👴 🤝 🧑‍🔬 🎉', v: 'Hoan nghênh ngài, giáo sư Vương.', opts: ['欢迎您，王教授。', '您好，马校长。', '没什么。'] }, { p: '✈️🧔 ✈️👱‍♀️ ✈️🧑', v: 'Chúng tôi đều là lưu học sinh.', opts: ['我们都是留学生。', '我们也是中国人。', '他们俩不是学生。'] }] },
    'hk1-l12': { gram: [{ s: ['我', '觉得', '语法', '不', '太', '难'], q: 'Chạm vào động từ "cảm thấy"', a: '觉得' }, { s: ['你', '在', '哪儿', '学习'], q: 'Chạm vào giới từ chỉ nơi chốn', a: '在' }],
      pic: [{ p: '👂🗨️ 😌   📖✍️ 😣', v: 'Nghe nói dễ, đọc viết khó.', opts: ['听和说比较容易，但是读和写很难。', '读和写比较容易，但是听和说很难。', '语法很难。'] }, { p: '🏷️ 1️⃣0️⃣3️⃣', v: 'Ở lớp 103.', opts: ['在103班。', '在十三班。', '在三楼。'] }] },
    'hk1-l13': { gram: [{ s: ['一', '把', '雨伞'], q: 'Chạm vào lượng từ', a: '把' }, { s: ['这', '个', '黑', '的', '很', '重'], q: 'Chạm vào tính từ "nặng"', a: '重' }],
      pic: [{ p: '🧳⚫ 🏋️   🧳🔴 🪶', v: 'Cái đen nặng, cái đỏ khá nhẹ.', opts: ['这个黑的很重，那个红的比较轻。', '这个红的很重，那个黑的比较轻。', '我的很旧。'] }, { p: '👕👕 🌂 🍾', v: 'Hai chiếc áo, một cái ô, một chai nước hoa', opts: ['两件衣服、一把雨伞、一瓶香水', '两本衣服、一张雨伞、一个香水', '二件衣服、一把雨伞、一瓶香水'] }] },
    'hk1-l14': { gram: [{ s: ['茶', '还是', '咖啡'], q: 'Chạm vào liên từ hỏi lựa chọn', a: '还是' }, { s: ['那', '辆', '蓝', '的'], q: 'Chạm vào lượng từ của xe', a: '辆' }],
      pic: [{ p: '🚲🔵 ✨', v: 'Màu xanh, mới.', opts: ['蓝的，新的。', '红的，旧的。', '蓝的，旧的。'] }, { p: '🍵 ❓ ☕', v: 'Trà hay cà phê?', opts: ['茶还是咖啡？', '茶和咖啡。', '喝杯茶吧！'] }] },
    'hk1-l15': { gram: [{ s: ['我', '只', '有', '两', '个', '弟弟'], q: 'Chạm vào phó từ "chỉ"', a: '只' }, { s: ['我', '家', '有', '五', '口', '人'], q: 'Chạm vào lượng từ đếm người trong nhà', a: '口' }],
      pic: [{ p: '👨 👩 🧑 👧 🧒', v: 'Nhà tôi có năm người.', opts: ['我家有五口人。', '我家有四口人。', '我家有五个口人。'] }, { p: '👩‍⚕️ 🏥', v: 'Mẹ tôi là bác sĩ, làm ở bệnh viện.', opts: ['我妈妈是大夫，在医院工作。', '我妈妈是律师，在商店工作。', '我妈妈在工作医院。'] }] }
  });

  /* 看图说话 (上册): phát âm theo tranh, nói theo tranh, kể lại. Trả lời bằng mic; ok = các chữ phải có trong câu nói. */
  var kantu = {
    'hk1-l1': { src: '看图说话 上册 · 第一课 · 看图发音', pron: [['布', 'bù', '🧶', 'vải'], ['爬', 'pá', '🧗', 'leo, bò'], ['跑', 'pǎo', '🏃', 'chạy'], ['猫', 'māo', '🐱', 'mèo'], ['马', 'mǎ', '🐴', 'ngựa'], ['飞', 'fēi', '🕊️', 'bay'], ['刀', 'dāo', '🔪', 'dao'], ['桃', 'táo', '🍑', 'quả đào'], ['女', 'nǚ', '👩', 'nữ'], ['楼', 'lóu', '🏢', 'tòa nhà'], ['狗', 'gǒu', '🐶', 'chó'], ['鼓', 'gǔ', '🥁', 'trống'], ['哭', 'kū', '😭', 'khóc'], ['虎', 'hǔ', '🐯', 'hổ'], ['海', 'hǎi', '🌊', 'biển']] },
    'hk1-l2': { src: '看图说话 上册 · 第一课 · 麦克和玛丽', scene: '👱‍♂️ 👩‍🦰', words: [['是', 'shì'], ['谁', 'shéi'], ['和', 'hé'], ['他们', 'tāmen']],
      ask: [['他是谁？', '👱‍♂️', ['麦克'], '他是麦克。', ['他是玛丽。', '她是麦克。']], ['她是谁？', '👩‍🦰', ['玛丽'], '她是玛丽。', ['她是麦克。', '他们是玛丽。']], ['他们是谁？', '👱‍♂️👩‍🦰', ['麦克', '玛丽'], '他们是麦克和玛丽。', ['他们是麦克。', '他是麦克和玛丽。']]],
      retell: '他是麦克，她是玛丽。他们是麦克和玛丽。' },
    'hk1-l3': { src: '看图说话 上册 · 第二课 · 看图发音', pron: [['鸡', 'jī', '🐔', 'gà'], ['脚', 'jiǎo', '🦶', 'chân'], ['剪', 'jiǎn', '✂️', 'cắt'], ['球', 'qiú', '⚽', 'quả bóng'], ['钱', 'qián', '💰', 'tiền'], ['琴', 'qín', '🎹', 'đàn'], ['墙', 'qiáng', '🧱', 'bức tường'], ['虾', 'xiā', '🦐', 'tôm'], ['蟹', 'xiè', '🦀', 'cua'], ['星', 'xīng', '⭐', 'ngôi sao'], ['熊', 'xióng', '🐻', 'gấu']] },
    'hk1-l4': { src: '看图说话 上册 · 第二课 · 去哪儿', scene: '👦➡️🏦  👧➡️🏤  👴➡️🚩  🐶➡️🌳  👱‍♂️👩‍🦰➡️🏫☕', words: [['男孩', 'nánhái'], ['女孩', 'nǚhái'], ['老人', 'lǎorén'], ['小狗', 'xiǎogǒu'], ['公园', 'gōngyuán']],
      ask: [['男孩去哪儿？', '👦➡️🏦', ['银行'], '男孩去银行。', ['男孩去邮局。', '男孩去公园。']], ['女孩去哪儿？', '👧➡️🏤✉️', ['邮局'], '女孩去邮局寄信。', ['女孩去银行。', '女孩去天安门。']], ['老人去哪儿？', '👴➡️🚩', ['天安门'], '老人去天安门。', ['老人去公园。', '老人回学校。']], ['小狗去哪儿？', '🐶➡️🌳', ['公园'], '小狗去公园。', ['小狗去天安门。', '小狗去银行。']], ['麦克和玛丽去哪儿？', '👱‍♂️👩‍🦰➡️🏫☕', ['学校'], '麦克和玛丽回学校喝咖啡。', ['麦克和玛丽去公园。', '麦克和玛丽去银行。']]],
      retell: '今天星期天，男孩去银行，女孩不去银行，去邮局寄信。他们很忙。老人不忙，他去天安门。小狗不去天安门，去公园。麦克和玛丽回学校喝咖啡。' },
    'hk1-l6': { src: '看图说话 上册 · 第三课 · 看图发音', pron: [['字', 'zì', '🈶', 'chữ'], ['走', 'zǒu', '🚶', 'đi bộ'], ['嘴', 'zuǐ', '👄', 'miệng'], ['坐', 'zuò', '🪑', 'ngồi'], ['草', 'cǎo', '🌿', 'cỏ'], ['菜', 'cài', '🥬', 'rau'], ['伞', 'sǎn', '☂️', 'cái ô'], ['猪', 'zhū', '🐷', 'lợn'], ['车', 'chē', '🚗', 'xe'], ['书', 'shū', '📘', 'sách'], ['山', 'shān', '⛰️', 'núi'], ['肉', 'ròu', '🥩', 'thịt']] },
    'hk1-l9': { src: '看图说话 上册 · 第三课 · 学武术', scene: '🥋👱‍♂️  🧑‍🏫  👩‍🦰❓', words: [['武术', 'wǔshù'], ['懂', 'dǒng'], ['认真', 'rènzhēn'], ['就', 'jiù'], ['要', 'yào']],
      ask: [['麦克学习什么？', '🥋👱‍♂️', ['武术'], '麦克学习武术。', ['麦克学习汉语。', '麦克学习英语。']], ['张老师是什么老师？', '🧑‍🏫🥋', ['武术'], '张老师是武术老师。', ['张老师是汉语老师。', '张老师是英语老师。']], ['玛丽也要学习武术吗？', '👩‍🦰🥋', ['要'], '玛丽也要学习武术。', ['玛丽不学习武术。', '玛丽要学习汉语。']]],
      retell: '这是麦克，那是张老师。麦克学习武术，很认真。张老师是他的武术老师。玛丽来了，她问张老师学武术难不难。张老师说：“不认真学就难，认真学就不难。”' }
  };
  Object.keys(kantu).forEach(function (id) { hk1.lessons.forEach(function (l) { if (l.id === id) l.kantu = kantu[id]; }); });
  hk1.book = '汉语教程 第一册（上）· Bài 1–15 · 看图说话 上册';
  hk1.intro = 'Bé vào lớp 1 và bắt đầu học tiếng Trung. Mỗi ngày là một bài trong Hán ngữ giáo trình, kèm luyện nói theo Khán đồ thuyết thoại.';
})(window.CONTENT);
