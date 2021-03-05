import React, { useState } from 'react'
// import { NavLink, Link } from "react-router-dom"
import { NavLink } from "react-router-dom"

import { Layout, Menu } from 'antd'
import { FiHome, FiCircle } from "react-icons/fi";
import { ReactComponent as TransferLogo } from "assets/Transfer.svg";
// import { ReactComponent as DBSLogo } from "assets/dbs_logo.svg";
import "./NavBar.css"

import { routes } from "routes.js"

function Sidebar() {
  const createLinks = routes => {
    // eslint-disable-next-line
    return routes.map((prop, key) => {
      if (prop.layout === "/app") {
        return (
          <Menu.Item className={activeRoute(prop.layout + prop.path)} key={key} 
            icon={ prop.icon === "home" ? <FiHome/> 
                  : prop.icon === "txn" ? <TransferLogo/> : null 
                  }
          >
            <NavLink to={prop.layout + prop.path} activeClassName="" >
              {/* <> <span>{prop.name}</span> </> */}
              {prop.name}
            </NavLink>
          </Menu.Item>
        );
      }
    });
  };
  // verifies if routeName is the one active (in browser input)
  const activeRoute = routeName => {
    return window.location.href.indexOf(routeName) > -1 ? "ant-menu-item-selected" : "";
  };

  const [collapsed, setCollapsed] = useState(false) 
  const onCollapse = () => setCollapsed(!collapsed)

  return (
      <>
        <Layout.Sider
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
          theme="dark"
          // style={{
          //   overflow: 'auto',
          //   height: '100vh'
          // }}
        >
          <div className="logo" style={{height: "50px", textAlign:"center", margin: "16px"}}>
            <FiCircle/>
          </div>
          {/* <div className="logo" >
            <Link to="/app/dashboard">
              <DBSLogo className="sidebar__logo--svg"/>
              <span className="sidebar__logo--title">bookator</span>
            </Link>
          </div> */}
          <Menu theme="dark" mode="inline">
            {createLinks(routes)}
            {/* <Menu.Item key="1" icon={
              <IconContext.Provider value={{ className: "mobile-navbar-icon" }}>
                <FiHome/>
              </IconContext.Provider>}/>
            <Menu.Item key="2" icon={<FiCreditCard />}/> 
            <Menu.Item key="3" icon={<FiAward />}/> */}
          </Menu>
        </Layout.Sider>
      </>
  );
}

export default Sidebar