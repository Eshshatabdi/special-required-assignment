import React from 'react';

const AddTask = () => {
    const addToTasks = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;
        console.log(name, description)

        const data = { name, description }
        const url = `http://localhost:5000/service`
        fetch(url, {


            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data =>
                // console.log(data))
                alert('successfully data added'))

        event.target.reset();

    }
    return (
        <form onSubmit={addToTasks} className='container w-50 text-center mt-4'>
            <h2 className='text-center text-primary'>Add Task</h2>
            <div className="card">
                <input type="text" name="name" placeHolder='name' id="" />
                <br />
                <input type="text" name="description" placeHolder='description' id="" />
                <br />
                <input className='btn btn-primary' type="submit" value="Add Task" />

            </div>
        </form>
    );
};

export default AddTask;