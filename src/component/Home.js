import { Component, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import { gql, useQuery, useLazyQuery, useMutation } from "@apollo/client";
import Updatetamp from "./Update"

const DELETE_ANGGOTA_BYID = gql`
  mutation MyMutation($id: Int!) {
    delete_anggota_by_pk(id: $id) {
      id
    }
  }
`;

const querying = gql`
  query MyQuery {
    anggota {
      id
      jenis_kelamin
      nama
      umur
    }
  }
`;
const queryingpilih = gql`
  query MyQuery($id: Int = 10) {
    anggota_by_pk(id: $id) {
      nama
      jenis_kelamin

      umur
    }
  }
`;
const querying2 = gql`
  query MyQuery($_eq: Int = 3) {
    anggota(where: { id: { _eq: $_eq } }) {
      id
      jenis_kelamin
      nama
      umur
    }
  }
`;

const Home = () => {
  const { data, loading, refetch } = useQuery(querying);
  const [all, setAll] = useState([]);
  const [deleteagt, { data3, loading: test, error }] =
    useMutation(DELETE_ANGGOTA_BYID);
  const [dataupdate, { data4, loading: sebentar }] =
    useLazyQuery(queryingpilih);
  // this.state = {
  //     data : [
  //         {
  //             id: uuidv4(),
  //             nama: 'Yoga',
  //             umur: 22,
  //             jenisKelamin: 'Pria'
  //         },
  //         {
  //             id: uuidv4(),
  //             nama: 'Ria',
  //             umur: 19,
  //             jenisKelamin: 'Wanita'
  //         },
  //         {
  //             id: uuidv4(),
  //             nama: 'Fahmi',
  //             umur: 25,
  //             jenisKelamin: 'Pria'
  //         },
  //         {
  //             id: uuidv4(),
  //             nama: 'Lala',
  //             umur: 21,
  //             jenisKelamin: 'Wanita'
  //         },
  //         {
  //             id: uuidv4(),
  //             nama: 'Ivan',
  //             umur: 25,
  //             jenisKelamin: 'Pria'
  //         }
  //     ]
  // }

  const hapusPengunjung = (id) => {
    deleteagt({ variables: { id: id } });
    refetch();
  };

  const updateagt = (id) => {
    console.log(id);
    setAll({
      ...all,
      editing: true,
    });

    dataupdate({ variables: { id: id } });
   
  };

  //    const tambahPengunjung = (newUser) => {
  //         const newData = {
  //             id: uuidv4(),
  //             ...newUser
  //         };
  //         setData({
  //             data: [...data, newData]
  //         });
  //     };

  const input = 0;
  const onId = (e) => {
    input = e.target.value;
    console.log(input);
  };
  const [cari, { data2, loading: tunggu }] = useLazyQuery(querying2);

  // console.log(data2);

  return (
    <div>
      <Header />
      <div>
        <input
          type="number"
          name="idsearch"
          id="keyid"
          placeholder="Cari id..."
          onChange={onId}
        />
        <button type="submit" name="btnsubmit" onClick={cari}>
          Submit
        </button>
      </div>
      <button>Tampilkan Semua</button>
      <br />

      <input type="radio" id="age1" name="age" value="P" />
      <label for="age1">P</label>
      <br />
      <input type="radio" id="age2" name="age" value="L" />
      <label for="age2">L</label>
      <br />
      <br />
      <br />
      <ListPassenger
        data={data}
        loading={loading}
        hapusPengunjung={hapusPengunjung}
        update={updateagt}
      />
      <PassengerInput data={querying} />
<br/>
      <div>
       <p>{sebentar?<p >Loading...</p>:data4?.anggota_by_pk.jenis_kelamin}</p>
      </div>
    </div>
  );
};

export default Home;
