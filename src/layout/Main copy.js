import React from 'react';
import { Link, Outlet } from 'react-router-dom';


const Main = () => {



    return (
        <>
            <body id="page-top">
                <div id="wrapper">
                    <nav className="navbar navbar-dark align-items-start sidebar sidebar-dark accordion bg-gradient-primary p-0">
                        <div className="container-fluid d-flex flex-column p-0"><Link className="navbar-brand d-flex justify-content-center align-items-center sidebar-brand m-0" to='/'>
                            <div className="sidebar-brand-icon rotate-n-15"><i className="fas fa-laugh-wink"></i></div>
                            <div className="sidebar-brand-text mx-3"><span>CHS</span></div>
                        </Link>
                            <hr className="sidebar-divider my-0" />
                            <ul id="accordionSidebar" className="navbar-nav text-light">
                                <li className="nav-item"><Link className="nav-link" to='/dashboard'><i className="fas fa-tachometer-alt"></i><span>Dashboard</span></Link></li>
                                <li className="nav-item"><Link className="nav-link" to='/profile'><i className="fas fa-user"></i><span>Profile</span></Link></li>
                                <li className="nav-item"><Link className="nav-link" to='/table'><i className="fas fa-table"></i><span>Table</span></Link></li>
                                <li className="nav-item"><Link className="nav-link" to='/Login'><i className="far fa-user-circle"></i><span>Login</span></Link></li>
                                <li className="nav-item"><Link className="nav-link" to='/create-account'><i className="fas fa-user-circle"></i><span>Register</span></Link></li>
                                <li className="nav-item"><Link className="nav-link" to='/forgot-password'><i className="fas fa-key"></i><span>Forgotten Password</span></Link></li>
                                <li className="nav-item"><Link className="nav-link" to='jfjj'><i className="fas fa-exclamation-circle"></i><span>Page Not Found</span></Link></li>
                            </ul>



                            {/* Work later on this section */}
                            {/* <div className="text-center d-none d-md-inline">
                                <button id="sidebarToggle" className="btn rounded-circle border-0" type="button"></button>
                            </div> */}


                        </div>
                    </nav>
                    <div id="content-wrapper" className="d-flex flex-column">
                        <div id="content">
                            <nav className="navbar navbar-light navbar-expand bg-white shadow mb-4 topbar static-top">
                                <div className="container-fluid"><button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle me-3" type="button"><i className="fas fa-bars"></i></button>
                                    <form className="d-none d-sm-inline-block me-auto ms-md-3 my-2 my-md-0 mw-100 navbar-search">
                                        <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..." /><button className="btn btn-primary py-0" type="button"><i className="fas fa-search"></i></button></div>
                                    </form>
                                    <ul className="navbar-nav flex-nowrap ms-auto">
                                        <li className="nav-item dropdown d-sm-none no-arrow"><Link className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" to='/'><i className="fas fa-search"></i></Link>
                                            <div className="dropdown-menu dropdown-menu-end p-3 animated--grow-in" aria-labelledby="searchDropdown">
                                                <form className="me-auto navbar-search w-100">
                                                    <div className="input-group"><input className="bg-light form-control border-0 small" type="text" placeholder="Search for ..." />
                                                        <div className="input-group-append"><button className="btn btn-primary py-0" type="button"><i className="fas fa-search"></i></button></div>
                                                    </div>
                                                </form>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown no-arrow mx-1">
                                            <div className="nav-item dropdown no-arrow"><Link className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" to='/'><span className="badge bg-danger badge-counter">3+</span><i className="fas fa-bell fa-fw"></i></Link>
                                                <div className="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                                                    <h6 className="dropdown-header">alerts center</h6><Link className="dropdown-item d-flex align-items-center" to='/'>
                                                        <div className="me-3">
                                                            <div className="bg-primary icon-circle"><i className="fas fa-file-alt text-white"></i></div>
                                                        </div>
                                                        <div><span className="small text-gray-500">December 12, 2019</span>
                                                            <p>A new monthly report is ready to download!</p>
                                                        </div>
                                                    </Link><Link className="dropdown-item d-flex align-items-center" to='/'>
                                                        <div className="me-3">
                                                            <div className="bg-success icon-circle"><i className="fas fa-donate text-white"></i></div>
                                                        </div>
                                                        <div><span className="small text-gray-500">December 7, 2019</span>
                                                            <p>$290.29 has been deposited into your account!</p>
                                                        </div>
                                                    </Link><Link className="dropdown-item d-flex align-items-center" to='/'>
                                                        <div className="me-3">
                                                            <div className="bg-warning icon-circle"><i className="fas fa-exclamation-triangle text-white"></i></div>
                                                        </div>
                                                        <div><span className="small text-gray-500">December 2, 2019</span>
                                                            <p>Spending Alert: We&#39;ve noticed unusually high spending for your account.</p>
                                                        </div>
                                                    </Link><Link className="dropdown-item text-center small text-gray-500" to='/'>Show All Alerts</Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="nav-item dropdown no-arrow mx-1">
                                            <div className="nav-item dropdown no-arrow"><Link className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" to='/'><span className="badge bg-danger badge-counter">7</span><i className="fas fa-envelope fa-fw"></i></Link>
                                                <div className="dropdown-menu dropdown-menu-end dropdown-list animated--grow-in">
                                                    <h6 className="dropdown-header">alerts center</h6><Link className="dropdown-item d-flex align-items-center" to='/'>
                                                        <div className="dropdown-list-image me-3"><img className="rounded-circle" src="avatars/avatar4.jpeg" alt='avatar' />
                                                            <div className="bg-success status-indicator"></div>
                                                        </div>
                                                        <div className="fw-bold">
                                                            <div className="text-truncate"><span>Hi there! I am wondering if you can help me with a problem I&#39;ve been having.</span></div>
                                                            <p className="small text-gray-500 mb-0">Emily Fowler - 58m</p>
                                                        </div>
                                                    </Link><Link className="dropdown-item d-flex align-items-center" to='/'>
                                                        <div className="dropdown-list-image me-3"><img className="rounded-circle" src="avatars/avatar2.jpeg" alt='avatar' />
                                                            <div className="status-indicator"></div>
                                                        </div>
                                                        <div className="fw-bold">
                                                            <div className="text-truncate"><span>I have the photos that you ordered last month!</span></div>
                                                            <p className="small text-gray-500 mb-0">Jae Chun - 1d</p>
                                                        </div>
                                                    </Link><Link className="dropdown-item d-flex align-items-center" to='/'>
                                                        <div className="dropdown-list-image me-3"><img className="rounded-circle" src="avatars/avatar3.jpeg" alt='avatar' />
                                                            <div className="bg-warning status-indicator"></div>
                                                        </div>
                                                        <div className="fw-bold">
                                                            <div className="text-truncate"><span>Last month&#39;s report looks great, I am very happy with the progress so far, keep up the good work!</span></div>
                                                            <p className="small text-gray-500 mb-0">Morgan Alvarez - 2d</p>
                                                        </div>
                                                    </Link><Link className="dropdown-item d-flex align-items-center" to='/'>
                                                        <div className="dropdown-list-image me-3"><img className="rounded-circle" src="avatars/avatar5.jpeg" alt='avatar' />
                                                            <div className="bg-success status-indicator"></div>
                                                        </div>
                                                        <div className="fw-bold">
                                                            <div className="text-truncate"><span>Am I a good boy? The reason I ask is because someone told me that people say this to all dogs, even if they aren&#39;t good...</span></div>
                                                            <p className="small text-gray-500 mb-0">Chicken the Dog · 2w</p>
                                                        </div>
                                                    </Link><Link className="dropdown-item text-center small text-gray-500" to='/'>Show All Alerts</Link>
                                                </div>
                                            </div>
                                            <div className="shadow dropdown-list dropdown-menu dropdown-menu-end" aria-labelledby="alertsDropdown"></div>
                                        </li>
                                        <div className="d-none d-sm-block topbar-divider"></div>
                                        <li className="nav-item dropdown no-arrow">
                                            <div className="nav-item dropdown no-arrow">
                                                <Link className="dropdown-toggle nav-link" aria-expanded="false" data-bs-toggle="dropdown" to='/'>
                                                    <span className="d-none d-lg-inline me-2 text-gray-600 small">Valerie Luna</span><img className="border rounded-circle img-profile" src="avatars/avatar1.jpeg" alt='avatar' />
                                                </Link>



                                                <div className="dropdown-menu shadow dropdown-menu-end animated--grow-in">
                                                    <Link className="dropdown-item" to='/'><i className="fas fa-user fa-sm fa-fw me-2 text-gray-400"></i> Profile</Link>
                                                    <Link className="dropdown-item" to='/'><i className="fas fa-cogs fa-sm fa-fw me-2 text-gray-400"></i> Settings</Link>
                                                    <Link className="dropdown-item" to='/'><i className="fas fa-list fa-sm fa-fw me-2 text-gray-400"></i> Activity log</Link>
                                                    <div className="dropdown-divider"></div>
                                                    <Link className="dropdown-item" to='/'><i className="fas fa-sign-out-alt fa-sm fa-fw me-2 text-gray-400"></i> Logout</Link>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            <div className="container-fluid">



                                {/* ======================================================================================
                                    ====================================================================================== */}





                                <Outlet />


                                <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">
                                    Tooltip on bottom
                                </button>





                                {/* ======================================================================================
                                    ====================================================================================== */}





                            </div>
                        </div>
                        <footer className="bg-white sticky-footer">
                            <div className="container my-auto">
                                <div className="text-center my-auto copyright"><span>Copyright © Charupath HateyKhari School (CHS) 2023</span></div>
                            </div>
                        </footer>

                    </div>


                    {/* Work later on this section */}
                    {/* <Link className="border rounded d-inline scroll-to-top" href="#page-top"><i className="fas fa-angle-up"></i></Link> */}
                </div>
            </body>
        </>
    );
};

// export default Main;