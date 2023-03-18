import { About } from "./components/About";
import { Intro } from "./components/Intro";
import { Tecs } from "./components/Tecs";


export function HomePage(){
    return(
        <>
            <Intro />
            <About />
            <Tecs />
        </>
        
    )
}