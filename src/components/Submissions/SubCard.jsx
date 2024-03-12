/* eslint-disable react/prop-types */
import moment from "moment";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export const SubCard = ({ item }) => {
  return (
    <div className="card shadow border-0 mb-4 p-4 rounded-5" >
       <div className="card-body">

    <Link to={`${item.id}`} className="subcard ">
      <motion.div layout>
        <img
          src={item.coverImage}
          className="img-fluid rounded-top"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "8px",
          }}
          alt=""
        />
        <span className="card-title h4 mx-3">{item.title}</span>
      </motion.div>
      <p className="card-text py-3">{item.summary}</p>
      <p className="card-text createdAt text-end fst-italic" style={{'fontSize':14}}>uploaded {moment(item.createdAt).fromNow()}</p>
    </Link>
    </div>
    </div>
  );
};
