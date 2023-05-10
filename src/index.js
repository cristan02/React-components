import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './index.css'
import Birthday from './Birthday/Birthday'
import ReviewPage from './Review/ReviewPage'
import Employees from './Employee/Employees'
import Notes from './to_do/Notes'
import Restaurant from './Restaurant/Restaurant'
import Request from './Request/Request'

import NavMenu from './NavMenu'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    {/* <Employees /> */}
    {/* <Birthday /> */}
    {/* <ReviewPage />  */}
    {/* <Notes/> */}
    {<Restaurant />}
    {/* {<Request/>} */}

    {/* <NavMenu/> */}
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
