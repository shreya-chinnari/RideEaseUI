import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquareText } from "lucide-react";
import Image from "next/image";

export default function WhatsAppBotPage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <Card className="w-full max-w-lg text-center shadow-xl">
        <CardHeader>
          <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit">
            <MessageSquareText className="h-12 w-12 text-primary" />
          </div>
          <CardTitle className="text-3xl font-bold text-primary mt-4">WhatsApp Bot</CardTitle>
          <CardDescription>Interact with RideEase via WhatsApp.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <Image 
              src="https://picsum.photos/600/350" 
              alt="WhatsApp integration illustration" 
              width={600} 
              height={350} 
              className="object-cover w-full rounded-lg shadow-md"
              data-ai-hint="chat mobile"
            />
          <p className="text-muted-foreground">
            Our WhatsApp Bot integration is coming soon! You'll be able to book rides,
            get fare estimates, and receive updates directly through WhatsApp.
          </p>
          <p className="text-sm text-primary font-semibold">Stay tuned for updates!</p>
        </CardContent>
      </Card>
    </div>
  );
}
