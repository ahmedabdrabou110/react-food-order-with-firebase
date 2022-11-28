import React from "react";
import classes from "./Notifications.module.css";
const Notifications = (props) => {
  let specialClasses = "";
  const cssClasses = `${classes.notification} ${specialClasses}`;
  if (props.status === "error") {
    specialClasses = classes.error;
  }

  if (props.status === "success") {
    specialClasses = classes.success;
  }
  return (
    <section className={cssClasses}>
      <h1>{props.title}</h1>
      <p>{props.message}</p>
    </section>
  );
};

export default Notifications;
