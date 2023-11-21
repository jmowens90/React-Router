import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div id="footer">
          <Link to="/">Home</Link>
          <Link to="/blue">Blue</Link>
          <Link to="/red">Red</Link>
          <Link to="/black">Black</Link>
          <Link to="/pink">Pink</Link>
        </div>
    )
}

export default Footer