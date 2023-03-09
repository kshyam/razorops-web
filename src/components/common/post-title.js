import React from 'react';
import styled from '@emotion/styled';
import { font7 } from '../../assets/globalStyles';

const Heading = styled('h1')`
    ${font7};
    font-size: 28px;
    line-height: 40px;
    color: #002c9b;
    text-transform: capitalize;
`;

const Div = styled('div')`
    margin: 2.5rem 0;

    @media (max-width: 599px) {
        margin: 0;
    }
`;
export default function PostTitle({ children }) {
    return (
        <Div className="mt-10">
            <Heading> {children}</Heading>
        </Div>
    );
}
