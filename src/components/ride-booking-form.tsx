'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { MapPin, CalendarClock } from 'lucide-react';

const rideBookingSchema = z.object({
  pickup: z.string().min(3, { message: 'Pickup location must be at least 3 characters.' }),
  destination: z.string().min(3, { message: 'Destination must be at least 3 characters.' }),
  time: z.string().optional(), // Making time optional for "Book Now"
});

type RideBookingFormValues = z.infer<typeof rideBookingSchema>;

export default function RideBookingForm() {
  const { toast } = useToast();
  const form = useForm<RideBookingFormValues>({
    resolver: zodResolver(rideBookingSchema),
    defaultValues: {
      pickup: '',
      destination: '',
      time: '',
    },
  });

  function onSubmit(data: RideBookingFormValues) {
    console.log(data);
    toast({
      title: 'Ride Booked!',
      description: `Your ride from ${data.pickup} to ${data.destination} has been requested.`,
      variant: 'default',
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="pickup"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2 text-md">
                <MapPin className="h-5 w-5 text-primary" /> Pickup Location
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter pickup address" {...field} className="text-base" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="destination"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2 text-md">
                <MapPin className="h-5 w-5 text-primary" /> Destination
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter destination address" {...field} className="text-base" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="time"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2 text-md">
                <CalendarClock className="h-5 w-5 text-primary" /> Pickup Time (Optional)
              </FormLabel>
              <FormControl>
                <Input type="datetime-local" {...field} className="text-base" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6 shadow-md active:scale-95 transition-transform duration-150 ease-in-out">
          Book Ride Now
        </Button>
      </form>
    </Form>
  );
}
