import { Skeleton } from "@/components/ui/skeleton";

export const SectionSkeleton = () => {
  return (
    <div className="section-padding container-px w-full bg-white">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-4">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-10 w-3/4 sm:w-1/2" />
        </div>

        {/* Content Block 1 */}
        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
        </div>

        {/* Content Block 2 (simulating a grid or another paragraph) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <Skeleton className="h-32 w-full rounded-lg" />
          <Skeleton className="h-32 w-full rounded-lg" />
        </div>
      </div>
    </div>
  );
};
