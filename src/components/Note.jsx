export default function Note(prop) {
  return (
    <div className="note">
      <h1>{prop.title}</h1>
      <p>{prop.content}</p>
      <button 
      onClick={(event)=>{
       prop.delete(event.target.id)
      }}
      >
      DELETE</button>
    </div>
  );
}
