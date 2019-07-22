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

async function task(){
    try{
        const file=await download('https://somesite.cm/path/image.jpg')
        const archive =await compress(file,'zip')
        await upload('ftp://files.com',archive)
    }
    catch(err){
        console.warn('there is some error')
    }
}
task()