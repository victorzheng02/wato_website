import Head from "next/head";
import Grid from "@mui/material/Grid";
import BlueButton from "../components/BlueButton";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import backOfBolty from "../public/back_view_of_vehicle.jpg";
import sideViewOfBolty from "../public/side_view_of_vehicle.jpeg";

export default function Home() {
  return (
    <div>
      <Head key="title">
        <title>WATonomous Website</title>
        <meta
          name="keywords"
          content="watonomous, autonomous vehicles, vehicles, autonomy, waterloo, student design team"
        ></meta>
      </Head>
      <Layout>
        <main className={styles.main}>
          <div className={styles.head}>
            <h1>WATonomous</h1>
            <h1 className={styles.description}>
              University of Waterloo's Autonomous Vehicle Design Team
            </h1>
            <div>
              <BlueButton href="/about">Learn More</BlueButton>
              <BlueButton href="/">Become a Sponsor</BlueButton>
            </div>
            <Image
              src={backOfBolty}
              className={styles.backOfBolty}
              layout="fill"
            />
          </div>
          <div className={styles.infoGrid}>
            <Grid
              container
              spacing={1}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item md={6}>
                <h1 className={styles.headerText}>Our Mission</h1>
                <h2 className={styles.textDescription}>
                  Adipisicing do et consequat fugiat qui sint dolor sint nostrud
                  do consequat fugiat. Adipisicing sint occaecat tempor laboris
                  amet mollit officia pariatur fugiat et amet qui veniam sunt.
                  Eu quis quis incididunt veniam ad excepteur nisi veniam anim
                  nostrud.
                </h2>
                <BlueButton href="/about">Learn More</BlueButton>
              </Grid>
              <Grid item md={6}>
                <Image
                  src={sideViewOfBolty}
                  className={styles.sideViewOfBolty}
                  width={300}
                  height={200}
                />
              </Grid>
              <Grid item md={6}>
                <h1>Partnerships</h1>
                <h2>Merge between WATonomous and WATORACE</h2>
              </Grid>
              <Grid item md={6}>
                <h1 className={styles.headerText}>Partnerships</h1>
                <h2 className={styles.textDescription}>
                  Excepteur dolor mollit fugiat mollit aliqua aute ut dolore
                  occaecat aliqua labore dolore. Irure ut aliquip aliquip dolore
                  labore et fugiat.Velit laborum voluptate reprehenderit
                  consectetur.
                </h2>
              </Grid>

              <Image
                src={backOfBolty}
                className={styles.backOfBolty}
                width={300}
                height={200}
              />
            </Grid>
          </div>
        </main>
      </Layout>
    </div>
  );
}
