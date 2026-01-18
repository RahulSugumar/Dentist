import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="page-contact">
            <section className="section bg-secondary text-center">
                <div className="container">
                    <h1 style={{ marginBottom: '1.5rem', fontSize: '3rem' }}>Contact Us</h1>
                    <p style={{ fontSize: '1.2rem', color: 'var(--color-text-secondary)' }}>We are here to help. Reach out to us for any queries.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'start' }}>

                        {/* Contact Info */}
                        <div style={{ padding: '2rem', background: 'var(--color-white)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>
                            <h2 style={{ marginBottom: '2rem', fontSize: '2rem' }}>Get in Touch</h2>
                            <div className="flex flex-col gap-md">
                                <div className="flex gap-md items-start">
                                    <div style={{ padding: '1rem', background: 'var(--color-bg-secondary)', borderRadius: '50%' }}>
                                        <MapPin size={24} color="var(--color-accent)" />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Address</h3>
                                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)' }}>123, North Usman Road,<br />T Nagar, Chennai - 600017</p>
                                    </div>
                                </div>

                                <div className="flex gap-md items-start">
                                    <div style={{ padding: '1rem', background: 'var(--color-bg-secondary)', borderRadius: '50%' }}>
                                        <Phone size={24} color="var(--color-accent)" />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Phone</h3>
                                        <p style={{ fontSize: '1.1rem' }}><a href="tel:+919876543210" style={{ color: 'var(--color-text-secondary)' }}>+91 98765 43210</a></p>
                                    </div>
                                </div>

                                <div className="flex gap-md items-start">
                                    <div style={{ padding: '1rem', background: 'var(--color-bg-secondary)', borderRadius: '50%' }}>
                                        <Mail size={24} color="var(--color-accent)" />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Email</h3>
                                        <p style={{ fontSize: '1.1rem' }}><a href="mailto:info@tnagardental.com" style={{ color: 'var(--color-text-secondary)' }}>info@tnagardental.com</a></p>
                                    </div>
                                </div>

                                <div className="flex gap-md items-start">
                                    <div style={{ padding: '1rem', background: 'var(--color-bg-secondary)', borderRadius: '50%' }}>
                                        <Clock size={24} color="var(--color-accent)" />
                                    </div>
                                    <div>
                                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Timings</h3>
                                        <p style={{ fontSize: '1.1rem', color: 'var(--color-text-secondary)' }}>Mon - Sat: 10:00 AM - 8:00 PM<br />Sunday: By Appointment Only</p>
                                    </div>
                                </div>
                            </div>

                            <div style={{ marginTop: '3rem' }}>
                                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ display: 'inline-flex', gap: '0.8rem', width: '100%' }}>
                                    Chat on WhatsApp
                                </a>
                            </div>
                        </div>

                        {/* Map */}
                        <div style={{ height: '100%', minHeight: '500px', borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)', border: '1px solid var(--color-border)' }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.685166752763!2d80.23761631482294!3d13.040072990810756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526655a5555555%3A0x5555555555555555!2sT.+Nagar%2C+Chennai%2C+Tamil+Nadu!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '500px' }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Google Map"
                            ></iframe>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
