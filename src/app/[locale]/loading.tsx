export default function Loading() {
  return (
    /* From Uiverse.io by TamaniPhiri */
    <div className="flex-col gap-4 w-full flex items-center justify-center min-h-screen">
      <div className="p-3 animate-spin drop-shadow-2xl bg-custom-gradient md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full">
        <div className="rounded-full h-full w-full bg-slate-100 dark:bg-zinc-900 background-blur-md"></div>
      </div>
    </div>
  );
}
