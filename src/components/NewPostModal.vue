<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <TransitionRoot as="template" :show="store.state.isNewPostModal">
    <Dialog as="div" class="relative z-10" @close="store.commit('hideNewPostModal')">
      <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
              <DialogPanel class="pointer-events-auto relative w-screen max-w-md rounded-l-none my-0 mr-0 md:rounded-l-xl md:my-8 md:mr-8">
                <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
                  <div class="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                    <button type="button" class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" @click="store.commit('hideNewPostModal')">
                      <span class="sr-only">Close panel</span>
                      <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </TransitionChild>
                <div class="flex h-full flex-col overflow-hidden bg-white py-6 rounded-none md:rounded-2xl shadow-xl">
                  <div class="px-4 sm:px-6">
                    <DialogTitle class="text-lg font-medium text-gray-900">Pisać artykuł</DialogTitle>
                  </div>
                  <div class="relative flex flex-col justify-between mt-6 flex-1 px-4 sm:px-6">
                    <!-- Replace with your content -->
                    <div>
                      <div>
                        <label for="title" class="block text-sm font-medium text-gray-700">Title</label>
                        <div class="mt-1">
                          <input v-model="form.title" type="text" name="title" id="title" class="block p-2 shadow border-2 border-indigo-200 outline-none w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="About ..." />
                        </div>
                      </div>

                      <div class="mt-1">
                        <label for="author" class="block text-sm font-medium text-gray-700">Pen name</label>
                        <div class="mt-1">
                          <input v-model="form.author" type="text" name="author" id="author" class="block p-2 shadow border-2 border-indigo-200 outline-none w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Pen name" />
                        </div>
                      </div>

                      <div class="mt-1">
                        <label for="content" class="block text-sm font-medium text-gray-700">Content</label>
                        <div class="mt-1">
                          <textarea v-model="form.content" type="text" rows="10" name="content" id="content" class="block p-2 mt-3 shadow border-2 border-indigo-200 outline-none w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Lorem ipsum dolor sit amet." />
                        </div>
                      </div>
                    </div>

                    <div class="mt-2">
                      <button @click="addPost" type="button" class="w-full inline-flex justify-center content-center items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <PlusIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                        Stwórz
                      </button>
                    </div>
                    <!-- /End replace -->
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { PlusIcon } from '@heroicons/vue/20/solid'

import store from '@/store/index';
let form = {
  title: '',
  content: '',
  author: '',
}
function addPost() {
  store.dispatch('addPost', form).then(()=>{

  })
}

</script>