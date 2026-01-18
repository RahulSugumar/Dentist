import React from 'react';

const servicesList = [
    {
        title: 'Teeth Cleaning',
        description: 'Professional scaling and polishing to remove plaque and tartar, ensuring healthy gums and fresh breath.',
        icon: '✨'
    },
    {
        title: 'Tooth Filling',
        description: 'Restoring decayed or damaged teeth with tooth-colored composite materials for a natural look.',
        icon: '🦷'
    },
    {
        title: 'Root Canal Treatment',
        description: 'Painless procedure to save infected teeth by removing the pulp and sealing the root canals.',
        icon: '🔬'
    },
    {
        title: 'Braces / Aligners',
        description: 'Straighten your teeth with traditional metal braces or invisible aligners for a perfect smile.',
        icon: '😬'
    },
    {
        title: 'Tooth Extraction',
        description: 'Safe and painless removal of damaged or wisdom teeth when restoration is not possible.',
        icon: '🔧'
    },
    {
        title: 'Dental Implants',
        description: 'Permanent solution for missing teeth using titanium posts that look and feel like natural teeth.',
        icon: '🔩'
    },
    {
        title: 'Cosmetic Dentistry',
        description: 'Smile makeovers including veneers, teeth whitening, and gum contouring.',
        icon: '💎'
    }
];

const Services = () => {
    return (
        <div className="page-services">
            <section className="section text-center bg-secondary">
                <div className="container">
                    <h1 style={{ marginBottom: '1.5rem', fontSize: '3rem' }}>Our Treatments</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--color-text-secondary)' }}>
                        We offer a comprehensive range of dental services using the latest technology to ensure the best care for your teeth.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
                        {servicesList.map((service, index) => (
                            <div key={index} className="service-card" style={{
                                padding: '2.5rem',
                                border: '1px solid var(--color-border)',
                                borderRadius: 'var(--radius-lg)',
                                transition: 'all 0.4s ease',
                                backgroundColor: 'var(--color-white)',
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                gap: '1rem'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-8px)';
                                    e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
                                    e.currentTarget.style.borderColor = 'var(--color-accent)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.borderColor = 'var(--color-border)';
                                }}
                            >
                                <div style={{ fontSize: '3.5rem', marginBottom: '0.5rem' }}>{service.icon}</div>
                                <h3 style={{ marginBottom: '0.5rem', color: 'var(--color-text-primary)', fontSize: '1.5rem' }}>{service.title}</h3>
                                <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6' }}>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
