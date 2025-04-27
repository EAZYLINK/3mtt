import { useEffect, useState } from 'react'

const Fetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null)
    const [isPending, setIspending] = useState(true);
    useEffect(()=> {
        const abortCont = new AbortController();
        setTimeout(() =>{
        fetch(url, { signal: abortCont.signal })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error retrieving data')
            }
            return response.json();
        })
        .then(data =>{
            setError(null);
            setIspending(false);
            setData(data);
        })
        .catch(err => {
            if (err.name === 'AbortError') {
                console.log('fetch aborted')
            } else {
            setIspending(false)
            setError(err.message)
            }
        })

    }, 1000)
    }, [url])
    return {data, isPending, error};
}

export default Fetch;