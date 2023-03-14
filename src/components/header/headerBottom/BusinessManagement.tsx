import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import WebhookIcon from "@mui/icons-material/Webhook";
import ArchiveIcon from "@mui/icons-material/Archive";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  BUSINESS_MANAGEMENT,
  BUSINESS_ACCOUNT,
  SASS_PLAN,
  THEME,
  BUSINESS_USERS,
} from "../../../constant";
import { useSelector, useDispatch } from "react-redux";


const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: THEME.LAVEL_COLOR,
    backgroundColor: THEME.HEADER_COLOR,
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: THEME.LAVEL_COLOR,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: THEME.PRIMARY_COLOR,
      },
      "&:hover": {
        color: THEME.WHITE_COLOR,
      },
    },
  },
}));

export default function CustomizedMenus() {

  const currentPage = useSelector((state : any ) => state.currentPageReducer.currentPage);

  let background = '' 

  if(currentPage == 'business') {
    background = THEME.PRIMARY_COLOR;
  } else {
    background = THEME.HOME_BOARD_COLOR;
  }

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        sx={{
          color: THEME.WHITE_COLOR,
          backgroundColor: background,
          height: "40px",
        }}
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {BUSINESS_MANAGEMENT}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem sx={{ height: "50px", width:'250px', borderRadius:'10px' }} onClick={handleClose} disableRipple>
          <MenuIcon />
          {BUSINESS_ACCOUNT}
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem sx={{ height: "50px", width:'250px', borderRadius:'10px' }} onClick={handleClose} disableRipple>
          <ArchiveIcon />
          {BUSINESS_USERS}
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem sx={{ height: "50px", width:'250px', borderRadius:'10px' }} onClick={handleClose} disableRipple>
          <WebhookIcon />
          {SASS_PLAN}
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
      </StyledMenu>
    </div>
  );
}
