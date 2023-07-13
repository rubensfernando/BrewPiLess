import { Box, Grid, Paper, Stack, Typography } from '@mui/material';
import React from 'react';
import { useGeneralDataContext } from '../../contexts/GeneralStatus';
import IntText from '../../components/IntText';

interface indexProps {}

const Dashboard: React.FC<indexProps> = ({}) => {
  const { config, beerStatus } = useGeneralDataContext();

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper
            sx={{
              p: 3,
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Stack direction="row" justifyContent="space-between">
                  <Stack direction="column">
                    <Typography
                      component="h1"
                      variant="h4"
                      color="primary"
                      gutterBottom
                    >
                      {config?.nameLog}
                    </Typography>
                    <Typography gutterBottom>
                      <IntText text="status_mode" />
                      <IntText text={beerStatus?.mode} />
                    </Typography>
                  </Stack>
                  <Stack direction="column">
                    <Box>
                      <Typography gutterBottom>
                        <IntText text={beerStatus?.controlState} />
                      </Typography>
                    </Box>
                    <Typography gutterBottom>
                      {beerStatus?.controlStateSince}
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
            <Grid container spacing={4}>
              <Grid item xs={12} sm={6}>
                <Typography
                  component="h3"
                  variant="h5"
                  color="primary"
                  gutterBottom
                >
                  <IntText text="temperature" />
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Stack direction="column">
                    <Typography variant="subtitle2">
                      <IntText text="status_beertemp" />
                    </Typography>
                    <Typography gutterBottom>
                      <IntText
                        text={beerStatus?.temperatures?.beerTemp?.toLocaleString(
                          undefined,
                          { minimumFractionDigits: 1 }
                        )}
                      />
                    </Typography>
                    <Typography variant="subtitle2">
                      <IntText text="status_beerset" />
                    </Typography>
                    <Typography gutterBottom>
                      <IntText
                        text={beerStatus?.temperatures?.beerSet?.toLocaleString(
                          undefined,
                          { minimumFractionDigits: 1 }
                        )}
                      />
                    </Typography>
                  </Stack>

                  <Stack direction="column">
                    <Typography variant="subtitle2">
                      <IntText text="status_fridgetemp" />
                    </Typography>
                    <Typography gutterBottom>
                      <IntText
                        text={beerStatus?.temperatures?.fridgeTemp?.toLocaleString(
                          undefined,
                          { minimumFractionDigits: 1 }
                        )}
                      />
                    </Typography>

                    <Typography variant="subtitle2">
                      <IntText text="status_fridgeset" />
                    </Typography>
                    <Typography gutterBottom>
                      <IntText
                        text={beerStatus?.temperatures?.fridgeSet?.toLocaleString(
                          undefined,
                          { minimumFractionDigits: 1 }
                        )}
                      />
                    </Typography>
                  </Stack>

                  <Stack direction="column">
                    <Typography variant="subtitle2">
                      <IntText text="status_roomtemp" />
                    </Typography>
                    <Typography gutterBottom>
                      <IntText
                        text={beerStatus?.temperatures?.roomTemp?.toLocaleString(
                          undefined,
                          { minimumFractionDigits: 1 }
                        )}
                      />
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography
                  component="h3"
                  variant="h5"
                  color="primary"
                  gutterBottom
                >
                  <IntText text="log_gravity" />
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Stack direction="column">
                    <Typography variant="subtitle2">
                      <IntText text="original_gravity" />
                    </Typography>
                    <Typography gutterBottom>
                      {/* {beerStatus?.temperatures?.roomTemp?.toLocaleString(
                          undefined,
                          { minimumFractionDigits: 3 }
                        )} */}
                    </Typography>
                  </Stack>

                  <Stack direction="column">
                    <Typography variant="subtitle2">
                      <IntText text="specific_gravity" />
                    </Typography>
                    <Typography gutterBottom>
                      {beerStatus?.gravity?.gravity.toLocaleString(undefined, {
                        minimumFractionDigits: 3,
                      })}
                    </Typography>
                  </Stack>
                  <Stack direction="column">
                    <Typography variant="subtitle2">
                      <IntText text="gravity_changed" />
                    </Typography>
                    <Typography gutterBottom>
                      {/* {beerStatus?.temperatures?.roomTemp?.toLocaleString(
                        undefined,
                        { minimumFractionDigits: 1 }
                      )} */}
                    </Typography>
                  </Stack>
                  <Stack direction="column">
                    <Typography variant="subtitle2">
                      <IntText text="gravity_att" />
                    </Typography>
                    <Typography gutterBottom>
                      {/* {beerStatus?.temperatures?.roomTemp?.toLocaleString(
                          undefined,
                          { minimumFractionDigits: 1 }
                        )} */}
                    </Typography>
                  </Stack>
                  <Stack direction="column">
                    <Typography variant="subtitle2">
                      <IntText text="gravity_abv" />
                    </Typography>
                    <Typography gutterBottom>
                      {/* {beerStatus?.temperatures?.roomTemp?.toLocaleString(
                          undefined,
                          { minimumFractionDigits: 1 }
                        )} */}
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography
                  component="h3"
                  variant="h5"
                  color="primary"
                  gutterBottom
                >
                  <IntText text="ispindel_data" />
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Stack direction="column">
                    <Typography variant="subtitle2">
                      <IntText text="ispindel_tilt" />
                    </Typography>
                    <Typography gutterBottom></Typography>
                  </Stack>

                  <Stack direction="column">
                    <Typography variant="subtitle2">
                      <IntText text="ispindel_battery" />
                    </Typography>
                    <Typography gutterBottom></Typography>
                  </Stack>
                  <Stack direction="column">
                    <Typography variant="subtitle2">
                      <IntText text="Temperature" />
                    </Typography>
                    <Typography gutterBottom>
                      {/* {beerStatus?.temperatures?.roomTemp?.toLocaleString(
                        undefined,
                        { minimumFractionDigits: 1 }
                      )} */}
                    </Typography>
                  </Stack>
                  <Stack direction="column">
                    <Typography variant="subtitle2">
                      <IntText text="RSSI" />
                    </Typography>
                    <Typography gutterBottom>
                      {/* {beerStatus?.temperatures?.roomTemp?.toLocaleString(
                          undefined,
                          { minimumFractionDigits: 1 }
                        )} */}
                    </Typography>
                  </Stack>
                  <Stack direction="column">
                    <Typography variant="subtitle2">
                      <IntText text="ispindel_lastupdate" />
                    </Typography>
                    <Typography gutterBottom>
                      {/* {beerStatus?.temperatures?.roomTemp?.toLocaleString(
                          undefined,
                          { minimumFractionDigits: 1 }
                        )} */}
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography
                  component="h3"
                  variant="h5"
                  color="primary"
                  gutterBottom
                >
                  <IntText text="glycol_temp_control" />
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Stack direction="column">
                    <Typography variant="subtitle2">
                      <IntText text="status" />
                    </Typography>
                    <Typography gutterBottom>
                      <IntText text="ptc_running" />
                      <IntText text="ptc_idle" />
                    </Typography>
                  </Stack>

                  <Stack direction="column">
                    <Typography variant="subtitle2">
                      <IntText text="ptc_for" />
                    </Typography>
                    <Typography gutterBottom></Typography>
                  </Stack>
                  <Stack direction="column">
                    <Typography variant="subtitle2">
                      <IntText text="ptc_range" />
                    </Typography>
                    <Typography gutterBottom>
                      {/* {beerStatus?.temperatures?.roomTemp?.toLocaleString(
                        undefined,
                        { minimumFractionDigits: 1 }
                      )} */}
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>

              <Grid item xs={12} sm={6}>
                <Typography
                  component="h3"
                  variant="h5"
                  color="primary"
                  gutterBottom
                >
                  <IntText text="control_capstate" />
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Stack direction="column">
                    <Typography variant="subtitle2">
                      <IntText text="status" />
                    </Typography>
                    <Typography gutterBottom>
                      <IntText text="control_open" />
                      <IntText text="control_capped" />
                    </Typography>
                  </Stack>

                  <Stack direction="column">
                    <Typography variant="subtitle2">
                      <IntText text="cap_condition" />
                    </Typography>
                    <Typography gutterBottom>
                      <IntText text="capgravityset" />
                    </Typography>
                  </Stack>
                  <Stack direction="column">
                    <Typography variant="subtitle2">
                      <IntText text="capgravityset" />
                    </Typography>
                    <Typography gutterBottom>
                      <IntText text="control_manualcapped" />
                      <IntText text="control_manualopen" />
                    </Typography>
                  </Stack>
                </Stack>
              </Grid>
              {beerStatus?.pressure && (
                <Grid item xs={12} sm={6}>
                  <Typography
                    component="h3"
                    variant="h5"
                    color="primary"
                    gutterBottom
                  >
                    <IntText text="Pressure" />
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <Stack direction="column">
                      <Typography variant="subtitle2">
                        <IntText text="Pressure" />
                      </Typography>
                      <Typography gutterBottom>
                        {beerStatus?.pressure?.psi?.toLocaleString(undefined, {
                          maximumFractionDigits: 1,
                        })}{' '}
                        psi
                      </Typography>
                    </Stack>
                  </Stack>
                </Grid>
              )}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Dashboard;
