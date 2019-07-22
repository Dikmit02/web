$(()=>{
     let list=$('#list');
     let input=$('#input')
     let cont="checkbox"
   
     

    $("#add_project_btn").click(()=>{
        let item=input.val();
        let f="diksnsknkj"
        // list.find('ul').append($('<li>').html('<input>').text(item))
        list.append(
            $('<li>').append(
                $(`<input>`).attr('type','checkbox')
            )).text(item)
    })
    
    
})

    
    

 