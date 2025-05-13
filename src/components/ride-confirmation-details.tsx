
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { 
  AlertDialog, 
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent, 
  AlertDialogDescription, 
  AlertDialogFooter, 
  AlertDialogHeader, 
  AlertDialogTitle, 
  AlertDialogTrigger 
} from '@/components/ui/alert-dialog';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  MapPin, User, Car, ShieldAlert, Star, Phone, MessageSquare, Navigation,
  ArrowLeft, Clock, LifeBuoy, Share2, ShieldCheck, XCircle, AlertTriangle, HelpCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';

const mockDriver = {
  name: 'Sipho Dlamini', // South African name
  avatarUrl: 'https://picsum.photos/seed/driver_sa/100/100',
  vehicleModel: 'Toyota Hilux', // Common SA vehicle
  vehicleColor: 'Silver',
  vehiclePlate: 'GP 123 XYZ', // Sample SA plate
  rating: 4.7,
  phone: '+27 82 123 4567', // Sample SA phone
};

// Simulate ride status for conditional UI
type RideStatus = "EN_ROUTE_TO_PICKUP" | "ARRIVED_AT_PICKUP" | "ONGOING" | "COMPLETED" | "CANCELLED";

export default function RideConfirmationDetails() {
  const [currentRating, setCurrentRating] = useState(0);
  const [rideDetails, setRideDetails] = useState({
    pickup: '123 Main St, Sandton', 
    destination: '789 Oak Ave, Rosebank', 
    fare: '150', 
    serviceType: 'Premium', 
    estimatedTime: '15 mins', 
    estimatedDistance: '7 km', 
  });
  const [rideStatus, setRideStatus] = useState<RideStatus>("EN_ROUTE_TO_PICKUP"); 
  const [eta, setEta] = useState<string>("5 mins"); 

  useEffect(() => {
    const etaInterval = setInterval(() => {
      if (rideStatus !== "COMPLETED" && rideStatus !== "CANCELLED") {
        const randomMinutes = Math.floor(Math.random() * 10) + 1;
        setEta(`${randomMinutes} mins`);
      }
    }, 15000);
    return () => clearInterval(etaInterval);
  }, [rideStatus]);

  const handleRating = (rate: number) => {
    setCurrentRating(rate);
    console.log(`Rated ${rate} stars`);
    // API call to submit rating
  };

  const isRideActive = rideStatus !== "COMPLETED" && rideStatus !== "CANCELLED";

  return (
    <div className="flex flex-col h-full bg-background">
      {/* Sticky Top Bar */}
      <header className="sticky top-0 left-0 right-0 z-20 bg-primary text-primary-foreground p-3 shadow-md flex items-center justify-between">
        <Link href="/" aria-label="Back to Home">
          <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/80">
            <ArrowLeft className="h-6 w-6" />
          </Button>
        </Link>
        <h1 className="text-lg font-semibold">
          {rideStatus === "COMPLETED" ? "Ride Completed" : rideStatus === "CANCELLED" ? "Ride Cancelled" : "Ride in Progress"}
        </h1>
        {/* SOS button moved to bottom right FAB */}
        <div className="w-10 h-10"> {/* Placeholder for balance */}</div>
      </header>

      {/* Main Scrollable Content Area */}
      <main className="flex-grow overflow-y-auto pb-28"> {/* Padding for bottom sticky bar + new SOS FAB */}
        {/* Live Map View */}
        <section className="relative h-[45vh] bg-muted mb-1">
          <Image 
            src="https://picsum.photos/seed/map_route_active/1200/600" 
            alt="Live map tracking driver" 
            layout="fill" 
            objectFit="cover"
            data-ai-hint="navigation map"
          />
          {isRideActive && (
            <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm p-2 rounded-md shadow-lg flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-foreground">ETA: {eta}</span>
            </div>
          )}
           <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <MapPin className="h-8 w-8 text-blue-500 fill-blue-300" />
           </div>
            <div className="absolute top-1/3 left-1/4">
              <Car className="h-10 w-10 text-red-500 transform -rotate-45" />
           </div>
           <div className="absolute bottom-1/4 right-1/3">
             <MapPin className="h-8 w-8 text-green-500 fill-green-300" />
           </div>
        </section>

        {/* Driver Info Section */}
        <Card className="mx-2 my-3 shadow-lg rounded-xl">
          <CardHeader>
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16 border-2 border-primary">
                <AvatarImage src={mockDriver.avatarUrl} alt={mockDriver.name} data-ai-hint="driver portrait" />
                <AvatarFallback className="bg-muted text-muted-foreground">{mockDriver.name.substring(0, 2).toUpperCase()}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-xl text-foreground">{mockDriver.name}</CardTitle>
                <div className="flex items-center gap-1 mt-1">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <span className="text-md font-semibold text-foreground">{mockDriver.rating}/5</span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="text-sm text-muted-foreground space-y-1">
              <p className="flex items-center gap-2"><Car className="h-4 w-4 text-primary" />{mockDriver.vehicleModel} ({mockDriver.vehicleColor})</p>
              <div><Badge variant="secondary" className="text-xs">{mockDriver.vehiclePlate}</Badge></div>
            </div>
            <div className="flex space-x-2 pt-1">
              <Button variant="outline" className="flex-1 border-highlight-green text-highlight-green hover:bg-highlight-green hover:text-accent-foreground" asChild>
                <a href={`tel:${mockDriver.phone}`}>
                  <Phone className="h-4 w-4 mr-2" /> Call Driver
                </a>
              </Button>
              <Button variant="outline" className="flex-1">
                <MessageSquare className="h-4 w-4 mr-2" /> Message
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Ride Info Section */}
        <Card className="mx-2 my-3 shadow-lg rounded-xl">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">Ride Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-1 shrink-0" />
              <div>
                <p className="text-xs text-muted-foreground uppercase">Pickup</p>
                <p className="font-medium text-card-foreground">{rideDetails.pickup}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-destructive mt-1 shrink-0" /> 
              <div>
                <p className="text-xs text-muted-foreground uppercase">Drop-off</p>
                <p className="font-medium text-card-foreground">{rideDetails.destination}</p>
              </div>
            </div>
            <Separator className="my-3"/>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <p className="text-xs text-muted-foreground uppercase">Est. Time</p>
                <p className="font-medium text-card-foreground">{rideDetails.estimatedTime}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase">Est. Distance</p>
                <p className="font-medium text-card-foreground">{rideDetails.estimatedDistance}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase">Ride Type</p>
                <p className="font-medium text-card-foreground">{rideDetails.serviceType}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground uppercase">Est. Fare</p>
                <p className="font-bold text-accent text-lg">R{rideDetails.fare}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Customer Support / Safety Section */}
        <Card className="mx-2 my-3 shadow-lg rounded-xl">
            <CardHeader>
                <CardTitle className="text-xl text-foreground">Support & Safety</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start gap-2">
                    <LifeBuoy className="h-5 w-5 text-primary"/> Contact Customer Support
                </Button>
                <Button variant="outline" className="w-full justify-start gap-2">
                    <Share2 className="h-5 w-5 text-primary"/> Share Ride Details
                </Button>
                 <Button variant="ghost" size="sm" className="w-full justify-start gap-2 text-muted-foreground">
                    <ShieldCheck className="h-5 w-5 text-muted-foreground"/> View Safety Guidelines
                </Button>
            </CardContent>
        </Card>

        {/* Rating Section (shown post-ride) */}
        {rideStatus === "COMPLETED" && (
          <Card className="mx-2 my-3 shadow-lg rounded-xl">
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2 text-foreground">
                <Star className="h-6 w-6 text-primary" /> Rate Your Ride
              </CardTitle>
              <CardDescription>How was your trip with {mockDriver.name}?</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center space-x-1 mb-3">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Button
                    key={star}
                    variant="ghost"
                    size="icon"
                    onClick={() => handleRating(star)}
                    aria-label={`Rate ${star} stars`}
                    className="group"
                  >
                    <Star
                      className={cn(
                        "h-8 w-8 transition-colors duration-150",
                        star <= currentRating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground group-hover:text-yellow-300"
                      )}
                    />
                  </Button>
                ))}
              </div>
              {currentRating > 0 && <p className="text-sm text-accent text-center font-medium">Thanks for rating {currentRating} stars!</p>}
            </CardContent>
          </Card>
        )}
      </main>

      {/* Bottom Sticky Action Bar */}
      <footer className="fixed bottom-0 left-0 right-0 z-20 bg-background p-3 border-t shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
        <div className="flex items-center justify-around space-x-2">
          {isRideActive && (
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline" className="flex-1 border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground">
                    <XCircle className="h-5 w-5 mr-2"/> Cancel Ride
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                  <AlertDialogHeader>
                      <AlertDialogTitle>Cancel Ride?</AlertDialogTitle>
                      <AlertDialogDescription>
                          Are you sure you want to cancel this ride? Cancellation fees may apply.
                      </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                      <AlertDialogCancel>Keep Ride</AlertDialogCancel>
                      <AlertDialogAction 
                        className="bg-destructive hover:bg-destructive/90" 
                        onClick={() => { console.log("Ride Cancelled"); setRideStatus("CANCELLED");}}>
                        Yes, Cancel
                        </AlertDialogAction>
                  </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          )}
          <Button variant="outline" className="flex-1">
            <AlertTriangle className="h-5 w-5 mr-2"/> Report Issue
          </Button>
          {!isRideActive && rideStatus === "COMPLETED" && !currentRating && (
             <Button onClick={() => document.querySelector('main')?.scrollTo({top: document.querySelector('main')?.scrollHeight, behavior: 'smooth'})} className="flex-1 bg-highlight-green text-accent-foreground hover:bg-highlight-green/90">
                <Star className="h-5 w-5 mr-2"/> Rate Driver
             </Button>
          )}
           <Button variant="ghost" size="sm" className="flex-1 text-muted-foreground">
            <HelpCircle className="h-5 w-5 mr-1"/> Help Center
          </Button>
        </div>
      </footer>

      {/* SOS Button FAB */}
      <div className="fixed bottom-[5rem] right-6 z-30"> {/* Positioned above the footer bar */}
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive" className="w-16 h-16 rounded-full shadow-xl p-0 flex items-center justify-center">
              <ShieldAlert className="h-8 w-8" />
              <span className="sr-only">SOS</span>
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle className="text-destructive flex items-center gap-2">
                <ShieldAlert className="h-6 w-6" /> Contacting Emergency Services
              </AlertDialogTitle>
              <AlertDialogDescription className="text-left space-y-2 text-sm">
                <p>Your SOS has been activated. We are attempting to contact your emergency contact and RideEase support.</p>
                <p className="font-semibold mt-3">Primary Emergency Contact:</p>
                <ul className="list-none pl-1 space-y-0.5">
                  <li><strong>Name:</strong> Nomusa Khumalo (Sample)</li>
                  <li><strong>Phone:</strong> +27 83 987 6543 (Sample)</li>
                </ul>
                <p className="mt-2">Your current location and ride details are being shared.</p>
                <p className="mt-3 text-xs text-muted-foreground">If you are not in a genuine emergency or activated this by mistake, please cancel immediately.</p>
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel onClick={() => console.log("SOS Cancelled by user")}>Cancel SOS</AlertDialogCancel>
              <AlertDialogAction className="bg-destructive hover:bg-destructive/90" onClick={() => console.log("SOS Confirmed by user. Help is on the way!")}>
                Confirm Emergency
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>

    </div>
  );
}

