import { useLanguage } from '@/contexts/LanguageContext';
import { Instagram, Send, ShoppingBag, Store, ExternalLink } from 'lucide-react';

interface MarketplaceCard {
	icon: React.ElementType;
	title: string;
	gradient: string;
	products: {
		name: string;
		url: string;
	}[];
}

const marketplaces: MarketplaceCard[] = [
	{
		icon: ShoppingBag,
		title: 'Uzum Market',
		gradient: 'from-amber-400 to-orange-400',
		products: [
			{
				name: 'Jogger shim',
				url: 'https://uzum.uz/uz/product/bolalar-uchun-jogger-shimlar-2397075',
			},
			{
				name: 'Bolalar shorti',
				url: 'https://uzum.uz/uz/product/bolalar-shortisi-har-kunlik-qulaylik-2397182',
			},
			{
				name: 'Chaqaloq kofta',
				url: 'https://uzum.uz/uz/product/chaqaloq-uchun-nozik-kofta-2397299',
			},
		],
	},
	{
		icon: Store,
		title: 'Yandex Market',
		gradient: 'from-red-500 to-rose-600',
		products: [
			{
				name: 'Jogger shim',
				url: 'https://market.yandex.uz/card/detskiye-dzhoggery-dlya-malchika--devochki-stilnyye-udobnyye-i-praktichnyye-dzhoggery-dlya-povsednevnoy-noski/5134407984?businessId=216503443',
			},
			{
				name: 'Bolalar shorti',
				url: 'https://market.yandex.uz/card/detskiye-shorty-stilnyye-i-udobnyye-detskiye-shorty-idealno-podoydut-dlya-povsednevnoy-noski-progulok/5134436365?businessId=216503443',
			},
			{
				name: 'Chaqaloq kofta',
				url: 'https://market.yandex.uz/card/myagkaya-i-komfortnaya-koftochka-dlya-malyshey--idealnyy-variant-dlya-povsednevnoy-noski-v-lyuboye-vremya-goda/5134425258?businessId=216503443',
			},
		],
	},
	{
		icon: ShoppingBag,
		title: 'Ozon',
		gradient: 'from-blue-500 to-indigo-600',
		products: [
			{
				name: 'Jogger shim',
				url: 'https://uz.ozon.com/product/bryuki-3525606520/',
			},
			{
				name: 'Bolalar shorti',
				url: 'https://uz.ozon.com/product/shorty-dlya-malyshey-3525610608/',
			},
			{
				name: 'Chaqaloq kofta',
				url: 'https://uz.ozon.com/product/koftochka-dlya-novorozhdennogo-3525612412/',
			},
		],
	},
	{
		icon: Store,
		title: 'Wildberries',
		gradient: 'from-fuchsia-500 to-purple-600',
		products: [
			{
				name: 'Jogger shim',
				url: 'https://www.wildberries.ru/catalog/820771522/detail.aspx',
			},
			{
				name: 'Bolalar shorti',
				url: 'https://www.wildberries.ru/catalog/820776319/detail.aspx',
			},
			{
				name: 'Chaqaloq kofta',
				url: 'https://www.wildberries.ru/catalog/820783202/detail.aspx',
			},
		],
	},
];

const Marketplaces = () => {
	return (
		<div className='section-padding bg-background min-h-screen'>
			<div className='container-custom'>
				<div className='text-center mb-16'>
					<h1 className='font-display text-4xl md:text-5xl font-bold mb-4'>Marketpleyslar</h1>
					<div className='w-20 h-1 bg-primary mx-auto rounded-full mb-6' />
					<p className='text-muted-foreground text-lg'>Mahsulotlarimiz quyidagi platformalarda mavjud</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{marketplaces.map((marketplace, index) => (
						<div key={index} className='card-premium p-8 text-center hover:-translate-y-2 transition-all duration-300'>
							<div
								className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${marketplace.gradient} flex items-center justify-center shadow-lg`}>
								<marketplace.icon className='w-10 h-10 text-white' />
							</div>

							<h3 className='text-xl font-bold mb-6'>{marketplace.title}</h3>

							<div className='flex flex-col gap-3'>
								{marketplace.products.map((product, i) => (
									<a
										key={i}
										href={product.url}
										target='_blank'
										rel='noopener noreferrer'
										className='flex items-center justify-center gap-2 bg-muted hover:bg-primary hover:text-white px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium'>
										{product.name}
										<ExternalLink className='w-4 h-4' />
									</a>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Marketplaces;
