// import { setAllAppliedJobs } from "@/redux/jobSlice";
// import { APPLICATION_API_END_POINT } from "@/utils/constant";
// import axios from "axios"
// import { useEffect } from "react"
// import { useDispatch } from "react-redux"

// const useGetAppliedJobs = () => {
//     const dispatch = useDispatch();

//     useEffect(()=>{
//         const fetchAppliedJobs = async () => {
//             try {
//                 const res = await axios.get(`${APPLICATION_API_END_POINT}/get`, {withCredentials:true});
//                 console.log(res.data);
//                 if(res.data.success){
//                     dispatch(setAllAppliedJobs(res.data.application));
//                 }
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//         fetchAppliedJobs();
//     },[])
// };
// export default useGetAppliedJobs;
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAllAdminJobs } from "@/redux/jobSlice";

const JOB_API_END_POINT = import.meta.env.VITE_JOB_API_END_POINT;

const fetchAllAdminJobs = async () => {
    try {
        const res = await axios.get(
            `${JOB_API_END_POINT}/getadminjobs`,
            { withCredentials: true }
        );

        if (res.data.success) {
            dispatch(setAllAdminJobs(res.data.jobs));
        }
    } catch (error) {
        console.log(error);
    }
};