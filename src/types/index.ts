export interface Ride {
  id: string;
  date: string; // ISO string or Date object
  pickup: string;
  destination: string;
  fare: number;
  status: 'Completed' | 'Cancelled' | 'Ongoing'; // Example statuses
  // Add other relevant fields like driverId, vehicleType, etc.
}
