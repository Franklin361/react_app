// import { LazyLoad1, LazyLoad2, LazyLoad3 } from '../01-LazyLoad/pages';
import React from 'react';

import { lazy } from "react";
import { NoLazyLoading } from '../01-LazyLoad/pages/NoLazyLoading';

type JSXComponent = () => JSX.Element;

interface IRoute {
    path:string;
    component: React.LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string;
    children?:IRoute
}


const LazyLoadNested = lazy(()=> import( /* webpackChunkName: "LazyLayoutNested" */ '../01-LazyLoad/layout/LazyLayout'));

export const routes: IRoute[]  = [
    {
        path: 'lazyload/*',
        component: LazyLoadNested,
        name: 'Lazy Loading Nested'
    },
    {
        path: 'no-lazy',
        component: NoLazyLoading,
        name: 'No Lazy'
    },
]