
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LogIn, UserCircle, Briefcase, CircleDollarSign, Power, Bell, MessageCircleQuestion, Car } from "lucide-react";

export default function DriverDashboardPage() {
  const features = [
    { title: "Login & Profile Management", icon: <LogIn className="h-5 w-5 text-primary" />, items: ["Secure login", "View/edit personal info", "Upload documents"] },
    { title: "Trip Dashboard", icon: <Briefcase className="h-5 w-5 text-primary" />, items: ["View trips (upcoming, ongoing, past)", "Accept/reject trip requests", "Route map & navigation"] },
    { title: "Earnings Summary", icon: <CircleDollarSign className="h-5 w-5 text-primary" />, items: ["Daily/weekly/monthly earnings", "Trip-wise breakdown", "Bonuses/incentives"] },
    { title: "Availability Toggle", icon: <Power className="h-5 w-5 text-primary" />, items: ["Go Online / Offline", "Schedule shifts (if applicable)"] },
    { title: "Notifications", icon: <Bell className="h-5 w-5 text-primary" />, items: ["Real-time alerts", "Admin messages"] },
    { title: "Support & Help", icon: <MessageCircleQuestion className="h-5 w-5 text-primary" />, items: ["Contact support/chat", "Report an issue", "FAQs & help center"] },
    { title: "Vehicle Info", icon: <Car className="h-5 w-5 text-primary" />, items: ["Manage assigned vehicle", "Notify admin for maintenance"] },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full shadow-xl mb-8">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-primary">Driver Web UI</CardTitle>
          <CardDescription>Manage your rides, earnings, and profile.</CardDescription>
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
