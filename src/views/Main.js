import {Breakpoint, BreakpointProvider} from "react-socks";
import {Header} from "../components/header/Header";
import {Sidebar} from "../components/sidebar/Sidebar";
import {Footer} from "../components/footer/Footer";

export const Main = () => {

    return (
        <BreakpointProvider>
                <Breakpoint large up>
                    <Header></Header>
                </Breakpoint>
                <Breakpoint medium down>
                    <Sidebar></Sidebar>
                </Breakpoint>
            <h1>Test</h1>
                <Footer></Footer>
        </BreakpointProvider>
    )

}