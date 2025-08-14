import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { UserIcon, MailIcon, PhoneIcon, CalendarIcon } from "lucide-react";

export default function Profile() {
  return (
    <div className="container py-8 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Profile</h1>
        <p className="text-muted-foreground mt-2">
          Manage your global profile settings and information
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <Card className="lg:col-span-1">
          <CardHeader className="text-center">
            <Avatar className="h-24 w-24 mx-auto mb-4">
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback className="text-lg">JD</AvatarFallback>
            </Avatar>
            <CardTitle>John Doe</CardTitle>
            <CardDescription>Event Production Specialist</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MailIcon className="h-4 w-4" />
              <span>john.doe@example.com</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <PhoneIcon className="h-4 w-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <CalendarIcon className="h-4 w-4" />
              <span>Joined March 2024</span>
            </div>
            <div className="pt-4">
              <Badge variant="secondary" className="mb-2">Available to work</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Profile Settings */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Profile Settings</CardTitle>
            <CardDescription>
              Update your personal information and preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" defaultValue="John" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" defaultValue="Doe" />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="john.doe@example.com" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" defaultValue="+1 (555) 123-4567" />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="role">Primary Role</Label>
              <Input id="role" defaultValue="Event Production Specialist" />
            </div>
            
            <div className="pt-4">
              <Button>Save Changes</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Organizations */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>My Organizations</CardTitle>
          <CardDescription>
            Organizations you're currently associated with
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <UserIcon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Demo Organization</h3>
                  <p className="text-sm text-muted-foreground">Lead Electrician</p>
                </div>
              </div>
              <Badge>Active</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
