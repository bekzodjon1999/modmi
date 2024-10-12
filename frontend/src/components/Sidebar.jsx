import React, {useState} from "react";
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

import { IoLogInOutline } from "react-icons/io5";
import {Link, Outlet} from "react-router-dom";
function Sidebar() {
    const [modul, setModul] = useState('1');

    return (
        <div className={'vh-100 d-flex gap-3'}>
            <div className="sidebar">
                <div className={'logo'}>
                    <img src={b1} alt="logo" style={{width: "100%", height: "100%", objectFit: "cover"}}/>
                </div>

                <ul>
                    <li className={modul === '1' ? 'menu-item' : ''} onClick={()=>setModul('1')}> <Link to="/sidebar/dashboard"><MdDashboard className={"icons"}/> Dashboard</Link></li>
                    <li className={modul === '2' ? 'menu-item' : ''} onClick={()=>setModul('2')}><CiViewTable className={"icons"}/> Jadval</li>
                    <li className={modul === '3' ? 'menu-item' : ''} onClick={()=>setModul('3')}><LiaTableSolid className={"icons"}/> Kurslar</li>
                    <li className={modul === '4' ? 'menu-item' : ''} onClick={()=>setModul('4')}><HiDocumentReport className={"icons"}/> Report</li>
                    <li className={modul === '5' ? 'menu-item' : ''} onClick={()=>setModul('5')}><MdPlayLesson className={"icons"}/> Darslar</li>
                    <li className={modul === '6' ? 'menu-item' : ''} onClick={()=>setModul('6')}><MdOutlineAlternateEmail className={"icons"}/> Email</li>
                    <li className={modul === '7' ? 'menu-item' : ''} onClick={()=>setModul('7')}><Link to="/sidebar/chat"><BsChatDotsFill className={"icons"}/> Chat <div className={'chatQuantity'}><p>49</p></div></Link></li>
                    <li className={modul === '8' ? 'menu-item' : ''} onClick={()=>setModul('8')}> <Link to="/sidebar/settings"><IoSettingsSharp className={"icons"}/> Sozlamalar </Link></li>
                </ul>
                <div className={'d-flex'} >
                    <img className={'nameUser1'} src={b1} alt='name'/>
                    <div className={'textBox1'}>
                        <h6>Bobur</h6>
                        <p>Admin</p>
                    </div>
                    <IoLogInOutline className={'logout'}/>
                </div>
            </div>
            <div className={'sideLeft'}>
                <Outlet/>
            </div>
        </div>

    );

}

export default Sidebar;
