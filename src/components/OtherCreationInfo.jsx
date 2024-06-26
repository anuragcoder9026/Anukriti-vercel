
import '../CSS/otherCreate.css'
import AboutAuthor from './AboutAuthor';
import ReadNext from './ReadNex';
import ReadNow from './ReadNow';
import Review from './Review';
import { useParams } from 'react-router-dom';
import { FaRegCircleQuestion } from "react-icons/fa6";
import { useEffect, useState } from 'react';
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux';
import { deleteAction } from "../store/deleteSlice";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { contentAction } from '../store/contentSlice';

function OtherCreationInfo(){
     const {id} =useParams();
     const dispatch=useDispatch();
     const deleteModal=useSelector(store=>store.deleteModal);
     const currentId=useSelector(store=>store.currentContent); 
     const handleDeleteModal=()=>{
        dispatch(deleteAction.handlePopup(false));
    };
    useEffect(()=>{
        dispatch(deleteAction.handlePopup(false));
    },[])

    const deleteNotify=()=>{
        dispatch(contentAction.handleDeleteContent(currentId));
         toast.success("Deleted Succesfully !",{
        position:"bottom-center",
        theme:"dark"
    })}
    
    return(
         <div className="other-creation" >
            {
                id==='self' &&  <div className="delete-popup" style={{top:deleteModal?'130px' : '-330px'}}>
                <div className="delete-modal">
                       <div className="modal-logo"><FaRegCircleQuestion/></div>
                       <div style={{width:"80%",textAlign:"center",marginLeft:"27px",marginTop:"10px",fontWeight:"600"}}>Are you sure to Delete this Content ?</div>
                       <div className="modal-button">
                           <button style={{border:"none",backgroundColor:"#fff",padding:"5px 8px",fontSize:"14px",fontWeight:"500"}} onClick={()=>handleDeleteModal(false)}>Cancel</button>
                           <button style={{border:"none",backgroundColor:"#d0021b",color:"#fff",padding:"5px 8px",fontSize:"14px",fontWeight:"500"}} onClick={deleteNotify}>Delete</button>
                           <ToastContainer style={{marginBottom:"15px"}}/>
                       </div> 
                </div>
                </div>
            }
            <div className="other-creation-info">
             <div className="other-creation-left">
                   <ReadNow story={id}/>
                   <ReadNext/>
             </div>
             <div className="other-creation-right">
                      <AboutAuthor story={id}/>
                      <Review story={id}/>
             </div>
            </div>
         </div>
    )
}

export default OtherCreationInfo;