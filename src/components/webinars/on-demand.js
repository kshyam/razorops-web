import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { font3, font6 } from '../../assets/globalStyles';
import { Button } from '@mui/material';
import CoverImage from '../../components/common/cover-image';
import moment from 'moment/moment';

const Container = styled('div')`
    background: #f9fafe;
    border-radius: 24px;
`;

const Title = styled('span')`
    ${font3};
    font-size: 22px;
    line-height: 32px;
    color: #18204c;

    &:hover {
        color: #0069ff;
    }

    @media (max-width: 1199px) {
        font-size: 20px;
        line-height: 27px;
    }
`;

const Heading = styled('h1')`
    ${font3};
    font-size: 38px;
    line-height: 48px;
    text-align: center;
    color: #031b4e;
`;

const WatchButton = styled(Button)`
    background: #1681fe;
    padding: 10px 0px;
    border-radius: 0px 0px 24px 24px;
    text-transform: none;
    min-width: -webkit-fill-available;

    &:hover {
        background: #1681fe;
    }
`;

const WatchText = styled('span')`
    ${font6};
    font-size: 16px;
    line-height: 29px;
    text-align: center;
    color: #f9fafe;
`;

const DateText = styled('span')`
    ${font6};
    font-size: 16px;
    line-height: 29px;
    color: #5b6987;
`;

export default function OnDemand({ onDemandWebinars }) {
    return (
        <>
            <div className="m-4">
                <Heading>On-Demand Webinars</Heading>
            </div>
            {onDemandWebinars.map((i) => (
                <div className="mt-10 mb-20 grid grid-cols-1 md:grid-cols-3 md:gap-x-8 lg:gap-x-10 gap-y-10 md:gap-y-24 mb-24">
                    <Container>
                        <div>
                            <CoverImage
                                type={'webinars'}
                                slug={i.slug}
                                title={i.title}
                                fluid={i.coverImage.small}
                            />
                        </div>
                        <div className="m-4">
                            <DateText>{moment(i.date).format('MMMM Do YYYY, h:mm:ss A')}</DateText>
                            <div className="mt-2">
                                <Link to={`/${'webinars'}/${i.slug}`}>
                                    <Title> {i.title}</Title>
                                </Link>
                            </div>
                        </div>
                        <div className="mt-5">
                            <Link to={`/${'webinars'}/${i.slug}`}>
                                <WatchButton>
                                    <WatchText>Watch Video</WatchText>
                                </WatchButton>
                            </Link>
                        </div>
                    </Container>
                </div>
            ))}
        </>
    );
}
