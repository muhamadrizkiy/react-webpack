/**
 * Created by Muhamad Rizki on 15/8/2017.
 */
import React from 'react';
import Header from '../Header';

export default class ContainerHeader extends React.Component {
    render() {
        return (
            <div>
                <div className="page-header navbar navbar-fixed-top">
                    <div className="page-header-inner">
                        <div className="page-logo">
                            <a href="data.html">
                                <h1 style={{fontSize: "initial", color: "white", marginTop: 15}}>KONDO</h1>
                            </a>
                            <div className="menu-toggler sidebar-toggler hide">
                            </div>
                        </div>
                        <a className="menu-toggler responsive-toggler" data-target=".navbar-collapse"
                           data-toggle="collapse" href="javascript:;">
                        </a>
                        <top-menu>
                            <div className="top-menu">
                                <ul className="nav navbar-nav pull-right">
                                    <li className="dropdown dropdown-extended dropdown-notification"
                                        id="header_notification_bar">
                                        <a className="dropdown-toggle" data-close-others="true" data-hover="dropdown"
                                           data-toggle="dropdown" href="javascript:;">
                                            <i className="icon-bell"></i>
                                            <span className="badge badge-default">7</span>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="external">
                                                <h3><span className="bold">12 pending</span> notifications</h3>
                                                <a href="data.html">view all</a>
                                            </li>
                                            <li>
                                                <ul className="dropdown-menu-list scroller" data-handle-color="#637283"
                                                    style={{height: 250}}>
                                                    <li>
                                                        <a href="javascript:;">
                                                            <span className="time">just now</span>
                                                            <span className="details">
                                                        <span className="label label-sm label-icon label-success">
                                                            <i className="fa fa-plus"></i>
                                                        </span>New user registered. </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;">
                                                            <span className="time">3 mins</span>
                                                            <span className="details">
                                                        <span className="label label-sm label-icon label-danger">
                                                            <i className="fa fa-bolt"></i>
                                                        </span>Server #12 overloaded. </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;">
                                                            <span className="time">10 mins</span>
                                                            <span className="details">
                                                        <span className="label label-sm label-icon label-warning">
                                                            <i className="fa fa-bell-o"></i>
                                                        </span>Server #2 not responding. </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>


                                    <li className="dropdown dropdown-extended dropdown-inbox" id="header_inbox_bar">
                                        <a className="dropdown-toggle" data-close-others="true" data-hover="dropdown"
                                           data-toggle="dropdown" href="javascript:;">
                                            <i className="icon-envelope-open"></i>
                                            <span className="badge badge-default">4 </span>
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li className="external">
                                                <h3>You have <span className="bold">7 New</span> Messages</h3>
                                                <a href="data.html">view all</a>
                                            </li>
                                            <li>
                                                <ul className="dropdown-menu-list scroller" data-handle-color="#637283"
                                                    style={{height: 275}}>
                                                    <li>
                                                        <a href="inbox.html?a=view">
                                                    <span className="photo">
                                                    <img alt="" className="img-circle"
                                                         src="/assets/admin/layout3/img/avatar2.jpg"/>
                                                    </span>
                                                            <span className="subject">
                                                    <span className="from">
                                                    Lisa Wong </span>
                                                    <span className="time">Just Now </span>
                                                    </span>
                                                            <span className="message">
                                                            Vivamus sed auctor nibh congue nibh. auctor nibh auctor nibh... </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="inbox.html?a=view">
                                                        <span className="photo">
                                                            <img alt="" className="img-circle"
                                                                 src="/assets/admin/layout3/img/avatar3.jpg"/>
                                                        </span>
                                                            <span className="subject">
                                                                <span className="from">Richard Doe </span>
                                                                <span className="time">16 mins </span>
                                                            </span>
                                                            <span className="message">Vivamus sed congue nibh auctor nibh congue nibh. auctor nibh auctor nibh... </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>


                                    <li className="dropdown dropdown-extended dropdown-tasks" id="header_task_bar">
                                        <a className="dropdown-toggle" data-close-others="true" data-hover="dropdown"
                                           data-toggle="dropdown" href="javascript:;">
                                            <i className="icon-calendar"></i>
                                            <span className="badge badge-default">3 </span>
                                        </a>
                                        <ul className="dropdown-menu extended tasks">
                                            <li className="external">
                                                <h3>You have <span className="bold">12 pending</span> tasks</h3>
                                                <a href="data.html">view all</a>
                                            </li>
                                            <li>
                                                <ul className="dropdown-menu-list scroller" data-handle-color="#637283"
                                                    style={{height: 275}}>
                                                    <li>
                                                        <a href="javascript:;">
                                                            <span className="task">
                                                                <span className="desc">New release v1.2 </span>
                                                                <span className="percent">30%</span>
                                                            </span>
                                                            <span className="progress">
                                                                <span aria-valuemax="100" aria-valuemin="0" aria-valuenow="40" className="progress-bar progress-bar-success" style={{width: "40%"}}><span className="sr-only">40% Complete</span></span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;">
                                                            <span className="task">
                                                                <span className="desc">Application deployment</span>
                                                                <span className="percent">65%</span>
                                                            </span>
                                                            <span className="progress">
                                                                <span aria-valuemax="100" aria-valuemin="0" aria-valuenow="65" className="progress-bar progress-bar-danger" style={{width: "65%"}}><span className="sr-only">65% Complete</span></span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;">
                                                            <span className="task">
                                                                <span className="desc">Mobile app release</span>
                                                                <span className="percent">98%</span>
                                                            </span>
                                                            <span className="progress">
                                                                <span aria-valuemax="100" aria-valuemin="0" aria-valuenow="98" className="progress-bar progress-bar-success" style={{width: "98%"}}><span className="sr-only">98% Complete</span></span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;">
                                                            <span className="task">
                                                                <span className="desc">Database migration</span>
                                                                <span className="percent">10%</span>
                                                            </span>
                                                            <span className="progress">
                                                                <span aria-valuemax="100" aria-valuemin="0" aria-valuenow="10" className="progress-bar progress-bar-warning" style={{width: "10%"}}><span className="sr-only">10% Complete</span></span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;">
                                                            <span className="task">
                                                                <span className="desc">Web server upgrade</span>
                                                                <span className="percent">58%</span>
                                                            </span>
                                                            <span className="progress">
                                                                <span aria-valuemax="100" aria-valuemin="0" aria-valuenow="58" className="progress-bar progress-bar-info" style={{width: "58%"}}><span className="sr-only">58% Complete</span></span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;">
                                                            <span className="task">
                                                                <span className="desc">Mobile development</span>
                                                                <span className="percent">85%</span>
                                                            </span>
                                                            <span className="progress">
                                                                <span aria-valuemax="100" aria-valuemin="0" aria-valuenow="85" className="progress-bar progress-bar-success" style={{width: "85%"}}><span className="sr-only">85% Complete</span></span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="javascript:;">
                                                            <span className="task">
                                                                <span className="desc">New UI release</span>
                                                                <span className="percent">38%</span>
                                                            </span>
                                                            <span className="progress progress-striped">
                                                                <span aria-valuemax="100" aria-valuemin="0" aria-valuenow="18" className="progress-bar progress-bar-important" style={{width: "38%"}}><span className="sr-only">38% Complete</span></span>
                                                            </span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>


                                    <li className="dropdown dropdown-user">
                                        <a className="dropdown-toggle" data-close-others="true" data-hover="dropdown"
                                           data-toggle="dropdown" href="javascript:;">
                                            <img alt="" className="img-circle"
                                                 src="/assets/admin/layout/img/avatar3_small.jpg"/>
                                            <span className="username username-hide-on-mobile">Nick </span>
                                            <i className="fa fa-angle-down"/>
                                        </a>
                                        <ul className="dropdown-menu dropdown-menu-default">
                                            <li>
                                                <a href="data.html">
                                                    <i className="icon-user"></i> My Profile </a>
                                            </li>
                                            <li>
                                                <a href="data.html">
                                                    <i className="icon-calendar"></i> My Calendar </a>
                                            </li>
                                            <li>
                                                <a href="data.html">
                                                    <i className="icon-envelope-open"></i> My Inbox <span
                                                    className="badge badge-danger">
                                                3 </span>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="data.html">
                                                    <i className="icon-rocket"></i> My Tasks <span
                                                    className="badge badge-success">
                                                7 </span>
                                                </a>
                                            </li>
                                            <li className="divider">
                                            </li>
                                            <li>
                                                <a href="data.html">
                                                    <i className="icon-lock"></i> Lock Screen </a>
                                            </li>
                                            <li>
                                                <a href="data.html">
                                                    <i className="icon-key"></i> Log Out </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="dropdown dropdown-quick-sidebar-toggler">
                                        <a className="dropdown-toggle" href="javascript:;">
                                            <i className="icon-logout"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </top-menu>
                    </div>
                </div>

                <div className="page-container" style={{paddingTop: 50}}>
                    <sidebar>
                        <div className="page-sidebar-wrapper">
                            <div className="page-sidebar navbar-collapse collapse">
                                <ul className="page-sidebar-menu " data-auto-scroll="true" data-keep-expanded="false"
                                    data-slide-speed="200">
                                    <li className="sidebar-toggler-wrapper">
                                        <div className="sidebar-toggler">
                                        </div>
                                    </li>
                                    <li className="sidebar-search-wrapper">
                                        <form action="extra_search.html" className="sidebar-search " method="POST">
                                            <a className="remove" href="javascript:;">
                                                <i className="icon-close"></i>
                                            </a>
                                            <div className="input-group">
                                                <input className="form-control" placeholder="Search..." type="text"/>
                                                <span className="input-group-btn">
                                                    <a className="btn submit" href="javascript:;">
                                                        <i className="icon-magnifier"/>
                                                    </a>
                                                </span>
                                            </div>
                                        </form>

                                    </li>
                                    <li className="start active open">
                                        <a href="/">
                                            <i className="icon-home"></i>
                                            <span className="title">Dashboard</span>
                                            <span className="selected"></span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">
                                            <i className="icon-user"></i>
                                            <span className="title">Members</span>
                                            <span className="arrow "></span>
                                        </a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="#!user">
                                                    <i className="icon-home"></i>
                                                    Member Management</a>
                                            </li>
                                            <li>
                                                <a href="#!user">
                                                    <i className="icon-basket"></i>
                                                    Member Request</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="javascript:;">
                                            <i className="icon-picture"></i>
                                            <span className="title">Carousel</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">
                                            <i className="icon-users"></i>
                                            <span className="title">Community Feed</span>
                                            <span className="arrow "></span>
                                        </a>
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="data.html">
                                                    <i className="icon-pencil"></i>
                                                    Post</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="javascript:;">
                                            <i className="icon-wallet"></i>
                                            <span className="title">Billing Payment</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">
                                            <i className="icon-earphones"></i>
                                            <span className="title">Helpdesk</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">
                                            <i className="icon-settings"></i>
                                            <span className="title">Service Providers</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="javascript:;">
                                            <i className="icon-bar-chart"></i>
                                            <span className="title">Management Reports</span>
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </sidebar>


                    <div className="page-content-wrapper" id="content">
                        <div className="page-content">
                            <div className="page-bar">
                                <ul className="page-breadcrumb">
                                    <li>
                                        <i className="fa fa-home"></i>
                                        <a href="data.html">Home</a>
                                        <i className="fa fa-angle-right"></i>
                                    </li>
                                    <li>
                                        <a href="#">Dashboard</a>
                                    </li>
                                </ul>
                            </div>
                            <h3 className="page-title">
                                Dashboard
                                <small>reports &amp; statistics</small>
                            </h3>

                        </div>
                    </div>

                </div>
                <div className="page-footer">
                    <div className="page-footer-inner">
                        2017 © Admin by Kondo.id
                    </div>
                    <div className="scroll-to-top">
                        <i className="icon-arrow-up"></i>
                    </div>
                </div>
            </div>
        );
    }
}