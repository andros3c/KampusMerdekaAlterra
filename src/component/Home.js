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

const subs= gql`
  subscription MySubscription($id: Int_comparison_exp = {}) {
    anggota(where: { id: $id }, distinct_on: id) {
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

const Home = (props) => {
  const { data, loading } = useSubscription(subs);
  const {subscribeToMore} = useQuery(querying);
  const [all, setAll] = useState();
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

  const filterjk = (e) => {
    console.log(e.target.value)
    subscribeToMore({
      document: subs,
      variables: { "id": { "_eq": e.target.value } },
      updateQuery: (prev, { subscriptionData: { data } }) => {
        return data;
      },
    });
  };




  const [state, setState] = useState({
    jenis_kelamin: "",
    nama: "",
    umur: "",
  });

  const update = () => {
    setState({"nama":props.nama,
    "umur":props.umur,
    "jenis_kelamin":props.jenis_kelamin
    });
    console.log(state);
  };



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
          onChange={filterjk}
        />
       
      </div>
     
      <br />
      <p></p>
      <select name="jenis_kelamin"  value={all}>
        <option disabled selected>
          Filter Jenis Kelamin
        </option>
        <option value="L">Laki-Laki</option>
        <option value="P">Perempuan</option>
      </select>
      {/* <input type="radio" id="age1" name="age" value="P" />
      <label for="age1">P</label>
      <br />
      <input type="radio" id="age2" name="age" value="L" />
      <label for="age2">L</label> */}
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
      <br />
      <div style={{border:"solid",width:50+"%",margin:"auto"}}>
       <p>UPDATE DATA</p>
       <span></span><br/>
       <input type="text" placeholder="Nama" value={props.nama} onChange={update}/>
       <br/>
       <input type="number" placeholder="Umur" value={props.umur}  onChange={update}/>
       <br/>
      <select onChange={update} value={props.jenis_kelamin}>
      <option disabled selected>Pilih</option>
        <option value="L">Laki-Laki</option>
        <option value="P">Perempuan</option>
      </select>

      <button>Update</button>
   
      </div>
      <br/>
      <br/>
      
    </div>
  );
};

export default Home;
