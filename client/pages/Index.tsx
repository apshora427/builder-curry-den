import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  CalendarIcon, 
  UsersIcon, 
  MessageCircleIcon, 
  FolderIcon,
  CheckCircleIcon,
  MapIcon,
  UtensilsIcon,
  SettingsIcon,
  SparklesIcon,
  ZapIcon,
  ShieldIcon,
  GlobeIcon
} from "lucide-react";

export default function Index() {
  const features = [
    {
      icon: <CalendarIcon className="h-6 w-6" />,
      title: "Smart Scheduling",
      description: "Organize events with precision using our advanced calendar system across all layers."
    },
    {
      icon: <UsersIcon className="h-6 w-6" />,
      title: "Team Management",
      description: "Efficiently manage crews, assign roles, and track team performance in real-time."
    },
    {
      icon: <MessageCircleIcon className="h-6 w-6" />,
      title: "Real-time Communication",
      description: "Stay connected with instant messaging, voice calls, and team announcements."
    },
    {
      icon: <FolderIcon className="h-6 w-6" />,
      title: "File Sharing",
      description: "Secure cloud storage with permission-based access for all your event assets."
    },
    {
      icon: <CheckCircleIcon className="h-6 w-6" />,
      title: "Task Management",
      description: "Kanban boards and smart task delegation to keep everyone on track."
    },
    {
      icon: <MapIcon className="h-6 w-6" />,
      title: "Venue Mapping",
      description: "Interactive 2D maps and CAD viewers for perfect venue visualization."
    }
  ];

  const benefits = [
    {
      icon: <SparklesIcon className="h-5 w-5" />,
      title: "Efficiency",
      description: "Streamline workflows"
    },
    {
      icon: <ZapIcon className="h-5 w-5" />,
      title: "Automation",
      description: "Smart task management"
    },
    {
      icon: <ShieldIcon className="h-5 w-5" />,
      title: "Security",
      description: "Enterprise-grade protection"
    },
    {
      icon: <GlobeIcon className="h-5 w-5" />,
      title: "Accessibility",
      description: "Web and mobile ready"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-primary/5">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
        
        <div className="relative container px-4 py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-8 inline-flex items-center rounded-full border px-4 py-2 text-sm bg-muted/50">
              <SparklesIcon className="mr-2 h-4 w-4 text-primary" />
              All-in-one event planning platform
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              <span className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Welcome to{" "}
              </span>
              <span className="bg-gradient-to-r from-primary via-purple-600 to-primary bg-clip-text text-transparent">
                Showtime
              </span>
            </h1>
            
            <p className="mb-8 text-lg text-muted-foreground sm:text-xl md:text-2xl max-w-3xl mx-auto">
              Centralize all tasks from previsualization to execution. Built for professionals who demand excellence in event production.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Link to="/organizations" className="flex items-center">
                  Get Started
                  <SparklesIcon className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Bar */}
      <section className="border-y bg-muted/30">
        <div className="container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <span className="text-primary">{benefit.icon}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-sm">{benefit.title}</h3>
                  <p className="text-xs text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24">
        <div className="container px-4">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Everything you need for{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                perfect events
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              From planning to execution, Showtime provides all the tools your team needs to create memorable experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
                    <span className="text-primary">{feature.icon}</span>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary/5 via-purple-500/5 to-primary/5">
        <div className="container px-4 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Ready to elevate your events?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of event professionals who trust Showtime for their productions.
            </p>
            <Button size="lg" className="text-lg px-8 py-6">
              <Link to="/organizations">
                Start Your Journey
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
