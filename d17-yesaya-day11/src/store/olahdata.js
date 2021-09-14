import { createSlice } from "@reduxjs/toolkit";
import { uuid } from "uuidv4";


const initialValue = [
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
  ]

 
  export const olahData = createSlice({
      name:"data",
      initialState:{
        data:initialValue
      },
      reducers:{
          Hapus:(state,action)=>{
            state.data = state.data.filter((item) => {
                return item.id !== action.payload;
              })
          },
          Baru:(state,action)=>{
            const terbaru = { ...action.payload, };
            state.data = [...state.data, terbaru]
          }
          
      }
  })

  export const{Hapus,Baru,incrementByAmount} = olahData.actions;
  export default olahData.reducer


  