
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Users, UserCheck, Car, Route, BarChart2, CreditCard, Bell, MessageSquare, Settings, History, Search, PlusCircle, Edit3, Trash2, ShieldCheck, Map, ListChecks, Download, DollarSign, MessageCircle, Ticket,SlidersHorizontal, MapPin, ListTree } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function AdminDashboardPage() {
  const features = [
    { 
      title: "User Management", 
      icon: <Users className="h-5 w-5 text-primary" />, 
      content: (
        <div className="space-y-4">
          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2"><ListChecks className="h-5 w-5"/>User List & Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                Display an interactive table of all users (drivers, dispatchers, customers).
                Include search, filtering by role/status, and pagination.
              </p>
              <div className="p-3 bg-muted/30 rounded-md text-xs border">
                <p className="font-semibold mb-1">[Placeholder: User Data Table]</p>
                <p className="text-muted-foreground">Columns: User ID, Name, Email, Role, Status, Last Login, Actions.</p>
                <div className="flex gap-2 mt-2">
                  <Button variant="outline" size="sm"><Search className="h-4 w-4 mr-1"/> Search Users</Button>
                  <Button variant="outline" size="sm"><PlusCircle className="h-4 w-4 mr-1"/> Add User</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card/50">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2"><ShieldCheck className="h-5 w-5"/>Role-Based Access Control</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">
                Manage roles (e.g., Admin, Super Admin, Support Staff) and their permissions.
              </p>
              <div className="p-3 bg-muted/30 rounded-md text-xs border">
                <p className="font-semibold mb-1">[Placeholder: Role Management Interface]</p>
                <p className="text-muted-foreground">List of roles, permissions editor, assign roles to users.</p>
                 <Button variant="outline" size="sm" className="mt-2"><SlidersHorizontal className="h-4 w-4 mr-1"/> Configure Roles</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )
    },
    { 
      title: "Driver Management", 
      icon: <UserCheck className="h-5 w-5 text-primary" />, 
      content: (
        <div className="space-y-4">
          <Card className="bg-card/50">
            <CardHeader><CardTitle className="text-lg">Driver Applications</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Review and approve/reject new driver applications.</p>
              <div className="p-3 bg-muted/30 rounded-md text-xs border">[Placeholder: List of Pending Applications with 'Approve'/'Reject' buttons]</div>
            </CardContent>
          </Card>
          <Card className="bg-card/50">
            <CardHeader><CardTitle className="text-lg">Driver Overview</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">View profiles, documents, real-time status, and ratings.</p>
              <div className="p-3 bg-muted/30 rounded-md text-xs border">[Placeholder: Table/Grid of Drivers with Status Indicators and Rating Display]</div>
            </CardContent>
          </Card>
        </div>
      ) 
    },
    { 
      title: "Fleet/Vehicle Management", 
      icon: <Car className="h-5 w-5 text-primary" />, 
      content: (
         <div className="space-y-4">
          <Card className="bg-card/50">
            <CardHeader><CardTitle className="text-lg">Vehicle Inventory</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Grid or table view of all vehicles. Add, edit, and assign vehicles to drivers.</p>
              <div className="p-3 bg-muted/30 rounded-md text-xs border">[Placeholder: Vehicle Grid with Images, Details, and 'Add/Edit Vehicle' Modals]</div>
            </CardContent>
          </Card>
          <Card className="bg-card/50">
            <CardHeader><CardTitle className="text-lg">Maintenance & Expiry Tracking</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Track registration, insurance expiry dates with alerts.</p>
              <div className="p-3 bg-muted/30 rounded-md text-xs border">[Placeholder: Calendar/List View for Expiry Dates, Notification Settings]</div>
            </CardContent>
          </Card>
        </div>
      )
    },
    { 
      title: "Trip/Order Management", 
      icon: <Route className="h-5 w-5 text-primary" />, 
      content: (
        <div className="space-y-4">
          <Card className="bg-card/50">
            <CardHeader><CardTitle className="text-lg flex items-center gap-2"><Map className="h-5 w-5"/>Live Trip Monitoring</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">View all active trips on a map, assign/reassign drivers.</p>
              <div className="p-3 bg-muted/30 rounded-md text-xs border h-24">[Placeholder: Interactive Map Displaying Active Trips and Driver Locations]</div>
            </CardContent>
          </Card>
          <Card className="bg-card/50">
            <CardHeader><CardTitle className="text-lg flex items-center gap-2"><ListChecks className="h-5 w-5"/>Trip History & Logs</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Table of trips (active, completed, cancelled) with detailed logs.</p>
              <div className="p-3 bg-muted/30 rounded-md text-xs border">[Placeholder: Data Table for Trip History with Filters and Search]</div>
            </CardContent>
          </Card>
        </div>
      )
    },
    { 
      title: "Analytics & Reporting", 
      icon: <BarChart2 className="h-5 w-5 text-primary" />, 
      content: (
        <div className="space-y-4">
          <Card className="bg-card/50">
            <CardHeader><CardTitle className="text-lg">KPI Dashboard</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Visual dashboard with key performance indicators.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-muted/30 rounded-md text-xs border h-20">[Placeholder: Chart - Active Drivers]</div>
                <div className="p-3 bg-muted/30 rounded-md text-xs border h-20">[Placeholder: Chart - Trips per Day]</div>
                <div className="p-3 bg-muted/30 rounded-md text-xs border h-20">[Placeholder: Chart - Revenue Trends]</div>
                <div className="p-3 bg-muted/30 rounded-md text-xs border h-20">[Placeholder: Chart - Cancellation Rates]</div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-card/50">
            <CardHeader><CardTitle className="text-lg flex items-center gap-2"><Download className="h-5 w-5"/>Downloadable Reports</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Generate and download reports in CSV/PDF format with custom date filters.</p>
              <div className="p-3 bg-muted/30 rounded-md text-xs border">[Placeholder: Report Generation Form with Date Pickers and Format Selection]</div>
            </CardContent>
          </Card>
        </div>
      ) 
    },
    { 
      title: "Payments & Payouts", 
      icon: <CreditCard className="h-5 w-5 text-primary" />, 
      content: (
        <div className="space-y-4">
          <Card className="bg-card/50">
            <CardHeader><CardTitle className="text-lg flex items-center gap-2"><DollarSign className="h-5 w-5"/>Driver Earnings</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">View driver earnings summaries and initiate payouts.</p>
              <div className="p-3 bg-muted/30 rounded-md text-xs border">[Placeholder: Table of Driver Balances, Payout Initiation Form]</div>
            </CardContent>
          </Card>
          <Card className="bg-card/50">
            <CardHeader><CardTitle className="text-lg flex items-center gap-2"><History className="h-5 w-5"/>Transaction History</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Detailed log of all payment transactions.</p>
              <div className="p-3 bg-muted/30 rounded-md text-xs border">[Placeholder: Transaction History Table with Filters]</div>
            </CardContent>
          </Card>
        </div>
      )
    },
    { 
      title: "Notifications & Communication", 
      icon: <Bell className="h-5 w-5 text-primary" />, 
      content: (
        <div className="space-y-4">
          <Card className="bg-card/50">
            <CardHeader><CardTitle className="text-lg">Send Announcements</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Compose and send announcements via SMS, email, or in-app notifications.</p>
              <div className="p-3 bg-muted/30 rounded-md text-xs border">[Placeholder: Rich Text Editor for Announcements, Audience Selection (Drivers/Customers/All)]</div>
            </CardContent>
          </Card>
           <Card className="bg-card/50">
            <CardHeader><CardTitle className="text-lg">System Alerts</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Monitor and manage system alerts (e.g., failed payments, critical driver issues).</p>
              <div className="p-3 bg-muted/30 rounded-md text-xs border">[Placeholder: List of System Alerts with Severity and Status]</div>
            </CardContent>
          </Card>
        </div>
      ) 
    },
    { 
      title: "Support Tools", 
      icon: <MessageSquare className="h-5 w-5 text-primary" />, 
      content: (
        <div className="space-y-4">
          <Card className="bg-card/50">
            <CardHeader><CardTitle className="text-lg flex items-center gap-2"><MessageCircle className="h-5 w-5"/>Chat System</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Integrated chat to communicate with drivers and customers.</p>
              <div className="p-3 bg-muted/30 rounded-md text-xs border h-20">[Placeholder: Live Chat Interface Mockup]</div>
            </CardContent>
          </Card>
          <Card className="bg-card/50">
            <CardHeader><CardTitle className="text-lg flex items-center gap-2"><Ticket className="h-5 w-5"/>Ticketing System</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Manage and resolve support tickets raised by users.</p>
              <div className="p-3 bg-muted/30 rounded-md text-xs border">[Placeholder: Table of Support Tickets with Status, Priority, and Assignee]</div>
            </CardContent>
          </Card>
        </div>
      )
    },
    { 
      title: "Settings & Configuration", 
      icon: <Settings className="h-5 w-5 text-primary" />, 
      content: (
        <div className="space-y-4">
          <Card className="bg-card/50">
            <CardHeader><CardTitle className="text-lg">Pricing & Policies</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Configure pricing, rates per zone, commissions, cancellation policies, and peak hours.</p>
              <div className="p-3 bg-muted/30 rounded-md text-xs border">[Placeholder: Forms for various settings - e.g., Price per KM, Commission Percentage]</div>
            </CardContent>
          </Card>
          <Card className="bg-card/50">
            <CardHeader><CardTitle className="text-lg flex items-center gap-2"><MapPin className="h-5 w-5"/>Geofencing</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Define and manage geofenced areas/zones for service or pricing.</p>
              <div className="p-3 bg-muted/30 rounded-md text-xs border h-20">[Placeholder: Map-based Geofencing Tool]</div>
            </CardContent>
          </Card>
        </div>
      )
    },
    { 
      title: "Audit Logs", 
      icon: <History className="h-5 w-5 text-primary" />, 
      content: (
        <div className="space-y-4">
          <Card className="bg-card/50">
            <CardHeader><CardTitle className="text-lg flex items-center gap-2"><ListTree className="h-5 w-5"/>Activity Tracking</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-2">Track admin actions, logins, and important changes in the system.</p>
              <div className="p-3 bg-muted/30 rounded-md text-xs border">[Placeholder: Table of Audit Logs - Timestamp, User, Action, Details. With search and filters.]</div>
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
          <CardTitle className="text-3xl font-bold text-primary">Admin Dashboard</CardTitle>
          <CardDescription>Manage all aspects of the RideEase platform.</CardDescription>
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

