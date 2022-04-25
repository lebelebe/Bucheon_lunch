import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../restaurants.scss';

function Restaurants(props){
    
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
                    setTypeData(lunch.data[lunch.data.length - 1].id);
                    console.log(lunchData[0].list)
                }
                catch(err){ console.log('lunch 타입 확인' + err.message + '/' + typeof lunch )}
            })
        )
        .catch( e => { console.log(e + '에러로 통신 오류') } )
    }

    useEffect( () => { dataSetting(); } , [typeData] )

    // Math.random으로 난수 생성후 length만큼 곱하고 1더해서 1부터 시작 + 소수점날림 
    const randomNumber = Math.floor(Math.random() * lunchData.length + 1)

    return(
        <section id='restaurants'>
            <div className="wrap">
                <div className='box'>
                    <div className="container text-center">
                        <h1>
                            쩝쩝박사 Pick!
                        </h1>
                        <div className='menulist'>
                            <ul className='row row-cols-5'>
                                {lunchData.map((lunchMenu) => {
                                    return(
                                        <li>
                                            <h3>{lunchMenu.name}</h3>
                                            <a href={lunchMenu.map} target="_blank"><img src="./info.svg" alt={lunchMenu.name} /></a>

                                        </li>
                                    )
                                })}
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
                                <li className='col-1'>
                                    <img src="/ALL.svg" alt="all"/>
                                </li>
                                <li className='col-1'>
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