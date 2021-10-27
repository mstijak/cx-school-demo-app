import { LabelsLeftLayout, LabelsTopLayout, LabelsTopLayoutCell } from 'cx/ui';
import { Button, LabeledContainer, LookupField, TextArea, TextField, ValidationGroup } from 'cx/widgets';
import { GET } from '../../api/util/methods';
import Controller from './Controller';

export default (
   <cx>
      <div controller={Controller}>
         <div class="p-8">
            <div>Section 1</div>
            <ValidationGroup invalid-bind="$page.invalid">
               <LabelsLeftLayout columns={3}>
                  <TextField label="Username" value-bind="$page.username" required validationMode="help-block" />
                  <TextField label="Password" value-bind="$page.password" required />
                  <Button onClick="onLogin" disabled-bind="$page.invalid">
                     Sign In
                  </Button>
               </LabelsLeftLayout>
            </ValidationGroup>
         </div>
      </div>
   </cx>
);
