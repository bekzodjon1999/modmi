import React from "react";
import '../style/dashboard.css';
import Chart from "./Chart.jsx";
import { PiStudentFill } from "react-icons/pi";
import { BiArea } from "react-icons/bi";
import { BsSuitcase2 } from "react-icons/bs";
function Dashboard() {
    return (
        <div className="dashboard">
            <h3 className={'h3Dashboard'}>Dashboard</h3>
            <div className="stats">
                <div className="stat-box" style={{borderLeft: "5px solid blue"  }}>
                    <PiStudentFill className={'studentIcons'}/>
                    <div className={'textBox'}>
                        <h3>2k+</h3>
                        <p>Studentlar soni</p>
                    </div>

                </div>
                <div className="stat-box" style={{borderLeft: "5px solid yellow"  }}>
                    <BiArea className={'quantityStudent'}/>
                    <div className={'textBox'}>
                        <h3>200+</h3>
                        <p>O'qituvchilar soni</p>
                    </div>

                </div>
                <div className="stat-box" style={{borderLeft: "5px solid blue"  }}>
                    <BsSuitcase2  className={'studentIcons'}/>
                    <div className={'textBox'}>
                        <h3>1k+</h3>
                        <p>Bugungi talabalar</p>
                    </div>

                    </div>
                </div>
            <div className={'d-flex  w-100 align-items-center gap-3'}>
                <div className="student-table w-100">
                    <div className={"tableTop"}>
                        <h3>Eng yaxshi 5ta student</h3>
                        <select className={'form-select w-25'}>
                            <option disabled={true}>guruhni tanlang</option>
                            <option value="">1-guruh</option>
                            <option value="">2-guruh</option>
                            <option value="">3-guruh</option>
                            <option value="">4-guruh</option>
                            <option value="">5-guruh</option>
                        </select>
                    </div>

                    <table>
                        <thead>
                        <tr>
                            <th>O'quvchi ismi</th>
                            <th>Baholar</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Amir</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>Abrotek</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>Diyor</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>Khursid</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Diyor</td>
                            <td>3</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="student-table1 w-100">
                    <div className={"tableTop1"}>
                        <h3>Guruhlar</h3>
                    </div>
                    <div className={"tableTop1"}>
                        <select className={'form-select ' } style={{width:"250px"}}>
                            <option disabled={true}>guruhni tanlang</option>
                            <option value="">1-guruh</option>
                            <option value="">2-guruh</option>
                            <option value="">3-guruh</option>
                            <option value="">4-guruh</option>
                            <option value="">5-guruh</option>
                        </select>
                        <select className={'form-select w-30'}  style={{width:"200px"}}>
                            <option disabled={true}> Reyting</option>
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                            <option value="">5</option>
                        </select>
                    </div>

                    <table>
                        <thead>
                        <tr>
                            <th>Guruhlar</th>
                            <th>Reyting</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Guruh1</td>
                            <td>5</td>
                        </tr>
                        <tr>
                        <td>Guruh2</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>Guruh3</td>
                            <td>5</td>
                        </tr>
                        <tr>
                            <td>Guruh4</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>Guruh5</td>
                            <td>3</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>


            <div className="attendance">
                <h3>Davomat statistikasi</h3>
                <div className="chart" style={{width: '100%', height: '500px'}}>
                    <Chart/>
                    {/*<p>Chart goes here</p>*/}
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
