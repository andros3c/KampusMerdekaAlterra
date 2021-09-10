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
const ListTodo = ({ datas, hapusDo, coret }) => {
  return (
    <div>
      {datas.map((datas) => (
        <div className="row mx-auto " key={datas.id}>
          <div className="col-1">
            <input
              type="checkbox"
              defaultChecked={check(datas.completed)}
              onClick={() => coret(datas.id)}
            />
          </div>
          <div className="col-9 ">
            <p style={{ textDecoration: strip(datas.completed) }}>
              {datas.title}
            </p>
          </div>
          <div className="col-2">
            <button
              className="btn btn-outline-danger "
              onClick={() => hapusDo(datas.id)}
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
