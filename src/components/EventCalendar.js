import React from 'react';
import 'react-calendar/dist/Calendar.css';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Calendar from 'react-calendar';
import { Button, FormControl, Grid, InputLabel, MenuItem, SnackbarContent, AppBar, Toolbar, IconButton, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import Collapse from '@material-ui/core/Collapse';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Select } from '@material-ui/core';
import './EventCalendar.css'
import Navbar from '../components/Navbar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  title: {
    flexGrow: 1,
  },
}));
function EventCalendar() {
  const [value, onChange] = React.useState(new Date());
  const classes = useStyles();
  const [Aopen, setAOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [resource, setResource] = React.useState([]);
  const [resourcename, setResourcename] = React.useState("");
  const [resourceid, setResourceid] = React.useState("");
  const [events, setEvents] = React.useState([]);
  const [uevents, setUEvents] = React.useState([]);
  const [allevents, setAllEvents] = React.useState([]);
  const [DateofEvent, setEventDate] = React.useState("");
  const [recurring, setRecurring] = React.useState('N');
  const [deleteId, setDeleteId] = React.useState('');
  const [updateId, setUpdateId] = React.useState(false);
  const [expandPanel, setExpandPanel] = React.useState(false);
  const [rOpen, setROpen] = React.useState(false);
  const [tab, setTab] = React.useState(0);
  const history = useHistory();



  const handleExpandChange = (eventid) => (event, isExpanded) => {
    setExpandPanel(isExpanded ? eventid : false);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`event-tabpanel-${index}`}
        aria-labelledby={`event-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={4}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };


  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const [formData, setFormData] = React.useState({
    Date: "",
    Recurring: "",
    EventTitle: "",
    EventDescription: "",
    Attachments: "",
    ResourceName: "",
    ResourceID: "",
    StartTime: "08:00",
    EndTime: "08:15",
  });

  const [rFormData, setRFormData] = React.useState({
    EmailID: "",
    EventID: "",
    Name: "",
    Mobile: "",
    Designation: "",
    NameofOrg: "",
    Member: "",
    Comments: "",
    Source: "",
  });
  const clearFormData = () => {
    setFormData({
      Date: "",
      Recurring: "N",
      EventTitle: "",
      EventDescription: "",
      Attachments: "",
      ResourceName: "",
      ResourceID: "",
      StartTime: "08:00",
      EndTime: "08:15",
    });
    setResourceid("");
    setResourcename("");
  };
  const clearRFormData = () => {
    setRFormData({
      EmailID: "",
      EventID: "",
      Name: "",
      Mobile: "",
      Designation: "",
      NameofOrg: "",
      Member: "",
      Comments: "",
      Source: "",
    });

  };

  const handleRecurringChange = (event) => {
    setRecurring(event.target.value);
  };
  const handleClickROpen = () => {
    setROpen(true);
  };

  const handleClickRClose = () => {
    clearRFormData();
    setROpen(false);
  };

  const handleClickAOpen = () => {
    setAOpen(true);
  };

  const handleClickAClose = () => {
    getAllEvents();
    clearFormData();
    setAOpen(false);
  };
  const getAllEvents = () => {
    const baseUrl = "http://localhost:5000";

    try {
      fetch(baseUrl + "/AllEvents")
        .then((response) =>
          response.text().then((data) => {
            data = JSON.parse(data)
            setAllEvents(data);
            let coldata;
            data.map((col, index) => {
              coldata = String(Number(col.EventID) + 1);
            })
            localStorage.setItem("New_EventID", coldata);
          }))
    }
    catch {
      console.log("Error");
    }

  }
  const getYearwiseEvents = () => {
    const baseUrl = "http://localhost:5000";
    try {
      fetch(baseUrl + "/Yearwise")
        .then((response) =>
          response.text().then((data) => {
            data = JSON.parse(data)
            console.log(data.length);
            // setAllEvents(data);
            // let coldata;
            // data.map((col, index)=>{
            //   coldata=String(Number(col.EventID)+1);
            // })
            // localStorage.setItem("New_EventID", coldata);
          }))
    }
    catch {
      console.log("Error");
    }

  }
  const getUpcomingEvents = () => {
    const baseUrl = "http://localhost:5000";

    try {
      fetch(baseUrl + "/Forthcoming" + "?DateofEvent=" + String(DateofEvent))
        .then((response) =>
          response.text().then((data) => {
            data = JSON.parse(data)
            setUEvents(data);
          }))
    }
    catch {
      console.log("Error");
    }

  }
  const getEvents = () => {
    const baseUrl = "http://localhost:5000";

    try {
      fetch(baseUrl + "/Event" + "?DateofEvent=" + String(DateofEvent))
        .then((response) =>
          response.text().then((data) => {
            data = JSON.parse(data)
            setEvents(data);
          }))
    }
    catch {
      console.log("Error");
    }

  }
  const getResources = () => {
    const baseUrl = "http://localhost:5000";
    try {
      fetch(baseUrl + "/Resource")
        .then((response) =>
          response.text().then((data) => {
            data = JSON.parse(data)
            setResource(data);
            data.map((col, index) => {
              localStorage.setItem(col.ResourceName, col.ResourceID);
            })
          }))
    }
    catch {
      console.log("Error");
    }
  }

  const handleResourceChange = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setResourcename(event.target.value);
    setResourceid(localStorage.getItem(event.target.value));
  };

  const dateConversion = () => {
    const dValue = (String(value)).split(' ');
    const mValue = { "Jan": "01", "Feb": "02", "Mar": "03", "Apr": "04", "May": "05", "Jun": "06", "Jul": "07", "Aug": "08", "Sep": "09", "Oct": "10", "Nov": "11", "Dec": "12" };
    const month = mValue[dValue[1]].concat("-");
    const date = dValue[2].concat("-");
    const year = dValue[3];
    const eventdate = date.concat(month).concat(year);
    setEventDate(eventdate);
  }
  React.useEffect(() => {
    dateConversion()
  }, [value]);
  React.useEffect(() => {
    getEvents()
    getUpcomingEvents()
    getYearwiseEvents()
  }, [DateofEvent]);
  React.useEffect(() => {
    getAllEvents()
    getResources()
  }, []);

  const onFormSubmit = (data) => {
    const baseUrl = "http://localhost:5000";
    const newHeaders = new Headers();
    newHeaders.append("Content-Type", "application/json");

    let options;
    if (updateId === false) {
      options = {
        method: "POST",
        headers: newHeaders,
        body: JSON.stringify(data),
      };
    }
    else {
      data['EventID'] = localStorage.getItem('New_EventID');
      options = {
        method: "PUT",
        headers: newHeaders,
        body: JSON.stringify(data),
      };
    }

    fetch(baseUrl + '/Event', options)
      .then((res) => res.json())
      .then((result) => {
        alert('Event added!');
        getEvents();
        getAllEvents();
        clearFormData();
        handleClickAClose();
      },
        (error) => {
          alert("Please Check all the fields");
          console.log(error);
        }
      );
    setUpdateId(false);
  }
  const handleSubmit = (event) => {
    event.stopPropagation();
    event.preventDefault();

    formData.Date = DateofEvent;
    formData.Recurring = recurring;
    formData.ResourceName = resourcename;
    formData.ResourceID = resourceid;
    onFormSubmit(formData);
  }
  const handleFormChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setFormData({ ...formData, [name]: value });
  };
  const handleRFormChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setRFormData({ ...rFormData, [name]: value });
  };
  const onDelete = (evid) => {
    const baseUrl = "http://localhost:5000";
    const newHeaders = new Headers();
    newHeaders.append("Content-Type", "application/json");
    const options = {
      method: "DELETE",
      headers: newHeaders,
      body: JSON.stringify({ 'EventID': evid }),
    };
    fetch(baseUrl + '/Event', options)
      .then((res) => res.json())
      .then((result) => {
        alert('Event deleted!');
        getEvents();
        getAllEvents();
        clearFormData();
      },
        (error) => {
          alert("Event could not be deleted");
        }
      );
  }
  const handleDelete = (evid) => {
    setDeleteId(evid);
    onDelete(evid);
  }


  const onUpdate = (evid) => {
    const baseUrl = "http://localhost:5000";

    try {
      fetch(baseUrl + "/EventDetails" + "?EventID=" + String(evid))
        .then((response) =>
          response.text().then((data) => {
            data = JSON.parse(data)
            data.map((col, index) => {
              setFormData({
                Date: col.Date,
                Recurring: col.Recurring,
                EventTitle: col.EventTitle,
                EventDescription: col.EventDescription,
                Attachments: col.Attachments,
                ResourceName: col.ResourceName,
                ResourceID: col.ResourceID,
                StartTime: col.StartTime,
                EndTime: col.EndTime,
              });
              setResourceid(col.ResourceID);
              setResourcename(col.ResourceName);
              localStorage.setItem("New_EventID", col.EventID);
              setUpdateId(true);
            })
            getResources();
            handleClickAOpen();
          }))
    }
    catch {
      console.log("Error");
    }
  }
  const handleUpdate = (evid) => {
    onUpdate(evid);
  }
  const handleTab = (event, newValue) => {
    setTab(newValue);
  };
  const handleLogout = (event) => {
    localStorage.setItem('Logged', false)
    localStorage.setItem('admin', false)
    history.push('/event')
  }


  return (
    <>
    <Navbar />
    <main className='EventCal'>
      <Card className='EveCal' maxwidth="md" variant='elevation' style={{ marginRight: '2%', width: '50%', marginLeft: '2%', marginTop: '2%', height: '100%', backgroundColor: 'lavenderblush', paddingLeft: '2%', paddingRight: '2%', paddingTop: '2%', paddingBottom: '2%' }}>
        <CardHeader
          title=''
        />
        <CardContent style={{ marginLeft: '2%', marginBottom: '2%', marginTop: '2%', marginRight: '2%' }}>
          <Calendar
            defaultView="month"
            onChange={onChange}
            value={value}
          />
        </CardContent>
      </Card>
      <Card className='CalForm EventCal' style={{ marginLeft: '2%', marginRight: '2%', marginTop: '2%', marginBottom: '2%', paddingLeft: '2%', paddingRight: '2%', paddingTop: '2%', paddingBottom: '2%' }}>
        <List component="div" >
          <FormControl className={classes.root} noValidate autoComplete="off" style={{ paddingLeft: '2%', paddingRight: '2%', paddingTop: '2%', paddingBottom: '2%', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5%' }}>
              <div>
                <TextField
                  required
                  id="event-id"
                  variant='outlined'
                  size='small'
                  label='Event ID'
                  style={{ flex: 1 }}
                  value={localStorage.getItem("New_EventID")}
                  InputProps={{
                    readOnly: true,
                  }}
                />
              </div>
              <div>
                <TextField
                  required
                  label='Event Date'
                  id="Event-Date"
                  size='small'
                  style={{ flex: 2 }}
                  InputProps={{
                    readOnly: true,
                  }}
                  value={DateofEvent}
                  style={{ width: '100%', marginLeft: '7%', marginBottom: '1%', marginRight: '1%', marginTop: '1%' }}
                />
              </div>
            </div>
          </FormControl>
          <FormControl className={classes.root} noValidate autoComplete="off" style={{ paddingLeft: '2%', paddingRight: '2%', paddingTop: '2%', paddingBottom: '2%', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5%' }}>
              <div>
                <TextField
                  required
                  id="start-time"
                  label="Start Time"
                  type="time"
                  defaultValue=""
                  name="StartTime"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 900,
                  }}
                  onChange={handleFormChange}
                  value={formData.StartTime}
                  style={{ width: '200%', flex: 1 }}
                />
              </div>
              <div>
                <TextField
                  required
                  id="end-time"
                  label="End Time"
                  type="time"
                  defaultValue=""
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 900,
                  }}
                  name="EndTime"
                  onChange={handleFormChange}
                  value={formData.EndTime}
                  style={{ width: '200%', marginLeft: '150%', flex: 2 }}
                />
              </div>
            </div>
          </FormControl>
          <FormControl className="addresource" noValidate autoComplete="off" style={{ paddingLeft: '2%', paddingRight: '1%', paddingTop: '1%', paddingBottom: '1%', width: '90%' }}>
            <div style={{ display: 'flex' }} >
              <InputLabel id="resource-name" style={{ paddingLeft: '2%', flex: 1 }}>Resource</InputLabel>
              <Select
                value={resourcename}
                labelId="resource-name"
                className={classes.select}
                style={{ width: '40%', height: '75%' }}
                onChange={handleResourceChange}
                size='small'
                open={open}
                onClose={handleClose}
                onOpen={handleOpen}
              >
                {
                  resource.length > 0 ? (
                    resource.map((col, index) => {
                      return (

                        <MenuItem key={col.EventID} value={col.ResourceName} >
                          {col.ResourceName}
                        </MenuItem>
                      )
                    })
                  ) : (
                    () => {
                      return (
                        <MenuItem key="0" defaultValue="None">
                          <em>None</em>
                        </MenuItem>
                      )
                    }
                  )
                }
              </Select>
              <div>
                <TextField
                  required
                  id="resource-id"
                  size='small'
                  label='Resource ID'
                  variant='outlined'
                  value={resourceid}
                  InputProps={{
                    readOnly: true,
                  }}
                  style={{ marginLeft: '7%', marginBottom: '1%', marginRight: '1%', marginTop: '1%', flex: 2, width: '80%' }}
                  fullWidth={true}

                />
              </div>
              <div style={{ flex: 3, height: '50%' }}>
                <FormControl component="fieldset" style={{ height: '50%' }}>
                  <FormLabel component="legend">Repeat</FormLabel>
                  <RadioGroup aria-label="recurring" name="recurr" value={recurring} onChange={handleRecurringChange}>
                    <FormControlLabel value="Y" control={<Radio />} label="Y" />
                    <FormControlLabel value="N" control={<Radio />} label="N" />
                  </RadioGroup>
                </FormControl>
              </div>
            </div>
            <div>
              <TextField
                required
                id="Event-Title"
                label='Event Title:'
                size='small'
                name="EventTitle"
                onChange={handleFormChange}
                value={formData.EventTitle}
                fullWidth
                style={{ marginLeft: '0.5%', marginBottom: '2%', marginRight: '2%', marginTop: '2%' }}
                autoComplete='off'
              />
            </div>
            <div>
              <TextField
                required
                id="Event-Description"
                label='Event Description'
                size='small'
                name="EventDescription"
                onChange={handleFormChange}
                value={formData.EventDescription}
                multiline
                style={{ width: '100%', marginLeft: '0.5%', marginBottom: '2%', marginRight: '2%', marginTop: '2%' }}

              />
            </div>
            {/* <div>
                        <TextField
                            id="Attachments"
                            label='Attachments'
                            size='small'
                            name="Attachments"
                            onChange={handleFormChange}
                            value={formData.Attachments}
                            style={{width:'100%', marginLeft:'1%', marginBottom:'1%', marginRight:'1%', marginTop:'1%'}}
                          />
                      </div> */}

            <Typography style={{ marginLeft: '50%' }}>
              <Button variant="contained" color='primary' size='small' onClick={handleSubmit}>Submit</Button>
              <Button variant="contained" color='secondary' size='small' style={{ marginLeft: '5px' }} onClick={clearFormData}>Reset</Button>
            </Typography>
          </FormControl>
        </List>
      </Card>

    </main>
    </>
  );
}

export default EventCalendar;


