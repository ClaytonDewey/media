import { GoTrashcan } from 'react-icons/go';
import { Button } from '.';
import { removeUser } from '../store';
import { useThunk } from '../hooks/useThunk';

function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  return (
    <div className='mb-2 border rounded'>
      <div className='flex p-2 justify-between items-center cursor-pointer'>
        <div className='flex flex-row items-center justify-between'>
          {error && <div>Error deleting user.</div>}
          <Button className='mr-3' loading={isLoading} onClick={handleClick}>
            <GoTrashcan />
          </Button>
          {user.name}
        </div>
      </div>
    </div>
  );
}

export default UsersListItem;
