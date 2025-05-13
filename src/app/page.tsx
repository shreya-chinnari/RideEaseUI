'use client';

import RideBookingForm from "@/components/ride-booking-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { MessageSquareText, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function RideBookingPage() {
  return (
    <div className="relative min-h-[calc(100vh-12rem)]"> {/* Adjust min-height if necessary */}
      <div className="flex flex-col items-center justify-center space-y-8 pb-20"> {/* Added padding-bottom */}
        <Card className="w-full max-w-md shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-primary">Book Your Ride</CardTitle>
            <CardDescription>Enter your pickup and destination details.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="my-4 rounded-lg overflow-hidden shadow-md">
              <Image 
                src="https://picsum.photos/800/300" 
                alt="Map illustration" 
                width={800} 
                height={300} 
                className="object-cover w-full"
                data-ai-hint="map city"
              />
            </div>
            <RideBookingForm />
          </CardContent>
        </Card>
      </div>

      <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
        <TooltipProvider>
          {/* WhatsApp FAB and Dialog */}
          <Dialog>
            <Tooltip>
              <TooltipTrigger asChild>
                <DialogTrigger asChild>
                  <Button variant="outline" size="icon" className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 text-white shadow-lg">
                    <MessageSquareText className="h-7 w-7" />
                    <span className="sr-only">Open WhatsApp Chat</span>
                  </Button>
                </DialogTrigger>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>Chat on WhatsApp</p>
              </TooltipContent>
            </Tooltip>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-primary flex items-center gap-2">
                  <MessageSquareText className="h-6 w-6 text-green-500" />
                  Chat with RideEase on WhatsApp
                </DialogTitle>
                <DialogDescription>
                  Scan the QR code or tap the button below to start a chat.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4 space-y-4 text-center">
                <Image 
                  src="https://picsum.photos/200/200" 
                  alt="WhatsApp QR Code" 
                  width={150} 
                  height={150} 
                  className="object-cover rounded-md mx-auto shadow-md"
                  data-ai-hint="qr code" 
                />
                <p className="text-sm text-muted-foreground">
                  You can book rides, get fare estimates, and receive updates directly through WhatsApp.
                </p>
                <Button asChild className="w-full bg-green-500 hover:bg-green-600 text-white">
                  <Link href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"> {/* Replace with actual WhatsApp number */}
                    Chat on WhatsApp
                  </Link>
                </Button>
              </div>
            </DialogContent>
          </Dialog>

          {/* SMS FAB and Dialog */}
          <Dialog>
            <Tooltip>
              <TooltipTrigger asChild>
                <DialogTrigger asChild>
                  <Button variant="outline" size="icon" className="rounded-full w-14 h-14 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg">
                    <Smartphone className="h-7 w-7" />
                    <span className="sr-only">Open SMS Information</span>
                  </Button>
                </DialogTrigger>
              </TooltipTrigger>
              <TooltipContent side="left">
                <p>SMS Notifications</p>
              </TooltipContent>
            </Tooltip>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-primary flex items-center gap-2">
                  <Smartphone className="h-6 w-6 text-primary" /> 
                  SMS Notifications
                  </DialogTitle>
                <DialogDescription>
                  Stay informed with SMS updates directly to your phone.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4 space-y-4">
                <Image 
                  src="https://picsum.photos/300/150" 
                  alt="Mobile phone with SMS notification" 
                  width={300} 
                  height={150} 
                  className="object-contain w-full rounded-lg mx-auto shadow-md"
                  data-ai-hint="mobile sms"
                />
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>Receive OTPs for secure login and verification.</li>
                  <li>Get booking confirmations instantly.</li>
                  <li>Be notified about driver arrival times.</li>
                  <li>Receive ride completion summaries.</li>
                </ul>
                <p className="text-xs text-primary font-semibold text-center">
                  This service is automatically active for critical communications.
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </TooltipProvider>
      </div>
    </div>
  );
}
