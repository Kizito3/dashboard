import React, { useState } from "react";
import classes from "./sidebar.module.css";
import Logo from "/logo.png";
import { sidebarData } from "../../data/data";
import { motion } from "framer-motion";
import { UilSignOutAlt, UilBars} from "@iconscout/react-unicons";

export default function Sidebar() {
  const [isActive, setIsActive] = useState(null);
  const [isNavbar, setIsNavbar] = useState(false);

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(window.innerWidth)
  return (
    <>
        <div className={classes.bars} style={isNavbar?{left: '60%'}:{left: '5%'}} onClick={()=>setIsNavbar(!isNavbar)}>
          <UilBars />
        </div>
      <motion.div className={classes.sidebar}
        variants={sidebarVariants}
        animate={window.innerWidth<=768?`${isNavbar}`:''}
      >
        <div className={classes.logo}>
          <img src={Logo} alt="Logo dashboars" />
          <span>
            Sh<span>o</span>ps
          </span>
        </div>
        <div className={classes.menu}>
          {sidebarData.map((items, index) => {
            return (
              <div
                onClick={() => setIsActive(index)}
                key={index}
                className={`${classes.menuItem} ${
                  isActive === index ? classes.active : ""
                } `}
              >
                <items.icon />
                <span>{items.text}</span>
              </div>
            );
          })}
          <div className={classes.menuItem}>
            <UilSignOutAlt />
            <span>Sign Out</span>
          </div>
        </div>
      </motion.div>
    </>
  );
}
