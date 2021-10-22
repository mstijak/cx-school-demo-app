import { Format } from 'cx/src/ui';
import { Icon, Repeater } from 'cx/widgets';

const thClasses = 'bg-gray-50 uppercase font-semibold text-sm px-6 py-3';
const tdClasses = 'px-6 py-4';

Format.register('sentencecase', (value) => value[0].toUpperCase() + value.substring(1));

export default (
   <cx>
      <table class="bg-white rounded-lg shadow text-gray-400 w-full mt-2 overflow-hidden">
         <thead>
            <tr>
               <th class={thClasses} className="text-left">
                  Transaction
               </th>
               <th class={thClasses} className="text-right">
                  Amount
               </th>
               <th class={thClasses} className="text-left">
                  Status
               </th>
               <th class={thClasses} className="text-right">
                  Date
               </th>
            </tr>
         </thead>
         <tbody>
            <Repeater records-bind="$page.payments">
               <tr class="border-t">
                  <td class={tdClasses}>
                     <Icon name="cash" class="w-5 h-5 mr-2" />
                     <span text-tpl="Payment to {$record.name}" />
                  </td>
                  <td ws class={tdClasses} className="text-right">
                     <span text-tpl="{$record.amount:currency;USD;0}" class="text-gray-800" /> <span>USD</span>
                  </td>
                  <td class={tdClasses}>
                     <span
                        text-tpl="{$record.status:sentencecase}"
                        class={{
                           'rounded-full py-0.5 px-2 text-sm': true,
                           'bg-gray-200 text-gray-700': { expr: '{$record.status}=="failed"' },
                           'bg-green-200 text-green-700': { expr: '{$record.status}=="success"' },
                           'bg-orange-200 text-orange-700': { expr: '{$record.status}=="processing"' },
                        }}
                     />
                  </td>
                  <td text-tpl="{$record.date:datetime;YYYYMMMdd}" class={tdClasses} className="text-right" />
               </tr>
            </Repeater>
         </tbody>
      </table>
   </cx>
);
