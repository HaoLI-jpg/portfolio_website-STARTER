import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello-------<br />
        <SectionTitle>-----I am H.Li</SectionTitle>
      </SectionTitle>
      <SectionText>
        Current student at University of Auckland, majoring in information system and computer science.
      </SectionText>
    </LeftSection>
  </Section>
);

export default Hero;