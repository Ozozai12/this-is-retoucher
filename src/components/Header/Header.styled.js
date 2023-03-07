import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: #fff;

  &.active {
    color: #555;
    border-bottom: 1px solid #555;
  }
`;
