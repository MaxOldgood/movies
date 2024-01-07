import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

import store from '../../store/store'
import { sortByChanged } from '../../store/actionCreators/filtersActionCreators'
import { useSelector } from 'react-redux'
import { selectSortBy } from '../../store/selectors'

export function SelectSortBy() {
  const sortBy = useSelector(selectSortBy)
  function handleSelectSortByChange(e) {
    e.preventDefault()
    store.dispatch(sortByChanged(e.target.value))
  }
  return (
    <FormControl variant="standard">
      <InputLabel id="sortBy">Сортировать по:</InputLabel>
      <Select
        value={sortBy}
        labelId="sortByLabel"
        id="sortBySelect"
        label="sortBy"
        onChange={handleSelectSortByChange}
      >
        <MenuItem value="popularity.desc">Популярности по убыванию</MenuItem>
        <MenuItem value="popularity.asc">Популярности по возрастанию</MenuItem>
        <MenuItem value="vote_average.desc">Рейтингу по убыванию</MenuItem>
        <MenuItem value="vote_average.asc">Рейтингу по возрастанию</MenuItem>
      </Select>
    </FormControl>
  )
}
