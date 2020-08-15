import React from 'react'
import { useForm } from "react-hook-form";
import { createTask } from '../services/ToDoService'

export default function CreateTask(props) {

    const { register, handleSubmit } = useForm();
    const onSubmit = (data, e) => {
        createTask(data).then(response => {
            props.taskCreated();
            e.target.reset();
        });
    };

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 mrgnbtm">
                <h2>ToDo List</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputEmail1">Task</label>
                            <input type="text" className="form-control" name="task" id="task" aria-describedby="emailHelp" ref={register} placeholder="Create a Task" />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="exampleInputPassword1">Assignee</label>
                            <input type="text" className="form-control" name="assignee" id="assignee" ref={register} placeholder="Assignee" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-md-12">
                            <label htmlFor="exampleInputEmail1">Status:</label>
                            <select className="form-control" name="status" ref={register} id="sel1">
                                <option>To Be Done</option>
                                <option>In Progress</option>
                                <option>Completed</option>
                            </select>
                        </div>
                    </div>
                    <input type="submit" className="btn btn-danger" />
                </form>
                </div>
            </div>
        </div>
    )
}