import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  CalendarIcon, 
  UsersIcon, 
  UserIcon, 
  HomeIcon,
  LogOutIcon,
  ZapIcon,
  SparklesIcon
} from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { useState, useEffect } from "react";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { to: "/", icon: HomeIcon, label: "Home" },
    { to: "/organizations", icon: UsersIcon, label: "Organizations" },
    { to: "/profile", icon: UserIcon, label: "Profile" },
    { to: "/calendar", icon: CalendarIcon, label: "Calendar" },
  ];

  return (
    <nav className={`
      fixed top-0 w-full z-50 transition-all duration-500 ease-out
      ${isScrolled 
        ? 'bg-background/80 backdrop-blur-xl border-b shadow-lg shadow-primary/5' 
        : 'bg-gradient-to-r from-background/95 via-background/90 to-background/95 backdrop-blur-sm'
      }
    `}>
      <div className="container flex h-20 items-center justify-between">
        {/* Animated Logo */}
        <Link to="/" className="group flex items-center space-x-3 relative">
          {/* Background glow effect */}
          <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out" />
          
          {/* Logo container */}
          <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary via-purple-600 to-primary transform group-hover:scale-110 transition-all duration-500 ease-out shadow-lg shadow-primary/25">
            {/* Animated sparkles */}
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <div className="absolute top-1 left-1 w-1 h-1 bg-white/80 rounded-full animate-pulse" />
              <div className="absolute bottom-2 right-2 w-0.5 h-0.5 bg-white/60 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
              <div className="absolute top-3 right-1 w-0.5 h-0.5 bg-white/70 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
            
            {/* Main logo */}
            <span className="text-2xl font-bold text-white relative z-10 group-hover:rotate-12 transition-transform duration-500">
              S
            </span>
          </div>
          
          {/* Brand text with gradient */}
          <div className="flex flex-col">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent group-hover:from-purple-600 group-hover:via-primary group-hover:to-purple-600 transition-all duration-700">
              Showtime
            </span>
            <span className="text-xs text-muted-foreground/80 font-medium tracking-wider">
              EVENT PRODUCTION
            </span>
          </div>
        </Link>

        {/* Navigation Items */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.to;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`
                  group relative flex items-center space-x-2 px-4 py-2.5 rounded-xl transition-all duration-300 ease-out
                  ${isActive 
                    ? 'bg-gradient-to-r from-primary/15 via-purple-500/15 to-primary/15 text-primary' 
                    : 'hover:bg-gradient-to-r hover:from-primary/5 hover:via-purple-500/5 hover:to-primary/5 text-muted-foreground hover:text-foreground'
                  }
                `}
              >
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-xl animate-pulse" />
                )}
                
                {/* Icon with hover animation */}
                <Icon className={`
                  h-4 w-4 relative z-10 transition-all duration-300
                  ${isActive ? 'text-primary scale-110' : 'group-hover:scale-110 group-hover:rotate-12'}
                `} />
                
                {/* Label */}
                <span className="relative z-10 text-sm font-medium">
                  {item.label}
                </span>
                
                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
              </Link>
            );
          })}
        </div>

        {/* Right side - Theme toggle and Actions */}
        <div className="flex items-center space-x-4">
          {/* Custom Theme Toggle */}
          <div className="relative">
            <button
              onClick={toggleTheme}
              className="group relative flex h-11 w-20 items-center justify-center rounded-full bg-gradient-to-r from-muted via-muted/80 to-muted overflow-hidden border border-border/50 transition-all duration-500 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10"
            >
              {/* Background animated gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-purple-500/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-700" />
              
              {/* Day/Night indicator */}
              <div className={`
                absolute h-8 w-8 rounded-full bg-gradient-to-br transition-all duration-700 ease-out shadow-lg
                ${theme === 'dark' 
                  ? 'from-purple-400 via-primary to-purple-600 translate-x-4 shadow-primary/30' 
                  : 'from-yellow-400 via-orange-400 to-yellow-500 -translate-x-4 shadow-yellow-400/30'
                }
              `}>
                {/* Stars for dark mode */}
                {theme === 'dark' && (
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    <div className="absolute top-1 left-1 w-0.5 h-0.5 bg-white/90 rounded-full animate-twinkle" />
                    <div className="absolute bottom-1 right-1.5 w-0.5 h-0.5 bg-white/80 rounded-full animate-twinkle" style={{ animationDelay: '0.5s' }} />
                    <div className="absolute top-2 right-1 w-0.5 h-0.5 bg-white/70 rounded-full animate-twinkle" style={{ animationDelay: '1s' }} />
                  </div>
                )}
                
                {/* Sun rays for light mode */}
                {theme === 'light' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-4 h-4 bg-white/30 rounded-full animate-spin-slow" />
                  </div>
                )}
              </div>
              
              {/* Icons */}
              <div className="flex items-center justify-between w-full px-2 relative z-10">
                <SparklesIcon className={`h-3.5 w-3.5 transition-all duration-500 ${theme === 'dark' ? 'text-purple-300' : 'text-muted-foreground/50'}`} />
                <ZapIcon className={`h-3.5 w-3.5 transition-all duration-500 ${theme === 'light' ? 'text-yellow-600' : 'text-muted-foreground/50'}`} />
              </div>
            </button>
          </div>
          
          {/* Logout Button */}
          <Button 
            variant="outline" 
            size="sm"
            className="group relative overflow-hidden border-2 border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
            <LogOutIcon className="h-4 w-4 mr-2 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
            <span className="relative z-10">Logout</span>
          </Button>
        </div>
      </div>
      
      {/* Bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </nav>
  );
}

{/* Add custom animations to global CSS */}
