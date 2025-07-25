import React, { useState, useEffect, useRef } from 'react';
import {
Code2,
Smartphone,
Globe,
Brain,
Server,
Star,
ArrowRight,
CheckCircle,
Zap,
Database,
Rocket,
Users,
BarChart3,
MessageSquare,
Menu,
X,
ExternalLink,
GraduationCap,
Languages,
Award,
Building2,
DollarSign,
Cloud
} from 'lucide-react';
import './animations.css';

const App = () => {
const [isMenuOpen, setIsMenuOpen] = useState(false);
const [activeService, setActiveService] = useState(0);
const [isVisible, setIsVisible] = useState<{[key: string]: boolean}>({});
const [scrollY, setScrollY] = useState(0);
const [animatedStats, setAnimatedStats] = useState({ experience: 0, degrees: 0, success: 0 });
const [hasAnimatedStats, setHasAnimatedStats] = useState(false);
const [formData, setFormData] = useState({
name: '',
email: '',
company: '',
projectType: '',
budget: '',
timeline: '',
message: ''
});
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitStatus, setSubmitStatus] = useState('');
const observerRef = useRef<IntersectionObserver>();
const statsRef = useRef<HTMLDivElement>(null);

const services = [
{
icon: <Code2 className="w-12 h-12"/>,
title: "Full-Stack Development",
subtitle: "Complete web solutions from frontend to backend",
description: "Custom React SaaS platforms powered by Spring Boot REST APIs. Built for scale, performance, and user experience.",
tech: ["React", "Spring Boot", "PostgreSQL", "AWS"],
deliverables: ["Custom SaaS Platforms", "REST API Development", "Database Architecture", "CI/CD Pipelines"],
timeline: "8-16 weeks"
},
{
icon: <Smartphone className="w-12 h-12"/>,
title: "Mobile Solutions",
subtitle: "Native iOS and cross-platform mobile apps",
description: "From Swift/Objective-C native iOS apps to Flutter cross-platform solutions with complete monetization integration.",
tech: ["Swift", "Objective-C", "Flutter", "RevenueCat"],
deliverables: ["Native iOS Apps", "Cross-Platform Apps", "In-App Purchases", "AdMob Integration"],
timeline: "6-12 weeks"
},
{
icon: <Brain className="w-12 h-12"/>,
title: "AI Integration",
subtitle: "Intelligent features powered by modern AI",
description: "OpenAI API integration to add smart automation, content generation, and intelligent user experiences to your applications.",
tech: ["OpenAI APIs", "Custom AI Solutions", "Automation", "Analytics"],
deliverables: ["AI-Powered Features", "Smart Automation", "Content Generation", "Intelligent Analytics"],
timeline: "4-8 weeks"
},
{
icon: <Cloud className="w-12 h-12"/>,
title: "Infrastructure & DevOps",
subtitle: "Scalable cloud infrastructure and deployment",
description: "AWS-powered infrastructure with automated deployment pipelines. From development to production, seamlessly scaled.",
tech: ["AWS", "CI/CD", "PostgreSQL", "Firebase"],
deliverables: ["Cloud Infrastructure", "Automated Deployments", "Database Management", "Performance Monitoring"],
timeline: "2-6 weeks"
}
];

const credentials = [
{
icon: <GraduationCap className="w-6 h-6"/>,
title: "Dual Degrees",
description: "Computer Science & Information Technology"
},
{
icon: <Award className="w-6 h-6"/>,
title: "10 Years Experience",
description: "Software Engineering Professional"
},
{
icon: <Languages className="w-6 h-6"/>,
title: "Bilingual",
description: "English & Spanish"
},
{
icon: <Building2 className="w-6 h-6"/>,
title: "Tech Build Dreams LLC",
description: "Established Technology Company"
}
];

const techStack = [
{ category: "Frontend", techs: ["React", "Flutter", "Swift"], color: "from-blue-500 to-cyan-500" },
{ category: "Backend", techs: ["Spring Boot", "Java", "REST APIs"], color: "from-green-500 to-emerald-500" },
{ category: "Database", techs: ["PostgreSQL", "Firebase"], color: "from-purple-500 to-violet-500" },
{ category: "Cloud & AI", techs: ["AWS", "OpenAI APIs", "RevenueCat"], color: "from-orange-500 to-red-500" }
];

const processSteps = [
{
step: "01",
title: "Discovery & Strategy",
description: "We understand your business goals, technical requirements, and success metrics.",
duration: "1-2 weeks"
},
{
step: "02",
title: "Architecture & Design",
description: "Complete technical architecture planning with modern design and user experience focus.",
duration: "1-3 weeks"
},
{
step: "03",
title: "Development & Integration",
description: "Full-stack development with regular updates and milestone deliveries.",
duration: "6-12 weeks"
},
{
step: "04",
title: "Deployment & Growth",
description: "AWS deployment with CI/CD pipelines, monitoring, and ongoing optimization.",
duration: "1-2 weeks"
}
];

// Intersection Observer for animations
useEffect(() => {
observerRef.current = new IntersectionObserver(
(entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));

// Animate stats when they come into view
if (entry.target.id === 'stats' && !hasAnimatedStats) {
setHasAnimatedStats(true);
animateStats();
}
}
});
},
{ threshold: 0.1 }
);

// Observe all sections
const sections = document.querySelectorAll('section[id], div[id]');
sections.forEach(section => {
if (observerRef.current) {
observerRef.current.observe(section);
}
});

return () => {
if (observerRef.current) {
observerRef.current.disconnect();
}
};
}, [hasAnimatedStats]);

// Scroll effect for parallax
useEffect(() => {
const handleScroll = () => setScrollY(window.scrollY);
window.addEventListener('scroll', handleScroll);
return () => window.removeEventListener('scroll', handleScroll);
}, []);

// Service rotation
useEffect(() => {
const interval = setInterval(() => {
setActiveService((prev) => (prev + 1) % services.length);
}, 6000);
return () => clearInterval(interval);
}, [services.length]);

// Animate stats function
const animateStats = () => {
const duration = 2000; // 2 seconds
const frameRate = 60;
const totalFrames = (duration / 1000) * frameRate;
let frame = 0;

const animate = () => {
frame++;
const progress = frame / totalFrames;
const easeOut = 1 - Math.pow(1 - progress, 3);

setAnimatedStats({
experience: Math.round(easeOut * 10),
degrees: Math.round(easeOut * 2),
success: Math.round(easeOut * 100)
});

if (frame < totalFrames) {
requestAnimationFrame(animate);
}
};

requestAnimationFrame(animate);
};

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
Company: ${formData.company || 'Not specified'}
Project Type: ${formData.projectType || 'Not specified'}
Budget Range: ${formData.budget || 'Not specified'}
Timeline: ${formData.timeline || 'Not specified'}

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
company: '',
projectType: '',
budget: '',
timeline: '',
message: ''
});

} catch (error) {
setSubmitStatus('Please email us directly at info@techbuilddreams.com');
}

setIsSubmitting(false);
};

return (
<div className="min-h-screen bg-white overflow-hidden">

{/* Navigation */}
<nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 sticky top-0 z-50 transition-all duration-300 hover:shadow-lg">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center">
<div className="text-2xl font-bold text-gray-900">
Tech<span className="text-blue-600">Build</span>Dreams
<span className="text-xs text-gray-500 ml-2 font-normal">LLC</span>
</div>
</div>

<div className="hidden md:flex items-center space-x-8">
<a href="#services" className="nav-link text-gray-600 hover:text-gray-900 transition-all duration-300 font-medium relative group">
Services
<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
</a>
<a href="#process" className="nav-link text-gray-600 hover:text-gray-900 transition-all duration-300 font-medium relative group">
Process
<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
</a>
<a href="#about" className="nav-link text-gray-600 hover:text-gray-900 transition-all duration-300 font-medium relative group">
About
<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
</a>
<a href="#contact" className="nav-link text-gray-600 hover:text-gray-900 transition-all duration-300 font-medium relative group">
Contact
<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
</a>
<button 
onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 hover:scale-105 transition-all duration-300 font-medium shadow-lg hover:shadow-xl animate-glow">
Get Quote
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
<a href="#services" className="block text-gray-600 font-medium">Services</a>
<a href="#process" className="block text-gray-600 font-medium">Process</a>
<a href="#about" className="block text-gray-600 font-medium">About</a>
<a href="#contact" className="block text-gray-600 font-medium">Contact</a>
<button 
onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium">Get Quote</button>
</div>
</div>
)}
</nav>

{/* Hero Section */}
<section className="pt-16 pb-24 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
{/* Animated background particles */}
<div className="absolute inset-0 overflow-hidden">
<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
<div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
<div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
</div>
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="text-center max-w-4xl mx-auto">
<div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-bounce-in">
<Building2 className="w-4 h-4 mr-2"/>
Tech Build Dreams LLC • Established Technology Solutions
</div>

<h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up">
Technology That
<span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
Builds Dreams
</span>
</h1>

<p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed animate-fade-in-up animation-delay-300">
Full-stack development company making enterprise-level technology accessible to businesses of all sizes.
From simple websites to complex AI solutions - we believe every business deserves the tools to succeed.
</p>

<div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up animation-delay-600">
<button
onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
className="bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 hover:scale-105 hover:shadow-xl
transition-all duration-300 flex items-center justify-center group relative overflow-hidden"
>
<span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
<Rocket className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300 relative z-10"/>
<span className="relative z-10">Start Your Project</span>
</button>
<button
onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold
hover:border-blue-500 hover:text-blue-600 hover:bg-blue-50 hover:scale-105 transition-all duration-300 flex items-center justify-center group"
>
<MessageSquare className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300"/>
Get In Touch
</button>
</div>

{/* Credentials Bar */}
<div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up animation-delay-900">
{credentials.map((cred, index) => (
<div key={index} className="text-center group hover:scale-105 transition-all duration-300 p-4 rounded-xl hover:bg-white/50 hover:shadow-lg">
<div className="text-blue-600 mb-2 flex justify-center group-hover:scale-110 transition-transform duration-300">
{cred.icon}
</div>
<div className="font-semibold text-gray-900 text-sm">{cred.title}</div>
<div className="text-gray-600 text-xs">{cred.description}</div>
</div>
))}
</div>
</div>
</div>
</section>

{/* Tech Stack Overview */}
<section id="tech-stack" className="py-16 bg-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-12">
<h2 className="text-3xl font-bold text-gray-900 mb-4">
Complete Technology Stack
</h2>
<p className="text-lg text-gray-600">
10 years of expertise across the full development spectrum
</p>
</div>

<div className={`grid md:grid-cols-4 gap-6 transition-all duration-1000 ${isVisible['tech-stack'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
{techStack.map((stack, index) => (
<div key={index} className="text-center group hover:scale-105 transition-all duration-500 p-6 rounded-xl hover:bg-gray-50 hover:shadow-lg" style={{animationDelay: `${index * 200}ms`}}>
<div className={`h-2 w-16 mx-auto mb-4 bg-gradient-to-r ${stack.color} rounded-full transition-all duration-500 group-hover:w-20 group-hover:h-3`}></div>
<h3 className="font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{stack.category}</h3>
<div className="space-y-2">
{stack.techs.map((tech, techIndex) => (
<div key={techIndex} className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300 tech-badge px-2 py-1 rounded hover:bg-blue-100">{tech}</div>
))}
</div>
</div>
))}
</div>
</div>
</section>

{/* Services Section */}
<section id="services" className="py-24 bg-gray-50">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
Comprehensive Development Services
</h2>
<p className="text-xl text-gray-600 max-w-3xl mx-auto">
From concept to deployment, we build complete technology solutions that scale with your business
growth.
</p>
</div>

<div className="space-y-12">
{services.map((service, index) => (
<div key={index} className={`service-card grid md:grid-cols-2 gap-12 items-center p-8 rounded-2xl hover:bg-white hover:shadow-2xl transition-all duration-500 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
<div className={index % 2 === 1 ? 'md:order-2' : ''}>
<div className="text-blue-600 mb-4 animate-float">
{service.icon}
</div>
<h3 className="text-3xl font-bold text-gray-900 mb-2">{service.title}</h3>
<p className="text-lg text-blue-600 mb-4 font-medium">{service.subtitle}</p>
<p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

<div className="mb-6">
<h4 className="font-semibold text-gray-900 mb-3">Technology Stack:</h4>
<div className="flex flex-wrap gap-2">
{service.tech.map((tech, techIndex) => (
<span key={techIndex}
className="tech-badge bg-white border border-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 transition-all duration-300">
{tech}
</span>
))}
</div>
</div>

<div className="mb-6">
<h4 className="font-semibold text-gray-900 mb-3">Key Deliverables:</h4>
<ul className="space-y-2">
{service.deliverables.map((deliverable, delIndex) => (
<li key={delIndex} className="flex items-center text-gray-600">
<CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0"/>
{deliverable}
</li>
))}
</ul>
</div>

<div className="flex items-center text-blue-600 font-medium">
<span className="mr-2">Timeline: {service.timeline}</span>
<ArrowRight className="w-4 h-4"/>
</div>
</div>

<div className={`bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group ${index % 2 === 1 ? 'md:order-1' : ''}`}>
<div className="aspect-square bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-500 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="text-6xl animate-float relative z-10">
{index === 0 && '💻'}
{index === 1 && '📱'}
{index === 2 && '🤖'}
{index === 3 && '☁️'}
</div>
</div>
</div>
</div>
))}
</div>
</div>
</section>

{/* Process Section */}
<section id="process" className="py-24 bg-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-4xl font-bold text-gray-900 mb-6">
Our Development Process
</h2>
<p className="text-xl text-gray-600">
Proven methodology refined over 10 years of software engineering
</p>
</div>

<div className="grid md:grid-cols-4 gap-8">
{processSteps.map((step, index) => (
<div key={index} className="text-center process-step group">
<div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 group-hover:bg-purple-600 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
{step.step}
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">{step.title}</h3>
<p className="text-gray-600 mb-4 group-hover:text-gray-800 transition-colors duration-300">{step.description}</p>
<div className="text-blue-600 font-medium text-sm group-hover:text-purple-600 transition-colors duration-300">{step.duration}</div>
</div>
))}
</div>
</div>
</section>

{/* About Section */}
<section id="about" className="py-24 bg-gray-50">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-4xl font-bold text-gray-900 mb-6">
Why Tech Build Dreams?
</h2>
<p className="text-lg text-gray-600 mb-8 leading-relaxed">
Founded on the belief that technology should empower <strong>everyone</strong> to build their dreams.
Growing up in a Latino family in Massachusetts, I earned dual degrees in Computer Science
and Information Technology from Northern Essex Community College. With 10 years of experience,
I've seen how the right technology can transform businesses and change lives - but access shouldn't
depend on the size of your budget.
</p>

<div className="space-y-6 mb-8">
<div className="flex items-start">
<div className="bg-blue-600 rounded-lg p-2 mr-4 mt-1">
<Code2 className="w-5 h-5 text-white"/>
</div>
<div>
<h3 className="font-semibold text-gray-900 mb-1">Full-Stack Expertise</h3>
<p className="text-gray-600">From React frontends to Spring Boot APIs, native iOS to Flutter
cross-platform solutions.</p>
</div>
</div>

<div className="flex items-start">
<div className="bg-green-600 rounded-lg p-2 mr-4 mt-1">
<Brain className="w-5 h-5 text-white"/>
</div>
<div>
<h3 className="font-semibold text-gray-900 mb-1">AI Integration</h3>
<p className="text-gray-600">OpenAI API integration to add intelligent features that set
your product apart.</p>
</div>
</div>

<div className="flex items-start">
<div className="bg-purple-600 rounded-lg p-2 mr-4 mt-1">
<Users className="w-5 h-5 text-white"/>
</div>
<div>
<h3 className="font-semibold text-gray-900 mb-1">Accessible & Affordable</h3>
<p className="text-gray-600">Budget-friendly solutions starting under $1K. Quality technology
shouldn't be limited to big corporations.</p>
</div>
</div>
</div>

<blockquote className="border-l-4 border-blue-600 pl-6 italic text-gray-600 mb-8">
"Technology has the power to level the playing field. Every business, regardless of size,
deserves access to solutions that can transform their operations and accelerate their dreams.
That's why Tech Build Dreams exists - to be the bridge between powerful technology and
the businesses that need it most."
</blockquote>

<div id="stats" className="flex items-center space-x-6" ref={statsRef}>
<div className="text-center group hover:scale-110 transition-all duration-300">
<div className="text-2xl font-bold text-blue-600 counter group-hover:text-purple-600 transition-colors duration-300">{animatedStats.experience}+</div>
<div className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">Years Experience</div>
</div>
<div className="text-center group hover:scale-110 transition-all duration-300">
<div className="text-2xl font-bold text-blue-600 counter group-hover:text-purple-600 transition-colors duration-300">{animatedStats.degrees}</div>
<div className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">Tech Degrees</div>
</div>
<div className="text-center group hover:scale-110 transition-all duration-300">
<div className="text-2xl font-bold text-blue-600 counter group-hover:text-purple-600 transition-colors duration-300">{animatedStats.success}%</div>
<div className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">Client Success</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 shadow-lg">
<div className="mb-8">
<h3 className="text-xl font-semibold text-gray-900 mb-4">Education & Background</h3>
<div className="space-y-4">
<div className="flex items-center">
<GraduationCap className="w-5 h-5 text-blue-600 mr-3"/>
<div>
<div className="font-medium text-gray-900">Computer Science Degree</div>
<div className="text-gray-600 text-sm">Northern Essex Community College</div>
</div>
</div>
<div className="flex items-center">
<GraduationCap className="w-5 h-5 text-blue-600 mr-3"/>
<div>
<div className="font-medium text-gray-900">Information Technology Degree</div>
<div className="text-gray-600 text-sm">Northern Essex Community College</div>
</div>
</div>
<div className="flex items-center">
<Languages className="w-5 h-5 text-blue-600 mr-3"/>
<div>
<div className="font-medium text-gray-900">Bilingual Services</div>
<div className="text-gray-600 text-sm">English & Spanish</div>
</div>
</div>
</div>
</div>

<div>
<h3 className="text-xl font-semibold text-gray-900 mb-4">Core Technologies</h3>
<div className="grid grid-cols-2 gap-3">
{["Java", "Spring Boot", "React", "Swift", "Flutter", "PostgreSQL", "AWS", "OpenAI"].map((tech, index) => (
<div key={index}
className="bg-gray-50 text-gray-700 px-3 py-2 rounded-lg text-sm font-medium text-center hover:bg-blue-100 hover:text-blue-700 transition-colors duration-300">
{tech}
</div>
))}
</div>
</div>
</div>
</div>
</div>
</section>

{/* Contact Section */}
<section id="contact" className="py-24 bg-white">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
Let's Build Your Dream Together
</h2>
<p className="text-xl text-gray-600">
Share your project details and we'll get back to you within 24 hours with a detailed proposal.
</p>
</div>

<div className="grid md:grid-cols-2 gap-12">
{/* Contact Info */}
<div>
<h3 className="text-2xl font-semibold text-gray-900 mb-6">Get In Touch</h3>

<div className="space-y-6">
<div className="flex items-start">
<div className="bg-blue-100 rounded-lg p-3 mr-4">
<MessageSquare className="w-6 h-6 text-blue-600"/>
</div>
<div>
<h4 className="font-semibold text-gray-900 mb-1">Email Us</h4>
<p className="text-gray-600 mb-2">We typically respond within 24 hours</p>
<a href="mailto:info@techbuilddreams.com"
className="text-blue-600 hover:text-blue-700 font-medium">
info@techbuilddreams.com
</a>
</div>
</div>

<div className="flex items-start">
<div className="bg-green-100 rounded-lg p-3 mr-4">
<Languages className="w-6 h-6 text-green-600"/>
</div>
<div>
<h4 className="font-semibold text-gray-900 mb-1">Bilingual Support</h4>
<p className="text-gray-600">Available in English & Spanish</p>
</div>
</div>

<div className="flex items-start">
<div className="bg-purple-100 rounded-lg p-3 mr-4">
<Building2 className="w-6 h-6 text-purple-600"/>
</div>
<div>
<h4 className="font-semibold text-gray-900 mb-1">Tech Build Dreams LLC</h4>
<p className="text-gray-600">Established Technology Solutions Company</p>
</div>
</div>
</div>

<div className="mt-8 p-6 bg-gray-50 rounded-xl">
<h4 className="font-semibold text-gray-900 mb-3">What to Include in Your Message:</h4>
<ul className="space-y-2 text-gray-600">
<li className="flex items-center">
<CheckCircle className="w-4 h-4 text-green-500 mr-2"/>
Project overview and goals
</li>
<li className="flex items-center">
<CheckCircle className="w-4 h-4 text-green-500 mr-2"/>
Timeline expectations
</li>
<li className="flex items-center">
<CheckCircle className="w-4 h-4 text-green-500 mr-2"/>
Budget range (if known)
</li>
<li className="flex items-center">
<CheckCircle className="w-4 h-4 text-green-500 mr-2"/>
Technology preferences
</li>
</ul>
</div>
</div>

{/* Contact Form */}
<div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
<h3 className="text-xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>

{submitStatus && (
<div className={`mb-6 p-4 rounded-lg ${
submitStatus.includes('success')
? 'bg-green-100 text-green-800 border border-green-200'
: 'bg-red-100 text-red-800 border border-red-200'
}`}>
{submitStatus}
</div>
)}

<form onSubmit={handleFormSubmit} className="space-y-6">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">
Name *
</label>
<input
type="text"
required
value={formData.name}
onChange={(e) => setFormData({...formData, name: e.target.value})}
className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
placeholder="Your name"
/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">
Email *
</label>
<input
type="email"
required
value={formData.email}
onChange={(e) => setFormData({...formData, email: e.target.value})}
className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
placeholder="your@email.com"
/>
</div>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-2">
Company
</label>
<input
type="text"
value={formData.company}
onChange={(e) => setFormData({...formData, company: e.target.value})}
className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
placeholder="Your company name"
/>
</div>

<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">
Project Type
</label>
<select
value={formData.projectType}
onChange={(e) => setFormData({...formData, projectType: e.target.value})}
className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
>
<option value="">Select type</option>
<option value="web-app">Web Application</option>
<option value="mobile-app">Mobile App</option>
<option value="full-stack">Full-Stack Solution</option>
<option value="ai-integration">AI Integration</option>
<option value="consulting">Consulting</option>
<option value="other">Other</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2">
Budget Range
</label>
<select
value={formData.budget}
onChange={(e) => setFormData({...formData, budget: e.target.value})}
className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
>
<option value="">Select range</option>
<option value="under-1k">Under $1K</option>
<option value="1k-3k">$1K - $3K</option>
<option value="3k-5k">$3K - $5K</option>
<option value="5k-10k">$5K - $10K</option>
<option value="10k-25k">$10K - $25K</option>
<option value="25k-plus">$25K+</option>
<option value="discuss">Let's Discuss</option>
</select>
</div>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-2">
Timeline
</label>
<select
value={formData.timeline}
onChange={(e) => setFormData({...formData, timeline: e.target.value})}
className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
>
<option value="">Select timeline</option>
<option value="asap">ASAP</option>
<option value="1-3-months">1-3 months</option>
<option value="3-6-months">3-6 months</option>
<option value="6-12-months">6-12 months</option>
<option value="flexible">Flexible</option>
</select>
</div>

<div>
<label className="block text-sm font-medium text-gray-700 mb-2">
Project Details *
</label>
<textarea
required
rows={5}
value={formData.message}
onChange={(e) => setFormData({...formData, message: e.target.value})}
className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
placeholder="Tell us about your project goals, requirements, and any specific technologies you have in mind..."
/>
</div>

<button
type="submit"
disabled={isSubmitting}
className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 hover:scale-105
transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center group relative overflow-hidden"
>
<span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
{isSubmitting ? (
<>
<div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2 relative z-10"></div>
<span className="relative z-10">Sending...</span>
</>
) : (
<>
<MessageSquare className="w-5 h-5 mr-2 relative z-10" />
<span className="relative z-10">Send Message</span>
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
Let's discuss how we can turn your vision into scalable technology solutions that drive real
business growth.
</p>

<div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
<button
onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 hover:scale-105
transition-all duration-300 flex items-center justify-center"
>
<MessageSquare className="w-5 h-5 mr-2" />
Get Started Today
</button>
<a
href="mailto:info@techbuilddreams.com"
className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white
hover:text-blue-600 hover:scale-105 transition-all duration-300 flex items-center justify-center"
>
<ExternalLink className="w-5 h-5 mr-2" />
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
<div className="text-2xl font-bold mb-4">
Tech<span className="text-blue-400">Build</span>Dreams
<span className="text-sm text-gray-400 ml-2 font-normal">LLC</span>
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
<li>AI Integration</li>
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