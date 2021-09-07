import style from "./TodoStyle.module.css";

export default function Kegiatan({ Sumber }) {
  const coret = Sumber.completed;

  return (
    <div>
      {coret === false && <button className={style.do}>{Sumber.title} </button>}
      {coret === true && <button className={style.re}>{Sumber.title} </button>}
    </div>
  );
}
