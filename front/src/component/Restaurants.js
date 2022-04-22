import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../restaurants.scss';

function Restaurants(props){
    // Math.random으로 난수 생성후 length만큼 곱하고 1더해서 1부터 시작 + 소수점날림 
    const randomNumber = Math.floor(Math.random() * 10 +1)

    let [ lunchData, setLunchData ] = useState([]);
    const [ typeData, setTypeData ] = useState(0);

    const dataSetting = async () => {
        axios.post('/lunch?type='+props.dbinfo.botable, {
            headers :{ 'Content-Type' : 'application/json' },
            body : { ...props.dbinfo }
        })
        .then(
            (lunch => {
                try{
                    setLunchData([...lunch.data]);
                    setTypeData(lunch.data[lunch.data.length - 1].bc_id);
                    console.log(lunchData[0].bc_category)
                }
                catch(err){ console.log('lunch 타입 확인' + err.message + '/' + typeof lunch )}
            })
        )
        .catch( e => { console.log(e + '에러로 통신 오류') } )
    }

    useEffect( () => { dataSetting(); } , [typeData] )
    

    return(
        <section id='restaurants'>
            <div className="wrap">
                <div className='box'>
                    <div className="container text-center">
                        <h1>
                            점심 뭐 먹지?
                        </h1>
                        <div className='menulist'>
                            <ul className='row row-cols-5'>
                                <li className='col'>
                                    <h3>한식</h3>
                                    <ul>
                                    { lunchData.bc_category === "한식" ?
                                        lunchData.map((lunchMenu, i) => {
                                            return(
                                                <li>
                                                    <a href="#none" key={i} className="">
                                                        {lunchMenu.bc_name}
                                                    </a>
                                                    <img src="" alt="" />
                                                    <button>클릭</button>
                                                </li>
                                            )
                                        })
                                        : ""
                                    }
                                    </ul>
                                </li>
                                <li className='col'>
                                    <h3>양식</h3>
                                    { lunchData.category === "양식" ?
                                        lunchData.map((lunchMenu, i) => {
                                            return(
                                                <a href="#none" key={i} className="">
                                                    {lunchMenu.bc_name}
                                                </a>
                                            )
                                        })
                                        : ""
                                    }
                                </li>
                                <li className='col'>
                                    <h3>일식</h3>
                                    { lunchData.category === "일식" ?
                                        lunchData.map((lunchMenu, i) => {
                                            return(
                                                <a href="#none" key={i} className="">
                                                    {lunchMenu.bc_name}
                                                </a>
                                            )
                                        })
                                        : ""
                                    }
                                </li>
                                <li className='col'>
                                    <h3>중식</h3>
                                    { lunchData.category === "중식" ?
                                        lunchData.map((lunchMenu, i) => {
                                            return(
                                                <a href="#none" key={i} className="">
                                                    {lunchMenu.bc_name}
                                                </a>
                                            )
                                        })
                                        : ""
                                    }
                                </li>
                                <li className='col'>
                                    <h3>기타</h3>
                                    { lunchData.category === "기타" ?
                                        lunchData.map((lunchMenu, i) => {
                                            return(
                                                <a href="#none" key={i} className="">
                                                    {lunchMenu.bc_name}
                                                </a>
                                            )
                                        })
                                        : ""
                                    }
                                </li>
                            </ul>
                        </div>
                        <div className='wantmenu'>
                            <h3>&#91; 선택한 메뉴 &#93;</h3>
                        </div>
                        <div className='todaymenu'>
                            <h3>&#91; 오늘의 메뉴 &#93;</h3>
                        </div>
                        <div className='random'>
                            <ul className='row justify-content-center'>
                                <li className='col-6'>
                                    <img src="/ALL.svg" alt="all"/>
                                </li>
                                <li className='col-6'>
                                    <img src="/SEL.svg" alt="sel"/>
                                </li>
                            </ul>
                        </div>
                        <div className='footer'>
                            <ul className='weekendlist row'>
                                <li className='col'>
                                    <div className="">
                                        <h3>월</h3>
                                    </div>
                                </li>
                                <li className='col'>
                                    <div className="">
                                        <h3>화</h3>
                                    </div>
                                </li>
                                <li className='col'>
                                    <div className="">
                                        <h3>수</h3>
                                    </div>
                                </li>
                                <li className='col'>
                                    <div className="">
                                        <h3>목</h3>
                                    </div>
                                </li>
                                <li className='col'>
                                    <div className="">
                                        <h3>금</h3>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='addmenu'>
                            <button>메뉴추가</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Restaurants;