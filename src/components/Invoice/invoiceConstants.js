
export const cardsArray = [
  {
    id: 1,
    amount: 559250,
    title: 'INVOICES SENT',
    increaseRate: 89.24,
    totalStatusNumber: 2258,
    statusMessage: 'Invoice sent',
    isActive: false,
    isIncreased: true,
  },
  {
    id: 2,
    amount: 559250,
    title: 'PAID INVOICES',
    increaseRate: 8.09,
    totalStatusNumber: 1958,
    statusMessage: 'Paid by clients',
    isActive: false,
    isIncreased: false,
  },
  {
    id: 3,
    amount: 13698,
    title: 'UNPAID INVOICES',
    increaseRate: 9.01,
    totalStatusNumber: 338,
    statusMessage: 'Unpaid by clients',
    isActive: true,
    isIncreased: false,
  },
  {
    id: 4,
    amount: 84200,
    title: 'INVOICES SENT',
    increaseRate: 7.55,
    totalStatusNumber: 502,
    statusMessage: 'Cancelled by clients',
    isActive: false,
    isIncreased: true,
  },
];

export const columns = [
  { key: 'invoice_id', label: 'INVOICE ID' },
  { key: 'client', label: 'CLIENT' },
  { key: 'email', label: 'Email' },
  { key: 'date', label: 'DATE' },
  { key: 'billed', label: 'BILLED' },
  { key: 'status', label: 'STATUS' },
  { key: 'action', label: 'ACTION' },
];

export const rows = [
  {
    id: 1,
    invoice_id: 'INV_1',
    client: 'Client A',
    email: 'a@gmail.com',
    date: '11-11-1111',
    billed: 1200,
    status: {text: 'Paid', type: 'chip'},
    action: {text: '...', type: 'button'},
  },
  {
    id: 2,
    invoice_id: 'INV_2',
    client: 'Client B' ,
    email: 'a@gmail.com',
    date: '11-11-1111',
    billed: 1300,
    status: {text: 'Unpaid', type: 'chip'},
    action: {text: '...', type: 'button'},
  },
  {
    id: 3,
    invoice_id: 'INV_3',
    client: 'Client C' ,
    email: 'a@gmail.com',
    date: '11-11-1111',
    billed: 1400,
    status: {text: 'Refund', type: 'chip'},
    action: {text: '...', type: 'button'},
  },
  {
    id: 4,
    invoice_id: 'INV_4',
    client: 'Client D' ,
    email: 'a@gmail.com',
    date: '11-11-1111',
    billed: 1400,
    status: {text: 'Cancel', type: 'chip'},
    action: {text: '...', type: 'button'},
  },
  {
    id: 5,
    invoice_id: 'INV_5',
    client: 'Client E' ,
    email: 'a@gmail.com',
    date: '11-11-1111',
    billed: 1400,
    status: {text: 'Paid', type: 'chip'},
    action: {text: '...', type: 'button'},
  },
];