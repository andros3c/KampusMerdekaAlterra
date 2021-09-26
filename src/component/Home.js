import { Component, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";

import Header from "./Header";
import {
  gql,
  useQuery,
  useLazyQuery,
  useMutation,
  useSubscription,
} from "@apollo/client";

const querying = gql`
  query MyQuery($id: Int_comparison_exp = {}) {
    anggota(where: { id: $id }, distinct_on: id) {
      id
      jenis_kelamin
      nama
      umur
    }
  }
`;

const DELETE_ANGGOTA_BYID = gql`
  mutation MyMutation($id: Int!) {
    delete_anggota_by_pk(id: $id) {
      id
    }
  }
`;
const UPDATE_ANGGOTA_BYID = gql`
  mutation MyMutation(
    $id: Int = 10
    $jenis_kelamin: bpchar = ""
    $nama: name = ""
    $umur: Int = 10
  ) {
    update_anggota_by_pk(
      pk_columns: { id: $id }
      _set: { jenis_kelamin: $jenis_kelamin, nama: $nama, umur: $umur }
    ) {
      jenis_kelamin
      nama
      umur
    }
  }
`;

const subs = gql`
  subscription MySubscription(
    $id: Int_comparison_exp = {}
    $jenis_kelamin: bpchar_comparison_exp = {}
  ) {
    anggota(
      where: { id: $id, jenis_kelamin: $jenis_kelamin }
      distinct_on: id
    ) {
      id
      jenis_kelamin
      nama
      umur
    }
  }
`;

const Home = () => {
  const [all, setAll] = useState();
  const [jk, setJk] = useState();
  const {
    data,
    loading,
    error: gagal,
  } = useSubscription(subs, {
    variables: { id: { _eq: all }, jenis_kelamin: { _eq: jk } },
  });

  const { data2, loading: proses, subscribeToMore } = useQuery(querying);

  const [deleteagt, { data3, loading: test, error }] =
    useMutation(DELETE_ANGGOTA_BYID);
  const [updtagt, { data4 }] = useMutation(UPDATE_ANGGOTA_BYID);

  const hapusPengunjung = (id) => {
    deleteagt({ variables: { id: id } });
  };

  const filter = (e) => {
    if (e.target.name == "idsearch") {
      setAll(e.target.value);
      if (!e.target.value) {
        setAll();
      }
    } else {
      setJk(e.target.value);
      if (e.target.value == "S") {
        setJk();
      }
    }
  };

  const [state, setState] = useState({
    jenis_kelamin: "baduy",
    nama: "",
    umur: "",
  });

  const update = (props) => {
  
    const baru = {
      id: "",
      jenis_kelamin: "",
      nama: "",
      umur: "",
    };
    setState({
      id: props.id,
      jenis_kelamin: props.jenis_kelamin,
      nama: props.nama,
      umur: props.umur,
    });
   
  };

  const updateagt = (e) => {
    if (e.target.name == "nama") {
      const a = {
        id: state.id,
        nama: e.target.value,
        umur: state.umur,
        jenis_kelamin: state.jenis_kelamin,
      };

      setState(a);
    } else if (e.target.name == "umur") {
      const b = {
        id: state.id,
        nama: state.nama,
        umur: e.target.value,
        jenis_kelamin: state.jenis_kelamin,
      };
      setState(b);
    } else if (e.target.name == "jenis_kelamin") {
      const c = {
        id: state.id,
        nama: state.nama,
        umur: state.umur,
        jenis_kelamin: e.target.value,
      };
      setState(c);
    }
    
  };

  const eksekusi = () => {
    updtagt({
      variables: {
        id: state.id,
        jenis_kelamin: state.jenis_kelamin,
        nama: state.nama,
        umur: state.umur,
      },
    });
    setState({
      jenis_kelamin: "baduy",
      nama: "",
      umur: "",
    });
  };

  return (
    <div>
      <Header />
      <div>
     
        <input
          type="number"
          name="idsearch"
          id="keyid"
          placeholder="Cari id..."
          onChange={filter}
        />
      </div>

      <br />
     
      <select name="jenis_kelamin" value={jk} onChange={filter}>
        <option selected value="S">
          Semua Jenis Kelamin
        </option>
        <option value="L">Laki-Laki</option>
        <option value="P">Perempuan</option>
      </select>

      <br />
      <br />
      <br />
      <ListPassenger
        data={data}
        loading={loading}
        hapusPengunjung={hapusPengunjung}
        update={update}
      />
      <PassengerInput data={querying} />
      <br />
      <div
        style={{
          border: "solid",
          width: 10 + "%",
          margin: "auto",
          padding: 2 + "%",
        }}
      >
        <p>UPDATE DATA</p>
        <span></span>
        <br />
        <input
          type="text"
          placeholder="Nama"
          name="nama"
          value={state.nama}
          onChange={updateagt}
        />
        <br /> <br />
        <input
          type="number"
          placeholder="Umur"
          name="umur"
          value={state.umur}
          onChange={updateagt}
        />
        <br />
        <br />
        <select
          name="jenis_kelamin"
          value={state.jenis_kelamin}
          onChange={updateagt}
        >
          <option disabled selected>
            Pilih
          </option>
          <option value="L">Laki-Laki</option>
          <option value="P">Perempuan</option>
        </select>
        <br />
        <br />
        <button onClick={eksekusi}>Update</button>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Home;
