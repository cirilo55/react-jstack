import styled, { css } from 'styled-components';

export const Container = styled.span`
    margin-bottom: 24px;

    opacity: ${(props) => props.removed ? 0 : 1 };

`
export const Subtitle = styled.small`
    display: block;
`;

export const Rate = styled.span`
    font-size: 10px;
    opacity: 0.7;
`;

