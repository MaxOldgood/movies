import CheckBoxIcon from '@mui/icons-material/CheckBox'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank'
import { Autocomplete, Checkbox, TextField } from '@mui/material'
import { useEffect } from 'react'
import { useImmer } from 'use-immer'
import { fetchGenres } from '../../Services/tmdbApi'
import store from '../../store/store'
import { genresChanged } from '../../store/actionCreators/filtersActionCreators'
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />
const checkedIcon = <CheckBoxIcon fontSize="small" />

export function SelectGenres() {
  const [genres, setGenres] = useImmer([])
  useEffect(() => {
    let ignore = false
    const fetchData = async () => {
      try {
        const genres = await fetchGenres()
        if (!ignore) {
          setGenres(genres)
        }
      } catch (error) {
        console.error('Error fetching genres:', error)
      }
    }
    fetchData()
    return () => {
      ignore = true
    }
  }, [])

  function handleSelectGenresChange(e, value) {
    e.preventDefault()
    const selectedGenres = value.map((genre) => genre.id).join()
    store.dispatch(genresChanged(selectedGenres))
  }

  return (
    <Autocomplete
      multiple
      id="SelectGenres"
      options={genres}
      disableCloseOnSelect
      getOptionLabel={(option) => option.name}
      onChange={handleSelectGenresChange}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.name}
        </li>
      )}
      renderInput={(params) => (
        <TextField {...params} label="Жанры" placeholder="Выберите жанры" />
      )}
    />
  )
}

///РАЗОБРАТЬСЯ С ЖАНРАМИ
