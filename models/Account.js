export default class Account {
    accountId = null;
    accountUsername = null;
    accountPassword = null;
    accountRepositories = null;
    accountLanguages = null;

    constructor(id, username, password, repositories, languages) {
        this.accountId = id;
        this.accountUsername = username;
        this.accountPassword = password;
        this.accountRepositories = repositories;
        this.accountLanguages = languages;
    }
}