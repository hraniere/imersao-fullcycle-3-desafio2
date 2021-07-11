import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Grid,
} from "@material-ui/core";
import Head from "next/head";
import { Route } from "../model";
import Link from "next/link";
import { GetServerSideProps, NextPage } from "next";
import http from "../http";

interface RoutesPageProps {
  routes: Route[];
}

const RoutesPage: NextPage<RoutesPageProps> = ({ routes }) => {
  return (
    <div>
      <Head>
        <title>Listagem de rotas</title>
      </Head>
      <Typography component="h1" variant="h3" color="textPrimary" gutterBottom>
        Rotas
      </Typography>
      <Grid container spacing={4}>
        {routes.map((route, key) => (
          <Grid key={key} item xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography component="h2" variant="h5" gutterBottom>
                  {route.title}
                </Typography>
                <Typography component="p" variant="body2" gutterBottom>
                  Start: {route.startPosition.latitude + ', ' + route.startPosition.longitude}
                </Typography>
                <Typography component="p" variant="body2">
                  End: {route.endPosition.latitude + ', ' + route.endPosition.longitude}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="primary"
                  component="a"
                  href={`https://www.google.com/maps/dir/?api=1&origin=${route.startPosition.latitude},${route.startPosition.longitude}&destination=${route.endPosition.latitude},${route.endPosition.longitude}`}
                  target="_blank"
                  rel="noreferrer"
                  title="Abrir no google maps"
                >
                  Traçar rota
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div >
  );
};

export default RoutesPage;

export const getServerSideProps: GetServerSideProps<RoutesPageProps> = async (context) => {
  const { data: routes } = await http.get("routes");
  return {
    props: {
      routes,
    },
  };
};
