import Enum from './Enum';

export default class UserRole extends Enum {

    static GUEST = null;
    static REGISTERED = 'registered';
    static ADMIN = 'admin';

    static getKeys() {
        return [
            this.GUEST,
            this.REGISTERED,
            this.ADMIN,
        ];
    }

    static getAuth() {
        return [
            this.REGISTERED,
            this.ADMIN,
        ];
    }

}
