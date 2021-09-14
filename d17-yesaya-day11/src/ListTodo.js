import { useSelector,useDispatch } from "react-redux";
import { Hapus } from "./store/olahdata";

function strip(a) {
  if (a == true) {
    return "line-through";
  } else {
    return "none";
  }
}
function check(b) {
  if (b == true) {
    return true;
  }
}
const ListTodo = (props) => {
  const data = useSelector((state)=>state.data.data)
  const dispatch = useDispatch()

  return (
    <div>
      {data.map((data) => (
        <div className="row mx-auto " key={data.id}>
          <div className="col-1">
            <input
              type="checkbox"
              defaultChecked={check(data.completed)}
              onClick={() => this.props.coret(data.id)}
            />
          </div>
          <div className="col-9 ">
            <p style={{ textDecoration: strip(data.completed) }}>
              {data.title}
            </p>
          </div>
          <div className="col-2">
            <button
              className="btn btn-outline-danger "
              onClick={()=>{dispatch(Hapus(data.id))}}
            >
              Hapus
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListTodo;

//
