import { RideHistoryList } from "@/components/ride-history-list";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import type { Ride } from "@/types"; // Assuming you'll create this type

const mockRideHistory: Ride[] = [
  { id: '1', date: '2024-07-20', pickup: '123 Main St, Anytown', destination: '456 Oak Ave, Anytown', fare: 150.75, status: 'Completed' },
  { id: '2', date: '2024-07-18', pickup: '789 Pine Ln, Anytown', destination: '321 Elm Rd, Anytown', fare: 220.50, status: 'Completed' },
  { id: '3', date: '2024-07-15', pickup: 'Mall Road', destination: 'Airport Terminal 2', fare: 300.00, status: 'Cancelled' },
  { id: '4', date: '2024-07-10', pickup: 'City Center', destination: 'North Suburb', fare: 180.20, status: 'Completed' },
];


export default function RideHistoryPage() {
  return (
    <div className="flex flex-col items-center space-y-8">
      <Card className="w-full max-w-2xl shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-foreground">Your Ride History</CardTitle>
          <CardDescription>Review your past journeys with RideEase.</CardDescription>
        </CardHeader>
        <CardContent>
          {mockRideHistory.length > 0 ? (
            <ScrollArea className="h-[calc(100vh-20rem)] sm:h-[calc(100vh-22rem)]"> {/* Adjust height as needed */}
              <RideHistoryList rides={mockRideHistory} />
            </ScrollArea>
          ) : (
            <div className="text-center py-10">
              <p className="text-muted-foreground text-lg">No ride history yet.</p>
              <p className="text-sm text-muted-foreground">Start booking rides to see them here!</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
