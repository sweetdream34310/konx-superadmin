import { Fragment, useEffect, useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import LoadingButton from "@mui/lab/LoadingButton";
import SendIcon from "@mui/icons-material/Send";
import TextField from "@mui/material/TextField";
import DialogTitle from "@mui/material/DialogTitle";
import { toast } from "react-hot-toast";
import { THEME } from "../../../constant";
import Switch from "@mui/material/Switch";
import { EditSuperAdmin } from "../../../api";

export default function MyModal(data: any) {
  let [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  //   console.log(data)
  const [checked, setChecked] = useState(data.data.status);
  const [fullName, setFullName] = useState(data.data.full_name);
  const [phoneNumber, setPhoneNumber] = useState(data.data.phonenumber);

  function closeModal() {
    setIsOpen(false);
  }

  //   console.log(row.data.full_name)
  const handleFullNameChange = (event: any) => {
    setFullName(event.target.value);
  };

  const handlePhoneNumberChange = (event: any) => {
    setPhoneNumber(event.target.value);
  };

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleSwitchChange = () => {
    setChecked(!checked);
  };

  const handleSave = async () => {
    if (
      fullName == data.data.full_name &&
      phoneNumber == data.data.phonenumber &&
      checked == data.data.status
    ) {
      toast.error("No change");
    } else {
      setLoading(true);

      const reqData = {
        token: "",
        email: "",
        data: {
          email: data.data.email,
          full_name: fullName,
          phonenumber: phoneNumber,
          status: checked,
        },
      };
      const res = await EditSuperAdmin(reqData);

      if (res.message == "success") {
        toast.success("success");
        data.update(data.index, reqData.data);
        setLoading(false);
        setIsOpen(false);
      } else {
        toast.error(res.message);
      }
    }
  };

  useEffect(() => {
    setChecked(data.data.status);
    setFullName(data.data.full_name);
    setPhoneNumber(data.data.phonenumber);
  }, []);
  return (
    <>
      <Tooltip arrow placement="left" title="Edit">
        <IconButton
          aria-label="delete"
          sx={{ color: "white" }}
          onClick={handleClick}
        >
          <EditIcon />
        </IconButton>
      </Tooltip>

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
        <DialogTitle>Edit Super Admin</DialogTitle>
        <DialogContent>
          <div>email : {data.data.email}</div>
          <div className="h-2" />
          <TextField
            autoFocus
            margin="dense"
            id="task"
            label="Full Name"
            type="text"
            fullWidth
            value={fullName}
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
            value={phoneNumber}
            // defaultValue={phoneNumber}
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
