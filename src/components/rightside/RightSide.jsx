import React from 'react'
import classes from "./rightside.module.css"
import Update from '../UpdateCom/Update'
import CustomerReview from '../customer/CustomerReview'
export default function RightSide() {
  return (
    <div className='container'>
        <div className={classes.RightSide}>
            <h3>Updates</h3>
            <Update />
        </div>
        <div>
            <h3>Customer Reviews</h3>
            <CustomerReview />
        </div>
    </div>
  )
}
