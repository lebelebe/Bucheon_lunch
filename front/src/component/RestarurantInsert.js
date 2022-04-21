import React from "react"
import {ErrorMessage, useformik} from 'formik'

function RestaurantInsert(props){
    const selectList = ["한식", "양식", "중식", "일식", "패스트푸드", "기타"]

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
          bc_value: '',
        },
        onSubmit: async (values) => {
            await sleep(500);
            alert(JSON.stringify(values, null, 2));
        },
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
                        value={formik.values.bc_name} />
                {formik.touched.bc_name && formik.errors.bc_name ? (<div>{formik.errors.bc_name}</div>): null}
                <label htmlFor="bc_category">카테고리</label>
                    <select
                        id="bc_category"
                        name="bc_category" 
                        onChange={formik.handleChange}
                        value={formik.values.bc_category}>
                        {selectList.map((i) => (
                            <option value={i} key={i} label={i}>
                                {i}
                            </option>
                        ))}
                    </select>
                <label htmlFor="bc_map">가게주소</label>
                <input
                    id="bc_map"
                    name="bc_map"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.bc_map} />
                <label htmlFor="bc_info">가게정보</label>
                    <input
                        id="bc_info"
                        name="bc_info"
                        type="textarea"
                        onChange={formik.handleChange}
                        value={formik.values.bc_info} />
            </form>
        </div>
    )
}

export default RestaurantInsert;