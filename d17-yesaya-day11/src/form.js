import React, { useState, useRef } from "react";

const Form = () => {
  const res = {
    nama: "",
    email: "",
    nohp: "",
    latar: "",
    pilihan: "",
    foto: "",
    harapan: "",
  };
  const namaRegex = /^[a-zA-Z ]*$/;
  const emailRegex =
    /^([A-Za-z][A-Za-z0-9\-\.\_]*)\@([A-Za-z][A-Za-z0-9\-\_]*)(\.[A-Za-z][A-Za-z0-9\-\_]*)+$/;
  //   const foto = useRef(null)
  const foto = useRef(null);
  const [Data, setData] = useState(res);
  const [Error, setError] = useState("");

  const reset = (e) => {
    setData(res);
    setError("");
  };

  const handleSubmit = () => {
    if(Data == res){
      alert("Data Belum Diisi")
    }
    else{
      
    }

   console.log (foto.value)
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name == "nama") {
      if (namaRegex.test(value)) {
        setError({ [name]: "" });
      } else {
        setError({ [name]: "Nama Tidak boleh berupa angka" });
      }
    } else if (name == "email") {
      if (emailRegex.test(value)) {
        setError({ [name]: "" });
      } else {
        setError({ [name]: "Format Email tidak sesuai" });
      }
    } else if (name == "nohp") {
      if (Data.nohp.length > 14) {
        setError({ [name]: "Panjang Nomor Handphone Maksimal 14" });
      } else if (Data.nohp.length < 9) {
        setError({ [name]: "Panjang Nomor Handphone Minimal 9" });
      } else {
        setError({ [name]: "" });
      }
    }

    setData({
      ...Data,
      [name]: value,
    });
    console.log(Data);
    console.log(foto);
  };

  //      const name = e.target.name;
  //      const value = e.target.value;
  //      setData({
  //          ...Data,
  //          [name]:value

  //      })
  //      console.log("Data",Data)}

  //      const handleChange=(e)=>{
  //          if(e.target.nama)
  //      }

  return (
    <>
      <br />
      <h1 className="text-center fs-3">Pendaftaran Peserta Coding Bootcamp</h1>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <label className="form-label">Nama Lengkap:</label>
        <br />
        <input
          className="form-control"
          name="nama"
          type="text"
          value={Data.nama}
          required
          onChange={handleInput}
        />
        <label style={{ color: "red" }}>{Error.nama}</label>
        <br />
        <label className="form-label">Email:</label>
        <br />
        <input
          type="email"
          className="form-control"
          name="email"
          value={Data.email}
          required
          onChange={handleInput}
        />
        <label style={{ color: "red" }}>{Error.email}</label>
        <br />
        <label className="form-label">No.Handphone:</label>
        <br />
        <input
          type="number"
          className="form-control"
          name="nohp"
          value={Data.nohp}
          required
          onChange={handleInput}
        />
        <label style={{ color: "red" }}>{Error.nohp}</label>
        <br />
        <label>Latar Belakang Pendidikan</label>
        <br />
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="latar"
            id="flexRadioDefault1"
            value="IT"
            onChange={handleInput}
          />
          <label className="form-check-label" for="flexRadioDefault1">
            IT
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="latar"
            id="flexRadioDefault2"
            value="Non IT"
            onChange={handleInput}
          />
          <label className="form-check-label" for="flexRadioDefault2">
            Non IT
          </label>
        </div>
        <label style={{ color: "red" }}>{Error.latar}</label>
        <br />
        <label className="form-label">Kelas Coding yang dipilh:</label>
        <br />
        <select
          className="form-select"
          aria-label="Default select example"
          name="pilihan"
          onChange={handleInput}
        >
          <option selected disabled>
            Pilih Salah Satu
          </option>
          <option>Coding Backend with Golang</option>
          <option>Coding Frontend with ReactJS</option>
          <option>Fullstack Developer</option>
        </select>
        <label style={{ color: "red" }}>{Error.pilihan}</label>
        <br />
        <label>Foto Surat Kesungguhan:</label>
        <br />
        <input
          type="file"
          refs={foto}
          className="form-control"
          id="inputGroupFile01"
        />
        <label style={{ color: "red" }}>{Error.foto}</label>
        <br />
        <label>Harapan Untuk Coding Bootcamp ini </label>
        <br />
        <textarea className="form-control"></textarea>
        <br />
        <input type="submit" className="btn btn-primary" /> &nbsp;&nbsp;
        <button className="btn btn-danger" onClick={reset}>
          Reset
        </button>
      </form>
    </>
  );
};
export default Form;
