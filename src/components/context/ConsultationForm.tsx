import React, { useState } from 'react';
import { ConsultationFormFunction } from '../../helpers/context';
import { Data } from '../../data';
import { Button } from '../common/Button';
import { Consultation } from '../spec/Consultation';


export const ConsultationForm: React.FC = () => {
    const { primary } = Data.home.callToAction;
    const [active, setActive] = useState(false);

    const on = () => {
        setActive(true);
    }

    const off = () => {
        setActive(false);
    }

    const context = {
        status: active,
        toggle: {
            on: on,
            off: off
        },
    }

    return (
        <ConsultationFormFunction.Provider value={context}>
            <Button variant='primary' children={primary} onClick={on} />
            <Consultation />
        </ConsultationFormFunction.Provider>
    )
};