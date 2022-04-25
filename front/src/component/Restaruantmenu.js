import React, {useEffect, useState} from "react";
import axios from "axios";

function RestaurantsMenu(props){

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
        <ul>
            {lunchData.map((lunchMenu) => {
                return(
                    <li className="d-flex">
                        {lunchMenu.list === props.category
                            ?
                                <>
                                    <span className="lh-base">{lunchMenu.name}</span>
                                    <div>
                                        <a href={lunchMenu.map} target="_blank"><img src="info.svg"/></a>
                                    </div>
                                </>
                            :   ""
                        }
                    </li>
                )
            })}
        </ul>
    )

}

export default RestaurantsMenu;