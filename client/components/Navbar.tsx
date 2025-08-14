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
  ChevronDownIcon,
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

  // Define navigation items based on the Showtime documentation
  const userPages = [
    { to: "/", icon: HomeIcon, label: "Home" },
    { to: "/organizations", icon: BuildingIcon, label: "My Organizations" },
    { to: "/calendar", icon: CalendarIcon, label: "Calendar" },
    { to: "/profile", icon: UserIcon, label: "Profile" },
    { to: "/settings", icon: SettingsIcon, label: "Settings" },
  ];

  const organizationPages = [
    { to: "/org/home", icon: HomeIcon, label: "Home" },
    { to: "/org/events", icon: CalendarIcon, label: "My Events" },
    { to: "/org/calendar", icon: CalendarIcon, label: "Calendar" },
    { to: "/org/messages", icon: MessageCircleIcon, label: "Messages" },
    { to: "/org/disk", icon: FolderIcon, label: "Disk" },
    { to: "/org/todo", icon: CheckSquareIcon, label: "Todo" },
    { to: "/org/profile", icon: UserIcon, label: "Profile" },
  ];

  const eventPages = [
    { to: "/event/home", icon: HomeIcon, label: "Home" },
    { to: "/event/schedule", icon: CalendarIcon, label: "Schedule" },
    { to: "/event/calendar", icon: CalendarIcon, label: "Calendar" },
    { to: "/event/messages", icon: MessageCircleIcon, label: "Messages" },
    { to: "/event/disk", icon: FolderIcon, label: "Disk" },
    { to: "/event/todo", icon: CheckSquareIcon, label: "Todo" },
    { to: "/event/crew", icon: UsersIcon, label: "My Crew" },
    { to: "/event/profile", icon: UserIcon, label: "Profile" },
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

  const getLayerName = (layer: string) => {
    switch (layer) {
      case "user": return "User Layer";
      case "organization": return "Organization Layer";
      case "event": return "Event Layer";
      default: return "User Layer";
    }
  };

  return (
    <nav className={`
      fixed top-0 w-full z-50 transition-all duration-500 ease-out
      ${isScrolled 
        ? 'bg-background/95 backdrop-blur-xl border-b shadow-lg shadow-primary/5' 
        : 'bg-gradient-to-r from-background/98 via-background/95 to-background/98 backdrop-blur-md'
      }
    `}>
      <div className="container flex h-20 items-center justify-between">
        {/* Enhanced Showtime Logo */}
        <Link to="/" className="group flex items-center space-x-4 relative">
          {/* Background glow effect */}
          <div className="absolute -inset-3 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out" />
          
          {/* Logo container with stage lighting effect */}
          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary via-purple-600 to-primary transform group-hover:scale-110 transition-all duration-500 ease-out shadow-xl shadow-primary/30">
            {/* Animated stage lights */}
            <div className="absolute inset-0 rounded-2xl overflow-hidden">
              <div className="absolute top-2 left-2 w-1.5 h-1.5 bg-white/90 rounded-full animate-pulse" />
              <div className="absolute bottom-2 right-3 w-1 h-1 bg-white/70 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
              <div className="absolute top-3 right-2 w-1 h-1 bg-white/80 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              <div className="absolute bottom-3 left-3 w-0.5 h-0.5 bg-white/60 rounded-full animate-twinkle" style={{ animationDelay: '1.5s' }} />
            </div>
            
            {/* Main logo with sparkle effect */}
            <span className="text-3xl font-bold text-white relative z-10 group-hover:rotate-12 transition-transform duration-500 drop-shadow-lg">
              S
            </span>
          </div>
          
          {/* Brand and layer info */}
          <div className="flex flex-col">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent group-hover:from-purple-600 group-hover:via-primary group-hover:to-purple-600 transition-all duration-700">
              Showtime
            </span>
            {/* Layer indicator */}
            <div className="flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getLayerColor(currentLayer)} animate-pulse`} />
              <span className="text-xs text-muted-foreground/80 font-medium tracking-wider">
                {getLayerName(currentLayer).toUpperCase()}
              </span>
            </div>
          </div>
        </Link>

        {/* Layer Switcher */}
        <div className="hidden lg:flex items-center space-x-2 bg-muted/30 rounded-xl p-1">
          {["user", "organization", "event"].map((layer) => (
            <button
              key={layer}
              onClick={() => setCurrentLayer(layer)}
              className={`
                relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300
                ${currentLayer === layer 
                  ? `bg-gradient-to-r ${getLayerColor(layer)} text-white shadow-lg` 
                  : 'text-muted-foreground hover:text-foreground hover:bg-background/50'
                }
              `}
            >
              {layer === "user" && <UserIcon className="inline h-4 w-4 mr-2" />}
              {layer === "organization" && <BuildingIcon className="inline h-4 w-4 mr-2" />}
              {layer === "event" && <CalendarIcon className="inline h-4 w-4 mr-2" />}
              {layer.charAt(0).toUpperCase() + layer.slice(1)}
              
              {/* Active indicator */}
              {currentLayer === layer && (
                <div className="absolute inset-0 rounded-lg bg-white/20 animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Navigation Items for Current Layer */}
        <div className="hidden md:flex items-center space-x-1">
          {getCurrentNavItems().slice(0, 5).map((item) => {
            const isActive = location.pathname === item.to;
            const Icon = item.icon;
            
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`
                  group relative flex items-center space-x-2 px-3 py-2.5 rounded-xl transition-all duration-300 ease-out
                  ${isActive 
                    ? `bg-gradient-to-r ${getLayerColor(currentLayer)}/15 text-primary border border-primary/20` 
                    : 'hover:bg-gradient-to-r hover:from-primary/5 hover:via-purple-500/5 hover:to-primary/5 text-muted-foreground hover:text-foreground'
                  }
                `}
              >
                {/* Active glow effect */}
                {isActive && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${getLayerColor(currentLayer)}/10 rounded-xl animate-pulse blur-sm`} />
                )}
                
                {/* Icon with professional animation */}
                <Icon className={`
                  h-4 w-4 relative z-10 transition-all duration-300
                  ${isActive ? 'text-primary scale-110' : 'group-hover:scale-110'}
                `} />
                
                {/* Label */}
                <span className="relative z-10 text-sm font-medium">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Right side - Theme toggle and Actions */}
        <div className="flex items-center space-x-4">
          {/* Professional Theme Toggle */}
          <div className="relative">
            <button
              onClick={toggleTheme}
              className="group relative flex h-12 w-24 items-center justify-center rounded-2xl bg-gradient-to-r from-muted/80 via-muted/60 to-muted/80 overflow-hidden border border-border/30 transition-all duration-500 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/15"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-purple-500/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-all duration-700" />
              
              {/* Theme indicator */}
              <div className={`
                absolute h-9 w-9 rounded-xl bg-gradient-to-br transition-all duration-700 ease-out shadow-xl
                ${theme === 'dark' 
                  ? 'from-purple-500 via-primary to-purple-700 translate-x-5 shadow-primary/40' 
                  : 'from-yellow-400 via-orange-400 to-yellow-600 -translate-x-5 shadow-yellow-400/40'
                }
              `}>
                {/* Theme-specific effects */}
                {theme === 'dark' && (
                  <div className="absolute inset-0 rounded-xl overflow-hidden">
                    <div className="absolute top-1.5 left-1.5 w-1 h-1 bg-white/90 rounded-full animate-twinkle" />
                    <div className="absolute bottom-1.5 right-2 w-0.5 h-0.5 bg-white/80 rounded-full animate-twinkle" style={{ animationDelay: '0.5s' }} />
                    <div className="absolute top-2 right-1.5 w-0.5 h-0.5 bg-white/70 rounded-full animate-twinkle" style={{ animationDelay: '1s' }} />
                  </div>
                )}
                
                {theme === 'light' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-5 h-5 bg-white/40 rounded-full animate-spin-slow" />
                  </div>
                )}
              </div>
              
              {/* Theme icons */}
              <div className="flex items-center justify-between w-full px-3 relative z-10">
                <SparklesIcon className={`h-4 w-4 transition-all duration-500 ${theme === 'dark' ? 'text-purple-400' : 'text-muted-foreground/40'}`} />
                <ZapIcon className={`h-4 w-4 transition-all duration-500 ${theme === 'light' ? 'text-yellow-600' : 'text-muted-foreground/40'}`} />
              </div>
            </button>
          </div>
          
          {/* Settings and Logout */}
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="sm"
              className="group relative h-11 w-11 rounded-xl hover:bg-primary/10 transition-all duration-300"
            >
              <SettingsIcon className="h-5 w-5 group-hover:rotate-90 transition-transform duration-500" />
            </Button>
            
            <Button 
              variant="outline" 
              size="sm"
              className="group relative overflow-hidden border-2 border-border/40 hover:border-red-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-red-400/10"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/5 to-red-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-out" />
              <LogOutIcon className="h-4 w-4 mr-2 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
              <span className="relative z-10">Logout</span>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Professional bottom accent line */}
      <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent`} />
    </nav>
  );
}
