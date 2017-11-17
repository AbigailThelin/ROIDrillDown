import React, {Component} from 'react'

import './styles/ROI.css'


export default class ROI extends Component{

    constructor(){
        super()

        this.state={

        }
    }

    render(){
        return(
            <div className='ROI'>
                <div className='graph-area'>

                    <div className='scope-container'>
                        <span>CHOOSE DATE</span>
                        <div className='scope'>
                            
                        <div className='container'>
                                <span>Medio</span>
                            </div>
                            <div className='container'>
                                <span>SALES CALLS</span>
                            </div>
                            <div className='container'>
                                <span>blah</span>   
                            </div>
                            <div className='container'>
                                <span>DMS Letter</span>
                            </div>
                            <div className='container'>
                                <span>blah</span>
                            </div>
                            <div className='container'>
                                <span>blah</span>   
                            </div>
                            <div className='container'>
                                <span>Prospect Letter</span>
                            </div>
                            <div className='container'>
                                <span>blah</span>
                            </div>
                            <div className='container'>
                                <span>blah</span>   
                            </div>
                            <div className='container'>
                                <span>DMS Email</span>
                            </div>
                            <div className='container'>
                                <span>blah</span>
                            </div>
                            <div className='container'>
                                <span>blah</span>   
                            </div>
                            <div className='container'>
                                <span>Prospect Email</span>
                            </div>
                            <div className='container'>
                                <span>blah</span>
                            </div>
                            <div className='container'>
                                <span>blah</span>   
                            </div>
                            <div className='container'>
                                <span>Facebook or Instagram</span>
                            </div>
                            <div className='container'>
                                <span>blah</span>
                            </div>
                            <div className='container'>
                                <span>blah</span>   
                            </div>

                        </div>
                    </div>

                    <div className='drill-down'>

                    </div>

                </div>
            </div>
        )
    }
}