import { useState } from 'react'

export default function ProfileSearchForm({ search }){
    const [term, setTerm] = useState('');

    function handleSubmit(evt){
        evt.preventDefault();
        search(term);
        setTerm(''); // 입력창 clean
    }

    function handleChange(evt){
        setTerm(evt.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="githubID">Git Hub ID </label>
            <input value={term} onChange={handleChange} id='githubID'/>
            <button>검색</button>
        </form>
    )
}