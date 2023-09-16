// const tasks = [
//     {
//         id:1,
//         text: 'Doctors Appointment',
//         day: 'Feb 5th at 2:30pm',
//         reminder: true,
//     },
//     {
//         id:2,
//         text: 'Doctors1 Appointment',
//         day: 'Feb 5th at 2:30pm',
//         reminder: true,
//     },
//     {
//         id:3,
//         text: 'Doctors3 Appointment',
//         day: 'Feb 5th at 2:30pm',
//         reminder: true,
//     },
//     {
//         id:4,
//         text: 'Doctors4 Appointment',
//         day: 'Feb 5th at 2:30pm',
//         reminder: true,
//     },
//     {
//         id:5,
//         text: 'Doctors5 Appointment',
//         day: 'Feb 5th at 2:30pm',
//         reminder: true,
//     },
    
// ];
import Task from "./Task";
const Tasks = ({tasks, onDelete, onToggle}) => {
  return (

    <>
        {tasks.map((task)=>(
          <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>
          ))}
    </>
  )
}

export default Tasks;



