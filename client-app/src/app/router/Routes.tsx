import { createBrowserRouter, Navigate, RouteObject } from "react-router-dom";
import App from "../layout/App";
import React from 'react'
import HomePage from "../../features/home/HomePage";
import ActivityDashboard from "../../features/activities/dashbaord/ActivityDashboard";
import ActivityForm from "../../features/activities/form/ActivityForm";
import ActivityDetails from "../../features/activities/details/ActivityDetails";
import TestErrors from "../../features/errors/TestError";
import NotFound from "../../features/errors/NotFound";
import ServerError from "../../features/errors/ServerError";
import LoginForm from "../../features/users/LoginForm";
import ProfilePage from "../../features/profiles/ProfilePage";

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children:[
            {path:'activities', element: <ActivityDashboard/>},
            {path:'activities/:id', element: <ActivityDetails/>},
            {path:'createActivity', element: <ActivityForm key='create' />},
            {path:'manage/:id', element: <ActivityForm key='manage' />},
            {path:'profiles/:userName', element: <ProfilePage key='manage' />},
            {path:'login', element: <LoginForm/>},
            {path:'errors', element: <TestErrors />},
            {path:'not-found', element: <NotFound />},
            {path:'server-error', element: <ServerError />},
            {path:'*', element: <Navigate replace to='not-found' />}
        ]
    }
]

export const router = createBrowserRouter(routes)