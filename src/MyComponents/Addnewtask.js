import React, { useState } from 'react';

export const Addnewtask = (props) => {

    const [text, setText] = useState("")
    const [day, setDay] = useState("")
    const [reminder, setReminder] = useState(false)
    
    // const [user, setUser] = useState({
    //     text: "", day: ""
    // });

    // let name, value;
    // const handleInputs = (e) => {
    //     console.log(e);
    //     name = e.target.name;
    //     value = e.target.value;

    //     setUser({...user, [name]:value});
    // }

    const onSubbmit = (e) => {
        e.preventDefault()
        if (!text || !day) {
            alert("enter something")
        }
        // console.log("taskkkk is", text)
        // console.log("dayyy is", day)
        // console.log("reminder is", reminder)
        props.onAdd({ text, day, reminder })

        setText("")
        setDay("")
        setReminder(false)


        // console.log(e);
        // name = e.target.name;
        // value = e.target.value;

        // setUser({...user, [name]:value});


    }
    const PostData = async (e) => {
        e.preventDefault();

        // const { text, day } = user;
        
        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
         },
        body: JSON.stringify ({
             text, day
        })
    });
        const data = await res.json() ;
        if (data.status === 422 || !data){
            window.alert("Invalid Registration");
            console.log("Invalid Registration")
        }
        else{
            window.alert("Registration successfull");
            console.log("Successfull Registration");
        }

    }


    return <div>
    <div className='formad'>
        <form onSubmit={onSubbmit} method="POST">
            <div className='formadd1' >
                <label htmlFor="Task name">Name of Task</label>
                <input className='inputboth' type="text" id="Task name" name="Task name" value={text} onChange={(e) => setText(e.target.value)} placeholder="Name of Task.." />
            </div>
            <div className='formadd2'>
                <label htmlFor="day">Day of Task</label>
                <input className='inputboth' type="text" id="day" name="day" value={day} onChange={(e) => setDay(e.target.value)} placeholder="Day of Task.." />
            </div>
            <div className='formadd3'>
                <label className="container">Reminder of Task
                    <input type="checkbox" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
                    <span className="checkmark"></span>
                </label>
            </div>

            <input type="submit" value='Submit' className='subbbmit' onClick={PostData} />


        </form>
    </div>
</div>;
};
