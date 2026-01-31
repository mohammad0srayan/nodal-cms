import './App.css';
import routes from "./Routes"
import {useRoutes} from "react-router-dom";

export default function App() {

  const router = useRoutes(routes)

  return (
      <div className={'bg-[#282828] h-screen'}>
        {router}
      </div>
  )
}