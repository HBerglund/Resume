import React from 'react';
import { IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

interface SocialButtonProps {
  socialNetwork: 'linkedin' | 'github';
  isHovered: string;
  handleHover: (name: string) => void;
  setIsHovered: (name: string) => void;
}

const SocialButton = ({
  socialNetwork,
  isHovered,
  handleHover,
  setIsHovered,
}: SocialButtonProps) => {
  const githubUrl: string = 'https://github.com/hberglund';
  const linkedInUrl: string =
    'https://linkedin.com/in/herman-berglund-8b8939100';

  return (
    <IconButton
      onClick={() =>
        window.open(
          socialNetwork === 'linkedin' ? linkedInUrl : githubUrl,
          '_blank'
        )
      }
      style={{ backgroundColor: 'transparent' }}
      onMouseEnter={() =>
        socialNetwork === 'linkedin'
          ? handleHover('linkedin')
          : handleHover('github')
      }
      onMouseLeave={() => setIsHovered('')}
    >
      {socialNetwork === 'linkedin' ? (
        <LinkedInIcon
          fontSize='large'
          style={{
            color: isHovered === 'linkedin' ? '#DBDBFF' : '#9393C2',
            backgroundColor: 'transparent',
          }}
        />
      ) : (
        <GitHubIcon
          fontSize='large'
          style={{
            color: isHovered === 'github' ? '#DBDBFF' : '#9393C2',
            backgroundColor: 'transparent',
          }}
        />
      )}
    </IconButton>
  );
};

export default SocialButton;
