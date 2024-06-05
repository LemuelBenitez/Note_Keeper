import { useState } from "react";

function AddNote(prop) {
    const[title,setTitle] = useState("");
    const[note,setNote] = useState("");

function captureText(event){
    if(event.target.name == "title"){
       setTitle(event.target.value);
       console.log("title")
    }else{
        setNote(event.target.value);
        console.log("note")

    }
}




    return (
      <div>
        <form>
          <input 
           name="title"
           placeholder="Title"  
           value={title}
           onChange={captureText}
           />
          <textarea 
          name="content" 
          placeholder="Take a note..." 
          rows="3" 
          value={note}
          onChange={captureText}
          />
          <button onClick={(event)=>{
          prop.createNote({title:title,content:note})
          setNote("")
          setTitle("");
          event.preventDefault()
          }}
          >

          Add
          </button>
        </form>
      </div>
    );
  }
  
  export default AddNote;