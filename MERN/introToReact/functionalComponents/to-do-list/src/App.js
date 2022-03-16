import Item from "./components/Item";
import "./App.css"
import React, { useState } from  'react';
function App() {

const [Items, setItems] = useState([])
const [form, setForm] = useState({
  content: "",
  checked: false,
})

const onChangeHandler = (e) =>{
  setForm({
    ...form,
    [e.target.name]: e.target.value
  })
}

const checkyChecky = (i) => {
  console.log("check ;]", i);
  //copy the your whole state
  const copyOfItems = [...Items] 
  // //reverse the boolean
  copyOfItems[i].checked = !copyOfItems[i].checked 
  // //setItems with the new stuff
  setItems(copyOfItems)
}

const onSubmitHandler = (e) =>{
  e.preventDefault();
  let todoItem = {
    content: form.content,
    checked: false
  }
  setItems([
    ...Items,
    todoItem
  ])

}
const getRidOf = (i) =>{
  setItems(Items.filter((item, idx)=>{
    return i != idx
  }))
}


  return (
    <div className="App">
      <h1>To Do List:</h1>
      <form onSubmit={onSubmitHandler}>
        <input onChange={onChangeHandler} type="text" name="content" placeholder="What to add" value={form.content}></input>
        <input type="submit"></input>
      </form>
      {
      Items.map((item,i)=>{
        return <Item key={i} content={item.content} checked={item.checked} checkyChecky={checkyChecky} getRidOf={getRidOf} i={i}></Item>
      })
      }
    </div>
  );
}

export default App;
