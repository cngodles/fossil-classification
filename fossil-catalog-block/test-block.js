wp.blocks.registerBlockType('clint/catalog-id', {
  title: 'Catalog Number',
  icon: 'book-alt',
  category: 'common',
  attributes: {
    catalogID: {type: 'string'},
  },
  
/* This configures how the content and color fields will work, and sets up the necessary elements */
  
  edit: function(props) {
    function updateContent(event) {
      props.setAttributes({catalogID: event.target.value})
    }
    return React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        "Enter Catalog Number:"
      ),
      React.createElement("input", { style: { display: "inline-block" }, type: "text", value: props.attributes.catalogID, onChange: updateContent })
      //React.createElement(wp.components.ColorPicker, { color: props.attributes.color, onChangeComplete: updateColor })
    );
  },
  save: function(props) {
    return (
      <p>Catalog Number: 
        <a href="https://fossil.15656.com/fossil-catalog/" title="Parks Township Fossil Catalog">
          {props.attributes.catalogID}
        </a>
      </p>
    );
  }
})