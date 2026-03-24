/**
 * 偏食レスキュー - メインロジック
 */

let currentFilters = {
  type: 'all',
  time: null,
  style: null,
  search: ''
};

let shoppingCart = JSON.parse(localStorage.getItem('rescueCart')) || [];

// 診断データ
const questions = [
  {
    text: "新しい食べ物を出すと...",
    options: [
      { text: "警戒してなかなか食べない", type: "慎重タイプ" },
      { text: "一口食べて嫌ならすぐ出す", type: "感覚敏感タイプ" },
      { text: "遊び始めて集中が切れる", type: "集中力切れタイプ" },
      { text: "決まったものしか食べない", type: "好き嫌い固定タイプ" }
    ]
  },
  {
    text: "苦手なものの傾向は？",
    options: [
      { text: "見た目が変わっているもの", type: "慎重タイプ" },
      { text: "ドロドロ・ザラザラしたもの", type: "感覚敏感タイプ" },
      { text: "細かくて食べにくいもの", type: "集中力切れタイプ" },
      { text: "特定の野菜や肉など", type: "好き嫌い固定タイプ" }
    ]
  },
  {
      text: "食事中の様子は？",
      options: [
        { text: "慎重に少しずつ食べる", type: "慎重タイプ" },
        { text: "食感に敏感に反応する", type: "感覚敏感タイプ" },
        { text: "すぐに席を立ちたがる", type: "集中力切れタイプ" },
        { text: "いつものメニューを欲しがる", type: "好き嫌い固定タイプ" }
      ]
  },
  {
      text: "食べられるものを増やすには？",
      options: [
        { text: "安心できる味から少しずつ", type: "慎重タイプ" },
        { text: "カリカリなど食感を変える", type: "感覚敏感タイプ" },
        { text: "手づかみなど食べやすさ重視", type: "集中力切れタイプ" },
        { text: "好きな味（カレー等）に混ぜる", type: "好き嫌い固定タイプ" }
      ]
  }
];

let currentQuestion = 0;
let scores = {};

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

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
  renderProfile();
  renderConsultation();

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

  // Random Recipe
  const randomBtn = document.getElementById('randomRecipeBtn');
  if (randomBtn) {
    randomBtn.addEventListener('click', () => {
      renderRecommendation(true);
    });
  }

  // Reset Diagnosis
  const resetBtn = document.getElementById('resetDiagnosisBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', resetDiagnosis);
  }

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
function renderRecommendation(isRandom = false) {
  const recommendCard = document.getElementById('recipeRescueCard');
  if (!recommendCard) return;
  
  let recipe;
  if (isRandom) {
    recipe = recipes[Math.floor(Math.random() * recipes.length)];
  } else {
    // 優先的に ID 1 (コーンそぼろ丼) をおすすめ、なければランダム
    recipe = recipes.find(r => r.id === 1) || recipes[0];
  }
  
  if (!recipe) return;

  recommendCard.innerHTML = `
    <div onclick="openRecipeModal(${recipe.id})">
      <div class="rescue-img-wrap">
        <img src="${recipe.imagePath || 'https://via.placeholder.com/600x400?text=No+Image'}" alt="${recipe.name}">
        <div class="rescue-badge">今日の偏食レスキューごはん</div>
      </div>
      <div class="rescue-info">
        <div class="rescue-meta">
          <span>⏱️ ${recipe.time}分</span>
          <span>🍳 ${recipe.cookingStyle}</span>
        </div>
        <h3 class="rescue-title">${recipe.name}</h3>
        <p class="rescue-reason">理由：${recipe.pickyEatingPoint}</p>
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
          <span class="recipe-card-tag highlight">${r.time}分</span>
          <span class="recipe-card-tag">${r.cookingStyle}</span>
          <span class="recipe-card-tag">偏食OK</span>
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
        <span class="modal-badge" style="background:#f0f0f0;">⏱️ ${recipe.time}分</span>
        <span class="modal-badge" style="background:#f0f0f0;">🍳 ${recipe.cookingStyle}</span>
      </div>
      <h2 class="modal-title">${recipe.name}</h2>
      
      <div class="point-box">
        <div class="modal-section-h">💡 偏食ポイント</div>
        <p style="font-size:14px;">${recipe.pickyEatingPoint}</p>
      </div>

      <div class="modal-section">
        <div class="modal-section-h">🛒 材料（大人1＋子ども1）</div>
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
        <div class="modal-section-h">👨‍🍳 作り方</div>
        <ol class="step-list">
          ${(recipe.steps || []).map(s => `<li class="step-item">${s}</li>`).join('')}
        </ol>
      </div>

      <div class="point-box" style="background:#fff9eb; border-color:#ffe082;">
        <div class="modal-section-h">🌟 栄養士の視点</div>
        <p style="font-size:14px;">${recipe.nutritionPoint}</p>
      </div>

      <p style="font-size:12px; color:var(--text-muted); margin-bottom:10px;">画像生成プロンプト:<br>${recipe.imagePrompt}</p>

      <button class="add-to-cart-btn" onclick="toggleCart(${recipe.id})">
        ${isSelected ? '買い物リストから削除' : '買い物リストに追加'}
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

/**
 * Attempts to merge quantities with the same unit.
 * e.g. "1/4本" + "1/4本" => "1/2本"
 * Falls back to "1/4本 + 1/4本" if units don't match or parsing fails.
 */
function mergeQuantity(q1, q2) {
  // Fraction helper
  function parseFraction(str) {
    str = String(str).trim();
    const fracMatch = str.match(/^(\d+)\/(\d+)/);
    if (fracMatch) return parseInt(fracMatch[1]) / parseInt(fracMatch[2]);
    const numMatch = str.match(/^[\d.]+/);
    return numMatch ? parseFloat(numMatch[0]) : null;
  }

  function extractUnit(str) {
    str = String(str).trim();
    return str.replace(/^[\d./\s]+/, '').trim();
  }

  const unit1 = extractUnit(q1);
  const unit2 = extractUnit(q2);

  if (!unit1 && !unit2) return `${q1} + ${q2}`;
  if (unit1 !== unit2) return `${q1} + ${q2}`;

  const n1 = parseFraction(q1);
  const n2 = parseFraction(q2);
  if (n1 === null || n2 === null) return `${q1} + ${q2}`;

  const sum = n1 + n2;
  // Convert to fraction if clean, else decimal
  const tolerance = 0.0001;
  const denoms = [2, 3, 4, 5, 6, 8];
  let nice = null;
  for (const d of denoms) {
    const n = Math.round(sum * d);
    if (Math.abs(n / d - sum) < tolerance) {
      if (n % d === 0) { nice = `${n / d}`; }
      else { nice = `${n}/${d}`; }
      break;
    }
  }
  const result = nice || sum.toString();
  return `${result}${unit1}`;
}

/**
 * Merges duplicate ingredient entries across all recipes in cart.
 * Returns [{name, quantity, checked}]
 */
function getMergedIngredients() {
  const map = {};
  shoppingCart.forEach(id => {
    const recipe = recipes.find(r => r.id === id);
    if (!recipe || !recipe.ingredients) return;
    recipe.ingredients.forEach(ing => {
      const key = ing.name;
      if (map[key]) {
        map[key].quantity = mergeQuantity(map[key].quantity, ing.quantity);
      } else {
        map[key] = { name: ing.name, quantity: ing.quantity };
      }
    });
  });
  return Object.values(map);
}

// Tracks checked state of each ingredient by name
let checkedIngredients = JSON.parse(localStorage.getItem('checkedIngredients') || '{}');

function updateCartUI() {
  const cartCount = document.getElementById('cartCount');
  if (cartCount) cartCount.textContent = shoppingCart.length;

  const cartItemsContainer = document.getElementById('cartItems');
  if (!cartItemsContainer) return;

  if (shoppingCart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty">
        <span class="cart-empty-icon">🛒</span>
        <p>リストが空です。<br>レシピから食材を追加してね！</p>
      </div>`;
    return;
  }

  const merged = getMergedIngredients();
  const unchecked = merged.filter(i => !checkedIngredients[i.name]);
  const checked = merged.filter(i => checkedIngredients[i.name]);

  // Recipe list for deletion
  const recipeList = shoppingCart.map(id => {
    const r = recipes.find(rx => rx.id === id);
    return r ? `<div class="cart-recipe-tag">
      <span>${r.name}</span>
      <button class="cart-recipe-remove" onclick="removeRecipeFromCart(${id})" aria-label="${r.name}を削除">✕</button>
    </div>` : '';
  }).join('');

  const renderItem = (ing) => {
    const isChecked = !!checkedIngredients[ing.name];
    const safeKey = ing.name.replace(/"/g, '&quot;');
    return `
      <label class="cart-item ${isChecked ? 'cart-item--checked' : ''}" onclick="toggleIngredientCheck('${safeKey}')">
        <span class="cart-item-check">${isChecked ? '✅' : '⬜'}</span>
        <span class="cart-item-name">${ing.name}</span>
        <span class="cart-item-qty">${ing.quantity}</span>
      </label>`;
  };

  cartItemsContainer.innerHTML = `
    <div class="cart-recipes-section">
      <div class="cart-section-label">📋 選択中のレシピ</div>
      <div class="cart-recipe-tags">${recipeList}</div>
    </div>

    <div class="cart-ingredients-section">
      <div class="cart-section-label">
        🛒 買い物リスト
        <span class="cart-item-count">${unchecked.length}件 残り</span>
      </div>
      ${unchecked.length === 0 && checked.length > 0 ? '<div class="cart-all-done">🎉 すべてカゴに入れました！</div>' : ''}
      ${unchecked.map(renderItem).join('')}

      ${checked.length > 0 ? `
        <div class="cart-checked-divider">✅ 済み（${checked.length}件）</div>
        ${checked.map(renderItem).join('')}
      ` : ''}
    </div>
  `;
}

function toggleIngredientCheck(name) {
  if (checkedIngredients[name]) {
    delete checkedIngredients[name];
  } else {
    checkedIngredients[name] = true;
  }
  localStorage.setItem('checkedIngredients', JSON.stringify(checkedIngredients));
  updateCartUI();
}

function removeRecipeFromCart(id) {
  const index = shoppingCart.indexOf(id);
  if (index > -1) shoppingCart.splice(index, 1);
  localStorage.setItem('rescueCart', JSON.stringify(shoppingCart));
  // Refresh checked state (remove orphan items)
  const remaining = getMergedIngredients().map(i => i.name);
  Object.keys(checkedIngredients).forEach(key => {
    if (!remaining.includes(key)) delete checkedIngredients[key];
  });
  localStorage.setItem('checkedIngredients', JSON.stringify(checkedIngredients));
  updateCartUI();
}

function clearCheckedItems() {
  checkedIngredients = {};
  localStorage.setItem('checkedIngredients', JSON.stringify(checkedIngredients));
  updateCartUI();
  showCartToast('✅ チェック済みをリセットしました');
}

let _clearAllPending = false;
let _clearAllTimer = null;

function clearAllCart() {
  const btn = document.querySelector('.drawer-action-btn--danger');
  if (!btn) return;

  if (_clearAllPending) {
    // 2nd tap → execute
    clearTimeout(_clearAllTimer);
    _clearAllPending = false;
    if (btn) {
      btn.textContent = '🗑 全クリア';
      btn.classList.remove('drawer-action-btn--confirming');
    }
    shoppingCart = [];
    checkedIngredients = {};
    localStorage.setItem('rescueCart', JSON.stringify(shoppingCart));
    localStorage.setItem('checkedIngredients', JSON.stringify(checkedIngredients));
    updateCartUI();
    showCartToast('🗑 リストをクリアしました');
  } else {
    // 1st tap → ask for confirmation
    _clearAllPending = true;
    if (btn) {
      btn.textContent = 'もう一度タップで削除';
      btn.classList.add('drawer-action-btn--confirming');
    }
    _clearAllTimer = setTimeout(() => {
      _clearAllPending = false;
      if (btn) {
        btn.textContent = '🗑 全クリア';
        btn.classList.remove('drawer-action-btn--confirming');
      }
    }, 3000);
  }
}

function showCartToast(msg) {
  let toast = document.getElementById('cartToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'cartToast';
    toast.className = 'cart-toast';
    document.getElementById('cartDrawer').appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('cart-toast--visible');
  setTimeout(() => toast.classList.remove('cart-toast--visible'), 2200);
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
        診断の結果、あなたのお子様は「${resultType}」の傾向が強いようです。
        このタイプにぴったりの、食べやすさを追求したレシピを提案します。
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
        
        document.querySelectorAll('.filter-tab').forEach(tab => {
          tab.classList.toggle('active', tab.dataset.value === resultType);
        });
        
        renderRecipes();
      };
  }
}

function resetDiagnosis() {
  if (confirm('診断をやり直しますか？')) {
    localStorage.removeItem('diagnosis_completed');
    currentQuestion = 0;
    scores = {};
    
    document.getElementById('diagnosisSection').classList.remove('hidden');
    document.getElementById('mainContent').classList.add('hidden');
    document.getElementById('quizContainer').classList.remove('hidden');
    document.getElementById('resultContainer').classList.add('hidden');
    
    renderQuestion();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

/* --- Dynamic UI Injection (Config-driven) --- */
function renderProfile() {
  const container = document.getElementById('profileSection');
  if (!container || !APP_CONFIG.profile) return;

  const p = APP_CONFIG.profile;
  container.innerHTML = `
    <div class="profile-card-refined">
      <div class="profile-image-outer">
        <img src="${p.image}" alt="${p.name}" class="profile-main-img">
      </div>
      <h2 class="profile-main-name">${p.name}</h2>
      <p class="profile-main-title">${p.title}</p>
      <p class="profile-main-desc">${p.description}</p>
      <div class="profile-tag-grid">
        ${p.badges.map(b => `<span class="profile-tag" style="background:${b.color}">${b.text}</span>`).join('')}
      </div>
    </div>
  `;
}

function renderConsultation() {
  const container = document.getElementById('consultationSection');
  if (!container || !APP_CONFIG.consultation) return;

  const c = APP_CONFIG.consultation;
  container.innerHTML = `
    <div class="consult-container">
      <div class="consult-badge-wrap">
        <span class="consult-mini-badge">💬 ${c.badgeText}</span>
      </div>
      <h2 class="consult-title">${c.title}</h2>
      <p class="consult-subtitle">${c.subtitle}</p>
      <div class="consult-grid">
        ${c.cards.map(card => `
          <div class="consult-card">
            <span class="consult-card-icon">${card.icon}</span>
            <p class="consult-card-text">${card.text}</p>
          </div>
        `).join('')}
      </div>
      <a href="${APP_CONFIG.profile.links.line}" class="btn-line-massive" target="_blank">
        ${c.buttonText}
      </a>
    </div>
  `;
}

/* --- Helper: Missing Image Handling --- */
window.addEventListener('error', function(e) {
  if (e.target.tagName === 'IMG') {
    e.target.src = 'https://via.placeholder.com/300x300?text=Recipe+Image';
    e.target.style.opacity = '0.5';
  }
}, true);
