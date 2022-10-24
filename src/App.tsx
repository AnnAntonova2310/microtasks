import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";
type todolistsType = {
    id: any
    title: string
    filter: FilterValuesType
}

function App() {

    // let [tasks, setTasks] = useState([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    // let [filter, setFilter] = useState<FilterValuesType>("all");

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<Array<todolistsType>>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });


    function removeTask(id: string, todolistId: any) {// any!!!
        let todolistTasks = tasks[todolistId]
        tasks[todolistId] = todolistTasks.filter(t => t.id != id);
        setTasks({...tasks});
    }

    function addTask(title: string, todolistId: any) {
        let task = {id: v1(), title: title, isDone: false};
        let todolistTasks = tasks[todolistId]
        tasks[todolistId] = [task, ...todolistTasks];
        setTasks({...tasks});
    }

    function changeStatus(taskId: string, isDone: boolean, todolistId: any) {
        let todolistTasks = tasks[todolistId]
        let task = todolistTasks.find(t => t.id === taskId);
        if (task) {
            task.isDone = isDone;
        }

        setTasks({...tasks});
    }

    function changeFilter(value: FilterValuesType, todolistId: any) {
        let todolist = todolists.find(todolist => todolist.id === todolistId);
        if (todolist) {
            todolist.filter = value;
            setTodolists([...todolists])
        }
    }

    function removeTodoList(id: any) {
        setTodolists(todolists.filter(todolist => todolist.id !== id))
        delete tasks[id]
        setTasks({...tasks})
    }


    return (
        <div className="App">
            {
                todolists.map(todolist => {
                    let allTodolistTasks = tasks[todolist.id]
                    let tasksForTodoList = allTodolistTasks

                    if (todolist.filter === 'active') {
                        tasksForTodoList = allTodolistTasks.filter(task => task.isDone === false)
                    }

                    if (todolist.filter === 'completed') {
                        tasksForTodoList = allTodolistTasks.filter(task => task.isDone === true)
                    }
                    return <Todolist
                        key={todolist.id}
                        id={todolist.id}
                        title={todolist.title}
                        tasks={tasksForTodoList}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeStatus={changeStatus}
                        filter={todolist.filter}
                        removeTodoList={removeTodoList}
                    />
                })
            }

        </div>
    );
}
            export default App;
