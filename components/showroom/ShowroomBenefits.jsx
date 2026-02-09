import React from 'react';

const FurnitureIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M33 20H7V30H33V20Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path
            d="M10 20V15C10 13.9391 10.4214 12.9217 11.1716 12.1716C11.9217 11.4214 12.9391 11 14 11H26C27.0609 11 28.0783 11.4214 28.8284 12.1716C29.5786 12.9217 30 13.9391 30 15V20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path d="M13 30V33" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M27 30V33" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const TagIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M32.5 21.6667L21.6667 32.5C21.4181 32.7485 21.1246 32.9448 20.8033 33.0782C20.482 33.2116 20.1389 33.2798 19.7917 33.2798C19.4444 33.2798 19.1013 33.2116 18.78 33.0782C18.4587 32.9448 18.1652 32.7485 17.9167 32.5L7.5 22.0833V7.5H22.0833L32.5 17.9167C33.0024 18.4258 33.2855 19.1164 33.2855 19.8333C33.2855 20.5502 33.0024 21.2408 32.5 21.75V21.6667Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path d="M15 15H15.0167" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const HelpIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M20 36.6667C29.2048 36.6667 36.6667 29.2048 36.6667 20C36.6667 10.7953 29.2048 3.33334 20 3.33334C10.7953 3.33334 3.33334 10.7953 3.33334 20C3.33334 29.2048 10.7953 36.6667 20 36.6667Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M15.1667 15C15.5536 13.9445 16.2859 13.0577 17.2396 12.4793C18.1932 11.9009 19.3111 11.6664 20.4088 11.8126C21.5066 11.9588 22.5228 12.4766 23.2893 13.2764C24.0559 14.0762 24.5258 15.1135 24.6267 16.2167C24.6267 20 19.6267 22 19.6267 22"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path d="M20 30H20.0167" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
)

const ShowroomBenefits = ({ benefitsContent }) => {
    // Basic check for expected data structure
    if (!benefitsContent || benefitsContent.length < 3) {
        console.error("ShowroomBenefits requires a 'benefitsContent' prop with at least 3 items.");
        // Optionally return null or a placeholder if data is missing/invalid
        return null;
    }

    return (
        <div className="container">
            <div className="row g-4 justify-content-center">
                {/* Column 1: Nábytek */}
                <div className="col-lg-4 col-md-6">
                    <div className="card h-100 p-4" style={{ backgroundColor: '#f1f0ed', border: 'none' }}>
                        <div className="fs-1" style={{ color: '#545454' }}><FurnitureIcon /></div>
                        <h4 className="mb-1 fs-5">{benefitsContent[0]?.title}</h4>
                        <p>{benefitsContent[0]?.text?.text}</p>
                    </div>
                </div>
                {/* Column 2: Vzorkovnice */}
                <div className="col-lg-4 col-md-6">
                    <div className="card h-100 p-4" style={{ backgroundColor: '#f1f0ed', border: 'none' }}>
                        <div className="mb-1 fs-1" style={{ color: '#545454' }}><TagIcon /></div>
                        <h4 className="mb-1 fs-5">{benefitsContent[1]?.title}</h4>
                        <p>{benefitsContent[1]?.text?.text}</p>
                    </div>
                </div>
                {/* Column 3: Pomoc s výběrem */}
                <div className="col-lg-4 col-md-6">
                    <div className="card h-100 p-4" style={{ backgroundColor: '#f1f0ed', border: 'none' }}>
                        <div className="mb-1 fs-1" style={{ color: '#545454' }}><HelpIcon /></div>
                        <h4 className="mb-1 fs-5">{benefitsContent[2]?.title}</h4>
                        <p>{benefitsContent[2]?.text?.text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowroomBenefits; 