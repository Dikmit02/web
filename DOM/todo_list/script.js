window.onload=function(){
    let newtask=this.document.getElementById('newtask')
    let addtask=this.document.getElementById('addtask')
    let todolist=this.document.getElementById('todolist')
    
    addtask.onclick=function(){
        
        let li=document.createElement('li')
        
        //Add delete button
        let xbtn=document.createElement('button')
        xbtn.innerText='(X)'
        xbtn.onclick=function(){
            event.target.parentElement.remove()
        }

        //Add up button
        let upBtn=document.createElement('button')
        upBtn.innerText="↑"
        upBtn.onclick=function(){
            //event.target=the up button
            //event.target.parentElement=<li></li>
            //event.target.parentElement.parentElement = todolist
            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement,// insert this elemnt
                event.target.parentElement.previousElementSibling// before its sibling



            )
        }
        

        //Add downButton\
        let downbtn=document.createElement('button')
        downbtn.innerText="↓"
        downbtn.onclick=function(){
            event.target.parentElement.parentElement.insertBefore(
                event.target.parentElement.nextElementSibling,//insert next elemnt
                event.target.parentElement// before curent element
            )
        }



        let taskspan=document.createElement('span')
        taskspan.innerText=newtask.value
        
        li.appendChild(xbtn)
        li.appendChild(upBtn)
        li.appendChild(downbtn)
        li.appendChild(taskspan)
        
        todolist.appendChild(li)

        


        

    }
  
    



}

// bad method
        // let li=newtask.value
        // todolist.innerHTML+='<li>'+ li +'</li>'