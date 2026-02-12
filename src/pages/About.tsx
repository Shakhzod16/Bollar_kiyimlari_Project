import { useLanguage } from '@/contexts/LanguageContext';
import { Check } from 'lucide-react';
import productHoodie1 from '@/assets/product-hoodie-1.jpg';

const About = () => {
  const { t } = useLanguage();

  const whyItems = [
    'about.why.item1',
    'about.why.item2',
    'about.why.item3',
    'about.why.item4',
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16 fade-in">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              {t('about.title')}
            </h1>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="pb-16 md:pb-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1 fade-in">
              <div className="relative">
                <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-card">
                  <img
                    src={productHoodie1}
                    alt="SOF KARAKUL"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-3xl -z-10" />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent/20 rounded-3xl -z-10" />
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2 space-y-6 fade-in">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                {t('about.story.title')}
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>{t('about.story.p1')}</p>
                <p>{t('about.story.p2')}</p>
                <p>{t('about.story.p3')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-secondary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-12">
              {t('about.why.title')}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 stagger-children">
              {whyItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-6 bg-background rounded-2xl shadow-soft text-left hover:shadow-card transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-foreground font-semibold">{t(item)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
