import {
  getCountries,
  getCountryCallingCode
} from "react-phone-number-input/input";
import countryNames from "react-phone-number-input/locale/en.json";

export const messages = {
  "Missing Detail": "Please fill all the required field."
};

export const formStructures = {
  residential: {
    country: {
      position: "left",
      label: "Country",
      placeholder: "Singapore",
      initialValue: "",
      type: "select",
      validate: {
        presence: true
      },
      options: getCountries().map((item) => {
        return {
          countryName: countryNames[item],
          countryCode: `+${getCountryCallingCode(item)}`,
          code: item
        };
      }),
      getOptionSelected: (option, value) => {
        if (value === "") {
          return true;
        } else return option?.countryName === value;
      },
      getOptionLabel: (option) =>
        option?.countryName + option?.code + `  ${option?.countryCode}`,
      getOptionLabels: (option) => option.countryName,
      handelChangeSelect: (e, value, reason, field, setSearch) => {
        if (reason === "select-option") {
          field.setValue(value?.countryName);
          setSearch((prev) => ({ ...prev, [field?.key]: value?.countryName }));
        } else if (reason === "clear") {
          field.setValue("");
          setSearch((prev) => ({ ...prev, [field?.key]: value?.countryName }));
        }
      },
      onInput: (e, value, reason, field, setSearch) => {
        if (reason === "input") {
          setSearch((prev) => ({ ...prev, [field?.key]: value }));
        }
      }
    },
    postal_code: {
      label: "Postal Code",
      placeholder: "xxxxxx",
      initialValue: "",
      type: "number",
      format: "######",
      validate: {
        presence: true
      }
    },
    address: {
      label: "Address",
      placeholder: "Blk 123A Woodlands Drive 51",
      initialValue: "",
      type: "text",
      validate: {
        presence: true
      },
      fullWidth: 12
    },
    unit_no: {
      position: "left",
      label: "Unit No",
      placeholder: "# 01-01",
      initialValue: "",
      type: "number",
      format: "##-##",
      validate: {
        presence: true
      }
    },
    city: {
      label: "City",
      placeholder: "Your City",
      initialValue: "",
      type: "text",
      validate: {
        presence: true
      }
    },
    divider: {
      type: "divider",
      fullWidth: 12
    },
    first_name: {
      position: "left",
      label: "First Name",
      placeholder: "John",
      initialValue: "",
      inputType: "text",
      validate: {
        presence: true
      }
    },
    last_name: {
      label: "Last Name",
      placeholder: "Doe",
      initialValue: "",
      type: "text",
      validate: {
        presence: true
      }
    },
    country_code: {
      position: "left",
      label: "Country Code",
      placeholder: "+65",
      initialValue: "",
      type: "select",
      validate: {
        presence: true
      },
      options: getCountries().map((item) => {
        return {
          countryName: countryNames[item],
          countryCode: `+${getCountryCallingCode(item)}`,
          code: item
        };
      }),
      getOptionSelected: (option, value) => {
        if (value === "") {
          return true;
        } else return option?.countryCode === value;
      },
      getOptionLabel: (option) =>
        option?.countryName + option?.code + `  ${option?.countryCode}`,
      handelChangeSelect: (e, value, reason, field, setSearch) => {
        if (reason === "select-option") {
          field.setValue(value?.countryCode);
          setSearch((prev) => ({ ...prev, [field?.key]: value?.countryCode }));
        } else if (reason === "clear") {
          field.setValue("");
          setSearch((prev) => ({ ...prev, [field?.key]: "" }));
        }
      },
      getOptionLabels: (option) =>
        option.countryName + " " + option.countryCode,
      onInput: (e, value, reason, field, setSearch) => {
        if (reason === "input") {
          setSearch((prev) => ({ ...prev, [field?.key]: value }));
        }
      },
      width: 2
    },
    phone_number: {
      inputEnd: true,
      label: "Contact Number",
      placeholder: "xxx-xxx-xxx",
      initialValue: "",
      type: "number",
      inputType: "number",
      format: "###-###-###",
      validate: {
        presence: true
      },
      width: 4
    }
  },
  office: {
    country: {
      position: "left",
      label: "Country",
      placeholder: "Singapore",
      initialValue: "",
      type: "select",
      validate: {
        presence: true
      },
      options: getCountries().map((item) => {
        return {
          countryName: countryNames[item],
          countryCode: `+${getCountryCallingCode(item)}`,
          code: item
        };
      }),
      getOptionSelected: (option, value) => {
        if (value === "") {
          return true;
        } else return option?.countryName === value;
      },
      getOptionLabel: (option) =>
        option?.countryName + option?.code + `  ${option?.countryCode}`,
      getOptionLabels: (option) => option.countryName,
      handelChangeSelect: (e, value, reason, field, setSearch) => {
        if (reason === "select-option") {
          field.setValue(value?.countryName);
          setSearch((prev) => ({ ...prev, [field?.key]: value?.countryName }));
        } else if (reason === "clear") {
          field.setValue("");
          setSearch((prev) => ({ ...prev, [field?.key]: value?.countryName }));
        }
      },
      onInput: (e, value, reason, field, setSearch) => {
        if (reason === "input") {
          setSearch((prev) => ({ ...prev, [field?.key]: value }));
        }
      }
    },
    postal_code: {
      label: "Postal Code",
      placeholder: "xxxxxx",
      initialValue: "",
      type: "number",
      format: "######",
      validate: {
        presence: true
      }
    },
    address: {
      label: "Address",
      placeholder: "Blk 123A Woodlands Drive 51",
      initialValue: "",
      type: "text",
      validate: {
        presence: true
      },
      fullWidth: 12
    },
    unit_no: {
      position: "left",
      label: "Unit No",
      placeholder: "# 01-01",
      initialValue: "",
      type: "number",
      format: "##-##",
      validate: {
        presence: true
      }
    },
    city: {
      label: "City",
      placeholder: "Your City",
      initialValue: "",
      type: "text",
      validate: {
        presence: true
      }
    },
    office_department: {
      position: "left",
      label: "Office Department",
      placeholder: "Your Office Department",
      initialValue: "",
      type: "text",
      validate: {
        presence: true
      }
    },
    divider: {
      type: "divider",
      fullWidth: 12
    },
    first_name: {
      position: "left",
      label: "First Name",
      placeholder: "John",
      initialValue: "",
      inputType: "text",
      validate: {
        presence: true
      }
    },
    last_name: {
      label: "Last Name",
      placeholder: "Doe",
      initialValue: "",
      type: "text",
      validate: {
        presence: true
      }
    },
    country_code: {
      position: "left",
      label: "Country Code",
      placeholder: "+65",
      initialValue: "",
      type: "select",
      validate: {
        presence: true
      },
      options: getCountries().map((item) => {
        return {
          countryName: countryNames[item],
          countryCode: `+${getCountryCallingCode(item)}`,
          code: item
        };
      }),
      getOptionSelected: (option, value) => {
        if (value === "") {
          return true;
        } else return option?.countryCode === value;
      },
      getOptionLabel: (option) =>
        option?.countryName + option?.code + `  ${option?.countryCode}`,
      handelChangeSelect: (e, value, reason, field, setSearch) => {
        if (reason === "select-option") {
          field.setValue(value?.countryCode);
          setSearch((prev) => ({ ...prev, [field?.key]: value?.countryCode }));
        } else if (reason === "clear") {
          field.setValue("");
          setSearch((prev) => ({ ...prev, [field?.key]: "" }));
        }
      },
      getOptionLabels: (option) =>
        option.countryName + " " + option.countryCode,
      onInput: (e, value, reason, field, setSearch) => {
        if (reason === "input") {
          setSearch((prev) => ({ ...prev, [field?.key]: value }));
        }
      },
      width: 2
    },
    phone_number: {
      inputEnd: true,
      label: "Contact Number",
      placeholder: "xxx-xxx-xxx",
      initialValue: "",
      type: "number",
      inputType: "number",
      format: "###-###-###",
      validate: {
        presence: true
      },
      width: 4
    }
  }
};
