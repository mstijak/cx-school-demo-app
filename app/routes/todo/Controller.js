import { uid } from 'uid';

export default {
   onInit() {
      this.store.init('$page.items', [
         {
            id: uid(),
            text: 'Intro to CxJS',
            completed: true,
         },
         {
            id: uid(),
            text: 'TODO App',
            completed: false,
         },
         {
            id: uid(),
            text: 'Teme i stilizovanje',
            completed: false,
         },
         {
            id: uid(),
            text: 'webpack i Babel',
            completed: false,
         },
      ]);

      this.addComputable('$page.percentComplete', ['$page.items'], (items) => {
         let completed = 0;
         items.forEach((item) => {
            if (item.completed) completed++;
         });
         return completed / items.length;
      });
   },

   onAddItem(event) {
      event.preventDefault();
      let newItemText = this.store.get('$page.newItem');

      if (!newItemText) return;

      this.store.update('$page.items', (items) => [
         ...items,
         {
            id: uid(),
            text: newItemText,
            completed: false,
         },
      ]);

      this.store.set('$page.newItem', '');
   },

   onRemoveItem(event, { store }) {
      store.delete('$todo');
   },

   onClearCompleted() {
      this.store.update('$page.items', (items) => items.filter((item) => !item.completed));
   },
};
