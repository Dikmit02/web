////promised back into call based function

const util=require('util')

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


const downloadcb = util.callbackify(download)
const compresscb = util.callbackify(compress)
const uploadcb = util.callbackify(upload)


downloadcb('https://somesite.cm/path/image.jpg',(err,file)=>{
    if(err) throw err
    
    compresscb(file,' zip',(err,archive)=>{
        if(err){
        console.warn(err)
        archive=file
    }
    
        uploadcb('ftp://file.com',archive,(err)=>{
            if(err) throw err
        })
    })
})