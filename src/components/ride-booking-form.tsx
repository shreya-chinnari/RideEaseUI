'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { MapPin, CalendarClock, Wallet, CreditCard, DollarSign, IndianRupee } from 'lucide-react';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label'; // Added import for Label

const rideBookingSchema = z.object({
  pickup: z.string().min(3, { message: 'Pickup location must be at least 3 characters.' }),
  destination: z.string().min(3, { message: 'Destination must be at least 3 characters.' }),
  time: z.string().optional(), // Making time optional for "Book Now"
  paymentMethod: z.string({ required_error: "Please select a payment method." }),
});

type RideBookingFormValues = z.infer<typeof rideBookingSchema>;

export default function RideBookingForm() {
  const { toast } = useToast();
  const [walletBalance, setWalletBalance] = useState(250.75); // Sample balance
  const [isAddMoneyDialogOpen, setIsAddMoneyDialogOpen] = useState(false);
  const [addMoneyAmount, setAddMoneyAmount] = useState('');
  const [isSubmittingRide, setIsSubmittingRide] = useState(false);
  const [isAddingMoney, setIsAddingMoney] = useState(false);


  const form = useForm<RideBookingFormValues>({
    resolver: zodResolver(rideBookingSchema),
    defaultValues: {
      pickup: '',
      destination: '',
      time: '',
      paymentMethod: 'wallet', // Default to wallet
    },
  });

  async function handleAddMoney() {
    if (!addMoneyAmount || parseFloat(addMoneyAmount) <= 0) {
      toast({
        title: 'Invalid Amount',
        description: 'Please enter a valid amount to add.',
        variant: 'destructive',
      });
      return;
    }
    setIsAddingMoney(true);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    const amountToAdd = parseFloat(addMoneyAmount);
    setWalletBalance(prevBalance => prevBalance + amountToAdd);
    toast({
      title: 'Money Added!',
      description: `₹${amountToAdd.toFixed(2)} has been added to your wallet.`,
    });
    setAddMoneyAmount('');
    setIsAddMoneyDialogOpen(false);
    setIsAddingMoney(false);
  }

  async function onSubmit(data: RideBookingFormValues) {
    setIsSubmittingRide(true);
    console.log(data);

    if (data.paymentMethod === 'wallet' && walletBalance < 100) { // Example: minimum ride fare
       toast({
        title: 'Insufficient Wallet Balance',
        description: 'Please add money to your wallet or choose another payment method.',
        variant: 'destructive',
      });
      setIsSubmittingRide(false);
      return;
    }
    
    // Simulate booking
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: 'Ride Booked!',
      description: `Your ride from ${data.pickup} to ${data.destination} has been requested. Payment via ${data.paymentMethod}.`,
      variant: 'default',
    });
    form.reset({ pickup: '', destination: '', time: '', paymentMethod: 'wallet' });
    setIsSubmittingRide(false);
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

        <Card className="bg-card/50 shadow-inner">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2 text-foreground">
              <Wallet className="h-6 w-6 text-primary" /> Payment Options
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-secondary/30 rounded-md border">
              <div>
                <p className="text-sm text-muted-foreground">Wallet Balance</p>
                <p className="text-2xl font-bold text-accent flex items-center">
                  <IndianRupee className="h-6 w-6 mr-1" />{walletBalance.toFixed(2)}
                </p>
              </div>
              <Dialog open={isAddMoneyDialogOpen} onOpenChange={setIsAddMoneyDialogOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                    <DollarSign className="h-4 w-4 mr-1" /> Add Money
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                      <Wallet className="h-6 w-6 text-primary" /> Add Money to Wallet
                    </DialogTitle>
                    <DialogDescription>
                      Enter the amount you want to add to your RideEase wallet.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                      <Label htmlFor="amount" className="text-right col-span-1">
                        Amount (₹)
                      </Label>
                      <Input
                        id="amount"
                        type="number"
                        value={addMoneyAmount}
                        onChange={(e) => setAddMoneyAmount(e.target.value)}
                        placeholder="e.g., 500"
                        className="col-span-3"
                      />
                    </div>
                  </div>
                  <DialogFooter>
                    <DialogClose asChild>
                       <Button variant="outline" onClick={() => setAddMoneyAmount('')}>Cancel</Button>
                    </DialogClose>
                    <Button onClick={handleAddMoney} disabled={isAddingMoney} className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      {isAddingMoney ? 'Adding...' : 'Add to Wallet'}
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>

            <FormField
              control={form.control}
              name="paymentMethod"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="text-md text-foreground">Select Payment Method</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <Card 
                          className={cn(
                            "w-full p-4 rounded-lg border-2 transition-all cursor-pointer hover:border-primary",
                            field.value === 'wallet' ? "border-primary bg-primary/10" : "border-border"
                          )}
                          onClick={() => field.onChange('wallet')}
                        >
                          <FormControl>
                            <RadioGroupItem value="wallet" className="sr-only" />
                          </FormControl>
                          <FormLabel className="font-medium flex items-center gap-2 cursor-pointer w-full">
                            <Wallet className="h-5 w-5 text-primary" /> In-App Wallet
                            {field.value === 'wallet' && <span className="text-xs text-primary ml-auto">(Selected)</span>}
                          </FormLabel>
                        </Card>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                         <Card 
                            className={cn(
                              "w-full p-4 rounded-lg border-2 transition-all cursor-pointer hover:border-primary",
                              field.value === 'card' ? "border-primary bg-primary/10" : "border-border"
                            )}
                            onClick={() => field.onChange('card')}
                          >
                          <FormControl>
                            <RadioGroupItem value="card" className="sr-only" />
                          </FormControl>
                          <FormLabel className="font-medium flex items-center gap-2 cursor-pointer w-full">
                            <CreditCard className="h-5 w-5 text-primary" /> Credit/Debit Card
                             {field.value === 'card' && <span className="text-xs text-primary ml-auto">(Selected)</span>}
                          </FormLabel>
                        </Card>
                      </FormItem>
                       <FormItem className="flex items-center space-x-3 space-y-0">
                         <Card 
                            className={cn(
                              "w-full p-4 rounded-lg border-2 transition-all cursor-pointer hover:border-primary",
                              field.value === 'cash' ? "border-primary bg-primary/10" : "border-border"
                            )}
                            onClick={() => field.onChange('cash')}
                          >
                          <FormControl>
                            <RadioGroupItem value="cash" className="sr-only" />
                          </FormControl>
                          <FormLabel className="font-medium flex items-center gap-2 cursor-pointer w-full">
                            <IndianRupee className="h-5 w-5 text-primary" /> Cash
                             {field.value === 'cash' && <span className="text-xs text-primary ml-auto">(Selected)</span>}
                          </FormLabel>
                        </Card>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6 shadow-md active:scale-95 transition-transform duration-150 ease-in-out" disabled={isSubmittingRide}>
          {isSubmittingRide ? 'Booking...' : 'Book Ride Now'}
        </Button>
      </form>
    </Form>
  );
}
