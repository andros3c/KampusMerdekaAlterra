import { Component, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import PassengerInput from "./PassengerInput";
import ListPassenger from "./ListPassenger";
import Header from "./Header";
import { gql, useQuery, useLazyQuery } from "@apollo/client";

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
  const [dataall, { data, loading }] = useLazyQuery(querying);

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

  //    const hapusPengunjung = (id) => {
  //         setData({
  //             data: [
  //                 ...data.filter(item => {
  //                     return item.id !== id;
  //                 })
  //             ]
  //         });
  //     };

  //    const tambahPengunjung = (newUser) => {
  //         const newData = {
  //             id: uuidv4(),
  //             ...newUser
  //         };
  //         setData({
  //             data: [...data, newData]
  //         });
  //     };

  const [cari, { data2, loading: tunggu }] = useLazyQuery(querying2);

  console.log(data2);

  return (
    <div>
      <Header />
      <form onClick={() => cari}>
        <input type="number" name="idsearch" placeholder="Cari id..." />
        <input type="submit" name="btnsubmit" value="submit" />
      </form>
      <button onClick={dataall}>Tampilkan Semua</button>
      <br />

      <input type="radio" id="age1" name="age" value="P"/>
  <label for="age1">P</label><br/>
  <input type="radio" id="age2" name="age" value="L"/>
  <label for="age2">L</label><br/>  
      <br />
      <br />
      <ListPassenger
        data={data}
        loading={loading}
        // hapusPengunjung={hapusPengunjung}
      />
      <PassengerInput
      // tambahPengunjung={tambahPengunjung}
      />
    </div>
  );
};

export default Home;
