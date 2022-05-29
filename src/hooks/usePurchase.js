import { useEffect, useState } from 'react';

const usePurchase = id => {
    const [purchase, setPurchase] = useState({});
    useEffect(() => {
        const url = `https://fathomless-lake-35584.herokuapp.com/tools/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPurchase(data))
    }, [id])
    return [purchase, setPurchase];
}

export default usePurchase;