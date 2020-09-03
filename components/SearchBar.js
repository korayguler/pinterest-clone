import React from 'react'
import styles from 'components/css/SearchBar.module.scss'
import SearchIcon from 'components/icons/Search'
export default function SearchBar({ children }) {
  return (
    <div className={styles.searchBar}>
      <SearchIcon width='16' height='16' />
      <input type='text' placeholder='Ara' />
    </div>
  )
}
