import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Fragment } from 'react';
import { publicRoutes } from '@/routes';
import DefaultLayout from './components/Layout/DefaultLayout';
import OnlyHeader from './components/Layout/OnlyHeader';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Component = route.component;

                        let Layout = DefaultLayout

                        if(route.layout){
                            Layout = OnlyHeader
                        }else if(route.layout === null ){
                            Layout = Fragment
                        }

                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Component />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
