import React, { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    // const [date, setDate] = useState("");


const submit = (e) => {
    e.preventDefault();
    if (!title) {
        alert("Title cannot be blank");
    }
    else {
        addTodo(title);
        setTitle("");

    }
}
return (
    <div className="container my-3">
        
        <form onSubmit={submit}>
            <span>
            <h4 className="mb-0">Add a Todo</h4>
            <div className="mb-3">
                <label htmlFor="title" className="form-label"></label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} 
                className="form-control" id="title" aria-describedby="emailHelp" />

            </div>
            {/* <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                </div> */}
            {/* <div className="mb-3">
                <label htmlFor="date" className="form-label">Due Date</label>
                <DatePicker
                    selected={date}
                    onChange={(newDate) => setDate(newDate)}
                    id="date"
                    dateFormat="dd-MM-yyyy"
                />
            </div> */}
            <button type="submit" className="btn btn-sm btn-success">Add</button></span>
        </form>
    </div>
);
};