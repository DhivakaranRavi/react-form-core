function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from "react";
import PropTypes from "prop-types";

function ColorWidget(props) {
  var disabled = props.disabled,
      readonly = props.readonly,
      BaseInput = props.registry.widgets.BaseInput;
  return React.createElement(BaseInput, _extends({
    type: "color"
  }, props, {
    disabled: disabled || readonly
  }));
}

if (process.env.NODE_ENV !== "production") {
  ColorWidget.propTypes = {
    schema: PropTypes.object.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    readonly: PropTypes.bool,
    autofocus: PropTypes.bool,
    onChange: PropTypes.func
  };
}

export default ColorWidget;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3dpZGdldHMvQ29sb3JXaWRnZXQuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJQcm9wVHlwZXMiLCJDb2xvcldpZGdldCIsInByb3BzIiwiZGlzYWJsZWQiLCJyZWFkb25seSIsIkJhc2VJbnB1dCIsInJlZ2lzdHJ5Iiwid2lkZ2V0cyIsInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViIsInByb3BUeXBlcyIsInNjaGVtYSIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJpZCIsInN0cmluZyIsInZhbHVlIiwicmVxdWlyZWQiLCJib29sIiwiYXV0b2ZvY3VzIiwib25DaGFuZ2UiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU9BLEtBQVAsTUFBa0IsT0FBbEI7QUFDQSxPQUFPQyxTQUFQLE1BQXNCLFlBQXRCOztBQUVBLFNBQVNDLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQUEsTUFFeEJDLFFBRndCLEdBT3RCRCxLQVBzQixDQUV4QkMsUUFGd0I7QUFBQSxNQUd4QkMsUUFId0IsR0FPdEJGLEtBUHNCLENBR3hCRSxRQUh3QjtBQUFBLE1BS1hDLFNBTFcsR0FPdEJILEtBUHNCLENBSXhCSSxRQUp3QixDQUt0QkMsT0FMc0IsQ0FLWEYsU0FMVztBQVExQixTQUFPLG9CQUFDLFNBQUQ7QUFBVyxJQUFBLElBQUksRUFBQztBQUFoQixLQUE0QkgsS0FBNUI7QUFBbUMsSUFBQSxRQUFRLEVBQUVDLFFBQVEsSUFBSUM7QUFBekQsS0FBUDtBQUNEOztBQUVELElBQUlJLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxRQUFaLEtBQXlCLFlBQTdCLEVBQTJDO0FBQ3pDVCxFQUFBQSxXQUFXLENBQUNVLFNBQVosR0FBd0I7QUFDdEJDLElBQUFBLE1BQU0sRUFBRVosU0FBUyxDQUFDYSxNQUFWLENBQWlCQyxVQURIO0FBRXRCQyxJQUFBQSxFQUFFLEVBQUVmLFNBQVMsQ0FBQ2dCLE1BQVYsQ0FBaUJGLFVBRkM7QUFHdEJHLElBQUFBLEtBQUssRUFBRWpCLFNBQVMsQ0FBQ2dCLE1BSEs7QUFJdEJFLElBQUFBLFFBQVEsRUFBRWxCLFNBQVMsQ0FBQ21CLElBSkU7QUFLdEJoQixJQUFBQSxRQUFRLEVBQUVILFNBQVMsQ0FBQ21CLElBTEU7QUFNdEJmLElBQUFBLFFBQVEsRUFBRUosU0FBUyxDQUFDbUIsSUFORTtBQU90QkMsSUFBQUEsU0FBUyxFQUFFcEIsU0FBUyxDQUFDbUIsSUFQQztBQVF0QkUsSUFBQUEsUUFBUSxFQUFFckIsU0FBUyxDQUFDc0I7QUFSRSxHQUF4QjtBQVVEOztBQUVELGVBQWVyQixXQUFmIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5mdW5jdGlvbiBDb2xvcldpZGdldChwcm9wcykge1xuICBjb25zdCB7XG4gICAgZGlzYWJsZWQsXG4gICAgcmVhZG9ubHksXG4gICAgcmVnaXN0cnk6IHtcbiAgICAgIHdpZGdldHM6IHsgQmFzZUlucHV0IH0sXG4gICAgfSxcbiAgfSA9IHByb3BzO1xuICByZXR1cm4gPEJhc2VJbnB1dCB0eXBlPVwiY29sb3JcIiB7Li4ucHJvcHN9IGRpc2FibGVkPXtkaXNhYmxlZCB8fCByZWFkb25seX0gLz47XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgQ29sb3JXaWRnZXQucHJvcFR5cGVzID0ge1xuICAgIHNjaGVtYTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICAgIGlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgcmVxdWlyZWQ6IFByb3BUeXBlcy5ib29sLFxuICAgIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZWFkb25seTogUHJvcFR5cGVzLmJvb2wsXG4gICAgYXV0b2ZvY3VzOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbG9yV2lkZ2V0O1xuIl19