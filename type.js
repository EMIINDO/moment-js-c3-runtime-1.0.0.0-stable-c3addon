"use strict";

{
    const SDK = globalThis.SDK;
    const PLUGIN_CLASS = SDK.Plugins.MassiveCube_MomentJS;

    PLUGIN_CLASS.Type = class MCubeMomentJSPluginType extends SDK.ITypeBase {
        constructor(sdkPlugin, iObjectType) {
            super(sdkPlugin, iObjectType);
        }
    };
}