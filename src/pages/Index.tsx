import { MessageCircle, Globe, Instagram } from "lucide-react";
import logo from "@/assets/logo-stridedigital.png";
import LinkButton from "@/components/LinkButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-dark relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />
      
      {/* Main content */}
      <main className="relative z-10 flex flex-col items-center px-6 py-12 max-w-md mx-auto min-h-screen ">
        {/* Logo container */}
        <div className="mb-6 animate-float">
          <div className="w-28 h-28 rounded-full bg-card flex items-center justify-center shadow-card border border-border overflow-hidden">
            <img 
              src="logo_stride.png"
              alt="StrideDigital Logo" 
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>

        {/* Agency name */}
        <h1 className="text-3xl font-bold text-foreground tracking-tight mb-2">
          StrideDigital
        </h1>

        {/* Tagline */}
        <p className="text-muted-foreground text-center text-base mb-10 max-w-xs">
          A nossa missão é fazer você vender mais através do digital. 🚀📈
        </p>

        {/* CTA Section */}
        <div className="w-full space-y-4 py-24">
          {/* Primary CTA */}
          <LinkButton
            icon={<MessageCircle className="w-6 h-6 text-primary-foreground" />}
            label="Falar com nossos especialistas"
            href="https://wa.me/5551980881688?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Stride%20e%20quero%20falar%20com%20um%20especialista."
            variant="primary"
          />

          <LinkButton
            icon={<Globe className="w-6 h-6 text-primary" />}
            label="Visite nosso site"
            href="https://stridedigital.com.br"
            variant="secondary"
          />
        </div>

        {/* Social Icons */}
        <div className="mt-12 mb-8">
          <a
            href="https://instagram.com/stridedigital.br"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-12 h-12 rounded-full border border-border bg-secondary hover:border-primary hover:bg-muted transition-all duration-300 hover:scale-110"
          >
            <Instagram className="w-5 h-5 text-foreground" />
          </a>
        </div>

        {/* Footer */}
        <footer className="mt-auto pt-8">
          <p className="text-muted-foreground text-xs text-center">
            © StrideDigital — Marketing que gera resultados
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
