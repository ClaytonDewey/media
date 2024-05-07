import { useFetchPhotosQuery } from '../store/apis/photosApi';

function PhotosList({ album }) {
  useFetchPhotosQuery(album);
  return <div>PhotosList</div>;
}

export default PhotosList;
