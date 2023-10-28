const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");
// Розкоментуй і запиши значення
const contactsPath = path.join(__dirname, "db", "contacts.js");
console.log(contactsPath);
// TODO: задокументувати кожну функцію
async function listContacts() {
  const data = await fs.readFile(contactsPath, "utf-8");
  return JSON.parse(data);
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const result = contacts.find((item) => item.id === contactId);
  return result || null;
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

// 1 спосіб
// async function removeContact(contactId) {
//   const contacts = await listContacts();
//   const newList = JSON.stringify(contacts.filter((item) => item.id !== contactId), null, 2)
//   await fs.writeFile(
//     contactsPath,
//     newList
//   );
//   const result = contacts.find((item) => item.id === contactId);
//   return result || null;
//   // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
// }

// 2 спосіб
async function removeContact(contactId) {
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splise(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2))
}

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const newContact = {
    id: nanoid(),
    ...contacts,
  };
  contacts.push(newContact);
  return newContact;
  // ...твій код. Повертає об'єкт доданого контакту.
}
module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
