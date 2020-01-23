import React from 'react';
import Layout from './Layout';
import { Switch, Route } from 'react-router-dom';

export default class Router extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path='/' component={Layout} />
                <Route exact path='/chat/1/' render={() =>
                    <Layout chatId={1} />} />
                <Route exact path='/chat/2/' render={() =>
                    <Layout chatId={2} />} />
                <Route exact path='/cath/3/' render={() =>
                    <Layout chatId={3} />} />
            </Switch>
        )
    };
};