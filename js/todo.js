const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

// 중복되는 단어
const TODOS_KEY = "todos";

let toDos = [];

// localStorage에 문자로 저장
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// toDo li 삭제
function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintToDo(newToDo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  // toDo 리스트에 들어갈 문장, id 그리고 버튼 이미지
  span.innerText = newToDo.text;
  li.id = newToDo.id;
  button.innerText = "💥";

  // 버튼 클릭 이벤트 추가
  button.addEventListener("click", deleteToDo);

  // li에 문장, 버튼 추가
  li.appendChild(span);
  li.appendChild(button);

  // toDo 리스트에 li 추가하여 화면에 표시
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newToDo = toDoInput.value;
  toDoInput.value = "";

  // toDo 리스트 객체, 구조
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };

  // toDos array에 toDo object 추가
  toDos.push(newToDoObj);

  // paintToDo에 생성될 toDo 전달
  paintToDo(newToDoObj);

  // localStorage에 추가
  saveToDos();
}

// 이벤트
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
