const task = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskListUl = document.getElementById("taskList");

task.addEventListener("keydown", (e) => e.key === "Enter" && addTask());
addTaskButton.addEventListener("click", addTask);
taskListUl.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.parentElement.remove();
  }
  if (e.target.tagName === "INPUT") {
    if (e.target.checked) {
      const spanEl = e.target.parentElement.parentElement.querySelector("span");
      spanEl.style.textDecoration = "line-through";
      e.target.parentElement.style.color = "green";
      e.target.parentElement.style.textDecoration = "underline";
    } else {
      const spanEl = e.target.parentElement.parentElement.querySelector("span");
      spanEl.style.textDecoration = "none";
      e.target.parentElement.style.color = "black";
      e.target.parentElement.style.textDecoration = "none";
    }
  }
});
let counter = 0;
function addTask() {
  const taskName = task.value.trim();
  if (taskName) {
    counter++;
    let color = counter % 2 ? "none" : "#dedede";
    const li = document.createElement("li");
    li.innerHTML = `
    <div class="line">
        <span>${taskName}</span>
        <label>
        <input type="checkbox" name="Done">
          Done
        </label>
        <button>Delete</button></div>`;
    taskListUl.appendChild(li).style.backgroundColor = color;
  }
  task.value = "";
  task.focus();
}
