import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary">
                <span className="text-sm font-bold text-primary-foreground">S</span>
              </div>
              <span className="font-bold bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Showtime
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              All-purpose event planning and organization tool for seamless show production.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/organizations" className="text-muted-foreground hover:text-foreground transition-colors">
                  Organizations
                </Link>
              </li>
              <li>
                <Link to="/calendar" className="text-muted-foreground hover:text-foreground transition-colors">
                  Calendar
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Features</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Event Management</li>
              <li className="text-muted-foreground">Team Collaboration</li>
              <li className="text-muted-foreground">File Sharing</li>
              <li className="text-muted-foreground">Real-time Messaging</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Support</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Help Center</li>
              <li className="text-muted-foreground">Contact Us</li>
              <li className="text-muted-foreground">Privacy Policy</li>
              <li className="text-muted-foreground">Terms of Service</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Showtime. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <span className="text-xs text-muted-foreground">
                Built for amazing event experiences
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
