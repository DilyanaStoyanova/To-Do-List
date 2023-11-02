import { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import Spinner from "./Spinner";

export default function Main() {
    const [todos, setTodos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/todos')
            .then(response => response.json())
            .then(data => {
                setTodos(Object.values(data));
                setIsLoading(false);
            })
            .catch(err => console.log(err));
    }, []);

    const changeStatusHandler = (id) => {
        setTodos(state => state.map(todo => todo._id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo));
    };

    const addTodoHandler = () => {
        const lastId = Number(todos[todos.length - 1]._id.split('_')[1]);

        const _id = lastId + 1;
        const text = prompt('New task to add');
        const newTask = { _id, text, isCompleted: false };

        setTodos(state => [...state, newTask]);
    };

    return (
        <main className="main">

            <section className="todo-list-container">
                <h1>Todo List</h1>

                <div className="add-btn-container">
                    <button className="btn" onClick={addTodoHandler}>+ Add new Todo</button>
                </div>

                {isLoading
                    ? <Spinner />
                    : <table className="table">
                        <thead>
                            <tr>
                                <th className="table-header-task">Task</th>
                                <th className="table-header-status">Status</th>
                                <th className="table-header-action">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todos.map(item =>
                                <TodoItem
                                    key={item._id}
                                    {...item}
                                    changeStatusHandler={changeStatusHandler}
                                />)}
                        </tbody>
                    </table>
                }

            </section>
        </main >
    );
}