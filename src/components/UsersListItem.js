import { GoTrashcan } from 'react-icons/go';
import { Button, ExpandablePanel } from '.';
import { removeUser } from '../store';
import { useThunk } from '../hooks/useThunk';

function UsersListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  const header = (
    <>
      {error && <div>Error deleting user.</div>}
      <Button className='mr-3' loading={isLoading} onClick={handleClick}>
        <GoTrashcan />
      </Button>
      {user.name}
    </>
  );

  return <ExpandablePanel header={header}>CONTENT</ExpandablePanel>;
}

export default UsersListItem;
