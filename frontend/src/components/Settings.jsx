import React from 'react'
import "../style/setting.css"
import { MdPhotoCamera } from "react-icons/md";
import ins from '../pictures/instagram.svg'
import tel from '../pictures/telegram1.svg'
import plus from '../pictures/plus.png'
import face from '../pictures/Facebook1.svg'
import git from '../pictures/b11.png'
function Settings() {
  return (
    <div className='dashboard'>
        <h5>Sozlamalar</h5>
        <div className="dashboard1">
              <div className="aboutUser">
        <div className="btns">
            <button className='profileBtn'>Profile</button>
            <button className='profileCVV'>CVV</button>
        </div>
                  <div className={'userImg'}>
                      <div className={'userimg1'}>
                          <MdPhotoCamera className={'photoIcons'}/>
                      </div>
                      <h4>Khamroyev <br/> Bekzod</h4>
                  </div>
                  <div className={'ijtimoiyTarmoq'}>
                      <div className={'ijtimoiyTarmoq1'}>
                          <img src={ins} className={'ins'} alt="instagram"/>
                          <div className={'userIns'}> @Khamroyev_1999</div>
                      </div>
                      <div className={'ijtimoiyTarmoq2'}>
                          <img src={tel} className={'ins '} alt="telegram"/> <h3>Telegram</h3> <img className={'plus'}
                                                                                                    src={plus}
                                                                                                    alt="plus"/>
                      </div>
                      <div className={'ijtimoiyTarmoq2'}>
                          <img src={git} className={'ins '} alt="git hub"/> <h3>Git Hub</h3> <img className={'plus'}
                                                                                                  src={plus}
                                                                                                  alt="plus"/>
                      </div>
                      <div className={'ijtimoiyTarmoq2'}>
                          <img src={face} className={'ins '} alt="git hub"/> <h3>Facebook</h3> <img className={'plus'}
                                                                                                  src={plus}
                                                                                                  alt="plus"/>
                      </div>
                  </div>
              </div>
            <div className="aboutUser">
                <div className={'topinput'}>
                    <div className={'firstInput'}>
                        <p>Ism</p>
                        <input placeholder={'Bekzod'} type="text" className={'form-control'}/>
                    </div>
                    <div className={'firstInput'}>
                        <p>Familiya</p>
                        <input placeholder={'Khamroyev'} type="text" className={'form-control'}/>
                    </div>

                </div>
                <div className={'topinput'}>
                    <div className={'firstInput'}>
                        <p>Telefon Raqam</p>
                        <input placeholder={'Telefon raqam'} type="text" className={'form-control'}/>
                    </div>
                    <div className={'firstInput'}>
                        <p>Email</p>
                        <input placeholder={'email'} type="text" className={'form-control'}/>
                    </div>

                </div>
                <div className={'topinput'}>
                    <div className={'firstInput'}>
                        <p>Men Haqimda</p>
                        <textarea className={'form-control '}
                                  style={{height: "150px", marginTop: "10px", width: "300px"}}/>

                    </div>
                </div>
                <div className={'topinput'}>
                    <div className={'firstInput'}>
                        <p>Davlat</p>
                        <input placeholder={"O'zbekiston"} type="text" className={'form-control'}/>
                    </div>
                    <div className={'firstInput'}>
                        <p>Shahar</p>
                        <input placeholder={'Buxoro'} type="text" className={'form-control'}/>
                    </div>

                </div>
                <div className={'topinput'}>

                    <div className={'firstInput'}>
                        <p>Rayon</p>
                        <input placeholder={'Buxoro'} type="text" className={'form-control'}/>
                    </div>

                </div>
            </div>
            <div className="aboutUser">
                <div className={'topinput'}>
                    <div className={'firstInput'}>
                        <p>Ish Tajribasi <img className={'plus'} src={plus} alt="plus"/></p>
                        <input type="text" className={'form-control'} style={{width:"300px"}}/>
                    </div>


                </div>
                <div className={'topinput'}>
                    <div className={'firstInput'} style={{marginBottom:"20px"}}>
                        <p>Ta'lim <img className={'plus'} src={plus} alt="plus"/></p>
                    </div>


                </div>
                <div className={'topinput'}>
                    <div className={'firstInput'} style={{marginBottom:"20px"}}>
                        <p>Mahoratlar<img className={'plus'} src={plus} alt="plus"/></p>
                    </div>
                </div>
                <div className={'topinput'}>
                    <div className={'firstInput'} style={{marginBottom:"20px"}}>
                        <p>Akademik Test Natijalari<img className={'plus'} src={plus} alt="plus"/></p>
                    </div>
                </div>
                <div className={'topinput'}>
                    <div className={'firstInput'} style={{marginBottom:"20px"}}>
                        <p>Tadqiqot Tajribasi <img className={'plus'} src={plus} alt="plus"/></p>
                    </div>
                </div>

            </div>

        </div>
        <div className={'btnsFooter'}>
            <button className={'exit'}>Chiqish</button>
            <button className={'save'}>Saqlab qolish</button>
        </div>
    </div>
  )
}

export default Settings
