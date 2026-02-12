import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  image: string;
  nameKey: string;
  descKey: string;
}

const ProductCard = ({ image, nameKey, descKey }: ProductCardProps) => {
  const { t } = useLanguage();

  return (
    <div className="card-premium group">
      <div className="aspect-square overflow-hidden bg-muted rounded-t-2xl">
        <img
          src={image}
          alt={t(nameKey)}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="font-display text-xl font-bold text-foreground leading-tight">
          {t(nameKey)}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {t(descKey)}
        </p>
        <Link
          to="/contact"
          className="btn-secondary w-full text-center"
        >
          {t('products.contact')}
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
