import React, { Component } from 'react'
import styled from 'styled-components'
import Cookies from 'universal-cookie'
import { Link } from 'gatsby';
import { Button, Container } from '.';
import { media } from '../theme';

const CookieBannerWrapper = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${props => props.theme.colors.primary};
  z-index: 2;
`

const CookieInfo = styled.p`
  color: ${props => props.theme.colors.white};
`

const Wrapper = styled(Container)`
  display: flex;
  ${media.phone`
    text-align: center;
    flex-direction: column;
  `}
  align-items: center;
  justify-content: space-between;
`

export default class CookieBanner extends Component {
  state = {
    showCookie: false,
  }

  componentDidMount() {
    this.cookies = new Cookies();

    if (!this.cookies.get('cookieInfo')) {
      this.setState({
        showCookie: true
      })
    }
  }

  onSubmit = () => {
    this.cookies.set('cookieInfo', '1', { path: '/' });
    this.setState({
      showCookie: false
    })
  }

  render() {
    const { showCookie } = this.state
    return (
      <CookieBannerWrapper show={showCookie}>
        <Wrapper>
          <CookieInfo>This site uses cookies to improve your user experience. Read more <Link to="privacyPolicy">here</Link>!</CookieInfo>
          <Button inline onClick={this.onSubmit}>Acknowledged</Button>
        </Wrapper>
      </CookieBannerWrapper>
    )
  }
}
