import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../restaurants.scss';
import RestaurantsMenu from './Restaruantmenu';
import Selectmenu from './Selectmenu';

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
                                {lunchData.map((lunchCategory, i) => {
                                    return(
                                        <li key={i}>
                                            <h3>{lunchCategory.list}</h3>
                                            <RestaurantsMenu dbinfo={ {
                                            botable : 'lunchSelect',
                                            crud : 'select',
                                            mapper : 'lunchSQL',
                                            mapperid : 'lunchList'
                                            }}
                                            category = {lunchCategory.list}
                                            ></RestaurantsMenu>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <Selectmenu dbinfo={ {
                            botable : 'lunchSelect',
                            crud : 'select',
                            mapper : 'lunchSQL',
                            mapperid : 'lunchList'
                            }}></Selectmenu>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Restaurants;