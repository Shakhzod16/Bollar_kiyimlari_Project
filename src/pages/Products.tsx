import { useMemo, useState } from 'react';
import ProductCard from '@/components/ProductCard';

import productTshirt1 from '@/assets/2.jpg';
import productTshirt2 from '@/assets/3.jpg';

import productPants1 from '@/assets/2.png';
import productPants2 from '@/assets/2(2).png';

import productHoodie1 from '@/assets/10.png';
import productHoodie2 from '@/assets/10(1).png';

import productSet1 from '@/assets/9.png';
import productSet2 from '@/assets/9(1).png';

import productSett1 from '@/assets/12.png';
import productSett2 from '@/assets/12(1).png';

import productSett3 from '@/assets/11.png';
import productSett4 from '@/assets/11(1).png';

type FilterType = 'all' | 'tshirts' | 'pants' | 'hoodies' | 'sets';

interface Product {
	id: number;
	images: string[];
	name: string;
	desc: string;
	category: Exclude<FilterType, 'all'>;
}

const products: Product[] = [
	{
		id: 1,
		images: [productTshirt1, productTshirt2],
		name: "Ko'k paxta futbolka",
		desc: 'Yumshoq paxta matodan tayyorlangan qulay futbolka.',
		category: 'tshirts',
	},
	{
		id: 2,
		images: [productSett1, productSett2],
		name: "Sariq to'plam (2 qism)",
		desc: "Kundalik kiyish uchun qulay va chiroyli to'plam.",
		category: 'sets',
	},
	{
		id: 3,
		images: [productPants1, productPants2],
		name: 'Bej rangli shim',
		desc: 'Kundalik kiyish uchun qulay paxta shim.',
		category: 'pants',
	},
	{
		id: 4,
		images: [productSett3, productSett4],
		name: 'Oq rangli shim',
		desc: 'Yumshoq mato, bolalar uchun qulay va chiroyli.',
		category: 'pants',
	},
	{
		id: 5,
		images: [productHoodie1, productHoodie2],
		name: 'Bolalar hudisi',
		desc: 'Issiq, yumshoq va qulay hudi — har kunlik uchun.',
		category: 'hoodies',
	},
	{
		id: 6,
		images: [productSet1, productSet2],
		name: "Yumshoq to'plam",
		desc: "Moslangan kiyimlar to'plami — sovg'aga ham zo'r.",
		category: 'sets',
	},
];

export default function Products() {
	const [filter, setFilter] = useState<FilterType>('all');

	const filters: { key: FilterType; label: string }[] = [
		{ key: 'all', label: 'Barchasi' },
		{ key: 'tshirts', label: 'Futbolkalar' },
		{ key: 'pants', label: 'Shimlar' },
		{ key: 'hoodies', label: 'Hudilar' },
		{ key: 'sets', label: "To'plamlar" },
	];

	const filteredProducts = useMemo(() => {
		if (filter === 'all') return products;
		return products.filter(p => p.category === filter);
	}, [filter]);

	return (
		<div className='section-padding bg-background min-h-screen'>
			<div className='container-custom'>
				<div className='text-center mb-16 fade-in'>
					<h1 className='font-display text-4xl md:text-5xl font-bold text-foreground mb-4'>Mahsulotlar</h1>
					<div className='w-20 h-1 bg-primary mx-auto rounded-full' />
				</div>

				<div className='flex flex-wrap justify-center gap-3 mb-12'>
					{filters.map(f => (
						<button
							key={f.key}
							onClick={() => setFilter(f.key)}
							className={`px-6 py-2.5 text-sm font-semibold tracking-wide rounded-full transition-all duration-300 ${
								filter === f.key
									? 'bg-primary text-primary-foreground shadow-lg scale-105'
									: 'bg-secondary text-secondary-foreground hover:bg-muted hover:scale-105'
							}`}>
							{f.label}
						</button>
					))}
				</div>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
					{filteredProducts.map(product => (
						<ProductCard key={product.id} images={product.images} name={product.name} desc={product.desc} />
					))}
				</div>
			</div>
		</div>
	);
}
