import styled from 'styled-components';

export default styled.div`
  max-width: ${props => props.theme.containerWidth};
  margin: 0 auto;
  padding: 0 ${props => props.theme.spacing.m} 0 ${props => props.theme.spacing.m};
`;
