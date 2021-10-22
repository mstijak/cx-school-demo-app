import { Icon } from 'cx/widgets';

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
         <div class="bg-gray-50 px-5 py-3 text-sm">
            <a href="#" class="text-blue-700">
               View all
            </a>
         </div>
      </div>
   </cx>
);
