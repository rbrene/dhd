import React from 'react';
import { SectionProps } from '../../../types/components/section';
import { Section as Element } from '../../../styles/components/common/section';


export function Section({ id, children }: SectionProps) {
    return (
        <Element id={id}>
            {children}
        </Element>
    )
}