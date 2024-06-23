import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ChevronDown } from 'lucide-react';

export function SortNotes() {
  const [sortCriteria, setSortCriteria] = useState('date');

  const handleSortChange = (value: string) => {
    setSortCriteria(value);
  };

  return (
    <Card className="w-full">
      <CardContent className="relative p-0">
        <Select onValueChange={handleSortChange} value={sortCriteria}>
          <SelectTrigger className="flex items-center justify-between pl-3 pr-10 min-w-[150px]">
            <SelectValue>
              {sortCriteria === 'date' && 'Sort By Date'}
              {sortCriteria === 'alphabet' && 'Sort By Alphabet'}
              {sortCriteria === 'importance' && 'Sort By Importance'}
            </SelectValue>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="date">Sort By Date</SelectItem>
            <SelectItem value="alphabet">Sort By Alphabet</SelectItem>
            <SelectItem value="importance">Sort By Importance</SelectItem>
          </SelectContent>
        </Select>
      </CardContent>
    </Card>
  );
}
