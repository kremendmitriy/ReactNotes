import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const SearchNote = () => {
  return (
    <form>
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search products..."
          className="w-full appearance-none bg-background pl-8 shadow-none"
        />
      </div>
    </form>
  );
};

export default SearchNote;
