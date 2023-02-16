import React, { useContext } from 'react';
import * as Image from '../../../styles/components/common/images';
import homeImage from '../../../assets/images/spacejoy-h2_3dL9yLpU-unsplash.jpg';
import { ThemeContext } from '../../../helpers/context';
import { useSpring } from '@react-spring/web';


export const BackgroundImage = () => {
    const { theme } = useContext(ThemeContext)!;

    const spring = useSpring({
        to: {
            background: `linear-gradient(to bottom, ${theme.mainAccentSecondary} -150%, transparent 100%)`
        }
    })

    return (
        <Image.MaskedImageOverlay
            style={spring}
        >
            <Image.MaskedImage
                src={homeImage}
                alt='home'
            />
        </Image.MaskedImageOverlay>
    )
}