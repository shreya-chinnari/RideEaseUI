'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import {
  ShieldCheck, CheckCircle, Smartphone, KeyRound, User, CalendarDays, Users, Mail,
  FileText, UploadCloud, ScanText, Camera, RefreshCw, Check, Info, Home, AlertCircle, ClockIcon
} from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";
import React from "react";


export default function CustomerKycPage() {
  const [dob, setDob] = React.useState<Date | undefined>(undefined);

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <h1 className="text-4xl font-bold text-center text-primary mb-12">Customer KYC Verification</h1>

      {/* Screen 1: KYC Home */}
      <Card className="shadow-xl overflow-hidden">
        <CardHeader className="bg-primary/10 p-6">
          <div className="flex items-center gap-4">
            <ShieldCheck className="h-10 w-10 text-primary" />
            <div>
              <CardTitle className="text-2xl font-bold text-primary">Verify Your Identity</CardTitle>
              <CardDescription>Complete a few quick steps to secure your account and unlock all features.</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <Image
              src="https://picsum.photos/seed/kyc_home/600/400"
              alt="KYC Banner"
              width={600}
              height={400}
              className="rounded-lg object-cover shadow-md"
              data-ai-hint="security identity"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Why KYC is Important:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                <span>Enhanced Security: Protects your account from unauthorized access.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                <span>Regulatory Compliance: Helps us adhere to legal requirements.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                <span>Seamless Bookings: Ensures smoother and faster ride confirmations.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 shrink-0" />
                <span>Access to All Features: Unlock exclusive offers and services.</span>
              </li>
            </ul>
            <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-3 mt-4">
              Start KYC Verification
            </Button>
          </div>
        </CardContent>
      </Card>

      <Separator className="my-12" />

      {/* Screen 2: Mobile Verification */}
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
            <Smartphone className="h-6 w-6 text-primary" /> Mobile Verification
          </CardTitle>
          <CardDescription>We'll send a one-time password (OTP) to your mobile number.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <div className="flex items-center">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-secondary text-muted-foreground text-sm h-10">
                  +91
                </span>
                <Input id="phone" type="tel" placeholder="Enter your 10-digit mobile number" className="rounded-l-none h-10" />
              </div>
            </div>
            <Button className="w-full md:w-auto h-10 bg-accent hover:bg-accent/90 text-accent-foreground">Send OTP</Button>
          </div>
          <div className="space-y-2">
            <Label htmlFor="otp">Enter OTP</Label>
            <div className="flex justify-center space-x-2">
              {[...Array(6)].map((_, i) => (
                <Input key={i} id={`otp-${i}`} type="text" maxLength={1} className="w-12 h-12 text-center text-2xl font-semibold" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground text-center mt-2">Didn't receive OTP? <Button variant="link" className="p-0 h-auto text-accent">Resend in 30s</Button></p>
          </div>
        </CardContent>
      </Card>

      <Separator className="my-12" />

      {/* Screen 3: Personal Details */}
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
            <User className="h-6 w-6 text-primary" /> Personal Details
          </CardTitle>
          <CardDescription>Please provide your personal information as per your ID.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" placeholder="Enter your full name" />
            </div>
            <div>
              <Label htmlFor="dob">Date of Birth</Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className="w-full justify-start text-left font-normal"
                  >
                    <CalendarDays className="mr-2 h-4 w-4" />
                    {dob ? format(dob, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={dob}
                    onSelect={setDob}
                    initialFocus
                    captionLayout="dropdown-buttons" 
                    fromYear={1950} 
                    toYear={new Date().getFullYear() - 18}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label>Gender</Label>
              <RadioGroup defaultValue="male" className="flex space-x-4 pt-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male">Male</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female">Female</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other">Other</Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <Label htmlFor="email">Email Address (Optional)</Label>
              <Input id="email" type="email" placeholder="Enter your email address" />
            </div>
          </div>
           <Button className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">Save & Continue</Button>
        </CardContent>
      </Card>

      <Separator className="my-12" />

      {/* Screen 4: ID Upload */}
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" /> ID Document Upload
          </CardTitle>
          <CardDescription>Upload a clear image of your government-issued ID.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <div>
            <Label htmlFor="docType">Document Type</Label>
            <Select>
              <SelectTrigger id="docType">
                <SelectValue placeholder="Select document type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="aadhaar">Aadhaar Card</SelectItem>
                <SelectItem value="passport">Passport</SelectItem>
                <SelectItem value="dl">Driver's License</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="docFront">Upload Front Image</Label>
              <Input id="docFront" type="file" className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20" />
            </div>
            <div>
              <Label htmlFor="docBack">Upload Back Image</Label>
              <Input id="docBack" type="file" className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20" />
            </div>
          </div>
          <div className="p-4 border rounded-lg bg-secondary/30">
            <h4 className="text-md font-semibold text-foreground mb-2 flex items-center gap-2">
              <ScanText className="h-5 w-5 text-primary" /> OCR Auto-fill Preview (Editable)
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><strong>Name:</strong> [Auto-filled Name]</p>
              <p><strong>DOB:</strong> [Auto-filled DOB]</p>
              <p><strong>ID Number:</strong> [Auto-filled ID Number]</p>
              <Button variant="outline" size="sm" className="mt-2">Edit Details</Button>
            </div>
          </div>
           <Button className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">Upload & Continue</Button>
        </CardContent>
      </Card>

      <Separator className="my-12" />

      {/* Screen 5: Live Selfie */}
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
            <Camera className="h-6 w-6 text-primary" /> Live Selfie Capture
          </CardTitle>
          <CardDescription>Please take a clear selfie. Ensure your face is well-lit and within the frame.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 p-6 items-center flex flex-col">
          <div className="w-full max-w-sm aspect-square bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
             <Image 
                src="https://picsum.photos/seed/selfie_placeholder/400/400" 
                alt="Selfie placeholder" 
                width={400} 
                height={400}
                className="object-cover"
                data-ai-hint="person selfie"
             />
            <div className="absolute inset-0 border-[3px] border-green-500 rounded-full m-auto w-3/4 h-3/4" style={{ clipPath: 'ellipse(40% 50% at 50% 50%)' }}></div>
             <p className="absolute bottom-4 text-center text-sm bg-black/50 text-white p-1 rounded">Align your face within the oval</p>
          </div>
          <div className="flex space-x-4">
            <Button variant="outline" className="flex-1">
              <RefreshCw className="mr-2 h-4 w-4" /> Retake
            </Button>
            <Button className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground">
              <Check className="mr-2 h-4 w-4" /> Capture & Continue
            </Button>
          </div>
        </CardContent>
      </Card>

      <Separator className="my-12" />

      {/* Screen 6: Submission Status */}
      <Card className="shadow-xl">
        <CardHeader className="text-center">
          <div className="mx-auto bg-yellow-100 rounded-full p-3 w-fit">
            <ClockIcon className="h-12 w-12 text-yellow-500" />
          </div>
          <CardTitle className="text-2xl font-bold text-yellow-600 mt-4">KYC Pending</CardTitle>
          <CardDescription>Your documents have been submitted for verification.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4 p-6 text-center">
          <div className="p-4 border rounded-lg bg-secondary/30">
            <h4 className="text-md font-semibold text-foreground mb-2">Summary of Uploaded Information:</h4>
            <ul className="list-disc list-inside text-sm text-muted-foreground text-left space-y-1">
              <li>Mobile Number: Verified</li>
              <li>Personal Details: Submitted</li>
              <li>ID Document (Aadhaar Card): Uploaded</li>
              <li>Live Selfie: Captured</li>
            </ul>
          </div>
          <p className="text-sm text-muted-foreground">
            Expected verification time: <span className="font-semibold text-foreground">24-48 hours</span>.
            You will be notified once the verification is complete.
          </p>
          <Button asChild size="lg" className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground mt-4">
            <Link href="/">Back to Home</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
