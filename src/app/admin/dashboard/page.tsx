
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Users, UserCheck, Car, Route, BarChart2, CreditCard, Bell, MessageSquare, Settings, History } from "lucide-react";

export default function AdminDashboardPage() {
  const features = [
    { title: "User Management", icon: <Users className="h-5 w-5 text-primary" />, items: ["View, add, edit, deactivate users", "Role-based access control"] },
    { title: "Driver Management", icon: <UserCheck className="h-5 w-5 text-primary" />, items: ["Approve/reject driver applications", "Driver profile overview", "Real-time driver status", "Ratings & feedback"] },
    { title: "Fleet/Vehicle Management", icon: <Car className="h-5 w-5 text-primary" />, items: ["Add/edit vehicles", "Assign vehicles to drivers", "Track registration/insurance expiry"] },
    { title: "Trip/Order Management", icon: <Route className="h-5 w-5 text-primary" />, items: ["View all trips/orders", "Assign or reassign drivers", "View route history & logs"] },
    { title: "Analytics & Reporting", icon: <BarChart2 className="h-5 w-5 text-primary" />, items: ["Dashboard with KPIs", "Downloadable reports", "Custom date filters"] },
    { title: "Payments & Payouts", icon: <CreditCard className="h-5 w-5 text-primary" />, items: ["Driver earnings summary", "Initiate payouts", "Transaction history"] },
    { title: "Notifications & Communication", icon: <Bell className="h-5 w-5 text-primary" />, items: ["Send announcements", "System alerts"] },
    { title: "Support Tools", icon: <MessageSquare className="h-5 w-5 text-primary" />, items: ["Chat with drivers/customers", "Ticketing system"] },
    { title: "Settings & Configuration", icon: <Settings className="h-5 w-5 text-primary" />, items: ["Set pricing/rates per zone", "Configure commissions, policies", "Geofencing areas/zones"] },
    { title: "Audit Logs", icon: <History className="h-5 w-5 text-primary" />, items: ["Track admin actions, logins, changes"] },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full shadow-xl mb-8">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-primary">Admin Dashboard</CardTitle>
          <CardDescription>Manage all aspects of the RideEase platform.</CardDescription>
        </CardHeader>
      </Card>

      <Accordion type="multiple" className="w-full space-y-4">
        {features.map((feature, index) => (
          <AccordionItem value={`item-${index}`} key={index} className="border-none">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-200 ease-in-out">
              <AccordionTrigger className="p-6 hover:no-underline">
                <div className="flex items-center gap-3">
                  {feature.icon}
                  <span className="text-xl font-semibold text-primary">{feature.title}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground pl-4">
                  {feature.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-accent italic">Further implementation details will go here.</p>
              </AccordionContent>
            </Card>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
