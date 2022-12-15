import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';
import {SectionTitle} from '../../styles/GlobalComponents';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Cell</LinkTitle>
          <LinkItem href="tel:647-741-1801">(647) 741-1801
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Home</LinkTitle>
          <LinkItem href="tel:416-546-7183">(416) 546-7183
          </LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:gignatski@gmail.com">gignatski@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating one project at a time</Slogan>
        </CompanyContainer>
      <SocialContainer>
      <SocialIcons href="https://www.linkedin.com/in/gleb-ignatski-aa3b04182/" target="_blank">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://github.com/glebignatski" target="_blank">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.instagram.com/ignatski99/" target="_blank">
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.facebook.com/profile.php?id=100009858824326" target="_blank">
        <AiFillFacebook size="3rem"/>
      </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
