$(()=>{
    let list=$('#list');
    let item=$('#item')
    // clicking the prepend button
    $('#prepend').click(()=>{



        // console.log($('#item').val())
        // printing the value of input on console by pressing the append button here it is reading the data


        // console.log($('#item').val('diksha'))
        // on pressing the append button 'diksha' is stored in the input here it is writing the data


        let text=item.val();
        list.prepend($(`<li>${text}</li>`).css('color','blue'))
        // $('#list').prepend($(`<li>${text}</li>`)) // list get printed on the console
        // $('#list').prepend($(`<li>`).text(text))

        // both both do the same thing
       // list.prepend($(`<li>`).html(`<b>${text}</b>`))
//prepend($(`<li>${text}</li>`) element is creating
//prepend($(`li`)// element is selecting

        

    })

    $('#append').click(()=>{
        let text=item.val()
         list.append($(`<li>`).text(text).css('color','red'))
        //list.append($(`<li>${text}</li>`))
    })
})
