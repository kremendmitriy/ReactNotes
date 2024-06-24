import AddNote from '@/components/Notes/addNote';
import LabelMenu from '@/components/labelMenu';
import { NavigationMenu } from '@/components/navigationMenu';
import { NoteList } from '@/components/Notes/noteList';

const HomePage = () => {
  return (
    <div className="flex">
      <div className="flex flex-col h-full">
        <AddNote />
        <NavigationMenu />
        <LabelMenu />
      </div>
      <NoteList />
    </div>
  );
};

export default HomePage;
