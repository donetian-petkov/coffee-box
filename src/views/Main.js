import {Breakpoint, BreakpointProvider} from "react-socks";

export const Main = () => {

    return (
        <BreakpointProvider>
            <div className="App">
                <Breakpoint large up>
                    <Header></Header>
                </Breakpoint>
                <Breakpoint medium down>
                    <Sidebar></Sidebar>
                </Breakpoint>
                <Footer></Footer>
            </div>
        </BreakpointProvider>
    )

}