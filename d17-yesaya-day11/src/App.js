

import Kegiatan from "./Kegiatan";
import {Sumber} from "./Sumber";

const sty = {bayang:{
  width:'100%',
  height:'5%',
 
  
  boxShadow: "1px 3px #a8a8a8",
  marginBottom: '2rem'
},
page:{
  height:'80rem',
  width:'100%',
  border: '5px solid black',
  margin: 'auto'

}

} 
function App() {
  return (
    <div style={sty.page}>
      <div style={sty.bayang}> <h1 style={{marginLeft:10+"px"}}>To Do App</h1></div>

   
 
 {Sumber.map((Sumber)=><Kegiatan Sumber={Sumber}/>)}
 </div>
  );
}



export default App;
