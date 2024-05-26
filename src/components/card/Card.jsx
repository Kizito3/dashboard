import React, { useState } from 'react'
import classes from "./card.module.css"
import { AnimatePresence } from 'framer-motion';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function Card({png, value, title, barValue, series, color}) {

  const [expanded, setExpanded] = useState(false);

  return (
    <AnimatePresence>
     
        <CompartCard png={png} value={value} title={title} color={color} barValue={barValue} series={series}/>
    </AnimatePresence>
  )
}

function CompartCard({png, value, title, barValue, series, color, setExpanded}){
  const Png = png;
  return(
    <div className={classes.CompartCard} style={{
      background : color.backGround,
      boxShadow : color.boxShadow,
    }}
     
    >
        <div className={classes.radialBar}>
          <CircularProgressbar value={barValue} text={barValue} className="" />
          <span>{title}</span>
        </div>
            <div className={classes.details}>
                <Png/>
                <span>${value}</span>
                <span>Last 24 hours</span>
            </div>
    </div>
  )
}