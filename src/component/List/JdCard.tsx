import {
  CardContent, Typography, CardActions, Button, CardMedia, Grid,
  Paper,
} from '@mui/material';
import { JdDetails } from '../../types';

type JdCardProps = {
  jd: JdDetails;
};

const JdCard = ({ jd }: JdCardProps) => {
  const {
    jdLink,
    jobDetailsFromCompany,
    maxJdSalary,
    minJdSalary,
    salaryCurrencyCode,
    location,
    minExp,
    jobRole,
    companyName,
    logoUrl,

  } = jd;
  // TODO: Styling pending
  return (
    <Grid item xs={12} md={6} lg={4}>
      <Paper
        sx={{
          padding: '1rem',
          borderRadius: '1rem',
        }}
        elevation={2}
      >
        <CardMedia
          component="img"
          height="100"
          image={logoUrl}
          alt={companyName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {companyName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {jobRole}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            { location}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Estimated Salary:
            {` ${minJdSalary} - ${maxJdSalary} ${salaryCurrencyCode}`}
          </Typography>
          <Typography variant="body2">
            About Company:
          </Typography>
          <Typography variant="h6">
            About Us:
          </Typography>
          <Typography variant="body2">
            {jobDetailsFromCompany}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Minimum Experience:
            {` ${minExp} `}
            years
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Job Link:
            <a href={jdLink} target="_blank" rel="noopener noreferrer">View Job</a>
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" href={jdLink} target="_blank" rel="noopener noreferrer">Apply Now</Button>
        </CardActions>
      </Paper>
    </Grid>
  );
};
export default JdCard;
