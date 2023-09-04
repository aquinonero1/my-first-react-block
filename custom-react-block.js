wp.blocks.registerBlockType('custom/custom-react-block',{
    title: 'Custom React Block',
    icon: 'hammer',
    category: 'design',
    attributes:{
        companyName: { type: 'string' },
        companyPhone: { type: 'string' },
        companyAddres: { type: 'string' },
        companyAddress2: { type: 'string' },
        companyCity: { type: 'string' },
        companyState: { type: 'string' },
        companyZip: { type: 'string' }
    },
    edit: function(props){

        function updateCompanyName(event){ props.setAttributes({ companyName: event.target.value })}
        function updateCompanyPhone(event){ props.setAttributes({ companyPhone: event.target.value })}
        function updateCompanyAddress(event){ props.setAttributes({ companyAddres: event.target.value })}
        function updateCompanyAddress2(event){ props.setAttributes({ companyAddress2: event.target.value })}
        function updateCompanyCity(event){ props.setAttributes({ companyCity: event.target.value })}
        function updateCompanyState(event){ props.setAttributes({ companyState: event.target.value })}
        function updateCompanyZip(event){ props.setAttributes({ companyZip: event.target.value })}

       return React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Company Name"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: "",
        placeholder: "company name"
      }), /*#__PURE__*/React.createElement("label", null, "Company Phone"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: "",
        placeholder: "company phone"
      }), /*#__PURE__*/React.createElement("label", null, "Company Address"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: "",
        placeholder: "company addresss"
      }), /*#__PURE__*/React.createElement("label", null, "Company Address Line 2"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: "",
        placeholder: "company address line 2"
      }), /*#__PURE__*/React.createElement("label", null, "Company City"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: "",
        placeholder: "company city"
      }), /*#__PURE__*/React.createElement("label", null, "Company State"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: "",
        placeholder: "company state"
      }), /*#__PURE__*/React.createElement("label", null, "Company Zipcode"), /*#__PURE__*/React.createElement("input", {
        type: "text",
        value: "",
        placeholder: "company zipcode"
      }));
    },
    save: function(props){
        return React.createElement("div", null, /*#__PURE__*/React.createElement("h3", null, props.attributes.companyName), /*#__PURE__*/React.createElement("span", null, props.attributes.companyAddress), /*#__PURE__*/React.createElement("span", null, props.attributes.companyAddress2), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", null, props.attributes.companyCity), /*#__PURE__*/React.createElement("span", null, props.attributes.companyState), /*#__PURE__*/React.createElement("span", null, props.attributes.companyZip), /*#__PURE__*/React.createElement("span", null, props.attributes.companyPhone)));
    }
})