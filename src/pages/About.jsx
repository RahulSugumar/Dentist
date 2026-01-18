import React from 'react';

const About = () => {
    return (
        <div className="page-about">
            <section className="section bg-secondary">
                <div className="container">
                    <h1 className="text-center" style={{ marginBottom: '4rem', fontSize: '3rem' }}>Meet Your Dentist</h1>

                    <div className="flex flex-col items-center gap-md" style={{ maxWidth: '900px', margin: '0 auto' }}>
                        {/* Dentist Photo Placeholder */}
                        <div style={{
                            width: '220px',
                            height: '220px',
                            borderRadius: '50%',
                            backgroundColor: '#ddd',
                            backgroundImage: 'url(https://placehold.co/400x400?text=Dr.+Smith)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            border: '4px solid var(--color-accent)',
                            boxShadow: 'var(--shadow-lg)'
                        }}></div>

                        <div className="text-center">
                            <h2 style={{ color: 'var(--color-text-primary)', marginBottom: '0.5rem', fontSize: '2.5rem' }}>Dr. Anitha Rao</h2>
                            <p style={{ fontSize: '1.2rem', color: 'var(--color-accent)', fontWeight: '600', marginBottom: '2rem', letterSpacing: '1px' }}>
                                BDS, MDS - Conservative Dentistry & Endodontics
                            </p>

                            <div style={{
                                textAlign: 'center',
                                background: 'var(--color-white)',
                                padding: '3rem',
                                borderRadius: 'var(--radius-lg)',
                                boxShadow: 'var(--shadow-md)',
                                lineHeight: '1.8'
                            }}>
                                <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                                    Dr. Anitha Rao is a highly skilled dental specialist with over <strong>10 years of experience</strong> in creating beautiful smiles. She specializes in root canal treatments, cosmetic dentistry, and painless dental procedures.
                                </p>
                                <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                                    She is a gold medalist from the Government Dental College, Chennai, and is registered with the <strong>Tamil Nadu Dental Council (Reg No: 12345)</strong>.
                                </p>
                                <p style={{ fontSize: '1.1rem' }}>
                                    Her approach is patient-centric, focusing on preserving natural teeth and ensuring maximum comfort during treatments.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: '2rem' }}>Our Philosophy</h2>
                    <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <div className="text-center">
                            <h3 style={{ color: 'var(--color-accent)' }}>Patient Comfort</h3>
                            <p>We prioritize a pain-free and anxiety-free experience for every patient.</p>
                        </div>
                        <div className="text-center">
                            <h3 style={{ color: 'var(--color-accent)' }}>Sterilization</h3>
                            <p>We follow strict international protocols for hygiene and sterilization.</p>
                        </div>
                        <div className="text-center">
                            <h3 style={{ color: 'var(--color-accent)' }}>Transparency</h3>
                            <p>Clear communication about treatment plans and costs with no hidden charges.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
