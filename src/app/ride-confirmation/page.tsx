'use client';

import { Suspense } from 'react';
import RideConfirmationDetails from '@/components/ride-confirmation-details';
import { Skeleton } from '@/components/ui/skeleton';
import { ArrowLeft, Car, MapPin, ShieldAlert, Star } from 'lucide-react';

function RideConfirmationPageContent() {
  // This component will fetch or receive ride details via props/context in a real app
  return <RideConfirmationDetails />;
}

export default function RideConfirmationPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-var(--header-height,8rem))]"> {/* Adjusted for potential header/nav height */}
      <Suspense fallback={<RideConfirmationPageSkeleton />}>
        <RideConfirmationPageContent />
      </Suspense>
    </div>
  );
}

function RideConfirmationPageSkeleton() {
  return (
    <div className="flex flex-col h-full">
      {/* Sticky Top Bar Skeleton */}
      <div className="sticky top-0 z-10 bg-background p-3 shadow-md flex items-center justify-between">
        <Skeleton className="h-8 w-8 rounded-full" />
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-8 w-8 rounded-full" />
      </div>

      {/* Main Content Area Skeleton (Map + Cards) */}
      <div className="flex-grow overflow-y-auto pb-24"> {/* Space for bottom bar */}
        {/* Map View Skeleton */}
        <div className="relative h-[40vh] bg-muted flex items-center justify-center mb-4">
          <MapPin className="h-16 w-16 text-muted-foreground/50" />
          <Skeleton className="absolute top-2 right-2 h-8 w-20" /> {/* ETA */}
        </div>

        {/* Info Cards Skeleton */}
        <div className="px-4 space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="p-4 border rounded-lg shadow-sm bg-card">
              <Skeleton className="h-6 w-1/3 mb-3" />
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Skeleton className="h-5 w-5 rounded-full" />
                  <Skeleton className="h-4 w-3/4" />
                </div>
                <div className="flex items-center gap-2">
                  <Skeleton className="h-5 w-5 rounded-full" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
                <div className="flex gap-2 mt-2">
                    <Skeleton className="h-9 w-24" />
                    <Skeleton className="h-9 w-24" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky Bottom Bar Skeleton */}
      <div className="fixed bottom-0 left-0 right-0 z-10 bg-background p-3 border-t shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
        <div className="flex justify-around items-center">
          <Skeleton className="h-10 w-20" />
          <Skeleton className="h-10 w-20" />
          <Skeleton className="h-10 w-20" />
        </div>
      </div>
    </div>
  );
}
