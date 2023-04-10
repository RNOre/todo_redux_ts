import {useTypedSelector} from "../hooks/useTypedSelector";
import React, {useEffect} from "react";
import {fetchUsers} from "../store/action-creator/user";
import {fetchTodos} from "../store/action-creator/todo";
import {useActions} from "../hooks/useActions";

const TodoList: React.FC = () => {

    const {page, error, loading, todos, limit} = useTypedSelector(state => state.todo);
    const {fetchTodos, setTodoPage} = useActions();
    const pages = [1, 2, 3, 4, 5];

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    if (loading) {
        return <h1>Loading</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {todos.map(el => <div>{el.id} - {el.title}</div>)}
            <div style={{display: 'flex'}}>
                {pages.map(el =>
                    <div onClick={()=> setTodoPage(el)}
                        style={{border: el === page ? '2px solid green' : '1px solid gray', padding: 10}}
                    >
                        {el}
                    </div>)}
            </div>
        </div>
    )
}

export default TodoList;