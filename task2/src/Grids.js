import Grid from "@material-ui/core/Grid";
import { Container, CircularProgress } from "@material-ui/core";
import UserCard from "./components/UserCard.js";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Grids() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getuser = async () => {
      const response = await axios.get("https://reqres.in/api/users?page=2");
      setData(response.data.data);
      await new Promise((resolve) => setTimeout(resolve, 10000));
      

      setLoading(false);
    };
    getuser();
  }, []);
 
  return (
    <>
      {loading ? (
        <CircularProgress
          style={{ marginLeft: 700,marginTop:100 }}
          color="secondary"
          m={10}
        />
      ) : (
        <Container>
          <Grid container spacing={3}>
            {data &&
              data.map((item) => (
                <Grid item xs={12} md={6} lg={4}>
                  <UserCard user={item} />
                </Grid>
              ))}
          </Grid>
        </Container>
      )}
    </>
  );
}
