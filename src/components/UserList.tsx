import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUsers} from "../store/action-creator/user";
import type {} from 'redux-thunk/extend-redux';
import {Simulate} from "react-dom/test-utils";
import load = Simulate.load;
import {useActions} from "../hooks/useActions";

const UserList: React.FC = () => {
    const {users, loading, error} = useTypedSelector(state => state.user)
    const {fetchUsers} = useActions();


    useEffect(() => {
        fetchUsers()
    }, [])

    if (loading) {
        return <h1>Loading</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map(el => <div key={el.id}>{el.name}</div>)}
        </div>
    )
}

export default UserList;