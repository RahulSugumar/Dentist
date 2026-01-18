import React, { useState } from 'react';

const Booking = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        time: '',
        service: 'Consultation'
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate API call
        console.log('Booking Data:', formData);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="page-booking section text-center">
                <div className="container">
                    <div style={{ maxWidth: '500px', margin: '0 auto', padding: '3rem', background: 'var(--color-bg-secondary)', borderRadius: 'var(--radius-md)' }}>
                        <h1 style={{ color: 'green', marginBottom: '1rem' }}>Booking Confirmed!</h1>
                        <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                            Thank you, <strong>{formData.name}</strong>. We have received your appointment request for <strong>{formData.date}</strong> at <strong>{formData.time}</strong>.
                        </p>
                        <p>We will call you shortly on <strong>{formData.phone}</strong> to confirm.</p>
                        <button
                            className="btn btn-outline"
                            style={{ marginTop: '2rem' }}
                            onClick={() => setSubmitted(false)}
                        >
                            Book Another
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="page-booking">
            <section className="section bg-secondary text-center">
                <div className="container">
                    <h1 style={{ marginBottom: '1.5rem', fontSize: '3rem' }}>Book an Appointment</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)' }}>Fill out the form below and we will get back to you.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <form
                        onSubmit={handleSubmit}
                        style={{
                            maxWidth: '700px',
                            margin: '0 auto',
                            padding: '3rem',
                            border: 'none',
                            borderRadius: 'var(--radius-lg)',
                            background: 'var(--color-white)',
                            boxShadow: 'var(--shadow-lg)'
                        }}
                    >
                        <div className="flex flex-col gap-sm" style={{ marginBottom: '2rem' }}>
                            <label htmlFor="name" style={{ fontWeight: '600', fontSize: '1.1rem' }}>Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                style={{ padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: '1rem', background: 'var(--color-bg-secondary)' }}
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="flex flex-col gap-sm" style={{ marginBottom: '2rem' }}>
                            <label htmlFor="phone" style={{ fontWeight: '600', fontSize: '1.1rem' }}>Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                style={{ padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: '1rem', background: 'var(--color-bg-secondary)' }}
                                placeholder="Enter your phone number"
                            />
                        </div>

                        <div className="grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                            <div className="flex flex-col gap-sm">
                                <label htmlFor="date" style={{ fontWeight: '600', fontSize: '1.1rem' }}>Preferred Date</label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    required
                                    value={formData.date}
                                    onChange={handleChange}
                                    style={{ padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: '1rem', background: 'var(--color-bg-secondary)' }}
                                />
                            </div>
                            <div className="flex flex-col gap-sm">
                                <label htmlFor="time" style={{ fontWeight: '600', fontSize: '1.1rem' }}>Preferred Time</label>
                                <input
                                    type="time"
                                    id="time"
                                    name="time"
                                    required
                                    value={formData.time}
                                    onChange={handleChange}
                                    style={{ padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: '1rem', background: 'var(--color-bg-secondary)' }}
                                />
                            </div>
                        </div>

                        <div className="flex flex-col gap-sm" style={{ marginBottom: '3rem' }}>
                            <label htmlFor="service" style={{ fontWeight: '600', fontSize: '1.1rem' }}>Service</label>
                            <select
                                id="service"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                style={{ padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', fontSize: '1rem', background: 'var(--color-bg-secondary)' }}
                            >
                                <option value="Consultation">General Consultation</option>
                                <option value="Cleaning">Teeth Cleaning</option>
                                <option value="Filling">Tooth Filling</option>
                                <option value="Root Canal">Root Canal Treatment</option>
                                <option value="Braces">Braces / Aligners</option>
                                <option value="Extraction">Tooth Extraction</option>
                                <option value="Implants">Dental Implants</option>
                                <option value="Whitening">Teeth Whitening</option>
                            </select>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%', fontSize: '1.2rem', padding: '1.2rem' }}>
                            Confirm Appointment
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Booking;
