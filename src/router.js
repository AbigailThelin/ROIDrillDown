import React from 'react'
import {Switch, Route} from 'react-router-dom'

import ROI from './ROI.js'

export default(

    <Switch>
        <Route component={ROI} path='/'/>
    </Switch>
)