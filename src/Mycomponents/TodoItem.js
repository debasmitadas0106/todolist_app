import React from 'react'

export const TodoItem = ({ todo, onDelete }) => {
    // const todo = Array.isArray(todo) ? todo : [];
    return (
        <div>

            <div key={todo.sno}>
                <h3>{todo.title}</h3>
                <p>{todo.desc}</p>
                {todo.alarm && (
                    <p>Alarm set for: {formatAlarm(todo.alarm)}</p>
                )}
                <button onClick={() => onDelete(todo) } className="btn btn-danger">Delete</button>
            </div>
        </div>
    );
}
const formatAlarm = (alarm) => {
    const formattedAlarm = new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short',
    }).format(new Date(alarm));

    return formattedAlarm;
}