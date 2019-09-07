import * as actionTypes from "./actionTypes";
import axios from "axios";

export const getASNTListStart = () => {
  return {
    type: actionTypes.GET_ASSIGNMENT_LIST_START
  };
};

export const getASNTListSuccess = assignments => {
  return {
    type: actionTypes.GET_ASSIGNMENT_LIST_SUCCESS,
    assignments
  };
};

export const getASNTListFail = error => {
  return {
    type: actionTypes.GET_ASSIGNMENT_DETAIL_FAIL,
    error: error
  };
};

export const getASNTS=token=>{
    return dispatch=>{
        dispatch(getASNTListStart())
        axios.defaults.headers={
            "Content-type":"application/json",
            Authorization:`Token ${token}`

        };
        axios
        .get("http://localhost:8000/assignments/")
        .then(res=>{
          console.log(res.data)
            const assignments=res.data
            dispatch(getASNTListSuccess(assignments))
        })
        .catch(err=>{
            dispatch(getASNTListFail(err))
        })
    }
}


export const getASNTDetailStart = () => {
  return {
    type: actionTypes.GET_ASSIGNMENT_DETAIL_START
  };
};

export const getASNTDetailSuccess = assignment => {
  return {
    type: actionTypes.GET_ASSIGNMENT_DETAIL_SUCCESS,
    assignment
  };
};

export const getASNTDetailFail = error => {
  return {
    type: actionTypes.GET_ASSIGNMENT_LIST_FAIL,
    error: error
  };
};

export const getASNTSDetail=(token,id)=>{
    return dispatch=>{
        dispatch(getASNTListStart())
        axios.defaults.headers={
            "Content-type":"application/json",
            Authorization:`Token ${token}`

        };
        axios
        .get(`http://localhost:8000/assignments/${id}/`)
        .then(res=>{
          console.log(res.data)
            const assignment=res.data
            dispatch(getASNTDetailSuccess(assignment))
        })
        .catch(err=>{
            dispatch(getASNTDetailFail(err))
        })
    }
}

const createASNTStart = () => {
  return {
    type: actionTypes.CREATE_ASSIGNMENT_START
  };
};
const createASNTSuccess = () => {
  return {
    type: actionTypes.CREATE_ASSIGNMENT_SUCCESS,
    
  };
};

const createASNTFail = (error) => {
  return {
    type: actionTypes.CREATE_ASSIGNMENT_FAIL,
    error
  };
};

export const createASNT = (token, asnt) => {
  return dispatch => {
    dispatch(createASNTStart());
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `Token ${token}`
    };
    axios
      .post(`http://127.0.0.1:8000/assignments/`, asnt)
      .then(res => {
        dispatch(createASNTSuccess());
      })
      .catch(err => {
        dispatch(createASNTFail());
      });
  };
};