import { store } from 'components';
import { isEqual as _isEqual } from 'lodash';
import { setUser } from 'yii-steroids/actions/auth';
import { IUser } from './types';

interface IUpdateUserDataAction {
    user: IUser;
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