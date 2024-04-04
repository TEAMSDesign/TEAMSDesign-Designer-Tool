import './icon-card-test.css';
import React from 'react';

export interface IconCardTestProps {
    className?: string;
}

export const IconCardTest: React.FC<IconCardTestProps> = ({ className = '' }) => (
    <div className={`${className} icon-card-test`}>
<img src="/public/favicon.svg"/>
<h6 className="card-title">TEAMS Design</h6>
<p>This is the description of the svg icon for this component.</p></div>
);