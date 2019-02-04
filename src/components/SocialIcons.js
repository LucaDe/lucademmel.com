import React from 'react'
import { StaticQuery } from 'gatsby'

import styled from 'styled-components'

const SocialIcons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const SVG = styled.svg`
  width: 30px;
  height: 30px;
  margin: ${props => props.theme.spacing.m};
  cursor: pointer;
  transition: 0.2s ease;

  &:hover {
    transform: scale(1.1);

    & .linkedIn {
      fill: #4875B4;
    }

    & .fb {
      fill: #3B5998;
    }

    & .xing {
      fill: #cfdc00;
    }

    & .instagram {
      fill: #E1306C;
    }
  }
`
const query = graphql`
{
  site {
    siteMetadata {
      linkedin
      xing
      facebook
      instagram
    }
  }
}`

export default () => (
  <StaticQuery query={query} 
    render={data => (
      <SocialIcons>
          {/* LinkedIn Icon */}
          <a href={data.site.siteMetadata.linkedin} target="_blank" title="linkedIn">
            <SVG version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 430.117 430.117">
              <g>
                <path class="linkedIn" d="M430.117,261.543V420.56h-92.188V272.193c0-37.271-13.334-62.707-46.703-62.707
                  c-25.473,0-40.632,17.142-47.301,33.724c-2.432,5.928-3.058,14.179-3.058,22.477V420.56h-92.219c0,0,1.242-251.285,0-277.32h92.21
                  v39.309c-0.187,0.294-0.43,0.611-0.606,0.896h0.606v-0.896c12.251-18.869,34.13-45.824,83.102-45.824
                  C384.633,136.724,430.117,176.361,430.117,261.543z M52.183,9.558C20.635,9.558,0,30.251,0,57.463
                  c0,26.619,20.038,47.94,50.959,47.94h0.616c32.159,0,52.159-21.317,52.159-47.94C103.128,30.251,83.734,9.558,52.183,9.558z
                  M5.477,420.56h92.184v-277.32H5.477V420.56z" />
              </g>
            </SVG>
          </a>
          {/* Xing Icon */}
          <a href={data.site.siteMetadata.xing} target="_blank" title="xing">
            <SVG version="1.1" id="Capa_1" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 90 90">
              <g>
                <path class="xing" d="M55.363,90L35.236,54.717L66.475,0H87.5L56.262,54.717L76.391,90H55.363z M22.322,62.787l15.617-25.711   l-11.712-20.63H6.404l11.713,20.63L2.5,62.787H22.322z"/>
              </g>
            </SVG>
          </a>
          {/* Instagram Icon */}
          <a href={data.site.siteMetadata.instagram} target="_blank" title="instagram">
            <SVG version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512">
              <g>
                <g>
                  <path class="instagram" d="M352,0H160C71.648,0,0,71.648,0,160v192c0,88.352,71.648,160,160,160h192c88.352,0,160-71.648,160-160V160
                    C512,71.648,440.352,0,352,0z M464,352c0,61.76-50.24,112-112,112H160c-61.76,0-112-50.24-112-112V160C48,98.24,98.24,48,160,48
                    h192c61.76,0,112,50.24,112,112V352z"/>
                </g>
              </g>
              <g>
                <g>
                  <path class="instagram" d="M256,128c-70.688,0-128,57.312-128,128s57.312,128,128,128s128-57.312,128-128S326.688,128,256,128z M256,336
                    c-44.096,0-80-35.904-80-80c0-44.128,35.904-80,80-80s80,35.872,80,80C336,300.096,300.096,336,256,336z"/>
                </g>
              </g>
              <g>
                <g>
                  <circle class="instagram" cx="393.6" cy="118.4" r="17.056"/>
                </g>
              </g>
            </SVG>
          </a>
          {/* Facebook Icon */}
          <a href={data.site.siteMetadata.facebook} target="_blank" title="facebook">
            <SVG version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 90 90">
              <g>
                <path class="fb" d="M90,15.001C90,7.119,82.884,0,75,0H15C7.116,0,0,7.119,0,15.001v59.998
                  C0,82.881,7.116,90,15.001,90H45V56H34V41h11v-5.844C45,25.077,52.568,16,61.875,16H74v15H61.875C60.548,31,59,32.611,59,35.024V41
                  h15v15H59v34h16c7.884,0,15-7.119,15-15.001V15.001z"/>
              </g>
            </SVG>
          </a>
        </SocialIcons>
    )}
  />
  
)
