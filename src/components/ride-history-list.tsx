import type { Ride } from "@/types";
import { RideHistoryItem } from "@/components/ride-history-item";

interface RideHistoryListProps {
  rides: Ride[];
}

export function RideHistoryList({ rides }: RideHistoryListProps) {
  if (!rides || rides.length === 0) {
    return <p className="text-center text-muted-foreground py-8">You have no past rides.</p>;
  }

  return (
    <div className="space-y-4">
      {rides.map((ride) => (
        <RideHistoryItem key={ride.id} ride={ride} />
      ))}
    </div>
  );
}
