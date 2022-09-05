import React from 'react';
import Container from '../components/container';
import HowItWorks from '../components/product/how-it-works';
import TopSection from '../components/product/top-section';

export default function Product() {
    return (
        <Container>
            <TopSection />
            <HowItWorks />
        </Container>
    );
}
