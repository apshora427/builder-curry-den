import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, PlusIcon, ClockIcon } from "lucide-react";

export default function Calendar() {
  const events = [
    {
      id: 1,
      title: "Concert Setup",
      date: "2024-12-20",
      time: "09:00 AM",
      type: "event",
      status: "upcoming"
    },
    {
      id: 2,
      title: "Team Meeting",
      date: "2024-12-18",
      time: "02:00 PM", 
      type: "meeting",
      status: "today"
    },
    {
      id: 3,
      title: "Sound Check",
      date: "2024-12-21",
      time: "03:00 PM",
      type: "task",
      status: "upcoming"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "today": return "bg-primary text-primary-foreground";
      case "upcoming": return "bg-secondary text-secondary-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Calendar</h1>
          <p className="text-muted-foreground mt-2">
            View your schedule across all organizations and events
          </p>
        </div>
        <Button>
          <PlusIcon className="h-4 w-4 mr-2" />
          Add Event
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calendar View */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center">
              <CalendarIcon className="h-5 w-5 mr-2" />
              December 2024
            </CardTitle>
            <CardDescription>
              Your events and meetings at a glance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2 mb-4">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                <div key={day} className="text-center text-sm font-medium text-muted-foreground p-2">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-2">
              {Array.from({ length: 35 }, (_, i) => {
                const day = i - 6; // Adjust for calendar start
                const isToday = day === 18;
                const hasEvent = [18, 20, 21].includes(day);
                
                return (
                  <div
                    key={i}
                    className={`
                      aspect-square flex items-center justify-center text-sm border rounded-md cursor-pointer
                      ${day < 1 || day > 31 ? 'text-muted-foreground bg-muted/20' : 'hover:bg-accent'}
                      ${isToday ? 'bg-primary text-primary-foreground' : ''}
                      ${hasEvent && !isToday ? 'bg-primary/10 text-primary' : ''}
                    `}
                  >
                    {day > 0 && day <= 31 ? day : ''}
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>
              Your next scheduled activities
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {events.map((event) => (
              <div key={event.id} className="flex items-start space-x-3 p-3 border rounded-lg">
                <div className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium truncate">{event.title}</h4>
                  <div className="flex items-center space-x-1 text-sm text-muted-foreground mt-1">
                    <ClockIcon className="h-3 w-3" />
                    <span>{event.time}</span>
                  </div>
                  <Badge className={`mt-2 text-xs ${getStatusColor(event.status)}`}>
                    {event.status}
                  </Badge>
                </div>
              </div>
            ))}
            
            <Button variant="outline" className="w-full mt-4">
              View All Events
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
