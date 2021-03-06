import React, { useState, useEffect } from 'react'
import { fetchCategories } from "../../Movies/Index";
import { Link } from "react-router-dom";

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import "./Home.css";


const Home = () => {
  const [categos, setCat] = useState([]);

  useEffect(() => {
    function fetchData() {
      fetchCategories()
        .then(categoryList => {
          setCat(categoryList.data.genres);
        })
    }
    fetchData();
  }, []);

  return (
    <>
      <Grid container
        direction="row"
        justify="space-around"
        alignItems="center"
        className="categories">
        <Grid item xs={8} >
          <h2>Select you're favorite category : </h2>
          {categos.map((catego) =>
            <Link
              to={{
                pathname: '/movies',
                state: {
                  category: `${catego.id}`
                }
              }}
            >
              <Button className="button" variant="outlined" Key={catego.id} > {catego.name}</Button>
            </Link>
          )}

        </Grid>
      </Grid>
    </>
  );

}

export default Home;
