"use strict";
{
    globalThis.C3.Plugins.MassiveCube_MomentJS.Exps = {
        getString()
        {
            if (typeof this.mom !== "undefined")
            {
                return this.mom;
            }
            else
            {
                console.warn("Create Moment before you call this action!");
                return "";
            }
        },

        isValid()
        {
            if (typeof this.mom !== "undefined")
            {
                return this.mom["isValid"]();
            }
            else
            {
                console.warn("Create Moment before you call this action!");
                return 0;
            }
        },

        gets(str)
        {
            if (typeof this.mom !== "undefined")
            {
                return this.mom["get"](str);
            }
            else
            {
                console.warn("Create Moment before you call this action!");
                return 0;
            }
        },

        fromNow(bo)
        {
            if (bo > 1)
            {
                bo = 1;
            }
            if (typeof this.mom !== "undefined")
            {
                return this.mom["fromNow"](bo);
            }
            else
            {
                console.warn("Create Moment before you call this action!");
                return 0;
            }
        },

        toNow(bo)
        {
            if (bo > 1)
            {
                bo = 1;
            }
            if (typeof this.mom !== "undefined")
            {
                return this.mom["toNow"](bo);
            }
            else
            {
                console.warn("Create Moment before you call this action!");
                return 0;
            }
        },

        isbefore(ar1, ar2)
        {
            if (typeof this.mom !== "undefined")
            {
                return this.mom["isBefore"](ar1, ar2);
            }
            else
            {
                console.warn("Create Moment before you call this action!");
                return 0;
            }
        },

        issame(ar1, ar2)
        {
            if (typeof this.mom !== "undefined")
            {
                return this.mom["isSame"](ar1, ar2);
            }
            else
            {
                console.warn("Create Moment before you call this action!");
                return 0;
            }
        },

        isdst()
        {
            if (typeof this.mom !== "undefined")
            {
                return this.mom["isDST"]();
            }
            else
            {
                console.warn("Create Moment before you call this action!");
                return 0;
            }
        },

        isafter(ar1, ar2)
        {
            if (typeof this.mom !== "undefined")
            {
                return this.mom["isAfter"](ar1, ar2);
            }
            else
            {
                console.warn("Create Moment before you call this action!");
                return 0;
            }
        },

        isleap()
        {
            if (typeof this.mom !== "undefined")
            {
                return this.mom["isLeapYear"]();
            }
            else
            {
                console.warn("Create Moment before you call this action!");
                return 0;
            }
        }
    };
}