import { TextField } from '@mui/material'

export function SearchByTitle() {
  return (
    <form>
      <TextField
        fullWidth
        id="movieTitle"
        label="Название фильма"
        variant="standard"
      />
    </form>
  )
}
