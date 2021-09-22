import { useState } from "react";
import { gql, useMutation } from "@apollo/client";
import "./Home.css";

function PassengerInput(props) {
  const ADD_ANGGOTA = gql`
    mutation MyMutation($nama: name, $jenis_kelamin: bpchar, $umur: Int) {
      insert_anggota_one(
        object: { jenis_kelamin: $jenis_kelamin, nama: $nama, umur: $umur }
      ) {
        id
      }
    }
  `;
  const [addTodo, { data, loading, error }] = useMutation(ADD_ANGGOTA,{refetchQueries:[props.data]});
  const [state, setState] = useState({
    jenis_kelamin: "",
    nama: "",
    umur: "",
  });

  const onChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    console.log(state);
  };

  const handleSubmit = (e) => {
    if (state.nama.trim() && state.umur && state.jenis_kelamin) {
      const umur = state.umur;
      if (umur >= 75 || umur <= 12) {
        alert("Umur tidak sesuai");
      } else {
        const newData = {
          nama: state.nama,
          umur: state.umur,
          jenis_kelamin: state.jenis_kelamin,
        };
        
       
       
          addTodo({ variables: { "nama": state.nama,"jenis_kelamin": state.jenis_kelamin,"umur":state.umur} });
          // props.refetch()
        setState({
          ...state,
          nama: "",
          umur: "",
          jenis_Kelamin: "",
        });

       
      }
    } else {
      alert("Data masih ada yang kosong");
    }
  };

  const handleBukaInput = () => {
    setState({
      ...state,
      editing: false,
    });
  };

  const handleTutupInput = () => {
    setState({
      ...state,
      editing: true,
    });
  };

  let viewMode = {};
  let editMode = {};

  if (state.editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  return (
    <div>
      <div onSubmit={handleSubmit} style={viewMode}>
        <p>Masukkan Nama Anda</p>
        <input
          type="text"
          className="input-text"
          placeholder="Nama anda ..."
          value={state.nama}
          name="nama"
          onChange={onChange}
        />
        <p>Masukkan Umur Anda</p>
        <input
          type="number"
          className="input-text"
          placeholder="Umur anda ..."
          value={state.umur}
          name="umur"
          onChange={onChange}
        />
        <p>Masukkan Jenis Kelamin Anda</p>
        <select onChange={onChange} name="jenis_kelamin">
          <option value="Pria" selected>
            Pria
          </option>
          <option value="Wanita">Wanita</option>
        </select>
        <p></p>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={handleTutupInput} style={{ marginLeft: "10px" }}>
          Selesai
        </button>
      </div>
      <button className="inputan" onClick={handleBukaInput} style={editMode}>
        Masukkan Data{" "}
      </button>

      
    </div>
  );
}

export default PassengerInput;
