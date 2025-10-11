const fetchData = () => {
    return new Promise((resolve, reject)=> {
        setTimeout(()=>reject('Error'), 2000);
    })
}

const retry = (fn, retryCount) => {
    return fn().catch(err=>{
        if(retryCount > 1){
            console.info("===>retyring, attempts left", retryCount-1);
            return retry(fn, retryCount-1);
        }
        return Promise.reject(err)
    })
}

retry(fetchData, 3).then(results => console.info('fetch data success', results)).catch(error=>console.error('fetch data failed', error))
