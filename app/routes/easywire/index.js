import { Button, Icon } from 'cx/widgets';
import Controller from './Controller';
import { KPI } from './KPI';
import PaymentsTable from './PaymentsTable';

export default (
   <cx>
      <div controller={Controller} class="bg-gray-100 overflow-auto">
         {/* Header */}
         <div class="flex items-center bg-white px-8 py-4 shadow">
            <img
               class="rounded-full w-16 h-16 object-cover object-top"
               src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            />
            <div class="ml-4">
               <div class="text-2xl font-bold">
                  Good morning, <span text-bind="$page.info.name" />
               </div>
               <div class="mt-1 text-gray-500 flex items-center">
                  <Icon name="office-building" class="w-5 h-5 mr-2" /> <span text-bind="$page.info.company" />
                  <Icon name="check-circle-solid" class="w-5 h-5 ml-4 mr-2 text-green-500" /> Verified Account
               </div>
            </div>
            <Button class="ml-auto">Add money</Button>
            <Button class="ml-2" mod="primary">
               Send money
            </Button>
         </div>

         <div class="p-8 w-[1000px]">
            {/* KPIs */}
            <h3 class="text-xl">Overview</h3>

            <div class="mt-2 grid grid-cols-3 gap-6">
               <KPI icon="scale" name="Account Balance" value-tpl="{$page.info.kpi.balance:currency;usd;2}" />
               <KPI icon="refresh" name="Pending" value-tpl="{$page.info.kpi.pending:currency;usd;2}" />
               <KPI
                  icon="check-circle"
                  name="Processed (last 30 days)"
                  value-tpl="{$page.info.kpi.processed:currency;usd;2}"
               />
            </div>

            {/* Transactions table */}
            <h3 class="text-xl mt-8">Recent Activity</h3>
            {PaymentsTable}
         </div>
      </div>
   </cx>
);
