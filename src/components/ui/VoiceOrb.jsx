import React from 'react';

const VoiceOrb = () => {
    return (
        <div className="voice-orb" role="img" aria-label="Animated voice agent visualization">
            <span className="voice-orb__ring voice-orb__ring--1" aria-hidden="true" />
            <span className="voice-orb__ring voice-orb__ring--2" aria-hidden="true" />
            <span className="voice-orb__ring voice-orb__ring--3" aria-hidden="true" />

            <div className="voice-orb__orbit voice-orb__orbit--a" aria-hidden="true">
                <span className="voice-orb__dot" />
            </div>
            <div className="voice-orb__orbit voice-orb__orbit--b" aria-hidden="true">
                <span className="voice-orb__dot voice-orb__dot--pink" />
            </div>
            <div className="voice-orb__orbit voice-orb__orbit--c" aria-hidden="true">
                <span className="voice-orb__dot voice-orb__dot--small" />
            </div>

            <div className="voice-orb__core" aria-hidden="true">
                <div className="voice-orb__core-glow" />
                <div className="voice-orb__wave">
                    <span /><span /><span /><span /><span /><span /><span />
                </div>
            </div>
        </div>
    );
};

export default VoiceOrb;
