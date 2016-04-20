'use strict';"use strict";
var compiler_1 = require('angular2/compiler');
var COMPONENT_SELECTOR = /^[\w|-]*$/;
var SKEWER_CASE = /-(\w)/g;
var directiveResolver = new compiler_1.DirectiveResolver();
function getComponentInfo(type) {
    var resolvedMetadata = directiveResolver.resolve(type);
    var selector = resolvedMetadata.selector;
    if (!selector.match(COMPONENT_SELECTOR)) {
        throw new Error('Only selectors matching element names are supported, got: ' + selector);
    }
    var selector = selector.replace(SKEWER_CASE, function (all, letter) { return letter.toUpperCase(); });
    return {
        type: type,
        selector: selector,
        inputs: parseFields(resolvedMetadata.inputs),
        outputs: parseFields(resolvedMetadata.outputs)
    };
}
exports.getComponentInfo = getComponentInfo;
function parseFields(names) {
    var attrProps = [];
    if (names) {
        for (var i = 0; i < names.length; i++) {
            var parts = names[i].split(':');
            var prop = parts[0].trim();
            var attr = (parts[1] || parts[0]).trim();
            var capitalAttr = attr.charAt(0).toUpperCase() + attr.substr(1);
            attrProps.push({
                prop: prop,
                attr: attr,
                bracketAttr: "[" + attr + "]",
                parenAttr: "(" + attr + ")",
                bracketParenAttr: "[(" + attr + ")]",
                onAttr: "on" + capitalAttr,
                bindAttr: "bind" + capitalAttr,
                bindonAttr: "bindon" + capitalAttr
            });
        }
    }
    return attrProps;
}
exports.parseFields = parseFields;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWV0YWRhdGEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLVlVa25RVVRLLnRtcC9hbmd1bGFyMi9zcmMvdXBncmFkZS9tZXRhZGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EseUJBQWdDLG1CQUFtQixDQUFDLENBQUE7QUFHcEQsSUFBSSxrQkFBa0IsR0FBRyxXQUFXLENBQUM7QUFDckMsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDO0FBQzNCLElBQUksaUJBQWlCLEdBQUcsSUFBSSw0QkFBaUIsRUFBRSxDQUFDO0FBb0JoRCwwQkFBaUMsSUFBVTtJQUN6QyxJQUFJLGdCQUFnQixHQUFzQixpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUUsSUFBSSxRQUFRLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxDQUFDO0lBQ3pDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QyxNQUFNLElBQUksS0FBSyxDQUFDLDREQUE0RCxHQUFHLFFBQVEsQ0FBQyxDQUFDO0lBQzNGLENBQUM7SUFDRCxJQUFJLFFBQVEsR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxVQUFDLEdBQUcsRUFBRSxNQUFjLElBQUssT0FBQSxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQXBCLENBQW9CLENBQUMsQ0FBQztJQUM1RixNQUFNLENBQUM7UUFDTCxJQUFJLEVBQUUsSUFBSTtRQUNWLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLE1BQU0sRUFBRSxXQUFXLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDO1FBQzVDLE9BQU8sRUFBRSxXQUFXLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDO0tBQy9DLENBQUM7QUFDSixDQUFDO0FBYmUsd0JBQWdCLG1CQWEvQixDQUFBO0FBRUQscUJBQTRCLEtBQWU7SUFDekMsSUFBSSxTQUFTLEdBQWUsRUFBRSxDQUFDO0lBQy9CLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDVixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUN0QyxJQUFJLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hDLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUMzQixJQUFJLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN6QyxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEUsU0FBUyxDQUFDLElBQUksQ0FBVztnQkFDdkIsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsSUFBSSxFQUFFLElBQUk7Z0JBQ1YsV0FBVyxFQUFFLE1BQUksSUFBSSxNQUFHO2dCQUN4QixTQUFTLEVBQUUsTUFBSSxJQUFJLE1BQUc7Z0JBQ3RCLGdCQUFnQixFQUFFLE9BQUssSUFBSSxPQUFJO2dCQUMvQixNQUFNLEVBQUUsT0FBSyxXQUFhO2dCQUMxQixRQUFRLEVBQUUsU0FBTyxXQUFhO2dCQUM5QixVQUFVLEVBQUUsV0FBUyxXQUFhO2FBQ25DLENBQUMsQ0FBQztRQUNMLENBQUM7SUFDSCxDQUFDO0lBQ0QsTUFBTSxDQUFDLFNBQVMsQ0FBQztBQUNuQixDQUFDO0FBckJlLG1CQUFXLGNBcUIxQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUeXBlLCBEaXJlY3RpdmVNZXRhZGF0YX0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge0RpcmVjdGl2ZVJlc29sdmVyfSBmcm9tICdhbmd1bGFyMi9jb21waWxlcic7XG5pbXBvcnQge3N0cmluZ2lmeX0gZnJvbSAnLi91dGlsJztcblxudmFyIENPTVBPTkVOVF9TRUxFQ1RPUiA9IC9eW1xcd3wtXSokLztcbnZhciBTS0VXRVJfQ0FTRSA9IC8tKFxcdykvZztcbnZhciBkaXJlY3RpdmVSZXNvbHZlciA9IG5ldyBEaXJlY3RpdmVSZXNvbHZlcigpO1xuXG5leHBvcnQgaW50ZXJmYWNlIEF0dHJQcm9wIHtcbiAgcHJvcDogc3RyaW5nO1xuICBhdHRyOiBzdHJpbmc7XG4gIGJyYWNrZXRBdHRyOiBzdHJpbmc7XG4gIGJyYWNrZXRQYXJlbkF0dHI6IHN0cmluZztcbiAgcGFyZW5BdHRyOiBzdHJpbmc7XG4gIG9uQXR0cjogc3RyaW5nO1xuICBiaW5kQXR0cjogc3RyaW5nO1xuICBiaW5kb25BdHRyOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50SW5mbyB7XG4gIHR5cGU6IFR5cGU7XG4gIHNlbGVjdG9yOiBzdHJpbmc7XG4gIGlucHV0czogQXR0clByb3BbXTtcbiAgb3V0cHV0czogQXR0clByb3BbXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENvbXBvbmVudEluZm8odHlwZTogVHlwZSk6IENvbXBvbmVudEluZm8ge1xuICB2YXIgcmVzb2x2ZWRNZXRhZGF0YTogRGlyZWN0aXZlTWV0YWRhdGEgPSBkaXJlY3RpdmVSZXNvbHZlci5yZXNvbHZlKHR5cGUpO1xuICB2YXIgc2VsZWN0b3IgPSByZXNvbHZlZE1ldGFkYXRhLnNlbGVjdG9yO1xuICBpZiAoIXNlbGVjdG9yLm1hdGNoKENPTVBPTkVOVF9TRUxFQ1RPUikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ09ubHkgc2VsZWN0b3JzIG1hdGNoaW5nIGVsZW1lbnQgbmFtZXMgYXJlIHN1cHBvcnRlZCwgZ290OiAnICsgc2VsZWN0b3IpO1xuICB9XG4gIHZhciBzZWxlY3RvciA9IHNlbGVjdG9yLnJlcGxhY2UoU0tFV0VSX0NBU0UsIChhbGwsIGxldHRlcjogc3RyaW5nKSA9PiBsZXR0ZXIudG9VcHBlckNhc2UoKSk7XG4gIHJldHVybiB7XG4gICAgdHlwZTogdHlwZSxcbiAgICBzZWxlY3Rvcjogc2VsZWN0b3IsXG4gICAgaW5wdXRzOiBwYXJzZUZpZWxkcyhyZXNvbHZlZE1ldGFkYXRhLmlucHV0cyksXG4gICAgb3V0cHV0czogcGFyc2VGaWVsZHMocmVzb2x2ZWRNZXRhZGF0YS5vdXRwdXRzKVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VGaWVsZHMobmFtZXM6IHN0cmluZ1tdKTogQXR0clByb3BbXSB7XG4gIHZhciBhdHRyUHJvcHM6IEF0dHJQcm9wW10gPSBbXTtcbiAgaWYgKG5hbWVzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuYW1lcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHBhcnRzID0gbmFtZXNbaV0uc3BsaXQoJzonKTtcbiAgICAgIHZhciBwcm9wID0gcGFydHNbMF0udHJpbSgpO1xuICAgICAgdmFyIGF0dHIgPSAocGFydHNbMV0gfHwgcGFydHNbMF0pLnRyaW0oKTtcbiAgICAgIHZhciBjYXBpdGFsQXR0ciA9IGF0dHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBhdHRyLnN1YnN0cigxKTtcbiAgICAgIGF0dHJQcm9wcy5wdXNoKDxBdHRyUHJvcD57XG4gICAgICAgIHByb3A6IHByb3AsXG4gICAgICAgIGF0dHI6IGF0dHIsXG4gICAgICAgIGJyYWNrZXRBdHRyOiBgWyR7YXR0cn1dYCxcbiAgICAgICAgcGFyZW5BdHRyOiBgKCR7YXR0cn0pYCxcbiAgICAgICAgYnJhY2tldFBhcmVuQXR0cjogYFsoJHthdHRyfSldYCxcbiAgICAgICAgb25BdHRyOiBgb24ke2NhcGl0YWxBdHRyfWAsXG4gICAgICAgIGJpbmRBdHRyOiBgYmluZCR7Y2FwaXRhbEF0dHJ9YCxcbiAgICAgICAgYmluZG9uQXR0cjogYGJpbmRvbiR7Y2FwaXRhbEF0dHJ9YFxuICAgICAgfSk7XG4gICAgfVxuICB9XG4gIHJldHVybiBhdHRyUHJvcHM7XG59XG4iXX0=