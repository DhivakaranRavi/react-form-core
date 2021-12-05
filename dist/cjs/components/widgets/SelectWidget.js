"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var nums = new Set(["number", "integer"]);
/**
 * This is a silly limitation in the DOM where option change event values are
 * always retrieved as strings.
 */

function processValue(schema, value) {
  // "enum" is a reserved word, so only "type" and "items" can be destructured
  var type = schema.type,
      items = schema.items;

  if (value === "") {
    return undefined;
  } else if (type === "array" && items && nums.has(items.type)) {
    return value.map(_utils.asNumber);
  } else if (type === "boolean") {
    return value === "true";
  } else if (type === "number") {
    return (0, _utils.asNumber)(value);
  } // If type is undefined, but an enum is present, try and infer the type from
  // the enum values


  if (schema["enum"]) {
    if (schema["enum"].every(function (x) {
      return (0, _utils.guessType)(x) === "number";
    })) {
      return (0, _utils.asNumber)(value);
    } else if (schema["enum"].every(function (x) {
      return (0, _utils.guessType)(x) === "boolean";
    })) {
      return value === "true";
    }
  }

  return value;
}

function getValue(event, multiple) {
  if (multiple) {
    return [].slice.call(event.target.options).filter(function (o) {
      return o.selected;
    }).map(function (o) {
      return o.value;
    });
  } else {
    return event.target.value;
  }
}

function SelectWidget(props) {
  var schema = props.schema,
      id = props.id,
      options = props.options,
      value = props.value,
      required = props.required,
      disabled = props.disabled,
      readonly = props.readonly,
      multiple = props.multiple,
      autofocus = props.autofocus,
      _onChange = props.onChange,
      onBlur = props.onBlur,
      onFocus = props.onFocus,
      placeholder = props.placeholder;
  var enumOptions = options.enumOptions,
      enumDisabled = options.enumDisabled;
  var emptyValue = multiple ? [] : "";
  return _react["default"].createElement("select", {
    id: id,
    multiple: multiple,
    className: "form-control",
    value: typeof value === "undefined" ? emptyValue : value,
    required: required,
    disabled: disabled || readonly,
    autoFocus: autofocus,
    onBlur: onBlur && function (event) {
      var newValue = getValue(event, multiple);
      onBlur(id, processValue(schema, newValue));
    },
    onFocus: onFocus && function (event) {
      var newValue = getValue(event, multiple);
      onFocus(id, processValue(schema, newValue));
    },
    onChange: function onChange(event) {
      var newValue = getValue(event, multiple);

      _onChange(processValue(schema, newValue));
    }
  }, !multiple && schema["default"] === undefined && _react["default"].createElement("option", {
    value: ""
  }, placeholder), enumOptions.map(function (_ref, i) {
    var value = _ref.value,
        label = _ref.label;
    var disabled = enumDisabled && enumDisabled.indexOf(value) != -1;
    return _react["default"].createElement("option", {
      key: i,
      value: value,
      disabled: disabled
    }, label);
  }));
}

SelectWidget.defaultProps = {
  autofocus: false
};

if (process.env.NODE_ENV !== "production") {
  SelectWidget.propTypes = {
    schema: _propTypes["default"].object.isRequired,
    id: _propTypes["default"].string.isRequired,
    options: _propTypes["default"].shape({
      enumOptions: _propTypes["default"].array
    }).isRequired,
    value: _propTypes["default"].any,
    required: _propTypes["default"].bool,
    disabled: _propTypes["default"].bool,
    readonly: _propTypes["default"].bool,
    multiple: _propTypes["default"].bool,
    autofocus: _propTypes["default"].bool,
    onChange: _propTypes["default"].func,
    onBlur: _propTypes["default"].func,
    onFocus: _propTypes["default"].func
  };
}

var _default = SelectWidget;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3dpZGdldHMvU2VsZWN0V2lkZ2V0LmpzIl0sIm5hbWVzIjpbIm51bXMiLCJTZXQiLCJwcm9jZXNzVmFsdWUiLCJzY2hlbWEiLCJ2YWx1ZSIsInR5cGUiLCJpdGVtcyIsInVuZGVmaW5lZCIsImhhcyIsIm1hcCIsImFzTnVtYmVyIiwiZXZlcnkiLCJ4IiwiZ2V0VmFsdWUiLCJldmVudCIsIm11bHRpcGxlIiwic2xpY2UiLCJjYWxsIiwidGFyZ2V0Iiwib3B0aW9ucyIsImZpbHRlciIsIm8iLCJzZWxlY3RlZCIsIlNlbGVjdFdpZGdldCIsInByb3BzIiwiaWQiLCJyZXF1aXJlZCIsImRpc2FibGVkIiwicmVhZG9ubHkiLCJhdXRvZm9jdXMiLCJvbkNoYW5nZSIsIm9uQmx1ciIsIm9uRm9jdXMiLCJwbGFjZWhvbGRlciIsImVudW1PcHRpb25zIiwiZW51bURpc2FibGVkIiwiZW1wdHlWYWx1ZSIsIm5ld1ZhbHVlIiwiaSIsImxhYmVsIiwiaW5kZXhPZiIsImRlZmF1bHRQcm9wcyIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJzaGFwZSIsImFycmF5IiwiYW55IiwiYm9vbCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7OztBQUVBLElBQU1BLElBQUksR0FBRyxJQUFJQyxHQUFKLENBQVEsQ0FBQyxRQUFELEVBQVcsU0FBWCxDQUFSLENBQWI7QUFFQTs7Ozs7QUFJQSxTQUFTQyxZQUFULENBQXNCQyxNQUF0QixFQUE4QkMsS0FBOUIsRUFBcUM7QUFDbkM7QUFEbUMsTUFFM0JDLElBRjJCLEdBRVhGLE1BRlcsQ0FFM0JFLElBRjJCO0FBQUEsTUFFckJDLEtBRnFCLEdBRVhILE1BRlcsQ0FFckJHLEtBRnFCOztBQUduQyxNQUFJRixLQUFLLEtBQUssRUFBZCxFQUFrQjtBQUNo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QVVRLElBWkc7QUFhdkJ2QixJQUFBQSxNQUFNLEVBQUVlLHNCQUFVUSxJQWJLO0FBY3ZCdEIsSUFBQUEsT0FBTyxFQUFFYyxzQkFBVVE7QUFkSSxHQUF6QjtBQWdCRDs7ZUFFYy9CLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmltcG9ydCB7IGFzTnVtYmVyLCBndWVzc1R5cGUgfSBmcm9tIFwiLi4vLi4vdXRpbHNcIjtcblxuY29uc3QgbnVtcyA9IG5ldyBTZXQoW1wibnVtYmVyXCIsIFwiaW50ZWdlclwiXSk7XG5cbi8qKlxuICogVGhpcyBpcyBhIHNpbGx5IGxpbWl0YXRpb24gaW4gdGhlIERPTSB3aGVyZSBvcHRpb24gY2hhbmdlIGV2ZW50IHZhbHVlcyBhcmVcbiAqIGFsd2F5cyByZXRyaWV2ZWQgYXMgc3RyaW5ncy5cbiAqL1xuZnVuY3Rpb24gcHJvY2Vzc1ZhbHVlKHNjaGVtYSwgdmFsdWUpIHtcbiAgLy8gXCJlbnVtXCIgaXMgYSByZXNlcnZlZCB3b3JkLCBzbyBvbmx5IFwidHlwZVwiIGFuZCBcIml0ZW1zXCIgY2FuIGJlIGRlc3RydWN0dXJlZFxuICBjb25zdCB7IHR5cGUsIGl0ZW1zIH0gPSBzY2hlbWE7XG4gIGlmICh2YWx1ZSA9PT0gXCJcIikge1xuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJhcnJheVwiICYmIGl0ZW1zICYmIG51bXMuaGFzKGl0ZW1zLnR5cGUpKSB7XG4gICAgcmV0dXJuIHZhbHVlLm1hcChhc051bWJlcik7XG4gIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IFwidHJ1ZVwiO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICByZXR1cm4gYXNOdW1iZXIodmFsdWUpO1xuICB9XG5cbiAgLy8gSWYgdHlwZSBpcyB1bmRlZmluZWQsIGJ1dCBhbiBlbnVtIGlzIHByZXNlbnQsIHRyeSBhbmQgaW5mZXIgdGhlIHR5cGUgZnJvbVxuICAvLyB0aGUgZW51bSB2YWx1ZXNcbiAgaWYgKHNjaGVtYS5lbnVtKSB7XG4gICAgaWYgKHNjaGVtYS5lbnVtLmV2ZXJ5KHggPT4gZ3Vlc3NUeXBlKHgpID09PSBcIm51bWJlclwiKSkge1xuICAgICAgcmV0dXJuIGFzTnVtYmVyKHZhbHVlKTtcbiAgICB9IGVsc2UgaWYgKHNjaGVtYS5lbnVtLmV2ZXJ5KHggPT4gZ3Vlc3NUeXBlKHgpID09PSBcImJvb2xlYW5cIikpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA9PT0gXCJ0cnVlXCI7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiBnZXRWYWx1ZShldmVudCwgbXVsdGlwbGUpIHtcbiAgaWYgKG11bHRpcGxlKSB7XG4gICAgcmV0dXJuIFtdLnNsaWNlXG4gICAgICAuY2FsbChldmVudC50YXJnZXQub3B0aW9ucylcbiAgICAgIC5maWx0ZXIobyA9PiBvLnNlbGVjdGVkKVxuICAgICAgLm1hcChvID0+IG8udmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBldmVudC50YXJnZXQudmFsdWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gU2VsZWN0V2lkZ2V0KHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBzY2hlbWEsXG4gICAgaWQsXG4gICAgb3B0aW9ucyxcbiAgICB2YWx1ZSxcbiAgICByZXF1aXJlZCxcbiAgICBkaXNhYmxlZCxcbiAgICByZWFkb25seSxcbiAgICBtdWx0aXBsZSxcbiAgICBhdXRvZm9jdXMsXG4gICAgb25DaGFuZ2UsXG4gICAgb25CbHVyLFxuICAgIG9uRm9jdXMsXG4gICAgcGxhY2Vob2xkZXIsXG4gIH0gPSBwcm9wcztcbiAgY29uc3QgeyBlbnVtT3B0aW9ucywgZW51bURpc2FibGVkIH0gPSBvcHRpb25zO1xuICBjb25zdCBlbXB0eVZhbHVlID0gbXVsdGlwbGUgPyBbXSA6IFwiXCI7XG4gIHJldHVybiAoXG4gICAgPHNlbGVjdFxuICAgICAgaWQ9e2lkfVxuICAgICAgbXVsdGlwbGU9e211bHRpcGxlfVxuICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgIHZhbHVlPXt0eXBlb2YgdmFsdWUgPT09IFwidW5kZWZpbmVkXCIgPyBlbXB0eVZhbHVlIDogdmFsdWV9XG4gICAgICByZXF1aXJlZD17cmVxdWlyZWR9XG4gICAgICBkaXNhYmxlZD17ZGlzYWJsZWQgfHwgcmVhZG9ubHl9XG4gICAgICBhdXRvRm9jdXM9e2F1dG9mb2N1c31cbiAgICAgIG9uQmx1cj17XG4gICAgICAgIG9uQmx1ciAmJlxuICAgICAgICAoZXZlbnQgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gZ2V0VmFsdWUoZXZlbnQsIG11bHRpcGxlKTtcbiAgICAgICAgICBvbkJsdXIoaWQsIHByb2Nlc3NWYWx1ZShzY2hlbWEsIG5ld1ZhbHVlKSk7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBvbkZvY3VzPXtcbiAgICAgICAgb25Gb2N1cyAmJlxuICAgICAgICAoZXZlbnQgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gZ2V0VmFsdWUoZXZlbnQsIG11bHRpcGxlKTtcbiAgICAgICAgICBvbkZvY3VzKGlkLCBwcm9jZXNzVmFsdWUoc2NoZW1hLCBuZXdWYWx1ZSkpO1xuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHtcbiAgICAgICAgY29uc3QgbmV3VmFsdWUgPSBnZXRWYWx1ZShldmVudCwgbXVsdGlwbGUpO1xuICAgICAgICBvbkNoYW5nZShwcm9jZXNzVmFsdWUoc2NoZW1hLCBuZXdWYWx1ZSkpO1xuICAgICAgfX0+XG4gICAgICB7IW11bHRpcGxlICYmIHNjaGVtYS5kZWZhdWx0ID09PSB1bmRlZmluZWQgJiYgKFxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+e3BsYWNlaG9sZGVyfTwvb3B0aW9uPlxuICAgICAgKX1cbiAgICAgIHtlbnVtT3B0aW9ucy5tYXAoKHsgdmFsdWUsIGxhYmVsIH0sIGkpID0+IHtcbiAgICAgICAgY29uc3QgZGlzYWJsZWQgPSBlbnVtRGlzYWJsZWQgJiYgZW51bURpc2FibGVkLmluZGV4T2YodmFsdWUpICE9IC0xO1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxvcHRpb24ga2V5PXtpfSB2YWx1ZT17dmFsdWV9IGRpc2FibGVkPXtkaXNhYmxlZH0+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L3NlbGVjdD5cbiAgKTtcbn1cblxuU2VsZWN0V2lkZ2V0LmRlZmF1bHRQcm9wcyA9IHtcbiAgYXV0b2ZvY3VzOiBmYWxzZSxcbn07XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgU2VsZWN0V2lkZ2V0LnByb3BUeXBlcyA9IHtcbiAgICBzY2hlbWE6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG9wdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBlbnVtT3B0aW9uczogUHJvcFR5cGVzLmFycmF5LFxuICAgIH0pLmlzUmVxdWlyZWQsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5hbnksXG4gICAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZWFkb25seTogUHJvcFR5cGVzLmJvb2wsXG4gICAgbXVsdGlwbGU6IFByb3BUeXBlcy5ib29sLFxuICAgIGF1dG9mb2N1czogUHJvcFR5cGVzLmJvb2wsXG4gICAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLFxuICAgIG9uQmx1cjogUHJvcFR5cGVzLmZ1bmMsXG4gICAgb25Gb2N1czogUHJvcFR5cGVzLmZ1bmMsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdFdpZGdldDtcbiJdfQ==