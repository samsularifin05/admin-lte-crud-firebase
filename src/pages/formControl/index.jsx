import { Card, PanelContent, React, useDispatch, useEffect, useState } from "components";
import FormInput from "./form";
import { handleDelete, handleSubmit, handleUpdate } from "./redux";
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"
import { db } from "config/firebase";

let FormControl = () => {
  const dispatch = useDispatch();

  const [tasks, setTasks] = useState([])
  useEffect(() => {
    const q = query(collection(db, 'tasks'), orderBy('created', 'desc'))
    onSnapshot(q, (querySnapshot) => {
      setTasks(querySnapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })
  },[dispatch])
  return (
    <PanelContent headerContent>
      <FormInput onSubmit={(data) => dispatch(handleSubmit(data))} />
      <Card title="Data">
        
      {tasks.map((list,index)=>{
        // console.log(list)
        return <div key={index}>
          Username : {list.data.username} <br/>
          level : {list.data.level}
          <button type="button" onClick={()=>dispatch(handleUpdate(list.id))}> Edit</button>
          <button type="button" onClick={()=>dispatch(handleDelete(list.id))}> Delete</button>
        </div>
      })}
      </Card>
    </PanelContent>
  );
};
export default FormControl;
