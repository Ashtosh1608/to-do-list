import React from 'react';
// import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faTimes, faStar, faCheckCircle } from '@fortawesome/fontawesome-free-solid'
// import { CheckCircleTwoTone, StarTwoTone } from '@ant-design/icons';


export const Addlist = (props) => {
  // let starr = "blue";
  // let circle ="green"


  return <div onDoubleClick={() => props.ondelete(props.id)} className={`singletodo ${props.complete == false ? 'finish' : 'singletodo'}`}>
    {/* <CheckCircleTwoTone twoToneColor={circle} className="circle"/> */}
    <FontAwesomeIcon className={`checkcircless ${props.complete == false ? 'checkcirclessopposite' : 'checkcircless'}`} onClick={() => props.cut(props.id)} icon={faCheckCircle} />

    <div className='singletodotextday '>
      {/* {props.reminder==true? 'hey' : 'no'} */}
      <p className={`singletodotextdaymessage ${props.complete == false ? "" : ""}`}>Double click to delete</p>
      <p>{props.text}</p>
      <p style={{ fontSize: "10px" }}>{props.day}</p>
    </div>

    {/* <i className="fa fa-spinner fa-spin"></i> */}
    <FontAwesomeIcon className={`starr ${props.reminder == true ? 'colorofstar' : 'starr'}`} onClick={() => props.paragraph(props.id)} icon={faStar} />
    {/* <StarTwoTone className="star" twoToneColor={starr} /> */}

  </div>
};
