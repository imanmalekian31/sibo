<template>
  <TransitionRoot as="template" :show="ordersStore.orderModal">
    <Dialog as="div" class="relative z-50" @close="ordersStore.closeModal">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="h-full flex justify-center items-center p-0 text-center">
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-none sm:rounded-lg bg-white px-2 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 w-full sm:w-full sm:max-w-6xl sm:p-6"
            >
              <div>
                <div class="mt-3 text-center sm:mt-5">
                  <DialogTitle
                    as="h3"
                    class="text-base font-semibold leading-6 text-gray-900"
                  >
                    لیست سفارش ها
                  </DialogTitle>
                  <div class="mt-2 overflow-auto" v-if="ordersStore.orders.length">
                    <SwitchGroup as="div" class="flex items-center my-4 mr-1">
                      <Switch
                        v-model="showTitle"
                        :class="[
                          showTitle ? 'bg-indigo-600' : 'bg-gray-200',
                          'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2',
                        ]"
                      >
                        <span
                          aria-hidden="true"
                          :class="[
                            showTitle ? '-translate-x-5' : 'translate-x-0',
                            'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                          ]"
                        />
                      </Switch>
                      <SwitchLabel as="span" class="mr-3 text-sm">
                        <span class="font-medium text-gray-900">
                          نمایش ستون عنوان
                        </span>
                      </SwitchLabel>
                    </SwitchGroup>
                    <table
                      :class="[
                        showTitle && 'order-table',
                        'table-auto border-collapse border border-slate-400 w-full mx-auto',
                      ]"
                    >
                      <thead>
                        <tr>
                          <th class="border border-slate-300">ردیف</th>
                          <th v-if="showTitle" class="border border-slate-300">
                            عنوان
                          </th>
                          <th class="border border-slate-300">کد</th>
                          <th class="border border-slate-300">در هر کارتن</th>
                          <th class="border border-slate-300">قیمت</th>
                          <th class="border border-slate-300">کارتن</th>
                          <th class="border border-slate-300">قیمت نهایی</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(item, index) in ordersStore.orders"
                          :key="item.id"
                        >
                          <td class="border border-slate-300">
                            {{ index + 1 }}
                          </td>
                          <td v-if="showTitle" class="border border-slate-300">
                            {{ item.title }}
                          </td>
                          <td class="border border-slate-300 font-sans">{{ item.id }}</td>
                          <td class="border border-slate-300">
                            {{ item.perCarton }}
                          </td>
                          <td class="border border-slate-300">
                            {{ item.price.toLocaleString() }}
                          </td>
                          <td class="border border-slate-300">
                            {{ item.count }}
                          </td>
                          <td class="border border-slate-300">
                            {{
                              (
                                item.perCarton *
                                item.price *
                                item.count
                              ).toLocaleString()
                            }}
                          </td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <td class="border border-slate-300">مجموع</td>
                          <td
                            class="border border-slate-300"
                            :colspan="showTitle ? 4 : 3"
                          ></td>
                          <td class="border border-slate-300">
                            {{
                              ordersStore.orders.reduce(
                                (acc, curr) => acc + curr.count,
                                0
                              )
                            }}
                          </td>
                          <td class="border border-slate-300">
                            {{
                              ordersStore.orders
                                .reduce(
                                  (acc, curr) =>
                                    acc +
                                    curr.perCarton * curr.price * curr.count,
                                  0
                                )
                                .toLocaleString()
                            }}
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
              <div class="mt-5 sm:mt-6">
                <button
                  type="button"
                  class="inline-flex w-full justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  @click="ordersStore.closeModal"
                >
                  بازگشت
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from "vue";
import {
  Switch,
  SwitchGroup,
  SwitchLabel,
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { useOrdersStore } from "@/stores/ordersStore";

const ordersStore = useOrdersStore();

const showTitle = ref(false);
</script>

<style>
.order-table {
  width: 800px !important;
}
</style>
