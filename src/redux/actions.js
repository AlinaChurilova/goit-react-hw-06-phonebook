import { nanoid } from 'nanoid';
import { createAction } from "@reduxjs/toolkit";


const addContact = createAction('phonebook/add', (name, number) => {
  return {
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
})

const deleteContact = createAction('phonebook/delete');
const changeFilter = createAction('phonebook/changeFilter');

const itemsActions = { addContact, deleteContact, changeFilter };
export default  itemsActions;