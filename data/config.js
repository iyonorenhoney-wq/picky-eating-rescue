/**
 * 偏食レスキュー - アプリ設定ファイル
 * プロフィール情報や個別相談などの文言をここで一括管理できます。
 */

const APP_CONFIG = {
  // プロフィールセクションの設定
  profile: {
    name: "もんもん",
    image: "images/monmon.jpg",
    title: "幼児栄養士／偏食・癇癪専門アドバイザー　２児の母",
    description: `偏食や癇癪に悩むママたちへ、栄養士の視点と実体験をもとに寄り添ったアドバイスをしています。「食べてくれない…・」という毎日の悩みに、栄養士ならではのレシピと工夫で応えます。一緒に、食事タイムを楽しい時間に変えましょう！`,
    badges: [
      { text: "🎓 幼児栄養士", color: "#fdf8e8" },
      { text: "👶 育児経験あり", color: "#fdf8e8" },
      { text: "💬 個別相談対応", color: "#fdf8e8" },
      { text: "🥦 偏食専門", color: "#fdf8e8" }
    ],
    links: {
      line: "https://lin.ee/FMqwLTq",
      threads: "https://www.threads.net/@monmon_kahchan"
    }
  },

  // 個別相談セクションの設定
  consultation: {
    title: "「うちの子、どうしたら食べてくれる？」",
    subtitle: "お子さんの偏食・癇癪の悩みをもんもん先生に個別相談できます。レシピだけでは解決しない、一人ひとりに合わせたアドバイスをします。",
    badgeText: "💬 個別相談",
    cards: [
      { icon: "👤", text: "お子さん専用のアドバイス" },
      { icon: "🥗", text: "栄養士目線の具体的な提案" },
      { icon: "💚", text: "ママの気持ちに寄り添うサポート" }
    ],
    buttonText: "📩 LINEで個別相談に申し込む"
  },

  // サイト全般
  site: {
    title: "偏食レスキューレシピ",
    logoEmoji: "🥦"
  }
};
