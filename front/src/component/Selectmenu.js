import React, {useEffect, useState} from "react";
import axios from "axios";

function Selectmenu(props){

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
                    console.log(lunchData.length)
                }
                catch(err){ console.log('lunch 타입 확인' + err.message + '/' + typeof lunch )}
            })
        )
        .catch( e => { console.log(e + '에러로 통신 오류') } )
    }

    useEffect( () => { dataSetting(); } , [typeData] )
    
    

    const menuChoice = () => {
        // Math.random으로 난수 생성후 length만큼 곱하고 1더해서 1부터 시작 + 소수점날림 
        const randomNumber = Math.floor(Math.random() * lunchData.length + 1)

        return(
            <div>
                {lunchData[randomNumber].name}
            </div>)

    }

    return(
        <>
            {/* <div className='wantmenu'>
                <h3>&#91; 선택한 메뉴 &#93;</h3>
            </div> */}
            <div className='todaymenu'>
                <h3>&#91; 오늘의 메뉴 &#93;</h3>

            </div>
            <div className='random'>
                <ul className='row justify-content-center'>
                    <li className='col-1'>
                        <img src="/ALL.svg" alt="all"/>
                    </li>
                    <li className='col-1'>
                        <a onClick={ e => {menuChoice()} }>
                            <img src="/SEL.svg" alt="sel"/>
                        </a>
                    </li>
                </ul>
            </div>
            {/* <div className='footer'>
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
            </div> */}
        </>
    )
}

export default Selectmenu;