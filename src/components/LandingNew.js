import { Button, Container, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import locker from "../images/locker.png";
import shelfTextLogo from "../images/shelfTextLogo.png";
import shelfWebLogo from "../images/shelfWebLogo.png";
import board from "../images/boardNew.png";
import boardLockerCombined from '../images/boardandlocker_long1.png'
import ReactRotatingText from "react-rotating-text";
import "../assests/styles/stylegridNew.css";
import FormOpen from "./Modal";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
const useStyles = makeStyles({});
export default function LandingNew() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    console.log("open ini");
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="wrapper">
        <div className="logoImages">
          <img src={shelfWebLogo} alt="logo" className="shelfWebLogo" />
          <img src={shelfTextLogo} alt="logo" className="shelfTextLogo" />
        </div>
        <div className="material">
          <div className="lockerAndBoard">
            {/* <img src={locker} className="locker" alt="logo" />
            <img src={board} className="board" alt="logo" /> */}
            <img src={boardLockerCombined} alt="logo" className="boardLockerCombined" />
          </div>
       

        <div className="textAndButton">
          <p className="tagline">
            We are right<br></br>around the corner
          </p>
          <p className="tagline2">
            Just getting our shelves ready <br />
            for you and your group.
          </p>
          <button variant="contained" className="buttonForRequest" onClick = {handleOpen}>
            <span class="textForRequest">Request early access</span>
          </button>
          {/* <Button
            variant="contained"
            className="buttonForRequest"
            onClick={handleOpen}
          >
            {/* <ReactRotatingText items={["Request early access"]} className= "textForRequest" /> */}
          {/* <span className="textForRequest">Request early access</span> */}
          {/* </Button> */}
        </div>
        {open ? (
          <FormOpen open={open} changeState={(e) => setOpen(e)}>
            Enter Your Email
          </FormOpen>
        ) : (
          <></>
        )}

        {/* <Button variant="contained" className={classes.button}>
           <ReactRotatingText items = {["Request early access"]} />
           </Button> */}
      </div>
      </div>
  );
}
