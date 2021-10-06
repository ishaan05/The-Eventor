import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import Cards from "../Cards";

function Details() {
  const [validated, setValidated] = useState(false);
  // const [check, setCheck] = useState(false);
  const [user, setUser] = useState({
    // jid: "",
    // firstName:"",
    // LastName:"",
    // EmaMobileNumberMobileNumber:"",
    // name_of_the_company: "",
    // website_link: "",
    // logo_name: "",
    // job_profile: "",
    // job_description: "",
    // job_category: "",
    EventTitle: "", 
    Date: "", 
    StartTime : "",
  });

  function handleInputs(e) {
    const value = e.target.value;
    setUser({
      ...user,
      [e.target.name]: value,
    });
    // setUser("");
  }

  
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    // alert("job posted successfully");
  };

  const handleClick = async (event) => {
    event.preventDefault();
    try {
      const {
        // jid="1",
        // name_of_the_company,
        // website_link,
        // logo_name,
        // job_profile,
        // job_description,
        // job_category,
        EventTitle, 
        Date, 
        StartTime,
      } = user;
      const response = await fetch("https://event-online.herokuapp.com/", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            EventTitle, 
            Date, 
            StartTime,
        }),
      }).then((result) => {
        result.json().then((resp) => {
          console.warn("resp", resp);
          alert("job posted successfully");
        });
      });
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  };

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
export default Details;