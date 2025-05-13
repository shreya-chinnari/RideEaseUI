import type { Ride } from "@/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, CalendarDays, IndianRupee, CheckCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface RideHistoryItemProps {
  ride: Ride;
}

export function RideHistoryItem({ ride }: RideHistoryItemProps) {
  const isCompleted = ride.status === 'Completed';
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-200 ease-in-out">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl text-foreground flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" /> To: {ride.destination}
            </CardTitle>
            <CardDescription className="flex items-center gap-2 mt-1">
              <MapPin className="h-4 w-4 text-muted-foreground" /> From: {ride.pickup}
            </CardDescription>
          </div>
          <Badge 
            variant={isCompleted ? "default" : "destructive"}
            className={cn(
              "text-xs",
              isCompleted ? "bg-green-500 text-white" : "bg-red-500 text-white"
            )}
          >
            {isCompleted ? <CheckCircle className="mr-1 h-3 w-3" /> : <XCircle className="mr-1 h-3 w-3" />}
            {ride.status}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex items-center gap-2">
          <CalendarDays className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium">Date</p>
            <p className="text-sm text-foreground">{new Date(ride.date).toLocaleDateString()}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <IndianRupee className="h-5 w-5 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium">Fare</p>
            <p className="text-sm text-foreground">₹{ride.fare.toFixed(2)}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
