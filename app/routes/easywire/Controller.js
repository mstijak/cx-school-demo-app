import { GET } from '../../api/util/methods';

export default {
   onInit() {
      this.loadInfo();
      this.loadPayments();
   },

   async loadInfo() {
      try {
         let data = await GET('easywire/info');
         this.store.set('$page.info', data);
      } catch (err) {
         console.error(err);
      }
   },

   async loadPayments() {
      try {
         let data = await GET('easywire/payments');
         this.store.set('$page.payments', data);
      } catch (err) {
         console.error(err);
      }
   },
};
