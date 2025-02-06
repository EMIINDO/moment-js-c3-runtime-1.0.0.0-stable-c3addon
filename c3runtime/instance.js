"use strict";

{
    globalThis.C3.Plugins.MassiveCube_MomentJS.Instance = class MCubeMomentJSInstance extends globalThis.ISDKInstanceBase
    {
        constructor()
        {
            super();

            const properties = this._getInitProperties();
            if (properties) {}

            this.momentjs = window["moment"];

            this.typ = ["y", "Q", "M", "w", "d", "h", "m", "s", "ms"];
            this.stof = ["year", "month", "quarter", "week", "isoWeek", "day", "date", "hour", "minute", "second"];
            this.mom;

            this.IsJsonString = function(str)
            {
                try
                {
                    JSON.parse(str);
                }
                catch (e)
                {
                    return false;
                }
                return true;
            }

        }

        _release()
        {
            super._release();
        }
        _saveToJson()
        {
            return {};
        }
        _loadFromJson(o)
        {}
    };
}