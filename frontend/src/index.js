import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Redirect, Route} from 'react-router-dom';
import Question from './Question/Question';
import QuestionDetail from './QuestionDetail/QuestionDetail';

import registerServiceWorker from './registerServiceWorker';
const routes = (
    <BrowserRouter>
        <Switch>
            <Redirect exact from='/' to='/question' />
            <Route path='/question' component={ Question } />
            <Route path='/questionDetail/:id' component={ QuestionDetail } />
        </Switch>
    </BrowserRouter>
);
ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
