import React,{ useState,useRef } from "react";

const Form = () => {
    const res={
        nama:"",
        email:"",
        nohp:"",
        latar:"",
        pilihan:"",
        foto:"",
        harapan:"",

    }
    const namaRegex =  /^[a-zA-Z]*$/;
    const foto = useRef(null)

   const [Data,setData] = useState(res);
   const handleInput = e =>{
       const name = e.target.name;
       const value = e.target.value;
       setData({
           ...Data,
           [name]:value

       })
       console.log("Data",Data)}
       
       const handleChange=(e)=>{
           if(e.target.nama){}
       }
  
  return (
    <>
    <br/>
      <h1 className="text-center fs-3">Pendaftaran Peserta Coding Bootcamp</h1>
      <br/>
      <br/>
      <form >
        <label className="form-label">Nama Lengkap:</label>
        <br />
        <input className="form-control" name="nama" type="text" required onChange={handleInput} value={Data.judul}/>
        <br />
        <label className="form-label">Email:</label>
        <br />
        <input type="email" className="form-control" name="email" required onChange={handleInput} value={Data.email}/>
        <br />
        <label className="form-label">No.Handphone:</label>
        <br />
        <input type="number" className="form-control" name="nohp" required onChange={handleInput} value={Data.nohp} />
        <br />
        <label>Latar Belakang Pendidikan</label>
        <br />

        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" for="flexRadioDefault1">
            IT
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
          />
          <label className="form-check-label" for="flexRadioDefault2">
            Non IT
          </label>
        </div>

        <br />
        <label className="form-label">Kelas Coding yang dipilh:</label>
        <br />
        <select className="form-select" aria-label="Default select example">
          <option value="">FrontEnd</option>
          <option value="">BackEnd</option>
          <option value="">Fullstack</option>
        </select>
        <br />
        <label>Foto Surat Kesungguhan:</label>
        <br />
        <input type="file" refs={foto} className="form-control" id="inputGroupFile01"/>
        <br />

        <label>Harapan Untuk Coding Bootcamp ini </label>
        <br />
        <textarea className="form-control"></textarea>
        <br />


        <input type="submit" className="btn btn-primary" /> &nbsp;&nbsp;
        
        <button className="btn btn-danger">Reset</button>
      </form>
    </>
  );
};
export default Form;
