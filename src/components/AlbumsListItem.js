import { GoTrashcan } from 'react-icons/go';
import { Button, ExpandablePanel } from '.';
import { useRemoveAlbumMutation } from '../store';

function AlbumsListItem({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation();
  const handleRemoveAlbum = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      <Button
        className='mr-3'
        loading={results.isLoading}
        onClick={handleRemoveAlbum}>
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
