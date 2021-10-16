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
      return (
        <div
          className="card input field"
          style={{
            margin: "30px auto",
            maxWidth: "500px",
            padding: "20px",
            textAlign: "center",
          }}
        >
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <div class="file-field input-field">
            <div className="btn #2196f3 blue darken">
              <span>Upload image</span>
              <input type="file" onChange={(e) => setPhoto(e.target.files[0  ])} />
            </div>
            <div class="file-path-wrapper">
              <input class="file-path validate" type="text" />
            </div>
          </div>
          <button className="btn #2196f3 blue" onClick={() => postData()}>
            Submit Post
          </button>
        </div>
      );
    };
    

export default Createpost;