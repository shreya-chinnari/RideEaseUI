'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
} from '@/components/ui/alert-dialog'; // Using AlertDialog for SOS
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { MapPin, User, Car, IndianRupee, ShieldAlert, Star, Phone, MessageSquare, Navigation } from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock data (replace with actual data fetching or props)
const mockDriver = {
  name: 'Rajesh Kumar',
  avatarUrl: 'https://picsum.photos/seed/driver/100/100',
  vehicleModel: 'Toyota Etios',
  vehiclePlate: 'KA 01 AB 1234',
  rating: 4.8,
  phone: '+91 9876543210',
};

const mockRider = {
  name: 'Priya Sharma', // In a real app, this would come from auth
  avatarUrl: 'https://picsum.photos/seed/rider/100/100',
};

export default function RideConfirmationDetails() {
  const searchParams = useSearchParams();
  const [currentRating, setCurrentRating] = useState(0);
  const [rideDetails, setRideDetails] = useState({
    pickup: '',
    destination: '',
    fare: '',
    serviceType: '',
  });

  useEffect(() => {
    setRideDetails({
      pickup: searchParams.get('pickup') || 'Not specified',
      destination: searchParams.get('destination') || 'Not specified',
      fare: searchParams.get('fare') || 'N/A',
      serviceType: searchParams.get('serviceType') || 'Standard',
    });
  }, [searchParams]);

  const handleRating = (rate: number) => {
    setCurrentRating(rate);
    // Here you would typically submit the rating to a backend
    console.log(`Rated ${rate} stars`);
  };

  if (!rideDetails.pickup || rideDetails.pickup === 'Not specified') {
    // Or a more sophisticated loading state
    return <div className="text-center p-8">Loading ride details...</div>;
  }

  return (
    <div className="space-y-6">
      {/* Ride Summary Card */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2 text-primary">
            <Car className="h-6 w-6" /> Your Ride is Confirmed!
          </CardTitle>
          <CardDescription>Estimated Fare: <span className="font-semibold text-accent">₹{rideDetails.fare}</span> for {rideDetails.serviceType} service.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">PICKUP</p>
              <p className="font-medium text-card-foreground">{rideDetails.pickup}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-muted-foreground" />
            <div>
              <p className="text-xs text-muted-foreground">DESTINATION</p>
              <p className="font-medium text-card-foreground">{rideDetails.destination}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Driver Details Card */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2 text-foreground">
            <User className="h-6 w-6 text-primary" /> Driver Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage src={mockDriver.avatarUrl} alt={mockDriver.name} data-ai-hint="person portrait" />
              <AvatarFallback>{mockDriver.name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-lg font-semibold text-card-foreground">{mockDriver.name}</p>
              <p className="text-sm text-muted-foreground">{mockDriver.vehicleModel} - <Badge variant="secondary">{mockDriver.vehiclePlate}</Badge></p>
              <div className="flex items-center gap-1 mt-1">
                <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                <span className="text-sm font-medium text-card-foreground">{mockDriver.rating}/5</span>
              </div>
            </div>
          </div>
           <div className="flex space-x-2 pt-2">
            <Button variant="outline" size="sm" asChild>
              <a href={`tel:${mockDriver.phone}`}>
                <Phone className="h-4 w-4 mr-2" /> Call Driver
              </a>
            </Button>
            <Button variant="outline" size="sm">
              <MessageSquare className="h-4 w-4 mr-2" /> Message Driver
            </Button>
          </div>
        </CardContent>
      </Card>
      
      {/* Rider Details Card (Minimal) */}
       <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2 text-foreground">
            <User className="h-6 w-6 text-secondary" /> Rider Details
          </CardTitle>
        </CardHeader>
        <CardContent className="flex items-center gap-4">
           <Avatar className="h-12 w-12">
              <AvatarImage src={mockRider.avatarUrl} alt={mockRider.name} data-ai-hint="person face" />
              <AvatarFallback>{mockRider.name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <p className="text-lg font-medium text-card-foreground">{mockRider.name}</p>
        </CardContent>
      </Card>

      {/* Location Tracking Card */}
      <Card className="shadow-md">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2 text-foreground">
            <Navigation className="h-6 w-6 text-primary" /> Live Location Tracking
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="aspect-video bg-muted rounded-md flex items-center justify-center overflow-hidden">
            <Image 
              src="https://picsum.photos/seed/map/600/300" 
              alt="Map placeholder" 
              width={600} 
              height={300}
              className="object-cover w-full h-full"
              data-ai-hint="street map" 
            />
          </div>
          <p className="text-sm text-muted-foreground mt-2 text-center">Driver is on the way. Track their live location above.</p>
        </CardContent>
      </Card>

      {/* SOS Button and Driver Rating */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2 text-destructive">
              <ShieldAlert className="h-6 w-6" /> Emergency SOS
            </CardTitle>
          </CardHeader>
          <CardContent>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive" className="w-full text-lg py-3">
                  <ShieldAlert className="h-5 w-5 mr-2" /> Activate SOS
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-destructive flex items-center gap-2">
                     <ShieldAlert className="h-6 w-6" /> Confirm SOS Activation
                  </AlertDialogTitle>
                  <AlertDialogDescription>
                    Are you sure you want to activate the SOS feature? This will alert your emergency contacts and our support team immediately.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter className="sm:justify-start">
                  <AlertDialogAction onClick={() => console.log("SOS Activated!")}>
                    Yes, Activate SOS
                  </AlertDialogAction>
                  <AlertDialogCancel onClick={() => console.log("SOS Cancelled")}>
                     Cancel 
                  </AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <p className="text-xs text-muted-foreground mt-2 text-center">Use only in case of a genuine emergency.</p>
          </CardContent>
        </Card>

        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2 text-foreground">
              <Star className="h-6 w-6 text-primary" /> Rate Your Driver
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-3">Your feedback helps us improve our service.</p>
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
            {currentRating > 0 && <p className="text-sm text-accent text-center">Thanks for your rating of {currentRating} stars!</p>}
             <p className="text-xs text-muted-foreground mt-2 text-center">You can rate your driver after the trip is completed.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
