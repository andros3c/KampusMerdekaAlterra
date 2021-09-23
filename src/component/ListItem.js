import Home from "./Home"
import Updatetamp from "./Update"
const ListItem = (props) => {

    const { id, nama, umur, jenis_kelamin } = props.data

    return (
        <tr>
            <td>{id}</td>
            <td>{nama}</td>
            <td>{umur}</td>
            <td>{jenis_kelamin}</td>
            <td className="removeBorder" onClick={() => props.hapusPengunjung(id)}><button>Hapus</button></td>
            <td className="removeBorder" onClick={() => props.update(id,nama,umur,jenis_kelamin)}><button>Update</button></td>
        </tr>
    )
}

export default ListItem;