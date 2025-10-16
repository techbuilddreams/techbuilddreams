import React, {useState} from 'react';
import {
    Heart,
    CheckCircle,
    MessageSquare,
    Menu,
    X,
    Mail,
    MapPin,
    Users,
    ExternalLink
} from 'lucide-react';

const App = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const services = [
        {
            icon: "🎨",
            title: "Custom Digital Experiences",
            description: "Meticulously crafted websites, applications, and systems designed to elevate your brand and drive results.",
            features: ["Premium web platforms", "Native mobile apps", "Enterprise integrations", "Advanced analytics"]
        },
        {
            icon: "🤖",
            title: "AI Automation & Voice Agents",
            description: "Never miss a call, never lose revenue. Our AI voice agents and assistants work 24/7 to capture every opportunity and scale your business.",
            features: ["24/7 AI voice agents for calls", "Custom AI assistants for your workflow", "Automated lead capture & follow-up", "Increase revenue by eliminating missed opportunities"]
        },
        {
            icon: "🛡️",
            title: "Strategic Partnership",
            description: "Ongoing technology leadership and support that evolves with your business ambitions.",
            features: ["Proactive monitoring", "Strategic consulting", "Scalability planning", "Executive support"]
        }
    ];

    const values = [
        {
            icon: "✨",
            title: "Premium Craftsmanship",
            description: "Beautiful, powerful technology built to excellence"
        },
        {
            icon: "🌎",
            title: "Bilingual Excellence",
            description: "World-class service in English & Spanish"
        },
        {
            icon: "🤝",
            title: "Partnership Approach",
            description: "We hold your hand from vision to reality"
        },
        {
            icon: "🚀",
            title: "Scalable Innovation",
            description: "Technology investments that grow with you"
        }
    ];

    const customers = [
        {
            name: "Elysi",
            url: "https://elysi.app",
            description: "Mobile app landing page showcasing an innovative iOS/Android application available in the App Store",
            category: "Mobile App"
        },
        {
            name: "Tabla Jaladora",
            url: "https://tablajaladora.com",
            description: "Mobile app landing page for a dynamic iOS/Android application featured in the App Store",
            category: "Mobile App"
        },
        {
            name: "Shender Ramos",
            url: "https://shenderramos.com",
            description: "Personal blog featuring insights, thoughts, and creative content",
            category: "Personal Blog"
        }
    ];

    const processSteps = [
        {
            step: "1",
            title: "Discovery & Vision",
            description: "We dive deep into your goals, challenges, and market opportunities to craft the perfect strategy."
        },
        {
            step: "2",
            title: "Strategic Design",
            description: "Architect a solution that aligns with your vision and positions you for sustainable growth."
        },
        {
            step: "3",
            title: "Expert Execution",
            description: "Build exceptional technology with transparent progress tracking and regular milestone deliveries."
        },
        {
            step: "4",
            title: "Continued Success",
            description: "Launch with confidence and ongoing partnership to ensure your technology evolves with your ambitions."
        }
    ];


    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.message) {
            setSubmitStatus('Please fill in all required fields.');
            return;
        }

        setIsSubmitting(true);

        try {
// Create mailto link with form data
            const subject = encodeURIComponent(`New Project Inquiry from ${formData.name}`);
            const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}

Project Details:
${formData.message}

---
Sent from TechBuildDreams.com contact form
`);

            const mailtoLink = `mailto:info@techbuilddreams.com?subject=${subject}&body=${body}`;
            window.location.href = mailtoLink;

            setSubmitStatus('Email client opened! If it didn\'t open automatically, please email us directly at info@techbuilddreams.com');

// Clear form
            setFormData({
                name: '',
                email: '',
                message: ''
            });

        } catch (error) {
            setSubmitStatus('Please email us directly at info@techbuilddreams.com');
        }

        setIsSubmitting(false);
    };

    return (
        <div className="min-h-screen bg-white">

            {/* Navigation */}
            <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-24 md:h-32">
                        <div className="flex items-center">
                            <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="cursor-pointer">
                                <img src="/logo.png" alt="Tech Build Dreams LLC" className="h-20 md:h-28" />
                            </a>
                        </div>

                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#how-we-help" className="text-gray-600 hover:text-gray-900 font-medium">
                                How We Help
                            </a>
                            <a href="#customers" className="text-gray-600 hover:text-gray-900 font-medium">
                                Our Work
                            </a>
                            <a href="#our-process" className="text-gray-600 hover:text-gray-900 font-medium">
                                Our Process
                            </a>
                            <a href="#about" className="text-gray-600 hover:text-gray-900 font-medium">
                                About Us
                            </a>
                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                                className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 font-medium">
                                Let's Talk
                            </button>
                        </div>

                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                                {isMenuOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
                            </button>
                        </div>
                    </div>
                </div>

                {isMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-100">
                        <div className="px-4 py-4 space-y-3">
                            <a href="#how-we-help" className="block text-gray-600 font-medium">How We Help</a>
                            <a href="#customers" className="block text-gray-600 font-medium">Our Work</a>
                            <a href="#our-process" className="block text-gray-600 font-medium">Our Process</a>
                            <a href="#about" className="block text-gray-600 font-medium">About Us</a>
                            <button
                                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                                className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium">Let's Talk
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="pt-20 pb-20 bg-gradient-to-b from-blue-50 to-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="mb-8">
<span className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
<Heart className="w-4 h-4 mr-2"/>
Tech Build Dreams LLC
</span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                        Technology That
                        <span className="block text-blue-600">
Builds Dreams
</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                        We craft exceptional technology experiences that empower businesses to achieve their vision.
                        From startups to enterprise - <strong>your dream is our mission</strong>.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                            className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
                        >
                            <MessageSquare className="w-5 h-5 mr-2"/>
                            Let's Build Your Dream
                        </button>
                        <a
                            href="mailto:info@techbuilddreams.com"
                            className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-blue-500 hover:text-blue-600 transition-colors duration-300 flex items-center justify-center"
                        >
                            <Mail className="w-5 h-5 mr-2"/>
                            info@techbuilddreams.com
                        </a>
                    </div>

                    {/* Values */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {values.map((value, index) => (
                            <div key={index} className="text-center p-4">
                                <div className="text-3xl mb-2">{value.icon}</div>
                                <div className="font-semibold text-gray-900 text-sm mb-1">{value.title}</div>
                                <div className="text-gray-600 text-xs">{value.description}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            {/* How We Help Section */}
            <section id="how-we-help" className="py-20 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            How We Help Your Business Grow
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Exceptional technology solutions crafted for visionaries ready to transform their industries.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div key={index}
                                 className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                                <div className="text-5xl mb-6 text-center">{service.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{service.title}</h3>
                                <p className="text-gray-600 mb-6 text-center leading-relaxed">{service.description}</p>

                                <ul className="space-y-3">
                                    {service.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start text-gray-600">
                                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5"/>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Customers Section */}
            <section id="customers" className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Our Work in Action
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Discover the exceptional digital experiences we've crafted for visionary clients who trusted us to bring their dreams to life.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {customers.map((customer, index) => (
                            <div key={index}
                                 className="group bg-gradient-to-br from-blue-50 to-white p-8 rounded-xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                                        {customer.category}
                                    </span>
                                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                                </div>

                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                    {customer.name}
                                </h3>
                                
                                <p className="text-gray-600 mb-6 leading-relaxed">
                                    {customer.description}
                                </p>

                                <a
                                    href={customer.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-300"
                                >
                                    Visit Site
                                    <ExternalLink className="w-4 h-4 ml-2" />
                                </a>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-gray-600 mb-6">
                            Ready to see your vision become the next success story?
                        </p>
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                            className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300 inline-flex items-center"
                        >
                            <MessageSquare className="w-5 h-5 mr-2" />
                            Start Your Project
                        </button>
                    </div>
                </div>
            </section>

            {/* Our Process Section */}
            <section id="our-process" className="py-20 bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            How We Work Together
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            A refined process built on trust, transparency, and exceptional results.
                            Strategic partnership from vision to victory.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {processSteps.map((step, index) => (
                            <div key={index} className="text-center">
                                <div
                                    className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                                    {step.step}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Why We Started Tech Build Dreams
                    </h2>
                    <div className="bg-white rounded-xl p-8 shadow-sm">
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            Founded on the belief that exceptional technology should be <strong>accessible to visionaries</strong> at every level.
                            As a Latino software engineer with 10 years of experience and dual degrees in Computer Science
                            and IT, I've witnessed how the right technology partnership can transform any dream into reality.
                        </p>

                        <blockquote className="border-l-4 border-blue-600 pl-6 italic text-gray-700 mb-8 text-left">
                            "Technology advances have created unprecedented opportunities for those with vision and determination.
                            Tech Build Dreams exists to be your trusted partner - ensuring your ideas get the world-class technology
                            foundation they deserve, regardless of where you're starting from."
                        </blockquote>

                        <div className="grid md:grid-cols-3 gap-6 text-center">
                            <div>
                                <div className="text-2xl font-bold text-blue-600 mb-1">10+</div>
                                <div className="text-gray-600 text-sm">Years Experience</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-blue-600 mb-1">2</div>
                                <div className="text-gray-600 text-sm">Tech Degrees</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-blue-600 mb-1">🌎</div>
                                <div className="text-gray-600 text-sm">English & Spanish</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Ready to Start Your Project?
                        </h2>
                        <p className="text-lg text-gray-600">
                            Tell us about your dream and we'll respond within 24 hours with next steps.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">Get In Touch</h3>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center">
                                    <div className="bg-blue-100 rounded-lg p-2 mr-3">
                                        <Mail className="w-5 h-5 text-blue-600"/>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">info@techbuilddreams.com</p>
                                        <p className="text-gray-600 text-sm">We respond within 24 hours</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="bg-green-100 rounded-lg p-2 mr-3">
                                        <Users className="w-5 h-5 text-green-600"/>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">English & Spanish</p>
                                        <p className="text-gray-600 text-sm">Bilingual support available</p>
                                    </div>
                                </div>

                                <div className="flex items-center">
                                    <div className="bg-purple-100 rounded-lg p-2 mr-3">
                                        <MapPin className="w-5 h-5 text-purple-600"/>
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">Miami, Florida</p>
                                        <p className="text-gray-600 text-sm">Local team, global solutions</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-50 rounded-lg p-6">
                                <h4 className="font-semibold text-gray-900 mb-3">💡 What to Share:</h4>
                                <ul className="space-y-2 text-gray-600 text-sm">
                                    <li className="flex items-center">
                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2"/>
                                        Your vision and business objectives
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2"/>
                                        Current challenges or growth opportunities
                                    </li>
                                    <li className="flex items-center">
                                        <CheckCircle className="w-4 h-4 text-green-500 mr-2"/>
                                        Timeline and investment parameters
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Simple Contact Form */}
                        <div className="bg-blue-50 rounded-xl p-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>

                            {submitStatus && (
                                <div className={`mb-6 p-4 rounded-lg ${
                                    submitStatus.includes('opened')
                                        ? 'bg-green-100 text-green-800 border border-green-200'
                                        : 'bg-red-100 text-red-800 border border-red-200'
                                }`}>
                                    {submitStatus}
                                </div>
                            )}

                            <form onSubmit={handleFormSubmit} className="space-y-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Your Name *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="What should we call you?"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Tell Us About Your Project *
                                    </label>
                                    <textarea
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Tell us about your vision and goals. What challenges are you facing? What opportunities do you want to capitalize on? We'll handle the technical strategy."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <MessageSquare className="w-5 h-5 mr-2" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-blue-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Build Your Dream?
                    </h2>
                    <p className="text-xl text-blue-100 mb-10">
                        Partner with us to transform your vision into exceptional technology that creates lasting competitive advantages.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
                            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 hover:scale-105
transition-all duration-300 flex items-center justify-center"
                        >
                            <MessageSquare className="w-5 h-5 mr-2"/>
                            Get Started Today
                        </button>
                        <a
                            href="mailto:info@techbuilddreams.com"
                            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white
hover:text-blue-600 transition-colors duration-300 flex items-center justify-center"
                        >
                            <Mail className="w-5 h-5 mr-2"/>
                            Email Directly
                        </a>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div>
                            <h3 className="font-semibold text-white mb-2">Quick Response</h3>
                            <p className="text-blue-100">We respond within 24 hours</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-2">Transparent Process</h3>
                            <p className="text-blue-100">Clear timelines and milestones</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-white mb-2">Proven Results</h3>
                            <p className="text-blue-100">10 years of successful projects</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="md:col-span-2">
                            <div className="mb-4">
                                <a href="#" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="cursor-pointer inline-block">
                                    <img src="/logo.png" alt="Tech Build Dreams LLC" className="h-20 md:h-28" />
                                </a>
                            </div>
                            <p className="text-gray-400 mb-6 max-w-md">
                                Technology solutions company helping businesses build their dreams through
                                modern full-stack development, mobile solutions, and AI integration.
                            </p>
                            <div className="text-gray-400">
                                <p>📧 info@techbuilddreams.com</p>
                                <p>🌐 Available in English & Spanish</p>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-4">Services</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>Full-Stack Development</li>
                                <li>Mobile Solutions</li>
                                <li>AI Voice Agents & Automation</li>
                                <li>Cloud Infrastructure</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-4">Technologies</h3>
                            <ul className="space-y-2 text-gray-400">
                                <li>React & Spring Boot</li>
                                <li>Swift & Flutter</li>
                                <li>AWS & PostgreSQL</li>
                                <li>OpenAI & RevenueCat</li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                        <p>&copy; 2025 Tech Build Dreams LLC. Building technology that builds dreams.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;