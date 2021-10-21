import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from '../pages/home/Home';
import Secondpage from '../pages/secondpage/SecondPage';
import Thirdypage from '../pages/thirdypage/ThirdyPage';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/secondpage" component={Secondpage} exact/>
                <Route path="/thirdypage" component={Thirdypage} exact/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;
