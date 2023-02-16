import { useSpring } from '@react-spring/web';
import React, { useContext } from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import { Header } from '../components/spec/Header';
import { ThemeContext } from '../helpers/context';
import { Main } from '../styles/components/common/main';
import { Hero } from './Hero';


const Routes = () => {
    const { theme } = useContext(ThemeContext)!;

    const spring = useSpring({
        to: {
            backgroundColor: theme.minor
        }
    })

    return (
        <>
            <Header />
            <Main style={spring}>
                <Switch>
                    <Route path='/' element={<Hero />} />
                </Switch>
            </Main>
        </>
    )
};

export default Routes;
