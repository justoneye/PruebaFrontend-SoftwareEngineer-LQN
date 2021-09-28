import React from 'react';

import { Card, CardContent, CardActionArea, CardMedia, Typography } from '@material-ui/core';

import { useQuery, gql } from '@apollo/client';

const ALL_PEOPLE = gql`
  {
    allPeople {
      edges {
        node {
          id
          name
        }
      }
    }
  }
`

export default function FichaPersonaje() {
  const { loading, error, data } = useQuery(ALL_PEOPLE)
  console.log("ALL_PEOPLE", ALL_PEOPLE);

  if(loading) return <p>...</p>
  if(error) return <p>error</p>
console.log("data.allPeople", data.allPeople.edges);
  return (
    <div>
      {data.allPeople.edges.map((id, name) => (
        <Card sx={{ maxWidth: 330 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="330"
              image={"img"}
              alt="Foto Personaje"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        )
      )}
    </div>
  );
}