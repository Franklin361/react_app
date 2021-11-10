// import { LazyLoad1, LazyLoad2, LazyLoad3 } from '../01-LazyLoad/pages';
import React from 'react';

import { lazy } from "react";

type JSXComponent = () => JSX.Element;

interface IRoute {
    path:string;
    component: React.LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string;
    children?:IRoute
}


const LazyLoad1 = lazy(()=> import( /* webpackChunkName: "LazyLoad1" */ '../01-LazyLoad/pages/LazyLoad1'));
const LazyLoad2 = lazy(()=> import( /* webpackChunkName: "LazyLoad2" */ '../01-LazyLoad/pages/LazyLoad2'));
const LazyLoad3 = lazy(()=> import( /* webpackChunkName: "LazyLoad3" */ '../01-LazyLoad/pages/LazyLoad3'));

export const routes: IRoute[]  = [
    {
        path: 'lazy1',
        component: LazyLoad1,
        name: 'Lazy_Page_01'
    },
    {
        path: 'lazy2',
        component: LazyLoad2,
        name: 'Lazy_Page_02'
    },
    {
        path: 'lazy3',
        component: LazyLoad3,
        name: 'Lazy_Page_03'
    }
]