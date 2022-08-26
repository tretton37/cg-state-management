import { IUser } from '../../../api/user-api';
import { JotaiFetchUserButton } from '../../../examples/jotai/JotaiFetchUserButton';
import { ReactContextFetchUserButton } from '../../../examples/react-context/ReactContextFetchUserButton';
import { ReactQueryFetchUserButton } from '../../../examples/react-query/ReactQueryFetchUserButton';
import { ReduxToolkitFetchUserButton } from '../../../examples/redux-toolkit/ReduxToolkitFetchUserButton';
import { StateManagerType } from '../../../examples/types';

export const FetchUserButton: React.FC<FetchUserButtonProps> = ({
  statemanager,
  onSuccess,
  id,
}) => {
  switch (statemanager) {
    case 'reactcontext':
      return <ReactContextFetchUserButton onSuccess={onSuccess} id={id} />;
    case 'reactquery':
      return <ReactQueryFetchUserButton onSuccess={onSuccess} id={id} />;
    case 'reduxtoolkit':
      return <ReduxToolkitFetchUserButton onSuccess={onSuccess} id={id} />;
    case 'jotai':
      return <JotaiFetchUserButton onSuccess={onSuccess} id={id} />;
    default:
      throw Error('Not implemented state manager');
  }
};

interface FetchUserButtonProps {
  onSuccess: (user: IUser) => void;
  statemanager: StateManagerType;
  id: number;
}
