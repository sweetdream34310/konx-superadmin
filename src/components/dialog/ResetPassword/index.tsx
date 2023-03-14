import { Fragment, useEffect, useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import LoadingButton from "@mui/lab/LoadingButton";
import LockResetIcon from "@mui/icons-material/LockReset";
import DialogContentText from "@mui/material/DialogContentText";
import { randomCharacterGenerator } from "../../../@core/utils/randomCharacterGenerator";
import { toast } from "react-hot-toast";
import { ResetSuperAdminPassword } from "../../../api";

export default function MyModal(props: any) {
  let [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resetPassword, setResetPassword] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  const handleClick = () => {
    setIsOpen(true);
    const randomPassword = randomCharacterGenerator(10);
    setResetPassword(randomPassword);
  };

  const handleReset = async () => {
    setLoading(false)

    const reqData = {
      token: "",
      email: "",
      data: {
        email: props.data.email,
        password: resetPassword 
      },
    };

    const res = await ResetSuperAdminPassword(reqData)

    if (res.message == "success") {
      toast.success("success");
      setLoading(false);
      setIsOpen(false);
    } else {
      toast.error(res.message);
    }
  };

  return (
    <>
      <Tooltip arrow placement="right" title="Reset Password">
        <IconButton
          aria-label="delete"
          sx={{ color: "white" }}
          onClick={handleClick}
        >
          <LockResetIcon />
        </IconButton>
      </Tooltip>

      <Dialog
        open={isOpen}
        onClose={closeModal}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
        PaperProps={{ sx: { width: "50%", minWidth: "400px" } }}
      >
        <DialogTitle>Reset password</DialogTitle>
        <DialogContent>
          <div>email : {props.data.email}</div>
          <div className="h-2" />
          <div>Full Name : {props.data.full_name}</div>
          <div className="h-2" />
          <div>Phone Number : {props.data.phonenumber}</div>
          <div className="h-2" />
          <DialogContentText>
            Temp password : <a style={{ color: "red" }}>{resetPassword}</a>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            sx={{ background: "#2e3539" }}
            variant="contained"
            onClick={closeModal}
          >
            Back
          </Button>
          <LoadingButton
            loading={loading}
            loadingPosition="end"
            endIcon={<LockResetIcon />}
            variant="contained"
            sx={{ background: "#2e3539" }}
            onClick={handleReset}
          >
            Reset
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
}
