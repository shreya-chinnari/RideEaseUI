
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LogIn, UserCircle, Briefcase, CircleDollarSign, Power, Bell, MessageCircleQuestion, CarIcon, FileText, MapIcon, Navigation, ListChecks, ToggleRight, ShieldAlert, HelpCircle, Settings2 } from "lucide-react"; // Changed Car to CarIcon for clarity
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function DriverDashboardPage() {
  const features = [
    { 
      title: "Login & Profile Management", 
      icon: <UserCircle className="h-5 w-5 text-primary" />, // Changed from LogIn for better context
      content: (
        <div className="space-y-4">
          <Card className="bg-card/50">
            <CardHeader><CardTitle className="text-lg">Personal Information</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">View and edit your personal details.</p>
              <div className="p-3 bg-muted/30 rounded-md text-xs border">
                <p className="font-semibold mb-1">[Placeholder: Form to Edit Profile]</p>
                <p className="text-muted-foreground">Fields: Name, Phone, Email, Address.</p>
                <Button variant="outline" size="sm" className="mt-2">Edit Profile</Button>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card/50">
            <CardHeader><CardTitle className="text-lg flex items-center gap-2"><FileText className="h-5 w-5"/>Documents</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Upload and manage your license, insurance, and other required documents.</p>
              <div className="p-3 bg-muted/30 rounded-md text-xs border">
                <p className="font-semibold mb-1">[Placeholder: Document Upload Section]</p>
                <p className="text-muted-foreground">List of documents with status (Uploaded, Verified, Expired). Upload buttons for each.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    },
    { 
      title: "Trip Dashboard", 
      icon: <Briefcase className="h-5 w-5 text-primary" />, 
      content: (
        <div className="space-y-4">
          <Card className="bg-card/50">
            <CardHeader><CardTitle className="text-lg">Trip Requests & Current Trip</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">View incoming trip requests and details of your ongoing trip.</p>
              <div className="p-3 bg-muted/30 rounded-md text-xs border">
                <p className="font-semibold mb-1">[Placeholder: New Trip Request Card with Accept/Reject Buttons]</p>
                <p className="text-muted-foreground mb-2">Displays pickup, destination, estimated fare.</p>
                <p className="font-semibold mb-1">[Placeholder: Ongoing Trip Card with Navigation Link]</p>
                <Button variant="default" size="sm" className="mt-2"><Navigation className="h-4 w-4 mr-1"/> Start Navigation</Button>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card/50">
            <CardHeader><CardTitle className="text-lg flex items-center gap-2"><ListChecks className="h-5 w-5"/>Trip History</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Access your past trip details.</p>
              <div className="p-3 bg-muted/30 rounded-md text-xs border">[Placeholder: List/Table of Past Trips with Date, Route, Fare]</div>
            </CardContent>
          </Card>
           <Card className="bg-card/50">
            <CardHeader><CardTitle className="text-lg flex items-center gap-2"><MapIcon className="h-5 w-5"/>Route Map & Navigation</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Integrated map for viewing routes and turn-by-turn navigation for current trip.</p>
              <div className="p-3 bg-muted/30 rounded-md text-xs border h-24">[Placeholder: Embedded Map View (e.g., Google Maps/Mapbox)]</div>
            </CardContent>
          </Card>
        </div>
      ) 
    },
    { 
      title: "Earnings Summary", 
      icon: <CircleDollarSign className="h-5 w-5 text-primary" />, 
      content: (
        <div className="space-y-4">
           <Card className="bg-card/50">
            <CardHeader><CardTitle className="text-lg">Earnings Overview</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Track your daily, weekly, and monthly earnings.</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-3 bg-muted/30 rounded-md text-xs border text-center">
                  <p className="font-semibold">Today's Earnings</p>
                  <p className="text-lg text-primary">₹XXX.XX</p>
                </div>
                <div className="p-3 bg-muted/30 rounded-md text-xs border text-center">
                  <p className="font-semibold">This Week</p>
                  <p className="text-lg text-primary">₹XXXX.XX</p>
                </div>
                <div className="p-3 bg-muted/30 rounded-md text-xs border text-center">
                  <p className="font-semibold">This Month</p>
                  <p className="text-lg text-primary">₹XXXXX.XX</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card/50">
            <CardHeader><CardTitle className="text-lg">Trip-wise Breakdown</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Detailed breakdown of earnings from each trip, including bonuses and incentives.</p>
              <div className="p-3 bg-muted/30 rounded-md text-xs border">[Placeholder: Table/List of Trips with Earnings, Base Fare, Bonus, Deductions]</div>
            </CardContent>
          </Card>
        </div>
      )
    },
    { 
      title: "Availability Toggle", 
      icon: <Power className="h-5 w-5 text-primary" />, 
      content: (
         <div className="space-y-4 p-4">
          <Card className="bg-card/50">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <Label htmlFor="availability-toggle" className="text-lg font-semibold">
                  Go Online / Offline
                </Label>
                <Switch id="availability-toggle" className="data-[state=checked]:bg-green-500" />
              </div>
              <p className="text-sm text-muted-foreground mt-2">Toggle this switch to set your availability for receiving trip requests.</p>
            </CardContent>
          </Card>
          <Card className="bg-card/50">
            <CardHeader><CardTitle className="text-lg">Schedule Shifts (Optional)</CardTitle></CardHeader>
            <CardContent>
               <p className="text-sm text-muted-foreground mb-2">If applicable, manage your pre-scheduled work shifts.</p>
              <div className="p-3 bg-muted/30 rounded-md text-xs border">[Placeholder: Calendar View for Shift Scheduling and Management]</div>
            </CardContent>
          </Card>
        </div>
      )
    },
    { 
      title: "Notifications", 
      icon: <Bell className="h-5 w-5 text-primary" />, 
      content: (
        <div className="space-y-4">
          <Card className="bg-card/50">
            <CardHeader><CardTitle className="text-lg">Recent Alerts</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Stay updated with real-time alerts and messages from admins.</p>
              <div className="p-3 bg-muted/30 rounded-md text-xs border space-y-2">
                <div className="p-2 bg-background/50 border rounded-sm">New Trip Request: Pickup at Main St. <Badge variant="default" className="ml-2">New</Badge></div>
                <div className="p-2 bg-background/50 border rounded-sm">Admin Message: System maintenance tonight.</div>
                <div className="p-2 bg-background/50 border rounded-sm">Payout Processed: ₹XXX.XX credited. <Badge variant="secondary">Info</Badge></div>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    },
    { 
      title: "Support & Help", 
      icon: <MessageCircleQuestion className="h-5 w-5 text-primary" />, 
      content: (
         <div className="space-y-4">
          <Card className="bg-card/50">
            <CardHeader><CardTitle className="text-lg">Contact Support</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Reach out to the support team for assistance.</p>
              <div className="p-3 bg-muted/30 rounded-md text-xs border">
                <Button variant="default" size="sm"><MessageCircleQuestion className="h-4 w-4 mr-1"/> Chat with Support</Button>
                <p className="text-muted-foreground mt-1">Or call us at [Support Phone Number].</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card/50">
            <CardHeader><CardTitle className="text-lg flex items-center gap-2"><ShieldAlert className="h-5 w-5"/>Report an Issue</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Report any problems encountered during a trip or with the app.</p>
              <div className="p-3 bg-muted/30 rounded-md text-xs border">[Placeholder: Form to Report an Issue with Category, Description, Attachments]</div>
            </CardContent>
          </Card>
          <Card className="bg-card/50">
            <CardHeader><CardTitle className="text-lg flex items-center gap-2"><HelpCircle className="h-5 w-5"/>FAQs & Help Center</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Find answers to common questions.</p>
              <div className="p-3 bg-muted/30 rounded-md text-xs border">
                <Button variant="link" size="sm">Visit Help Center</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    },
    { 
      title: "Vehicle Info", 
      icon: <CarIcon className="h-5 w-5 text-primary" />, 
      content: (
        <div className="space-y-4">
          <Card className="bg-card/50">
            <CardHeader><CardTitle className="text-lg">Assigned Vehicle</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Details of the vehicle assigned to you.</p>
              <div className="p-3 bg-muted/30 rounded-md text-xs border">
                <p><strong>Model:</strong> [Vehicle Model]</p>
                <p><strong>License Plate:</strong> [Plate Number]</p>
                <p><strong>Color:</strong> [Vehicle Color]</p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card/50">
            <CardHeader><CardTitle className="text-lg flex items-center gap-2"><Settings2 className="h-5 w-5"/>Maintenance Request</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Notify administrators about vehicle maintenance requirements or issues.</p>
              <div className="p-3 bg-muted/30 rounded-md text-xs border">
                 <Button variant="outline" size="sm">Report Maintenance Issue</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full shadow-xl mb-8 bg-card">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-primary">Driver Web UI</CardTitle>
          <CardDescription>Manage your rides, earnings, and profile.</CardDescription>
        </CardHeader>
      </Card>

      <Accordion type="multiple" className="w-full space-y-4">
        {features.map((feature, index) => (
          <AccordionItem value={`item-${index}`} key={index} className="border-none">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-200 ease-in-out bg-card">
              <AccordionTrigger className="p-6 hover:no-underline">
                <div className="flex items-center gap-3">
                  {feature.icon}
                  <span className="text-xl font-semibold text-primary">{feature.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0">
                {feature.content}
              </AccordionContent>
            </Card>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
