import { Button, Container, makeStyles } from "@material-ui/core";
import React,{useState} from "react";
import locker from "../images/locker.png";
import shelfTextLogo from "../images/shelfTextLogo.png";
import shelfWebLogo from "../images/shelfWebLogo.png";
import board from "../images/boardNew.png";
import ReactRotatingText from "react-rotating-text";
import "../assests/styles/landing.css";
import FormOpen from './Modal';
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';
const useStyles = makeStyles({
  background: {},
  paperContainer: {
    height: "710px",
    width: "1349px",
    // background: "#000000",
    // padding: "40",
    position: "relative",
    // width: "1440px",
    // height: "900px",
    background:
      "radial-gradient(50% 55.89% at 0% 44.11%, #35373D 0%, #1D1E21 100%)",
  },
  shelfWebLogo: {
    position: "absolute",
    width: "28px",
    height: "50px",
    left: "70px",
    top: "52px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  shelfTextLogo: {
    position: "absolute",
    width: "97px",
    height: "35px",
    left: "110px",
    top: "55px",
  },
  locker: {
    position: "absolute",
    width: "450px",
    height: "465px",
    left: "0px",
    top: "120px",
  },
  board: {
    position: "absolute",
    width: "1350px",
    height: "326.5px",
    left: "-2px",
    top: "380px",
  },
  tagline: {
    position: "absolute",
    width: "518px",
    height: "166px",
    left: "690px",
    top: "160px",
    textAlign: "left",
    fontFamily: "Poppins SemiBold",
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: "50px",
    lineHeight: "53px",
    letterSpacing: "0.2px",

    color: "#FFFFFF",
  },
  tagline2: {
    position: "absolute",
    width: "408px",
    height: "76px",
    left: "690px",
    top: "290px",
    textAlign: "left",
    fontFamily: "Poppins",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: "22px",
    lineHeight: "37px",
    letterSpacing: "0.2px",

    color: "#FFFFFF",
  },
  button: {
    position: "absolute",
    width: "289px",
    height: "44px",
    left: "690px",
    top: "450px",
    fontWeight: "bold",
    textTransform: "none",
  },
});
export default function Landing() {
  const classes = useStyles();
  const [open, setOpen]= useState(false);
  const handleOpen = ()=>{
    console.log("open ini")
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <div className="paperContainer">
        <img src={shelfWebLogo} alt="logo" className="shelfWebLogo" />
        <img src={shelfTextLogo} alt="logo" className="shelfTextLogo" />
        <img src={board} className="board" alt="logo" />
        <img src={locker} className="locker" alt="logo" />
        <div >
          <p className="tagline">
            We are right<br></br>around the corner
          </p>
          <p className="tagline2">
            Just getting our shelves ready <br />
            for you and your group.
          </p>
          
          <Button variant="contained" className="buttonForRequest" onClick={handleOpen}  >
          {/* <ReactRotatingText items={["Request early access"]} className= "textForRequest" /> */}
          <span className= "textForRequest" >Request early access</span>
          
        </Button>
        </div>
        {open?
        <FormOpen open={open} changeState={(e)=>setOpen(e)}>Enter Your Email</FormOpen>:<></>}
        
        
        {/* <Button variant="contained" className={classes.button}>
           <ReactRotatingText items = {["Request early access"]} />
           </Button> */}
      </div>
    </div>
    // <div >
    //   <div className={classes.paperContainer}>
    //     <img src={shelfWebLogo} alt="logo" className={classes.shelfWebLogo} />
    //     <img src={shelfTextLogo} alt="logo" className={classes.shelfTextLogo} />
    //     <img src={board} className={classes.board} alt="logo" />
    //     <img src={locker} className={classes.locker} alt="logo" />
    //     <div >
    //       <Typography className={classes.tagline}>We are right<br></br>around the corner
    //       </Typography>
    //       <Typography className= {classes.tagline2}>
    //           Just getting our shelves ready <br/>
    //           for you and your group.
    //       </Typography>
    //     </div>
    //   <Button variant="contained" className={classes.button}>
    //       <ReactRotatingText items = {["Request early access"]} />
    //       </Button>
    // </div>
    // </div>
  );
}
