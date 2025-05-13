'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useState, useEffect } from 'react';
import { MapPin, Car, DollarSign } from 'lucide-react';

const fareEstimateSchema = z.object({
  pickup: z.string().min(3, { message: 'Pickup location must be at least 3 characters.' }),
  destination: z.string().min(3, { message: 'Destination must be at least 3 characters.' }),
  serviceType: z.string({ required_error: 'Please select a service type.' }),
});

type FareEstimateFormValues = z.infer<typeof fareEstimateSchema>;

export default function FareEstimateForm() {
  const { toast } = useToast();
  const [estimatedFare, setEstimatedFare] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FareEstimateFormValues>({
    resolver: zodResolver(fareEstimateSchema),
    defaultValues: {
      pickup: '',
      destination: '',
    },
  });

  async function onSubmit(data: FareEstimateFormValues) {
    setIsLoading(true);
    setEstimatedFare(null);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Basic fare calculation logic (example)
    const distance = Math.random() * 20 + 5; // Random distance between 5 and 25 km
    let baseFare = 0;
    switch (data.serviceType) {
      case 'standard':
        baseFare = 50;
        break;
      case 'premium':
        baseFare = 100;
        break;
      case 'xl':
        baseFare = 150;
        break;
      default:
        baseFare = 70;
    }
    const fare = baseFare + distance * 12.5; // 12.5 per km
    
    setEstimatedFare(Math.round(fare));
    setIsLoading(false);
    toast({
      title: 'Fare Estimated!',
      description: `The estimated fare from ${data.pickup} to ${data.destination} is ₹${Math.round(fare)}.`,
    });
  }
  
  // useEffect to handle client-side only logic if Math.random() was used outside onSubmit
  // For this example, Math.random is inside onSubmit which is fine.

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
                <Input placeholder="Enter pickup address" {...field} className="text-base"/>
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
                <Input placeholder="Enter destination address" {...field} className="text-base"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="serviceType"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="flex items-center gap-2 text-md">
                <Car className="h-5 w-5 text-primary" /> Service Type
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="text-base">
                    <SelectValue placeholder="Select a service type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                  <SelectItem value="xl">XL (Larger Vehicle)</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6 shadow-md active:scale-95 transition-transform duration-150 ease-in-out" disabled={isLoading}>
          {isLoading ? 'Estimating...' : 'Estimate Fare'}
        </Button>
        {estimatedFare !== null && (
          <div className="mt-6 p-4 bg-secondary rounded-lg text-center shadow">
            <h3 className="text-lg font-semibold flex items-center justify-center gap-2">
              <DollarSign className="h-6 w-6 text-primary" /> Estimated Fare
            </h3>
            <p className="text-3xl font-bold text-primary">₹{estimatedFare}</p>
            <p className="text-sm text-muted-foreground">This is an estimate. Actual fare may vary.</p>
          </div>
        )}
      </form>
    </Form>
  );
}
