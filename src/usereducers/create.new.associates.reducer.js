export const dropDownIntialState = {
  basicInfo: {
    companyName: '',
    code: null,
    type: null,
    contact_name: null,
    mobile: null,
    office: null,
    email: null,
    website: null,
  },
  contact_information: [
    {
      mobile: null,
      email: null,
      ext: null,
      office: null,
      website: null,
    },
  ],
  address: {
    address: null,
    city: null,
    zip: null,
    unit: null,
    state: null,
    country: null,
  },
  location: {
    address: null,
  },
  primary_sales_person: {
    name: null,
  },
  notes: {
    message: null,
  },
};
export const dropDownReducer = (state, action) => {
  switch (action.type) {
    case 'updateBasicInfo':
      return {...state, basicInfo: {...state.basicInfo, ...action.payload}};
    case 'updateContactInfo':
      const {index, field, value} = action.payload;
      const updatedContactInfo = state.contact_information.map((contact, i) => {
        if (i === index) {
          return {...contact, [field]: value ? value : null};
        } else {
          return contact;
        }
      });
      return {...state, contact_information: updatedContactInfo};
    case 'addContactInfo':
      return {
        ...state,
        contact_information: [
          ...state.contact_information,
          dropDownIntialState.contact_information[0],
        ],
      };
    case 'updateAddress':
      return {...state, address: {...state.address, ...action.payload}};
    case 'updateLocation':
      return {...state, location: {...state.location, ...action.payload}};
    case 'updateSalesPerson':
      return {
        ...state,
        primary_sales_person: {
          ...state.primary_sales_person,
          ...action.payload,
        },
      };
    case 'updateNotes':
      return {...state, notes: {...state.notes, ...action.payload}};
    default:
      return state;
  }
};
