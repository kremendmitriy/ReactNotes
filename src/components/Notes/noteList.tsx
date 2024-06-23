import { CircleUser } from 'lucide-react';

import { Button } from '@/components/ui/button';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import SearchNote from './searchNote';
import { SortNotes } from './sortNotes';

export function NoteList() {
  return (
    <div className="grid min-h-screen w-full ">
      <div className="flex flex-col">
        <header className="flex h-[70px] items-center gap-4 border-b bg-muted/40 px-4 lg:h-[70px] lg:px-6 justify-around">
          <div className="flex justify-between">
            <SearchNote />
          </div>
          <div className="flex items-center ml-auto">
            <SortNotes />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
          <div className="flex items-center">
            <h1 className="text-lg font-semibold md:text-2xl">Note List</h1>
          </div>
          <div
            className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
            x-chunk="dashboard-02-chunk-1"
          >
            <div className="flex flex-col items-center gap-1 text-center">
              <h3 className="text-2xl font-bold tracking-tight">
                You have no notes
              </h3>
              <p className="text-sm text-muted-foreground">
                You can add your first note
              </p>
              <Button className="mt-4">Add Note</Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
