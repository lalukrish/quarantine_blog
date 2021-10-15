import React,{useState} from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";

const Createpost =()=>{
    const history = useHistory("")
    const [title,setTitle] = useState(" ");
    const [body,setBody] = useState(" ")
    const [photo,setPhoto] = useState(" ")
      const postData=()=>{
          fetch("/createpost",{
              method:"post",
              headers:{
                "Content-Type": "application/json",
              },
              body:JSON.stringify({
                  title,
                  body,
                  photo

              }),
          }).then(res=>{
              res.json()
          }).then((data)=>{
              if(data.error){
                  M.toast({html: data.error,classes: "#f44336 red"})
              }else{
                  M.toast({ html: data.message,  classes: "#4caf50 green"})
                  history.push('/');
              }

          }).catch(err=>{console.log(err)})
      }
    return(
      <div className="mycard">
      <div className="card auth_card"
      
    
        style={{
          margin:"30px Auto",
          maxWidth: "500 px",
          padding:"200px",
          textAlign:"cetnter",
        }}>
        
        <input type="text" placeholder="title" value={title} onChange={(e)=>setTitle(e.target.value)} ></input>
        <input type="text" placeholder="body" value={body} onChange={(e)=>setBody(e.target.value)} ></input>
        
  
  <div class="file-field input-field">
        
    <div class="btn">
      <span>File</span>
      <div class="file-path-wrapper">
   
      <input class="file-path validate" type="text"  ></input>
      <input type="file"  ></input>
      </div>
    </div>
    
      <div>
      
    </div>
  </div>
  </div>
  </div>


  
    )
}

export default Createpost;