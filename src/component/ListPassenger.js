import ListItem from "./ListItem";
const ListPassenger = (props) => {
  const datass = props.data;
  return (
    <div>
      <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
        <thead bgcolor="red">
          <td>Id</td>
          <td>Nama</td>
          <td>Umur</td>
          <td>Jenis Kelamin</td>
          <td colSpan={2}>Action</td>

          <td bgcolor="white" className="removeBorder"></td>
        </thead>
        {props.loading ? (
          <p>Loading...</p>
        ) : (
          datass?.anggota.map((item) => (
            <ListItem
              key={item.id}
              data={item}
              hapusPengunjung={props.hapusPengunjung}
              update={props.update}
            />
          ))
        )}
      </table>
    </div>
  );
};

export default ListPassenger;
