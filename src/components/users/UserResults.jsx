
import {useEffect, useState} from 'react'
import Spinner from '../layout/Spinner';
import UserItem from '../users/UserItem'
function UserResults(){
    const url = 'https://api.github.com'
    const token = "******************************"
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetchUsers();
    }, [])
    const fetchUsers = async ()=> {
        // const response = await fetch(`${url}/users`, {
            // headers:{
            //     Authorization: `token ${token}`
            // }
        // })
        const response = await fetch(`${url}/users`)
        const data = await response.json();
        //console.log(`data ${JSON.stringify(data)}`);
        // console.log(data)
        setUsers(data);
        setLoading(false);
    }
    if(!loading){
        return (
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
            {users.map((user) => (
                // <h3>{user.login}</h3>
                <UserItem key={user.id} user={user} />
            ))}
        </div>
        )
    }
    else{
        return <Spinner />
    }
}

export default UserResults