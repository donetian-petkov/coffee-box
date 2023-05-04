import './App.css';
import {Route, Routes} from "react-router-dom";
import {Main} from "./views/Main";
import {ProtectedRoute} from "./components/authComponents/ProtectedRoute";

function App() {

    const auth = '';

    return (
        <Routes>
            <Route path='/' element={<Main/>}/>
            <Route element={<ProtectedRoute user={auth} />}>
                {/*<Route path='/logout' element={<Logout/>}/>*/}
            </Route>
            {/*<Route path='/search/:searchWords' element={<Search />} />*/}
            {/*<Route path="*" element={PageNotFound} />*/}
        </Routes>
    );
}

export default App;
