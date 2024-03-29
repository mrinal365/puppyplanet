//Import from libs below
import React from 'react';

//Import styles below
import './topbar.css';

//Import Material Components below
import {Search, Person,Chat,Notifications} from '@material-ui/icons'


export default function TopBar(){
    return(
        <div className='topbarContainer'>
            <div className="topbarLeft">
                <span className='logo'>PuppyPlanet</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className='searchIcon'/>
                    <input type="text" placeholder='Search for friend, post or video' className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Homepage</span>
                    <span className="topbarLink">Timeline</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src='/assets/logo.png' alt="" className="topbarImg" />
            </div>
        </div>
    )
}