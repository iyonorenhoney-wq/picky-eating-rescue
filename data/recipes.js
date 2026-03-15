const RECIPE_TYPES = {
  "CAUTIOUS": "慎重タイプ",
  "SENSITIVE": "感覚敏感タイプ",
  "FOCUS": "集中力切れタイプ",
  "FIXED": "好き嫌い固定タイプ"
};

const recipes = [
  {
    "id": 1,
    "name": "しらす卵ごはん",
    "type": "慎重タイプ",
    "time": 5,
    "cookingStyle": "丼",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "慎重",
      "丼"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "しらすをザルで水切りする。",
      "卵をほぐしてしらすと混ぜる。",
      "温かいごはんの上にかけて、お好みで醤油を少々かけて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named しらす卵ごはん, Japanese home cooking style, soft lighting",
    "imagePath": "images/corn_soboro_don.png"
  },
  {
    "id": 2,
    "name": "ツナコーンごはん",
    "type": "慎重タイプ",
    "time": 10,
    "cookingStyle": "丼",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "慎重",
      "丼"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "ツナ缶の油を軽くきる。",
      "コーンとツナをごはんに混ぜる。",
      "塩こしょうで味を整えて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named ツナコーンごはん, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 3,
    "name": "バターコーンライス",
    "type": "慎重タイプ",
    "time": 15,
    "cookingStyle": "丼",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "慎重",
      "丼"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "フライパンにバターを熱する。",
      "コーンを加えてさっと炒め、塩をひとつまみ。",
      "温かいごはんに混ぜて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named バターコーンライス, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 4,
    "name": "卵雑炊",
    "type": "慎重タイプ",
    "time": 10,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "慎重",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "鍋にだし汁（または水）を入れて温める。",
      "ごはんを加えてやわらかくなるまで煮る。",
      "溶き卵を回し入れてふんわり固め、塩で調味して完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named 卵雑炊, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 5,
    "name": "コーンスープ",
    "type": "慎重タイプ",
    "time": 5,
    "cookingStyle": "副菜",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "慎重",
      "副菜"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "コーン缶（汁ごと）と牛乳を鍋に入れる。",
      "中火で温めながらよく混ぜる。",
      "塩こしょうで味を整え、なめらかになったら完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named コーンスープ, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 6,
    "name": "かぼちゃスープ",
    "type": "慎重タイプ",
    "time": 15,
    "cookingStyle": "副菜",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "慎重",
      "副菜"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "かぼちゃを一口大に切り、やわらかくなるまでレンジ加熱（600W・3分）。",
      "皮をとり、牛乳と一緒にブレンダーまたはフォークでなめらかにする。",
      "鍋で温め、塩こしょうで味を整えて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named かぼちゃスープ, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 7,
    "name": "にんじんスープ",
    "type": "慎重タイプ",
    "time": 5,
    "cookingStyle": "副菜",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "慎重",
      "副菜"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "にんじんを薄切りにし、レンジで3分加熱してやわらかくする。",
      "牛乳と一緒にブレンダーでなめらかにする。",
      "鍋で温め、塩と少量のバターで味を整えて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named にんじんスープ, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 8,
    "name": "チーズオムレツ",
    "type": "慎重タイプ",
    "time": 10,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "慎重",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "卵2個を溶き、塩・ピザ用チーズを混ぜる。",
      "フライパンにバターを熱し、卵液を流し入れる。",
      "半熟のうちに端へ寄せてオムレツ型にまとめ完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named チーズオムレツ, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 9,
    "name": "しらすトースト",
    "type": "慎重タイプ",
    "time": 15,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "慎重",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "食パンにバターを塗り、しらすを均一に広げる。",
      "トースターで3〜4分、焼き色がつくまで焼く。",
      "お好みでマヨネーズを細くかけて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named しらすトースト, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 10,
    "name": "チーズトースト",
    "type": "慎重タイプ",
    "time": 10,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "慎重",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "食パンにピザ用チーズをたっぷりのせる。",
      "トースターで3〜4分、チーズが溶けてこんがりするまで焼いて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named チーズトースト, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 11,
    "name": "ツナマヨおにぎり",
    "type": "慎重タイプ",
    "time": 5,
    "cookingStyle": "手づかみ",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "慎重",
      "手づかみ"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "ツナ缶の油をきり、マヨネーズ・塩こしょうで和える。",
      "温かいごはんでツナマヨを包み、一口サイズに握る。",
      "ラップを使うと手が汚れずきれいに作れる。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named ツナマヨおにぎり, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 12,
    "name": "しらすチーズおにぎり",
    "type": "慎重タイプ",
    "time": 15,
    "cookingStyle": "手づかみ",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "慎重",
      "手づかみ"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "しらすとほぐしたチーズ（またはとろけるチーズ）をごはんに混ぜる。",
      "一口サイズに握って完成。",
      "海苔を巻いてもよい。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named しらすチーズおにぎり, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 13,
    "name": "さつまいもごはん",
    "type": "慎重タイプ",
    "time": 5,
    "cookingStyle": "丼",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "慎重",
      "丼"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "さつまいもを1cm角に切り、水に10分さらす。",
      "水気を切り、米と一緒に炊飯器で炊く（水加減は通常通り）。",
      "炊き上がったら塩を少々加えてさっくり混ぜて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named さつまいもごはん, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 14,
    "name": "バナナヨーグルト",
    "type": "慎重タイプ",
    "time": 10,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "慎重",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "バナナを輪切りにする。",
      "ヨーグルトの上にバナナをのせる。",
      "お好みではちみつを少しかけて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named バナナヨーグルト, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 15,
    "name": "かぼちゃヨーグルト",
    "type": "慎重タイプ",
    "time": 15,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "慎重",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "かぼちゃをやわらかくなるまでレンジ加熱（600W・2分）。",
      "つぶして冷まし、ヨーグルトと混ぜる。",
      "お好みではちみつを少しかけて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named かぼちゃヨーグルト, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 16,
    "name": "じゃがいもチーズ焼き",
    "type": "慎重タイプ",
    "time": 10,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "慎重",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "じゃがいもを薄切りにして電子レンジで2分加熱。",
      "フライパンにバターを熱し、じゃがいもを並べて焼く。",
      "チーズをのせてふたをし、チーズが溶けたら完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named じゃがいもチーズ焼き, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 17,
    "name": "豆腐ステーキチーズ",
    "type": "慎重タイプ",
    "time": 5,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "慎重",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "豆腐をペーパータオルで水切りし、1cm厚にスライス。",
      "フライパンにごま油を熱し、豆腐を両面焼く。",
      "チーズをのせてふたをし、溶けたら完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named 豆腐ステーキチーズ, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 18,
    "name": "コーン卵焼き",
    "type": "慎重タイプ",
    "time": 15,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "慎重",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "卵2個を溶き、コーン・塩・砂糖少々を混ぜる。",
      "卵焼き器に油を熱し、卵液を3回に分けて巻く。",
      "食べやすい幅に切って完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named コーン卵焼き, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 19,
    "name": "かぼちゃサラダ",
    "type": "慎重タイプ",
    "time": 5,
    "cookingStyle": "副菜",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "慎重",
      "副菜"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "かぼちゃをやわらかくなるまでレンジ加熱してつぶす。",
      "マヨネーズ・塩こしょうで和える。",
      "冷ましてから器に盛り完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named かぼちゃサラダ, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 20,
    "name": "さつまいもサラダ",
    "type": "慎重タイプ",
    "time": 10,
    "cookingStyle": "副菜",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "慎重",
      "副菜"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "さつまいもをやわらかくなるまでレンジ加熱してつぶす。",
      "マヨネーズ・塩こしょうで和える。",
      "粗熱がとれたら器に盛り完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named さつまいもサラダ, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 21,
    "name": "カリカリチーズポテト",
    "type": "感覚敏感タイプ",
    "time": 15,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "感覚敏感",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "じゃがいもを薄切りにしてレンジで2分加熱。",
      "フライパンにチーズとじゃがいもを並べて中火で焼く。",
      "チーズがカリカリになったら裏返し、両面カリッとして完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named カリカリチーズポテト, Japanese home cooking style, soft lighting",
    "imagePath": "images/crispy_cheese_potato.png"
  },
  {
    "id": 22,
    "name": "じゃがいもガレット",
    "type": "感覚敏感タイプ",
    "time": 10,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "感覚敏感",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "じゃがいもをすりおろし、水気をしっかり絞る。",
      "小麦粉・塩・卵を加えてよく混ぜる。",
      "フライパンに油を熱して薄く広げ、両面カリカリに焼いて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named じゃがいもガレット, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 23,
    "name": "とろける豆腐ナゲット",
    "type": "感覚敏感タイプ",
    "time": 5,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "感覚敏感",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "豆腐を水切りしてつぶし、卵・片栗粉・塩を混ぜる。",
      "一口サイズに丸める。",
      "フライパンに油を熱し、こんがりするまで転がしながら焼いて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named とろける豆腐ナゲット, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 24,
    "name": "カリカリ餃子",
    "type": "感覚敏感タイプ",
    "time": 15,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "感覚敏感",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "冷凍餃子を使う場合はパッケージ通りに焼く。",
      "油をひいたフライパンで中火で底を焼き、水を入れてふたをして蒸す。",
      "水がなくなったらふたをはずしてカリカリに仕上げて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named カリカリ餃子, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 25,
    "name": "コーンチーズせんべい",
    "type": "感覚敏感タイプ",
    "time": 5,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "感覚敏感",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "コーン缶の水気をきる。",
      "フライパンにチーズを薄く広げ、コーンをのせて中火で焼く。",
      "チーズがカリカリになったらはがして完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named コーンチーズせんべい, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 26,
    "name": "カリカリおやき",
    "type": "感覚敏感タイプ",
    "time": 10,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "感覚敏感",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "じゃがいもをやわらかくなるまでレンジで加熱しつぶす。",
      "フライパンにバターを熱し、じゃがいもをのばして焼く。",
      "チーズをのせてふたをし、溶けて底がカリッとしたら完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named カリカリおやき, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 27,
    "name": "しらすチーズせんべい",
    "type": "感覚敏感タイプ",
    "time": 15,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "感覚敏感",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "しらすをフライパンに広げ、ごま油少々で炒める。",
      "チーズを加えてカリカリになるまでそのまま焼く。",
      "一口サイズにカットして完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named しらすチーズせんべい, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 28,
    "name": "じゃがいももち",
    "type": "感覚敏感タイプ",
    "time": 10,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "感覚敏感",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "じゃがいもをやわらかくなるまでレンジで加熱してつぶす。",
      "塩・小麦粉を加えて混ぜ、丸く形を整える。",
      "フライパンに油を熱し、両面カリッと焼いて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named じゃがいももち, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 29,
    "name": "にんじんパンケーキ",
    "type": "感覚敏感タイプ",
    "time": 5,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "感覚敏感",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "にんじんをすりおろして水気を軽く絞る。",
      "卵・小麦粉・塩と混ぜて生地を作る。",
      "フライパンに油を熱し、スプーンで丸く流して両面焼いて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named にんじんパンケーキ, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 30,
    "name": "ブロッコリーおやき",
    "type": "感覚敏感タイプ",
    "time": 15,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "感覚敏感",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "ブロッコリーを細かく切る。",
      "卵・小麦粉・塩と混ぜて生地を作る。",
      "フライパンに油を熱し、スプーンで丸く流して両面カリッと焼いて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named ブロッコリーおやき, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 31,
    "name": "パリパリチーズ",
    "type": "感覚敏感タイプ",
    "time": 5,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "感覚敏感",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "フライパンにピザ用チーズを薄く広げる。",
      "弱中火で加熱し、端が焦げ色になるまで焼く。",
      "スパチュラで持ち上げてペーパーにとり、冷ましてパリッとさせて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named パリパリチーズ, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 32,
    "name": "カリカリしらす",
    "type": "感覚敏感タイプ",
    "time": 10,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "感覚敏感",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "しらすをフライパンに広げ、ごま油少量で中火。",
      "カリカリになるまで動かさずに焼く。",
      "取り出してペーパーで余分な油を吸わせて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named カリカリしらす, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 33,
    "name": "コーンパンケーキ",
    "type": "感覚敏感タイプ",
    "time": 15,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "感覚敏感",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "コーン缶の水気をきる。",
      "卵・小麦粉・塩と混ぜ生地を作る。",
      "フライパンに油を熱し、スプーンで丸く広げて両面焼いて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named コーンパンケーキ, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 34,
    "name": "ツナチーズせんべい",
    "type": "感覚敏感タイプ",
    "time": 10,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "感覚敏感",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "ツナの油をきる。",
      "フライパンにチーズを広げ、ツナをのせて中火で焼く。",
      "チーズがカリカリになったらはがして完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named ツナチーズせんべい, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 35,
    "name": "カリカリ豆腐ステーキ",
    "type": "感覚敏感タイプ",
    "time": 5,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "感覚敏感",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "豆腐を水切りして1cm幅に切る。",
      "フライパンに油を熱して両面しっかり焼く。",
      "チーズをのせてふたをし、溶けてカリッとしたら完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named カリカリ豆腐ステーキ, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 36,
    "name": "カリカリオムレツ",
    "type": "感覚敏感タイプ",
    "time": 15,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "感覚敏感",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "卵2個を溶き、チーズ・塩を混ぜる。",
      "フライパンにバターを熱し、卵液を流し入れる。",
      "外側をしっかり焼き、中がとろっとした状態でたたんで完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named カリカリオムレツ, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 37,
    "name": "カリカリお好み焼き",
    "type": "感覚敏感タイプ",
    "time": 5,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "感覚敏感",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "キャベツをせん切りにし、卵・小麦粉・だし・塩で生地を作る。",
      "フライパンに油を熱し、薄く広げて弱めの中火でしっかり焼く。",
      "両面カリカリに焼いてソース・マヨをかけて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named カリカリお好み焼き, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 38,
    "name": "カリカリポテトサラダ",
    "type": "感覚敏感タイプ",
    "time": 10,
    "cookingStyle": "副菜",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "感覚敏感",
      "副菜"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "じゃがいもをすりおろし、水気を絞ってチーズと混ぜる。",
      "フライパンに油を熱し、薄く広げて中火で押しながら焼く。",
      "両面カリカリになったらカットして完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named カリカリポテトサラダ, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 39,
    "name": "カリカリチヂミ",
    "type": "感覚敏感タイプ",
    "time": 15,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "感覚敏感",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "野菜（ニラ・にんじん等）を細切りにする。",
      "小麦粉・卵・水・塩で生地を作り、野菜を混ぜる。",
      "フライパンに油を熱し薄く広げ、両面カリカリに焼いて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named カリカリチヂミ, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 40,
    "name": "コーンポテトソテー",
    "type": "感覚敏感タイプ",
    "time": 10,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "感覚敏感",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "じゃがいもを薄切りにレンジで加熱。コーン缶の水気をきる。",
      "フライパンにバターを熱し、じゃがいもとコーンを入れて炒める。",
      "塩こしょうで味を整え、こんがりするまで焼いて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named コーンポテトソテー, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 41,
    "name": "ミニおにぎり",
    "type": "集中力切れタイプ",
    "time": 5,
    "cookingStyle": "手づかみ",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "集中力切れ",
      "手づかみ"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "温かいごはんをラップで小さく丸める（直径3〜4cm）。",
      "塩を少々つけて握る。",
      "お好みで海苔を巻いて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named ミニおにぎり, Japanese home cooking style, soft lighting",
    "imagePath": "images/mini_onigiri.png"
  },
  {
    "id": 42,
    "name": "コーンそぼろ丼",
    "type": "集中力切れタイプ",
    "time": 15,
    "cookingStyle": "丼",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "集中力切れ",
      "丼"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "ひき肉に醤油・みりん・砂糖を加えてそぼろを作る（フライパンで炒り煮）。",
      "温かいごはんにそぼろをのせる。",
      "一口サイズの容器やお弁当カップに盛り、食べやすくして完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named コーンそぼろ丼, Japanese home cooking style, soft lighting",
    "imagePath": "images/corn_soboro_don.png"
  },
  {
    "id": 43,
    "name": "ミニハンバーグ丼",
    "type": "集中力切れタイプ",
    "time": 5,
    "cookingStyle": "丼",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "集中力切れ",
      "丼"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "ひき肉・塩こしょうでハンバーグを小さく丸める。",
      "フライパンで両面焼いてしっかり火を通す。",
      "小さいごはんの上にのせ、ケチャップをかけて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named ミニハンバーグ丼, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 44,
    "name": "卵スティック",
    "type": "集中力切れタイプ",
    "time": 10,
    "cookingStyle": "手づかみ",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "集中力切れ",
      "手づかみ"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "卵2個を溶き、塩・好みで砂糖少々を加える。",
      "フライパンにバターを熱し、スティック状（長方形）に焼く。",
      "粗熱をとり、手でつかめるサイズにカットして完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named 卵スティック, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 45,
    "name": "卵焼きピック",
    "type": "集中力切れタイプ",
    "time": 15,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "集中力切れ",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "卵2個を溶き、塩・砂糖・コーンなどを混ぜる。",
      "卵焼き器で焼いて巻く。",
      "冷めたらひと口大にカットしてピックを刺して完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named 卵焼きピック, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 46,
    "name": "ミニパンケーキ",
    "type": "集中力切れタイプ",
    "time": 10,
    "cookingStyle": "手づかみ",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "集中力切れ",
      "手づかみ"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "ホットケーキミックスを袋通りに溶く（卵・牛乳）。",
      "フライパンにバターを熱し、スプーンで小さく丸くたらす。",
      "泡が出たら裏返し、両面焼いて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named ミニパンケーキ, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 47,
    "name": "一口お好み焼き",
    "type": "集中力切れタイプ",
    "time": 5,
    "cookingStyle": "手づかみ",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "集中力切れ",
      "手づかみ"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "キャベツ・卵・小麦粉・だし・塩で生地を作る。",
      "フライパンに油を熱し、スプーンで小さく丸く流す。",
      "両面焼いてソース・マヨを少量かけて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named 一口お好み焼き, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 48,
    "name": "ひと口サンドイッチ",
    "type": "集中力切れタイプ",
    "time": 15,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "集中力切れ",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "食パンを半分に切り、チーズをはさむ。",
      "手でつかみやすい大きさにカットして完成。",
      "トーストしてもカリッとして食べやすい。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named ひと口サンドイッチ, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 49,
    "name": "スティックトースト",
    "type": "集中力切れタイプ",
    "time": 5,
    "cookingStyle": "手づかみ",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "集中力切れ",
      "手づかみ"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "食パンをスティック状に切る。",
      "トースターで3〜4分焼いてカリッとさせる。",
      "手でつかんでかじれる形にして完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named スティックトースト, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 50,
    "name": "ひと口チーズおにぎり",
    "type": "集中力切れタイプ",
    "time": 10,
    "cookingStyle": "手づかみ",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "集中力切れ",
      "手づかみ"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "温かいごはんにとろけるチーズを混ぜる。",
      "ラップで一口サイズに丸める。",
      "粗熱がとれたらラップをはずして完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named ひと口チーズおにぎり, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 51,
    "name": "ミニツナマヨおにぎり",
    "type": "集中力切れタイプ",
    "time": 15,
    "cookingStyle": "手づかみ",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "集中力切れ",
      "手づかみ"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "ツナの油をきり、マヨネーズと混ぜる。",
      "温かいごはんでツナマヨを包み、ミニサイズに握る。",
      "ラップを使うと衛生的できれいに作れる。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named ミニツナマヨおにぎり, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 52,
    "name": "ミニコーンパンケーキ",
    "type": "集中力切れタイプ",
    "time": 10,
    "cookingStyle": "手づかみ",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "集中力切れ",
      "手づかみ"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "ホットケーキミックスにコーン・卵・牛乳を混ぜる。",
      "フライパンにバター小さじ1を熱し、小さく丸く流す。",
      "両面焼いて完成。コーンの甘みが自然に出る。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named ミニコーンパンケーキ, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 53,
    "name": "一口ポテトもち",
    "type": "集中力切れタイプ",
    "time": 5,
    "cookingStyle": "手づかみ",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "集中力切れ",
      "手づかみ"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "じゃがいもをやわらかくなるまでレンジ加熱してつぶす。",
      "塩・小麦粉を加えて丸める（直径3cm程度）。",
      "フライパンに油を熱し、転がしながら全面こんがりに焼いて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named 一口ポテトもち, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 54,
    "name": "ミニホットドッグ",
    "type": "集中力切れタイプ",
    "time": 15,
    "cookingStyle": "手づかみ",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "集中力切れ",
      "手づかみ"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "ウインナーを半分に切る。",
      "ロールパンかホットケーキ生地にウインナーとチーズを挟む。",
      "フライパンで転がしながら焼いて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named ミニホットドッグ, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 55,
    "name": "スティックポテト",
    "type": "集中力切れタイプ",
    "time": 5,
    "cookingStyle": "手づかみ",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "集中力切れ",
      "手づかみ"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "じゃがいもをスティック状にカットし、塩をふる。",
      "フライパンに多めの油を熱し、カリカリになるまで揚げ焼き。",
      "ペーパーで油をきって完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named スティックポテト, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 56,
    "name": "一口鶏つくね",
    "type": "集中力切れタイプ",
    "time": 10,
    "cookingStyle": "手づかみ",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "集中力切れ",
      "手づかみ"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "鶏ひき肉に塩・片栗粉を混ぜ、一口大に丸める。",
      "フライパンに油を熱し、転がしながら全面こんがりに焼く。",
      "しっかり火が通ったら完成。ケチャップを添えても。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named 一口鶏つくね, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 57,
    "name": "一口オムライス",
    "type": "集中力切れタイプ",
    "time": 15,
    "cookingStyle": "丼",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "集中力切れ",
      "丼"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "フライパンでにんじん・ひき肉などをケチャップ炒飯にする（一人前より小さく）。",
      "卵1個で薄焼き卵を作り、炒飯を包む。",
      "ケチャップをかけて一口サイズの可愛いオムライスに。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named 一口オムライス, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 58,
    "name": "ミニ焼きおにぎり",
    "type": "集中力切れタイプ",
    "time": 10,
    "cookingStyle": "手づかみ",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "集中力切れ",
      "手づかみ"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "温かいごはんをミニサイズに握る。",
      "フライパンに醤油を薄く塗り、焼きおにぎりを並べて弱火で焼く。",
      "両面に焼き色がついたら完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named ミニ焼きおにぎり, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 59,
    "name": "ミニチヂミ",
    "type": "集中力切れタイプ",
    "time": 5,
    "cookingStyle": "手づかみ",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "集中力切れ",
      "手づかみ"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "野菜（ニラ・コーン等）を細切りにし、小麦粉・卵・水・塩で生地を作る。",
      "フライパンに油を熱し、スプーンで小さく流して両面焼く。",
      "一口サイズのミニチヂミで完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named ミニチヂミ, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 60,
    "name": "ミニそぼろパン",
    "type": "集中力切れタイプ",
    "time": 15,
    "cookingStyle": "手づかみ",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "集中力切れ",
      "手づかみ"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "ひき肉に醤油・みりん・砂糖でそぼろを作る。",
      "小さなロールパンを半分に切ってそぼろをはさむ。",
      "ラップで包んで食べやすい形にして完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named ミニそぼろパン, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 61,
    "name": "隠れ野菜のそぼろ丼",
    "type": "好き嫌い固定タイプ",
    "time": 5,
    "cookingStyle": "丼",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "好き嫌い固定",
      "丼"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "野菜（にんじん・ほうれん草等）をみじん切りにする。",
      "ひき肉と一緒に醤油・みりん・砂糖で炒り煮してそぼろにする。",
      "温かいごはんにのせて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named 隠れ野菜のそぼろ丼, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 62,
    "name": "野菜たっぷりミートごはん",
    "type": "好き嫌い固定タイプ",
    "time": 10,
    "cookingStyle": "丼",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "好き嫌い固定",
      "丼"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "野菜（にんじん・玉ねぎ等）をみじん切り・ひき肉と炒める。",
      "ウスターソース・ケチャップで味付けてミートソース風にする。",
      "ごはんにかけて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named 野菜たっぷりミートごはん, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 63,
    "name": "野菜入りロコモコ丼",
    "type": "好き嫌い固定タイプ",
    "time": 15,
    "cookingStyle": "丼",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "好き嫌い固定",
      "丼"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "野菜（玉ねぎ・にんじん等）みじん切りをハンバーグ生地に混ぜ、焼く。",
      "目玉焼きを作る。",
      "ごはん→ハンバーグ→目玉焼き→グレービーソースの順に盛り付けて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named 野菜入りロコモコ丼, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 64,
    "name": "野菜チャーハン",
    "type": "好き嫌い固定タイプ",
    "time": 10,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "好き嫌い固定",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "野菜（にんじん・コーン等）を細かく刻む。",
      "ごはん・卵と一緒にフライパンで炒め、醤油・塩こしょうで味付け。",
      "なじんだら完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named 野菜チャーハン, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 65,
    "name": "隠れ野菜のオムライス",
    "type": "好き嫌い固定タイプ",
    "time": 5,
    "cookingStyle": "丼",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "好き嫌い固定",
      "丼"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "野菜（にんじん・コーン等）を細かく刻んでバターで炒める。",
      "ケチャップライスを作り、薄焼き卵で包む。",
      "ケチャップをかけて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named 隠れ野菜のオムライス, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 66,
    "name": "野菜カレー",
    "type": "好き嫌い固定タイプ",
    "time": 15,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "好き嫌い固定",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "野菜（じゃがいも・にんじん・玉ねぎ等）をみじん切りにする。",
      "肉と一緒に炒め、水とカレールーを加えて10分煮込む。",
      "ごはんにかけて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named 野菜カレー, Japanese home cooking style, soft lighting",
    "imagePath": "images/veg_curry.png"
  },
  {
    "id": 67,
    "name": "野菜ミートパスタ",
    "type": "好き嫌い固定タイプ",
    "time": 5,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "好き嫌い固定",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "野菜（にんじん・玉ねぎ等）をみじん切りにして炒める。",
      "ひき肉・トマト缶を加えて炒め合わせ、塩こしょうで味付け。",
      "ゆでたパスタと混ぜて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named 野菜ミートパスタ, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 68,
    "name": "野菜クリームパスタ",
    "type": "好き嫌い固定タイプ",
    "time": 10,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "好き嫌い固定",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "野菜（ブロッコリー・コーン等）を細かくきる。",
      "バター・小麦粉・牛乳でホワイトソースを作る。",
      "野菜とゆでたパスタを和えて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named 野菜クリームパスタ, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 69,
    "name": "野菜ソース焼きそば",
    "type": "好き嫌い固定タイプ",
    "time": 15,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "好き嫌い固定",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "野菜（キャベツ・にんじん等）を細切りにする。",
      "肉と一緒にフライパンで炒め、ソース・塩こしょうで味付け。",
      "ゆでた麺を加えて炒め合わせて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named 野菜ソース焼きそば, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 70,
    "name": "野菜たっぷりコンソメスープ",
    "type": "好き嫌い固定タイプ",
    "time": 10,
    "cookingStyle": "副菜",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "好き嫌い固定",
      "副菜"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "野菜（にんじん・玉ねぎ・じゃがいも等）を小さく切る。",
      "だし汁で煮て塩こしょうで味付け。",
      "やわらかくなったら完成。汁ごと飲んで栄養補給。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named 野菜たっぷりコンソメスープ, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 71,
    "name": "野菜ポタージュ",
    "type": "好き嫌い固定タイプ",
    "time": 5,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "好き嫌い固定",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "野菜（にんじん・かぼちゃ等）を切り、やわらかくなるまで煮る。",
      "ブレンダーかフォークでなめらかにつぶす。",
      "牛乳で伸ばしながら温め、塩で味を整えて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named 野菜ポタージュ, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 72,
    "name": "野菜たっぷり卵焼き",
    "type": "好き嫌い固定タイプ",
    "time": 15,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "好き嫌い固定",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "野菜（にんじん・ほうれん草等）をみじん切りに。",
      "卵・塩・砂糖と混ぜ、フライパンで巻いて卵焼きに。",
      "食べやすい幅にカットして完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named 野菜たっぷり卵焼き, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 73,
    "name": "野菜のチーズ焼き",
    "type": "好き嫌い固定タイプ",
    "time": 5,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "好き嫌い固定",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "野菜（ブロッコリー等）を小さく切り、フライパンでさっと炒める。",
      "チーズをたっぷりかけてふたをし、溶かす。",
      "チーズが溶けて香ばしくなったら完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named 野菜のチーズ焼き, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 74,
    "name": "野菜お好み焼き",
    "type": "好き嫌い固定タイプ",
    "time": 10,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "好き嫌い固定",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "キャベツ・にんじん・野菜をみじん切りにする。",
      "卵・小麦粉・だし・塩と混ぜ生地を作る。",
      "フライパンで両面しっかり焼き、ソース・マヨで完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named 野菜お好み焼き, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 75,
    "name": "野菜チヂミ",
    "type": "好き嫌い固定タイプ",
    "time": 15,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "好き嫌い固定",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "野菜（にんじん・にら等）を細切りにする。",
      "小麦粉・卵・水・塩で生地を作り野菜を混ぜる。",
      "フライパンで両面カリカリに焼いて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named 野菜チヂミ, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 76,
    "name": "野菜蒸しパン",
    "type": "好き嫌い固定タイプ",
    "time": 10,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "好き嫌い固定",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "野菜（にんじん・かぼちゃ等）をすりおろすか細かくみじん切り。",
      "ホットケーキミックス・卵・牛乳・野菜を混ぜる。",
      "型に入れてレンジ（600W・3分）または蒸し器で蒸して完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named 野菜蒸しパン, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 77,
    "name": "野菜パンケーキ",
    "type": "好き嫌い固定タイプ",
    "time": 5,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "好き嫌い固定",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "野菜をすりおらしてホットケーキミックス・卵・牛乳と混ぜる。",
      "フライパンにバターを熱してスプーンで丸く広げる。",
      "泡が出たら裏返し、両面焼いて完成。",
      "野菜嫌いの子もホットケーキなら食べられることが多いです。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named 野菜パンケーキ, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 78,
    "name": "野菜入り鶏つくね",
    "type": "好き嫌い固定タイプ",
    "time": 15,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "好き嫌い固定",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "野菜（にんじん・コーン等）を細かくみじん切り。",
      "鶏ひき肉・塩・片栗粉・野菜を混ぜて一口大に丸める。",
      "フライパンで転がしながら全面こんがりに焼いて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named 野菜入り鶏つくね, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 79,
    "name": "野菜入り豆腐ハンバーグ",
    "type": "好き嫌い固定タイプ",
    "time": 5,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "好き嫌い固定",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "野菜（にんじん・ほうれん草等）を細かくみじん切り。",
      "豆腐を水切りしてつぶし、野菜・塩・片栗粉を混ぜる。",
      "フライパンに油を熱して両面こんがりに焼いて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named 野菜入り豆腐ハンバーグ, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
    "id": 80,
    "name": "野菜ポテトおやき",
    "type": "好き嫌い固定タイプ",
    "time": 10,
    "cookingStyle": "ワンパン",
    "emoji": "🍲",
    "nutritionPoint": "お子様の成長に必要な栄養素をバランスよく含んでいます。",
    "pickyEatingPoint": "このタイプのお子様が好む食感や味付けを重視しています。",
    "tags": [
      "好き嫌い固定",
      "ワンパン"
    ],
    "ingredients": [
      {
        "name": "メインの食材",
        "quantity": "適量"
      },
      {
        "name": "調味料",
        "quantity": "少々"
      }
    ],
    "steps": [
      "じゃがいもをやわらかくなるまでレンジ加熱してつぶす。",
      "野菜（にんじん・コーン等）みじん切りを混ぜ、塩こしょうで整える。",
      "フライパンに油を熱し、丸めて両面こんがりに焼いて完成。"
    ],
    "imagePrompt": "A healthy homemade child-friendly dish named 野菜ポテトおやき, Japanese home cooking style, soft lighting",
    "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  }
];

if (typeof module !== 'undefined') {
  module.exports = { recipes, RECIPE_TYPES };
}