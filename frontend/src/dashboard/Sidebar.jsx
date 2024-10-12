import React from "react";
import '../style/sidebar.css';
import { CiViewTable } from "react-icons/ci";
import { LiaTableSolid } from "react-icons/lia";
import { HiDocumentReport } from "react-icons/hi";
import { MdPlayLesson } from "react-icons/md";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsChatDotsFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";
import b1 from '../pictures/b1.jpg'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className={'logo'}>
                <img src={b1} alt="logo" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
            </div>

            <ul>
                <li className={'menu-item'}><MdDashboard  className={"icons"}/> Dashboard</li>
                <li> <CiViewTable className={"icons"}/> Jadval</li>
                <li><LiaTableSolid className={"icons"}/> Kurslar</li>
                <li><HiDocumentReport className={"icons"}/> Report</li>
                <li><MdPlayLesson className={"icons"}/> Darslar</li>
                <li><MdOutlineAlternateEmail className={"icons"}/> Email</li>
                <li><BsChatDotsFill className={"icons"}/> Chat</li>
                <li><IoSettingsSharp className={"icons"}/>  Sozlamalar</li>
            </ul>
        </div>
    );

}

export default Sidebar;
