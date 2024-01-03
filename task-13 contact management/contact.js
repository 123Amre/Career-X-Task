document.addEventListener("DOMContentLoaded", function () {
    var contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    var otherBoxData = JSON.parse(localStorage.getItem("otherBoxData")) || [];

    displayContacts();
    displayOtherBoxData();
    
    document.getElementById("addContactForm").addEventListener("submit", function (event) {
        event.preventDefault();
        addToContacts();
    });
});

function addToContacts() {
    var contactName = document.getElementById("contactName").value;
    var contactEmail = document.getElementById("contactEmail").value;
    var contactAddress = document.getElementById("contactAddress").value;
    var contactPhone = document.getElementById("contactPhone").value;

    var newContact = {
        name: contactName,
        email: contactEmail,
        address: contactAddress,
        phone: contactPhone
    };

    var contacts = JSON.parse(localStorage.getItem("contacts")) || [];

    contacts.push(newContact);

    localStorage.setItem("contacts", JSON.stringify(contacts));

    displayContacts();


    document.getElementById("addContactForm").reset();

    alert("Contact added!\n\nName: " + contactName + "\nEmail: " + contactEmail + "\nAddress: " + contactAddress + "\nPhone: " + contactPhone + "\n\nEdit and Delete options are available in the Contact List.");

    var otherBoxData = [];
    contacts.forEach(function (contact) {
        otherBoxData.push({
            name: contact.name,
            email: contact.email,
            address: contact.address,
            phone: contact.phone
        });
    });
    localStorage.setItem("otherBoxData", JSON.stringify(otherBoxData));
    displayOtherBoxData();
}

function displayContacts() {
    var contacts = JSON.parse(localStorage.getItem("contacts")) || [];

    var contactListContainer = document.getElementById("contactList");

    contactListContainer.innerHTML = "";

    contacts.forEach(function (contact, index) {
        var listItem = document.createElement("li");
        listItem.innerHTML = `
            <strong>${contact.name}</strong> (${contact.email}) - ${contact.phone}<br>
            ${contact.address}
            <button class="edit" onclick="editContact(${index})">Edit</button>
            <button class="delete" onclick="deleteContact(${index})">Delete</button>
            <hr>
        `;
        contactListContainer.appendChild(listItem);
    });
}

function editContact(index) {
    var contacts = JSON.parse(localStorage.getItem("contacts")) || [];
    var editedContact = contacts[index];

    var updatedName = prompt("Edit Name:", editedContact.name);
    var updatedEmail = prompt("Edit Email:", editedContact.email);
    var updatedAddress = prompt("Edit Address:", editedContact.address);
    var updatedPhone = prompt("Edit Phone:", editedContact.phone);

    if (updatedName !== null && updatedEmail !== null && updatedAddress !== null && updatedPhone !== null) {
        contacts[index] = {
            name: updatedName,
            email: updatedEmail,
            address: updatedAddress,
            phone: updatedPhone
        };

        localStorage.setItem("contacts", JSON.stringify(contacts));

        displayContacts();

        alert("Contact updated!");
    }
}

function deleteContact(index) {
    var contacts = JSON.parse(localStorage.getItem("contacts")) || [];

    contacts.splice(index, 1);

    localStorage.setItem("contacts", JSON.stringify(contacts));

    displayContacts();
    alert("Contact deleted!");

    var otherBoxData = [];
    contacts.forEach(function (contact) {
        otherBoxData.push({
            name: contact.name,
            email: contact.email,
            address: contact.address,
            phone: contact.phone
        });
    });
    localStorage.setItem("otherBoxData", JSON.stringify(otherBoxData));

    displayOtherBoxData();
}

function displayOtherBoxData() {

    var otherBoxData = JSON.parse(localStorage.getItem("otherBoxData")) || [];

    var otherBoxTableBody = document.getElementById("otherBoxTableBody");

    otherBoxTableBody.innerHTML = "";


    otherBoxData.forEach(function (data) {
        var row = document.createElement("tr");
        row.innerHTML = `
            <td>${data.name}</td>
            <td>${data.email}</td>
            <td>${data.address}</td>
            <td>${data.phone}</td>
        `;
        otherBoxTableBody.appendChild(row);
    });
}





