
// import { setAllJobs } from '@/redux/jobSlice'
// import { JOB_API_END_POINT } from '@/utils/constant'
// import axios from 'axios'
// import { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'

// const useGetAllJobs = () => {
//     const dispatch = useDispatch();
//     const {searchedQuery} = useSelector(store=>store.job);
//     useEffect(()=>{
//         const fetchAllJobs = async () => {
//             try {
//                 const res = await axios.get(`${JOB_API_END_POINT}/get?keyword=${searchedQuery}`,{withCredentials:true});
//                 if(res.data.success){
//                     dispatch(setAllJobs(res.data.jobs));
//                 }
//             } catch (error) {
//                 console.log(error);
//             }
//         }
//         fetchAllJobs();
//     },[])
// }

// export default useGetAllJobsimport { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setAllJobs } from "@/redux/jobSlice";

const JOB_API_END_POINT = import.meta.env.VITE_JOB_API_END_POINT;

useEffect(() => {
    const fetchAllJobs = async () => {
        try {
            const res = await axios.get(
                `${JOB_API_END_POINT}/get?keyword=${searchedQuery}`,
                { withCredentials: true }
            );

            if (res.data.success) {
                dispatch(setAllJobs(res.data.jobs));
            }
        } catch (error) {
            console.log(error);
        }
    };

    fetchAllJobs();
}, [searchedQuery]); // ✅ added dependency