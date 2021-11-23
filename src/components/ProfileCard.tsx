import { createStyles, makeStyles, Typography } from '@material-ui/core';
import profileImg from '../assets/profile.png';
import { useState } from 'react';
import SocialButton from './SocialButton';

function ProfileCard() {
  const useStyles = makeStyles(() =>
    createStyles({
      root: {
        marginTop: '-15rem ',
      },
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#44475a',
      },
      profileImg: {
        width: '15rem',
        marginBottom: '1rem',
      },
    })
  );
  const classes = useStyles();

  const [isHovered, setIsHovered] = useState('');

  const handleHover = (name: string) => {
    setIsHovered(name);
  };

  return (
    <div className={classes.root}>
      <div className={classes.wrapper}>
        <img className={classes.profileImg} src={profileImg} alt='' />
        <Typography component='h5' variant='h5'>
          Hi, I'm Herman!
        </Typography>
        <Typography variant='body1'>Aspiring Front End Developer</Typography>
        <div style={{ marginBottom: '.5rem' }}>
          <SocialButton
            socialNetwork='linkedin'
            isHovered={isHovered}
            handleHover={handleHover}
            setIsHovered={setIsHovered}
          />
          <SocialButton
            socialNetwork='github'
            isHovered={isHovered}
            handleHover={handleHover}
            setIsHovered={setIsHovered}
          />
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
