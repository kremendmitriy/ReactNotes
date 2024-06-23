import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export function NavigationMenu() {
  return (
    <div>
      <Card className="w-[220px] h-72 rounded-none">
        <nav className="flex flex-col space-y-2 p-4">
          <Button variant="ghost" className="w-full justify-start">
            Notes
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Finished
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Trash
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Archive
          </Button>
        </nav>
      </Card>
    </div>
  );
}
