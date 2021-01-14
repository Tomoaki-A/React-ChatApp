const defaultDataset = {
  init: {
    answers: [
      { content: "あなたについて知りたい", nextId: "myself" },
      { content: "仕事を依頼したい", nextId: "work" },
      { content: "友達になりましょう", nextId: "tel" },
    ],
    question: "こんにちは！ご用件はなんでしょうか？",
  },

  myself: {
    answers: [
      { content: "プラグラミングについて", nextId: "job" },
      { content: "プライベートなこと", nextId: "private" },
      { content: "最初へ戻る", nextId: "init" },
    ],
    question: "「私について」ですね？どちらが知りたいですか？",
  },

  job: {
    answers: [
      { content: "あなたはどんなエンジニア？", nextId: "enjineers" },
      { content: "開発言語は？", nextId: "lang" },
      { content: "最初へ戻る", nextId: "init" },
    ],
    question: "「プログラミングについて」ですね？何が知りたいですか？",
  },
  enjineers: {
    answers: [
      { content: "一つ前へ戻る？", nextId: "job" },
      { content: "最初へ戻る", nextId: "init" },
    ],
    question:
      "プログラミング学習歴1年弱年の駆け出しです。これからフロントエンドエンジニアとして様々なサービス開発に携わりたい！！",
  },
  lang: {
    answers: [
      { content: "学習期間は？", nextId: "since" },
      { content: "1日どのくらい勉強してる？", nextId: "hour" },
      { content: "一つ前へ戻る", nextId: "job" },
      { content: "最初へ戻る", nextId: "init" },
    ],
    question:
      "HTML,CSSをはじめ、主にJavaScript,React,Vue.jsを扱いフロントエンド開発を行います。",
  },
  since: {
    answers: [
      { content: "一つ前へ戻る", nextId: "lang" },
      { content: "最初へ戻る", nextId: "init" },
    ],
    question:
      "2021年春頃、急に「アプリ作ってみたい！！」と思い立ち学習開始。すっかりハマってしまって現在も日々勉強中です笑",
  },
  hour: {
    answers: [
      { content: "一つ前へ戻る", nextId: "lang" },
      { content: "最初へ戻る", nextId: "init" },
    ],
    question:
      "嘘つけ〜って思われるかもしれませんが、毎日平均5時間くらいやっちゃいます。大学生の特権ですね！笑　むしろ一度始めたら1.２時間で辞めれない〜",
  },

  private: {
    answers: [
      { content: "自己紹介して", nextId: "info" },
      { content: "趣味は何？", nextId: "hobby" },
      { content: "好きな言葉は？", nextId: "motto" },
      { content: "最初へ戻る", nextId: "init" },
    ],
    question: "「プライベート」についてですね。どんなことが知りたいですか？",
  },
  hobby: {
    answers: [
      { content: "自己紹介して", nextId: "info" },
      { content: "趣味は何？", nextId: "hobby" },
      { content: "好きな言葉は？", nextId: "motto" },
      { content: "最初へ戻る", nextId: "init" },
    ],
    question:
      "実は無趣味人間なんですよ...　強いて言えばFxで2年ほど前から相場分析しています。",
  },
  info: {
    answers: [
      { content: "自己紹介して", nextId: "info" },
      { content: "趣味は何？", nextId: "hobby" },
      { content: "好きな言葉は？", nextId: "motoo" },
      { content: "最初へ戻る", nextId: "init" },
    ],
    question:
      "初めまして。関西大学経済学部 浅野 友亮(アサノ トモアキ)と申します。出身地は神戸市、今は大阪市に住んでいます。宜しくお願いします！",
  },
  motto: {
    answers: [
      { content: "自己紹介して", nextId: "info" },
      { content: "趣味は何？", nextId: "hobby" },
      { content: "好きな言葉は？", nextId: "motoo" },
      { content: "最初へ戻る", nextId: "init" },
    ],
    question:
      "「人の行動をコントロールするのは常に環境。自分の目的を達成できる環境を自ら設置する能力こそ何より重要」この言葉を日々意識しています。",
  },
  work: {
    answers: [
      { content: "ホームページを作って欲しい", nextId: "contact_hp" },
      { content: "Webアプリを開発して欲しい", nextId: "contact_app" },
      { content: "一緒に働きたい", nextId: "too" },
      { content: "最初へ戻る", nextId: "init" },
    ],
    question: "お仕事のご依頼ですね？どのような内容ですか？",
  },
  contact_hp: {
    answers: [
      { content: "お問い合わせ", nextId: "contact" },
      { content: "最初へ戻る", nextId: "init" },
    ],
    question:
      "「ホームページ制作のご依頼」ですね？お手数ですがこちらからお問い合わせください。",
  },
  contact_app: {
    answers: [
      { content: "お問い合わせ", nextId: "contact" },
      { content: "最初へ戻る", nextId: "init" },
    ],
    question:
      "「Webアプリ開発のご依頼」ですね？お手数ですがこちらからお問い合わせください。",
  },
  too: {
    answers: [
      { content: "お問い合わせ", nextId: "contact" },
      { content: "最初へ戻る", nextId: "init" },
    ],
    question:
      "「一緒に働きたい」ですか...？光栄です！！！是非こちらからお問い合わせください。",
  },
  tel: {
    answers: [
      { content: "連絡する", nextId: "contact" },
      { content: "最初へ戻る", nextId: "init" },
    ],
    question:
      "「トモダチ」ですか...？光栄です！連絡待ってます！",
  },
};
export default defaultDataset;
