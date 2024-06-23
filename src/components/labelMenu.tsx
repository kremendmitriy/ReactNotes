import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const LabelMenu = () => {
  return (
    <div>
      <Card className="w-[220px] rounded-none h-[379.6px] ">
        <nav className="flex flex-col space-y-2 p-4">
          <Button variant="ghost" className="w-full justify-start">
            Label 1
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Label 2
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Label 3
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Label 4
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            Label 5
          </Button>
        </nav>
      </Card>
    </div>
  );
};

export default LabelMenu;
