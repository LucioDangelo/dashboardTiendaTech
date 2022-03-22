import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import ContentWrapper from './ContentWrapper';
import TopBar from './TopBar';
// import SearchProducts from './SearchProducts';
import ContentRowProducts from './ContentRowProducts';
import LastProductInDb from './LastProductInDb';
import CategoriesInDb from './CategoriesInDb';
import Chart from './Chart';
import Chart2 from './Chart2';
import NotFound from './NotFound';


function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-danger bg-gradient sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <h3 className="w-100">Dashboard</h3>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        {/* <i className="fas fa-balance-scale"></i> */}
                        <span>Inicio</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                {/* <div className="sidebar-heading">Navigation</div> */}

                {/*<!-- Nav Item - Search -->*/}
                {/* <li className="nav-item">
                    <Link className="nav-link collapsed" to="/search">
                        <i className="fas fa-search"></i>
                        <span>Buscar productos</span>
                    </Link>
                </li> */}

                {/*<!-- Nav Item - ContentRowProducts -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/summary">
                        {/* <i className="fas fa-database"></i> */}
                        <span>Resumen</span>
                    </Link>
                </li>
                
                {/*<!-- Nav Item - LastProductInDb -->*/}                
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/last-movie-in-db">
                        {/* <i className="fas fa-clipboard"></i> */}
                        <span>Ultimo Producto</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - CategoriesInDb -->*/}                
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/genres-in-db">
                        {/* <i className="fas fa-asterisk"></i> */}
                        <span>Cantidad de Productos x Genero</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - chart -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/movie-chart">
                        {/* <i className="fas fa-fw fa-table"></i> */}
                        <span>Lista de Productos</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/movie-chart2">
                        {/* <i className="fas fa-fw fa-table"></i> */}
                        <span>Lista de Usuarios</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Pages -->*/}
                {/* <li className="nav-item">
                    <a className="nav-link collapsed" href="/">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Pages</span>
                    </a>
                </li> */}

                {/*<!-- Nav Item - Charts -->*/}
                {/* <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Charts</span></a>
                </li> */}

                {/*<!-- Nav Item - Tables -->*/}
                {/* <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span></a>
                </li> */}

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}

            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                {/* <Route path="/search">
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <TopBar />
                            <div className="container-fluid">
                                <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
                                    <h1 className="h3 mb-0 text-gray-800">Guarida DB</h1>
                                </div>
                                <SearchProducts />
                            </div>
                        </div>
                    </div>    
                </Route> */}
                <Route path="/summary">
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <TopBar />
                            <div className="container-fluid">
                                <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
                                    <h1 className="h3 mb-0 text-gray-800">Tech DB</h1>
                                </div>
                                <ContentRowProducts />
                            </div>
                        </div>
                    </div>    
                </Route>
                <Route path="/last-movie-in-db">
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <TopBar />
                            <div className="container-fluid">
                                <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
                                    <h1 className="h3 mb-0 text-gray-800">Tech DB</h1>
                                </div>
                                <div className="row">
                                    <LastProductInDb />
                                </div>                            
                            </div>
                        </div>
                    </div>    
                </Route>
                <Route path="/genres-in-db">
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <TopBar />
                            <div className="container-fluid">
                                <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
                                    <h1 className="h3 mb-0 text-gray-800">Tech DB</h1>
                                </div>
                                <div className="row">
                                    <CategoriesInDb />
                                </div>                            
                            </div>
                        </div>
                    </div>    
                </Route>
                <Route path="/movie-chart">
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <TopBar />
                            <div className="container-fluid">
                                <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
                                    <h1 className="h3 mb-0 text-gray-800">Tech DB</h1>
                                </div>
                                <Chart />
                            </div>                            
                        </div>
                    </div>    
                </Route>  

                <Route path="/movie-chart2">
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <TopBar />
                            <div className="container-fluid">
                                <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
                                    <h1 className="h3 mb-0 text-gray-800">Tech DB</h1>
                                </div>
                                <Chart2 />
                            </div>                            
                        </div>
                    </div>    
                </Route>  



                <Route>
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <TopBar />
                            <NotFound />                          
                        </div>
                    </div>
                </Route>         
            </Switch>
            
        </React.Fragment>
    )
}
export default SideBar;