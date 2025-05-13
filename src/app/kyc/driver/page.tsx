
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import {
  ShieldCheck, ListChecks, Smartphone, KeyRound, User, HomeIcon, Phone, FileText, UploadCloud, ScanText,
  Car, CalendarDays, AlertTriangle, FileSpreadsheet, CalendarCheck, Landmark, Hash, FileImage, Camera, Smile, Eye, CheckCircle, Loader2
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { format } from "date-fns";

export default function DriverKycPage() {
  const [licenseExpiry, setLicenseExpiry] = React.useState<Date | undefined>(undefined);
  const [regExpiry, setRegExpiry] = React.useState<Date | undefined>(undefined);
  const [insuranceExpiry, setInsuranceExpiry] = React.useState<Date | undefined>(undefined);

  return (
    <div className="container mx-auto px-4 py-8 space-y-12">
      <h1 className="text-4xl font-bold text-center text-primary mb-12">Driver Onboarding Verification</h1>

      {/* Screen 1: Welcome */}
      <Card className="shadow-xl overflow-hidden">
        <CardHeader className="bg-primary/10 p-6">
           <div className="flex items-center gap-4">
            <ShieldCheck className="h-10 w-10 text-primary" />
            <div>
                <CardTitle className="text-2xl font-bold text-primary">Get Verified to Start Driving</CardTitle>
                <CardDescription>Complete these steps to join the RideEase driver network.</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <Image
              src="https://picsum.photos/seed/driver_welcome/600/400"
              alt="Driver Welcome Banner"
              width={600}
              height={400}
              className="rounded-lg object-cover shadow-md"
              data-ai-hint="happy driver"
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Onboarding Checklist:</h3>
            <ul className="space-y-2 text-muted-foreground">
              {[
                "Phone Verification", "Personal Information", "Government ID", "Driver's License", 
                "Vehicle Documents (RC)", "Vehicle Insurance", "Bank Details", "Live Selfie & Liveness Check"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <ListChecks className="h-5 w-5 text-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground text-lg py-3 mt-4">
              Start Now
            </Button>
          </div>
        </CardContent>
      </Card>

      <Separator className="my-12" />

      {/* Screen 2: Phone Verification */}
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
            <Smartphone className="h-6 w-6 text-primary" /> Mobile Verification
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
            <div>
              <Label htmlFor="driver-phone">Phone Number</Label>
              <div className="flex items-center">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-secondary text-muted-foreground text-sm h-10">
                  +91
                </span>
                <Input id="driver-phone" type="tel" placeholder="Enter your 10-digit mobile number" className="rounded-l-none h-10" />
              </div>
            </div>
            <Button className="w-full md:w-auto h-10 bg-accent hover:bg-accent/90 text-accent-foreground">Send OTP</Button>
          </div>
          <div className="space-y-2">
            <Label htmlFor="driver-otp">Enter OTP</Label>
            <div className="flex justify-center space-x-2">
              {[...Array(6)].map((_, i) => (
                <Input key={i} id={`driver-otp-${i}`} type="text" maxLength={1} className="w-12 h-12 text-center text-2xl font-semibold" />
              ))}
            </div>
             <p className="text-sm text-muted-foreground text-center mt-2">Didn't receive OTP? <Button variant="link" className="p-0 h-auto text-accent">Resend in 30s</Button></p>
          </div>
        </CardContent>
      </Card>
      
      <Separator className="my-12" />

      {/* Screen 3: Personal Information */}
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
            <User className="h-6 w-6 text-primary" /> Personal Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="driverFullName">Full Name</Label>
              <Input id="driverFullName" placeholder="As per your Government ID" />
            </div>
            <div>
              <Label htmlFor="emergencyContact">Emergency Contact Number</Label>
              <Input id="emergencyContact" type="tel" placeholder="Friend or family member" />
            </div>
          </div>
          <div>
            <Label htmlFor="driverAddress">Full Address</Label>
            <Textarea id="driverAddress" placeholder="Enter your current residential address" rows={3} />
          </div>
          <div>
            <Label htmlFor="addressProof">Upload Address Proof (Optional)</Label>
            <Input id="addressProof" type="file" className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20" />
            <p className="text-xs text-muted-foreground mt-1">E.g., Utility Bill, Rent Agreement (if different from ID address)</p>
          </div>
           <Button className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">Save & Continue</Button>
        </CardContent>
      </Card>

      <Separator className="my-12" />

      {/* Screen 4: Government ID */}
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" /> Government ID
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <div>
            <Label htmlFor="driverDocType">Document Type</Label>
            <Select>
              <SelectTrigger id="driverDocType">
                <SelectValue placeholder="Select ID type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="aadhaar">Aadhaar Card</SelectItem>
                <SelectItem value="passport">Passport</SelectItem>
                <SelectItem value="voterid">Voter ID</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="driverDocFront">Upload Front Image</Label>
              <Input id="driverDocFront" type="file" className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20" />
            </div>
            <div>
              <Label htmlFor="driverDocBack">Upload Back Image</Label>
              <Input id="driverDocBack" type="file" className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20" />
            </div>
          </div>
          <div className="p-4 border rounded-lg bg-secondary/30">
            <h4 className="text-md font-semibold text-foreground mb-2 flex items-center gap-2">
              <ScanText className="h-5 w-5 text-primary" /> OCR Auto-fill Preview (Editable)
            </h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p><strong>Name:</strong> [Auto-filled Name]</p>
              <p><strong>ID Number:</strong> [Auto-filled ID Number]</p>
              <Button variant="outline" size="sm" className="mt-2">Edit Details</Button>
            </div>
          </div>
           <Button className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">Upload & Continue</Button>
        </CardContent>
      </Card>
      
      <Separator className="my-12" />

      {/* Screen 5: Driver's License */}
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
            <Car className="h-6 w-6 text-primary" /> Driver's License
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <Label htmlFor="licenseFront">Upload License Front</Label>
                <Input id="licenseFront" type="file" className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20" />
            </div>
             <div>
                <Label htmlFor="licenseBack">Upload License Back</Label>
                <Input id="licenseBack" type="file" className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20" />
            </div>
          </div>
          <div>
            <Label htmlFor="licenseExpiry">License Expiry Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant={"outline"} className="w-full justify-start text-left font-normal">
                  <CalendarDays className="mr-2 h-4 w-4" />
                  {licenseExpiry ? format(licenseExpiry, "PPP") : <span>Pick expiry date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={licenseExpiry} onSelect={setLicenseExpiry} initialFocus />
              </PopoverContent>
            </Popover>
          </div>
          <Alert variant="destructive" className="mt-4">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Expired License Warning!</AlertTitle>
            <AlertDescription>
              Your license appears to be expired. Please upload a valid, unexpired license.
            </AlertDescription>
          </Alert>
           <Button className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">Upload & Continue</Button>
        </CardContent>
      </Card>

      <Separator className="my-12" />

      {/* Screen 6: Vehicle Documents (RC) */}
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" /> Vehicle RC Book
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <Label htmlFor="rcFront">Upload RC Front</Label>
                    <Input id="rcFront" type="file" className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20" />
                </div>
                <div>
                    <Label htmlFor="rcBack">Upload RC Back</Label>
                    <Input id="rcBack" type="file" className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20" />
                </div>
            </div>
            <div>
                <Label htmlFor="plateNumber">Vehicle Plate Number</Label>
                <Input id="plateNumber" placeholder="e.g., MH12AB3456" />
            </div>
            <div>
                <Label htmlFor="regExpiry">Registration Expiry Date</Label>
                <Popover>
                <PopoverTrigger asChild>
                    <Button variant={"outline"} className="w-full justify-start text-left font-normal">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    {regExpiry ? format(regExpiry, "PPP") : <span>Pick expiry date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={regExpiry} onSelect={setRegExpiry} initialFocus />
                </PopoverContent>
                </Popover>
            </div>
            <Button className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">Upload & Continue</Button>
        </CardContent>
      </Card>

      <Separator className="my-12" />

      {/* Screen 7: Insurance Details */}
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
            <FileSpreadsheet className="h-6 w-6 text-primary" /> Vehicle Insurance Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
            <div>
                <Label htmlFor="insuranceDoc">Upload Insurance Document</Label>
                <Input id="insuranceDoc" type="file" className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20" />
            </div>
             <div>
                <Label htmlFor="insuranceExpiry">Insurance Validity Date</Label>
                <Popover>
                <PopoverTrigger asChild>
                    <Button variant={"outline"} className="w-full justify-start text-left font-normal">
                    <CalendarCheck className="mr-2 h-4 w-4" />
                    {insuranceExpiry ? format(insuranceExpiry, "PPP") : <span>Pick expiry date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={insuranceExpiry} onSelect={setInsuranceExpiry} initialFocus />
                </PopoverContent>
                </Popover>
            </div>
            <Button className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">Upload & Continue</Button>
        </CardContent>
      </Card>
      
      <Separator className="my-12" />

      {/* Screen 8: Bank Details */}
      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
            <Landmark className="h-6 w-6 text-primary" /> Bank Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="accHolderName">Account Holder Name</Label>
              <Input id="accHolderName" placeholder="As per bank records" />
            </div>
            <div>
              <Label htmlFor="accNumber">Account Number / UPI ID</Label>
              <Input id="accNumber" placeholder="Enter Bank A/C or UPI ID" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="ifscCode">IFSC Code</Label>
              <Input id="ifscCode" placeholder="Enter bank IFSC code" />
            </div>
            <div>
              <Label htmlFor="cancelledCheque">Upload Cancelled Cheque (Optional)</Label>
              <Input id="cancelledCheque" type="file" className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20" />
            </div>
          </div>
           <Button className="w-full md:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">Save & Continue</Button>
        </CardContent>
      </Card>

      <Separator className="my-12" />

      {/* Screen 9: Live Selfie + Liveness */}
       <Card className="shadow-xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-foreground flex items-center gap-2">
            <Camera className="h-6 w-6 text-primary" /> Live Selfie & Liveness Check
          </CardTitle>
          <CardDescription>Follow the on-screen instructions for a quick liveness check.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 p-6 items-center flex flex-col">
          <div className="w-full max-w-sm aspect-square bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
             <Image 
                src="https://picsum.photos/seed/driver_selfie/400/400" 
                alt="Driver Selfie placeholder" 
                width={400} 
                height={400}
                className="object-cover"
                data-ai-hint="person selfie"
             />
            <div className="absolute inset-0 border-[3px] border-green-500 rounded-full m-auto w-3/4 h-3/4" style={{ clipPath: 'ellipse(40% 50% at 50% 50%)' }}></div>
             <p className="absolute top-4 text-center text-lg font-semibold bg-black/60 text-white p-2 rounded">
                <Smile className="inline-block mr-2 h-5 w-5"/> Please SMILE
             </p>
             <p className="absolute bottom-4 text-center text-sm bg-black/50 text-white p-1 rounded">Ensure good lighting and clear view</p>
          </div>
          <Button className="w-full max-w-sm bg-accent hover:bg-accent/90 text-accent-foreground">
            <Check className="mr-2 h-4 w-4" /> Capture & Submit
          </Button>
        </CardContent>
      </Card>

      <Separator className="my-12" />

      {/* Final Submission Page */}
      <Card className="shadow-xl">
        <CardHeader className="text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto" />
          <CardTitle className="text-2xl font-bold text-green-600 mt-4">Application Submitted!</CardTitle>
          <CardDescription>Your onboarding documents are under review.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 p-6">
          <h4 className="text-lg font-semibold text-foreground text-center mb-4">Verification Status:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: "Phone Verification", status: "Completed", icon: <Smartphone className="h-5 w-5"/> },
              { name: "Personal Info", status: "Completed", icon: <User className="h-5 w-5"/> },
              { name: "Government ID", status: "Pending", icon: <FileText className="h-5 w-5"/> },
              { name: "Driver's License", status: "Pending", icon: <Car className="h-5 w-5"/> },
              { name: "Vehicle RC", status: "Completed", icon: <FileText className="h-5 w-5"/> },
              { name: "Insurance", status: "Pending", icon: <FileSpreadsheet className="h-5 w-5"/> },
              { name: "Bank Details", status: "Completed", icon: <Landmark className="h-5 w-5"/> },
              { name: "Live Selfie", status: "Pending", icon: <Camera className="h-5 w-5"/> },
            ].map((item, idx) => (
              <Card key={idx} className={`p-4 ${item.status === "Completed" ? "bg-green-50 border-green-200" : "bg-yellow-50 border-yellow-200"}`}>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-full ${item.status === "Completed" ? "bg-green-100 text-green-600" : "bg-yellow-100 text-yellow-600"}`}>
                    {item.icon}
                  </div>
                  <div>
                    <p className="font-medium text-sm text-foreground">{item.name}</p>
                    <p className={`text-xs ${item.status === "Completed" ? "text-green-700" : "text-yellow-700"}`}>
                      {item.status === "Completed" ? <CheckCircle className="inline h-3 w-3 mr-1"/> : <Loader2 className="inline h-3 w-3 mr-1 animate-spin"/>}
                      {item.status}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center mt-6">
            We will notify you once the review process is complete (typically 2-3 business days).
          </p>
          <Button asChild size="lg" className="w-full md:w-auto bg-primary hover:bg-primary/90 text-primary-foreground mt-6 block mx-auto">
            <Link href="/driver/dashboard">Go to Driver Dashboard</Link>
          </Button>
        </CardContent>
      </Card>

    </div>
  );
}
