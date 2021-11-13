import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
} from 'react-router-dom';
import {useAuth} from '../hooks/AuthContext';

import {Profile} from '../Screens/Profile';
import {Header} from '../Screens/Header';
import {MenuNav} from '../Screens/Feed/MenuNav';
import {NewPost} from '../Screens/Feed/NewPost';
import {UserSettings} from '../Screens/UserSettings';
import {ROUTES} from './index';


export function AppRoutes() {

    const {userInfo} = useAuth ();
    return (
        <BrowserRouter>
            <Header neighborhoodName={userInfo.user.neighborhood}/>
            <Switch>
                <Route path={ROUTES.PROFILE} children={<Profile/>}/>
                <Route path={ROUTES.CONFIGURATIONS} children={<UserSettings/>}/>
                <Route path={ROUTES.HOME} children={
                    <>
                        <MenuNav/>
                        <NewPost/>
                    </>
                }/>
            </Switch>
        </BrowserRouter>
    );
}