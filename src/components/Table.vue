<template>
    <div class="text-left p-10">
        <p class="text-lg font-bold">{{ title }}</p>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div class="py-4">
                <label for="table-search" class="sr-only">Search</label>
                <div class="relative mt-1">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg class="w-5 h-5 text-black" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    
                    <input type="text" id="table-search" @input="tableSearchHandler($event)"
                        class="text-black bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 pl-10 p-2.5"
                        placeholder="Search for items">
                </div>
            </div>
            <table class="w-full text-sm text-lef">
                <thead class="text-xs bg-gray-900">
                    <tr>
                        <th class="px-6 py-3">
                            No
                        </th>
                        <th v-for="(item, index) in columntitle" :key="index" class="px-6 py-3">
                            {{ item }}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-if="columndatas===null || columndatas.length<1"><td colspan="6"><p class="text-center font-bold">Sedang Mengambil data dari coin api, mohon menunggu ...</p></td></tr>
                    <tr v-for="(item, index) in columndatas" :key="index" class="bg-slate-700 hover:bg-slate-600">
                        <th scope="row" class="px-6 py-4 font-medium  ">
                            {{ index + 1 }}
                        </th>
                        <th scope="row" class="px-6 py-4 font-medium  ">
                            {{ item.asset_id }}
                        </th>
                        <td class="px-6 py-4">
                           {{ item.name }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.price_usd }}
                        </td>
                        <td class="px-6 py-4">
                            {{ item.volume_1hrs_usd }}
                        </td>
                        <td class="px-6 py-4">
                            ${{ item.volume_1day_usd }}
                        </td>
                        <td class="px-6 py-4">
                            ${{ item.volume_1mth_usd }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TableComponent',
    props: {
        title: String,
        columntitle: Array,
        columndatas: Array,
        tableSearchHandler: Function
    },
}
</script>
