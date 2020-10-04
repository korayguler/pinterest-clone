//STYLES
import style from './style.module.scss';
function Content({ children }) {
  return <main className={style.main}>{children}</main>;
}
export default Content;
