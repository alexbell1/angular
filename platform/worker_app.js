'use strict';"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var lang_1 = require('angular2/src/facade/lang');
var worker_app_common_1 = require('angular2/src/platform/worker_app_common');
var worker_app_1 = require('angular2/src/platform/worker_app');
var core_1 = require('angular2/core');
var worker_app_common_2 = require('angular2/src/platform/worker_app_common');
exports.WORKER_APP_PLATFORM = worker_app_common_2.WORKER_APP_PLATFORM;
exports.WORKER_APP_APPLICATION_COMMON = worker_app_common_2.WORKER_APP_APPLICATION_COMMON;
var worker_app_2 = require('angular2/src/platform/worker_app');
exports.WORKER_APP_APPLICATION = worker_app_2.WORKER_APP_APPLICATION;
var client_message_broker_1 = require('angular2/src/web_workers/shared/client_message_broker');
exports.ClientMessageBroker = client_message_broker_1.ClientMessageBroker;
exports.ClientMessageBrokerFactory = client_message_broker_1.ClientMessageBrokerFactory;
exports.FnArg = client_message_broker_1.FnArg;
exports.UiArguments = client_message_broker_1.UiArguments;
var service_message_broker_1 = require('angular2/src/web_workers/shared/service_message_broker');
exports.ReceivedMessage = service_message_broker_1.ReceivedMessage;
exports.ServiceMessageBroker = service_message_broker_1.ServiceMessageBroker;
exports.ServiceMessageBrokerFactory = service_message_broker_1.ServiceMessageBrokerFactory;
var serializer_1 = require('angular2/src/web_workers/shared/serializer');
exports.PRIMITIVE = serializer_1.PRIMITIVE;
__export(require('angular2/src/web_workers/shared/message_bus'));
var angular_entrypoint_1 = require('angular2/src/core/angular_entrypoint');
exports.AngularEntrypoint = angular_entrypoint_1.AngularEntrypoint;
var router_providers_1 = require('angular2/src/web_workers/worker/router_providers');
exports.WORKER_APP_ROUTER = router_providers_1.WORKER_APP_ROUTER;
function workerAppPlatform() {
    if (lang_1.isBlank(core_1.getPlatform())) {
        core_1.createPlatform(core_1.ReflectiveInjector.resolveAndCreate(worker_app_common_1.WORKER_APP_PLATFORM));
    }
    return core_1.assertPlatform(worker_app_common_1.WORKER_APP_PLATFORM_MARKER);
}
exports.workerAppPlatform = workerAppPlatform;
function bootstrapApp(appComponentType, customProviders) {
    var appInjector = core_1.ReflectiveInjector.resolveAndCreate([worker_app_1.WORKER_APP_APPLICATION, lang_1.isPresent(customProviders) ? customProviders : []], workerAppPlatform().injector);
    return core_1.coreLoadAndBootstrap(appInjector, appComponentType);
}
exports.bootstrapApp = bootstrapApp;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid29ya2VyX2FwcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtUFZoOGFCZlUudG1wL2FuZ3VsYXIyL3BsYXRmb3JtL3dvcmtlcl9hcHAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHFCQUFpQywwQkFBMEIsQ0FBQyxDQUFBO0FBQzVELGtDQUdPLHlDQUF5QyxDQUFDLENBQUE7QUFDakQsMkJBQXFDLGtDQUFrQyxDQUFDLENBQUE7QUFDeEUscUJBU08sZUFBZSxDQUFDLENBQUE7QUFFdkIsa0NBR08seUNBQXlDLENBQUM7QUFGL0Msc0VBQW1CO0FBQ25CLDBGQUMrQztBQUNqRCwyQkFBcUMsa0NBQWtDLENBQUM7QUFBaEUscUVBQWdFO0FBQ3hFLHNDQUtPLHVEQUF1RCxDQUFDO0FBSjdELDBFQUFtQjtBQUNuQix3RkFBMEI7QUFDMUIsOENBQUs7QUFDTCwwREFDNkQ7QUFDL0QsdUNBSU8sd0RBQXdELENBQUM7QUFIOUQsbUVBQWU7QUFDZiw2RUFBb0I7QUFDcEIsMkZBQzhEO0FBQ2hFLDJCQUF3Qiw0Q0FBNEMsQ0FBQztBQUE3RCwyQ0FBNkQ7QUFDckUsaUJBQWMsNkNBQTZDLENBQUMsRUFBQTtBQUM1RCxtQ0FBZ0Msc0NBQXNDLENBQUM7QUFBL0QsbUVBQStEO0FBQ3ZFLGlDQUFnQyxrREFBa0QsQ0FBQztBQUEzRSxpRUFBMkU7QUFFbkY7SUFDRSxFQUFFLENBQUMsQ0FBQyxjQUFPLENBQUMsa0JBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLHFCQUFjLENBQUMseUJBQWtCLENBQUMsZ0JBQWdCLENBQUMsdUNBQW1CLENBQUMsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFDRCxNQUFNLENBQUMscUJBQWMsQ0FBQyw4Q0FBMEIsQ0FBQyxDQUFDO0FBQ3BELENBQUM7QUFMZSx5QkFBaUIsb0JBS2hDLENBQUE7QUFFRCxzQkFDSSxnQkFBc0IsRUFDdEIsZUFBd0Q7SUFDMUQsSUFBSSxXQUFXLEdBQUcseUJBQWtCLENBQUMsZ0JBQWdCLENBQ2pELENBQUMsbUNBQXNCLEVBQUUsZ0JBQVMsQ0FBQyxlQUFlLENBQUMsR0FBRyxlQUFlLEdBQUcsRUFBRSxDQUFDLEVBQzNFLGlCQUFpQixFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbEMsTUFBTSxDQUFDLDJCQUFvQixDQUFDLFdBQVcsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0FBQzdELENBQUM7QUFQZSxvQkFBWSxlQU8zQixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpc1ByZXNlbnQsIGlzQmxhbmt9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5pbXBvcnQge1xuICBXT1JLRVJfQVBQX1BMQVRGT1JNLFxuICBXT1JLRVJfQVBQX1BMQVRGT1JNX01BUktFUlxufSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vd29ya2VyX2FwcF9jb21tb24nO1xuaW1wb3J0IHtXT1JLRVJfQVBQX0FQUExJQ0FUSU9OfSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vd29ya2VyX2FwcCc7XG5pbXBvcnQge1xuICBQbGF0Zm9ybVJlZixcbiAgVHlwZSxcbiAgQ29tcG9uZW50UmVmLFxuICBSZWZsZWN0aXZlSW5qZWN0b3IsXG4gIGNvcmVMb2FkQW5kQm9vdHN0cmFwLFxuICBnZXRQbGF0Zm9ybSxcbiAgY3JlYXRlUGxhdGZvcm0sXG4gIGFzc2VydFBsYXRmb3JtXG59IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG5leHBvcnQge1xuICBXT1JLRVJfQVBQX1BMQVRGT1JNLFxuICBXT1JLRVJfQVBQX0FQUExJQ0FUSU9OX0NPTU1PTlxufSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vd29ya2VyX2FwcF9jb21tb24nO1xuZXhwb3J0IHtXT1JLRVJfQVBQX0FQUExJQ0FUSU9OfSBmcm9tICdhbmd1bGFyMi9zcmMvcGxhdGZvcm0vd29ya2VyX2FwcCc7XG5leHBvcnQge1xuICBDbGllbnRNZXNzYWdlQnJva2VyLFxuICBDbGllbnRNZXNzYWdlQnJva2VyRmFjdG9yeSxcbiAgRm5BcmcsXG4gIFVpQXJndW1lbnRzXG59IGZyb20gJ2FuZ3VsYXIyL3NyYy93ZWJfd29ya2Vycy9zaGFyZWQvY2xpZW50X21lc3NhZ2VfYnJva2VyJztcbmV4cG9ydCB7XG4gIFJlY2VpdmVkTWVzc2FnZSxcbiAgU2VydmljZU1lc3NhZ2VCcm9rZXIsXG4gIFNlcnZpY2VNZXNzYWdlQnJva2VyRmFjdG9yeVxufSBmcm9tICdhbmd1bGFyMi9zcmMvd2ViX3dvcmtlcnMvc2hhcmVkL3NlcnZpY2VfbWVzc2FnZV9icm9rZXInO1xuZXhwb3J0IHtQUklNSVRJVkV9IGZyb20gJ2FuZ3VsYXIyL3NyYy93ZWJfd29ya2Vycy9zaGFyZWQvc2VyaWFsaXplcic7XG5leHBvcnQgKiBmcm9tICdhbmd1bGFyMi9zcmMvd2ViX3dvcmtlcnMvc2hhcmVkL21lc3NhZ2VfYnVzJztcbmV4cG9ydCB7QW5ndWxhckVudHJ5cG9pbnR9IGZyb20gJ2FuZ3VsYXIyL3NyYy9jb3JlL2FuZ3VsYXJfZW50cnlwb2ludCc7XG5leHBvcnQge1dPUktFUl9BUFBfUk9VVEVSfSBmcm9tICdhbmd1bGFyMi9zcmMvd2ViX3dvcmtlcnMvd29ya2VyL3JvdXRlcl9wcm92aWRlcnMnO1xuXG5leHBvcnQgZnVuY3Rpb24gd29ya2VyQXBwUGxhdGZvcm0oKTogUGxhdGZvcm1SZWYge1xuICBpZiAoaXNCbGFuayhnZXRQbGF0Zm9ybSgpKSkge1xuICAgIGNyZWF0ZVBsYXRmb3JtKFJlZmxlY3RpdmVJbmplY3Rvci5yZXNvbHZlQW5kQ3JlYXRlKFdPUktFUl9BUFBfUExBVEZPUk0pKTtcbiAgfVxuICByZXR1cm4gYXNzZXJ0UGxhdGZvcm0oV09SS0VSX0FQUF9QTEFURk9STV9NQVJLRVIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYm9vdHN0cmFwQXBwKFxuICAgIGFwcENvbXBvbmVudFR5cGU6IFR5cGUsXG4gICAgY3VzdG9tUHJvdmlkZXJzPzogQXJyYXk8YW55IC8qVHlwZSB8IFByb3ZpZGVyIHwgYW55W10qLz4pOiBQcm9taXNlPENvbXBvbmVudFJlZj4ge1xuICB2YXIgYXBwSW5qZWN0b3IgPSBSZWZsZWN0aXZlSW5qZWN0b3IucmVzb2x2ZUFuZENyZWF0ZShcbiAgICAgIFtXT1JLRVJfQVBQX0FQUExJQ0FUSU9OLCBpc1ByZXNlbnQoY3VzdG9tUHJvdmlkZXJzKSA/IGN1c3RvbVByb3ZpZGVycyA6IFtdXSxcbiAgICAgIHdvcmtlckFwcFBsYXRmb3JtKCkuaW5qZWN0b3IpO1xuICByZXR1cm4gY29yZUxvYWRBbmRCb290c3RyYXAoYXBwSW5qZWN0b3IsIGFwcENvbXBvbmVudFR5cGUpO1xufVxuIl19