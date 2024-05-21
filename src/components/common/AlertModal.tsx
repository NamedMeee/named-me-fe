import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';

export default function AlertModal() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="bg-white text-violet-900 font-medium px-4 py-2 rounded-md shadow-sm">
          Edit profile
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 animate-pop bg-black-a9" />
        <Dialog.Content className="bg-white rounded-lg shadow-md fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-90vw max-w-sm max-h-85vh p-8 animate-pop focus:outline-none">
          <Dialog.Title className="m-0 font-medium text-mauve-600 text-lg">
            Edit profile
          </Dialog.Title>
          <Dialog.Description className="mb-2 text-mauve-700 text-base leading-snug">
            Make changes to your profile here. Click save when you're done.
          </Dialog.Description>
          <fieldset className="flex gap-4 mb-6">
            <label className="text-mauve-700 text-right w-32">Name</label>
            <input
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-violet-500 focus:ring-1"
              id="name"
              defaultValue="Pedro Duarte"
            />
          </fieldset>
          <fieldset className="flex gap-4 mb-6">
            <label className="text-mauve-700 text-right w-32">Username</label>
            <input
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-violet-500 focus:ring-1"
              id="username"
              defaultValue="@peduarte"
            />
          </fieldset>
          <div className="flex justify-end">
            <Dialog.Close asChild>
              <button className="bg-green-500 text-white font-medium px-4 py-2 rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                Save changes
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className="absolute top-4 right-4 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 p-2">
              <Cross2Icon className="text-violet-700" />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
