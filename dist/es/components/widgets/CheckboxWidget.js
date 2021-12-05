import React from "react";
import PropTypes from "prop-types";
import { schemaRequiresTrueValue } from "../../utils";

function CheckboxWidget(props) {
  var schema = props.schema,
      id = props.id,
      value = props.value,
      disabled = props.disabled,
      readonly = props.readonly,
      label = props.label,
      autofocus = props.autofocus,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      _onChange = props.onChange,
      DescriptionField = props.DescriptionField; // Because an unchecked checkbox will cause html5 validation to fail, only add
  // the "required" attribute if the field value must be "true", due to the
  // "const" or "enum" keywords

  var required = schemaRequiresTrueValue(schema);
  return React.createElement("div", {
    className: "checkbox ".concat(disabled || readonly ? "disabled" : "")
  }, schema.description && React.createElement(DescriptionField, {
    description: schema.description
  }), React.createElement("label", null, React.createElement("input", {
    type: "checkbox",
    id: id,
    checked: typeof value === "undefined" ? false : value,
    required: required,
    disabled: disabled || readonly,
    autoFocus: autofocus,
    onChange: function onChange(event) {
      return _onChange(event.target.checked);
    },
    onBlur: onBlur && function (event) {
      return onBlur(id, event.target.checked);
    },
    onFocus: onFocus && function (event) {
      return onFocus(id, event.target.checked);
    }
  }), React.createElement("span", null, label)));
}

CheckboxWidget.defaultProps = {
  autofocus: false
};

if (process.env.NODE_ENV !== "production") {
  CheckboxWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.bool,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    autofocus: PropTypes.bool,
    onChange: PropTypes.func
  };
}

export default CheckboxWidget;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3dpZGdldHMvQ2hlY2tib3hXaWRnZXQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJzY2hlbWFSZXF1aXJlc1RydWVWYWx1ZSIsIkNoZWNrYm94V2lkZ2V0IiwicHJvcHMiLCJzY2hlbWEiLCJpZCIsInZhbHVlIiwiZGlzYWJsZWQiLCJyZWFkb25seSIsImxhYmVsIiwiYXV0b2ZvY3VzIiwib25CbHVyIiwib25Gb2N1cyIsIm9uQ2hhbmdlIiwiRGVzY3JpcHRpb25GaWVsZCIsInJlcXVpcmVkIiwiZGVzY3JpcHRpb24iLCJldmVudCIsInRhcmdldCIsImNoZWNrZWQiLCJkZWZhdWx0UHJvcHMiLCJwcm9jZXNzIiwiZW52IiwiTk9ERV9FTlYiLCJwcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiYm9vbCIsImZ1bmMiXSwibWFwcGluZ3MiOiJBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCO0FBQ0EsU0FBU0MsdUJBQVQsUUFBd0MsYUFBeEM7O0FBRUEsU0FBU0MsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0I7QUFBQSxNQUUzQkMsTUFGMkIsR0FhekJELEtBYnlCLENBRTNCQyxNQUYyQjtBQUFBLE1BRzNCQyxFQUgyQixHQWF6QkYsS0FieUIsQ0FHM0JFLEVBSDJCO0FBQUEsTUFJM0JDLEtBSjJCLEdBYXpCSCxLQWJ5QixDQUkzQkcsS0FKMkI7QUFBQSxNQUszQkMsUUFMMkIsR0FhekJKLEtBYnlCLENBSzNCSSxRQUwyQjtBQUFBLE1BTTNCQyxRQU4yQixHQWF6QkwsS0FieUIsQ0FNM0JLLFFBTjJCO0FBQUEsTUFPM0JDLEtBUDJCLEdBYXpCTixLQWJ5QixDQU8zQk0sS0FQMkI7QUFBQSxNQVEzQkMsU0FSMkIsR0FhekJQLEtBYnlCLENBUTNCTyxTQVIyQjtBQUFBLE1BUzNCQyxNQVQyQixHQWF6QlIsS0FieUIsQ0FTM0JRLE1BVDJCO0FBQUEsTUFVM0JDLE9BVjJCLEdBYXpCVCxLQWJ5QixDQVUzQlMsT0FWMkI7QUFBQSxNQVczQkMsU0FYMkIsR0FhekJWLEtBYnlCLENBVzNCVSxRQVgyQjtBQUFBLE1BWTNCQyxnQkFaMkIsR0FhekJYLEtBYnlCLENBWTNCVyxnQkFaMkIsRUFlN0I7QUFDQTtBQUNBOztBQUNBLE1BQU1DLFFBQVEsR0FBR2QsdUJBQXVCLENBQUNHLE1BQUQsQ0FBeEM7QUFFQSxTQUNFO0FBQUssSUFBQSxTQUFTLHFCQUFjRyxRQUFRLElBQUlDLFFBQVosR0FBdUIsVUFBdkIsR0FBb0MsRUFBbEQ7QUFBZCxLQUNHSixNQUFNLENBQUNZLFdBQVAsSUFDQyxvQkFBQyxnQkFBRDtBQUFrQixJQUFBLFdBQVcsRUFBRVosTUFBTSxDQUFDWTtBQUF0QyxJQUZKLEVBSUUsbUNBQ0U7QUFDRSxJQUFBLElBQUksRUFBQyxVQURQO0FBRUUsSUFBQSxFQUFFLEVBQUVYLEVBRk47QUFHRSxJQUFBLE9BQU8sRUFBRSxPQUFPQyxLQUFQLEtBQWlCLFdBQWpCLEdBQStCLEtBQS9CLEdBQXVDQSxLQUhsRDtBQUlFLElBQUEsUUFBUSxFQUFFUyxRQUpaO0FBS0UsSUFBQSxRQUFRLEVBQUVSLFFBQVEsSUFBSUMsUUFMeEI7QUFNRSxJQUFBLFNBQVMsRUFBRUUsU0FOYjtBQU9FLElBQUEsUUFBUSxFQUFFLGtCQUFBTyxLQUFLO0FBQUEsYUFBSUosU0FBUSxDQUFDSSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsT0FBZCxDQUFaO0FBQUEsS0FQakI7QUFRRSxJQUFBLE1BQU0sRUFBRVIsTUFBTSxJQUFLLFVBQUFNLEtBQUs7QUFBQSxhQUFJTixNQUFNLENBQUNOLEVBQUQsRUFBS1ksS0FBSyxDQUFDQyxNQUFOLENBQWFDLE9BQWxCLENBQVY7QUFBQSxLQVIxQjtBQVNFLElBQUEsT0FBTyxFQUFFUCxPQUFPLElBQUssVUFBQUssS0FBSztBQUFBLGFBQUlMLE9BQU8sQ0FBQ1AsRUFBRCxFQUFLWSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsT0FBbEIsQ0FBWDtBQUFBO0FBVDVCLElBREYsRUFZRSxrQ0FBT1YsS0FBUCxDQVpGLENBSkYsQ0FERjtBQXFCRDs7QUFFRFAsY0FBYyxDQUFDa0IsWUFBZixHQUE4QjtBQUM1QlYsRUFBQUEsU0FBUyxFQUFFO0FBRGlCLENBQTlCOztBQUlBLElBQUlXLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQTdCLEVBQTJDO0FBQ3pDckIsRUFBQUEsY0FBYyxDQUFDc0IsU0FBZixHQUEyQjtBQUN6QnBCLElBQUFBLE1BQU0sRUFBRUosU0FBUyxDQUFDeUIsTUFBVixDQUFpQkMsVUFEQTtBQUV6QnJCLElBQUFBLEVBQUUsRUFBRUwsU0FBUyxDQUFDMkIsTUFBVixDQUFpQkQsVUFGSTtBQUd6QnBCLElBQUFBLEtBQUssRUFBRU4sU0FBUyxDQUFDNEIsSUFIUTtBQUl6QmIsSUFBQUEsUUFBUSxFQUFFZixTQUFTLENBQUM0QixJQUpLO0FBS3pCckIsSUFBQUEsUUFBUSxFQUFFUCxTQUFTLENBQUM0QixJQUxLO0FBTXpCcEIsSUFBQUEsUUFBUSxFQUFFUixTQUFTLENBQUM0QixJQU5LO0FBT3pCbEIsSUFBQUEsU0FBUyxFQUFFVixTQUFTLENBQUM0QixJQVBJO0FBUXpCZixJQUFBQSxRQUFRLEVBQUViLFNBQVMsQ0FBQzZCO0FBUkssR0FBM0I7QUFVRDs7QUFFRCxlQUFlM0IsY0FBZiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IHNjaGVtYVJlcXVpcmVzVHJ1ZVZhbHVlIH0gZnJvbSBcIi4uLy4uL3V0aWxzXCI7XG5cbmZ1bmN0aW9uIENoZWNrYm94V2lkZ2V0KHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBzY2hlbWEsXG4gICAgaWQsXG4gICAgdmFsdWUsXG4gICAgZGlzYWJsZWQsXG4gICAgcmVhZG9ubHksXG4gICAgbGFiZWwsXG4gICAgYXV0b2ZvY3VzLFxuICAgIG9uQmx1cixcbiAgICBvbkZvY3VzLFxuICAgIG9uQ2hhbmdlLFxuICAgIERlc2NyaXB0aW9uRmllbGQsXG4gIH0gPSBwcm9wcztcblxuICAvLyBCZWNhdXNlIGFuIHVuY2hlY2tlZCBjaGVja2JveCB3aWxsIGNhdXNlIGh0bWw1IHZhbGlkYXRpb24gdG8gZmFpbCwgb25seSBhZGRcbiAgLy8gdGhlIFwicmVxdWlyZWRcIiBhdHRyaWJ1dGUgaWYgdGhlIGZpZWxkIHZhbHVlIG11c3QgYmUgXCJ0cnVlXCIsIGR1ZSB0byB0aGVcbiAgLy8gXCJjb25zdFwiIG9yIFwiZW51bVwiIGtleXdvcmRzXG4gIGNvbnN0IHJlcXVpcmVkID0gc2NoZW1hUmVxdWlyZXNUcnVlVmFsdWUoc2NoZW1hKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgY2hlY2tib3ggJHtkaXNhYmxlZCB8fCByZWFkb25seSA/IFwiZGlzYWJsZWRcIiA6IFwiXCJ9YH0+XG4gICAgICB7c2NoZW1hLmRlc2NyaXB0aW9uICYmIChcbiAgICAgICAgPERlc2NyaXB0aW9uRmllbGQgZGVzY3JpcHRpb249e3NjaGVtYS5kZXNjcmlwdGlvbn0gLz5cbiAgICAgICl9XG4gICAgICA8bGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgaWQ9e2lkfVxuICAgICAgICAgIGNoZWNrZWQ9e3R5cGVvZiB2YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIiA/IGZhbHNlIDogdmFsdWV9XG4gICAgICAgICAgcmVxdWlyZWQ9e3JlcXVpcmVkfVxuICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZCB8fCByZWFkb25seX1cbiAgICAgICAgICBhdXRvRm9jdXM9e2F1dG9mb2N1c31cbiAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gb25DaGFuZ2UoZXZlbnQudGFyZ2V0LmNoZWNrZWQpfVxuICAgICAgICAgIG9uQmx1cj17b25CbHVyICYmIChldmVudCA9PiBvbkJsdXIoaWQsIGV2ZW50LnRhcmdldC5jaGVja2VkKSl9XG4gICAgICAgICAgb25Gb2N1cz17b25Gb2N1cyAmJiAoZXZlbnQgPT4gb25Gb2N1cyhpZCwgZXZlbnQudGFyZ2V0LmNoZWNrZWQpKX1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4+e2xhYmVsfTwvc3Bhbj5cbiAgICAgIDwvbGFiZWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbkNoZWNrYm94V2lkZ2V0LmRlZmF1bHRQcm9wcyA9IHtcbiAgYXV0b2ZvY3VzOiBmYWxzZSxcbn07XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgQ2hlY2tib3hXaWRnZXQucHJvcFR5cGVzID0ge1xuICAgIHNjaGVtYTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5ib29sLFxuICAgIHJlcXVpcmVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBkaXNhYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVhZG9ubHk6IFByb3BUeXBlcy5ib29sLFxuICAgIGF1dG9mb2N1czogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBDaGVja2JveFdpZGdldDtcbiJdfQ==