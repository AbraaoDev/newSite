import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { HomePage } from "./pages/Home";
import { ProjectPage } from "./pages/project";


export function Router(){
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/project" element={<ProjectPage/>}/>
            </Route>
        </Routes>
    )
}