import styled from 'styled-components';


export const FooterBase = styled.footer`
  background-color: var(--black);
  border-top: 2px solid var(--mintleaf);
  color: var(--white);
  padding: 32px 16px;
  text-align: center;
  
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;
