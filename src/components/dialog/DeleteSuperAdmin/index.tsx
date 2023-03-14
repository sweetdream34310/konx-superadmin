import { Fragment, useState } from "react";
import { IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { Button } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import { toast } from "react-hot-toast";
import LoadingButton from "@mui/lab/LoadingButton";
import { DeleteSuperAdmin } from "../../../api";

export default function MyModal(props: any) {
  let [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleDelete = async () => {
    setLoading(true);

    const reqData = {
      token: "",
      email: "",
      deleteEmail: props.data.email,
    };
    const res = await DeleteSuperAdmin(reqData);

    if (res.message == "success") {
      setLoading(false);
      props.update(props.index);
      props.updateNumber('delete');
      setIsOpen(false);
      toast.success("Delete success");
    } else {
      toast.error(res.message);
    }
  };

  return (
    <>
      <Tooltip arrow placement="bottom" title="Delete">
        <IconButton
          aria-label="delete"
          sx={{ color: "white" }}
          onClick={handleClick}
        >
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Dialog
        open={isOpen}
        onClose={closeModal}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
        PaperProps={{ sx: { width: "50%", minWidth: "400px" } }}
      >
        <DialogTitle>Delete Super Admin</DialogTitle>
        <DialogContent>
          <div>email : {props.data.email}</div>
          <div className="h-2" />
          <div>Full Name : {props.data.full_name}</div>
          <div className="h-2" />
          <div>Phone Number : {props.data.phonenumber}</div>
          <div className="h-2" />
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
            endIcon={<DeleteIcon />}
            variant="contained"
            sx={{ background: "#2e3539" }}
            onClick={handleDelete}
          >
            Delete
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </>
  );
}
