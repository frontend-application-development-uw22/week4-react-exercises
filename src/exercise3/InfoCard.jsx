// You're on your own
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

const InfoIcon = () => <FontAwesomeIcon icon={faInfoCircle} />;

export default function InfoCard({ children }) {
    return (
        <div>
            <InfoIcon />
            {' '}
            {children}
        </div>
    )
}