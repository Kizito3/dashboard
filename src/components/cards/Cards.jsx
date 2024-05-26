import React from 'react'
import classes from "./cards.module.css"
import { cardsData } from '../../data/data'
import Card from '../card/Card'
export default function Cards() {

  return (
   <div className="container">
     <div className={classes.cards}>
       {
        cardsData.map((card,id) => {
            return(
                <div className={classes.parentContainer} key={id}>
                    <Card
                        title={card.title}
                        color={card.color}
                        barValue={card.barValue}
                        value={card.value}
                        png={card.png}
                        series={card.series}
                    />
                </div>
            )
        })
       }
    </div>
   </div>
  )
}
