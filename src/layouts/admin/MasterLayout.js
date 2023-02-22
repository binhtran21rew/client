import React from 'react';
import Navbar from './Navbar'
import Slidebar from './Slidebar'
import Footer from './Footer'

import '../../assets/admin/css/styles.css'
import '../../assets/admin/js/scripts'
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
                            Binh tran
                        </main>
                        <Footer />
                    </div>     
                </div>
            </div>
    )
}

export default MasterLayout 