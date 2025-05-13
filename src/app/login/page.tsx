'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Phone, KeyRound } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

const loginSchema = z.object({
  phone: z.string().regex(/^\d{10}$/, { message: 'Phone number must be 10 digits.' }),
});

const otpSchema = z.object({
  otp: z.string().length(6, { message: 'OTP must be 6 digits.' }),
});

type LoginFormValues = z.infer<typeof loginSchema>;
type OtpFormValues = z.infer<typeof otpSchema>;

export default function LoginPage() {
  const { toast } = useToast();
  const [otpSent, setOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const loginForm = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { phone: '' },
  });

  const otpForm = useForm<OtpFormValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: { otp: '' },
  });

  async function onLoginSubmit(data: LoginFormValues) {
    setIsLoading(true);
    // Simulate sending OTP
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Sending OTP to:', data.phone);
    toast({
      title: 'OTP Sent!',
      description: `An OTP has been sent to ${data.phone}.`,
    });
    setOtpSent(true);
    setIsLoading(false);
  }

  async function onOtpSubmit(data: OtpFormValues) {
    setIsLoading(true);
    // Simulate verifying OTP
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Verifying OTP:', data.otp);
    if (data.otp === '123456') { // Mock OTP
      toast({
        title: 'Login Successful!',
        description: 'Welcome to RideEase!',
      });
      // Here you would typically redirect the user: router.push('/');
    } else {
      toast({
        title: 'Login Failed',
        description: 'Invalid OTP. Please try again.',
        variant: 'destructive',
      });
    }
    setIsLoading(false);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] py-12">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <Image 
            src="https://picsum.photos/150/150" 
            alt="Security lock" 
            width={100} 
            height={100} 
            className="object-cover rounded-full mx-auto mb-4 shadow-md"
            data-ai-hint="security lock"
          />
          <CardTitle className="text-3xl font-bold text-primary">
            {otpSent ? 'Verify OTP' : 'Login to RideEase'}
          </CardTitle>
          <CardDescription>
            {otpSent ? 'Enter the 6-digit OTP sent to your phone.' : 'Enter your phone number to receive an OTP.'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!otpSent ? (
            <Form {...loginForm}>
              <form onSubmit={loginForm.handleSubmit(onLoginSubmit)} className="space-y-6">
                <FormField
                  control={loginForm.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-md">
                        <Phone className="h-5 w-5 text-primary" /> Phone Number
                      </FormLabel>
                      <FormControl>
                        <Input type="tel" placeholder="Enter 10-digit phone number" {...field} className="text-base" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6 shadow-md active:scale-95" disabled={isLoading}>
                  {isLoading ? 'Sending OTP...' : 'Send OTP'}
                </Button>
              </form>
            </Form>
          ) : (
            <Form {...otpForm}>
              <form onSubmit={otpForm.handleSubmit(onOtpSubmit)} className="space-y-6">
                <FormField
                  control={otpForm.control}
                  name="otp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-md">
                        <KeyRound className="h-5 w-5 text-primary" /> OTP
                      </FormLabel>
                      <FormControl>
                        <Input type="text" maxLength={6} placeholder="Enter 6-digit OTP" {...field} className="text-base tracking-widest text-center" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-6 shadow-md active:scale-95" disabled={isLoading}>
                  {isLoading ? 'Verifying...' : 'Verify OTP & Login'}
                </Button>
                <Button variant="link" onClick={() => { setOtpSent(false); loginForm.reset(); otpForm.reset();}} className="w-full text-primary">
                  Change phone number
                </Button>
              </form>
            </Form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
