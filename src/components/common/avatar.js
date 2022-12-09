import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import styled from '@emotion/styled';
import { color2, font1 } from '../../assets/globalStyles';

const Name = styled('span')`
    ${font1};
    font-size: 18px;
    line-height: 29px;
    color: ${(props) => (props.details ? '#000000' : '#ffffff')};

    @media (min-width: 1200px) and (max-width: 1535px) {
        font-size: 16px;
        line-height: 27px;
    }

    @media (max-width: 1199px) {
        font-size: 16px;
        line-height: 27px;
    }
`;

const Role = styled('span')`
    ${font1};
    font-size: 14px;
    line-height: 27px;
    color: ${(props) => (props.details ? color2 : '#ffffff')};
    text-align: left;
`;
export default function Avatar({ details, name, role, picture }) {
    return (
        <div className="flex items-center">
            <GatsbyImage
                style={{ borderRadius: '10px' }}
                image={picture?.gatsbyImageData}
                className="w-12 h-12 rounded-full mr-4"
                alt={`Photo of ${name}`}
            />
            <div className="flex flex-col">
                <Name details={details}>{name}</Name>
                <Role details={details}>{role}</Role>
            </div>
        </div>
    );
}
