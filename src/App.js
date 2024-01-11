import Form from "./components/form";
import Table from "./components/table";
import {  useState } from "react";
import './style.css'

function App() {
  const[ data, setData ]= useState({})

  return (
    <div className="weather">
      <Form data={data}setData={setData}/>

      <Table data={data}/>
     
    </div>
  );
}

export default App;
