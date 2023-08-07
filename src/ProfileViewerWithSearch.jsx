import { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileSearchForm from './ProfileSearchForm';

// 깃허브 사용자 목록
const BASE_URL = 'https://api.github.com/users';

export default function ProfileViewerWithSearch(){
    const [username, setUsername] = useState('vitejs');
    const [profile, setProfile] = useState({data: null, isLoading: true});
    
    async function fetchUser(){
        const userRes = await axios.get(`${BASE_URL}/${username}`);
        console.log(userRes);
        setProfile({data: userRes.data, isLoading: false});
    }
    useEffect(()=>{
        fetchUser();
    }, [username]);


    function search(username){
        setProfile({ data: null, isLoading: true });
        setUsername(username);
    }

    if(profile.isLoading) return <i>로딩 중 입니다...</i>

    return (
        <div>
            <ProfileSearchForm search={search}/>
            <b>{profile.data.name}</b>
            <img src={profile.data.avatar_url}/>
        </div>
    )
}