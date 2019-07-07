import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory} from 'react-router';
// , Link, IndexRoute, Redirect
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Hellw from './views/Hollw'
class Test extends React.Component {
    render() {
        return(
            <div>
                <Link to="/h">to hollw</Link>
            </div>
        )
    }
}

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}></Route>
        <Route path="/t" component={Test}></Route>
        <Route path="/h" component={Hellw}></Route>
    </Router>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
