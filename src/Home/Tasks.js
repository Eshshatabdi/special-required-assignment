import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTasks from '../hooks/useTasks';
import Task from './Task';


const Tasks = () => {
    const [tasks] = useTasks()

    return (
        <div className='container my-5 g-5'>
            <h2 className='text-center text-success '>Tasks Items</h2>
            <div className="row gy-5">
                {
                    tasks.map(task => <Task
                        key={task._id}

                        task={task}>
                    </Task>)
                }
            </div>

            <div className="text-center">
                <button className='text-primary'>Complete</button>
            </div>

        </div>
    );
};

export default Tasks;