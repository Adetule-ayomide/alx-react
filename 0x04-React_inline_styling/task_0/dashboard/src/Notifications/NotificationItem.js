import React from "react";
import PropTypes from "prop-types";

const NotificationItem = React.memo(({ type, value, html, markAsRead }) => {
  return (
    <li data-notification-type={type}
      onClick={() => markAsRead(value)}>
      {html ? <div dangerouslySetInnerHTML={html}></div> : value} {" "}
    </li>
  );
});

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({ __html: PropTypes.string }),
  markAsRead: PropTypes.func.isRequired,
};

NotificationItem.defaultProps = {
  type: "default",
  value: "",
  html: null,
};

export default NotificationItem;
