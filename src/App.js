import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { pushlicRoutes } from "~/routes";
import { DefaultLayout } from "~/components/Layout";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {pushlicRoutes.map((route, i)=>{
                        let Layout = DefaultLayout;
                        if( route.layout){
                            Layout = route.layout
                        }else if (route.layout === null){
                            Layout = Fragment
                        }
                        const Page = route.component
                        return <Route key={i} path={route.path} element={
                        <Layout>
                            <Page/>
                        </Layout>}/>
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
