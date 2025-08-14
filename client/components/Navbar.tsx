import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">S</span>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Showtime
          </span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Home
          </Link>
          <Link 
            to="/organizations" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Organizations
          </Link>
          <Link 
            to="/profile" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Profile
          </Link>
          <Link 
            to="/calendar" 
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Calendar
          </Link>
        </div>

        {/* Right side - Theme toggle and Logout */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-9 w-9"
          >
            {theme === "dark" ? (
              <SunIcon className="h-4 w-4" />
            ) : (
              <MoonIcon className="h-4 w-4" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
          
          <Button variant="outline" size="sm">
            Logout
          </Button>
        </div>
      </div>
    </nav>
  );
}
