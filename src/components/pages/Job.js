// import { id } from "postcss-selector-parser";
import React from "react";
import { useEffect, useState } from "react";
//import Button1 from "../components/Button1";
import Cards from "../Cards";
// import {Button} from "react-bootstrap";

function Job(props) {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getUsers = async () => {
    const response = await fetch("https://event-online.herokuapp.com/");
    const users = await response.json();
    console.log(users);
    setUsers(users);
  };

  //search handler
  const searchHandler = (searchTerm) =>{
    console.log(searchTerm);
  }

  useEffect(() => {
    getUsers();
  },[]);

  return (
    <React.Fragment>
       {/* <Card Name="Data Analyst" Role="Intern" Description="xyz" /> 
        <button type="button" className="btn btn-primary">Apply</button>
        
        <Card Name="Software Developer" Role="FullTime" Description="ABC" />
        <button type="button" className="btn btn-primary">Apply</button>

        <Card Name="Business Associate" Role="Intern" Description="DEF"/>
        <button type="button" className="btn btn-primary">Apply</button>
        
        <Card Name="FrontEnd Developer" Role="Intern" Description="ABC"/>
        <button type="button" className="btn btn-primary">Apply</button> */}
      <ul>
        {users.map((user) => {
          const { EventTitle, Date, StartTime } = user;
          // console.log(users);
          return (
            <li>
              <Cards
                EventTitle = {EventTitle}
                Date = {Date}
                StartTime = {StartTime}

                 // id={jid}
                // Name={name_of_the_company}
                // Role={job_profile}
                // Description={job_description}
                // term = {props.search}
              />
            </li>
          );
        })}
      </ul>

      {/* <Button>Apply</Button> */}

      {/* <Button variant="primary" type="submit" > */}
      {/* Submit */}
      {/* </Button> */}
      {/* <Button1 /> */}
    </React.Fragment>
  );
}
export default Job;
