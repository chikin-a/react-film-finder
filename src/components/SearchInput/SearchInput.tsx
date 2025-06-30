import s from './SearchInput.module.scss'
import { SearchIcon } from '../../shared/Icons/SearchIcon'
import { FilterIcon } from '../../shared/Icons/FilterIcon'

export const SearchInput = () => {
  return (
    <div className={s.searchInput}>
      <SearchIcon color='#aeafb2' className={s.searchIcon} />
      <input type='text' placeholder='Search' />
      <FilterIcon color='#aeafb2' className={s.filterIcon} />
    </div>
  )
}
