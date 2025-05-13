'use client';

import { Suspense } from 'react';
import RideConfirmationDetails from '@/components/ride-confirmation-details';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

function RideConfirmationPageContent() {
  return <RideConfirmationDetails />;
}

export default function RideConfirmationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="w-full max-w-3xl mx-auto shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-foreground">Ride Confirmation</CardTitle>
          <CardDescription>Review your ride details and track your driver.</CardDescription>
        </CardHeader>
        <CardContent>
          <Suspense fallback={<RideConfirmationPageSkeleton />}>
            <RideConfirmationPageContent />
          </Suspense>
        </CardContent>
      </Card>
    </div>
  );
}

function RideConfirmationPageSkeleton() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-10 w-3/4 mx-auto" />
      <Skeleton className="h-8 w-1/2 mx-auto" />
      
      <div className="space-y-4">
        {[...Array(3)].map((_, i) => (
          <Card key={i}>
            <CardHeader>
              <Skeleton className="h-6 w-1/3" />
            </CardHeader>
            <CardContent className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </CardContent>
          </Card>
        ))}
      </div>
      <Skeleton className="h-12 w-full" />
      <Skeleton className="h-40 w-full" />
    </div>
  );
}
