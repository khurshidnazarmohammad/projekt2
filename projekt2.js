let addBtn = document.querySelector("button");
let taskList = document.querySelector("ul");
let input = document.querySelector("input");

addBtn.addEventListener("click", () => {
  let text = input.value;
  let task = creatTask(text);
  taskList.appendChild(task);
  input.value = "";
});

function creatTask(text) {
  let li = document.createElement("li");
  li.textContent = text;
  return li;
}
