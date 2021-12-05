import React from "react";
import PropTypes from "prop-types";

function DescriptionField(props) {
  var id = props.id,
      description = props.description;

  if (!description) {
    return null;
  }

  if (typeof description === "string") {
    return React.createElement("p", {
      id: id,
      className: "field-description"
    }, description);
  } else {
    return React.createElement("div", {
      id: id,
      className: "field-description"
    }, description);
  }
}

if (process.env.NODE_ENV !== "production") {
  DescriptionField.propTypes = {
    id: PropTypes.string,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
  };
}

export default DescriptionField;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ZpZWxkcy9EZXNjcmlwdGlvbkZpZWxkLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiUHJvcFR5cGVzIiwiRGVzY3JpcHRpb25GaWVsZCIsInByb3BzIiwiaWQiLCJkZXNjcmlwdGlvbiIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsInByb3BUeXBlcyIsInN0cmluZyIsIm9uZU9mVHlwZSIsImVsZW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCOztBQUVBLFNBQVNDLGdCQUFULENBQTBCQyxLQUExQixFQUFpQztBQUFBLE1BQ3ZCQyxFQUR1QixHQUNIRCxLQURHLENBQ3ZCQyxFQUR1QjtBQUFBLE1BQ25CQyxXQURtQixHQUNIRixLQURHLENBQ25CRSxXQURtQjs7QUFFL0IsTUFBSSxDQUFDQSxXQUFMLEVBQWtCO0FBQ2hCLFdBQU8sSUFBUDtBQUNEOztBQUNELE1BQUksT0FBT0EsV0FBUCxLQUF1QixRQUEzQixFQUFxQztBQUNuQyxXQUNFO0FBQUcsTUFBQSxFQUFFLEVBQUVELEVBQVA7QUFBVyxNQUFBLFNBQVMsRUFBQztBQUFyQixPQUNHQyxXQURILENBREY7QUFLRCxHQU5ELE1BTU87QUFDTCxXQUNFO0FBQUssTUFBQSxFQUFFLEVBQUVELEVBQVQ7QUFBYSxNQUFBLFNBQVMsRUFBQztBQUF2QixPQUNHQyxXQURILENBREY7QUFLRDtBQUNGOztBQUVELElBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQTdCLEVBQTJDO0FBQ3pDTixFQUFBQSxnQkFBZ0IsQ0FBQ08sU0FBakIsR0FBNkI7QUFDM0JMLElBQUFBLEVBQUUsRUFBRUgsU0FBUyxDQUFDUyxNQURhO0FBRTNCTCxJQUFBQSxXQUFXLEVBQUVKLFNBQVMsQ0FBQ1UsU0FBVixDQUFvQixDQUFDVixTQUFTLENBQUNTLE1BQVgsRUFBbUJULFNBQVMsQ0FBQ1csT0FBN0IsQ0FBcEI7QUFGYyxHQUE3QjtBQUlEOztBQUVELGVBQWVWLGdCQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5mdW5jdGlvbiBEZXNjcmlwdGlvbkZpZWxkKHByb3BzKSB7XG4gIGNvbnN0IHsgaWQsIGRlc2NyaXB0aW9uIH0gPSBwcm9wcztcbiAgaWYgKCFkZXNjcmlwdGlvbikge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIGlmICh0eXBlb2YgZGVzY3JpcHRpb24gPT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPHAgaWQ9e2lkfSBjbGFzc05hbWU9XCJmaWVsZC1kZXNjcmlwdGlvblwiPlxuICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICA8L3A+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD17aWR9IGNsYXNzTmFtZT1cImZpZWxkLWRlc2NyaXB0aW9uXCI+XG4gICAgICAgIHtkZXNjcmlwdGlvbn1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICBEZXNjcmlwdGlvbkZpZWxkLnByb3BUeXBlcyA9IHtcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLmVsZW1lbnRdKSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRGVzY3JpcHRpb25GaWVsZDtcbiJdfQ==