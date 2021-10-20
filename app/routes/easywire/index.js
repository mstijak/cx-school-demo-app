import Controller from './Controller';
import { Button, Icon } from 'cx/widgets';

export const KPI = ({ icon, name, value }) => (
   <cx>
      <div class="bg-white rounded-lg shadow text-gray-500 overflow-hidden">
         <div class="flex items-center pt-4 pb-5 px-1">
            <Icon name={icon} class="w-6 h-6 mx-5" />
            <div>
               <div text={name} />
               <div text={value} class="text-2xl text-black font-bold" />
            </div>
         </div>
         <div class="bg-gray-50 px-5 py-3">
            <a href="#" class="text-blue-600">
               View all
            </a>
         </div>
      </div>
   </cx>
);

export default (
   <cx>
      <div controller={Controller} class="bg-gray-100 min-h-full">
         {/* Header */}
         <div class="flex items-center bg-white px-8 py-4 shadow">
            <img
               class="rounded-full w-16 h-16 object-cover object-top"
               src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
            />
            <div class="ml-4">
               <div class="text-2xl font-bold">Good morning, Emilia Birch</div>
               <div class="mt-1 text-gray-500 flex items-center">
                  <Icon name="office-building" class="w-5 h-5 mr-2" /> Duke Street Studio
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
               <KPI icon="scale" name="Account Balance" value="$30,659.23" />
               <KPI icon="refresh" name="Pending" value="-$19,500.00" />
               <KPI icon="check-circle" name="Processed (last 30 days)" value="$20,000" />
            </div>

            {/* Transactions table */}
         </div>
      </div>
   </cx>
);
