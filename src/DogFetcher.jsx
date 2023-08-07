import { useState, useEffect } from 'react';
import './DogFetcher.css';
// {message: 'https://images.dog.ceo/breeds/retriever-flatcoated/n02099267_1639.jpg', status: 'success'}
const RANDOM_Dog_URL = 'https://dog.ceo/api/breeds/image/random';


export default function DogFetcher(){
    const [dog, setDog] = useState('');

    // 마운트(initial render)시에만 실행됨
    useEffect(()=>{
        fetchDog(); // 비동기 콜백 간접호출
    }, []);

    async function fetchDog(){
        const res = await fetch(RANDOM_Dog_URL);
        const jsonRes = await res.json();
        const RandomDog = jsonRes.message;
        setDog(RandomDog);
    }

    return (
        <div className='DogFetcher'>
            <img src={dog} alt="dog"/>
            <button onClick={fetchDog}>새 강아지 사진을 얻어보세요</button>
        </div>
    )
}