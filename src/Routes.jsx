import NotFound from "./Pages/NotFound/NotFound";
import Users from "./Pages/Users/Users";
import Articles from "./Pages/Articles/Articles";
import Courses from "./Pages/Courses/Courses";
import Infos from "./Pages/Infos/Infos";

const routes = [
    {path: '/', element: <Users />},
    {path: '/users', element: <Users />},
    {path: '/articles', element: <Articles />},
    {path: '/courses', element: <Courses />},
    {path: '/infos', element: <Infos />},
    {path: '/*', element: <NotFound />}
]

export default routes;