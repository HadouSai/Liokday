import { IAsideSections } from "./aside.interface";

export const asideSections: IAsideSections[] = [
  {
    title: 'Workspace',
    code: '3',
    items: [{
      name: 'Notes / Memos',
      iconName: 'format_list_bulleted',
      tooltip: 'Create or list my recordatories',
      itemCode: '3nm'
    }, {
      name: 'Tasks',
      iconName: 'list_alt',
      tooltip: 'Create or list my tasks',
      itemCode: '3dl'
    }, {
      name: 'Docs',
      iconName: 'library_add',
      tooltip: 'Create or list my documents',
      itemCode: '3d'
    }]
  },
  {
    title: 'Search your files',
    code: '4',
    items: [{
      name: 'Search',
      iconName: 'search',
      tooltip: 'Search your task, Docs and more...',
      itemCode: '4s'
    }]
  }, {
    title: '',
    code: '7',
    items: [{
      name: 'Settings',
      iconName: 'settings',
      tooltip: 'Your adjustments',
      itemCode: '7s'
    }, {
      name: 'Help',
      iconName: 'help',
      tooltip: 'Help with anything that you need',
      itemCode: '7h'
    }, {
      name: 'Feedback',
      iconName: 'feedback',
      tooltip: 'Send feedback',
      itemCode: '7f'
    }]
  }
]
