import React from 'react'
import classes from "./main.module.css"
import Cards from '../cards/Cards'
import BasicTable from '../table/Table'
export default function Main() {
  return (
    <div>
       <div className="container">
       <div className={classes.mainDashboard}>
            <h1>Dashboard</h1>
            <Cards />
            <BasicTable />
        </div>
       </div>
    </div>
  )
}
