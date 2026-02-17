import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone, Send, Instagram, MapPin, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
	const { t } = useLanguage();
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		message: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Validation
		if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
			return;
		}

		setIsSubmitting(true);

		// Simulate form submission
		await new Promise(resolve => setTimeout(resolve, 1000));

		toast.success(t('contact.form.success'), {
			icon: <CheckCircle className='w-5 h-5 text-accent' />,
		});

		setFormData({ name: '', phone: '', message: '' });
		setIsSubmitting(false);
	};

	const contactInfo = [
		{ icon: Phone, label: t('contact.phone'), value: '+998 93 277 09 99', href: 'tel:+998 93 277 09 99' },
		{
			icon: Send,
			label: t('contact.telegram'),
			value: '@ShaxruzShoev',
			href: 'https://t.me/ShaxruzShoev',
		},
		{
			icon: Instagram,
			label: t('contact.instagram'),
			value: '@shaxruz_shoev_',
			href: 'https://instagram.com/shaxruz_shoev_',
		},
		{
			icon: MapPin,
			label: t('contact.address'),
			value: t('contact.address_val'),
			href: 'https://www.google.com/maps?q=39.928222,64.383889',
		},
	];

	return (
		<div className='section-padding bg-background min-h-screen'>
			<div className='container-custom'>
				{/* Header */}
				<div className='text-center mb-16 fade-in'>
					<h1 className='font-display text-4xl md:text-5xl font-semibold text-foreground mb-4'>{t('contact.title')}</h1>
					<div className='w-16 h-0.5 bg-accent mx-auto mb-6' />
					<p className='text-muted-foreground text-lg max-w-2xl mx-auto'>{t('contact.subtitle')}</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16'>
					{/* Contact Info */}
					<div className='space-y-8 fade-in'>
						<div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
							{contactInfo.map((info, index) => (
								<div key={index} className='p-6 bg-secondary rounded-sm'>
									<div className='flex items-start gap-4'>
										<div className='w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0'>
											<info.icon className='w-5 h-5 text-accent' />
										</div>
										<div>
											<p className='text-sm text-muted-foreground mb-1'>{info.label}</p>
											{info.href ? (
												<a
													href={info.href}
													target={info.href.startsWith('http') ? '_blank' : undefined}
													rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
													className='text-foreground font-medium hover:text-primary transition-colors'>
													{info.value}
												</a>
											) : (
												<p className='text-foreground font-medium'>{info.value}</p>
											)}
										</div>
									</div>
								</div>
							))}
						</div>

						{/* Map Placeholder */}
						<div className='aspect-video bg-muted rounded-sm overflow-hidden'>
							<div className='aspect-video bg-muted rounded-sm overflow-hidden'>
								<iframe
									src='https://www.google.com/maps?q=39.928222,64.383889&hl=uz&z=15&output=embed'
									width='100%'
									height='100%'
									style={{ border: 0 }}
									allowFullScreen
									loading='lazy'
									referrerPolicy='no-referrer-when-downgrade'
									title='Location'
								/>
							</div>
						</div>
					</div>

					{/* Contact Form */}
					<div className='fade-in'>
						<form onSubmit={handleSubmit} className='space-y-6'>
							<div>
								<label htmlFor='name' className='block text-sm font-medium text-foreground mb-2'>
									{t('contact.form.name')}
								</label>
								<input
									type='text'
									id='name'
									value={formData.name}
									onChange={e => setFormData({ ...formData, name: e.target.value })}
									required
									maxLength={100}
									className='w-full px-4 py-3 bg-secondary border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300'
									placeholder={t('contact.form.name')}
								/>
							</div>

							<div>
								<label htmlFor='phone' className='block text-sm font-medium text-foreground mb-2'>
									{t('contact.form.phone')}
								</label>
								<input
									type='tel'
									id='phone'
									value={formData.phone}
									onChange={e => setFormData({ ...formData, phone: e.target.value })}
									required
									maxLength={20}
									className='w-full px-4 py-3 bg-secondary border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300'
									placeholder='+998 90 123 45 67'
								/>
							</div>

							<div>
								<label htmlFor='message' className='block text-sm font-medium text-foreground mb-2'>
									{t('contact.form.message')}
								</label>
								<textarea
									id='message'
									value={formData.message}
									onChange={e => setFormData({ ...formData, message: e.target.value })}
									required
									rows={5}
									maxLength={1000}
									className='w-full px-4 py-3 bg-secondary border border-border rounded-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 resize-none'
									placeholder={t('contact.form.message')}
								/>
							</div>

							<button
								type='submit'
								disabled={isSubmitting}
								className='btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed'>
								{isSubmitting ? '...' : t('contact.form.submit')}
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
