import { Card, CardContent } from "@/components/ui/card";
import { Users } from "lucide-react";

export function Card2() {
  return (
    <Card className="relative col-span-full overflow-hidden lg:col-span-3">
      <CardContent className="grid h-full pt-6 sm:grid-cols-2">
        <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
          <div className="relative flex aspect-square size-12 rounded-full border before:absolute before:-inset-2 before:rounded-full before:border dark:border-white/10 dark:before:border-white/5">
            <Users className="m-auto size-6" strokeWidth={1} />
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium transition">
              Keep your loved ones safe
            </h3>
            <p className="text-foreground">
              Voluptate. magnam magni doloribus dolores voluptates a sapiente
              inventore nisi.
            </p>
          </div>
        </div>
        <div className="before:bg-(--color-border) relative mt-6 before:absolute before:inset-0 before:mx-auto before:w-px sm:-my-6 sm:-mr-6">
          <div className="relative flex h-full flex-col justify-center space-y-6 py-6">
            <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
              <span className="block h-fit rounded border px-2 py-1 text-xs shadow-sm">
                Likeur
              </span>
              <div className="ring-background size-7 ring-4">
                <img
                  className="size-full rounded-full"
                  src="https://avatars.githubusercontent.com/u/102558960?v=4"
                  alt=""
                />
              </div>
            </div>
            <div className="relative ml-[calc(50%-1rem)] flex items-center gap-2">
              <div className="ring-background size-8 ring-4">
                <img
                  className="size-full rounded-full"
                  src="https://avatars.githubusercontent.com/u/47919550?v=4"
                  alt=""
                />
              </div>
              <span className="block h-fit rounded border px-2 py-1 text-xs shadow-sm">
                M. Irung
              </span>
            </div>
            <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
              <span className="block h-fit rounded border px-2 py-1 text-xs shadow-sm">
                B. Ng
              </span>
              <div className="ring-background size-7 ring-4">
                <img
                  className="size-full rounded-full"
                  src="https://avatars.githubusercontent.com/u/31113941?v=4"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
