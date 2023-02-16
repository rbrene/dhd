import React, { useLayoutEffect, useState } from 'react';
import { NavbarToggleFunction } from '../../helpers/context';
import { viewportDimensions } from '../../helpers/units';
import { NavbarFunctionPropTypes } from '../../types/context/nav';


export const NavbarToggle: React.FC<NavbarFunctionPropTypes> = ({ children }) => {
    const [active, setActive] = useState<boolean>(false);
    const [animate, setAnimate] = useState(false);

    useLayoutEffect(() => {
        if (window.innerWidth <= viewportDimensions.tablet - 0.2) {
            setAnimate(true);
        } else if (window.innerWidth >= viewportDimensions.tablet) {
            setAnimate(false);
        }

        window.addEventListener('resize', () => {
            if (window.innerWidth <= viewportDimensions.tablet - 0.2) {
                setAnimate(true);
            } else if (window.innerWidth >= viewportDimensions.tablet) {
                setAnimate(false);
            } else if (window.innerWidth <= viewportDimensions.mobile - 0.2) {
                setAnimate(true);
            }
        })
    }, [])


    const context = {
        status: active,
        dispatch: setActive,
        animate: animate,
        toggle: () => setActive(!active)
    }

    return (
        <NavbarToggleFunction.Provider value={context}>
            {children}
        </NavbarToggleFunction.Provider>
    );
}