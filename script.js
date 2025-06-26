let items = JSON.parse(localStorage.getItem('shoppingList')) || [];

const listElement = document.getElementById('shoppingList');
const inputElement = document.getElementById('itemInput');
const ant = document.getElementById('ant');

function renderList() {
  listElement.innerHTML = '';

  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'X';
    removeBtn.onclick = () => {
      removeItem(index);
    };

    li.appendChild(removeBtn);
    listElement.appendChild(li);
  });
}

function addItem() {
  const newItem = inputElement.value.trim();
  if (newItem === '') {
    alert('Por favor, digite um item.');
    return;
  }

  items.push(newItem);
  localStorage.setItem('shoppingList', JSON.stringify(items));
  inputElement.value = '';
  renderList();

  // Mostra e anima a formiguinha
  ant.style.display = 'block';
  ant.style.animation = 'none'; // reset animation
  ant.offsetHeight; // trigger reflow
  ant.style.animation = 'walk 3s linear forwards';

  // Esconde a formiguinha quando terminar a animação
  ant.addEventListener('animationend', () => {
    ant.style.display = 'none';
  }, { once: true });
}

function removeItem(index) {
  items.splice(index, 1);
  localStorage.setItem('shoppingList', JSON.stringify(items));
  renderList();
}

inputElement.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addItem();
  }
});

renderList();