import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Navbar from './Navbar'
import Slidebar from './Slidebar'
import Footer from './Footer'

import '../../assets/admin/css/styles.css'
import '../../assets/admin/js/scripts'
import routes from '../../routes/routes'
const MasterLayout = () => {
    return (
            <div className="sb-nav-fixed">
                <Navbar />
                <div id="layoutSidenav">
                    <div id="layoutSidenav_nav">
                        <Slidebar />
                    </div>  

                    <div id="layoutSidenav_content">
                        <main>
                            <Switch>
                                {
                                    routes.map((route, i) => {
                                        return(
                                            route.component && (
                                                <Route 
                                                    key={i}
                                                    path={route.path}
                                                    exact={route.exact}
                                                    name={route.name}
                                                    render={(props) => (
                                                        <route.component {...props}/>
                                                    )}
                                                />

                                            )
                                        )
                                    }
                                )}
                                <Redirect from='admin' to='/admin/dashboard' />
                            </Switch>
                        </main>
                        <Footer />
                    </div>     
                </div>
            </div>
    )
}

export default MasterLayout 