import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';

const data = [
  { number: 20, text: 'Open Source Projects'},
  { number: 1000, text: 'Students', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Github Stars', }
];

const Contact = () => (
  <Section id="contact">
  <SectionTitle>Contact</SectionTitle>
  </Section>
);

export default Contact;