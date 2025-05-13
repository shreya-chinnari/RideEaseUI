import FareEstimateForm from "@/components/fare-estimate-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function FareEstimatePage() {
  return (
    <div className="flex flex-col items-center justify-center space-y-8">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-primary">Estimate Your Fare</CardTitle>
          <CardDescription>Get an estimated cost for your ride.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="my-4 rounded-lg overflow-hidden shadow-md">
            <Image 
              src="https://picsum.photos/800/300" 
              alt="Fare calculation illustration" 
              width={800} 
              height={300} 
              className="object-cover w-full"
              data-ai-hint="calculator money"
            />
          </div>
          <FareEstimateForm />
        </CardContent>
      </Card>
    </div>
  );
}
