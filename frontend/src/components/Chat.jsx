import React, { useState } from 'react'
import "../style/chat.css"
import { PiTelegramLogo } from "react-icons/pi";
import { CiCirclePlus } from "react-icons/ci";
import { TbMessage2Pause } from "react-icons/tb";
import { FaSearch } from "react-icons/fa";
import b1 from '../pictures/b1.jpg'
import { FiPaperclip } from "react-icons/fi";
import SeatSelectionModal from './SeatSelectionModal';
function Chat() {
    const [modul, setModul] = useState('1');
    const [openModal1, setOpenModal1] = useState(false);
    function openm(n){
        setModul(n)
        setOpenModal1(!openModal1)
    }
  return (
    <div className='dashboard'>
        <h3>Chat</h3>
        <div className="dashboard2">
            <div className="chatLeft">
                <div className={modul === '1' ? 'menu-item1' : ''} onClick={()=>setModul('1')} >
                <TbMessage2Pause style={{width:"40px",height:"40px",color:"blue",marginLeft:"10px"}} />
                <p style={{fontSize:"10px"}}>Send Message</p>
                </div>
                <div className={modul === '2' ? 'menu-item1' : ''} onClick={()=>openm('2')} >
                <CiCirclePlus style={{width:"40px",height:"40px",color:"blue",marginLeft:"10px"}} />
               
                </div>
                
            </div>
            <div className="chatMiddle">
            <div className="qidirishHeader">
        <div className="search-input-wrapper">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            onChange={(e) => getByName(e.target.value)}
          />
          <FaSearch className="search-icon" />
        </div>
      </div>
      <div className="userFull">
      <img className={'nameUser2'} src={b1} alt='name'/>
        <div className="userText">
            <h5>Emma Burger</h5>
            <p>lorem ipsum dolor

            </p>
        </div>
        <p style={{marginTop:"12px"}}>3.45PM</p>
      </div>
            </div>
            <div className="chatRight">
            <div className="userFull1">
      <img className={'nameUser2'} src={b1} alt='name'/>
        <div className="userText">
            <h5>Emma Burger</h5>
            <p>lorem ipsum dolor

            </p>
        </div>
      </div>
      <div className="line"></div>
      <div className="message1">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum officiis magni voluptate </p>
      </div>
      <div className="message2">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum officiis magni voluptate </p>
      </div>
      <div className="line"></div>
    <div className="d-flex mt-3 gap-2 p-2">
        <input type="text" className='form-control' placeholder='Xabar yozing' style={{height:"50px"}} /><FiPaperclip className='tg' /><button className='jonatish'><PiTelegramLogo /> Jo'natish</button>
    </div>
            </div>
        </div>
        {openModal1 && (
        <SeatSelectionModal
          onClose={() => dispatch(setOpenModal1(false))}
        />
      )}
    </div>
  )
}

export default Chat
