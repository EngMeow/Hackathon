/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import StarIcon from "@mui/icons-material/Star";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import { SubsContext } from "../../State/SubsContext";
import { AnimatePresence, motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Dialog } from "@mui/material";

function Deletesub({ open, setOpen, removesub, subId }) {
  const navigate = useNavigate();
  return (
    <Dialog
      open={open}
      PaperProps={{
        lg: {
          width: "130%",
        },
      }}
      className="deletesub"
    >
      <h3>Delete model</h3>
      <p>
        This action is irreversible. Are you sure you want to delete this model?
      </p>
      <div style={{ textAlign: "end" }}>
        <button
          onClick={() => {
            setOpen(false);
          }}
        >
          Cancel
        </button>
        <button
          className="delete"
          onClick={() => {
            removesub(subId);
            navigate("/");
          }}
        >
          <Link to="/">Delete</Link>
        </button>
      </div>
    </Dialog>
  );
}

export const SubHero = ({ sub }) => {
  const { manageFavority, removesub } = useContext(SubsContext);
  const [open, setOpen] = useState(false);
  const isOwner = localStorage.getItem("userName") == sub.userName;
  const [isFavorited, setIsFavorited] = useState(sub.isFavorited);

  return (
    <div className="wrapper" id="subhero">
      <div id='hero'>
        <div >
          <img src={sub.coverImage} />
          <h1>{sub.title}</h1>
        </div>
        {isOwner && (
          <div className="subaction mb-0">
            <Link to={`edit`}>
              <button>
                <ModeEditOutlineIcon className="me-2"/>Edit</button>
            </Link>
            <button onClick={() => {setOpen(true);}}>
                <DeleteIcon className="me-1"/>Delete</button>
          </div>
        )}
      </div>
      <p className="mb-5">{sub.summary}</p>

      <motion.span
        className="icon"
        layout
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ duration: 0.7 }}
        onClick={() => {
          manageFavority(sub.id);
          setIsFavorited(!isFavorited);
        }}
        style={{ cursor: "pointer" }}
      >
        <AnimatePresence>
          {isFavorited ? <StarIcon className="mb-3"/> : <StarOutlineIcon className="mb-3"/>}
        </AnimatePresence>
      </motion.span>

      <span className="date p-3">
        <CalendarTodayIcon
          style={{ width: "16px", height: "16px", marginRight: "4px" }}
        />
        {` ${new Date(sub.createdAt).getDate()} ${new Date(
          sub.createdAt
        ).toLocaleDateString("default", {
          month: "long",
        })}`}
      </span>
      <Deletesub
        open={open}
        setOpen={setOpen}
        removesub={removesub}
        subId={sub.id}
      />
    </div>
  );
};
