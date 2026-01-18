import React from 'react';

const Clinic = () => {
    return (
        <div className="page-clinic">
            <section className="section bg-secondary text-center">
                <div className="container">
                    <h1 style={{ marginBottom: '1.5rem', fontSize: '3rem' }}>Our Clinic</h1>
                    <p style={{ maxWidth: '700px', margin: '0 auto', fontSize: '1.2rem', color: 'var(--color-text-secondary)' }}>
                        Experience dental care in a modern, hygienic, and comfortable environment.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
                        {/* Clinic Photo 1 */}
                        <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', transition: 'transform 0.3s ease' }}>
                            <img
                                src="https://placehold.co/600x400?text=Reception+Area"
                                alt="Clinic Reception"
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />
                            <div style={{ padding: '1.5rem', background: 'var(--color-white)' }}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Welcoming Reception</h3>
                                <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)' }}>Comfortable waiting area for patients.</p>
                            </div>
                        </div>

                        {/* Clinic Photo 2 */}
                        <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', transition: 'transform 0.3s ease' }}>
                            <img
                                src="https://placehold.co/600x400?text=Dental+Operatory"
                                alt="Dental Chair"
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />
                            <div style={{ padding: '1.5rem', background: 'var(--color-white)' }}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Modern Operatory</h3>
                                <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)' }}>Equipped with advanced dental chairs.</p>
                            </div>
                        </div>

                        {/* Clinic Photo 3 */}
                        <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', transition: 'transform 0.3s ease' }}>
                            <img
                                src="https://placehold.co/600x400?text=Sterilization+Unit"
                                alt="Sterilization"
                                style={{ width: '100%', height: 'auto', display: 'block' }}
                            />
                            <div style={{ padding: '1.5rem', background: 'var(--color-white)' }}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Sterilization Zone</h3>
                                <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)' }}>Class B Autoclave for 100% sterility.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-secondary">
                <div className="container">
                    <h2 className="text-center" style={{ marginBottom: '3rem', fontSize: '2.5rem' }}>Hygiene & Safety</h2>
                    <ul style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <li className="flex items-center gap-md" style={{ background: 'var(--color-white)', padding: '1.5rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                            <span style={{ color: 'var(--color-accent)', fontSize: '1.8rem' }}>✓</span>
                            <span style={{ fontSize: '1.1rem' }}>All instruments are sterilized using a 4-step autoclave process.</span>
                        </li>
                        <li className="flex items-center gap-md" style={{ background: 'var(--color-white)', padding: '1.5rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                            <span style={{ color: 'var(--color-accent)', fontSize: '1.8rem' }}>✓</span>
                            <span style={{ fontSize: '1.1rem' }}>Disposable kits (gloves, masks, suction tips) used for every patient.</span>
                        </li>
                        <li className="flex items-center gap-md" style={{ background: 'var(--color-white)', padding: '1.5rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                            <span style={{ color: 'var(--color-accent)', fontSize: '1.8rem' }}>✓</span>
                            <span style={{ fontSize: '1.1rem' }}>Clinic environment is sanitized regularly with medical-grade disinfectants.</span>
                        </li>
                        <li className="flex items-center gap-md" style={{ background: 'var(--color-white)', padding: '1.5rem', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
                            <span style={{ color: 'var(--color-accent)', fontSize: '1.8rem' }}>✓</span>
                            <span style={{ fontSize: '1.1rem' }}>Digital X-rays reduce radiation exposure by up to 90%.</span>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default Clinic;
