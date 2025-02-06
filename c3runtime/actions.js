"use strict";
{
    globalThis.C3.Plugins.MassiveCube_MomentJS.Acts = {
        createMo(arg0, arg1, arg2, arg3)
        {
            var ag0 = undefined;
            if (arg0 !== "")
            {
                if (this.IsJsonString(arg0))
                {
                    ag0 = JSON.parse(arg0);
                }
                else
                {
                    ag0 = arg0;
                }
            }
            var ag1 = undefined;
            if (arg1 !== "")
            {
                ag1 = arg1;
            }
            var ag2 = undefined;
            if (arg2 !== "")
            {
                ag2 = arg2;
            }
            var ag3 = undefined;
            if (arg3 !== "")
            {
                ag3 = arg3;
            }
            this.mom = undefined;
            this.mom = this.momentjs(ag0, ag1, ag2, ag3);
        },

        format(form)
        {
            if (typeof this.mom !== "undefined")
            {
                this.mom = this.mom["format"](form);
            }
        },

        unix(tmsp)
        {
            if (typeof this.mom !== "undefined")
            {
                this.mom = this.momentjs["unix"](tmsp);
            }
        },

        utc()
        {
            if (typeof this.mom !== "undefined")
            {
                this.mom = this.momentjs["utc"](this.mom);
            }
        },

        sets(type, st)
        {
            if (typeof this.mom !== "undefined")
            {
                if (st !== -1)
                {
                    this.mom = this.mom["set"](type, st);
                }
                else if (this.IsJsonString(type))
                {
                    let obj = JSON.parse(type);
                    this.mom = this.mom["set"](obj);
                }
            }
        },

        adds(val, sh)
        {
            if (typeof this.mom !== "undefined")
            {
                let gttyp = this.typ[sh];
                this.mom["add"](val, gttyp);
            }
        },

        substract(val, sh)
        {
            if (typeof this.mom !== "undefined")
            {
                let gttyp = this.typ[sh];
                this.mom["subtract"](val, gttyp);
            }
        },

        startOF(st)
        {
            if (typeof this.mom !== "undefined")
            {
                let gttyp = this.stof[st];
                this.mom["startOf"](gttyp);
            }
        },

        endOF(st)
        {
            if (typeof this.mom !== "undefined")
            {
                let gttyp = this.stof[st];
                this.mom["endOf"](gttyp);
            }
        },

        setLocale(loc)
        {
            this.momentjs["locale"](loc);
        }
    };
}