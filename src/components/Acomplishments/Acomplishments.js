import React from 'react';

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 1, text: 'Years into web development'},
  { number: 3, text: 'Years into programming'},
  { number: 3, text: 'Years into photography'}
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Life</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionText>I like spending time on photography and coding in my spare time. I often spend time in nature and cities to capture all the wonderful moments and views with my camera.</SectionText>
    <div >
    <img src="/images/DSCF2219-edited.JPG" width="50%" height="50%"/>
    <img src="/images/DSCF2241-edited.JPG" width="50%" height="50%"/>
    </div>
  </Section>
);

export default Acomplishments;
