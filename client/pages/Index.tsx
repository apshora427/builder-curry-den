import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  CalendarIcon, 
  UsersIcon, 
  MessageCircleIcon, 
  FolderIcon,
  CheckCircleIcon,
  ClockIcon,
  BellIcon,
  TrendingUpIcon,
  ActivityIcon,
  PlusIcon,
  ArrowRightIcon,
  SparklesIcon
} from "lucide-react";

export default function Index() {
  // Mock data for the dashboard
  const quickStats = [
    { label: "Active Events", value: "3", icon: CalendarIcon, color: "text-blue-500" },
    { label: "Organizations", value: "2", icon: UsersIcon, color: "text-purple-500" },
    { label: "Unread Messages", value: "12", icon: MessageCircleIcon, color: "text-green-500" },
    { label: "Pending Tasks", value: "8", icon: CheckCircleIcon, color: "text-orange-500" },
  ];

  const recentActivity = [
    { type: "task", title: "Sound check completed", time: "2 hours ago", status: "completed" },
    { type: "message", title: "New message from lighting crew", time: "4 hours ago", status: "unread" },
    { type: "event", title: "Concert rehearsal scheduled", time: "6 hours ago", status: "info" },
    { type: "file", title: "Stage layout uploaded to disk", time: "8 hours ago", status: "info" },
  ];

  const upcomingEvents = [
    { name: "Rock Concert 2024", date: "Dec 20", time: "19:00", venue: "Madison Square", role: "Lead Audio" },
    { name: "Corporate Gala", date: "Dec 22", time: "18:30", venue: "Grand Ballroom", role: "Lighting Tech" },
    { name: "Music Festival", date: "Dec 25", time: "14:00", venue: "Central Park", role: "Stage Manager" },
  ];

  const quickActions = [
    { label: "Create Event", icon: PlusIcon, to: "/event/create", color: "bg-primary" },
    { label: "Join Organization", icon: UsersIcon, to: "/organizations", color: "bg-purple-500" },
    { label: "View Calendar", icon: CalendarIcon, to: "/calendar", color: "bg-blue-500" },
    { label: "Check Messages", icon: MessageCircleIcon, to: "/messages", color: "bg-green-500" },
  ];

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "task": return CheckCircleIcon;
      case "message": return MessageCircleIcon;
      case "event": return CalendarIcon;
      case "file": return FolderIcon;
      default: return ActivityIcon;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "text-green-500";
      case "unread": return "text-blue-500";
      case "info": return "text-muted-foreground";
      default: return "text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container py-8 space-y-8">
        {/* Welcome Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              Welcome back, John
            </h1>
            <p className="text-lg text-muted-foreground">
              Here's what's happening with your events today
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              <SparklesIcon className="h-3 w-3 mr-1" />
              User Layer
            </Badge>
            <Button size="sm">
              <BellIcon className="h-4 w-4 mr-2" />
              Notifications
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {quickStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="relative overflow-hidden border-0 shadow-md hover:shadow-lg transition-all duration-300 group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </CardTitle>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="flex items-center text-xs text-muted-foreground mt-2">
                    <TrendingUpIcon className="h-3 w-3 mr-1" />
                    <span>Active this week</span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <Card className="lg:col-span-2 border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center">
                <ActivityIcon className="h-5 w-5 mr-2 text-primary" />
                Recent Activity
              </CardTitle>
              <CardDescription>
                Your latest updates across all layers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivity.map((activity, index) => {
                const Icon = getActivityIcon(activity.type);
                return (
                  <div key={index} className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted/50 transition-colors group">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{activity.title}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <ClockIcon className="h-3 w-3 text-muted-foreground" />
                        <span className={`text-xs ${getStatusColor(activity.status)}`}>
                          {activity.time}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
              <Button variant="outline" className="w-full mt-4">
                View All Activity
                <ArrowRightIcon className="h-4 w-4 ml-2" />
              </Button>
            </CardContent>
          </Card>

          {/* Upcoming Events */}
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center">
                <CalendarIcon className="h-5 w-5 mr-2 text-primary" />
                Upcoming Events
              </CardTitle>
              <CardDescription>
                Your next scheduled productions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="p-3 border rounded-lg hover:bg-primary/5 transition-colors group cursor-pointer">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium text-sm group-hover:text-primary transition-colors">
                      {event.name}
                    </h4>
                    <Badge variant="outline" className="text-xs">
                      {event.role}
                    </Badge>
                  </div>
                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <CalendarIcon className="h-3 w-3 mr-1" />
                      <span>{event.date} at {event.time}</span>
                    </div>
                    <p>{event.venue}</p>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4" asChild>
                <Link to="/calendar">
                  View Full Calendar
                  <ArrowRightIcon className="h-4 w-4 ml-2" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>
              Get started with common tasks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <Button
                    key={index}
                    variant="outline"
                    className="h-20 flex-col space-y-2 group hover:border-primary/50 transition-all duration-300"
                    asChild
                  >
                    <Link to={action.to}>
                      <div className={`p-3 rounded-lg ${action.color} group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-sm font-medium">{action.label}</span>
                    </Link>
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
