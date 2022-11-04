import React, { Component } from "react";
import AdminPortalStyle from '../Style/AdminPortalStyle.css'
import AuthService from '../services/AuthService ';
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import travel from '../Images/travel.jpg'

export default class AdminPortal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: AuthService.getCurrentUser()
        };
    }

    render() {
        const { currentUser } = this.state;

        return (
            <div className="container">
                <header className="jumbotron"><br />
                    <h2 className="mymsg">About Train Travel in INDIA . . .</h2><br /><br />

                    <div className="MyDiv1">
                        <h4> Indian Railways (IR) is a statutory body under the ownership of Ministry of Railways, Government of India that operates India's national railway system.[7] It manages the fourth largest national railway system in the world by size, with a total route length of 67,956 km (42,226 mi) as of 31 March 2022. 52,247 km (32,465 mi) or 80% of all the broad-gauge routes are electrified with 25 kV 50 Hz AC electric traction as of 1 April 202
                            <a href="https://en.wikipedia.org/wiki/Indian_Railways" style={{ color: '#0000FF' }}> Read More here..</a>
                        </h4><br />
                        <h4><b>Train operator: </b></h4>
                        <h4>  Indian Railway Corporation -
                            <a href="https://en.wikipedia.org/wiki/Indian_Railways" style={{ color: '#0000FF' }}>www.indrail.gov.in</a><br />
                            Time zone & dial code: GMT + 5.  Dial code +91.
                            Hotels:
                            <a href="https://www.booking.com/country/in.en.html?aid=1610687;label=in-6m0IhnTuYjNT5TGzKJIj0AS379630681324:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-315482842934:lp9304077:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9YfpWGnRw6lOGgfEoJVv7zYo;ws=&gclid=EAIaIQobChMIvuDZ2Y-M-QIVUgQrCh37NQpQEAAYASAAEgJ_ofD_BwE" style={{ color: '#0000FF' }}> Hotel Search</a><br />
                            Tourist information:
                            <a href="https://www.holidify.com/country/india/places-to-visit.html" style={{ color: '#0000FF' }}> Health & vaccinations</a><br />
                            <br />
                        </h4>
                        <div className="MyDiv3">
                            <ul>
                                <li><Link to={"/trainlist"} >
                                    Avaliable Trains
                                </Link>
                                </li>
                                <li><Link to={"/search"} >
                                    Search Trains
                                </Link>
                                </li>
                            </ul>

                            <br />
                            <ul>
                                <li><Link to={"/reservation"} >
                                    Book Your Ticket
                                </Link>
                                </li>
                                <li><Link to={"/searchByPnr"}  >
                                    PNR Enquiry
                                </Link>
                                </li>
                            </ul>

                            <br />
                        </div>

                    </div>
                </header>
            </div>
        );
    }
}