import React from "react";
import ListTodo from "./ListTodo";
import { uuid } from "uuidv4";

// import ListTodo from "./ListTodo";

class Newdo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: uuid(),
          title: "Membuat Komponen",
          completed: true,
        },
        {
          id: uuid(),
          title: "Unit Testing",
          completed: false,
        },
        {
          id: uuid(),
          title: "Setup Development Environment",
          completed: true,
        },
        {
          id: uuid(),
          title: "Deploy ke server",
          completed: false,
        },
      ],
      i_agree: false,
    };
  }
  //   Rubah =(Event)=>{
  //       this.setState({value: Event.target.value}) ;

  //   }
  //   Tambah=(new)=>{
  //       const newDo = {id:3,...newDo}
  //       this.setState({data:[...this.state.data,newDo]})
  //   }
  Coret = (id) => {
    //  this.setState({i_agree: !this.state.i_agree});
    const index = this.state.data.findIndex((obj) => obj.id == id);
    console.log(this.state.data[index]);
    //  this.state.data[index]  ={...this.state.data[index]} 
    // let data =[...this.state.data];
    // data[index] = 
    //  const a = {
    //   id: this.state.data[index].id,
    //   title: this.state.data[index].title,
    //   completed: !lawan,
    // };
    // this.setState
    //    this.setState.data[index].completed = a
    let lawan = this.state.data[index].completed;
    let datas =[...this.state.data];
    console.log(datas[index])
    datas[index] = {...datas[index],completed:!lawan}
    console.log(datas[index])
    this.setState({data:datas});
    console.log(this.state.data[index]);

    

  };
  Hapus = (id) => {
    const baru = this.state.data.filter((item) => item.id !== id);

    this.setState({ data: baru });
  };
  Baru = (baru) => {
    const terbaru = { ...baru };
    this.setState({ data: [...this.state.data, terbaru] });
  };
  isi = (Event) => {
    this.setState({ value: Event.target.value });
  };

  check = (r) => {
    console.log(this.state.id == 4);
    if (!r) {
      alert("Anda harus mengisi inputan terlebih dahulu !!");
    } else {
      const Todobaru = {
        id: uuid(),
        title: this.state.value,
        completed: false,
      };

      this.Baru(Todobaru);
    }
  };

  render() {
    return (
      <div>
        {/* <input
          className="tambah"
          value={this.state.value}
          onChange={this.Rubah}
        />
        <div className="coba">{this.state.value}</div> */}
        <div className=" row mx-auto">
          <div class="input-group mb-3 mx-auto">
            <input
              type="text"
              className="border-0"
              style={{ width: 86.5 + "%" }}
              type="text"
              placeholder="Tambah Kegiatan Baru"
              onChange={this.isi}
            />
            <span
              className="input-group-text bg-transparent border-0 btn-outline-warning"
              id="basic-addon2"
            >
              <a type="submit" onClick={() => this.check(this.state.value)}>
                Submit
              </a>
            </span>
          </div>
        </div>

        <ListTodo
          datas={this.state.data}
          hapusDo={this.Hapus}
          coret={this.Coret}
          status={this.state.i_agree}
          stat = {this.state.data}
        />

        {/* <ListTodo data ={this.state.data}/> */}
      </div>
    );
  }
}

export default Newdo;
