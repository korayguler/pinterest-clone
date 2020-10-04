//style
import style from './style.module.scss';
//ICON COMPONENTS
import SearchIcon from 'components/icons/Search';
export default function SearchBar({ children }) {
  return (
    <div className={style.searchBar}>
      <SearchIcon width='16' height='16' />
      <input type='text' placeholder='Search' />
    </div>
  );
}
