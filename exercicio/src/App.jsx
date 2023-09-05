
import'./app.css'
import { Outlet} from "react-router-dom";
import Menu from "./routes/components/Menu";
import Rodape from "./routes/components/Rodape";


export default function App() {
  


  return (
    <>
        <Menu/>
        <Outlet/>
        <Rodape/>
    </>
  )
}
