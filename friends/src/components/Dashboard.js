import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Friends from './Friends'

export default function Dashboard() {
    return (
        <Router>
            <div>
                <Switch>
                <Route exact path="/dashboard">
                    <img src="https://media.giphy.com/media/BoBOKNtlR8rTi/source.gif" alt="it's working"/>
                    <button>
                        <Link to ="dashboard/friends">List of Friends</Link>
                </button>
                </Route>
                    <PrivateRoute exact path="/dashboard/friends">
                        <Friends/>
                    </PrivateRoute>
                </Switch>
            </div>

        </Router>
    )
}