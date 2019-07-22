function download(url,downloaded){
    console.log(`Downloading from ${url}`);
    if(!url.startsWith('https')){
        return downloaded(new Error('Url must start with http'))
    }
    setTimeout(() => {
        let savedfile=url.split('/').pop()
        console.log(`Download and saved as ${savedfile}`);
        downloaded(null,savedfile)
    }, 3000);
}

function compress(file,format,compressed){
    console.log(`Compressing ${file}`);
    if(['zip','gzip','7z'].indexOf(format)===-1){
        return compressed(new Error('we only support zip,gzip and 7z'))
    }
    setTimeout(() => {
        let archive=file.split('.')[0]+'.'+format
        console.log(`Compressed and saved as ${archive}`);
        compressed(null,archive)
        
    }, 2000);
}

function upload(server,file,uploaded){
    console.log(`Uploading ${file} to ${server}`);
    if(!server.startsWith('ftp://')){
        return uploaded(new Error(`We can only upload to FTP services`))
    }
    setTimeout(() => {
        let remotepath=`${server}/${file}`
        console.log(`Uploaded to ${remotepath}`);
        uploaded(null,remotepath)
    },1000);
}

download('https://somesite.cm/path/image.jpg',(err,file)=>{
    if(err) throw err
    
    compress(file,'lzip',(err,archive)=>{
        if(err){
        console.warn(err)
        archive=file
    }
    
        upload('ftp://file.com',archive,(err)=>{
            if(err) throw err
        })
    })
})
