import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone } from "lucide-react";
import Image from "next/image";

export default function SmsGatewayPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <Card className="w-full max-w-lg text-center shadow-xl">
        <CardHeader>
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
            <Smartphone className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold text-primary mt-4">SMS Gateway</CardTitle>
          <CardDescription>Receive ride updates and OTPs via SMS.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Image 
              src="https://picsum.photos/600/350" 
              alt="SMS notifications illustration" 
              width={600} 
              height={350} 
              className="object-cover w-full rounded-lg shadow-md"
              data-ai-hint="notification mobile"
            />
          <p className="text-muted-foreground">
            Our SMS Gateway ensures you receive important notifications, OTPs for verification,
            and ride status updates directly to your mobile phone.
          </p>
          <p className="text-sm text-primary font-semibold">This feature is active for critical communications.</p>
        </CardContent>
      </Card>
    </div>
  );
}
