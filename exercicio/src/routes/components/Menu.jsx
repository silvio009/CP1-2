import { Link } from "react-router-dom";

export default function menu(){
    return(
        <nav className="menu">
          <Link to ="/">Home</Link>
          <span> | </span>
          <Link to ="/produtos">produtos</Link>
        </nav>
    )
}