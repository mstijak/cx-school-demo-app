export default {
   onInit() {},

   onLogin() {
      let { username, password } = this.store.get('$page');

      alert(username);
   },
};
