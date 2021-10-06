import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cards.css';
import { Link } from 'react-router-dom'
export default function Cards() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <h2 className="event-head">Online Events</h2> <h3 className="event-span">Happening This Week</h3>
                    
                    <div className="col">
                        <div className="card">
                            <img src="images/1.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Health & Happiness Workshop</h5>
                                <p className="card-text">Sat, Jul 31, 2021</p>
                                {/* <a href="/login" className="btn btn-primary btn">Join</a> */}
                                <Link to="/description" className="btn btn-primary btn">Join</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img src="images/2.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Knowing Ourselves -The Soothing Workshop</h5>
                                <p className="card-text">Sun, Aug 1, 2021</p>
                                {/* <a href="/login" className="btn btn-primary btn">Join</a> */}
                                <Link to="/description" className="btn btn-primary btn">Join</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img src="images/3.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Exploring Nature - A Beautiful Joruney</h5>
                                <p className="card-text">Mon, Aug 16, 2021</p>
                                {/* <a href="/login" className="btn btn-primary btn">Join</a> */}
                                <Link to="/description" className="btn btn-primary btn">Join</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <h2 className="event-head">Upcoming Events</h2> <h3 className="event-span">Happening Today</h3>
                    <div className="col">
                        <div className="card">
                            <img src="images/4.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Lens Technique</h5>
                                <p className="card-text">Fri, Jul 30, 2021</p>
                                {/* <a href="/login" className="btn btn-primary">Join</a> */}
                                <Link to="/description" className="btn btn-primary btn">Join</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img src="images/5.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Raw Photography</h5>
                                <p className="card-text">Fri, Jul 30, 2021</p>
                                {/* <a href="/login" className="btn btn-primary">Join</a> */}
                                <Link to="/description" className="btn btn-primary btn">Join</Link>
                            </div>
                        </div>
                    </div>

                    <div className="col">
                        <div className="card">
                            <img src="images/6.jpg" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Awesome Mausam</h5>
                                <p className="card-text">Fri, Jul 30, 2021</p>
                                {/* <a href="/login" className="btn btn-primary">Join</a> */}
                                <Link to="/description" className="btn btn-primary btn">Join</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>



    )
}