import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneTodo, saveChanges } from '../store/todoSlice';

const EditTodo = () => {
    const { oneTodo } = useSelector(state => state.todos);
    const [ todo1, setTodo1 ] = useState('');
    const [ todo2, setTodo2 ] = useState('');
    const [ todo3, setTodo3 ] = useState('');
    const { id } = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getOneTodo(id));
    }, []);

    useEffect(() => {
        if(oneTodo) {
            setTodo1(oneTodo);
            setTodo2(oneTodo);
            setTodo3(oneTodo);
        };
    }, [oneTodo]);

    return (
        <>
            {oneTodo ? (
                <div>
                    <h3>Edit TODO</h3>
                    <input type="text" onChange={e => setTodo1({ ...todo1, body: e.target.value })} value={todo1.body} />
                    <input type="text" onChange={e => setTodo2({ ...todo2, body: e.target.value })} value={todo2.body} />
                    <input type="text" onChange={e => setTodo3({ ...todo3, body: e.target.value })} value={todo3.body} />
                    <button onClick={() => {
                        dispatch(saveChanges(todo1));
                        dispatch(saveChanges(todo2));
                        dispatch(saveChanges(todo3));
                        navigate('/');
                    }}>Save Changes</button>
                </div>
            ) : (
                <h5>Loading...</h5>
            )}
        </>
    );
};

export default EditTodo;