let task = document.querySelector("input");
let Button = document.querySelector("button");
let taskList = document.querySelector(".task-container");

// when we reload page data will be save
function saveData(){
   localStorage.setItem("data",taskList.innerHTML);
}

function showTask(){
   taskList.innerHTML=localStorage.getItem("data");
}

showTask();


Button.addEventListener("click",()=>{

   if(task.value===''){
      alert("Please enter some task");
   }
   else{
      let li = document.createElement("li");
      li.innerHTML = task.value;
      let span = document.createElement("span");
      span.innerHTML= `<i class="fa-regular fa-circle-xmark"></i> `;
      li.append(span);
      taskList.append(li);
      saveData();
   }

   task.value="";

});

taskList.addEventListener("click",(ele)=>{
   
   if(ele.target.tagName==="LI"){
      if(ele.target.getAttribute("class")==="check")
         ele.target.classList = "uncheck";
      else
         ele.target.classList = "check";
   }
   else if(ele.target.tagName==="I"){

      ele.target.parentElement.parentElement.remove();

   }
   saveData();
});