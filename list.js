  function add(){
     input=document.querySelector('#newtask input').value
    if(input.length==0){
        alert("enter new task")
    }
    else{
        tasks=document.querySelector("#tasks").innerHTML+=`
        <div class="task">
        <span>${input}</span>
         <button class="delete">
                    <i class="fa-solid fa-trash-can"></i>
                    </button>


            </div>

        `
    
    }
    //supprimer
    let remove=document.querySelectorAll('.delete')
    for(let i=0;i<remove.length;i++){
        remove[i].onclick=function(){
            this.parentNode.remove();
        }
    }
    //check
    let check=document.querySelectorAll('.task')
    for(let j=0;j<check.length;j++){
        check[j].onclick=function(){
            this.classList.toggle('line')
        }
       
    }
    //clear
    document.querySelector('#newtask input').value=""
    }