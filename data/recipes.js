const RECIPE_TYPES = {
    "CAUTIOUS": "\u614e\u91cd\u30bf\u30a4\u30d7",
    "SENSITIVE": "\u611f\u899a\u654f\u611f\u30bf\u30a4\u30d7",
    "FOCUS": "\u96c6\u4e2d\u529b\u5207\u308c\u30bf\u30a4\u30d7",
    "FIXED": "\u597d\u304d\u5acc\u3044\u56fa\u5b9a\u30bf\u30a4\u30d7"
};

const recipes = [
  {
      "id": 1,
        "name": "\u3057\u3089\u3059\u5375\u3054\u306f\u3093",
        "type": "\u614e\u91cd\u30bf\u30a4\u30d7",
        "time": 5,
        "cookingStyle": "\u4e3c",
        "emoji": "\ud83c\udf72",
        "nutritionPoint": "\u304a\u5b50\u69d8\u306e\u6210\u9577\u306b\u5fc5\u8981\u306a\u6804\u990a\u7d20\u3092\u30d0\u30e9\u30f3\u30b9\u3088\u304f\u542b\u3093\u3067\u3044\u307e\u3059\u3002",
        "pickyEatingPoint": "\u3053\u306e\u30bf\u30a4\u30d7\u306e\u304a\u5b50\u69d8\u304c\u597d\u3080\u98df\u611f\u3084\u5473\u4ed8\u3051\u3092\u91cd\u8996\u3057\u3066\u3044\u307e\u3059\u3002",
      "tags": ["\u614e\u91cd", "\u4e3c"],
        "ingredients": [
          { "name": "\u3057\u3089\u3059", "quantity": "\u9069\u91cf" },
          { "name": "\u5375", "quantity": "1\u500b" },
          { "name": "\u3054\u306f\u3093", "quantity": "1\u5584" }
              ],
        "steps": [
                "\u3057\u3089\u3059\u3092\u30b6\u30eb\u3067\u6c34\u5207\u308a\u3059\u308b\u3002",
                "\u5375\u3092\u307b\u3050\u3057\u3066\u3057\u3089\u3059\u3068\u6df7\u305c\u308b\u3002",
                "\u6e29\u304b\u3044\u3054\u306f\u3093\u306e\u4e0a\u306b\u304b\u3051\u3066\u3001\u304a\u597d\u307f\u3067\u91a7\u6cb9\u3092\u5c11\u3005\u304b\u3051\u3066\u5b8c\u6210\u3002"
              ],
        "imagePrompt": "Shirasu Egg Rice",
        "imagePath": "images/corn_soboro_don.png"
  },
  {
        "id": 2,
        "name": "\u30c4\u30ca\u30b3\u30fc\u30f3\u3054\u306f\u3093",
        "type": "\u614e\u91cd\u30bf\u30a4\u30d7",
        "time": 10,
        "cookingStyle": "\u4e3c",
        "emoji": "\ud83c\udf72",
        "nutritionPoint": "\u304a\u5b50\u69d8\u306e\u6210\u9577\u306b\u5fc5\u8981\u306a\u6804\u990a\u7d20\u3092\u30d0\u30e9\u30f3\u30b9\u3088\u304f\u542b\u3093\u3067\u3044\u307e\u3059\u3002",
        "pickyEatingPoint": "\u3053\u306e\u30bf\u30a4\u30d7\u306e\u304a\u5b50\u69d8\u304c\u597d\u3080\u98df\u611f\u3084\u5473\u4ed8\u3051\u3092\u91cd\u8996\u3057\u3066\u3044\u307e\u3059\u3002",
        "tags": ["\u614e\u91cd", "\u4e3c"],
        "ingredients": [
          { "name": "\u30c4\u30ca\u7f36", "quantity": "1\u7f36" },
          { "name": "\u30b3\u30fc\  {
                "id": 3,
               "name": "\u30d0\u30bf\u30fc\u30b3\u30fc\u30f3\u30e9\u30a4\u30b9",
               "type": "\u614e\u91cd\u30bf\u30a4\u30d7",
               "time": 10,
              "cookingStyle": "\u4e3c",
               "emoji": "\ud83c\udf72",
               "nutritionPoint": "\u304a\u5b50\u69d8\u306e\u6210\u9577\u306b\u5fc5\u8981\u306a\u6804\u990a\u7d20\u3092\u30d0\u30e9\u30f3\u30b9\u3088\u304f\u542b\u3093\u3067\u3044\u307e\u3059\u3002",
               "pickyEatingPoint": "\u3053\u306e\u30bf\u30a4\u30d7\u306e\u304a\u5b50\u69d8\u304c\u597d\u3080\u98df\u611f\u3084\u5473\u4ed8\u3051\u3092\u91cd\u8996\u3057\u3066\u3044\u307e\u3059\u3002",
               "tags": ["\u614e\u91cd", "\u4e3c"],
              "ingredients": [
          { "name": "\u30b3\u30fc\u30f3\u7f36", "quantity": "\u9069\u91cf" },
                { "name": "\u30d0\u30bf\u30fc", "quantity": "\u5c11\u3005" },
  { "name": "\u3054\u306f\u3093", "quantity": "1\u5584" }
                    ],
               "steps": [
                       "\u30d5\u30e9\u30a4\u30d1\u30f3\u3067\u30d0\u30bf\u30fc\u3092\u6eb6\u304b\u3059\u3002",
                       "\u30b3\u30fc\u30f3\u3092\u7092\u3081\u3001\u3054\u306f\u3093\u3092\u52a0\u3048\u3066\u7092\u3081\u5408\u308f\u305b\u308b\u3002",
                       "\u8efd\u304f\u5869\u3053\u3057\u3087\u3046\u3057\u3066\u5b8c\u6210\u3002"
                     ],
               "imagePrompt": "Butter Corn Rice",
               "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
          },
          {
                "id": 4,
               "name": "\u5375\u96d1\u708a",
                "type": "\u614e\u91cd\u30bf\u30a4\u30d7",
                "time": 15,
                "cookingStyle": "\u4e3c",
                "emoji": "\ud83c\udf72",
                "nutritionPoint": "\u304a\u5b50\u69d8\u306e\u6210\u9577\u306b\u5fc5\u8981\u306a\u6804\u990a\u7d20\u3092\u30d0\u30e9\u30f3\u30b9\u3088\u304f\u542b\u3093\u3067\u3044\u307e\u3059\u3002",
                "pickyEatingPoint": "\u3053\u306e\u30bf\u30a4\u30d7\u306e\u304a\u5b50\u69d8\u304c\u597d\u3080\u98df\u611f\u3084\u5473\u4ed8\u3051\u3092\u91cd\u8996\u3057\u3066\u3044\u307e\u3059\u3002",
                "tags": ["\u614e\u91cd", "\u4e3c"],
                "ingredients": [
                  { "name": "\u5375", "quantity": "1\u500b" },
                  { "name": "\u3054\u306f\u3093", "quantity": "1\u5584" },
                  { "name": "\u3060\u3057\u6c41", "quantity": "200ml" }
                      ],
                "steps": [
                        "\u3060\u3057\u6c41\u3092\u6cb8\u9a30\u3055\u305b\u3001\u3054\u306f\u3093\u3092\u52a0\u3048\u3066\u716e\u8fbc\u3080\u3002",
                        "\u6eb6\u304d\u5375\u3092\u56ce\u3057\u5165\u308c\u3001\u84cb\u3092\u3057\u3066\u84b8\u3089\u3059\u3002",
                        "\u5375\u304c\u56fa\u307e\u3063\u305f\u3089\u5b8c\u6210\u3002"
                      ],
                "imagePrompt": "Egg Zosui",
        "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
          },
          {
                "id": 5,
                "name": "\u30b3\u30fc\u30f3\u30b9\u30fc\u30d7",
                "type": "\u614e\u91cd\u30bf\u30a4\u30d7",
                "time": 10,
                "cookingStyle": "\u30b9\u30fc\u30d7",
                "emoji": "\ud83c\udf72",
                "nutritionPoint": "\u304a\u5b50\u69d8\u306e\u6210\u9577\u306b\u5fc5\u8981\u306a\u6804\u990a\u7d20\u3092\u30d0\u30e9\u30f3\u30b9\u3088\u304f\u542b\u3093\u3067\u3044\u307e\u3059\u3002",
                "pickyEatingPoint": "\u3053\u306e\u30bf\u30a4\u30d7\u306e\u304a\u5b50\u69d8\u304c\u597d\u3080\u98df\u611f\u3084\u5473\u4ed8\u3051\u3092\u91cd\u8996\u3057\u3066\u3044\u307e\u3059\u3002",
      "tags": ["\u614e\u91cd", "\u30b9\u30fc\u30d7"],
                "ingredients": [
                  { "name": "\u30b3\u30fc\u30f3\u5c11\u3005", "quantity": "\u9069\u91cf" }
                      ],
      "steps": [
              "\u30b3\u30fc\u30f3\u3092\u6e29\u3081\u308b\u3002"
              ],
                "imagePrompt": "Corn Soup",
                "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
          }
          ];
  ,
    {
        "id": 6,
        "name": "\u304b\u307c\u3061\u3083\u30b9\u30fc\u30d7",
        "type": "\u614e\u91cd\u30bf\u30a4\u30d7",
        "time": 15,
        "cookingStyle": "\u30b9\u30fc\u30d7",
        "emoji": "\ud83c\udf72",
        "nutritionPoint": "\u304a\u5b50\u69d8\u306e\u6210\u9577\u306b\u5fc5\u8981\u306a\u6804\u990a\u7d20\u3092\u30d0\u30e9\u30f3\u30b9\u3088\u304f\u542b\u3093\u3067\u3044\u307e\u3059\u3002",
        "pickyEatingPoint": "\u3053\u306e\u30bf\u30a4\u30d7\u306e\u304a\u5b50\u69d8\u304c\u597d\u3080\u98df\u611f\u3084\u5473\u4ed8\u3051\u3092\u91cd\u8996\u3057\u3066\u3044\u307e\u3059\u3002",
        "tags": ["\u614e\u91cd", "\u30b9\u30fc\u30d7"],
        "ingredients": [
        { "name": "\u304b\u307c\u3061\u3083", "quantity": "1/4\u500b" },
          { "name": "\u725b\u4e73", "quantity": "200ml" }
              ],
        "steps": [
                "\u304b\u307c\u3061\u3083\u3092\u30ec\u30f3\u30b8\u3067\u52a0\u71b1\u3057\u3066\u6f70\u3059\u3002",
                "\u725b\u4e73\u3092\u52a0\u3048\u3066\u3088\u304f\u6df7\u305c\u3001\u6e29\u3081\u308b\u3002",
                "\u5668\u306b\u76db\u3063\u3066\u5b8c\u6210\u3002"
              ],
        "imagePrompt": "Pumpkin Soup",
        "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
  },
  {
        "id": 7,
        "name": "\u306b\u3093\u3058\u3093\u30b9\u30fc\u30d7",
        "type": "\u614e\u91cd\u30bf\u30a4\u30d7",
        "time": 15,
        "cookingStyle": "\u30b9\u30fc\u30d7",
        "emoji": "\ud83c\udf72",
        "nutritionPoint": "\u304a\u5b50\u69d8\u306e\u6210\u9577\u306b\u5fc5\u8981\u306a\u6804\u990a\u7d20\u3092\u30d0\u30e9\u30f3\u30b9\u3088\u304f\u542b\u3093\u3067\u3044\u307e\u3059\u3002",
        "pickyEatingPoint": "\u3053\u306e\u30bf\u30a4\u30d7\u306e\u304a\u5b50\u69d8\u304c\u597d\u3080\u98df\u611f\u3084\u5473\u4ed8\u3051\u3092\u91cd\u8996\u3057\u3066\u3044\u307e\u3059\u3002",
        "tags": ["\u614e\u91cd", "\u30b9\u30fc\u30d7"],    {
          "name": "\u306b\u3093\u3058\u3093",
          "quantity": "1\u672c"
  }
      ],
      "steps": [
              "\u306b\u3093\u3058\u3093\u3092\u30ec\u30f3\u30b8\u3067\u52a0\u71b1\u3057\u3066\u6f70\u3059\u3002",
        "\u725b\u4e73\u3092\u52a0\u3048\u3066\u3088\u304f\u6df7\u305c\u3001\u6e29\u3081\u308b\u3002",
      "\u5668\u306b\u76db\u3063\u3066\u5b8c\u6210\u3002"
    ],
          "imagePrompt": "Carrot Soup",
          "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
},
{
      "id": 8,
            "name": "\u30c1\u30fc\u30ba\u30aa\u30e0\u30ec\u30c4",
            "type": "\u614e\u91cd\u30bf\u30a4\u30d7",
            "time": 10,
            "cookingStyle": "\u304a\u304b\u305a",
            "emoji": "\ud83c\udf73",
    "nutritionPoint": "\u304a\u5b50\u69d8\u306e\u6210\u9577\u306b\u5fc5\u8981\u306a\u6804\u990a\u7d20\u3092\u30d0\u30e9\u30f3\u30b9\u3088\u304f\u542b\u3093\u3067\u3044\u307e\u3059\u3002",
            "pickyEatingPoint": "\u3053\u306e\u30bf\u30a4\u30d7\u306e\u304a\u5b50\u69d8\u304c\u597d\u3080\u98df\u611f\u3084\u5473\u4ed8\u3051\u3092\u91cd\u8996\u3057\u3066\u3044\u307e\u3059\u3002",
            "tags": ["\u614e\u91cd", "\u304a\u304b\u305a"],
            "ingredients": [
        { "name": "\u5375", "quantity": "1\u500b" },
        { "name": "\u30c1\u30fc\u30ba", "quantity": "\u9069\u91cf" }
            ],
            "steps": [
              "\u5375\u3092\u307b\u3050\u3057\u3001\u30c1\u30fc\u30ba\u3092\u6df7\u305c\u308b\u3002",
              "\u30d5\u30e9\u30a4\u30d1\u30f3\u3067\u713c\u304f\u3002",
              "\u5de3\u3081\u3066\u5b8c\u6210\u3002"
            ],
            "imagePrompt": "Cheese Omelet",
            "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
},
{
      "id": 9,
            "name": "\u3057\u3089\u3059\u30c8\u30fc\u30b9\u30c8",
            "type": "\u614e\u91cd\u30bf\u30a4\u30d7",
            "time": 5,
            "cookingStyle": "\u30d1\u30f3",
            "emoji": "\ud83c\udf73",
      "nutritionPoint": "\u304a\u5b50\u69d8\u306e\u6210\u9577\u306b\u5fc5\u8981\u306a\u6804\u990a\u7d20\u3092\u30d0\u30e9\u30f3\u30b9\u3088\u304f\u542b\u3093\u3067\u3044\u307e\u3059\u3002",
            "pickyEatingPoint": "\u3053\u306e\u30bf\u30a4\u30d7\u306e\u304a\u5b50\u69d8\u304c\u597d\u3080\u98df\u611f\u3084\u5473\u4ed8\u3051\u3092\u91cd\u8996\u3057\u3066\u3044\u307e\u3059\u3002",
            "tags": ["\u614e\u91cd", "\u30d1\u30f3"],
            "ingredients": [
        { "name": "\u98df\u30d1\u30f3", "quantity": "1\u679a" },
        { "name": "\u3057\u3089\u3059", "quantity": "\u9069\u91cf" }
            ],
            "steps": [

              "\u98df\u30d1\u30f3\u306e\u4e0a\u306b\u30c1\u30fc\u30ba\u3092\u306e\u305b\u308b\u3002",
              "\u30c8\u30fc\u30b9\u30bf\u30fc\u3067\u713c\u304f\u3002",
              "\u5b8c\u6210\u3002"
            ],
            "imagePrompt": "Cheese Toast",
            "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
},
{
      "id": 11,
            "name": "\u3057\u3089\u3059\u30c1\u30fc\u30ba\u304a\u306b\u304e\u308a",
            "type": "\u614e\u91cd\u30bf\u30a4\u30d7",
            "time": 10,
            "cookingStyle": "\u4e3c",
            "emoji": "\ud83c\udf59",
            "nutritionPoint": "\u30c1\u30fc\u30ba\u306e\u30ab\u30eb\u30b7\u30a6\u30e0\u304c\u6442\u308c\u307e\u3059\u3002",
            "pickyEatingPoint": "\u98df\u3079\u3084\u3059\u3044\u30b5\u30a4\u30ba\u306e\u304a\u306b\u304e\u308a\u3067\u3059\u3002",
            "tags": ["\u614e\u91cd", "\u304a\u306b\u304e\u308a"],
            "ingredients": [
        { "name": "\u3054\u306f\u3093", "quantity": "1\u5584" },
        { "name": "\u3057\u3089\u3059", "quantity": "\u9069\u91cf" },
        { "name": "\u5343\u5207\u308a\u30c1\u30fc\u30ba", "quantity": "\u9069\u91cf" }
            ],
            "steps": [
              "\u3054\u306f\u3093\u306b\u3057\u3089\u3059\u3068\u30c1\u30fc\u30ba\u3092\u6df7\u305c\u308b\u3002",
              "\u5c0f\u3055\u3081\u306b\u306b\u304e\u308b\u3002"
            ],
            "imagePrompt": "Shirasu Cheese Rice Ball",
            "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
},
{
      "id": 12,
            "name": "\u3055\u3064\u307e\u3044\u3082\u3054\u306f\u3093",
            "type": "\u614e\u91cd\u30bf\u30a4\u30d7",
            "time": 40,
            "cookingStyle": "\u4e3c",
            "emoji": "\ud83c\udf72",
            "nutritionPoint": "\u98df\u7269\u7e4a\u7dad\u304c\u8c4a\u5bcc\u3067\u3059\u3002",
            "pickyEatingPoint": "\u304a\u828b\u306e\u7518\u307f\u3067\u98df\u3079\u3084\u3059\u3044\u3067\u3059\u3002",
            "tags": ["\u614e\u91cd", "\u4e3c"],
            "ingredients": [
        { "name": "\u7c73", "quantity": "2\u5408" },
        { "name": "\u3055\u3064\u307e\u3044\u3082", "quantity": "1\u672c" }
            ],
            "steps": [
              "\u3055\u3064\u307e\u3044\u3082\u30921cm\u89d2\u306b\u5207\u308b\u3002",
              "\u7c73\u3068\u4e00\u7dd2\u306b\u708a\u304f\u3002"
            ],
            "imagePrompt": "Sweet Potato Rice",
            "imagePath": "https://via.placeholder.com/300x300?text=Recipe"
}
];

        if (typeof module !== 'undefined') {
            module.exports = { recipes, RECIPE_TYPES };
        }

        "ingredients": [
          { "name": "\u306b\u3093\u3058\u3093", "quant
