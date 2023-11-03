import styled from 'styled-components';
import { Land } from './Land';
import { theme } from './theme';

export const App = () => {
    return (
        <>
            <Land />
            <SBody />
        </>
    );
};

const SBody = styled.div`
    width: 100vw;
    height: 800px;
    background-color: ${theme.colors.background.main};
    width: min(100%, 800px);
    mar
`;
