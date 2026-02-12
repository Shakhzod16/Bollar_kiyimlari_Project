import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
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
	nameKey: string;
	descKey: string;
	category: FilterType;
}

const products: Product[] = [
	{
		id: 1,
		images: [productTshirt1, productTshirt2],
		nameKey: 'product.tshirt1.name',
		descKey: 'product.tshirt1.desc',
		category: 'tshirts',
	},
	{
		id: 2,
		images: [productSett1, productSett2],
		nameKey: 'product.Sett1.name',
		descKey: 'product.Sett2.desc',
		category: 'tshirts',
	},
	{
		id: 3,
		images: [productPants1, productPants2],
		nameKey: 'product.pants1.name',
		descKey: 'product.pants1.desc',
		category: 'pants',
	},
	{
		id: 4,
		images: [productSett3, productSett4],
		nameKey: 'product.Sett3.name',
		descKey: 'product.Sett4.desc',
		category: 'pants',
	},
	{
		id: 5,
		images: [productHoodie1, productHoodie2],
		nameKey: 'product.hoodie1.name',
		descKey: 'product.hoodie1.desc',
		category: 'hoodies',
	},
	{
		id: 6,
		images: [productSet1, productSet2],
		nameKey: 'product.set1.name',
		descKey: 'product.set1.desc',
		category: 'sets',
	},
];

const Products = () => {
	const { t } = useLanguage();
	const [filter, setFilter] = useState<FilterType>('all');

	const filters: { key: FilterType; labelKey: string }[] = [
		{ key: 'all', labelKey: 'products.filter.all' },
		{ key: 'tshirts', labelKey: 'products.filter.tshirts' },
		{ key: 'pants', labelKey: 'products.filter.pants' },
		{ key: 'hoodies', labelKey: 'products.filter.hoodies' },
		{ key: 'sets', labelKey: 'products.filter.sets' },
	];

	const filteredProducts = filter === 'all' ? products : products.filter(p => p.category === filter);

	return (
		<div className='section-padding bg-background min-h-screen'>
			<div className='container-custom'>
				{/* Header */}
				<div className='text-center mb-16 fade-in'>
					<h1 className='font-display text-4xl md:text-5xl font-bold text-foreground mb-4'>{t('products.title')}</h1>
					<div className='w-20 h-1 bg-primary mx-auto rounded-full' />
				</div>

				{/* Filters */}
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
							{t(f.labelKey)}
						</button>
					))}
				</div>

				{/* Products Grid */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
					{filteredProducts.map(product => (
						<ProductCard key={product.id} images={product.images} nameKey={product.nameKey} descKey={product.descKey} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Products;
