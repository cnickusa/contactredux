import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';

const AddTodo = () => {
    const [todoContent1, setTodoContent1] = useState('');
    const [todoContent2, setTodoContent2] = useState('');
    const [todoContent3, setTodoContent3] = useState('');
    const dispatch = useDispatch('');

    function createTodo() {
        if(!todoContent1.trim()) return alert('Input is empty!');
        if(!todoContent2.trim()) return alert('Input is empty!');
        if(!todoContent3.trim()) return alert('Input is empty!');

        let newTodo1 = {
            id: Date.now(),
            body: todoContent1,
            status: false
        };

        let newTodo2 = {
            id: Date.now(),
            body: todoContent2,
            status: false
        };

        let newTodo3 = {
            id: Date.now(),
            body: todoContent3,
            status: false
        };

        dispatch(addTodo(newTodo1));
        dispatch(addTodo(newTodo2));
        dispatch(addTodo(newTodo3));

        setTodoContent1('');
        setTodoContent2('');
        setTodoContent3('');
    }

    return (
        <div>
            <h3>Contact Book</h3>
            <input type="text" onChange={e => setTodoContent1(e.target.value)} value={todoContent1}></input>
            <input type="text" onChange={e => setTodoContent2(e.target.value)} value={todoContent2}></input>
            <input type="text" onChange={e => setTodoContent3(e.target.value)} value={todoContent3}></input>
            <button onClick={createTodo}>Add</button>
        </div>
    );
};

export default AddTodo;




