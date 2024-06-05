import { useState } from "react";
import Footer from "./redundant/Footer";
import Header from "./redundant/Header";
import Note from "./Note";
import AddNote from "./AddNote";

export default function KeeperApp() {
  const[list,setList]= useState([{key:0,id:0,title:"Note",content:"Write Here"}]);
  var num =1;
  const createNote= (prop)=> {
  return(
  <Note 
    key={num++}
    id= {num++}
    title= {prop.title}
    content= {prop.content}
    delete ={deleteItem}
  />
  )
  }

  function deleteItem(prop){
      setList(num =>{
        return num.filter((note, index) =>{
          console.log(index != prop.id)
          return  index != prop
        })
      })
  }

  function addItem(prop){
    setList((prev =>{
      return [...prev,prop]
    }))
  }
  return (
    <>
      <Header />
      <AddNote createNote= {addItem}/>
      {/* {notes.map(createNote)} */}
      {list.map(createNote)}
      <Footer />
    </>
  );
}
