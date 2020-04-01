import React, {Component} from 'react';
import { Switch, Route } from 'react-router-dom';
import Fight from './components/Fight'


class App extends Component {
    render() {
        return(
            <React.Fragment>
            <Switch>
                <Route exact path='/' component={Fight} />
            </Switch>
        </React.Fragment>
        )
    }
}

export default App