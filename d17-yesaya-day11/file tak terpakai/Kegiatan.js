import style from "./TodoStyle.module.css";

export default function Kegiatan({ data }) {
  const coret = data.completed;

  return (
    <div>
      {!coret && <button className={style.do}>{data.title} </button>}
      {coret && <button className={style.re}>{data.title} </button>}
    </div>
  );
}
