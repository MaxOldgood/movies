const token = localStorage.getItem('token')
const BASE_URL = `https://api.themoviedb.org`
const VERSION = 3
const GET_GENRES_ENDPOINT_URL = `${BASE_URL}/${VERSION}/genre/movie/list?language=ru`

export async function getMovies(selectedFilters) {
  const DISCOVER_ENDPOINT_URL = `${BASE_URL}/${VERSION}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${selectedFilters.page}&primary_release_date.gte=${selectedFilters.minDate}-01-01&primary_release_date.lte=${selectedFilters.maxDate}-12-31&sort_by=${selectedFilters.sortBy}&with_genres=${selectedFilters.genres}`
  const token = localStorage.getItem('token')
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await fetch(DISCOVER_ENDPOINT_URL, options)
  const data = await response.json()
  return data
}

export async function fetchGenres() {
  const token = localStorage.getItem('token')
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }
  const response = await fetch(GET_GENRES_ENDPOINT_URL, options)
  const data = await response.json()
  return data.genres
}

export async function ValidateKey(key) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${key}`,
    },
  }

  try {
    const response = await fetch(
      'https://api.themoviedb.org/3/authentication',
      options,
    )
    if (!response.ok) {
      throw new Error(`Ошибка при запросе: ${response.status}`)
    } else return response
  } catch (error) {
    console.error('Произошла ошибка при выполнении запроса: ', error.message)
  }
}

export async function getAccountId(key) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${key}`,
    },
  }

  const response = await fetch(
    `https://api.themoviedb.org/3/account/account_id`,
    options,
  )
  const data = await response.json()
  return data
}
