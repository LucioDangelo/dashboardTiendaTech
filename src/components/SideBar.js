import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import ContentWrapper from './ContentWrapper';
import TopBar from './TopBar';
import ContentRowProducts from './ContentRowProducts';
import LastProductInDb from './LastProductInDb';
import CategoriesInDb from './CategoriesInDb';
import StatusInDb from './StatusInDb';
import Chart from './Chart';
import Chart2 from './Chart2';
import NotFound from './NotFound';
import Errors from './Errors';

function SideBar(){
    return(
        <React.Fragment>
            <ul className="navbar-nav bg-danger bg-gradient sidebar sidebar-dark accordion" id="accordionSidebar">

                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <h3 className="w-100">Dashboard</h3>
                    </div>
                </a>
                <hr className="sidebar-divider my-0"/>
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <span>Inicio</span>
                    </Link>
                </li>
                <hr className="sidebar-divider"/>
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/summary">
                        <span>Resumen</span>
                    </Link>
                </li>              
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/last-product-in-db">
                        <span>Ultimo Producto</span>
                    </Link>
                </li>              
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/genres-in-db">
                        <span>Cantidad de Productos x Genero</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/status-in-db">
                        <span>Cantidad de Productos x Status</span>
                    </Link>
                </li>

                <li className="nav-item">
                    <Link className="nav-link" to="/product-chart">
                        <span>Lista de Productos</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/user-chart">
                        <span>Lista de Usuarios</span>
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/errors">
                        <span>Reportar Error</span>
                    </Link>
                </li>

                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>

            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/summary">
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <TopBar />
                            <div className="container-fluid">
                                <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
                                    <h1 className="h3 mb-0 text-gray-800">Digital Tech</h1>
                                </div>
                                <ContentRowProducts />
                            </div>
                        </div>
                    </div>    
                </Route>
                <Route path="/last-product-in-db">
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <TopBar />
                            <div className="container-fluid">
                                <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
                                    <h1 className="h3 mb-0 text-gray-800">Digital Tech</h1>
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
                                    <h1 className="h3 mb-0 text-gray-800">Digital Tech</h1>
                                </div>
                                <div className="row">
                                    <CategoriesInDb />
                                </div>                            
                            </div>
                        </div>
                    </div>    
                </Route>

                <Route path="/status-in-db">
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <TopBar />
                            <div className="container-fluid">
                                <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
                                    <h1 className="h3 mb-0 text-gray-800">Digital Tech</h1>
                                </div>
                                <div className="row">
                                    <StatusInDb />
                                </div>                            
                            </div>
                        </div>
                    </div>    
                </Route>


                <Route path="/product-chart">
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <TopBar />
                            <div className="container-fluid">
                                <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
                                    <h1 className="h3 mb-0 text-gray-800">Digital Tech</h1>
                                </div>
                                <Chart />
                            </div>                            
                        </div>
                    </div>    
                </Route>  

                <Route path="/user-chart">
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <TopBar />
                            <div className="container-fluid">
                                <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
                                    <h1 className="h3 mb-0 text-gray-800">Digital Tech</h1>
                                </div>
                                <Chart2 />
                            </div>                            
                        </div>
                    </div>    
                </Route>  

                <Route path="/errors">
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <TopBar />
                            <div className="container-fluid">
                                <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
                                    <h1 className="h3 mb-0 text-gray-800">Digital Tech</h1>
                                </div>
                                <Errors />
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