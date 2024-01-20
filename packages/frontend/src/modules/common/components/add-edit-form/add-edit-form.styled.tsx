import styled from 'styled-components';
import { BREAKPOINTS } from '../../../theme';

export const StyledForm = styled.form`
  @media (max-width: ${BREAKPOINTS.desktop}) {
    width: 552px;
  }
  @media (max-width: ${BREAKPOINTS.tablet}) {
    width: 450px;
  }
  @media (max-width: ${BREAKPOINTS.mobile}) {
    width: 230px;
  }
`;
