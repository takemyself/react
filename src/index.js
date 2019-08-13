import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory} from 'react-router';
// , Link, IndexRoute, Redirect
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Hellw from './views/Hollw';
import Test from './views/Test';
import CTable from './views/CTable';
import CTableFlow from './views/CTableFlow';
import Echarts from './views/Echarts';
import CTabledouble from './views/CTabledouble';
import ChirldrenClick from './views/ChirldrenClick';
import LoadlazyTable from './views/LoadlazyTable';

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}></Route>
        <Route path="/t" component={Test}></Route>
        <Route path="/h" component={Hellw}></Route>
        <Route path="/ta" component={CTable}></Route>
        <Route path="/f" component={CTableFlow}></Route>
        <Route path="/c" component={Echarts}></Route>
        <Route path="/cd" component={CTabledouble}></Route>
        <Route path="/ch" component={ChirldrenClick}></Route>
        <Route path="/lt" component={LoadlazyTable}></Route>
    </Router>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
