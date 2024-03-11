import { Link } from 'react-router-dom'
import images from "../../config/constants.js";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg px-5">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">
            <Link to="/">
              <img src={images.logo} className="img-fluid rounded-top " />
            </Link>
            </a>
        </div>
    </nav>
    </div>
  )
}
