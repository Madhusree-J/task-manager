import React, { useState } from 'react';

import Todo from './Task';



const App = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({name:"" , deadline:"" });


    const handleButtonClick = () => {
        if(newTask.name && newTask.deadline) {
            setTasks([...tasks, {...newTask, status:"pending"}]);
            setNewTask({name:"",deadline:"" });
            
        }else{
            alert('Enter both task and deadline');
        }
        

    
};


const toggleTaskStatus = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = updatedTasks[index].status === 'completed' ? 'pending' : 'completed';
    setTasks(updatedTasks);
};
return(
    <div className="w-full min-h-screen bg-gradient-to-r from-blue-400 to-blue-300 py-10no">

    <div className="w-[70%] h-[85%] mx-auto lg:w-[30%]">

        <header className=' p-[8%] bg-pink-900 flex justify-center items-center mb[5%] border-[1px] border-black shadow-[2px_2px_2px_black]'>

            <h1 className="text-3xl font-bold align-middle text-white">MY TASK MANAGER</h1>

            </header>

           
            

           

            <div className='min-h-[90%] bg-pink-800 px-[5%] mb-[5%] flex flex-col border-[1px]  border-black shadow-[2px_2px_2px_black]'>
                <label htmlFor='task' className='text-white'>Task:</label>
                <input 
                type='text'
                id='task'
                placeholder='Add a task....'
                value={newTask.name}
                onChange={(e)=> setNewTask({...newTask, name: e.target.value})}
                />

            </div>

            <div className='min-h-[90%] bg-pink-800 px-[5%] mb-[5%] flex flex-col border-[1px]  border-black shadow-[2px_2px_2px_black]'>
                <label htmlFor='deadline' className='text-white'>Deadline:</label>
                <input type='datetime-local'
                id='deadline'
                value={newTask.deadline}
                onChange={(e)=> setNewTask({...newTask, deadline: e.target.value})}
                />
                </div>
                <div className='bg-pink-800 w-12 pl-1 items-center justify-center align-middle'>
                    
                        <button onClick={handleButtonClick} type='submit'>ADD TASK </button>
                    
                </div>
                <Todo tasks={tasks} onToggleStatus={toggleTaskStatus} className='box-content bg-gray-500' />
                
            
             
            </div>
    </div>
)
}

export default App;