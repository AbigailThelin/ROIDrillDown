import react, {Component} from 'react'
import {Switch, Route} from 'react-router-dom'

import ROI from './src/ROI.js'

export default(

    <Switch>
        <Route component={ROI} path='/'/>
    </Switch>
)