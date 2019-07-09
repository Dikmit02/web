window.onload=function(){
    let newtask=this.document.getElementById('newtask')
    let addtask=this.document.getElementById('addtask')
    let todolist=this.document.getElementById('todolist')
    
    addtask.onclick=function(){


        
        let li=document.createElement('li')
        li.innerText=newtask.value
        let xbtn=document.createElement('button')
        xbtn.innerText='(X)'
        xbtn.onclick=function(){
            event.target.parentElement.remove()
        }
        li.appendChild(xbtn)
        todolist.appendChild(li)

        


        

    }
  
    



}

// bad method
        // let li=newtask.value
        // todolist.innerHTML+='<li>'+ li +'</li>'