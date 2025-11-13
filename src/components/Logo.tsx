import logoImage from "@/assets/logo.png";

const Logo = ({ className = "h-12 w-auto" }: { className?: string }) => {
  return (
    <div className="flex items-center">
      <img 
        src={logoImage} 
        alt="Zen Real Estate Logo" 
        className={className}
      />
    </div>
  );
};

export default Logo;
