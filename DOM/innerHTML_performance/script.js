window.onload=function(){
    let num=this.document.getElementById('num')
    let button=this.document.getElementById('print')
    let list=this.document.getElementById('list')
    
   

    button.onclick=function(){
        let start=new Date().getTime()
        let n =parseInt(num.value)


        //method2
        let listHtml=" "
        for(let i=1;i<=n;i++){
            //list.innerHTML+='<li>'+ i +'</li>'

            /*let newstr= list.innerHTML+'<li>'+ i +'</li>'
            list.innerHTML=null
            list.innerHTML=newstr*/

            //method2
            listHtml+='<li>'+ i +'</li>'

            // better way without using innerHtML
            // let item =document.createElement('li')
            // item.innerText=i
            // list.appendChild(item)

        }
        list.innerHTML=listHtml;
        console.log(new Date().getTime()-start)
    }
   
    
    



}