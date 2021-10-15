import { Button, Checkbox, TextField } from 'cx/widgets';
import { Repeater } from 'cx/ui';
import Controller from './Controller';

export default (
   <cx>
      <div controller={Controller} class="p-8">
         <div>
            TODO <span text-tpl="{$page.percentComplete:p;0}"></span>
         </div>

         <div class="text-gray-500 mt-4" visible-expr="{$page.items.length} == 0">
            There are no items in your list.
         </div>

         <Repeater records-bind="$page.items" recordAlias="$todo">
            <div>
               <Checkbox value-bind="$todo.completed">
                  <span text-bind="$todo.text" class={{ 'line-through opacity-50': { bind: '$todo.completed' } }} />
               </Checkbox>
               <Button onClick="onRemoveItem" icon="close" mod="hollow" />
            </div>
         </Repeater>

         <form class="mt-4" onSubmit="onAddItem">
            <TextField
               inputAttrs={{
                  autoComplete: 'off',
               }}
               value-bind="$page.newItem"
            />
            <Button class="ml-2" submit>
               Add
            </Button>
         </form>

         <Button onClick="onClearCompleted">Clear completed items</Button>
      </div>
   </cx>
);
