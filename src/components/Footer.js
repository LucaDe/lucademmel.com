import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
`;

const Footer = () => (
  <FooterWrapper>
    © {new Date().getFullYear()}, Luca Demmel
  </FooterWrapper>
)

export default Footer