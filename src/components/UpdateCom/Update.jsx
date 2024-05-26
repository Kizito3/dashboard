import React from 'react'
import classes from './update.module.css'
import { UpdatesData } from '../../data/data'
export default function Update() {
  return (
    <div className={classes.updates}>
        {UpdatesData.map((update) =>{
            return (
                <div className={classes.update}>
                    <img src={update.img} alt="" />
                    <div className={classes.notification}>
                        <div className={classes.spacing}>
                            <span>{update.name}</span>
                            <span>{update.noti}</span>
                        </div>
                        <span>{update.time}</span>
                    </div>
                   
                    
                </div>
            )
        })}
    </div>
  )
}
