import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="font-display text-8xl font-semibold text-primary">404</h1>
        <p className="text-xl text-muted-foreground">
          Page not found
        </p>
        <Link to="/" className="btn-primary inline-block">
          {t('nav.home')}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
