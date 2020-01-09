import { WavesKeeperAccount } from './../components/dal/types';
import { store } from 'components';
import { isEqual as _isEqual } from 'lodash';
import { setUser } from 'yii-steroids/actions/auth';

interface IUpdateUserDataAction {
    user: WavesKeeperAccount;
}

class UserController {
    updateUser({ user }: IUpdateUserDataAction) {
        const storeUser = store.getState().auth.user || null;

        if (!_isEqual(storeUser, user)) {
            store.dispatch(setUser(user));
        }
    }
}

export default UserController;