import React from 'react';
import SocialLink from './SocialLink';

const socialData = {
  github: 'https://github.com/albertjlay',
  email: 'mailto:albertjlay@gmail.com',
  linkedin: 'https://www.linkedin.com/in/albertjlay/',
  instagram: 'https://www.instagram.com/albertjlay/?hl=en',
};

function SocialLinks() {
  const socialsOrder = ['email', 'github', 'linkedin', 'instagram'];

  return (
    <div className="social-links">
      {socialsOrder.map((el) => {
        if (!socialData[el]) {
          return '';
        }
        return <SocialLink key={el} name={el} href={socialData[el]} />;
      })}
    </div>
  );
}

export default SocialLinks;
