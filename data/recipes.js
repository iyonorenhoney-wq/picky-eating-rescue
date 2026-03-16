const RECIPE_TYPES = {
  "CAUTIOUS": "慎重タイプ",
  "SENSITIVE": "感覚敏感タイプ",
  "FOCUS": "集中力切れタイプ",
  "FIXED": "好き嫌い固定タイプ"
};

const recipes = [
  // --- 慎重タイプ (1-20) ---
  {
    "id": 1, "name": "コーンそぼろ丼", "type": "慎重タイプ", "time": 10, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "鶏ミンチ", "quantity": "150g" }, { "name": "コーン", "quantity": "大さじ3" }, { "name": "玉ねぎ", "quantity": "1/4個" }, { "name": "醤油", "quantity": "小さじ2" }, { "name": "砂糖", "quantity": "小さじ1" }],
    "steps": ["玉ねぎをみじん切りにする。", "フライパンで鶏ミンチと玉ねぎを炒める。", "火が通ったらコーンと調味料を加えて炒め合わせる。", "ご飯にのせて完成。"],
    "pickyEatingPoint": "細かい具材が混ざることで、苦手な野菜も気になりにくくなります。", "nutritionPoint": "タンパク質と野菜、炭水化物が一皿で取れるバランスごはん。",
    "imagePrompt": "A simple homemade corn soboro rice bowl on a white plate, Japanese home cooking style, natural lighting, wooden table, kid friendly meal", "imagePath": "images/corn_soboro_don.png"
  },
  {
    "id": 2, "name": "野菜ミート丼", "type": "慎重タイプ", "time": 15, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "合挽き肉", "quantity": "150g" }, { "name": "にんじん", "quantity": "1/4本" }, { "name": "ピーマン", "quantity": "1個" }, { "name": "ケチャップ", "quantity": "大さじ2" }],
    "steps": ["野菜を細かいみじん切りにする。", "ひき肉を炒め、野菜を加えてさらに炒める。", "調味料を加えて味を整える。", "ご飯にのせて完成。"],
    "pickyEatingPoint": "野菜を細かくしてお肉と混ぜることで見た目の抵抗を減らします。", "nutritionPoint": "ビタミン豊富なにんじんとピーマンを美味しく摂取できます。",
    "imagePrompt": "Minced meat and finely chopped vegetables over rice, white ceramic bowl, kid friendly meal", "imagePath": "images/recipe2.png"
  },
  {
    "id": 3, "name": "そぼろオムライス", "type": "慎重タイプ", "time": 15, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "鶏ミンチ", "quantity": "100g" }, { "name": "ご飯", "quantity": "200g" }, { "name": "卵", "quantity": "2個" }, { "name": "ケチャップ", "quantity": "大さじ1" }],
    "steps": ["ミンチをご飯と炒め、ケチャップで味付けする。", "一旦取り出し、薄焼き卵を作る。", "卵でご飯を包んで完成。"],
    "pickyEatingPoint": "具材を細かく混ぜることで、苦手なものも一緒に食べられます。", "nutritionPoint": "卵の良質なタンパク質が成長をサポートします。",
    "imagePrompt": "Small omelette rice with minced meat inside, kids portion, white plate", "imagePath": "images/recipe3.png"
  },
  {
    "id": 4, "name": "にんじんツナごはん", "type": "慎重タイプ", "time": 10, "cookingStyle": "丼",
    "ingredients": [{ "name": "ツナ缶", "quantity": "1缶" }, { "name": "にんじん", "quantity": "1/4本" }, { "name": "ご飯", "quantity": "200g" }, { "name": "めんつゆ", "quantity": "小さじ1" }],
    "steps": ["にんじんを細かくすりおろすかみじん切りにする。", "ツナとご飯、にんじん、めんつゆを混ぜる。", "レンジで1分加熱して完成。"],
    "pickyEatingPoint": "にんじんの色がツナと混ざることで、野菜の存在感を抑えます。", "nutritionPoint": "ツナのDHAとにんじんのβカロテンが同時に取れます。",
    "imagePrompt": "Carrot and tuna mixed rice in a small bowl, simple Japanese home cooking", "imagePath": "images/recipe4.png"
  },
  {
    "id": 5, "name": "ほうれん草そぼろごはん", "type": "慎重タイプ", "time": 15, "cookingStyle": "丼",
    "ingredients": [{ "name": "豚ミンチ", "quantity": "100g" }, { "name": "ほうれん草", "quantity": "1株" }, { "name": "味噌", "quantity": "小さじ1" }],
    "steps": ["ほうれん草を茹でて極みじん切りにし、水気を絞る。", "ミンチとほうれん草を炒め、味噌で味付ける。", "ご飯にのせて完成。"],
    "pickyEatingPoint": "ほうれん草を細かくしてお肉の旨味を吸わせることで食べやすくなります。", "nutritionPoint": "鉄分不足がちなお子様に最適なほうれん草レシピです。",
    "imagePrompt": "Minced pork and finely chopped spinach over rice, white plate", "imagePath": "images/recipe5.png"
  },
  {
    "id": 6, "name": "野菜チャーハン", "type": "慎重タイプ", "time": 10, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "卵", "quantity": "1個" }, { "name": "野菜ミックス", "quantity": "50g" }, { "name": "ハム", "quantity": "2枚" }],
    "steps": ["具材をすべてみじん切りにする。", "フライパンで卵と具材を炒め、ご飯を加える。", "醤油少々で味を整えて完成。"],
    "pickyEatingPoint": "色とりどりの具材を細かくすることで、視覚的な抵抗を和らげます。", "nutritionPoint": "多種類の野菜を一度に摂取できる万能メニューです。",
    "imagePrompt": "Colorful fried rice with finely chopped vegetables and egg, kids portion", "imagePath": "images/recipe6.png"
  },
  {
    "id": 7, "name": "ミートソースパスタ", "type": "慎重タイプ", "time": 15, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "パスタ", "quantity": "100g" }, { "name": "レトルトミートソース", "quantity": "1袋" }, { "name": "追い野菜", "quantity": "適量" }],
    "steps": ["パスタを茹でる。", "ミートソースに細かく刻んだ野菜を混ぜて温める。", "パスタと和えて完成。"],
    "pickyEatingPoint": "ソースに混ぜることで、苦手な食感も隠すことができます。", "nutritionPoint": "レトルトを活用しつつ、生野菜を足して栄養価アップ。",
    "imagePrompt": "Meat sauce pasta with minced vegetables, white plate, Italian style", "imagePath": "images/recipe7.png"
  },
  {
    "id": 8, "name": "野菜ナポリタン", "type": "慎重タイプ", "time": 15, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "パスタ", "quantity": "100g" }, { "name": "玉ねぎ", "quantity": "1/8個" }, { "name": "ピーマン", "quantity": "1/2個" }, { "name": "ケチャップ", "quantity": "大さじ2" }],
    "steps": ["野菜を細かく刻み、パスタと一緒に茹でる（時短）。", "お湯を切ってフライパンに移し、ケチャップで炒める。", "完成。"],
    "pickyEatingPoint": "ケチャップの甘みで野菜の苦味や香りを打ち消します。", "nutritionPoint": "ピーマンなどの癖のある野菜も、加熱とケチャップで克服。",
    "imagePrompt": "Japanese style spaghetti Napolitan with small vegetable bits, white plate", "imagePath": "images/recipe8.png"
  },
  {
    "id": 9, "name": "そぼろうどん", "type": "慎重タイプ", "time": 10, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "冷凍うどん", "quantity": "1玉" }, { "name": "鶏ミンチ", "quantity": "100g" }, { "name": "だし汁", "quantity": "150ml" }],
    "steps": ["だし汁でミンチを煮て、灰汁を取る。", "うどんを加えて温める。", "醤油少々で味を整えて完成。"],
    "pickyEatingPoint": "柔らかい麺としっとりした身質のミンチで、噛む負担を減らします。", "nutritionPoint": "うどんは消化が良く、風邪気味の時にもおすすめ。",
    "imagePrompt": "Minced chicken udon noodle soup in a small bowl, warm steam", "imagePath": "images/recipe9.png"
  },
  {
    "id": 10, "name": "野菜入り焼きそば", "type": "慎重タイプ", "time": 15, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "焼きそば麺", "quantity": "1玉" }, { "name": "キャベツ", "quantity": "1枚" }, { "name": "豚こま", "quantity": "50g" }],
    "steps": ["具材をすべて小さく切る。", "フライパンで具材を炒め、麺を加える。", "付属のソースを少なめに使い、完成。"],
    "pickyEatingPoint": "ソースの香ばしさで、野菜の青臭さを消します。", "nutritionPoint": "キャベツは加熱することで甘みが増し、たくさん食べられます。",
    "imagePrompt": "Yakisoba with finely chopped pork and cabbage, kids portion, white dish", "imagePath": "images/recipe10.png"
  },
  {
    "id": 11, "name": "コーン卵雑炊", "type": "慎重タイプ", "time": 10, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "ご飯", "quantity": "150g" }, { "name": "卵", "quantity": "1個" }, { "name": "コーン", "quantity": "適量" }],
    "steps": ["だし汁でご飯を煮る。", "コーンを加え、溶き卵を回し入れる。", "塩少々で味を整えて完成。"],
    "pickyEatingPoint": "卵のふんわりした食感にコーンのプチプチ感が楽しい一品。", "nutritionPoint": "水分も一緒に取れるので、食欲がない時にも最適。",
    "imagePrompt": "Egg and corn rice porridge in a bowl, soft and comforting Japanese meal", "imagePath": "images/recipe11.png"
  },
  {
    "id": 12, "name": "かぼちゃリゾット", "type": "慎重タイプ", "time": 15, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "ご飯", "quantity": "150g" }, { "name": "かぼちゃペースト", "quantity": "50g" }, { "name": "牛乳", "quantity": "100ml" }],
    "steps": ["鍋に牛乳、ご飯、かぼちゃペーストを入れて煮る。", "チーズ少々を加えて溶かす。", "完成。"],
    "pickyEatingPoint": "かぼちゃの甘みとクリーミーな食感で、苦手な野菜も克服。", "nutritionPoint": "かぼちゃのビタミンEと牛乳のカルシウムでパワーアップ。",
    "imagePrompt": "Creamy pumpkin risotto, bright yellow color, small bowl, fresh lighting", "imagePath": "images/recipe12.png"
  },
  {
    "id": 13, "name": "野菜クリームパスタ", "type": "慎重タイプ", "time": 15, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "早茹でパスタ", "quantity": "100g" }, { "name": "白菜", "quantity": "1枚" }, { "name": "牛乳", "quantity": "150ml" }],
    "steps": ["白菜をみじん切りにしてパスタと茹でる。", "お湯を捨てて牛乳、コンソメ少々を加え煮詰める。", "完成。"],
    "pickyEatingPoint": "ミルクのコクで見ための「混ざっている感」を安心感に変えます。", "nutritionPoint": "野菜の旨味が溶け出したスープごと栄養摂取。",
    "imagePrompt": "Creamy pasta with shredded Chinese cabbage, white plate, kid friendly", "imagePath": "images/recipe13.png"
  },
  {
    "id": 14, "name": "そぼろカレー", "type": "慎重タイプ", "time": 15, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "鶏ミンチ", "quantity": "150g" }, { "name": "にんじん・玉ねぎ", "quantity": "各1/4個" }, { "name": "幼児用カレールー", "quantity": "1片" }],
    "steps": ["野菜を極みじん切りにし、ミンチと炒める。", "水少々を加え煮込み、ルーを溶かす。", "ご飯にかけて完成。"],
    "pickyEatingPoint": "カレーの強い香りと味で、野菜の存在感を分からなくします。", "nutritionPoint": "スパイスは食欲を増進させる効果があります。",
    "imagePrompt": "Minced meat curry with finely chopped vegetables over rice, white plate", "imagePath": "images/recipe14.png"
  },
  {
    "id": 15, "name": "ひき肉野菜スープ", "type": "慎重タイプ", "time": 15, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "豚ミンチ", "quantity": "50g" }, { "name": "大根", "quantity": "20g" }, { "name": "にんじん", "quantity": "20g" }],
    "steps": ["野菜を2〜3mm角のサイコロ状に切る。", "ミンチと野菜を煮込み、コンソメで調味。", "完成。"],
    "pickyEatingPoint": "キラキラした小さな野菜の粒で、視覚的な楽しさをプラスします。", "nutritionPoint": "野菜の出汁とお肉の旨味がたっぷり詰まったスープ。",
    "imagePrompt": "Clear soup with finely diced vegetables and meat, in a small mug", "imagePath": "images/recipe15.png"
  },
  {
    "id": 16, "name": "野菜ポタージュ", "type": "慎重タイプ", "time": 15, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "残り物野菜", "quantity": "100g" }, { "name": "牛乳", "quantity": "200ml" }, { "name": "コンソメ", "quantity": "少々" }],
    "steps": ["野菜を柔らかく茹でて、ブレンダーで滑らかにする。", "牛乳で伸ばして温める。", "完成。"],
    "pickyEatingPoint": "形を完全に無くすことで、食感の好き嫌いをリセットします。", "nutritionPoint": "野菜を丸ごと飲める究極の栄養サポートメニュー。",
    "imagePrompt": "Creamy mixed vegetable potage soup in a white bowl, smooth texture", "imagePath": "images/recipe16.png"
  },
  {
    "id": 17, "name": "コーンポタージュ", "type": "慎重タイプ", "time": 5, "cookingStyle": "副菜",
    "ingredients": [{ "name": "クリームコーン缶", "quantity": "1缶" }, { "name": "牛乳", "quantity": "同量" }, { "name": "塩", "quantity": "ひとつまみ" }],
    "steps": ["材料をすべて混ぜて鍋で温める。", "塩少々で味を整えて完成。"],
    "pickyEatingPoint": "甘くて滑らか。誰もが大好きで安心できる味の王道です。", "nutritionPoint": "即効性のエネルギー源になり、朝ごはんにも最適。",
    "imagePrompt": "Rich yellow corn potage soup in a white bowl, warm steam, natural light", "imagePath": "images/recipe17.png"
  },
  {
    "id": 18, "name": "さつまいもポタージュ", "type": "慎重タイプ", "time": 15, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "さつまいも", "quantity": "100g" }, { "name": "牛乳", "quantity": "150ml" }, { "name": "バター", "quantity": "少々" }],
    "steps": ["さつまいもを蒸して潰し、牛乳と混ぜる。", "弱火で温め、仕上げにバターを加える。", "完成。"],
    "pickyEatingPoint": "デザートのような甘さで、お食事の楽しさを伝えます。", "nutritionPoint": "食物繊維豊富で、お腹の調子も整えてくれます。",
    "imagePrompt": "Pale yellow sweet potato potage, thick and creamy, wooden table", "imagePath": "images/recipe18.png"
  },
  {
    "id": 19, "name": "野菜ミートグラタン", "type": "慎重タイプ", "time": 15, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "ひき肉野菜ソース", "quantity": "100g" }, { "name": "豆腐", "quantity": "1/2丁" }, { "name": "チーズ", "quantity": "適量" }],
    "steps": ["水切りした豆腐の上にソースとチーズをのせる。", "トースターで焦げ目がつくまで焼く。", "完成。"],
    "pickyEatingPoint": "豆腐の柔らかな食感とチーズの香ばしさで、野菜を包み込みます。", "nutritionPoint": "豆腐で脂質を抑えつつ、植物性タンパク質も摂取。",
    "imagePrompt": "Tofu gratin with meat sauce and melted cheese, ceramic baking dish", "imagePath": "images/recipe19.png"
  },
  {
    "id": 20, "name": "コーンチーズリゾット", "type": "慎重タイプ", "time": 10, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "ご飯", "quantity": "150g" }, { "name": "コーン", "quantity": "適量" }, { "name": "ピザ用チーズ", "quantity": "30g" }],
    "steps": ["ご飯とコーンをだし汁少々で煮る。", "チーズを加えて余熱で溶かす。", "完成。"],
    "pickyEatingPoint": "とろ〜り伸びるチーズで、お子様の好奇心を刺激します。", "nutritionPoint": "カルシウム豊富なチーズでおやつがわりの補食にも。",
    "imagePrompt": "Cheesy corn risotto, gooey texture, small portion in a cute bowl", "imagePath": "images/recipe20.png"
  },

  // --- 感覚敏感タイプ (21-40) ---
  {
    "id": 21, "name": "そぼろ丼", "type": "感覚敏感タイプ", "time": 10, "cookingStyle": "丼",
    "ingredients": [{ "name": "鶏ミンチ", "quantity": "150g" }, { "name": "醤油", "quantity": "小さじ2" }, { "name": "砂糖", "quantity": "小さじ1" }],
    "steps": ["フライパンでミンチをパラパラになるまで炒める。", "調味料を加え、汁気がなくなるまで煮詰める。", "ご飯にのせて完成。"],
    "pickyEatingPoint": "ポロポロした軽い食感で、粘り気が苦手な子でも食べやすい。", "nutritionPoint": "高タンパク低脂質で消化への負担が少ないです。",
    "imagePrompt": "Minced chicken soboro over rice, minimalist style, Japanese bowl", "imagePath": "images/recipe21.png"
  },
  {
    "id": 22, "name": "鶏そぼろごはん", "type": "感覚敏感タイプ", "time": 10, "cookingStyle": "丼",
    "ingredients": [{ "name": "鶏ミンチ", "quantity": "100g" }, { "name": "生姜汁", "quantity": "少々" }, { "name": "ご飯", "quantity": "200g" }],
    "steps": ["ミンチをパラパラに炒め、生姜汁と醤油で味付け。", "ご飯に混ぜ込み完成。"],
    "pickyEatingPoint": "生姜の香りで、お肉の独特の匂いを消して食べやすくします。", "nutritionPoint": "生姜は体を温め、免疫力を高める効果が期待できます。",
    "imagePrompt": "Mixed rice with chicken soboro, wooden bowl, soft natural light", "imagePath": "images/recipe22.png"
  },
  {
    "id": 23, "name": "たまご丼", "type": "感覚敏感タイプ", "time": 5, "cookingStyle": "丼",
    "ingredients": [{ "name": "卵", "quantity": "2個" }, { "name": "だし汁", "quantity": "100ml" }, { "name": "醤油", "quantity": "小さじ1/2" }],
    "steps": ["だし汁を沸騰させ、溶き卵を回し入れる。", "半熟状になったらご飯にのせる。", "完成。"],
    "pickyEatingPoint": "ツルッとした滑らかな食感で、飲み込みやすさを重視。", "nutritionPoint": "短時間で作れる完全栄養食品の卵レシピ。",
    "imagePrompt": "Soft scrambled egg donburi, yellow and fluffy, ceramic bowl", "imagePath": "images/recipe23.png"
  },
  {
    "id": 24, "name": "親子丼", "type": "感覚敏感タイプ", "time": 15, "cookingStyle": "丼",
    "ingredients": [{ "name": "鶏肉", "quantity": "100g" }, { "name": "卵", "quantity": "2個" }, { "name": "だし汁", "quantity": "150ml" }],
    "steps": ["鶏肉を一口大より小さめに切り、だし汁で煮る。", "溶き卵でとじて完成。"],
    "pickyEatingPoint": "お肉を小さく、柔らかく煮ることで噛む時の不快感を減らします。", "nutritionPoint": "タンパク質の摂取量をしっかり確保できる定番メニュー。",
    "imagePrompt": "Oyako-don (Chicken and egg bowl) for kids, tender pieces, white dish", "imagePath": "images/recipe24.png"
  },
  {
    "id": 25, "name": "コーンごはん", "type": "感覚敏感タイプ", "time": 5, "cookingStyle": "丼",
    "ingredients": [{ "name": "ご飯", "quantity": "200g" }, { "name": "コーン", "quantity": "適量" }, { "name": "バター", "quantity": "少々" }],
    "steps": ["ご飯にコーンとバターを混ぜる。", "お好みで少しの塩を振って完成。"],
    "pickyEatingPoint": "シンプルな味と色。複雑なものが苦手なタイプに安心を与えます。", "nutritionPoint": "バターの脂質が、エネルギー効率を助けます。",
    "imagePrompt": "Simple corn rice with a small piece of butter melting on top, white bowl", "imagePath": "images/recipe25.png"
  },
  {
    "id": 26, "name": "バターコーンライス", "type": "感覚敏感タイプ", "time": 10, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "コーン", "quantity": "100g" }, { "name": "ご飯", "quantity": "200g" }, { "name": "バター", "quantity": "10g" }],
    "steps": ["フライパンでコーンをバターで炒める。", "ご飯を加えてさっと合わせる。", "完成。"],
    "pickyEatingPoint": "バターをしっかり加熱することで、香ばしくワクワクする香りに。", "nutritionPoint": "糖質と脂質を手軽に補給できる元気が出るレシピ。",
    "imagePrompt": "Steaming hot corn rice with butter, Japanese home cooking style", "imagePath": "images/recipe26.png"
  },
  {
    "id": 27, "name": "チーズリゾット", "type": "感覚敏感タイプ", "time": 10, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "ご飯", "quantity": "150g" }, { "name": "牛乳", "quantity": "100ml" }, { "name": "粉チーズ", "quantity": "適量" }],
    "steps": ["牛乳とご飯を煮る。", "チーズ、コンソメ少々を加え、とろみがついたら完成。"],
    "pickyEatingPoint": "とろりとしたクリーム状の食感が、口の中を優しく包みます。", "nutritionPoint": "乳製品のカルシウムと良質な脂質で栄養補完。",
    "imagePrompt": "Creamy cheese risotto, simple look, kid friendly portion", "imagePath": "images/recipe27.png"
  },
  {
    "id": 28, "name": "たまご雑炊", "type": "感覚敏感タイプ", "time": 5, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "ご飯", "quantity": "150g" }, { "name": "卵", "quantity": "1個" }, { "name": "だし汁", "quantity": "150ml" }],
    "steps": ["だし汁でご飯をクタクタに煮る。", "溶き卵を加え、蓋をして蒸らす。", "完成。"],
    "pickyEatingPoint": "極限まで柔らかくすることで、噛むストレスをゼロにします。", "nutritionPoint": "水分をたっぷり含み、体温を上げる効果があります。",
    "imagePrompt": "Soft egg rice porridge, comforting, steam rising from ceramic bowl", "imagePath": "images/recipe28.png"
  },
  {
    "id": 29, "name": "鶏雑炊", "type": "感覚敏感タイプ", "time": 15, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "鶏ミンチ", "quantity": "50g" }, { "name": "ご飯", "quantity": "150g" }, { "name": "だし汁", "quantity": "200ml" }],
    "steps": ["だし汁でミンチをよく煮てから、ご飯を加える。", "柔らかくなるまで煮込み、醤油少々で味付け。", "完成。"],
    "pickyEatingPoint": "お肉の旨味がご飯に染み込み、バラバラせず一体感があります。", "nutritionPoint": "アミノ酸豊富で、成長ホルモンの分泌をサポートします。",
    "imagePrompt": "Rice porridge with shredded chicken, white bowl, minimal garnish", "imagePath": "images/recipe29.png"
  },
  {
    "id": 30, "name": "豆腐あんかけごはん", "type": "感覚敏感タイプ", "time": 10, "cookingStyle": "丼",
    "ingredients": [{ "name": "絹豆腐", "quantity": "1/2丁" }, { "name": "出汁", "quantity": "100ml" }, { "name": "片栗粉", "quantity": "小さじ1/2" }],
    "steps": ["豆腐を小さく切り、出汁で温める。", "水溶き片栗粉でとろみをつけ、ご飯ににかける。", "完成。"],
    "pickyEatingPoint": "「とろとろ」の魔法で、飲み込み運動をサポートします。", "nutritionPoint": "大豆のサポニンが腸内の環境を整えるのに役立ちます。",
    "imagePrompt": "Silken tofu with thickened sauce over rice, translucent and soft", "imagePath": "images/recipe30.png"
  },
  {
    "id": 31, "name": "クリームうどん", "type": "感覚敏感タイプ", "time": 10, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "冷凍うどん", "quantity": "1玉" }, { "name": "牛乳", "quantity": "150ml" }, { "name": "コンソメ", "quantity": "少々" }],
    "steps": ["牛乳でうどんを煮込む。", "とろみがつくまで加熱し、塩少々で完成。"],
    "pickyEatingPoint": "うどんのツルツル感にミルクのまろやかさをコーティング。", "nutritionPoint": "エネルギー源のうどんを無理なくおしゃれに。カルシウムも豊富。",
    "imagePrompt": "Creamy white udon, mild look, in a shallow bowl, bright light", "imagePath": "images/recipe31.png"
  },
  {
    "id": 32, "name": "コーンうどん", "type": "感覚敏感タイプ", "time": 10, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "うどん", "quantity": "1玉" }, { "name": "コーン缶", "quantity": "適量" }, { "name": "白だし", "quantity": "小さじ1/2" }],
    "steps": ["うどんを茹で、コーンをたっぷりのせる。", "白だし汁を注いで完成。"],
    "pickyEatingPoint": "好きなコーンが見た目の安心感を引き立てます。", "nutritionPoint": "食物繊維が含まれるコーンは、早食い防止にも繋がります。",
    "imagePrompt": "Noodle soup topped with lots of sweet corn, clear broth, small portion", "imagePath": "images/recipe32.png"
  },
  {
    "id": 33, "name": "卵うどん", "type": "感覚敏感タイプ", "time": 5, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "うどん", "quantity": "1玉" }, { "name": "溶き卵", "quantity": "1個分" }, { "name": "薄口醤油", "quantity": "小さじ1/2" }],
    "steps": ["だし汁でうどんを茹で、最後に卵を回し入れる。", "火を止めて蓋をし1分待つとふんわり完成。"],
    "pickyEatingPoint": "喉ごしの良さを最優先。引っ掛かりがない滑らかさです。", "nutritionPoint": "卵とうどんの組み合わせは、最高のエネルギーチャージに。",
    "imagePrompt": "Warm udon with fluffy scrambled egg, clear Japanese dashi broth", "imagePath": "images/recipe33.png"
  },
  {
    "id": 34, "name": "ミルクスープ", "type": "感覚敏感タイプ", "time": 5, "cookingStyle": "副菜",
    "ingredients": [{ "name": "牛乳", "quantity": "200ml" }, { "name": "コンソメ", "quantity": "少々" }, { "name": "コーン", "quantity": "適量" }],
    "steps": ["材料をすべて混ぜ、レンチン1分半。", "完成。"],
    "pickyEatingPoint": "ミルクのクリーミーさで「苦い」「酸っぱい」を完全に封印。", "nutritionPoint": "タンパク質を飲み物として手軽に摂取できる朝向けメニュー。",
    "imagePrompt": "Warm milk soup with floating corn, white mug, soft morning light", "imagePath": "images/recipe34.png"
  },
  {
    "id": 35, "name": "コーンスープ", "type": "感覚敏感タイプ", "time": 5, "cookingStyle": "副菜",
    "ingredients": [{ "name": "コーンクリーム缶", "quantity": "100g" }, { "name": "牛乳", "quantity": "100ml" }, { "name": "塩", "quantity": "ひとつまみ" }],
    "steps": ["材料を混ぜて温めるだけで完成。"],
    "pickyEatingPoint": "ザラザラ感を排した滑らかな口当たりにこだわりました。", "nutritionPoint": "エネルギーになりやすい糖質をおいしく供給。",
    "imagePrompt": "Smooth yellow corn soup, minimalist white bowl, kids portion", "imagePath": "images/recipe35.png"
  },
  {
    "id": 36, "name": "ポテトスープ", "type": "感覚敏感タイプ", "time": 15, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "じゃがいも", "quantity": "1個" }, { "name": "牛乳", "quantity": "200ml" }, { "name": "コンソメ", "quantity": "適量" }],
    "steps": ["じゃがいもを蒸して潰す。", "牛乳と混ぜて温めるだけで完成。"],
    "pickyEatingPoint": "じゃがいものホクホク感をミルクで伸ばし、幸福感のある食感に。", "nutritionPoint": "腹持ちの良いじゃがいもで、お腹の満足感を高めます。",
    "imagePrompt": "Creamy potato soup, off-white color, simple styling, wooden spoon", "imagePath": "images/recipe36.png"
  },
  {
    "id": 37, "name": "さつまいもスープ", "type": "感覚敏感タイプ", "time": 15, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "さつまいも", "quantity": "100g" }, { "name": "牛乳", "quantity": "100ml" }, { "name": "塩", "quantity": "少々" }],
    "steps": ["さつまいもを柔らかく茹で、裏ごしする（またはブレンダー）。", "牛乳で伸ばして完成。"],
    "pickyEatingPoint": "デザート感覚。安心できる「甘み」を最大限に利用します。", "nutritionPoint": "カリウムが含まれており、塩分バランスを整えるのに役立ちます。",
    "imagePrompt": "Sweet potato soup in a small cup, pale yellow, natural light", "imagePath": "images/recipe37.png"
  },
  {
    "id": 38, "name": "豆腐スープ", "type": "感覚敏感タイプ", "time": 5, "cookingStyle": "副菜",
    "ingredients": [{ "name": "豆腐", "quantity": "1/4丁" }, { "name": "白だし", "quantity": "小さじ1/2" }, { "name": "お湯", "quantity": "150ml" }],
    "steps": ["お椀で白だしをお湯で割る。", "豆腐を手で崩しながら入れて完成。"],
    "pickyEatingPoint": "見た目を変えない。いつもと同じ豆腐の安心感を大切に。", "nutritionPoint": "疲れた胃腸に染み渡るデトックス効果も期待できる一品。",
    "imagePrompt": "Tofu blocks in a clear broth, minimalist Japanese soup bowl", "imagePath": "images/recipe38.png"
  },
  {
    "id": 39, "name": "鶏団子スープ", "type": "感覚敏感タイプ", "time": 15, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "鶏ミンチ", "quantity": "100g" }, { "name": "片栗粉", "quantity": "小さじ1" }, { "name": "だし汁", "quantity": "200ml" }],
    "steps": ["ミンチに片栗粉を混ぜて丸める。", "沸騰しただし汁に落とし入れて火を通す。", "完成。"],
    "pickyEatingPoint": "片栗粉を加えることで、驚くほどふわふわの団子になります。", "nutritionPoint": "噛み切りやすさを重視したタンパク質メニュー。",
    "imagePrompt": "Fluffy chicken meatballs in soup, clear soup, steam, cute ceramic bowl", "imagePath": "images/recipe39.png"
  },
  {
    "id": 40, "name": "コーンクリームパスタ", "type": "感覚敏感タイプ", "time": 10, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "パスタ", "quantity": "100g" }, { "name": "コーンクリーム缶", "quantity": "50g" }, { "name": "牛乳", "quantity": "50ml" }],
    "steps": ["茹でたパスタに材料をすべて和え、弱火で加熱する。", "完成。"],
    "pickyEatingPoint": "全ての麺がコーンの甘みでコーティングされ、食感が均一に。", "nutritionPoint": "野菜の甘味をソースにして、主食をパワーアップ。",
    "imagePrompt": "Pasta with yellow corn cream sauce, simple and bright, white plate", "imagePath": "images/recipe40.png"
  },
  {
    "id": 41, "name": "ミニおにぎり", "type": "集中力切れタイプ", "time": 5, "cookingStyle": "手づかみ",
    "ingredients": [{ "name": "ご飯", "quantity": "200g" }, { "name": "ふりかけ", "quantity": "少々" }, { "name": "海苔", "quantity": "適量" }],
    "steps": ["ご飯にふりかけを混ぜる。", "ラップを使って一口サイズに丸める。", "小さく切った海苔を巻いて完成。"],
    "pickyEatingPoint": "「一口で食べられた！」という達成感を何度も味わうことで、最後まで楽しく食べられます。", "nutritionPoint": "手づかみ食べは、手と口の協調性を育む大切な練習になります。",
    "imagePrompt": "Multiple tiny rice balls with colorful sprinkles on a wooden plate, natural sunlight", "imagePath": "images/recipe41.png"
  },
  {
    "id": 42, "name": "焼きおにぎり", "type": "集中力切れタイプ", "time": 10, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "ご飯", "quantity": "200g" }, { "name": "醤油", "quantity": "小さじ1" }, { "name": "ごま油", "quantity": "少々" }],
    "steps": ["ご飯を小さなおにぎりにする。", "フライパンにごま油を熱し、おにぎりを並べる。", "両面に醤油を塗りながら、香ばしく焼いて完成。"],
    "pickyEatingPoint": "醤油の香ばしさとカリッとした食感で、食事への興味を引き戻します。", "nutritionPoint": "香ばしい香りは、食欲を刺激し、唾液の分泌を促します。",
    "imagePrompt": "Mini grilled rice balls (yaki-onigiri), golden brown, steaming, wooden plate", "imagePath": "images/recipe42.png"
  },
  {
    "id": 43, "name": "コーンおにぎり", "type": "集中力切れタイプ", "time": 5, "cookingStyle": "手づかみ",
    "ingredients": [{ "name": "ご飯", "quantity": "200g" }, { "name": "コーン", "quantity": "大さじ2" }, { "name": "塩", "quantity": "少々" }],
    "steps": ["温かいご飯にコーンと塩を混ぜる。", "一口サイズの丸型に握る。", "完成。"],
    "pickyEatingPoint": "見た目に分かりやすいコーンがアクセント。遊び感覚でパクパク食べられます。", "nutritionPoint": "コーンのビタミンB1は、糖質のエネルギー代謝を助けます。",
    "imagePrompt": "Mini rice balls mixed with bright yellow corn, white plate, kid friendly", "imagePath": "images/recipe43.png"
  },
  {
    "id": 44, "name": "チーズおにぎり", "type": "集中力切れタイプ", "time": 5, "cookingStyle": "手づかみ",
    "ingredients": [{ "name": "ご飯", "quantity": "200g" }, { "name": "プロセスチーズ", "quantity": "1個" }, { "name": "醤油", "quantity": "数滴" }],
    "steps": ["チーズを5mm角に切る。", "ご飯にチーズと醤油を混ぜる。", "小さく握って完成。"],
    "pickyEatingPoint": "チーズの旨味とコクで、飽きずに最後まで食べ進められます。", "nutritionPoint": "チーズでカルシウムを補給。ご飯との相性も抜群です。",
    "imagePrompt": "Tiny rice balls with small cubes of cheese inside, rustic style", "imagePath": "images/recipe44.png"
  },
  {
    "id": 45, "name": "野菜チヂミ", "type": "集中力切れタイプ", "time": 15, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "小麦粉", "quantity": "50g" }, { "name": "にら・にんじん", "quantity": "少々" }, { "name": "水", "quantity": "50ml" }],
    "steps": ["野菜を細かく刻む。", "粉と水、野菜を混ぜる。", "フライパンで薄く広げて両面カリッと焼く。"],
    "pickyEatingPoint": "ピザのような見た目と、手でちぎって食べられる気軽さがポイント。", "nutritionPoint": "焼き野菜の香ばしさで、野菜の苦味を感じにくくなります。",
    "imagePrompt": "Sliced mini Korean pancakes (chijimi) with vegetables, golden and crispy", "imagePath": "images/recipe45.png"
  },
  {
    "id": 46, "name": "コーンチヂミ", "type": "集中力切れタイプ", "time": 10, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "コーン缶", "quantity": "50g" }, { "name": "片栗粉", "quantity": "大さじ2" }, { "name": "卵", "quantity": "1個" }],
    "steps": ["材料をすべて混ぜ合わせる。", "フライパンに小さく広げて両面焼く。", "完成。"],
    "pickyEatingPoint": "甘いコーンが主役。もちもちした食感でおやつのように食べられます。", "nutritionPoint": "卵とコーンの組み合わせで、鉄分と食物繊維を同時に摂取。",
    "imagePrompt": "Small corn fritters on a white dish, bright yellow, natural daylight", "imagePath": "images/recipe46.png"
  },
  {
    "id": 47, "name": "さつまいもチヂミ", "type": "集中力切れタイプ", "time": 15, "cookingStyle": "おやつ",
    "ingredients": [{ "name": "さつまいも", "quantity": "100g" }, { "name": "小麦粉", "quantity": "大さじ2" }, { "name": "牛乳", "quantity": "少々" }],
    "steps": ["さつまいもを千切りにする。", "粉と牛乳を混ぜた生地にさつまいもを合わせる。", "多めの油でカリッと揚げ焼きにする。"],
    "pickyEatingPoint": "外はカリカリ、中はホクホク。お菓子感覚で食べ飽きません。", "nutritionPoint": "ビタミンC豊富なさつまいもは、加熱しても壊れにくいのが特徴。",
    "imagePrompt": "Crispy sweet potato pancakes, golden edges, flat ceramic plate", "imagePath": "images/recipe47.png"
  },
  {
    "id": 48, "name": "豆腐ナゲット", "type": "集中力切れタイプ", "time": 15, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "豆腐", "quantity": "1/2丁" }, { "name": "鶏ミンチ", "quantity": "100g" }, { "name": "片栗粉", "quantity": "大さじ1" }],
    "steps": ["水切りした豆腐とミンチ、粉を混ぜる。", "小判型にしてフライパンで焼く。", "完成。"],
    "pickyEatingPoint": "ふわふわ食感で噛みやすく、パクパクとリズム良く食べられます。", "nutritionPoint": "大豆と鶏肉のダブルタンパク質で、体づくりをサポート。",
    "imagePrompt": "Soft tofu and chicken nuggets, golden surface, small bowl", "imagePath": "images/recipe48.png"
  },
  {
    "id": 49, "name": "鶏ナゲット", "type": "集中力切れタイプ", "time": 15, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "鶏むね肉", "quantity": "150g" }, { "name": "卵", "quantity": "1/2個" }, { "name": "マヨネーズ", "quantity": "小さじ1" }],
    "steps": ["鶏肉を叩いて細かくするか、ミンチにする。", "卵、マヨネーズ、少しの塩を混ぜて丸める。", "フライパンで揚げ焼きにする。"],
    "pickyEatingPoint": "マヨネーズ効果でお肉を柔らかく。手づかみの王道メニューです。", "nutritionPoint": "低カロリー高タンパクな胸肉で、健やかな成長を。",
    "imagePrompt": "Homemade chicken nuggets, simple presentation, white plate", "imagePath": "images/recipe49.png"
  },
  {
    "id": 50, "name": "ツナナゲット", "type": "集中力切れタイプ", "time": 10, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "ツナ缶", "quantity": "1缶" }, { "name": "豆腐", "quantity": "1/4丁" }, { "name": "パン粉", "quantity": "大さじ2" }],
    "steps": ["材料をすべてボウルで混ぜる。", "一口サイズに丸める。", "多めの油をひいたフライパンで焼く。"],
    "pickyEatingPoint": "ツナの旨味が詰まっており、調味料が少なくても美味しく食べられます。", "nutritionPoint": "魚を手軽に食べられる。DHAをしっかり摂取。",
    "imagePrompt": "Mini tuna nuggets, crispy texture, small round shapes, light background", "imagePath": "images/recipe50.png"
  },
  {
    "id": 51, "name": "ミニハンバーグ", "type": "集中力切れタイプ", "time": 15, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "合挽き肉", "quantity": "150g" }, { "name": "パン粉", "quantity": "大さじ1" }, { "name": "牛乳", "quantity": "少々" }],
    "steps": ["材料をよく練り、一口サイズをたくさん作る。", "フライパンで焼き、火を通す。", "ケチャップで味付けして完成。"],
    "pickyEatingPoint": "小さなハンバーグは「次はこれ！」と選ぶ楽しさがあります。", "nutritionPoint": "鉄分とタンパク質を同時にとれる元気の源レシピ。",
    "imagePrompt": "Multiple bite-sized hamburgers, glossy sauce, white ceramic dish", "imagePath": "images/recipe51.png"
  },
  {
    "id": 52, "name": "ポテトボール", "type": "集中力切れタイプ", "time": 15, "cookingStyle": "おやつ",
    "ingredients": [{ "name": "じゃがいも", "quantity": "1個" }, { "name": "片栗粉", "quantity": "大さじ1" }, { "name": "粉チーズ", "quantity": "少々" }],
    "steps": ["じゃがいもを蒸して潰す。", "粉とチーズを混ぜて丸める。", "フライパンでコロコロ転がしながら焼く。"],
    "pickyEatingPoint": "丸い見た目が可愛らしく、遊びの延長で食事を楽しめます。", "nutritionPoint": "ビタミンCとミネラルを補給。おやつとしても優秀。",
    "imagePrompt": "Round potato balls on a wooden tray, golden and soft", "imagePath": "images/recipe52.png"
  },
  {
    "id": 53, "name": "コーンボール", "type": "集中力切れタイプ", "time": 10, "cookingStyle": "おやつ",
    "ingredients": [{ "name": "コーン", "quantity": "50g" }, { "name": "小麦粉", "quantity": "大さじ2" }, { "name": "水", "quantity": "少々" }],
    "steps": ["材料をすべて混ぜる。", "スプーンですくって揚げ焼きにする。", "完成。"],
    "pickyEatingPoint": "コーンの粒々した感触と、スナックのような軽さが魅力。", "nutritionPoint": "野菜嫌いの子でも手が伸びる、コーンの自然な甘み。",
    "imagePrompt": "Golden corn fritter balls in a small basket, rustic wooden table", "imagePath": "images/recipe53.png"
  },
  {
    "id": 54, "name": "チーズポテト", "type": "集中力切れタイプ", "time": 10, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "じゃがいも", "quantity": "1個" }, { "name": "スライスチーズ", "quantity": "1枚" }, { "name": "塩", "quantity": "少々" }],
    "steps": ["じゃがいもを棒状に切り、レンジで2分加熱。", "フライパンで焼き、最後にチーズを絡める。", "完成。"],
    "pickyEatingPoint": "ポテトフライのような感覚で、テンションが上がる一品。", "nutritionPoint": "チーズの塩気で食が進み、エネルギー源になります。",
    "imagePrompt": "Potato sticks with melted cheese, kid portion on a colorful plate", "imagePath": "images/recipe54.png"
  },
  {
    "id": 55, "name": "ミニお好み焼き", "type": "集中力切れタイプ", "time": 15, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "小麦粉", "quantity": "50g" }, { "name": "キャベツ", "quantity": "1枚" }, { "name": "豚こま", "quantity": "少量" }],
    "steps": ["細かくしたキャベツと粉、水を混ぜる。", "ホットプレートのように小さく広げて焼く。", "ソースを少し塗って完成。"],
    "pickyEatingPoint": "一口お好み焼きは、お祭り気分で食事時間を盛り上げます。", "nutritionPoint": "キャベツがたっぷり取れる、隠れた野菜摂取メニュー。",
    "imagePrompt": "Several mini okonomiyaki circles, brown sauce ripples, daylight", "imagePath": "images/recipe55.png"
  },
  {
    "id": 56, "name": "たまごサンド", "type": "集中力切れタイプ", "time": 10, "cookingStyle": "手づかみ",
    "ingredients": [{ "name": "食パン", "quantity": "1枚" }, { "name": "ゆで卵", "quantity": "1個" }, { "name": "マヨネーズ", "quantity": "少量" }],
    "steps": ["ゆで卵を潰してマヨネーズと和える。", "パンで挟み、耳を切り落として細長く切る。", "完成。"],
    "pickyEatingPoint": "細長く切る（スティック状）ことで、持ちやすく、集中が途切れません。", "nutritionPoint": "卵のレシチンは、脳の活性化をサポートすると言われています。",
    "imagePrompt": "Mini egg salad sandwiches, stick style, white bread, natural light", "imagePath": "images/recipe56.png"
  },
  {
    "id": 57, "name": "ツナサンド", "type": "集中力切れタイプ", "time": 10, "cookingStyle": "手づかみ",
    "ingredients": [{ "name": "食パン", "quantity": "1枚" }, { "name": "ツナ", "quantity": "1/2缶" }, { "name": "マヨネーズ", "quantity": "少々" }],
    "steps": ["オイルをきったツナにマヨを混ぜる。", "パンで挟み、一口サイズの正方形に切る。", "完成。"],
    "pickyEatingPoint": "小さく整えられた形が、食べようという意欲を高めます。", "nutritionPoint": "忙しい朝でもバランス良く栄養補給できる優秀メニュー。",
    "imagePrompt": "Small Tuna sandwiches cut into triangles, simple presentation", "imagePath": "images/recipe57.png"
  },
  {
    "id": 58, "name": "チーズトースト", "type": "集中力切れタイプ", "time": 5, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "食パン", "quantity": "1枚" }, { "name": "ピザ用チーズ", "quantity": "20g" }, { "name": "ケチャップ", "quantity": "少々" }],
    "steps": ["パンにケチャップ、チーズをのせる。", "トースターで3分焼く。", "縦に3本に切り分けて完成。"],
    "pickyEatingPoint": "チーズが伸びる楽しさが、食事をエンタメに変えます。", "nutritionPoint": "乳製品を手軽に。香ばしく焼くのがコツです。",
    "imagePrompt": "Toasted bread strips with melted cheese, crispy and hot", "imagePath": "images/recipe58.png"
  },
  {
    "id": 59, "name": "コーンマヨトースト", "type": "集中力切れタイプ", "time": 5, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "食パン", "quantity": "1枚" }, { "name": "コーン", "quantity": "大さじ1" }, { "name": "マヨネーズ", "quantity": "少々" }],
    "steps": ["コーンとマヨネーズを混ぜ、パンに広げる。", "トースターで焼き目がつくまで焼く。", "完成。"],
    "pickyEatingPoint": "みんな大好きな最強コンビ。迷わず手が伸びる味付け。", "nutritionPoint": "糖質補給にコーンの栄養をプラス。朝のエネルギー補給に。",
    "imagePrompt": "Corn and mayonnaise toast, golden edges, simple white plate", "imagePath": "images/recipe59.png"
  },
  {
    "id": 60, "name": "ミニピザトースト", "type": "集中力切れタイプ", "time": 10, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "食パン", "quantity": "1枚" }, { "name": "ハム", "quantity": "1枚" }, { "name": "チーズ", "quantity": "適量" }],
    "steps": ["ハムを細かく切る。", "パンに具をのせて、トースターで焼く。", "4等分の正方形に切って完成。"],
    "pickyEatingPoint": "色とりどりの具が乗ったミニピザ。見た目の華やかさで目を奪います。", "nutritionPoint": "短時間でタンパク質と主食が同時に取れる時短レシピ。",
    "imagePrompt": "Mini pizza toasts with ham and cheese, squares, kids friendly", "imagePath": "images/recipe60.png"
  },
  {
    "id": 61, "name": "野菜ミートソース", "type": "好き嫌い固定タイプ", "time": 15, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "合挽き肉", "quantity": "150g" }, { "name": "玉ねぎ・にんじん", "quantity": "計1/2個" }, { "name": "カットトマト缶", "quantity": "1/2缶" }, { "name": "コンソメ", "quantity": "小さじ1" }],
    "steps": ["野菜をすりおろすか、極みじん切りにする。", "肉を炒め、野菜、トマト缶、コンソメを加える。", "水分が飛ぶまで煮込む。", "パスタやご飯にかけて完成。"],
    "pickyEatingPoint": "大好きなメニューに苦手な野菜を「隠し味」として溶け込ませることで、抵抗なく食べられます。", "nutritionPoint": "煮込むことで野菜のカサが減り、驚くほどたくさんの種類を摂取できます。",
    "imagePrompt": "Rich meat sauce with blended vegetables, served on short pasta, rustic style, daylight", "imagePath": "images/recipe61.png"
  },
  {
    "id": 62, "name": "野菜カレー", "type": "好き嫌い固定タイプ", "time": 15, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "豚こま", "quantity": "100g" }, { "name": "すりおろし野菜", "quantity": "50g" }, { "name": "幼児用カレールー", "quantity": "1片" }],
    "steps": ["野菜をすべてすりおろす。", "肉と野菜を炒め、水を加えて煮る。", "ルーを溶かして完成。"],
    "pickyEatingPoint": "カレーの強い風味とすりおろし野菜の甘みで、野菜嫌いを克服します。", "nutritionPoint": "複数の野菜のエキスが溶け出し、一皿で多角的な栄養補給が可能に。",
    "imagePrompt": "Kids curry with invisible blended vegetables, colorful plate, wooden spoon", "imagePath": "images/recipe62.png"
  },
  {
    "id": 63, "name": "野菜ナポリタン", "type": "好き嫌い固定タイプ", "time": 15, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "パスタ", "quantity": "100g" }, { "name": "すりおろしにんじん", "quantity": "20g" }, { "name": "ケチャップ", "quantity": "大さじ2" }],
    "steps": ["茹でたパスタを炒める。", "すりおろしたにんじんをケチャップのソースに混ぜて絡める。", "完成。"],
    "pickyEatingPoint": "にんじんの色がケチャップの色と同化するため、見た目の違和感がありません。", "nutritionPoint": "油で炒めることで、にんじんのビタミンAの吸収率が高まります。",
    "imagePrompt": "Napolitan pasta with tiny blended carrots, white bowl, warm light", "imagePath": "images/recipe63.png"
  },
  {
    "id": 64, "name": "野菜チャーハン", "type": "好き嫌い固定タイプ", "time": 10, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "ご飯", "quantity": "200g" }, { "name": "卵", "quantity": "1個" }, { "name": "細かくした野菜", "quantity": "30g" }],
    "steps": ["野菜を、お米の粒と同じくらいの大きさに刻む。", "卵と一緒に強火で一気に炒める。", "完成。"],
    "pickyEatingPoint": "お米と野菜の大きさを揃えることで、口の中で選別されるのを防ぎます。", "nutritionPoint": "パラパラのチャーハンは噛む回数が増え、満腹中枢を刺激します。",
    "imagePrompt": "Fried rice where vegetables are cut as small as rice grains, colorful but integrated", "imagePath": "images/recipe64.png"
  },
  {
    "id": 65, "name": "野菜オムライス", "type": "好き嫌い固定タイプ", "time": 15, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "鶏ミンチ", "quantity": "50g" }, { "name": "すりおろし野菜", "quantity": "30g" }, { "name": "ご飯", "quantity": "200g" }],
    "steps": ["ご飯にミンチと野菜を混ぜて炒め、ケチャップで調味する。", "薄焼き卵で包む。", "完成。"],
    "pickyEatingPoint": "大好きなたまごの中に、こっそり栄養を詰め込んだレスキューメニュー。", "nutritionPoint": "野菜の食物繊維を、卵のタンパク質と一緒にバランスよく摂取。",
    "imagePrompt": "Mini omurice with hidden vegetable rice inside, white plate, simple", "imagePath": "images/recipe65.png"
  },
  {
    "id": 66, "name": "野菜そぼろ丼", "type": "好き嫌い固定タイプ", "time": 10, "cookingStyle": "丼",
    "ingredients": [{ "name": "豚ミンチ", "quantity": "100g" }, { "name": "みじん切りにんじん", "quantity": "20g" }, { "name": "醤油・砂糖", "quantity": "各小さじ1" }],
    "steps": ["ミンチとにんじんをパラパラになるまで炒め煮する。", "ご飯にのせる。", "完成。"],
    "pickyEatingPoint": "にんじんをミンチの「粒」の一部に見立てて、警戒心をそらします。", "nutritionPoint": "豚肉のビタミンB群とにんじんを合わせて免疫力アップ。",
    "imagePrompt": "Pork soboro with tiny carrot bits on rice, white bowl, daylight", "imagePath": "images/recipe66.png"
  },
  {
    "id": 67, "name": "野菜ハヤシライス", "type": "好き嫌い固定タイプ", "time": 15, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "牛肉こま", "quantity": "50g" }, { "name": "玉ねぎペースト", "quantity": "50g" }, { "name": "ハヤシルー", "quantity": "1片" }],
    "steps": ["玉ねぎをレンジで加熱し、飴色になるまで炒める（またはペースト使用）。", "肉を加え、水を足してルーを溶かす。", "完成。"],
    "pickyEatingPoint": "玉ねぎの甘みがソースに溶け込み、苦手を感じさせない深い味わいに。", "nutritionPoint": "玉ねぎの硫化アリルは、ビタミンB1の吸収を助けてくれます。",
    "imagePrompt": "Hayashi rice with integrated onion sauce, kids portion, white bowl", "imagePath": "images/recipe67.png"
  },
  {
    "id": 68, "name": "野菜ドリア", "type": "好き嫌い固定タイプ", "time": 15, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "ご飯", "quantity": "150g" }, { "name": "ホワイトソース", "quantity": "50g" }, { "name": "刻み野菜", "quantity": "少量" }],
    "steps": ["ご飯に細かな野菜を混ぜる。", "ソースとチーズをのせてトースターで焼く。", "完成。"],
    "pickyEatingPoint": "ホワイトソースとチーズの濃厚なコクが、野菜の癖を包み込みます。", "nutritionPoint": "牛乳由来の栄養素をソースからたっぷり補給。",
    "imagePrompt": "Doria with hidden vegetables under cheese, ceramic dish, bubbling cheese", "imagePath": "images/recipe68.png"
  },
  {
    "id": 69, "name": "野菜グラタン", "type": "好き嫌い固定タイプ", "time": 15, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "マカロニ", "quantity": "50g" }, { "name": "すりおろし野菜", "quantity": "30g" }, { "name": "牛乳", "quantity": "100ml" }],
    "steps": ["ゆでたマカロニに野菜を混ぜたソースをかける。", "チーズをのせて焼く。", "完成。"],
    "pickyEatingPoint": "「美味しいホワイトソース」として野菜を丸ごと食べる作戦。", "nutritionPoint": "カルシウムと野菜のビタミンを効率よくセットで。",
    "imagePrompt": "Macaroni gratin with blended veggie sauce, golden brown crust, white dish", "imagePath": "images/recipe69.png"
  },
  {
    "id": 70, "name": "野菜クリームパスタ", "type": "好き嫌い固定タイプ", "time": 15, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "パスタ", "quantity": "100g" }, { "name": "ほうれん草ペースト", "quantity": "20g" }, { "name": "牛乳", "quantity": "100ml" }],
    "steps": ["牛乳に野菜ペーストを混ぜてソースを作る。", "茹でたパスタと和える。", "完成。"],
    "pickyEatingPoint": "綺麗なグリーンのソースとして提案。葉物野菜の繊維感を無くすのがコツ。", "nutritionPoint": "ほうれん草の栄養をまるごとソースに移しました。",
    "imagePrompt": "Green vegetable cream pasta, soft and mild look, white plate", "imagePath": "images/recipe70.png"
  },
  {
    "id": 71, "name": "野菜焼きうどん", "type": "好き嫌い固定タイプ", "time": 15, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "うどん", "quantity": "1玉" }, { "name": "しらす", "quantity": "10g" }, { "name": "キャベツ", "quantity": "10g" }],
    "steps": ["うどんと具材を細かく刻んで炒める。", "醤油と鰹節で味付け。", "完成。"],
    "pickyEatingPoint": "鰹節の強い旨味で、野菜の存在を良い意味でぼかします。", "nutritionPoint": "しらすのカルシウムと野菜の食物繊維を一皿で。",
    "imagePrompt": "Yaki-udon with finely shredded cabbage and bonito flakes, kids bowl", "imagePath": "images/recipe71.png"
  },
  {
    "id": 72, "name": "野菜焼きそば", "type": "好き嫌い固定タイプ", "time": 10, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "焼きそば麺", "quantity": "1玉" }, { "name": "豚ミンチ", "quantity": "50g" }, { "name": "もやし", "quantity": "少々" }],
    "steps": ["もやしとお肉を細かく刻んで炒める。", "ソースで味付けし、麺を短く切って合わせる。", "完成。"],
    "pickyEatingPoint": "シャキシャキ感をあえて抑え、麺と一体化させることで抵抗をなくします。", "nutritionPoint": "もやしのビタミンCを、お肉と一緒に手早く加熱。",
    "imagePrompt": "Stir-fried noodles with tiny pork bits and sprouts, kids portion", "imagePath": "images/recipe72.png"
  },
  {
    "id": 73, "name": "野菜お好み焼き", "type": "好き嫌い固定タイプ", "time": 15, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "小麦粉", "quantity": "50g" }, { "name": "山芋", "quantity": "20g" }, { "name": "野菜ミックス", "quantity": "50g" }],
    "steps": ["野菜をフードプロセッサーで細かくする（またはすりおろす）。", "生地に混ぜて両面焼く。", "完成。"],
    "pickyEatingPoint": "ソースとマヨネーズの味で、野菜が入っていることに気づきません。", "nutritionPoint": "山芋のムチンで消化を助け、野菜の吸収率を高めます。",
    "imagePrompt": "Mini okonomiyaki with finely grated vegetables, colorful sauce", "imagePath": "images/recipe73.png"
  },
  {
    "id": 74, "name": "野菜餃子", "type": "好き嫌い固定タイプ", "time": 15, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "豚ミンチ", "quantity": "100g" }, { "name": "野菜ペースト", "quantity": "50g" }, { "name": "餃子の皮", "quantity": "10枚" }],
    "steps": ["ミンチと野菜をよく混ぜ、皮で包む。", "蒸し焼きにして完成。"],
    "pickyEatingPoint": "皮で包む（ブラインド状態）ことで、野菜を見るストレスを解消。", "nutritionPoint": "ニラやニンニク抜きでも、野菜の旨味で満足できる餃子です。",
    "imagePrompt": "Mini dumplings with fine vegetable filling, golden brown edges", "imagePath": "images/recipe74.png"
  },
  {
    "id": 75, "name": "野菜春巻き", "type": "好き嫌い固定タイプ", "time": 15, "cookingStyle": "手づかみ",
    "ingredients": [{ "name": "春巻きの皮", "quantity": "5枚" }, { "name": "春雨・野菜", "quantity": "各適量" }, { "name": "豚肉", "quantity": "30g" }],
    "steps": ["短くした春雨と細かな野菜を炒める。", "皮で細く巻いて低温で揚げる。", "完成。"],
    "pickyEatingPoint": "カリッとした皮の食感が楽しくて、中身への警戒心が薄れます。", "nutritionPoint": "春雨で腹持ちを良くし、野菜のミネラルを逃さず閉じ込めます。",
    "imagePrompt": "Slim crispy spring rolls, kids friendly size, wooden tray", "imagePath": "images/recipe75.png"
  },
  {
    "id": 76, "name": "野菜チーズトースト", "type": "好き嫌い固定タイプ", "time": 5, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "食パン", "quantity": "1枚" }, { "name": "すりおろしピーマン", "quantity": "少々" }, { "name": "チーズ", "quantity": "適量" }],
    "steps": ["ピーマンをすりおろし、ケチャップと混ぜる。", "パンに塗り、チーズをのせて焼く。", "完成。"],
    "pickyEatingPoint": "ピーマンの苦味を、チーズの脂質がマスキングしてくれます。", "nutritionPoint": "ビタミンCの宝庫であるピーマンを、加熱しておいしく。",
    "imagePrompt": "Toasted bread with hidden green pepper sauce and thick cheese", "imagePath": "images/recipe76.png"
  },
  {
    "id": 77, "name": "野菜ピザ", "type": "好き嫌い固定タイプ", "time": 10, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "ピザ生地（またはパン）", "quantity": "1枚" }, { "name": "トマト・なす", "quantity": "各少量" }, { "name": "チーズ", "quantity": "適量" }],
    "steps": ["野菜を5mm以下の極薄スライスにする。", "具をのせて、完全にチーズで覆ってから焼く。", "完成。"],
    "pickyEatingPoint": "野菜が見えないくらい「チーズたっぷり」にすることが勝利の鍵。", "nutritionPoint": "なすのポリフェノールも、皮をむけばバレずに摂取可能。",
    "imagePrompt": "Kids mini pizza with hidden thin vegetables under white cheese", "imagePath": "images/recipe77.png"
  },
  {
    "id": 78, "name": "野菜コロッケ", "type": "好き嫌い固定タイプ", "time": 15, "cookingStyle": "おやつ",
    "ingredients": [{ "name": "じゃがいも", "quantity": "1個" }, { "name": "玉ねぎ・にんじん", "quantity": "各10g" }, { "name": "パン粉", "quantity": "適量" }],
    "steps": ["じゃがいもと一緒に野菜も茹でて、まとめて潰す。", "丸めてパン粉をまぶし、少なめの油で焼く。", "完成。"],
    "pickyEatingPoint": "野菜のつぶつぶがなくなるまでしっかり潰すのが重要。", "nutritionPoint": "根菜類のビタミンB群で、脳と体の発育をサポート。",
    "imagePrompt": "Golden potato croquettes, bite-sized, small plate, soft lighting", "imagePath": "images/recipe78.png"
  },
  {
    "id": 79, "name": "野菜ポテトサラダ", "type": "好き嫌い固定タイプ", "time": 15, "cookingStyle": "副菜",
    "ingredients": [{ "name": "じゃがいも", "quantity": "1個" }, { "name": "すりおろし野菜", "quantity": "20g" }, { "name": "マヨネーズ", "quantity": "大さじ1" }],
    "steps": ["じゃがいもを潰し、野菜ペーストを混ぜ込む。", "マヨネーズでしっとり和える。", "完成。"],
    "pickyEatingPoint": "形をなくし、大好きなマヨネーズ味で統一。食べ慣れた味に擬態。", "nutritionPoint": "マヨネーズの脂溶性ビタミンが、野菜の吸収を助けます。",
    "imagePrompt": "Smooth potato salad with blended carrot color, small scoop, wooden table", "imagePath": "images/recipe79.png"
  },
  {
    "id": 80, "name": "野菜ミートボール", "type": "好き嫌い固定タイプ", "time": 15, "cookingStyle": "ワンパン",
    "ingredients": [{ "name": "豚ミンチ", "quantity": "100g" }, { "name": "刻み野菜", "quantity": "30g" }, { "name": "パン粉", "quantity": "少量" }],
    "steps": ["肉と野菜、粉を粘りが出るまでよく練る。", "一口大に丸めてフライパンで焼く。", "完成。"],
    "pickyEatingPoint": "「お肉だ！」という喜びの中に、自然な形で野菜をしのばせます。", "nutritionPoint": "手づかみもしやすく、主菜としての満足度が高い一皿。",
    "imagePrompt": "Shiny glazed meatballs with hidden vegetable bits, colorful ceramic dish", "imagePath": "images/recipe80.png"
  }
];
/* --- Auto-Placeholder script for missing images --- */
(function() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.onerror = function() {
      this.src = 'https://via.placeholder.com/300x300?text=Recipe+Image';
    };
  });
})();
