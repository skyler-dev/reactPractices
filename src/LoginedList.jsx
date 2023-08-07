import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import LoginFormWithReactHookForm from './LoginFormWithReactHookForm';
import './LoginedList.css';
function LoginedList() {
    const [users, setUsers] = useState([
        {id: uuid(), email: 'mark@gmail.com', password: '1234567'},
        {id: uuid(), email: 'julia@naver.com', password: '7654321'},
    ])
    const addUser = (user) =>{
        setUsers((currentUsers)=>{
            return [... currentUsers, {...user, id: uuid()}];
        });
    }
    return (
        <div className='LoginedList'>
            {/* 연습을 위해 비밀번호는 공개상태입니다 */}
            <h2>사용자 이메일과 비밀번호 리스트</h2>
            <ul>
                {users.map((u)=>(
                    <li key={u.id}>
                        {u.email} - {u.password}
                    </li>
                ))}
            </ul>
            <LoginFormWithReactHookForm addUser={addUser}/>
        </div>
    )
}

export default LoginedList;