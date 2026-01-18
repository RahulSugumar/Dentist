import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#333', color: '#fff', padding: '4rem 0 2rem' }}>
            <div className="container">
                <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>

                    {/* Column 1: About */}
                    <div>
                        <h3 style={{ color: 'var(--color-accent)', marginBottom: '1rem' }}>T Nagar Dental</h3>
                        <p style={{ color: '#ccc' }}>
                            Providing world-class dental care in the heart of Chennai.
                            Our mission is to create healthy, beautiful smiles in a comfortable environment.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Quick Links</h4>
                        <ul className="flex flex-col gap-sm">
                            <li><Link to="/about" style={{ color: '#ccc' }}>About Dentist</Link></li>
                            <li><Link to="/services" style={{ color: '#ccc' }}>Treatments</Link></li>
                            <li><Link to="/clinic" style={{ color: '#ccc' }}>Our Clinic</Link></li>
                            <li><Link to="/contact" style={{ color: '#ccc' }}>Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h4 style={{ color: '#fff', marginBottom: '1rem' }}>Contact Us</h4>
                        <ul className="flex flex-col gap-sm">
                            <li className="flex items-center gap-sm" style={{ color: '#ccc' }}>
                                <MapPin size={18} color="var(--color-accent)" />
                                <span>123, North Usman Road, T Nagar, Chennai - 600017</span>
                            </li>
                            <li className="flex items-center gap-sm" style={{ color: '#ccc' }}>
                                <Phone size={18} color="var(--color-accent)" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-sm" style={{ color: '#ccc' }}>
                                <Mail size={18} color="var(--color-accent)" />
                                <span>info@tnagardental.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid #444', marginTop: '3rem', paddingTop: '1.5rem', textAlign: 'center', color: '#888' }}>
                    <p>&copy; {new Date().getFullYear()} T Nagar Dental Clinic. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
