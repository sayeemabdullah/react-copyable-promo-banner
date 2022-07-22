import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CancelIcon from "@material-ui/icons/Cancel";
import Snackbar from "@material-ui/core/Snackbar";
import React from "react";
import { useState } from "react";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles(() => ({
  rootContainer: {
    padding: "2rem",
    userSelect: "none",
  },
  bannerContainer: {
    borderRadius: "20px",
  },
  icon: {
    paddingRight: "1.5rem",
    paddingTop: "10px",
    float: "right",
    clear: "both",
    cursor: "pointer",
  },
  bannerText: {
    fontSize: "1.9rem",
    fontWeight: "bold",
    textAlign: "center",
  },
  promoCode: {
    cursor: "pointer",
  },
}));

function PromoBanner(props) {
  const {
    backgroundColor = "#1B3954",
    bannerTextColor = "white",
    textBeforePromoCode = "USE PROMO CODE",
    promoCode = "PROMO2022",
    promoCodeTextColor = "#FED662",
    textAfterPromoCode = "TO GET DISCOUNT",
    showAlert = true,
    alertText = "Promo code copied to clipboard",
    showCancelIcon = true,
    cancelIconColor = "white",
  } = props;
  const classes = useStyles();
  const [showBanner, setShowBanner] = useState(true);
  const [open, setOpen] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div
      className={classes.rootContainer}
      style={showBanner ? {} : { display: "none" }}
    >
      <div
        style={{ background: backgroundColor }}
        className={classes.bannerContainer}
      >
        <Grid container direction="row" justifyContent="center">
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <div
              style={{
                padding: "1rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <span
                style={{ color: bannerTextColor }}
                className={classes.bannerText}
              >
                {textBeforePromoCode}
                <b
                  className={classes.promoCode}
                  style={{ color: promoCodeTextColor }}
                  onClick={() => {
                    navigator.clipboard.writeText(promoCode);
                    setOpen(true);
                  }}
                >
                  {" "}
                  {promoCode}{" "}
                </b>
                {textAfterPromoCode}
              </span>
              {showAlert && (
                <Snackbar
                  open={open}
                  autoHideDuration={2500}
                  onClose={handleClose}
                >
                  <Alert severity="success">{alertText}</Alert>
                </Snackbar>
              )}
            </div>
          </Grid>
          <Grid item xs={1}>
            {showCancelIcon && (
              <div
                className={classes.icon}
                style={{ color: cancelIconColor }}
                onClick={() => setShowBanner(false)}
              >
                <CancelIcon />
              </div>
            )}
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default PromoBanner;
