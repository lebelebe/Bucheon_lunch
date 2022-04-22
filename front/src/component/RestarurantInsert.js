import React, {useState} from "react"
import {useFormik} from 'formik';
import * as Yup from "yup";
import axios from 'axios';

function RestaurantInsert(props){
    const selectList = ["한식", "양식", "중식", "일식", "기타"]
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const [message, setMessage ] = useState('');
    

    const validate = values => {
        const errors = {};

        if(!values.bc_name){
            errors.bc_name = "이름은 필수입니다.";
        }
        if(values.bc_info.length > 100){
            errors.bc_info = "100자 이내로 작성해주세요."
        }
        return errors;
    }

    const formik = useFormik({
        initialValues: {
          bc_name: '',
          bc_category: '',
          bc_map: '',
          crud: `${props.dbinfo.crud}`,
          mapper: `${props.dbinfo.mapper}`,
          mapperid: `${props.dbinfo.mapperid}`,
        },
        validationSchema: Yup.object({
            bc_name: Yup.string().required("이름은 필수입니다."),
            bc_map: Yup.string().required("주소는 필수입니다."),
            bc_info: Yup.string().max(100, "100자를 초과할 수 없습니다.")
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
                <label htmlFor="bc_name">가게이름</label>
                    <input
                        id="bc_name"
                        name="bc_name"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.bc_name} 
                        {...formik.getFieldProps("bc_name")}/>
                {formik.touched.bc_name && formik.errors.bc_name ? (<div className="input-feedback">{formik.errors.bc_name}</div>): null}
                <label htmlFor="bc_category">카테고리</label>
                    <select
                        id="bc_category"
                        name="bc_category" 
                        onChange={formik.handleChange}
                        value={formik.values.bc_category}
                        {...formik.getFieldProps("bc_category")}>
                        {selectList.map((cate, i) => (
                            <option value={cate} key={i} label={cate}>
                                {cate}
                            </option>
                        ))}
                    </select>
                <label htmlFor="bc_map">가게주소</label>
                <input
                    id="bc_map"
                    name="bc_map"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.bc_map} 
                    {...formik.getFieldProps("bc_map")}/>
                {formik.touched.bc_map && formik.errors.bc_map ? (<div className="input-feedback">{formik.errors.bc_map}</div>): null}
                <label htmlFor="bc_info">가게정보</label>
                    <textarea
                        id="bc_info"
                        name="bc_info"
                        type="textarea"
                        rows="5"
                        cols="33"
                        onChange={formik.handleChange}
                        value={formik.values.bc_info}
                        {...formik.getFieldProps("bc_info")}>
                    </textarea>
                    {formik.touched.bc_info && formik.errors.bc_info ? (<div className="input-feedback">{formik.errors.bc_info}</div>): null}
                <button type="submit">
                    등록
                </button>
            </form>
            <p>{message}</p>
        </div>
    )
}

export default RestaurantInsert;