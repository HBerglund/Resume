import {
  createStyles,
  Divider,
  makeStyles,
  Typography,
} from '@material-ui/core';
import Title from './Title';
import WorkPlaces from './WorkPlaces';
import medieinstitutetImg from '../assets/medieinstitutet.png';

function PersonalExperience() {
  const useStyles = makeStyles(() =>
    createStyles({
      divider: { background: '#9393C2', marginBottom: '1rem' },
    })
  );
  const classes = useStyles();

  return (
    <div>
      <WorkPlaces />
      <Divider classes={{ root: classes.divider }} />
      <Title title='Education' subTitle />
      <div style={{ padding: '0 0 1rem 1rem', display: 'flex' }}>
        <div style={{ paddingRight: '1.5rem' }}>
          <img
            src={medieinstitutetImg}
            alt='logo'
            style={{ width: '4rem', height: '4rem', borderRadius: '50%' }}
          />
        </div>
        <div>
          <Typography style={{ fontWeight: 'bold' }}>
            Front End Developer
          </Typography>
          <Typography>Medieinstitutet, Gothenburg</Typography>
          <Typography>Sep 2020 - May 2022 (ongoing)</Typography>
        </div>
      </div>
      <Divider classes={{ root: classes.divider }} />
      <Title title='Technologies' subTitle />
      <div style={{ padding: '0 0 1rem 1rem' }}>
        <Typography>
          TypeScript, JavaScript, Node.Js, SQL, Git, HTML, CSS
        </Typography>
        <Typography>
          React, Firebase, Express, NEXT.js, Bootstrap, Svelte, P5.js,
          TailwindCSS
        </Typography>
      </div>
    </div>
  );
}

export default PersonalExperience;
