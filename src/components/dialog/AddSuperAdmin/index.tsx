import { Fragment, useEffect, useState } from "react";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContentText from "@mui/material/DialogContentText";
import { toast } from "react-hot-toast";
import { THEME } from "../../../constant";
import Switch from "@mui/material/Switch";
import { randomCharacterGenerator } from "../../../@core/utils/randomCharacterGenerator";
import { emailValidation } from "../../../@core/utils/emailValidation";
import { AddSuperAdmin } from "../../../api";

export default function AddSuperAdminModal(props : any) {
  let [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  //   console.log(data)
  const [checked, setChecked] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [newPassword, setNewPassword] = useState("");

  function closeModal() {
    setIsOpen(false);
  }

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handleFullNameChange = (event: any) => {
    setFullName(event.target.value);
  };

  const handlePhoneNumberChange = (event: any) => {
    setPhoneNumber(event.target.value);
  };

  const handleClick = () => {
    setIsOpen(true);
    const randomPassword = randomCharacterGenerator(10);
    setNewPassword(randomPassword);
  };

  const handleSwitchChange = () => {
    setChecked(!checked);
  };

  const handleSave = async () => {
    if (email == "") {
      toast.error("No Email");
    } else if (!emailValidation(email)) {
      toast.error("Invalid Email");
    } else if (fullName == "") {
      toast.error("No Name");
    } else if (phoneNumber == "") {
      toast.error("No phone number");
    } else {
      setLoading(true);

      const reqData = {
        token: "",
        email: "",
        data: {
          email: email,
          full_name: fullName,
          phonenumber: phoneNumber,
          status: checked,
          password : newPassword
        },
      };
      const res = await AddSuperAdmin(reqData);

      if (res.message == "success") {
        toast.success("success");
        props.updateAdd(reqData.data)
        setLoading(false);
        setIsOpen(false);
      } else {
        toast.error(res.message);
      }
    }
  };

  return (
    <>
      <Button
        sx={{ ":hover": { opacity: 0.8 } }}
        variant="contained"
        onClick={handleClick}
      >
        Add Super Admin
      </Button>
      <Dialog
        open={isOpen}
        onClose={closeModal}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
        PaperProps={{
          sx: {
            width: "50%",
            minWidth: "400px",
            backgroundColor: THEME.WHITE_COLOR,
          },
        }}
      >
        <DialogTitle>Add Super Admin</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Temp password : <a style={{ color: "red" }}>{newPassword}</a>
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="task"
            label="email"
            type="email"
            fullWidth
            variant="standard"
            onChange={handleEmailChange}
          />
          <div className="h-2" />
          <TextField
            autoFocus
            margin="dense"
            id="task"
            label="Full Name"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleFullNameChange}
          />
          <div className="h-2" />
          <TextField
            autoFocus
            margin="dense"
            id="task"
            label="Phone Number"
            type="text"
            fullWidth
            variant="standard"
            onChange={handlePhoneNumberChange}
          />
          <div className="h-8" />
          <div className="flex">
            <a className="mt-1.5">Status : </a>
            <Switch checked={checked} onChange={handleSwitchChange} />
          </div>
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
            endIcon={<SendIcon />}
            variant="contained"
            sx={{ background: "#2e3539" }}
            onClick={handleSave}
          >
            Update
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
}
