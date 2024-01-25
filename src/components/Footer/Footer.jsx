import React from "react";
import logo2 from '/src/assets/logoanime.png';
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
  SectionHeading,
  Copyright, // New style for section headings
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <img
              src={logo2}
              width="130"
            />
            <Heading>sweizzer</Heading>
          </Column>
          <Column>
            <SectionHeading>Navigation</SectionHeading>
            <FooterLink href="/popular">Popular</FooterLink>
            <FooterLink href="/trending">Trending</FooterLink>
            <FooterLink href="/top100">Top 100</FooterLink>
          </Column>
          <Column>
            <SectionHeading>Legal</SectionHeading>
            <FooterLink href="https://github.com/iethemsag" target="_blank">Staff</FooterLink>
            <FooterLink href="https://github.com/iethemsag" target="_blank">
              Terms
            </FooterLink>
            <FooterLink href="https://github.com/iethemsag" target="_blank">
              Privacy
            </FooterLink>
          </Column>
          <Column>
            <SectionHeading>Connect</SectionHeading>
            <FooterLink href="https://discord.gg/d8dfstU6Dm" target="_blank">Discord</FooterLink>
            <FooterLink href="https://iethemsag.com.tr" target="_blank">We're Hiring!</FooterLink>
            <FooterLink href="https://iethemsag.com.tr" target="_blank">
              Support
            </FooterLink>
          </Column>
        </Row>
      </Container>
      <Copyright>
        <p>
          Copyright © Sweizzer All Rights Reserved.
          <br />
          This site does not store any files on its server. All contents are
          provided by non-affiliated third parties.
        </p>
      </Copyright>
    </Box>
  );
};

export default Footer;
