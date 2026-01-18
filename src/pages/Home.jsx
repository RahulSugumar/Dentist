import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Shield, Activity, User, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const heroRef = useRef(null);
    const titleRef = useRef(null);
    const textRef = useRef(null);
    const btnRef = useRef(null);

    // Section Refs
    const servicesRef = useRef(null);
    const doctorRef = useRef(null);
    const testimonialsRef = useRef(null);
    const ctaRef = useRef(null);

    useEffect(() => {
        // Hero Animation
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        tl.fromTo(heroRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1 }
        )
            .fromTo(titleRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                "-=0.5"
            )
            .fromTo(textRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                "-=0.6"
            )
            .fromTo(btnRef.current,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.5 },
                "-=0.4"
            );

        // ScrollTrigger Animations
        const sections = [servicesRef, doctorRef, testimonialsRef, ctaRef];

        sections.forEach((section) => {
            if (section.current) {
                gsap.fromTo(section.current.children,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        stagger: 0.2,
                        scrollTrigger: {
                            trigger: section.current,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            }
        });

        // Parallax Effect for Hero Background
        gsap.to(heroRef.current, {
            backgroundPosition: "50% 100%",
            ease: "none",
            scrollTrigger: {
                trigger: heroRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true
            }
        });

    }, []);

    return (
        <div style={{ overflowX: 'hidden' }}>
            {/* Hero Section */}
            <section ref={heroRef} style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                background: 'radial-gradient(circle at 15% 50%, #ffffff 0%, #fcfcfc 100%)',
                paddingTop: '80px',
                overflow: 'hidden'
            }}>
                {/* Abstract Background Shapes */}
                <div style={{
                    position: 'absolute',
                    top: '-10%',
                    right: '-5%',
                    width: '60vw',
                    height: '60vw',
                    background: 'radial-gradient(circle, rgba(212,175,55,0.03) 0%, rgba(255,255,255,0) 70%)',
                    borderRadius: '50%',
                    zIndex: 0,
                    pointerEvents: 'none'
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <div className="grid grid-2-cols" style={{ gap: '3rem' }}>

                        {/* Text Content */}
                        <div style={{ maxWidth: '650px', marginTop: '2.2rem' }}>


                            <h1 ref={titleRef} style={{
                                fontFamily: 'var(--font-heading)',
                                marginBottom: '1.5rem',
                                fontSize: 'clamp(3.5rem, 5vw, 5rem)',
                                lineHeight: '1.1',
                                color: 'var(--color-text-primary)'
                            }}>
                                Crafting Smiles with <br />
                                <span style={{
                                    fontStyle: 'italic',
                                    color: 'var(--color-accent)',
                                    position: 'relative',
                                    display: 'inline-block'
                                }}>
                                    Artistry & Precision
                                    <svg width="100%" height="10" viewBox="0 0 200 10" style={{ position: 'absolute', bottom: '5px', left: 0, zIndex: -1 }}>
                                        <path d="M0,5 Q100,10 200,5" stroke="rgba(212,175,55,0.3)" strokeWidth="8" fill="none" />
                                    </svg>
                                </span>
                            </h1>

                            <p ref={textRef} style={{
                                fontSize: '1.25rem',
                                marginBottom: '3rem',
                                maxWidth: '520px',
                                color: 'var(--color-text-secondary)',
                                lineHeight: '1.8',
                                fontWeight: '300'
                            }}>
                                Experience world-class dental treatments in a luxurious, pain-free environment. Where advanced technology meets compassionate care.
                            </p>

                            <div ref={btnRef} style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                                <Link to="/booking" className="btn btn-primary" style={{
                                    padding: '1rem 2.5rem',
                                    fontSize: '1rem',
                                    boxShadow: '0 10px 30px rgba(212, 175, 55, 0.25)'
                                }}>
                                    Book Appointment
                                </Link>
                                <Link to="/services" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    fontWeight: '600',
                                    color: 'var(--color-text-primary)',
                                    textDecoration: 'none',
                                    fontSize: '1rem'
                                }}>
                                    Explore Treatments <span style={{ fontSize: '1.2rem' }}>→</span>
                                </Link>
                            </div>

                            <div style={{ marginTop: '4rem', display: 'flex', alignItems: 'center', gap: '2rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span style={{ fontSize: '2rem', fontWeight: '700', fontFamily: 'var(--font-heading)', lineHeight: '1' }}>500+</span>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Happy Patients</span>
                                </div>
                                <div style={{ width: '1px', height: '40px', background: '#e0e0e0' }}></div>
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                    <span style={{ fontSize: '2rem', fontWeight: '700', fontFamily: 'var(--font-heading)', lineHeight: '1' }}>15+</span>
                                    <span style={{ fontSize: '0.9rem', color: 'var(--color-text-secondary)' }}>Years Experience</span>
                                </div>
                            </div>
                        </div>

                        {/* Visual Content */}
                        <div style={{ position: 'relative', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            {/* Abstract Gradient Mesh Background (Replaces Image) */}
                            <div style={{
                                width: '100%',
                                maxWidth: '100%',
                                height: '100%',
                                position: 'relative',
                                zIndex: 1,
                                background: 'linear-gradient(135deg, #958e8eff 0%, #a8a887ff 100%)',
                                borderRadius: '200px 200px 20px 20px',
                                boxShadow: '0 30px 60px -12px rgba(0,0,0,0.25), inset 0 1px 1px rgba(255,255,255,0.4), inset 0 -1px 1px rgba(0,0,0,0.1)',
                                overflow: 'hidden',
                                border: '1px solid rgba(255,255,255,0.2)'
                            }}>
                                {/* Glass Shine Effect */}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.05) 50%, transparent 55%)',
                                    pointerEvents: 'none',
                                    zIndex: 10
                                }}></div>
                                {/* Animated Gradient Orbs */}
                                <div style={{
                                    position: 'absolute',
                                    top: '-20%',
                                    left: '-20%',
                                    width: '140%',
                                    height: '140%',
                                    background: 'radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.15), transparent 60%)',
                                    animation: 'rotate 20s linear infinite'
                                }}></div>
                                <div style={{
                                    position: 'absolute',
                                    top: '30%',
                                    right: '-10%',
                                    width: '300px',
                                    height: '300px',
                                    background: 'radial-gradient(circle, rgba(212, 175, 55, 0.1) 0%, transparent 70%)',
                                    borderRadius: '50%',
                                    filter: 'blur(40px)'
                                }}></div>
                                <div style={{
                                    position: 'absolute',
                                    bottom: '10%',
                                    left: '10%',
                                    width: '200px',
                                    height: '200px',
                                    background: 'linear-gradient(45deg, rgba(212, 175, 55, 0.15), rgba(255, 255, 255, 0.8))',
                                    borderRadius: '50%',
                                    filter: 'blur(30px)'
                                }}></div>

                                {/* Decorative Pattern Overlay */}
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    opacity: 0.4,
                                    backgroundImage: 'radial-gradient(#d4af37 1px, transparent 1px)',
                                    backgroundSize: '30px 30px'
                                }}></div>

                                {/* Gold Ring Accent */}
                                <div style={{
                                    position: 'absolute',
                                    top: '-20px',
                                    right: '-20px',
                                    width: '100px',
                                    height: '100px',
                                    border: '2px solid var(--color-accent)',
                                    borderRadius: '50%',
                                    zIndex: -1,
                                    opacity: 0.6
                                }}></div>
                            </div>

                            {/* Quick Booking Card - Premium Glassmorphism */}
                            <div style={{
                                position: 'absolute',
                                bottom: '40px',
                                left: '-60px',
                                background: 'rgba(255, 255, 255, 0.85)',
                                backdropFilter: 'blur(20px)',
                                WebkitBackdropFilter: 'blur(20px)',
                                padding: '2rem',
                                borderRadius: '24px',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.1), inset 0 0 0 1px rgba(255, 255, 255, 0.5)',
                                zIndex: 2,
                                maxWidth: '340px',
                                border: '1px solid rgba(255, 255, 255, 0.6)',
                                animation: 'float 6s ease-in-out infinite'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    marginBottom: '1.5rem',
                                    background: 'rgba(212, 175, 55, 0.1)',
                                    padding: '0.35rem 0.85rem',
                                    borderRadius: '20px',
                                    width: 'fit-content',
                                    border: '1px solid rgba(212, 175, 55, 0.2)'
                                }}>
                                    <div style={{ width: '6px', height: '6px', background: 'var(--color-accent)', borderRadius: '50%', boxShadow: '0 0 8px var(--color-accent)' }}></div>
                                    <span style={{ fontSize: '0.7rem', fontWeight: '700', color: '#8a7018', letterSpacing: '1px', textTransform: 'uppercase' }}>Accepting New Patients</span>
                                </div>

                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <div style={{
                                        padding: '0.85rem',
                                        background: 'linear-gradient(135deg, #d4af37 0%, #f3d578 100%)',
                                        borderRadius: '50%',
                                        boxShadow: '0 8px 20px rgba(212, 175, 55, 0.3)'
                                    }}>
                                        <Star size={22} fill="white" color="white" />
                                    </div>
                                    <div>
                                        <p style={{ fontSize: '0.75rem', color: 'var(--color-text-secondary)', margin: 0, fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>Priority Access</p>
                                        <p style={{ fontSize: '1.35rem', fontWeight: '700', margin: 0, color: 'var(--color-text-primary)', fontFamily: 'var(--font-heading)' }}>Book Online</p>
                                    </div>
                                </div>

                                <p style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', marginBottom: '2rem', lineHeight: '1.6', fontWeight: '400' }}>
                                    Experience the pinnacle of dental care. Secure your consultation with our senior specialists today.
                                </p>

                                <Link to="/booking" className="btn" style={{
                                    width: '100%',
                                    padding: '1.1rem',
                                    fontSize: '1rem',
                                    justifyContent: 'center',
                                    background: 'var(--color-text-primary)',
                                    color: 'var(--color-white)',
                                    borderRadius: '14px',
                                    fontWeight: '600',
                                    letterSpacing: '0.5px',
                                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                                    textDecoration: 'none',
                                    texthover: 'var(--color-text-primary)',
                                }}>
                                    Reserve Your Slot
                                </Link>
                            </div>

                            {/* Experience Badge */}
                            <div style={{
                                position: 'absolute',
                                top: '10%',
                                right: '-30px',
                                background: 'var(--color-text-primary)',
                                color: 'white',
                                padding: '1rem 1.5rem',
                                borderRadius: '16px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                zIndex: 2,
                                animation: 'float 7s ease-in-out infinite reverse'
                            }}>
                                <span style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--color-accent)' }}>15+</span>
                                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Years</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Highlight Section */}
            <section className="section" style={{ background: 'linear-gradient(to bottom, #ffffff, #fcfcfc)' }}>
                <div className="container" ref={servicesRef}>
                    <div className="text-center mb-lg">
                        <h2 style={{ marginBottom: '1rem', fontSize: '2.5rem', fontFamily: 'var(--font-heading)' }}>Why Choose Us?</h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem', color: 'var(--color-text-secondary)' }}>We combine expertise, technology, and compassion to deliver the best dental care.</p>
                    </div>

                    <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
                        {[
                            { icon: User, title: 'Expert Team', desc: 'Led by Dr. Anitha Rao, our team of specialists ensures you receive the highest standard of care.' },
                            { icon: Activity, title: 'Advanced Tech', desc: 'Equipped with digital X-rays, intraoral cameras, and modern sterilization units for precise treatments.' },
                            { icon: Shield, title: 'Safety First', desc: 'We follow strict 4-step sterilization protocols to ensure a 100% germ-free environment.' }
                        ].map((item, index) => (
                            <div key={index} className="feature-card" style={{
                                padding: '3rem 2rem',
                                background: 'rgba(255, 255, 255, 0.8)',
                                borderRadius: '24px',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                                border: '1px solid rgba(212, 175, 55, 0.1)',
                                transition: 'all 0.4s ease',
                                position: 'relative',
                                overflow: 'hidden',
                                cursor: 'default'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-10px)';
                                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(212, 175, 55, 0.15)';
                                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
                                    e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.1)';
                                }}
                            >
                                <div style={{
                                    width: '70px',
                                    height: '70px',
                                    background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%)',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '0 auto 1.5rem auto',
                                    color: 'var(--color-accent)',
                                    border: '1px solid rgba(212, 175, 55, 0.2)',
                                    position: 'relative'
                                }}>
                                    <item.icon size={32} strokeWidth={1.5} />
                                </div>
                                <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', textAlign: 'center', fontFamily: 'var(--font-heading)' }}>{item.title}</h3>
                                <p style={{ color: 'var(--color-text-secondary)', textAlign: 'center', lineHeight: '1.6' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet the Doctor Section */}
            <section className="section bg-secondary" style={{ position: 'relative', overflow: 'hidden' }}>
                <div className="container" ref={doctorRef}>
                    <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                        <div style={{ position: 'relative' }}>
                            <div style={{
                                width: '100%',
                                height: '400px',
                                background: '#ddd',
                                borderRadius: 'var(--radius-lg)',
                                backgroundImage: 'url(https://placehold.co/600x800?text=Dr.+Anitha+Rao)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                boxShadow: 'var(--shadow-lg)'
                            }}></div>
                            <div style={{
                                position: 'absolute',
                                bottom: '-20px',
                                right: '-20px',
                                background: 'var(--color-white)',
                                padding: '1.5rem',
                                borderRadius: 'var(--radius-md)',
                                boxShadow: 'var(--shadow-md)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem'
                            }}>
                                <CheckCircle color="var(--color-accent)" size={32} />
                                <div>
                                    <h4 style={{ fontSize: '1.2rem', margin: 0 }}>10+ Years</h4>
                                    <p style={{ margin: 0, fontSize: '0.9rem' }}>Experience</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Meet Dr. Anitha Rao</h2>
                            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--color-text-secondary)' }}>
                                Dr. Anitha Rao is a leading dental specialist in Chennai, known for her gentle approach and expertise in cosmetic dentistry. She is dedicated to providing personalized care that meets the unique needs of each patient.
                            </p>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                                <li className="flex items-center gap-sm">
                                    <Star size={20} color="var(--color-accent)" fill="var(--color-accent)" />
                                    <span>MDS in Conservative Dentistry & Endodontics</span>
                                </li>
                                <li className="flex items-center gap-sm">
                                    <Star size={20} color="var(--color-accent)" fill="var(--color-accent)" />
                                    <span>Certified Implantologist</span>
                                </li>
                                <li className="flex items-center gap-sm">
                                    <Star size={20} color="var(--color-accent)" fill="var(--color-accent)" />
                                    <span>Member of Indian Dental Association</span>
                                </li>
                            </ul>
                            <Link to="/about" className="btn btn-outline">Learn More About Dr. Rao</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="section">
                <div className="container text-center" ref={testimonialsRef}>
                    <h2 style={{ marginBottom: '3rem', fontSize: '2.5rem' }}>Patient Stories</h2>
                    <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[1, 2, 3].map((i) => (
                            <div key={i} style={{
                                padding: '2rem',
                                background: 'var(--color-bg-secondary)',
                                borderRadius: 'var(--radius-lg)',
                                textAlign: 'left',
                                position: 'relative'
                            }}>
                                <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem' }}>
                                    {[...Array(5)].map((_, index) => (
                                        <Star key={index} size={16} color="var(--color-accent)" fill="var(--color-accent)" />
                                    ))}
                                </div>
                                <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--color-text-secondary)' }}>
                                    "I had a wonderful experience at T Nagar Dental. The staff was incredibly friendly, and the treatment was completely painless. Highly recommended!"
                                </p>
                                <div className="flex items-center gap-md">
                                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: '#ccc', backgroundImage: `url(https://placehold.co/100x100?text=User+${i})`, backgroundSize: 'cover' }}></div>
                                    <div>
                                        <h4 style={{ fontSize: '1rem', margin: 0 }}>Happy Patient {i}</h4>
                                        <p style={{ fontSize: '0.85rem', margin: 0, color: 'var(--color-text-secondary)' }}>Root Canal Treatment</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section" style={{ background: 'var(--gradient-gold)', color: 'var(--color-white)', padding: '5rem 0' }}>
                <div className="container text-center" ref={ctaRef}>
                    <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: '2.5rem' }}>Ready for a Brighter Smile?</h2>
                    <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.2rem', marginBottom: '2.5rem', maxWidth: '600px', marginInline: 'auto' }}>
                        Book your appointment today and take the first step towards optimal oral health.
                    </p>
                    <Link to="/booking" className="btn" style={{
                        background: 'var(--color-white)',
                        color: 'var(--color-accent)',
                        padding: '1rem 3rem',
                        fontSize: '1.1rem',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                    }}>
                        Book Now
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
