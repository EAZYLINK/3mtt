import { useState } from 'react'

const Fetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null)
    const [isPending, setIspending] = useState(true);
        fetch(url)
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
            setIspending(false)
            setError(err.message)
        })
    return {data, isPending, error};
}

export default Fetch;