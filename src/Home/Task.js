import React from 'react';
import useTasks from '../hooks/useTasks';

const Task = ({ task }) => {
    const { _id, name, description } = task
    const [tasks, setTasks] = useTasks();
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete')
        if (proceed) {
            const url = `http://localhost:5000/service/${id}`;

            fetch(url, {
                method: 'DELETE'

            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log(data);
                        const remaining = tasks.filter(task => task._id !== id);
                        setTasks(remaining);

                    }



                })

        }
    }
    return (
        <div className='container'>
            <div className="card">
                <h4>Name:{name}</h4>
                <h4>Description:{description}</h4>
                <button onClick={() => handleDelete(tasks._id)} className='btn btn-danger'>Delete</button>
            </div>

        </div>
    );
};

export default Task;