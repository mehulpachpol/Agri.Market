import React from 'react'
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Link } from 'react-router-dom';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation
  } from "react-router-dom";
import CustomerAdmin from '../../components/CustomerAnalytics';
import SellerAdmin from '../../components/SellerAnalytics';
import AnalyticsAdmin from '../../components/AnalyticsAdmin';

function Sidebar() {
  return (
    <div>
        <div>

        <SideNav
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home" >
        <NavItem eventKey="home">
            <NavIcon>
                <Link to={'/admin'}><i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /></Link>    
            </NavIcon>
            <NavText>
                Home
            </NavText>
        </NavItem>

        <NavItem eventKey="seller">
            <NavIcon>
            <Link to={'/admin/selleranalytics'}><i className="fa fa-fw fa-users" style={{ fontSize: '1.75em' }} />
            </Link>    

            </NavIcon>
            <NavText>
                Seller Page
            </NavText>
        </NavItem>

        <NavItem eventKey="customer">
            <NavIcon>
            <Link to={'/admin/customeranalytics'}><i className="fa fa-fw fa-user" style={{ fontSize: '1.75em' }} />
            </Link>    

            </NavIcon>
            <NavText>
                Customer Page
            </NavText>
        </NavItem>

        <NavItem eventKey="adminanalytics">
            <NavIcon>
            <Link to={'/admin/adminanalytics'}><i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </Link>
            </NavIcon>
            <NavText>
                Admin analytics
            </NavText>
        </NavItem>


        <NavItem eventKey="logout">
            <NavIcon>
                <i className="fa fa-fw fa-sign-out" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Log Out
            </NavText>
        </NavItem>


    </SideNav.Nav>
</SideNav>
    </div>
        
    </div>
  )
}

export default Sidebar;