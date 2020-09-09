import React from 'react'
import {BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import App from '../App'
function Routers() {
    return (
        <div>
           <Router>
               <App></App>
           </Router>
        </div>
    )
}

export default Routers
