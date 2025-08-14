import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusIcon, BuildingIcon } from "lucide-react";

export default function Organizations() {
  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">My Organizations</h1>
          <p className="text-muted-foreground mt-2">
            Manage your event organizations and teams
          </p>
        </div>
        <Button>
          <PlusIcon className="h-4 w-4 mr-2" />
          Create Organization
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border-dashed border-2 hover:border-primary/50 transition-colors cursor-pointer">
          <CardHeader className="text-center">
            <div className="mx-auto h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <PlusIcon className="h-6 w-6 text-primary" />
            </div>
            <CardTitle>Create New Organization</CardTitle>
            <CardDescription>
              Start planning your next event by creating a new organization
            </CardDescription>
          </CardHeader>
        </Card>
        
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <BuildingIcon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <CardTitle>Demo Organization</CardTitle>
                <CardDescription>Sample organization for testing</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>3 Events</span>
              <span>12 Members</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
