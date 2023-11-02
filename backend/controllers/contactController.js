//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getContacts = (req, res) => {
    res.status(200).json({Message : "Get all contacts."});
};

//@desc Get specific contact
//@route GET /api/contacts:id
//@access public
const getContact = (req, res) => {
    res.status(200).json({Message : `Get contact for ${req.params.id}`});
};

//@desc Create new contact
//@route POST /api/contacts
//@access public
const createContact = (req, res) => {
    console.log(req.body);
    res.status(201).json({Message : "Create contact."});
};

//@desc Update contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = (req, res) => {
    res.status(200).json({Message : `Updated contact for ${req.params.id}`});
};

//@desc Delete contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = (req, res) => {
    res.status(200).json({Message : `Deleted contact ${req.params.id}`});
};


module.exports = {
    getContacts,
    getContact,
    createContact,
    updateContact,
    deleteContact,
};