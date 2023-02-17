import React from 'react';
import Home from './Home';
import About from './About';
import { BackgroundImage } from '../../components/spec/BackgroundImage';
import * as GridLayout from '../../styles/layouts/grids/index';


export const Hero = () => {
    return (
        <>
            <BackgroundImage />
            <GridLayout.MainGrid>
                <Home />
                <About />
            </GridLayout.MainGrid>
        </>
    )
}