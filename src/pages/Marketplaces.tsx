import React, { useMemo, useState } from 'react';
import { ArrowRight, ExternalLink, ChevronLeft } from 'lucide-react';

type Product = {
	name: string;
	url: string;
	image: string; // internet image
};

type Marketplace = {
	id: 'uzum' | 'yandex' | 'ozon' | 'wildberries';
	title: string;
	logo: string; // internet logo
	marketplaceUrl: string;
	products: Product[];
};

// Internet fallback (local fayl kerak emas)
const FALLBACK_IMG = 'https://placehold.co/1200x800/png?text=No+Image&font=roboto';

// ✅ Internet LOGO'lar (Wikimedia PNG preview)
const LOGOS = {
	uzum: '/src/assets/uzummarket.png',
	yandex: '/src/assets/yandexmarket.png',
	ozon: '/src/assets/ozon.png',
	wildberries: '/src/assets/wb.png',
};

// ✅ Internet PRODUCT rasmlar (Unsplash direct)
const PRODUCT_IMG = {
	jogger: 'https://avatars.mds.yandex.net/get-mpic/16497166/2a0000019c4d105b29e96d21f9ad4718b133/optimize',
	short: 'https://avatars.mds.yandex.net/get-mpic/15072245/2a0000019c4d17b1ab80cfbd432570726b90/optimize',
	kofta: 'https://avatars.mds.yandex.net/get-mpic/18944582/2a0000019c4d256e9482e4534e926056af60/optimize',
};

const MARKETPLACES: Marketplace[] = [
	{
		id: 'uzum',
		title: 'Uzum Market',
		logo: LOGOS.uzum,
		marketplaceUrl: 'https://uzum.uz',
		products: [
			{
				name: 'Jogger shim',
				url: 'https://uzum.uz/uz/product/bolalar-uchun-jogger-shimlar-2397075',
				image: PRODUCT_IMG.jogger,
			},
			{
				name: 'Bolalar shorti',
				url: 'https://uzum.uz/uz/product/bolalar-shortisi-har-kunlik-qulaylik-2397182',
				image: PRODUCT_IMG.short,
			},
			{
				name: 'Chaqaloq kofta',
				url: 'https://uzum.uz/uz/product/chaqaloq-uchun-nozik-kofta-2397299',
				image: PRODUCT_IMG.kofta,
			},
		],
	},
	{
		id: 'yandex',
		title: 'Yandex Market',
		logo: LOGOS.yandex,
		marketplaceUrl: 'https://market.yandex.uz',
		products: [
			{
				name: 'Jogger shim',
				url: 'https://market.yandex.uz/card/detskiye-dzhoggery-dlya-malchika--devochki-stilnyye-udobnyye-i-praktichnyye-dzhoggery-dlya-povsednevnoy-noski/5134407984?businessId=216503443&ogV=-12',
				image: PRODUCT_IMG.jogger,
			},
			{
				name: 'Bolalar shorti',
				url: 'https://market.yandex.uz/card/detskiye-shorty-stilnyye-i-udobnyye-detskiye-shorty-idealno-podoydut-dlya-povsednevnoy-noski-progulok/5134436365?businessId=216503443&ogV=-12',
				image: PRODUCT_IMG.short,
			},
			{
				name: 'Chaqaloq kofta',
				url: 'https://market.yandex.uz/card/myagkaya-i-komfortnaya-koftochka-dlya-malyshey--idealnyy-variant-dlya-povsednevnoy-noski-v-lyuboye-vremya-goda/5134425258?businessId=216503443&ogV=-12',
				image: PRODUCT_IMG.kofta,
			},
		],
	},
	{
		id: 'ozon',
		title: 'Ozon',
		logo: LOGOS.ozon,
		marketplaceUrl: 'https://uz.ozon.com',
		products: [
			{
				name: 'Jogger shim',
				url: 'https://uz.ozon.com/product/bryuki-3525606520/?oos_search=false',
				image: PRODUCT_IMG.jogger,
			},
			{
				name: 'Bolalar shorti',
				url: 'https://uz.ozon.com/product/shorty-dlya-malyshey-3525610608/?oos_search=false',
				image: PRODUCT_IMG.short,
			},
			{
				name: 'Chaqaloq kofta',
				url: 'https://uz.ozon.com/product/koftochka-dlya-novorozhdennogo-3525612412/?oos_search=false',
				image: PRODUCT_IMG.kofta,
			},
		],
	},
	{
		id: 'wildberries',
		title: 'Wildberries',
		logo: LOGOS.wildberries,
		marketplaceUrl: 'https://www.wildberries.ru',
		products: [
			{
				name: 'Jogger shim',
				url: 'https://www.wildberries.ru/catalog/820783202/detail.aspx?targetUrl=GP',
				image: PRODUCT_IMG.jogger,
			},
			{
				name: 'Bolalar shorti',
				url: 'https://www.wildberries.ru/catalog/820776319/detail.aspx?targetUrl=GP',
				image: PRODUCT_IMG.short,
			},
			{
				name: 'Chaqaloq kofta',
				url: 'https://www.wildberries.ru/catalog/820771522/detail.aspx?targetUrl=GP',
				image: PRODUCT_IMG.kofta,
			},
		],
	},
];

function SafeImg({ className, ...props }: React.ImgHTMLAttributes<HTMLImageElement>) {
	return (
		<img
			{...props}
			loading='lazy'
			className={className} // ✅ tashqaridan kelgan class ishlaydi
			referrerPolicy='no-referrer'
			onError={e => {
				const img = e.currentTarget;
				img.onerror = null;
				img.src = FALLBACK_IMG;
			}}
		/>
	);
}


export default function Marketplaces() {
	const [selectedId, setSelectedId] = useState<Marketplace['id'] | null>(null);

	const selected = useMemo(() => {
		if (!selectedId) return null;
		return MARKETPLACES.find(m => m.id === selectedId) || null;
	}, [selectedId]);

	// ====== DETAIL VIEW (product cards) ======
	if (selected) {
		return (
			<div className='bg-white min-h-screen'>
				{/* sizdagi light split background uslubida */}
				<section className='relative overflow-hidden'>
					<div className='absolute inset-0'>
						<div className='absolute inset-y-0 left-0 w-1/2 bg-[#fdeeee]' />
						<div className='absolute inset-y-0 right-0 w-1/2 bg-[#cfe9f4]' />
					</div>
					<div className='absolute inset-0 bg-white/45' />

					<div className='relative mx-auto max-w-6xl px-5 md:px-8 py-12 md:py-16'>
						<div className='flex items-start justify-between gap-4'>
							<button
								onClick={() => setSelectedId(null)}
								className='inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm font-bold text-[#1f2430] hover:bg-white transition'>
								<ChevronLeft className='h-4 w-4' />
								Marketpleyslar
							</button>

							<a
								href={selected.marketplaceUrl}
								target='_blank'
								rel='noopener noreferrer'
								className='inline-flex items-center gap-2 rounded-full bg-[#ef8c6b] px-4 py-2 text-sm font-bold text-white shadow-[0_12px_30px_rgba(239,140,107,0.35)] hover:brightness-95 transition'>
								Platformaga o‘tish
								<ExternalLink className='h-4 w-4' />
							</a>
						</div>

						<div className='mt-10 text-center'>
							<div className='mx-auto mb-5 flex items-center justify-center'>
								<SafeImg src={selected.logo} alt={`${selected.title} logo`} className='h-14 md:h-16 w-auto' />
							</div>

							<h1 className='text-4xl md:text-6xl font-extrabold tracking-tight text-[#1f2430]'>{selected.title}</h1>

							<p className='mx-auto mt-4 max-w-3xl text-sm md:text-base text-[#6b7280]'>
								Quyida {selected.title} uchun tanlangan 4 ta mahsulot. Har bir kartani bossangiz real marketpleysdagi
								mahsulot sahifasi ochiladi.
							</p>
						</div>

						<div className='mt-12 flex flex-wrap justify-center gap-6'>
							{selected.products.slice(0, 4).map((p, idx) => (
								<a
									key={idx}
									href={p.url}
									target='_blank'
									rel='noopener noreferrer'
									className='group w-full sm:w-1/2 lg:w-1/4 max-w-[280px]
                 overflow-hidden rounded-3xl bg-white/85 border border-black/5
                 shadow-[0_18px_60px_rgba(31,36,48,0.12)]
                 hover:shadow-[0_22px_70px_rgba(31,36,48,0.16)]
                 transition-all duration-300 hover:-translate-y-1'>
									<div className='relative h-[300px] w-full overflow-hidden bg-black/[0.03]'>
										<SafeImg
											src={p.image}
											alt={p.name}
											className='h-full w-full object-cover object-[center_-62px] transition-transform duration-500 group-hover:scale-[1.04]'
										/>
									</div>

									<div className='p-5'>
										<h3 className='text-sm font-extrabold text-[#1f2430] line-clamp-2'>{p.name}</h3>

										<div className='mt-3 flex items-center justify-between text-xs text-[#6b7280]'>
											<span className='font-semibold'>Marketpleysda ko‘rish</span>
											<span className='h-9 w-9 rounded-full border border-black/5 bg-white flex items-center justify-center'>
												<ArrowRight className='h-4 w-4 text-[#1f2430] transition-transform group-hover:translate-x-0.5' />
											</span>
										</div>
									</div>
								</a>
							))}
						</div>
					</div>
				</section>
			</div>
		);
	}

	// ====== MAIN LIST (faqat logo + nom) ======
	return (
		<div className='bg-white py-16 md:py-20'>
			<div className='mx-auto max-w-6xl px-5 md:px-8'>
				<div className='text-center'>
					<h2 className='text-4xl md:text-5xl font-extrabold tracking-tight text-[#1f2430]'>Marketpleyslar</h2>
					<div className='mx-auto mt-3 h-[4px] w-24 rounded-full bg-[#ef8c6b]' />
					<p className='mt-6 text-[#6b7280] text-base md:text-lg'>Mahsulotlarimiz quyidagi platformalarda mavjud</p>
				</div>

				<div className='mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					{MARKETPLACES.map(m => (
						<button
							key={m.id}
							onClick={() => setSelectedId(m.id)}
							className='group rounded-3xl bg-white border border-black/5 p-8
                         shadow-[0_18px_55px_rgba(31,36,48,0.10)]
                         hover:shadow-[0_22px_70px_rgba(31,36,48,0.16)]
                         transition-all duration-300 hover:-translate-y-1'>
							<div className='mx-auto mb-6 flex items-center justify-center'>
								<SafeImg src={m.logo} alt={`${m.title} logo`} className='h-14 w-auto ' />
							</div>

							<h3 className='text-center text-xl font-extrabold text-[#1f2430]'>{m.title}</h3>

							<p className='mt-3 text-center text-sm text-[#6b7280]'>Ko‘rish uchun bosing</p>
						</button>
					))}
				</div>
			</div>
		</div>
	);
}
