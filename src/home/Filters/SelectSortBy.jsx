import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'

export function SelectSortBy() {
  return (
    <FormControl variant="standard">
      <InputLabel id="sortBy">Сортировать по:</InputLabel>
      <Select labelId="sortByLabel" id="sortBySelect" label="sortBy">
        <MenuItem value="popularity.desc">Популярности</MenuItem>
        <MenuItem value="vote_average.desc">Рейтингу</MenuItem>
      </Select>
    </FormControl>
  )
}
