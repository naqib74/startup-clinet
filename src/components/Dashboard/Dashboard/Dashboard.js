import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Sidebar from '../../Shared/Sidebar/Sidebar';
import Book from '../Book/Book';
import BookingList from '../BookingList/BookingList';
import Review from '../Review/Review';

const Dashboard = () => {
    return (
        <div>

            <Router>
                <div className="row">
                    <div className="col-md-3">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-md-9">
                        <Switch>
                            <Route exact path='/dashboard/book/:id'>
                                <Book></Book>
                            </Route>
                            <Route path='/dashboard/bookingList'>
                                <BookingList></BookingList>
                            </Route>
                            <Route path='/dashboard/review'>
                                <Review></Review>
                            </Route>
                        </Switch>
                    </div>
                </div>


            </Router>


        </div>
    );
};

export default Dashboard;