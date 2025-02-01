import { BrowserRouter, Routes, Route } from "react-router";
import Landing from './pages/landing.js';

function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;