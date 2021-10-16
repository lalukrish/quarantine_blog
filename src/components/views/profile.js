import React, { useEffect, useState } from "react";

const Profile =()=>{
    const [mypics, setMypics] = useState([])
    useEffect(()=>{
        fetch('/mypost',{
            headers:{
                "Authorization": "Bearer "+ localStorage.getItem("jwt")
            }
        
        }).then(res=>res.json()).then(result=>{
            console.log(result)
            setMypics(result.mypost)
        })
    },[])
    return(
        <div style={{maxWidth:"550px",margin:"0px auto"}}>
        <div style={{
            direction :"flex",
            justifyContent:"space-around",
            margin:"18px 0px",
            borderBottom:"1px solid grey"
        }}> 
     <div>
         <img style={{width:"160px",height:"160px",borderRadius:"60px"}} 
          src="https://images.unsplash.com/photo-1542892650-7659c76be2e3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlcnNvbnxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="no internet"/> 
        </div>
         <div className="profile_details">
             <h4>{state?state.name:"loading"}</h4>
             <div className="profile_details1" >
                 <h6>bio</h6>
                 <h6>current </h6>
                 <h6>about </h6>

             </div>
         </div>
     </div>
        <div  className="gallery">
            {
               mypics.map(item=>{
                   return(
                     <img className="item" src={item.photo} alt={item.title}/>
                   )
               })
            }
        
           
        </div>
    </div>

    )

}

export default Profile;