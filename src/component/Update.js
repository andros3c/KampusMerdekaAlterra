import "./Home.css";
const Updatetamp = (props) => {
  const { id, nama, umur, jenis_kelamin } = props.data;

  return (
    <tr>
    
      <td>{nama}</td>
      <td>{umur}</td>
      <td>{jenis_kelamin}</td>
     
    </tr>
  );
};

export default Updatetamp;
