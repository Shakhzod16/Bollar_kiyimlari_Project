import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

// ✅ Logo (assets)
import logo from '/src/assets/Шоев Шайхруз лого.png';

const Header = () => {
	const { t } = useLanguage();
	const location = useLocation();
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => setIsScrolled(window.scrollY > 20);
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		setIsMenuOpen(false);
	}, [location.pathname]);

	const navLinks = [
		{ to: '/', label: t('nav.home') },
		{ to: '/products', label: t('nav.products') },
		{ to: '/marketplace', label: t('nav.marketplace') }, // ✅ to‘g‘ri key + route
		{ to: '/about', label: t('nav.about') },
		{ to: '/contact', label: t('nav.contact') },
	];

	const isActive = (path: string) => location.pathname === path;

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
				isScrolled ? 'bg-background/95 backdrop-blur-md shadow-soft' : 'bg-transparent'
			}`}>
			<div className='container-custom'>
				<div className='flex items-center justify-between h-20'>
					{/* ✅ Logo Image */}
					<Link to='/' className='flex items-center'>
						<div className='flex items-center justify-center h-16 md:h-20'>
							<img
								src={logo}
								alt='Maftuna Atelier'
								className='h-full w-auto object-contain scale-110'
								loading='eager'
								draggable={false}
							/>
						</div>
					</Link>

					{/* ✅ Desktop Navigation */}
					<nav className='hidden lg:flex items-center gap-8'>
						{navLinks.map(link => (
							<Link
								key={link.to}
								to={link.to}
								className={`text-sm font-semibold tracking-wide transition-colors duration-300 gold-underline ${
									isActive(link.to) ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
								}`}>
								{link.label}
							</Link>
						))}
					</nav>

					{/* ✅ Right side */}
					<div className='flex items-center gap-4'>
						<LanguageSwitcher />

						{/* ✅ Mobile menu button */}
						<button
							onClick={() => setIsMenuOpen(v => !v)}
							className='lg:hidden p-2 text-foreground hover:text-primary transition-colors rounded-full hover:bg-secondary'
							aria-label='Toggle menu'>
							{isMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
						</button>
					</div>
				</div>
			</div>

			{/* ✅ Mobile Navigation */}
			<div
				className={`lg:hidden fixed inset-0 top-20 bg-background z-40 transition-all duration-500 ${
					isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
				}`}>
				<nav className='container-custom py-8 flex flex-col gap-6'>
					{navLinks.map(link => (
						<Link
							key={link.to}
							to={link.to}
							className={`text-2xl font-display font-bold transition-colors duration-300 ${
								isActive(link.to) ? 'text-primary' : 'text-foreground hover:text-primary'
							}`}>
							{link.label}
						</Link>
					))}
				</nav>
			</div>
		</header>
	);
};

export default Header;
