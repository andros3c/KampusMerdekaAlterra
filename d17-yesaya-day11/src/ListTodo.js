import Newdo from "./Newdo";
const ListTodo = ({ datas, hapusDo,coret,status,stat }) => {
  
  return (
    <div>
      {datas.map((datas) => (
      
          
          <div className="row mx-auto " key={datas.id}>
              <div className="col-1">
            <input type="checkbox" defaultChecked={status}  onClick={() =>coret(datas.id)}/>
            </div>
            <div className="col-9 ">
           <p>{datas.title}</p>
            </div>
            <div className="col-2">
            <button className="btn btn-outline-danger " onClick={()=>hapusDo(datas.id)}>Hapus</button>
            </div>
          </div>
        
      ))}
    </div>
  );
};
export default ListTodo;

// 
