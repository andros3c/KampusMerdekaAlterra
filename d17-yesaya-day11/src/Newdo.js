import React, { useState } from "react";
import ListTodo from "./ListTodo";
import { uuid } from "uuidv4";

const alldo = [
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
];

function Newdo() {
  const [data, setData] = useState(alldo);
  const [value, setValue] = useState();

  const Coret = (id) => {
    const index = data.findIndex((obj) => obj.id == id);

    let lawan = data[index].completed;

    let newArr = [...data];
    newArr[index] = {
      data,
      id: data[index].id,
      title: data[index].title,
      completed: !lawan,
    };
    setData(newArr);
  };
  const Hapus = (id) => {
    setData((oldData) =>
      oldData.filter((item) => {
        return item.id !== id;
      })
    );
  };
  const Baru = (baru) => {
    const terbaru = { ...baru };

    setData((oldData) => [...data, terbaru]);
  };

  const isi = (Event) => {
    setValue((valuet) => Event.target.value);
  };

  const check = (r) => {
    if (!r) {
      alert("Anda harus mengisi inputan terlebih dahulu !!");
    } else {
      const Todobaru = {
        id: uuid(),
        title: value,
        completed: false,
      };

      Baru(Todobaru);
    }
    let baru = "";
    setValue(baru);
    document.getElementById("inputtext").value = "";
  };

  return (
    <div>
      <div className=" row mx-auto  py-5">
        <div class="input-group mb-3 mx-auto">
          <input
            type="text"
            className="border-0 shadow-sm p-3 rounded"
            id="inputtext"
            style={{ width: 86 + "%" }}
            type="text"
            placeholder="Tambah Kegiatan Baru"
            onChange={isi}
          />
          <span
            className="input-group-text bg-transparent border-0 btn-outline-warning"
            id="basic-addon2"
          >
            <a type="submit" onClick={() => check(value)}>
              Submit
            </a>
          </span>
        </div>
      </div>

      <ListTodo datas={data} hapusDo={Hapus} coret={Coret} />
    </div>
  );
}

export default Newdo;
