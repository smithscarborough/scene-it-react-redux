import React from 'react';
import NavBar from '../components/NavBar';
import SearchForm from '../components/SearchForm';
import MovieCard from '../components/MovieCard';
import {Typography, Grid} from '@material-ui/core';
import {useSelector} from 'react-redux';

export default function Home() {
    const movies = useSelector(state => state)
    return (
        <>
        <NavBar></NavBar>
          <Typography variant="h1" align="center">Favorites</Typography>
          <SearchForm />
          <Grid container spacing={3} style={{marginTop: '12px'}}>
            {movies.favorites.map(movie => {
              return (
                <Grid key={movie.imdbID} item xs={4}>
                  <MovieCard movie={movie}/>
                </Grid>
              )
            })}
          </Grid>
        </>
    )
}