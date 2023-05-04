import './App.css';
import {Route, Routes} from "react-router-dom";
import {Home} from "./views/Home";
import {ProtectedRoute} from "./components/authComponents/ProtectedRoute";
import {BreakpointProvider} from "react-socks";

function App() {

    const auth = '';

    return (
        <BreakpointProvider>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route element={<ProtectedRoute user={auth}/>}>
                    {/*<Route path='/logout' element={<Logout/>}/>*/}
                </Route>
                {/*<Route path='/search/:searchWords' element={<Search />} />*/}
                {/*<Route path="*" element={PageNotFound} />*/}
            </Routes>
        </BreakpointProvider>
    );
}

export default App;
