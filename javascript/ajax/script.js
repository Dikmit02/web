$(()=>{

    let list=$('#people')
    let page=1;

    $('#fetch').click(()=>{
            //asynchronous get request from jquery
    // and here we are storing the result of the call back is stored inside the ans function
    $.get(`https://reqres.in/api/users?page=${page}`,(ans)=>{
        //console.log(ans)
// xhr  xml http request or ajax request when we click on fetch and open the network tab than we find the xhr file
    page++;
    for(let i of ans.data){
        //console.log(i)
        list.append(`<li>
        
        <img  width="100 px" src="${i.avatar}">
        ${i.first_name}
        

        </li>`)
    }

    })
})
    })
