/**
 * Picky Eating Rescue - Main Logic
 */

let currentFilters = {
    type: 'all',
    time: null,
    style: null,
    search: ''
};

let shoppingCart = JSON.parse(localStorage.getItem('rescueCart')) || [];

// \u8a3a\u65ad\u30c7\u30fc\u30bf
const questions = [
  {
        text: "\u65b0\u3057\u3044\u98df\u3079\u7269\u3092\u51fa\u3059\u3068...",
        options: [
          { text: "\u8b66\u6212\u3057\u3066\u306a\u304b\u306a\u304b\u98df\u3079\u306a\u3044", type: "\u614e\u91cd\u30bf\u30a4\u30d7" },
          { text: "\u4e00\u53e3\u98df\u3079\u3066\u5acc\u306a\u3089\u3059\u3050\u51fa\u3059", type: "\u611f\u899a\u654f\u611f\u30bf\u30a4\u30d7" },
          { text: "\u904a\u3073\u59cb\u3081\u3066\u96c6\u4e2d\u304c\u5207\u308c\u308b", type: "\u96c6\u4e2d\u529b\u5207\u308c\u30bf\u30a4\u30d7" },
          { text: "\u6c7a\u307e\u3063\u305f\u3082\u306e\u3057\u304b\u98df\u3079\u306a\u3044", type: "\u597d\u304d\u5acc\u3044\u56fa\u5b9a\u30bf\u30a4\u30d7" }
              ]
  },
  {
        text: "\u82e6\u624b\u306a\u3082\u306e\u306e\u50be\u5411\u306f\uff1f",
        options: [
          { text: "\u898b\u305f\u76ee\u304c\u5909\u308f\u3063\u3066\u3044\u308b\u3082\u306e", type: "\u614e\u91cd\u30bf\u30a4\u30d7" },
          { text: "\u30c9\u30ed\u30c9\u30ed\u30fb\u30b6\u30e9\u30b6\u30e9\u3057\u305f\u3082\u306e", type: "\u611f\u899a\u654f\u611f\u30bf\u30a4\u30d7" },
          { text: "\u7d30\u304b\u304f\u3066\u98df\u3079\u306b\u304f\u3044\u3082\u306e", type: "\u96c6\u4e2d\u529b\u5207\u308c\u30bf\u30a4\u30d7" },
          { text: "\u7279\u5b9a\u306e\u91ce\u83dc\u3084\u8089\u306a\u3069", type: "\u597d\u304d\u5acc\u3044\u56fa\u5b9a\u30bf\u30a4\u30d7" }
              ]
  },
  {
                 text: "\u98df\u4e8b\u4e2d\u306e\u69d8\u5b50\u306f\uff1f",
          options: [
          { text: "\u614e\u91cd\u306b\u5c11\u3057\u305a\u3064\u98df\u3079\u308b", type: "\u614e\u91cd\u30bf\u30a4\u30d7" },
            { text: "\u98df\u611f\u306b\u654f\u611f\u306b\u53cd\u5fdc\u3059\u308b", type: "\u611f\u899a\u654f\u611f\u30bf\u30a4\u30d7" },
            { text: "\u3059\u3050\u306b\u5e2d\u3092\u7acb\u3061\u305f\u304c\u308b", type: "\u96c6\u4e2d\u529b\u5207\u308c\u30bf\u30a4\u30d7" },
            { text: "\u3044\u3064\u3082\u306e\u30e1\u30cb\u30e5\u30fc\u3092\u6b32\u3057\u304c\u308b", type: "\u597d\u304d\u5acc\u3044\u56fa\u5b9a\u30bf\u30a4\u30d7" }
                  ]
            },
  {
          text: "\u98df\u3079\u3089\u308c\u308b\u3082\u306e\u3092\u5897\u3084\u3059\u306b\u306f\uff1f",
          options: [
            { text: "\u5b89\u5fc3\u3067\u304d\u308b\u5473\u304b\u3089\u5c11\u3057\u305a\u3064", type: "\u614e\u91cd\u30bf\u30a4\u30d7" },
            { text: "\u30ab\u30ea\u30ab\u30ea\u306a\u3069\u98df\u611f\u3092\u5909\u3048\u308b", type: "\u611f\u899a\u654f\u611f\u30bf\u30a4\u30d7" },
            { text: "\u624b\u3065\u304b\u307f\u306a\u3069\u98df\u3079\u3084\u3059\u3055\u91cd\u8996", type: "\u96c6\u4e2d\u529b\u5207\u308c\u30bf\u30a4\u30d7" },
            { text: "\u597d\u304d\u306a\u5473\uff08\u30ab\u30e1\u30fc\u7b49\uff09\u306b\u6df7\u305c\u308b", type: "\u597d\u304d\u5acc\u3044\u56fa\u5b9a\u30bf\u30a4\u30d7" }
                  ]
  }
  ];

            let currentQuestion = 0;
let scores = {};

document.addEventListener('DOMContentLoaded', () => {
             initApp();
  function initApp() {
              const isDiagnosisCompleted = localStorage.getItem('diagnosis_completed') === 'true';
              const mainContent = document.getElementById('mainContent');
      const diagSection = document.getElementById('diagnosisSection');

               if (isDiagnosisCompleted) {
                     if (diagSection) diagSection.classList.add('hidden');
                     if (mainContent) mainContent.classList.remove('hidden');
               } else {
    if (mainContent) mainContent.classList.add('hidden');
                     renderQuestion();
               }

              renderRecommendation();
      renderRecipes();
      updateCartUI();

      // Search
      const searchInput = document.getElementById('recipeSearch');
      if (searchInput) {
      searchInput.addEventListener('input', (e) => {
              currentFilters.search = e.target.value.toLowerCase();
              renderRecipes();
      });
      }

      // Filter Tabs (Type)
      document.querySelectorAll('.filter-tab').forEach(tab => {
            tab.addEventListener('click', () => {
                    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
                    tab.classList.add('active');
                    currentFilters.type = tab.dataset.value;
                    renderRecipes();
            });
      });
  }

    // Filter Chips (Time, Style)
    document.querySelectorAll('.filter-chip').forEach(chip => {
          chip.addEventListener('click', () => {
                  const type = chip.dataset.type;
                  const value = chip.dataset.value;

                  if (chip.classList.contains('active')) {
                            chip.classList.remove('active');
                            currentFilters[type] = null;
                  } else {
                            document.querySelectorAll(`.filter-chip[data-type="${type}"]`).forEach(c => c.classList.remove('active'));
                            chip.classList.add('active');
                            currentFilters[type] = value;
                  }
                  renderRecipes();
          });
    });

    // Cart Drawer
    const openCartBtn = document.getElementById('openCart');
    if (openCartBtn) openCartBtn.addEventListener('click', openCart);

    const closeCartBtn = document.getElementById('closeCartBtn');
    if (closeCartBtn) closeCartBtn.addEventListener('click', closeCart);

    const closeCartOverlay = document.getElementById('closeCartOverlay');
    if (closeCartOverlay) closeCartOverlay.addEventListener('click', closeCart);

    // Modal
    const closeModalBtn = document.getElementById('closeModal');
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

    window.addEventListener('click', (e) => {
          if (e.target === document.getElementById('modalOverlay')) closeModal();
    });

    // Loading
    setTimeout(() => {
          const loadingOverlay = document.getElementById('loadingOverlay');
                              if (loadingOverlay) loadingOverlay.style.opacity = '0';
          setTimeout(() => {
                  if (loadingOverlay) loadingOverlay.style.display = 'none';
          }, 300);
    }, 500);
}

                          /* --- Recommendation --- */
                          function renderRecommendation() {
    const recommendCard = document.getElementById('recipeRescueCard');
    if (!recommendCard) return;

    // \u512a\u5148\u7684\u306b ID 42 (\u30b3\u30fc\u30f3\u305d\u307c\u308d\u4e3c) \u3092\u304a\u3059\u3059\u3081\u3001\u306a\u3051\u308c\u3070\u30e9\u30f3\u30c0\u30e0
    const recipe = recipes.find(r => r.id === 42) || recipes[0];
    if (!recipe) return;

    recommendCard.innerHTML = `
        <div onclick="openRecipeModal(${recipe.id})">
              <div class="rescue-img-wrap">
                      <img src="${recipe.imagePath || 'https://via.placeholder.com/600x400?text=No+Image'}" alt="${recipe.name}">
                              <div class="rescue-badge">\u4eca\u65e5\u306e\u504f\u98df\u30ec\u30b9\u30ad\u30e5\u30fc\u3054\u306f\u3093</div>
                                    </div>
                                          <div class="rescue-info">
                                                  <div class="rescue-meta">
                                                            <span>\u23f1\ufe0f ${recipe.time}\u5206</span>
                                                                      <span>\ud83c\udf73 ${recipe.cookingStyle}</span>
                                                                              </div>
                                                                                      <h3 class="rescue-title">${recipe.name}</h3>
                                                                                              <p class="rescue-reason">\u7406\u7531\uff1a${recipe.pickyEatingPoint}</p>
                                                                                                    </div>
                                                                                                        </div>
                                                                                                          `;
}

/* --- Recipe List --- */
function renderRecipes() {
    const grid = document.getElementById('recipeGrid');
    if (!grid) return;

    const filtered = recipes.filter(r => {
          const matchType = currentFilters.type === 'all' || r.type === currentFilters.type;
          const matchTime = !currentFilters.time || r.time <= parseInt(currentFilters.time);
          const matchStyle = !currentFilters.style || r.cookingStyle === currentFilters.style;
          const matchSearch = !currentFilters.search ||
                  r.name.toLowerCase().includes(currentFilters.search) ||
                  (r.tags && r.tags.some(t => t.toLowerCase().includes(currentFilters.search))) ||
                  (r.ingredients && r.ingredients.some(i => i.name.toLowerCase().includes(currentFilters.search)));

          return matchType && matchTime && matchStyle && matchSearch;
    });

    const countNum = document.getElementById('recipeCountNum');
    if (countNum) countNum.textContent = filtered.length;

    grid.innerHTML = filtered.map(r => `
        <article class="recipe-card" onclick="openRecipeModal(${r.id})">
              <img src="${r.imagePath || 'https://via.placeholder.com/300x300?text=No+Image'}" alt="${r.name}" class="recipe-card-img" loading="lazy">
                    <div class="recipe-card-body">
                            <h3 class="recipe-card-name">${r.name}</h3>
                                    <div class="recipe-card-tags">
                                              <span class="recipe-card-tag highlight">${r.time}\u5206</span>
                                                        <span class="recipe-card-tag">${r.cookingStyle}</span>
                                                                  <span class="recipe-card-tag">\u504f\u98dfOK</span>
                                                                          </div>
                                                                                </div>
                                                                                    </article>
                                                                                      `).join('');
}

/* --- Modal --- */
function openRecipeModal(id) {
    const recipe = recipes.find(r => r.id === id);
    if (!recipe) return;

    const content = document.getElementById('modalContent');
    const isSelected = shoppingCart.includes(recipe.id);

    content.innerHTML = `
        <img src="${recipe.imagePath || 'https://via.placeholder.com/600x400?text=No+Image'}" alt="${recipe.name}" class="modal-img">
            <div class="modal-body">
                  <div class="modal-badge-group">
                          <span class="modal-badge" style="background:var(--primary-light); color:var(--primary-color)">${recipe.type}</span>
                                  <span class="modal-badge" style="background:#f0f0f0;">\u23f1\ufe0f ${recipe.time}\u5206</span>
                                          <span class="modal-badge" style="background:#f0f0f0;">\ud83c\udf73 ${recipe.cookingStyle}</span>
                                                </div>
                                                      <h2 class="modal-title">${recipe.name}</h2>
                                                            <div class="point-box">
                                            <div class="modal-section-h">\ud83d\udca1 \u504f\u98df\u30dd\u30a4\u30f3\u30c8</div>
                                                    <p style="font-size:14px;">${recipe.pickyEatingPoint}</p>
                                                          </div>
                                                                <div class="modal-section">
                                                                        <div class="modal-section-h">\ud83d\uded2 \u6750\u6599\uff08\u5927\u4eba1\uff0b\u5b50\u3069\u30821\uff09</div>
                                                                                <ul class="ingredient-list">
                                                                                          ${(recipe.ingredients || []).map(i => `
                                                                                                      <li class="ingredient-item">
                                                                                                                    <span>${i.name}</span>
                                                                                                                                  <span>${i.quantity}</span>
                                                                                                                                              </li>
                                                                                                                                                        `).join('')}
                                                                                                                                                                </ul>
                                                                                             </div>

                                                                                                   <div class="modal-section">
                                                                                                           <div class="modal-section-h">\ud83c\udf73 \u4f5c\u308a\u65b9</div>
                                                                                                                   <ol class="step-list">
                                                                                                                             ${(recipe.steps || []).map(s => `<li class="step-item">${s}</li>`).join('')}
                                                                                                                                     </ol>
                                                                                                                                           </div>
                                                                                                                                                 <div class="point-box" style="background:#fff9eb; border-color:#ffe082;">
                                                                                                                                                         <div class="modal-section-h">\ud83c\udf1f \u6804\u990a\u58eb\u306e\u8996\u70b9</div>
                                                                                                                                                                 <p style="font-size:14px;">${recipe.nutritionPoint}</p>
                                                                                                                                                                       </div>
                                                                                                                                                                             <p style="font-size:12px; color:var(--text-muted); margin-bottom:10px;">\u753b\u50cf\u751f\u6210\u30d7\u30ed\u30f3\u30d7\u30c8:<br>${recipe.imagePrompt}</p>
                                                                                                                                                                                   <button class="add-to-cart-btn" onclick="toggleCart(${recipe.id})">
                                                                                                                                                                                           ${isSelected ? '\u8cb7\u3044\u7269\u30ea\u30b9\u30c8\u304b\u3089\u524a\u9664' : '\u8cb7\u3044\u7269\u30ea\u30b9\u30c8\u306b\u8ffd\u52a0'}
                                                                                                                                                                                                 </button>
                                                                                                                                                                                                     </div>
                                                                                                                                                                                                       `;
    document.getElementById('modalOverlay').classList.add('active');
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
}

/* --- Shopping Cart --- */
function toggleCart(id) {
    const index = shoppingCart.indexOf(id);
    if (index > -1) {
          shoppingCart.splice(index, 1);
} else {
          shoppingCart.push(id);
    }
    localStorage.setItem('rescueCart', JSON.stringify(shoppingCart));
    updateCartUI();
    closeModal();
      }

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
  if (cartCount) cartCount.textContent = shoppingCart.length;

    const cartItemsContainer = document.getElementById('cartItems');
    if (!cartItemsContainer) return;

    if (shoppingCart.length === 0) {
          cartItemsContainer.innerHTML = '<p style="text-align:center; padding:40px; color:#999;">\u30ea\u30b9\u30c8\u304c\u7a7a\u3067\u3059\u3002\u30ec\u30b7\u30d4\u3092\u8ffd\u52a0\u3057\u3066\u306d\uff01</p>';
          return;
    }

    const allIngredients = [];
    shoppingCart.forEach(id => {
          const recipe = recipes.find(r => r.id === id);
          if (recipe && recipe.ingredients) {
                  allIngredients.push(...recipe.ingredients);
          }
    });

    cartItemsContainer.innerHTML = allIngredients.map((ing, i) => `
        <div class="cart-item">
              <input type="checkbox" id="item-${i}">
                    <label class="cart-item-name" for="item-${i}">${ing.name}</label>
                          <span class="cart-item-qty">${ing.quantity}</span>
                              </div>
                                `).join('');
              }

function openCart() {
    const drawer = document.getElementById('cartDrawer');
    if (drawer) drawer.classList.add('active');
}

function closeCart() {
    const drawer = document.getElementById('cartDrawer');
    if (drawer) drawer.classList.remove('active');
}

/* --- Diagnosis Logic --- */
function renderQuestion() {
    const quizContent = document.getElementById('quizContent');
    if (!quizContent) return;

    const q = questions[currentQuestion];
    const progress = (currentQuestion / questions.length) * 100;
    const progressFill = document.getElementById('progressFill');
    if (progressFill) progressFill.style.width = `${progress}%`;


    quizContent.innerHTML = `
        <p class="question-text">${q.text}</p>
            <div class="options-container">
                  ${q.options.map((opt, i) => `
        <button class="option-btn" onclick="handleAnswer('${opt.type}')">
                  ${opt.text}
                          </button>
                                `).join('')}
                                    </div>
                                      `;
}

window.handleAnswer = (type) => {
    scores[type] = (scores[type] || 0) + 1;
    currentQuestion++;

    if (currentQuestion < questions.length) {
          renderQuestion();
    } else {
          showResult();
    }
};

function showResult() {
    const resultType = Object.entries(scores).reduce((a, b) => a[1] > b[1] ? a : b)[0];
    const diagSection = document.getElementById('diagnosisSection');
    const quizContainer = document.getElementById('quizContainer');
    const resultContainer = document.getElementById('resultContainer');

    if (quizContainer) quizContainer.classList.add('hidden');
    if (resultContainer) resultContainer.classList.remove('hidden');

    const typeName = document.getElementById('typeName');
    if (typeName) typeName.textContent = resultType;

    const typeDesc = document.getElementById('typeDesc');
    if (typeDesc) {
          typeDesc.textContent = `
                \u8a3a\u65ad\u306e\u7d50\u679c\u3001\u3042\u306a\u305f\u306e\u304a\u5b50\u69d8\u306f\u300c${resultType}\u300d\u306e\u50be\u5411\u304c\u5f37\u3044\u3088\u3046\u3067\u3059\u3002
                      \u3053\u306e\u30bf\u30a4\u30d7\u306b\u30d4\u30c3\u30bf\u30ea\u306e\u3001\u98df\u3079\u3084\u3059\u3055\u3092\u8ffd\u6c42\u3057\u305f\u30ec\u30b7\u30d4\u3092\u63d0\u6848\u3057\u307e\u3059\u3002
                          `;
    }

    const showRecipesBtn = document.getElementById('showRecipesBtn');
    if (showRecipesBtn) {
          showRecipesBtn.onclick = () => {
                  currentFilters.type = resultType;
                  localStorage.setItem('diagnosis_completed', 'true');
                  if (diagSection) diagSection.classList.add('hidden');
      const mainContent = document.getElementById('mainContent');
            if (mainContent) mainContent.classList.remove('hidden');
                 
});
