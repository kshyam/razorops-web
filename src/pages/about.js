import React from 'react';
import Details from '../components/about/details';
import Join from '../components/about/join';
import Team from '../components/about/team';
import Container from '../components/container';
import Footer from '../components/footer';

export default function About() {
    return (
        <Container>
            <Details />
            <Team />
            <Join />
            <Footer />
        </Container>
    );
}
