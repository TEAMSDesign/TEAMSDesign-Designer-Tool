import React, { useState } from "react";
import '../index.css';
import './AppDemo.css';

const AppDemo = (props) => {

    // const [fullscreen, setFullscreen] = useState(false);

    const switchFullScreen = () => {
        if (document.documentElement.requestFullscreen) {
            document.documentElement.requestFullscreen();
        } else if (document.documentElement.webkitRequestFullscreen) { /* Safari */
            document.documentElement.webkitRequestFullscreen();
        } else if (document.documentElement.msRequestFullscreen) { /* IE11*/
            document.documentElement.msRequestFullscreen();
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) { /* Safari */
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) { /* IE11 */
            document.msExitFullscreen();
        }
        // setFullscreen(true);
    }

    const themeTarget = document.getElementById("body");

    const switchTheme = () => {
      if (themeTarget.attr('data-theme')==='' || themeTarget.attr('data-theme')==='dark') {
        themeTarget.attr('data-theme','light');
      }
      else if (themeTarget.attr('data-theme')==='light') {
        themeTarget.attr('data-theme','dark');
      }
    };

    // const fullScreenSwitch = document.getElementById("fullscreen-switch");
    // fullScreenSwitch.on('click', function () {
    //     if (document.documentElement.requestFullscreen) {
    //     document.documentElement.requestFullscreen();
    //     } else if (document.documentElement.webkitRequestFullscreen) { /* Safari */
    //     document.documentElement.webkitRequestFullscreen();
    //     } else if (document.documentElement.msRequestFullscreen) { /* IE11 */
    //     document.documentElement.msRequestFullscreen();
    //     } else if (document.exitFullscreen) {
    //     document.exitFullscreen();
    //     } else if (document.webkitExitFullscreen) { /* Safari */
    //     document.webkitExitFullscreen();
    //     } else if (document.msExitFullscreen) { /* IE11 */
    //     document.msExitFullscreen();
    //     }
    // });

    const [collapseSidebar, setCollapseSidebar] = useState(true);

    // const handleCollapseSidebar = () => {
    //     setCollapseSidebar(false);
    //     document.getElementById("dashboardSidebar").style.width = "42px";
    // }

    let sidebarButtonIconStyle = {
        marginRight: collapseSidebar ? "var(--header-children-margin-right)" : "0"
    }

    let sidebarButtonTextStyle = {
        display: collapseSidebar ? "block" : "none"
    }

    let sidebarSectionStyle = {
        alignItems: collapseSidebar ? "start" : "center"
    }

    return (
        <div id="container">
            <div className="meta-header">
                <a className="logo">Brand Logo</a>
                <div>
                    <button onClick={props.h}>Theme</button>
                    <button onClick={switchFullScreen}>Fullscreen</button>
                </div>
            </div>
            <div id="dashboardScreen">
                <header>
                    <div className="header-section">
                        <p>Section Title | Main Info</p>
                    </div>
                    <div className="header-section">
                        <p>01.Jan.2023</p>
                        <p>12:00</p>
                    </div>
                    <div className="header-section">
                        <i class="material-symbols-outlined">wifi</i>
                        <i class="material-symbols-outlined">bluetooth</i>
                        <i class="material-symbols-outlined">settings</i>
                        <i class="material-symbols-outlined">person</i>
                    </div>
                </header>
                <div id="dashboardSidebar" style={{width: collapseSidebar ? "var(--dashboard-open-sidebar-width)" : "var(--dashboard-close-sidebar-width)" }}>
                    <div className="sidebar__navbar">
                        <div className="sidebar__navbar-section" style={sidebarSectionStyle}>
                            <div>
                                <button className="sidebar__collapse-button"><i class="material-symbols-outlined" style={sidebarButtonIconStyle}>home</i><span style={sidebarButtonTextStyle}>Home</span></button>
                            </div>
                        </div>
                        <div className="sidebar__navbar-section" style={sidebarSectionStyle}>
                            <p style={{display: collapseSidebar ? "block" : "none"}}>Pages</p>
                            <div>
                                <button className="sidebar__collapse-button"><i class="material-symbols-outlined" style={sidebarButtonIconStyle}>show_chart</i><span style={sidebarButtonTextStyle}>Analytics</span></button>
                                <button className="sidebar__collapse-button"><i class="material-symbols-outlined" style={sidebarButtonIconStyle}>calendar_month</i><span style={sidebarButtonTextStyle}>Calendar</span></button>
                                <button className="sidebar__collapse-button"><i class="material-symbols-outlined" style={sidebarButtonIconStyle}>table</i><span style={sidebarButtonTextStyle}>Tables</span></button>
                            </div>
                        </div>
                        <div className="sidebar__navbar-section" style={sidebarSectionStyle}>
                            <p style={{display: collapseSidebar ? "block" : "none"}}>Layouts</p>
                            <div>
                                <button className="sidebar__collapse-button"><i class="material-symbols-outlined" style={sidebarButtonIconStyle}>dashboard</i><span style={sidebarButtonTextStyle}>Dashboard</span></button>
                            </div>
                        </div>
                        <div className="sidebar__navbar-section" style={sidebarSectionStyle}>
                            <p></p>
                            <div>
                                <button className="sidebar__collapse-button"><i class="material-symbols-outlined" style={sidebarButtonIconStyle}>sell</i><span style={sidebarButtonTextStyle}>Pricing</span></button>
                                <button className="sidebar__collapse-button"><i class="material-symbols-outlined" style={sidebarButtonIconStyle}>article</i><span style={sidebarButtonTextStyle}>Forms</span></button>
                                <button className="sidebar__collapse-button"><i class="material-symbols-outlined" style={sidebarButtonIconStyle}>disabled_by_default</i><span style={sidebarButtonTextStyle}>Content</span></button>
                                <button className="sidebar__collapse-button"><i class="material-symbols-outlined" style={sidebarButtonIconStyle}>disabled_by_default</i><span style={sidebarButtonTextStyle}>Content</span></button>
                            </div>
                        </div>
                        <div className="sidebar__navbar-section" style={sidebarSectionStyle}>
                            <p style={{display: collapseSidebar ? "block" : "none"}}>Section</p>
                            <div>
                                <button className="sidebar__collapse-button"><i class="material-symbols-outlined" style={sidebarButtonIconStyle}>disabled_by_default</i><span style={sidebarButtonTextStyle}>Content</span></button>
                                <button className="sidebar__collapse-button"><i class="material-symbols-outlined" style={sidebarButtonIconStyle}>disabled_by_default</i><span style={sidebarButtonTextStyle}>Content</span></button>
                                <button className="sidebar__collapse-button"><i class="material-symbols-outlined" style={sidebarButtonIconStyle}>disabled_by_default</i><span style={sidebarButtonTextStyle}>Content</span></button>
                                <button className="sidebar__collapse-button"><i class="material-symbols-outlined" style={sidebarButtonIconStyle}>disabled_by_default</i><span style={sidebarButtonTextStyle}>Content</span></button>
                                <button className="sidebar__collapse-button"><i class="material-symbols-outlined" style={sidebarButtonIconStyle}>disabled_by_default</i><span style={sidebarButtonTextStyle}>Content</span></button>
                            </div>
                        </div>
                    </div>
                    <div className="sidebar__footer" style={{padding: collapseSidebar ? "var(--dashboard-sm-padding) var(--dashboard-sm-padding)" : "0"}}>
                        <button className="sidebar__collapse-button" onClick={() => setCollapseSidebar(!collapseSidebar)} style={{justifyContent: collapseSidebar ? "left" : "center"}}>
                            <i id="iconClose" class="material-symbols-outlined" style={{display: collapseSidebar ? "block" : "none"}}>left_panel_close</i><span style={sidebarButtonTextStyle}>Collapsed View</span>
                            <i id="iconOpen" class="material-symbols-outlined" style={{display: collapseSidebar ? "none" : "block"}}>left_panel_open</i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppDemo;