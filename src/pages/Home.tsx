import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { Leaf, Heart, Shield, Award, ArrowRight } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import productTshirt1 from '@/assets/product-tshirt-1.jpg';
import productPants1 from '@/assets/product-pants-1.jpg';
import productHoodie1 from '@/assets/product-hoodie-1.jpg';
import productSet1 from '@/assets/product-set-1.jpg';

const Home = () => {
  const { t } = useLanguage();

  const categories = [
    { 
      image: productTshirt1, 
      titleKey: 'categories.tshirts',
      link: '/products?filter=tshirts',
      emoji: '👕'
    },
    { 
      image: productPants1, 
      titleKey: 'categories.pants',
      link: '/products?filter=pants',
      emoji: '👖'
    },
    { 
      image: productHoodie1, 
      titleKey: 'categories.hoodies',
      link: '/products?filter=hoodies',
      emoji: '🧥'
    },
    { 
      image: productSet1, 
      titleKey: 'categories.sets',
      link: '/products?filter=sets',
      emoji: '🎒'
    },
  ];

  const values = [
    { icon: Leaf, titleKey: 'values.natural', descKey: 'values.natural.desc' },
    { icon: Heart, titleKey: 'values.comfort', descKey: 'values.comfort.desc' },
    { icon: Shield, titleKey: 'values.safety', descKey: 'values.safety.desc' },
    { icon: Award, titleKey: 'values.quality', descKey: 'values.quality.desc' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
        </div>
        
        <div className="container-custom relative z-10 py-32">
          <div className="max-w-2xl space-y-8 fade-in">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/products" className="btn-primary">
                {t('hero.products')}
              </Link>
              <Link to="/contact" className="btn-secondary">
                {t('hero.contact')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
            {t('categories.title')}
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 stagger-children">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="group category-card aspect-square bg-card shadow-card"
              >
                <img
                  src={category.image}
                  alt={t(category.titleKey)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                  <span className="text-2xl md:text-3xl mb-2 block">{category.emoji}</span>
                  <h3 className="font-display text-lg md:text-xl font-bold text-white flex items-center gap-2">
                    {t(category.titleKey)}
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" />
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-16">
            {t('values.title')}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 stagger-children">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 bg-background rounded-2xl shadow-soft hover:shadow-card transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {t(value.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(value.descKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            {t('hero.title')}
          </h2>
          <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <Link
            to="/products"
            className="inline-flex items-center justify-center px-8 py-3 text-sm font-semibold tracking-wide bg-background text-primary rounded-full transition-all duration-300 hover:bg-background/90 hover:shadow-lg hover:scale-105"
          >
            {t('hero.products')}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
