import React from "react";
import { useStyles } from "./styles";
import { Grid, Paper, Typography } from "@mui/material";

const DashboardCard = () => {
  const styles = useStyles();
  const dashboardSummary = [
    {
      title: `Total Games`,
      total: 2,
      background: "linear-gradient(180deg, #92CDFF 0%, #0070BB 100%)",
      backgroundColor: "#6DADF2",
    },
    {
      title: `Football`,
      total: 10,
      background: "linear-gradient(180deg, #49FF49 0%, #008000 100%)",
      backgroundColor: "#FFA885",
    },
    {
      title: ` Cricket`,
      total: 10,
      background: "linear-gradient(180deg, #E23D28 0%, #800000 100%)",
      backgroundColor: "#9D9AFF",
    },
  ];

  return (
    <React.Fragment>
      <Grid container spacing={2} p={2}>
        {dashboardSummary.map((item, index) => (
          <Grid
            item
            xs={6}
            sm={4}
            md={6}
            lg={4}
            xl={4}
            key={index}
            style={{ cursor: "pointer" }}
          >
            <Paper sx={styles.mainPaper}>
              <Grid
                container
                sx={styles.container}
                style={{ background: item?.background }}
              >
                <Grid item>
                  <Grid item>
                    <Typography variant="h6">{item?.title}</Typography>
                  </Grid>
                  <Grid item pb={1}>
                    <Grid container>
                      <Grid item xs={6}>
                        <Typography variant="h4" sx={styles.value}>
                          {item?.total}
                        </Typography>
                      </Grid>
                      <Grid item display="flex" justifyContent="flex-end">
                        <Typography variant="h4" sx={styles.value}>
                          {item?.total}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default DashboardCard;
