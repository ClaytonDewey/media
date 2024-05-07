import { GoTrashcan } from 'react-icons/go';
import { Button, ExpandablePanel } from '.';

function AlbumsListItem({ album }) {
  const handleClick = () => {
    //
  };
  const header = (
    <>
      <Button className='mr-3' onClick={handleClick}>
        <GoTrashcan />
      </Button>
      {album.title}
    </>
  );
  return (
    <ExpandablePanel key={album.id} header={header}>
      List of photos in the album
    </ExpandablePanel>
  );
}

export default AlbumsListItem;
