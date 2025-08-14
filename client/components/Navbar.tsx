import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  HomeIcon,
  BuildingIcon,
  CalendarIcon, 
  UsersIcon, 
  UserIcon,
  MessageCircleIcon,
  FolderIcon,
  CheckSquareIcon,
  SettingsIcon,
  LogOutIcon,
  SparklesIcon,
  ZapIcon
} from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { useState, useEffect } from "react";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentLayer, setCurrentLayer] = useState("user"); // user, organization, event

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simplified navigation items based on current layer
  const userPages = [
    { to: "/", icon: HomeIcon, label: "Home" },
    { to: "/organizations", icon: BuildingIcon, label: "Organizations" },
    { to: "/calendar", icon: CalendarIcon, label: "Calendar" },
    { to: "/profile", icon: UserIcon, label: "Profile" },
  ];

  const organizationPages = [
    { to: "/org/home", icon: HomeIcon, label: "Home" },
    { to: "/org/events", icon: CalendarIcon, label: "Events" },
    { to: "/org/messages", icon: MessageCircleIcon, label: "Messages" },
    { to: "/org/disk", icon: FolderIcon, label: "Disk" },
  ];

  const eventPages = [
    { to: "/event/home", icon: HomeIcon, label: "Home" },
    { to: "/event/schedule", icon: CalendarIcon, label: "Schedule" },
    { to: "/event/messages", icon: MessageCircleIcon, label: "Messages" },
    { to: "/event/crew", icon: UsersIcon, label: "Crew" },
  ];

  const getCurrentNavItems = () => {
    switch (currentLayer) {
      case "organization": return organizationPages;
      case "event": return eventPages;
      default: return userPages;
    }
  };

  const getLayerColor = (layer: string) => {
    switch (layer) {
      case "user": return "from-blue-500 to-blue-600";
      case "organization": return "from-purple-500 to-purple-600";
      case "event": return "from-primary to-purple-600";
      default: return "from-primary to-purple-600";
    }
  };

  return (
    <nav className={`
      fixed top-0 w-full z-50 transition-all duration-300 ease-out
      ${isScrolled 
        ? 'bg-background/95 backdrop-blur-xl border-b shadow-md' 
        : 'bg-background/98 backdrop-blur-md'
      }
    `}>
      <div className="container flex h-16 items-center justify-between px-6">
        
        {/* Left: Logo + Layer Indicator */}
        <div className="flex items-center space-x-6">
          {/* Cleaner Logo */}
          <Link to="/" className="group flex items-center space-x-3">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-purple-600 transform group-hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25">
              {/* Subtle sparkle effect */}
              <div className="absolute top-1 right-1 w-1 h-1 bg-white/80 rounded-full animate-pulse" />
              <span className="text-xl font-bold text-white">S</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Showtime
              </span>
              <span className="text-xs text-muted-foreground/60 font-medium">
                {currentLayer.toUpperCase()} LAYER
              </span>
            </div>
          </Link>

          {/* Clean Layer Switcher */}
          <div className="hidden lg:flex items-center bg-muted/40 rounded-lg p-1">
            {["user", "organization", "event"].map((layer) => (
              <button
                key={layer}
                onClick={() => setCurrentLayer(layer)}
                className={`
                  px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200
                  ${currentLayer === layer 
                    ? `bg-gradient-to-r ${getLayerColor(layer)} text-white shadow-sm` 
                    : 'text-muted-foreground hover:text-foreground'
                  }
                `}
              >
                {layer.charAt(0).toUpperCase() + layer.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Center: Navigation with Amazing Active Effects */}
        <div className="hidden md:flex items-center space-x-1">
          {getCurrentNavItems().map((item) => {
            const isActive = location.pathname === item.to;
            const Icon = item.icon;

            return (
              <Link
                key={item.to}
                to={item.to}
                className={`
                  group relative flex items-center space-x-2 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ease-out
                  ${isActive
                    ? `bg-gradient-to-r ${getLayerColor(currentLayer)}/15 text-primary border border-primary/20 shadow-lg shadow-primary/20`
                    : 'text-muted-foreground hover:text-foreground hover:bg-gradient-to-r hover:from-primary/5 hover:via-purple-500/5 hover:to-primary/5'
                  }
                `}
              >
                {/* Amazing Active Glow Effect */}
                {isActive && (
                  <>
                    <div className={`absolute inset-0 bg-gradient-to-r ${getLayerColor(currentLayer)}/20 rounded-xl animate-pulse blur-sm`} />
                    <div className={`absolute inset-0 bg-gradient-to-r ${getLayerColor(currentLayer)}/10 rounded-xl`} />
                  </>
                )}

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />

                {/* Icon with cool animation */}
                <Icon className={`
                  h-4 w-4 relative z-10 transition-all duration-300
                  ${isActive ? 'text-primary scale-110' : 'group-hover:scale-110 group-hover:rotate-6'}
                `} />

                {/* Label */}
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Right: Theme Toggle + Actions */}
        <div className="flex items-center space-x-3">
          
          {/* Cleaner Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="relative flex h-10 w-18 items-center justify-center rounded-lg bg-muted/60 overflow-hidden border transition-all duration-300 hover:shadow-md"
          >
            <div className={`
              absolute h-7 w-7 rounded-md bg-gradient-to-br transition-all duration-300 shadow-sm
              ${theme === 'dark' 
                ? 'from-purple-500 to-primary translate-x-3' 
                : 'from-yellow-400 to-orange-500 -translate-x-3'
              }
            `}>
              {theme === 'dark' && (
                <div className="absolute top-1 left-1 w-1 h-1 bg-white/90 rounded-full animate-pulse" />
              )}
            </div>
            
            <div className="flex items-center justify-between w-full px-2 relative z-10">
              <SparklesIcon className={`h-3 w-3 transition-colors ${theme === 'dark' ? 'text-purple-400' : 'text-muted-foreground/50'}`} />
              <ZapIcon className={`h-3 w-3 transition-colors ${theme === 'light' ? 'text-yellow-600' : 'text-muted-foreground/50'}`} />
            </div>
          </button>
          
          {/* Simple Settings */}
          <Button variant="ghost" size="sm" className="h-10 w-10 rounded-lg">
            <SettingsIcon className="h-4 w-4" />
          </Button>
          
          {/* Clean Logout */}
          <Button variant="outline" size="sm" className="rounded-lg">
            <LogOutIcon className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </div>
      
      {/* Subtle bottom accent */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </nav>
  );
}
