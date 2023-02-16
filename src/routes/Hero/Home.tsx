import React from 'react';
import { Section } from '../../components/common/Section';
import Article from '../../styles/layouts/articles';
import * as Wrapper from '../../styles/layouts/containers';
import * as FlexLayout from '../../styles/layouts/flex';
import * as Utility from '../../styles/utilities/padding';
import { Data } from '../../data';
import { useDeviceQuery } from '../../hooks/useDeviceQuery';
import { Button } from '../../components/common/Button';
import { ConsultationForm } from '../../components/context/ConsultationForm';
import Heading from '../../components/common/Heading';
import Text from '../../components/common/Text';


const Home = () => {
    const device = useDeviceQuery();
    const { title, main, intro, callToAction } = Data.home;
    return (
        <Section id='home'>
            <Article
                $maxWidth={device !== 'mobile' ? 780 : 720}
                $height={100}
            >
                <Utility.Padding $padding={device === 'mobile' ? 32 : 48}>
                    <FlexLayout.FlexAlign
                        $direction='column'
                        $justifyContent='center'
                        $alignItems={device === 'mobile' ? 'center' : 'start'}
                    >
                        <Heading size='title' text={title} />
                        <Heading size={1} text={main} />
                        <Text variant='intro' text={intro} />
                        <Wrapper.CallToAction>
                            <ConsultationForm />
                            <Button variant='secondary' children={callToAction.secondary} />
                        </Wrapper.CallToAction>
                    </FlexLayout.FlexAlign>
                </Utility.Padding>
            </Article>
        </Section>
    )
}

export default Home;