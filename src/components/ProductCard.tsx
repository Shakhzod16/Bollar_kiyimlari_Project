import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
	images: string[]; // 2 ta rasm
	name: string;
	desc: string;
}

const FALLBACK_IMG = 'https://placehold.co/1200x1200/png?text=No+Image';

const ProductCard = ({ images, name, desc }: ProductCardProps) => {
	const safeImages = images?.length ? images.slice(0, 2) : [FALLBACK_IMG, FALLBACK_IMG];
	while (safeImages.length < 2) safeImages.push(safeImages[0]);

	const [idx, setIdx] = useState(0);
	const timer = useRef<number | null>(null);

	const start = () => {
		if (timer.current) return;
		timer.current = window.setInterval(() => {
			setIdx(prev => (prev + 1) % 2);
		}, 1000);
	};

	const stop = () => {
		if (timer.current) {
			window.clearInterval(timer.current);
			timer.current = null;
		}
		setIdx(0);
	};

	useEffect(() => () => stop(), []);

	return (
		<div className='card-premium group' onMouseEnter={start} onMouseLeave={stop}>
			<div className='aspect-square overflow-hidden bg-muted rounded-t-2xl relative'>
				{safeImages.map((src, i) => (
					<img
						key={i}
						src={src}
						alt={name}
						loading='lazy'
						referrerPolicy='no-referrer'
						onError={e => {
							const img = e.currentTarget;
							img.onerror = null;
							img.src = FALLBACK_IMG;
						}}
						className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
							i === idx ? 'opacity-100' : 'opacity-0'
						}`}
					/>
				))}

				<div className='absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2'>
					{[0, 1].map(d => (
						<span key={d} className={`h-2 w-2 rounded-full bg-white/70 shadow ${d === idx ? 'bg-white' : ''}`} />
					))}
				</div>
			</div>

			<div className='p-6 space-y-4'>
				<h3 className='font-display text-xl font-bold text-foreground leading-tight'>{name}</h3>

				<p className='text-muted-foreground text-sm leading-relaxed'>{desc}</p>

				<Link to='/contact' className='btn-secondary w-full text-center'>
					Bog'lanish
				</Link>
			</div>
		</div>
	);
};

export default ProductCard;
