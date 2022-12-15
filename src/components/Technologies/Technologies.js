import React from 'react';
import { DiFirebase, DiReact, DiZend, DiJava, DiPython,
 DiJavascript1, DiHtml5, DiCss3Full, DiDatabase, DiPostgresql, DiMysql, DiMongodb } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the web development world.
      From Front-end to Back-end Development.
    </SectionText>
    <List>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with: <br />
            - HTML <DiHtml5 size="2rem" />
          </ListParagraph>
          <ListParagraph>
          Experience with: <br />
            - CSS <DiCss3Full size="2rem" />
          </ListParagraph>
          <ListParagraph>
          Experience with: <br />
            - React <DiReact size="2rem" />
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with: <br />
            - Java <DiJava size="2rem" />
          </ListParagraph>
          <ListParagraph>
            - Python <DiPython size="2rem" />
          </ListParagraph>
          <ListParagraph>
            - JavaScript <DiJavascript1 size="2rem" />
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <DiDatabase size="3rem" />
        <ListContainer>
          <ListTitle>Databases</ListTitle>
          <ListParagraph>
            Experience with: <br />
            - PostgreSQL <DiPostgresql size="2rem" />
          </ListParagraph>
          <ListParagraph>
            - MySQL <DiMysql size="2rem" />
          </ListParagraph>
          <ListParagraph>
            - MongoDB <DiMongodb size="2rem" />
          </ListParagraph>
        </ListContainer>
      </ListItem>



    </List>

  </Section>
);

export default Technologies;
