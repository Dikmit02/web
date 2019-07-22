function download(url){

    return new Promise((resolve,reject)=>{
        console.log(`Downloading from ${url}`);
        if(!url.startsWith('https')){
            return reject(new Error('Url must start with http'))
    }
    setTimeout(() => {
        let savedfile=url.split('/').pop()
        console.log(`Download and saved as ${savedfile}`);
        resolve(savedfile)
    }, 3000);
    })
    
    
}

function compress(file,format){
    return new Promise((resolve,reject)=>{
        console.log(`Compressing ${file}`);
        if(['zip','gzip','7z'].indexOf(format)===-1){
            return reject(new Error('we only support zip,gzip and 7z'))
    }
    setTimeout(() => {
        let archive=file.split('.')[0]+'.'+format
        console.log(`Compressed and saved as ${archive}`);
        resolve(null,archive)
        
    }, 2000);
    })
}

function upload(server,file){
   return new Promise((resolve,reject)=>{
    console.log(`Uploading ${file} to ${server}`);
    if(!server.startsWith('ftp://')){
        return reject(new Error(`We can only upload to FTP services`))
    }
    setTimeout(() => {
        let remotepath=`${server}/${file}`
        console.log(`Uploaded to ${remotepath}`);
        resolve(remotepath)
    },1000);
   })
}


// download('https://somesite.cm/path/image.jpg')
//     .then((file)=>{
//         compress(file,'zip')
//         .then((archive)=>{
//             upload('ftp://file.com',archive)
//         })
//     })


// // if any error ocurred in any promise then the error is printed and the next promise will not execute
// download('https://somesite.cm/path/image.jpg')
//     .then((file)=>compress(file,'zip'))
//     .then((archive)=> upload('ftp://file.com',archive))
//     .catch((err)=>console.error('erro'))


// // error handling for eACH promise
// download('https://somesite.cm/path/image.jpg')
//     .then((file)=>compress(file,'ip'))
//     .catch((err)=>console.error('error in downloading the file'))
//     .then((archive)=> upload('ftp://file.com',archive))
//     .catch((err)=>console.error('error in compressing the file'))



// caaling al the three functions simantaneously
Promise.all([
    download('https://cb.lk/logo.png'),
    download('https://cb.lk/banner.png'),
    download('https://cb.lk/promo.png')
]).then(function(downloadValues){
    return Promise.all(downloadValues.map(compress))
}).then(function (compressValue){
    return Promise.all(compressValue.map(upload))
}).then(function (uploadValues){
    console.log(uploadValues);
}).catch(function(err){
    console.log(err)
})






































