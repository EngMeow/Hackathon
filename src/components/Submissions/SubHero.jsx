import images from "../../config/constants.js";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import '../../assets/css/Subs.css'

export function SubHero () {
  const navigate = useNavigate();
  return (
      <div className="containerArea">
        <div className="row">
        <div className="col-md-8">
        <motion.h2 className="my-4" animate={{ x: [-70, 12, -10, 0], opacity: [0, 0.7, 1] }}>
          Hackathon submissions
        </motion.h2>
        <p>
        Hackathon subs spanned across various categories and themes,
        reflecting the dynamic range of ideas explored by participants. Categories such as AI technologies saw a convergence of creativity, addressing real-world problems with technological solutions.
        </p>
        <button
          className="btn p-3 mt-4 rounded-4"
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/new");
          }}>
            Upload Submission
            </button>

        </div>
        <div className="col-md-4 text-center">
          <motion.img
            width={'250px'}
            whileInView={{ scale: [0.8, 1, 1.2, 1] }}
            transition={{ duration: 0.5 }}
            src={images.idea}/>
        </div>
        </div>
      </div>
  );
}
