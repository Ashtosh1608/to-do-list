import { useState } from 'react';

// import { useState } from 'react';
import './App.css';
import { Addlist } from "./MyComponents/Addlist";
import { Addnewtask } from "./MyComponents/Addnewtask";


function App() {
  const [showtask, setShowtask] = useState(false)
  const [task, setTask] = useState([
    // const task = ([
    {
      id: 1,
      complete: true,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      complete: true,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      complete: false,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    }
  ]);
  const cut = (fpass) => {
    // console.log("value of compllll" ,task.complete ),
    setTask(task.map(rem => (
      rem.id == fpass ? { ...rem, complete: !rem.complete } : rem
    )))
  }

  const paragraph = (fpass) => {
    setTask(task.map(pass => (
      pass.id == fpass ? { ...pass, reminder: !pass.reminder } : pass
    )))

  }

  const onAdd = (fpass) => {
    const id = task.length + 1
    // const id = Math.floor(Math.random() * 10000) + 1
    // console.log("length is", id)
    // const id = task.length +1
    const neww = { id, ...fpass }
    setTask([...task, neww])
  }
  const ondelete = (fpass) => {
    setTask(task.filter(pass => (
      pass.id !== fpass
    )))

  }
  // const toggle = () => {
  //   setShowtask(showtask.map(pass=>(
  //     pass == true ? {pass : !pass} : pass
  //   )))
  // }
  return (
    <div className="App">
      <div className='upperformadd'>
        <p style={{ fontSize: "20px" }}>Add Task</p>

        <button onClick={()=> setShowtask( !showtask)}  className={showtask==true? "buttoonopposite": "buttoon"}><p>{ showtask==true? "Close": "Add"}</p></button>
      </div>
      {showtask && <div className='formadd'>

        < Addnewtask onAdd={onAdd} />
      </div>
      }

      <div className='alltodo'>
        {task.map(tsk => (
          <Addlist key={tsk.id} complete={tsk.complete} id={tsk.id} reminder={tsk.reminder} cut={cut} text={tsk.text} day={tsk.day} ondelete={ondelete} paragraph={paragraph} />
        ))}


      </div>
      {/* <FontAwesomeIcon icon={faCoffee} /> */}

    </div>
  );
}

export default App;
