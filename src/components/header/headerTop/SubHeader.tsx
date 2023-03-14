import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import Avatar from "@mui/material/Avatar";
import { THEME } from "../../../constant";

export default function SubHeader() {
  const [notificationNum, setNotificationNum] = useState(5);

  const userName = localStorage?.getItem("username")

  // if(userName == '') {
    
  // }
  function notificationsLabel(count: Number) {
    if (count === 0) {
      return "no notifications";
    }
    if (count > 99) {
      return "more than 99 notifications";
    }
    return `${count} notifications`;
  }

  return (
    <>
      <div className="w-52 h-[100%] flex justify-around items-center">
        <IconButton size="large" aria-label="delete">
          <SearchIcon
            sx={{ width: "30px", height: "30px", color: "#c7cad9" }}
          />
        </IconButton>
        <IconButton aria-label={notificationsLabel(100)} size="large">
          <Badge badgeContent={notificationNum} color="secondary">
            <NotificationsNoneIcon
              sx={{ width: "30px", height: "30px", color: "#c7cad9" }}
            />
          </Badge>
        </IconButton>
        <IconButton aria-label={notificationsLabel(100)} size="large">
          <Avatar
            src="/images/avatars/4.png"
            sx={{ backgroundColor: THEME.PRIMARY_COLOR }}
            alt = {userName || ''}
          />
        </IconButton>
      </div>
    </>
  );
}
