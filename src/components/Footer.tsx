import { Link } from 'react-router-dom';
import { Instagram, Send, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h2 className="font-display text-2xl font-bold text-foreground">
              Bolalar <span className="text-primary">Kiyimlari</span>
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-foreground">
              {t('nav.products')}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products?filter=tshirts" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  {t('categories.tshirts')}
                </Link>
              </li>
              <li>
                <Link to="/products?filter=pants" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  {t('categories.pants')}
                </Link>
              </li>
              <li>
                <Link to="/products?filter=hoodies" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  {t('categories.hoodies')}
                </Link>
              </li>
              <li>
                <Link to="/products?filter=sets" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  {t('categories.sets')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h3 className="font-display text-lg font-bold text-foreground">
              {t('nav.contact')}
            </h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-soft transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-soft transition-all duration-300 hover:scale-110"
                aria-label="Telegram"
              >
                <Send className="w-5 h-5" />
              </a>
              <a
                href="tel:+998901234567"
                className="w-12 h-12 rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-primary hover:shadow-soft transition-all duration-300 hover:scale-110"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} Bollar Kiyimlari. {t('footer.rights')}.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
