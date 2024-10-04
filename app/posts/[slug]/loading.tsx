import Link from 'next/link'
import { SquareArrowLeft } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'

export default function PostSkeleton() {
    return (
        <div className="container mx-auto mb-16 max-w-4xl px-4 sm:px-6 lg:px-8">
            <Link href="/" className={buttonVariants({ variant: 'outline' })}>
                <SquareArrowLeft className="mr-2" />
                Back to home
            </Link>
            <div className="container mx-auto mt-4 h-[450px] rounded-2xl">
                <Skeleton className="h-full w-full rounded-2xl" />
            </div>
            <Skeleton className="mb-2 mt-6 h-4 w-32" />
            <Skeleton className="mt-2 h-10 w-3/4" />
            <Skeleton className="mt-2 h-6 w-1/2" />
            <div className="mt-4 flex flex-wrap items-center gap-2">
                <Skeleton className="h-6 w-20 rounded-full" />
                <Skeleton className="h-6 w-24 rounded-full" />
                <Skeleton className="h-6 w-16 rounded-full" />
            </div>
            <div className="mt-8 flex items-center">
                <Skeleton className="h-10 w-10 rounded-md" />
                <Skeleton className="ml-4 h-4 w-40" />
            </div>
            <Skeleton className="mt-8 h-px w-full" />
            <div className="mt-8 space-y-4">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
            </div>
            <Skeleton className="mt-8 h-px w-full" />
            <div className="mt-4 flex items-center justify-between">
                <Link
                    href="/"
                    className={buttonVariants({ variant: 'outline' })}
                >
                    <SquareArrowLeft className="mr-2" />
                    Back to home
                </Link>
            </div>
            <div className="mt-8 text-center">
                <Skeleton className="mx-auto mb-4 h-6 w-32" />
                <div className="space-y-2">
                    <Skeleton className="mx-auto h-4 w-3/4" />
                    <Skeleton className="mx-auto h-4 w-2/3" />
                    <Skeleton className="mx-auto h-4 w-5/6" />
                </div>
            </div>
        </div>
    )
}
