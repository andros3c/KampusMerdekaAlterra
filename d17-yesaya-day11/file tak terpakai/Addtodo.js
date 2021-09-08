import { Component } from "react";
import Newdo from "./Newdo";

class Addtodo extends Component {
  state = {
    id: 6,
    title: "",
    completed: false,
  };
  isi = (Event) => {
    this.setState({ value: Event.target.value });
  };
  
  check=(r)=> {
  if(!r){
      alert("Anda harus mengisi inputan terlebih dahulu !!");
  }
  else{
    this.setState({id:6,
        title: this.state.value,
        completed: false,
    })

    const Todobaru ={
        id: this.state.id,
        title: this.state.title,
        completed: this.state.completed,
    }
    
    this.setState({
        title: "",
    completed: false,
    })
    
  }
  }
  render() {
    return (
      <div >
        <input
          className="baru"
          type="text"
         
          onChange={this.isi}
        />
        <button type="submit"onClick={() => this.check(this.state.value)}>Tambah Kegiatan</button>
       <Newdo/>
      </div>
    );
  }
}
export default Addtodo;
