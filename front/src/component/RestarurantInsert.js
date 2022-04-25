import React, {useState} from "react"
import {useFormik} from 'formik';
import * as Yup from "yup";
import axios from 'axios';

function RestaurantInsert(props){
    const selectList = ["선택", "한식", "일식", "중식", "양식", "기타"]
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const [message, setMessage ] = useState('');
    

    const validate = values => {
        const errors = {};

        if(!values.name){
            errors.name = "이름은 필수입니다.";
        }
        if(values.info.length > 100){
            errors.info = "100자 이내로 작성해주세요."
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
          name: '',
          list: '',
          map: '',
          crud: `${props.dbinfo.crud}`,
          mapper: `${props.dbinfo.mapper}`,
          mapperid: `${props.dbinfo.mapperid}`,
        },
        validationSchema: Yup.object({
            name: Yup.string().required("이름은 필수입니다."),
            map: Yup.string().required("주소는 필수입니다."),
            info: Yup.string().max(100, "100자를 초과할 수 없습니다.")
          }),
        onSubmit: async (values) => {
            await sleep(500);
            // alert(JSON.stringify(values, null, 2));
            console.log(values)
            try{
                axios.post('/lunch?type='+props.dbinfo.type,
                    {
                        headers: {
                            "Content-Type": `application/json`
                        },
                        body: values
                    })
                    .then( lunch => {
                        if(lunch.data == 'success'){
                            setMessage('노드에 접속 성공')
                        }
                        else{
                            setMessage('쿼리 혹은 xml 접속문제 존재')
                        }
                    })
                    .catch(
                        (err) => {
                            setMessage('답 못가져옴 파일 조사' +err)
                        }
                    )
            }
            catch(err){
                setMessage('서버연결안됨' + err)
            }
        }
      });
    return(
        <div>
            <form action method="post" name="lunchInsert" onSubmit={formik.handleSubmit}>
                <div>
                    <input type="hidden" name="crud" value={props.dbinfo.crud} />
                    <input type="hidden" name="mapper" value={props.dbinfo.mapper} />
                    <input type="hidden" name="mapperid" value={props.dbinfo.mapperid} />
                </div>
                <label htmlFor="name">가게이름</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.name} 
                        {...formik.getFieldProps("name")}/>
                {formik.touched.name && formik.errors.name ? (<div className="input-feedback">{formik.errors.name}</div>): null}
                <label htmlFor="list">카테고리</label>
                    <select
                        id="list"
                        name="list" 
                        onChange={formik.handleChange}
                        value={formik.values.list}
                        {...formik.getFieldProps("list")}>
                        {selectList.map((cate, i) => (
                            <option value={cate} key={i} label={cate}>
                                {cate}
                            </option>
                        ))}
                    </select>
                <label htmlFor="map">가게주소</label>
                <input
                    id="map"
                    name="map"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.map} 
                    {...formik.getFieldProps("map")}/>
                {formik.touched.map && formik.errors.map ? (<div className="input-feedback">{formik.errors.map}</div>): null}
                <label htmlFor="info">가게정보</label>
                    <textarea
                        id="info"
                        name="info"
                        type="textarea"
                        rows="5"
                        cols="33"
                        onChange={formik.handleChange}
                        value={formik.values.info}
                        {...formik.getFieldProps("info")}>
                    </textarea>
                    {formik.touched.info && formik.errors.info ? (<div className="input-feedback">{formik.errors.info}</div>): null}
                <button type="submit">
                    등록
                </button>
            </form>
            <p>{message}</p>
        </div>
    )
}

export default RestaurantInsert;