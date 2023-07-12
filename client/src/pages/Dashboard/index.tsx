import { Grid, Paper } from '@mui/material'
import React from 'react'
import { useWs } from '../../utils';
import { WEB_SOCKET_ROOT } from '../../api/endpoints';

interface indexProps {

}

const Dashboard: React.FC<indexProps> = ({ }) => {
  return (
  <React.Fragment>
    <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
        >
          LogName
        </Paper>
        </Grid>
        </Grid> 
      </React.Fragment>
      );
}

export default Dashboard;