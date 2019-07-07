// function downloadFile(url,downloaded){
//     // we are downloading the file
//     // Let's assume it takes 3 seconds to download
//     // we use setTimeout to genearate fake delay

//     console.log("Downloading file:"+url)

//     setTimeout(function(){
//         let filePath="C:\\Windows\\xyz.txt"
//         console.log("File wa sownloaded to:")
//         downloaded(filePath)
//     },3000)
// }
// downloadFile("https://google.com/logo.png",function(path){
//     console.log("We got the file at: "+path)
// })


//example 2



// function resizeFile(filePath,resized){
//     //We re resizing the file.It takes 2 seconds
//     //We again use a fake setTimeout delay

//     console.log("We are rezing "+filePath)
//     setTimeout(function(){
//         let newPath=filePath.split(".")[0]+"-resized."+filePath.split(".")[1]
//         resized(newPath)
//     },2000)
// }
// resizeFile("C:\\Users\\Diksha\\photo.jpg",function(path){
//     console.log("Resized file is at:"+path)
// })







// example 3
// function downloadFile(url,downloaded){
//     // we are downloading the file
//     // Let's assume it takes 3 seconds to download
//     // we use setTimeout to genearate fake delay

//     console.log("Downloading file:"+url)

//     setTimeout(function(){
//         let filePath="C:\\Windows\\"+url.split('/').pop()
//         console.log("File wa sownloaded to:"+filePath)
//         downloaded(filePath)
//     },30000)
//  }
//  function resizeFile(filePath,resized){
//     //We re resizing the file.It takes 2 seconds
//     //We again use a fake setTimeout delay

//     console.log("We are rezing "+filePath)
//     setTimeout(function(){
//         let newPath=filePath.split(".")[0]+"-resized."+filePath.split(".")[1]
//         resized(newPath)
//     },20000)
// }
// downloadFile("https://google.com/logo.png",function(downloadedpath){
    
//     resizeFile(downloadedpath,function(path){
//         console.log("Resized file is at:"+path)
//     })
// })



function downloadFile(url,downloaded){
    // we are downloading the file
    // Let's assume it takes 3 seconds to download
    // we use setTimeout to genearate fake delay

    console.log("Downloading file:"+url)

    setTimeout(function(){
        let filePath="C:\\Windows\\"+url.split('/').pop()
        console.log("File wa sownloaded to:"+filePath)
        downloaded(filePath)
    },3000)
 }
 function resizeFile(filePath,resized){
    //We re resizing the file.It takes 2 seconds
    //We again use a fake setTimeout delay

    console.log("We are rezing "+filePath)
    setTimeout(function(){
        let newPath=filePath.split(".")[0]+"-resized."+filePath.split(".")[1]
        resized(newPath)
    },2000)
}
function uploadFile(diskPath,uploaded){
    //We will upload this file,it takes 3 sconds ,
    //we will use another fake setTimeout delay logic
    setTimeout(function(){
        let uploadedPath="http://cb.lk//uploads"+diskPath.split('\\').pop()
        console.log("we uploaded to"+uploadedPath)
        uploaded(uploadedPath) 

    },3000)
}
downloadFile("https://google.com/logo.png",function(downloadedpath){
    
    resizeFile(downloadedpath,function(resizedpath){
        uploadFile(resizedpath,function(uploadedurl){
            console.log("uploaded successfully to:"+uploadedurl)
        })
    })
})
