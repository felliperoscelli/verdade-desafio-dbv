// Lógica do jogo - Verdade ou Desafio

let currentCategory = 'amigo';
let currentItem = null;
let itemCount = 0;

// Elementos do DOM
const categoryBtns = document.querySelectorAll('.category-btn');
const verdadeBtn = document.getElementById('verdadeBtn');
const desafioBtn = document.getElementById('desafioBtn');
const categoryTitle = document.getElementById('categoryTitle');
const categoryStats = document.getElementById('categoryStats');
const itemCard = document.getElementById('itemCard');
const loadingSpinner = document.getElementById('loadingSpinner');
const emptyState = document.getElementById('emptyState');
const itemType = document.getElementById('itemType');
const itemText = document.getElementById('itemText');
const itemCount_el = document.getElementById('itemCount');
const verdadeCount = document.getElementById('verdadeCount');
const desafioCount = document.getElementById('desafioCount');
const footerInfo = document.getElementById('footerInfo');

// Event Listeners
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.category;
        changeCategory();
    });
});

verdadeBtn.addEventListener('click', () => {
    const category = gameData[currentCategory];
    if (category.verdades.length > 0) {
        showLoading();
        setTimeout(() => {
            selectItem('verdade', category.verdades);
        }, 600);
    }
});

desafioBtn.addEventListener('click', () => {
    const category = gameData[currentCategory];
    if (category.desafios.length > 0) {
        showLoading();
        setTimeout(() => {
            selectItem('desafio', category.desafios);
        }, 600);
    }
});

// Funções
function changeCategory() {
    const category = gameData[currentCategory];
    categoryTitle.textContent = category.displayName;
    categoryStats.textContent = `${category.verdades.length} Verdades • ${category.desafios.length} Desafios`;
    verdadeCount.textContent = category.verdades.length;
    desafioCount.textContent = category.desafios.length;
    
    currentItem = null;
    itemCount = 0;
    hideItem();
    updateButtonStates();
}

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function selectItem(type, items) {
    if (items.length === 0) return;
    
    const text = getRandomItem(items);
    currentItem = { type, text };
    itemCount++;
    
    showItem();
    updateButtonStates();
}

function showLoading() {
    emptyState.style.display = 'none';
    itemCard.style.display = 'none';
    loadingSpinner.style.display = 'flex';
}

function showItem() {
    loadingSpinner.style.display = 'none';
    emptyState.style.display = 'none';
    itemCard.style.display = 'block';
    footerInfo.style.display = 'block';
    
    itemType.textContent = currentItem.type === 'verdade' ? 'VERDADE' : 'DESAFIO';
    itemType.classList.remove('desafio');
    if (currentItem.type === 'desafio') {
        itemType.classList.add('desafio');
    }
    itemText.textContent = currentItem.text;
    itemCount_el.textContent = `#${itemCount}`;
}

function hideItem() {
    loadingSpinner.style.display = 'none';
    itemCard.style.display = 'none';
    emptyState.style.display = 'block';
    footerInfo.style.display = 'none';
}

function updateButtonStates() {
    const category = gameData[currentCategory];
    verdadeBtn.disabled = category.verdades.length === 0;
    desafioBtn.disabled = category.desafios.length === 0;
}

// Inicializar
changeCategory();
