import React, { useState, useEffect, useContext } from 'react';
import "../style/seatModal.css"
import { RiAdminLine } from "react-icons/ri";

function SeatSelectionModal({  onClose }) {
  
  
    
    return (
        <div className="modal-overlay1" onClick={onClose}>
            <div className="modal-content1" onClick={(e) => e.stopPropagation()}>
                <div className="close-icon-container1">
                    <h4>Grupa Yaratish</h4>
                    <button className="close-button1" onClick={onClose}>x</button>
                </div>
               <input type="text" className='form-control mt-3' />
                <div className="btnsModal">
                    <div className="firstButton">
                        <p>1 kurs</p><RiAdminLine className='admin' />
                    </div>
                    <div className="firstButton1">
                        <p>2 kurs</p><RiAdminLine className='admin1' />
                    </div>
                    <div className="firstButton1">
                        <p>3 kurs</p><RiAdminLine className='admin1' />
                    </div>
                </div>
                <div className="btnsModal">
                    <div className="firstButton">
                        <p>Guruh 1</p><RiAdminLine className='admin' />
                    </div>
                    <div className="firstButton1">
                        <p>Guruh 2</p><RiAdminLine className='admin1' />
                    </div>
                    <div className="firstButton1">
                        <p>Guruh 3</p><RiAdminLine className='admin1' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SeatSelectionModal;
