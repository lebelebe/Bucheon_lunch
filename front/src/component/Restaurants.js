import React from 'react';
import '../restaurants.scss';

function Restaurants(props){

    // Math.random으로 난수 생성후 length만큼 곱하고 1더해서 1부터 시작 + 소수점날림 
    const randomNumber = Math.floor(Math.random() * 10 +1)

    return(
        <section id='restaurants'>
            <div className="vertical-align">
                <div className="content">
                    <div className='container'>
                        <div className='menulist col-12'>
                            <ul className='row'>
                                <li className='col-2'>
                                    <div className="border rounded-1 m-1 p-3 bg-light">
                                        <h3>한식</h3>
                                        <ul>
                                            <li>메뉴</li>
                                            <li>메뉴</li>
                                            <li>메뉴</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='col-2'>
                                    <div className="border rounded-1 m-1 p-3 bg-light">
                                        <h3>양식</h3>
                                        <ul>
                                            <li>메뉴</li>
                                            <li>메뉴</li>
                                            <li>메뉴</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='col-2'>
                                    <div className="border rounded-1 m-1 p-3 bg-light">
                                        <h3>중식</h3>
                                        <ul>
                                            <li>메뉴</li>
                                            <li>메뉴</li>
                                            <li>메뉴</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='col-2'>
                                    <div className="border rounded-1 m-1 p-3 bg-light">
                                        <h3>일식</h3>
                                        <ul>
                                            <li>메뉴</li>
                                            <li>메뉴</li>
                                            <li>메뉴</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='col-2'>
                                    <div className="border rounded-1 m-1 p-3 bg-light">
                                        <h3>패스트푸드</h3>
                                        <ul>
                                            <li>메뉴</li>
                                            <li>메뉴</li>
                                            <li>메뉴</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className='col-2'>
                                    <div className="border rounded-1 m-1 p-3 bg-light">
                                        <h3>기타</h3>
                                        <ul>
                                            <li>메뉴</li>
                                            <li>메뉴</li>
                                            <li>메뉴</li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className='wantmenu col-12'>
                            <div className="border rounded-1 m-1 p-3 bg-light">
                                <h3>선택한 메뉴</h3>
                            </div>
                        </div>
                        <div className='todaymenu col-12 row'>
                            <div className='result col-10'>
                                <div className="border rounded-1 m-1 p-3 bg-light">
                                    <h3>오늘의 메뉴</h3>
                                </div>
                            </div>
                            <div className='button col-2'>
                                <ul>
                                    <li>
                                        <button>전체</button>
                                    </li>
                                    <li>
                                        <button>선택</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='footer col-12 row'>
                            <ul className='weekendlist col-10 d-flex'>
                                <li className='col'>
                                    <div className="border rounded-1 m-1 p-3 bg-light">
                                        <h3>월</h3>
                                    </div>
                                </li>
                                <li className='col'>
                                    <div className="border rounded-1 m-1 p-3 bg-light">
                                        <h3>화</h3>
                                    </div>
                                </li>
                                <li className='col'>
                                    <div className="border rounded-1 m-1 p-3 bg-light">
                                        <h3>수</h3>
                                    </div>
                                </li>
                                <li className='col'>
                                    <div className="border rounded-1 m-1 p-3 bg-light">
                                        <h3>목</h3>
                                    </div>
                                </li>
                                <li className='col'>
                                    <div className="border rounded-1 m-1 p-3 bg-light">
                                        <h3>금</h3>
                                    </div>
                                </li>
                            </ul>
                            <div className='addmenu col-2'>
                                <button>메뉴추가</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Restaurants;