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

  // Navigation items based on current layer
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
        ? 'bg-background/95 backdrop-blur-xl shadow-lg' 
        : 'bg-background/98 backdrop-blur-md'
      }
    `}>
      {/* LAYER 1: Brand + Controls */}
      <div className="border-b border-border/30">
        <div className="container flex h-14 items-center justify-between px-6">
          
          {/* Enhanced Logo */}
          <Link to="/" className="group flex items-center space-x-3">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-purple-600 transform group-hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/25">
              <div className="absolute top-1 right-1 w-0.5 h-0.5 bg-white/80 rounded-full animate-pulse" />
              <span className="text-lg font-bold text-white">S</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Showtime
              </span>
              <span className="text-xs text-muted-foreground/60 font-medium">
                EVENT PRODUCTION
              </span>
            </div>
          </Link>

          {/* Layer Status + Controls */}
          <div className="flex items-center space-x-4">
            
            {/* Current Layer Badge */}
            <div className="flex items-center space-x-2 bg-muted/40 rounded-lg px-3 py-1.5">
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getLayerColor(currentLayer)} animate-pulse`} />
              <span className="text-sm font-medium text-muted-foreground">
                {currentLayer.charAt(0).toUpperCase() + currentLayer.slice(1)} Layer
              </span>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="relative flex h-9 w-16 items-center justify-center rounded-lg bg-muted/60 overflow-hidden border transition-all duration-300 hover:shadow-md"
            >
              <div className={`
                absolute h-6 w-6 rounded-md bg-gradient-to-br transition-all duration-300 shadow-sm
                ${theme === 'dark' 
                  ? 'from-purple-500 to-primary translate-x-2.5' 
                  : 'from-yellow-400 to-orange-500 -translate-x-2.5'
                }
              `}>
                {theme === 'dark' && (
                  <div className="absolute top-0.5 left-0.5 w-0.5 h-0.5 bg-white/90 rounded-full animate-pulse" />
                )}
              </div>
              
              <div className="flex items-center justify-between w-full px-1.5 relative z-10">
                <SparklesIcon className={`h-3 w-3 transition-colors ${theme === 'dark' ? 'text-purple-400' : 'text-muted-foreground/50'}`} />
                <ZapIcon className={`h-3 w-3 transition-colors ${theme === 'light' ? 'text-yellow-600' : 'text-muted-foreground/50'}`} />
              </div>
            </button>
            
            {/* Settings & Logout */}
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="h-9 w-9 rounded-lg">
                <SettingsIcon className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="rounded-lg h-9">
                <LogOutIcon className="h-4 w-4 mr-1.5" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* LAYER 2: Layer Switcher + Navigation */}
      <div className="bg-gradient-to-r from-background/50 via-background/80 to-background/50">
        <div className="container flex h-12 items-center justify-between px-6">
          
          {/* Layer Switcher */}
          <div className="flex items-center bg-muted/30 rounded-lg p-0.5">
            {["user", "organization", "event"].map((layer) => (
              <button
                key={layer}
                onClick={() => setCurrentLayer(layer)}
                className={`
                  relative px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-300
                  ${currentLayer === layer 
                    ? `bg-gradient-to-r ${getLayerColor(layer)} text-white shadow-md transform scale-105` 
                    : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                  }
                `}
              >
                {/* Active glow effect */}
                {currentLayer === layer && (
                  <div className={`absolute inset-0 rounded-md bg-gradient-to-r ${getLayerColor(layer)}/30 animate-pulse blur-sm`} />
                )}
                <span className="relative z-10">
                  {layer.charAt(0).toUpperCase() + layer.slice(1)}
                </span>
              </button>
            ))}
          </div>

          {/* Navigation Items with Amazing Effects */}
          <div className="flex items-center space-x-1">
            {getCurrentNavItems().map((item) => {
              const isActive = location.pathname === item.to;
              const Icon = item.icon;
              
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={`
                    group relative flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-out
                    ${isActive 
                      ? `bg-gradient-to-r ${getLayerColor(currentLayer)}/15 text-primary border border-primary/20 shadow-lg shadow-primary/20` 
                      : 'text-muted-foreground hover:text-foreground hover:bg-gradient-to-r hover:from-primary/5 hover:via-purple-500/5 hover:to-primary/5'
                    }
                  `}
                >
                  {/* Amazing Active Glow Effect */}
                  {isActive && (
                    <>
                      <div className={`absolute inset-0 bg-gradient-to-r ${getLayerColor(currentLayer)}/20 rounded-lg animate-pulse blur-sm`} />
                      <div className={`absolute inset-0 bg-gradient-to-r ${getLayerColor(currentLayer)}/10 rounded-lg`} />
                    </>
                  )}
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />
                  
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
        </div>
      </div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
    </nav>
  );
}
