
let addBtn = document.querySelector(".addBtn");

var li;
let todoInput = document.querySelector(".todoInput");

todoInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addBtn.click();
  }
});
 addBtn.addEventListener("click",()=>{
  let inputValue = document.querySelector(".todoInput").value;
  let text = document.createTextNode(inputValue);
  
  if(inputValue == ""){
    alert("Please enter task!")

  }

  else{
    li = document.createElement("li");
    li.appendChild(text)
    document.querySelector(".todoList").appendChild(li)

    
    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deletebtn");
    deleteBtn.addEventListener("click", (event) => {
      event.target.closest("li").remove();
    });

    li.appendChild(deleteBtn);
    document.querySelector(".todoList").appendChild(li);

    
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox")
    checkbox.addEventListener("change", () => {
    li.classList.toggle("completed");
   });
    li.appendChild(checkbox);
  }
  
  
  document.querySelector(".todoInput").value = "";



  
 });