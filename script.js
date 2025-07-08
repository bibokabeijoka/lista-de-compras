// Função principal para adicionar item
function addItem() {
  const input = document.getElementById("itemInput");
  const itemText = input.value.trim();

  if (itemText !== "") {
      const list = document.getElementById("shoppingList");

      const li = document.createElement("li");
      li.textContent = itemText;

      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remover";
      removeBtn.onclick = () => li.remove();

      li.appendChild(removeBtn);
      list.appendChild(li);

      input.value = "";

      spawnAnt(); // chama a função da formiguinha
  }
}



// Cria e anima a formiguinha
function spawnAnt() {
  const ant = document.createElement("div");
  ant.className = "ant";
  ant.innerText = "🐜";

  // posição horizontal aleatória
  ant.style.left = Math.random() * 90 + "%";

  document.body.appendChild(ant);

  // remove após a animação
  setTimeout(() => {
      ant.remove();
  }, 3000);
}

// Evento para tecla Enter
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("itemInput");

  input.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
          addItem();
      }
  });
});
