import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br/>
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        I am an aspiring Software Developer
      </SectionText>
      <a href="mailto:gignatski@gmail.com"><Button>Let's Connect</Button></a>
    </LeftSection>
  </Section>
);

export default Hero;