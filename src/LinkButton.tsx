import styled from 'styled-components';
import { theme } from 'theme';

export const LinkButton = styled.a`
    border: 0;
    background-color: ${theme.colors.primary.main};
    color: ${theme.colors.background.main};
    padding: ${theme.spacing(1)} ${theme.spacing(2)};
    cursor: pointer;
    border-radius: ${theme.borderRaduis(1)};
    text-decoration: none;
    font-size: 30px;

    &:hover {
        background-color: ${theme.colors.primary.dark};
    }
`;
