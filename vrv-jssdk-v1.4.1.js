/**
 * Created by Administrator on 2016/7/18.
 */

var vrv = vrv || {};
vrv.android = {};
vrv.jssdk = {};
vrv.util = {};
vrv._init={};
vrv._ready={};
vrv.callpc={};

vrv.android = {
    callback: function (fname, uuid, args) {
        try{
            if(vrv._init.debug){
                alert(fname + ":" + args);
            }
            var fn = vrv.util.getSuccess(uuid);
            if(typeof fn=="function"){
                fn.call(this, JSON.parse(args));
            }
        }catch(e){
            alert(e.message);
        }

    },
    takePhoto: function (opt) {
        android.takePhoto(vrv.util.pre(opt));
    },
    getUnreadMessage: function (opt) {
        android.getUnreadMessage(vrv.util.pre(opt));
    },
    getAccountInfo: function (opt) {
        android.getUserInfo(vrv.util.pre(opt));
    },
    sendMessage: function (opt) {
        android.sendMessage(vrv.util.pre(opt));
    },
    portraitUrl: function (opt) {
        android.portraitUrl(vrv.util.pre(opt));
    },
    getUserName: function (opt) {
        android.getUserName(vrv.util.pre(opt));
    },
    getContactList : function (opt) {
        android.getContacts (vrv.util.pre(opt));
    },
    getLocalFiles: function (opt) {
        opt=vrv.util.addSize(opt);
        android.getLocalFiles(vrv.util.pre(opt));
    },
    getGroupList: function (opt) {
        android.getGroupsInfo(vrv.util.pre(opt));
    },
    getLocalPhotos: function (opt) {
        opt=vrv.util.addSize(opt);
        android.getLocalPhotos(vrv.util.pre(opt));
    },
    getPosition: function (opt) {
        android.getPosition(vrv.util.pre(opt));
    },
    showNavigationBar: function (opt) {
        android.showNavigationBar(vrv.util.pre(opt));
    },
    getInfoWithSweep: function (opt) {
        android.getInfoWithSweep(vrv.util.pre(opt));
    },
    getOrganization:function(opt){
        android.getOrganization(vrv.util.pre(opt));
    },
    closeView:function(opt){
        android.closeView(vrv.util.pre(opt));
    },
    getLanguage:function(opt){
        android.getLanguage(vrv.util.pre(opt));
    },
    getVersionMark:function(opt){
        android.getVersionMark(vrv.util.pre(opt));
    },
    copyTextToPaste:function(opt){
        android.copyTextToPaste(vrv.util.pre(opt));
    },
    chatByUserID:function(opt){
		android.chatByUserID(vrv.util.pre(opt));
	},
	getGroupMembers:function(opt){
		android.getGroupMembers(vrv.util.pre(opt));
	}
};

vrv.ios={
    callback: function (fname, uuid, args) {
        if(vrv._init.debug){
            alert(fname + ":" + args);
        }
        var fn = vrv.util.getSuccess(uuid);
        if(typeof fn=="function"){
            fn.call(this, JSON.parse(args));
        }
    },
    takePhoto: function (opt) {
        vrv.util.callIOS('takePhoto',opt);
    },
    getUnreadMessage: function (opt) {
        vrv.util.callIOS('getUnreadMessage',opt);
    },
    getAccountInfo: function (opt) {
        vrv.util.callIOS('getUserInfo',opt);
    },
    sendMessage: function (opt) {
        vrv.util.callIOS('sendMessage',opt);
    },
    portraitUrl: function (opt) {
        vrv.util.callIOS('portraitUrl',opt);
    },
    getUserName: function (opt) {
        vrv.util.callIOS('getUserName',opt);
    },
    getContactList: function (opt) {
        vrv.util.callIOS('getContacts',opt);
    },
    getLocalFiles: function (opt) {
        opt=vrv.util.addSize(opt);
        vrv.util.callIOS('getLocalFiles',opt);
    },
    getGroupList: function (opt) {
        vrv.util.callIOS('getGroupsInfo',opt);
    },
    getLocalPhotos: function (opt) {
        opt=vrv.util.addSize(opt);
        vrv.util.callIOS('getLocalPhotos',opt);
    },
    getPosition: function (opt) {
        vrv.util.callIOS('getPosition',opt);
    },
    showNavigationBar: function (opt) {
        vrv.util.callIOS('showNavigationBar',opt);
    },
    getInfoWithSweep:function (opt) {
        vrv.util.callIOS('getInfoWithSweep',opt);
    },
    getOrganization:function (opt) {
        vrv.util.callIOS('getOrganization',opt);
    },
    closeView:function (opt) {
        vrv.util.callIOS('closeView',opt);
    },
    getLanguage:function (opt) {
        vrv.util.callIOS('getLanguage',opt);
    },
    getVersionMark:function(opt){
        vrv.util.callIOS('getVersionMark',opt);
    },
    copyTextToPaste:function(opt){
        vrv.util.callIOS('copyTextToPaste',opt);
    },
    chatByUserID:function(opt){
		vrv.util.callIOS('chatByUserID',opt);
	},
    getGroupMembers:function(opt){
		vrv.util.callIOS('getGroupMembers',opt);
	}
};

vrv.pc={
	   callback:function(a,b,d){
		try{
			vrv._init.debug&&alert(a+":"+d);
		    var c=vrv.util.getSuccess(JSON.parse(b).uuid);
		    "function"==typeof c&&c.call(this,JSON.parse(d))
		    }
		catch(e){
			alert(e.message)
			}
		},
		takePhoto:function(a){
			vrv.callpc.takePhoto('takePhoto',vrv.util.pre(a))},
		getUnreadMessage:function(a){
			vrv.callpc.getUnreadMessage('getUnreadMessage',vrv.util.pre(a))},
		getAccountInfo:function(a){
			vrv.callpc.getAccountInfo('getAccountInfo',vrv.util.pre(a))},
		sendMessage:function(a){
			vrv.callpc.sendMessage('sendMessage',vrv.util.pre(a))},
		portraitUrl:function(a){
			vrv.callpc.portraitUrl('portraitUrl',vrv.util.pre(a))},
		getUserName:function(a){
			vrv.callpc.getUserName('getUserName',vrv.util.pre(a))},
        getContactList:function(a){
			vrv.callpc.getContactList('getContactList',vrv.util.pre(a))},
	    getLocalFiles:function(a){
			a=vrv.util.addSize(a);
			vrv.callpc.getLocalFiles('getLocalFiles',vrv.util.pre(a))},
		getGroupList:function(a){
			vrv.callpc.getGroupList('getGroupList',vrv.util.pre(a))},
		getLocalPhotos:function(a){
			a=vrv.util.addSize(a);
			vrv.callpc.getLocalPhotos('getLocalPhotos',vrv.util.pre(a))},
		getPosition:function(a){
			vrv.callpc.getPosition('getPosition',vrv.util.pre(a))},
		showNavigationBar:function(a){
			vrv.callpc.showNavigationBar('showNavigationBar',vrv.util.pre(a))},
		getInfoWithSweep:function(a){
			vrv.callpc.getInfoWithSweep('getInfoWithSweep',vrv.util.pre(a))},
        getOrganization:function(a){
			vrv.callpc.getOrganization('getOrganization',vrv.util.pre(a))},
		closeView:function(a){
			vrv.callpc.closeView('closeView',vrv.util.pre(a))},
		getLanguage:function(a){
			vrv.callpc.getLanguage('getLanguage',vrv.util.pre(a))},
		getVersionMark:function(a){
			vrv.callpc.getVersionMark('getVersionMark',vrv.util.pre(a))},
		copyTextToPaste:function(a){
			vrv.callpc.copyTextToPaste('copyTextToPaste',vrv.util.pre(a))},
		getGroupMembers:function(a){
			vrv.callpc.getGroupMembers('getGroupMembers',vrv.util.pre(a))},
	    appRequest:function (a) { //请求应用数据
		    vrv.callpc.appRequest('appRequest',vrv.util.pre(a))},
	    openApp : function (a) { //打开应用程序
		    vrv.callpc.openApp('openApp',vrv.util.pre(a))},
	    preLogin : function (a) { //预登录
		    vrv.callpc.preLogin('preLogin',vrv.util.pre(a))},
	    login : function (a) { //登陆
            vrv.callpc.login('login',vrv.util.pre(a))},
	    call : function (a) { //打电话
		    vrv.callpc.call('call',vrv.util.pre(a))},
	    loginout : function (a) { //退出登录
		    vrv.callpc.loginout('loginout',vrv.util.pre(a))},
};

vrv.util.addSize=function(opt){
    return vrv.util.setDefault(opt,[{type:"number",key:"size",val:10,min:1,max:15}]);
};

vrv.util._success = {};

vrv.util.putSuccess = function (uuid, callbackFn) {
    if (callbackFn && typeof callbackFn == 'function') {
        vrv.util._success[uuid] = callbackFn;

    }
};
vrv.util.getSuccess = function (uuid) {
    var fn = vrv.util._success[uuid];
    delete vrv.util._success[uuid];
    return fn;
};


vrv.util.formatParams = function (params) {
    if (!params) {
        params = {};
    }
    if (params.constructor !== Object) {
        params = {};
    }
    params.uuid = vrv.util.uuid();
    var obj = {p: JSON.stringify(params), uuid: params.uuid};
    return obj;
};

vrv.util.setDefault=function(obj,defaults){
    if (!obj) {
        obj = {};
    }
    if (obj.constructor !== Object) {
        obj = {};
    }
    for(var i in defaults){
        var d = defaults[i];
        if(typeof obj[d.key]!= d.type){
            obj[d.key]= d.val;
        }
        if(obj[d.key]> d.max||obj[d.key]< d.min){
            obj[d.key]= d.val;
        }
    }
    return obj;
}

vrv.util.pre = function (opt) {
    var obj = vrv.util.formatParams(opt);
    if (opt) {
        vrv.util.putSuccess(obj.uuid, opt.success);
    }
    return obj.p;
};
vrv.util.callIOS= function(fname,opt){
    var obj = vrv.util.formatParams(opt);
    var successFun = opt.success;

    var fun = function(res){
        if(vrv._init.debug){
            alert(fname + ":" + JSON.stringify(res));
        }
        successFun(res);
    }
    delete opt.success;
    vrv.ios.bridge.callHandler(fname, opt, fun);
};
vrv.util.uuid = function () {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
};

vrv.init = function(options){
    //添加是否初始化的标识，防止再次初始化
    if(vrv._init.inited){
        return;
    }
    vrv._init.inited = true;
    var agent = navigator.userAgent.toLowerCase();
    if(agent.indexOf('android')!=-1){
        vrv.jssdk=vrv.android;
        if(typeof vrv._ready.fn=='function'){
            vrv._ready.fn.call(this);
        }else{
            vrv._ready.r=true;
        }
    }else if(agent.indexOf('iphone')!=-1){
        function connectWebViewJavascriptBridge(callback) {
            if (window.WebViewJavascriptBridge) {
                callback(WebViewJavascriptBridge);
            } else {
                document.addEventListener(
                    'WebViewJavascriptBridgeReady'
                    , function() {
                        callback(WebViewJavascriptBridge);
                    },
                    false
                );
            }
        }
        connectWebViewJavascriptBridge(function(bridge) {//
            bridge.init(function(message, responseCallback) {
                var data = { 'Javascript Responds':'Wee!' }
                responseCallback(data)
            });
            vrv.ios.bridge=bridge;
            if(typeof vrv._ready.fn=='function'){
                vrv._ready.fn.call(this);
            }else{
                vrv._ready.r=true;
            }
        });
        vrv.jssdk=vrv.ios;
    }else if(agent.indexOf('qtwebengine')!=-1){
        new QWebChannel(qt.webChannelTransport, function(channel) {
            vrv.callpc=channel.objects.content;
            vrv.callpc.callback.connect(function(fname,uuid,args) {
                vrv.pc.callback(fname,uuid,args);
            });

            if(typeof vrv._ready.fn=='function'){
                vrv._ready.fn.call(this);
            }else{
                vrv._ready.r = true;
            }
        });

        vrv.jssdk=vrv.pc;
	}
    if(options&&options.constructor==Object){
        vrv._init=options;
    }

};


vrv.ready=function(fn){
    if(typeof fn=='function'){
        if(vrv._ready.r){
            fn.call(this);
        }else{
            vrv._ready.fn=fn;
        }
    }
};

"use strict";

var QWebChannelMessageTypes = {
    signal: 1,
    propertyUpdate: 2,
    init: 3,
    idle: 4,
    debug: 5,
    invokeMethod: 6,
    connectToSignal: 7,
    disconnectFromSignal: 8,
    setProperty: 9,
    response: 10,
};

var QWebChannel = function(transport, initCallback)
{
    if (typeof transport !== "object" || typeof transport.send !== "function") {
        console.error("The QWebChannel expects a transport object with a send function and onmessage callback property." +
                      " Given is: transport: " + typeof(transport) + ", transport.send: " + typeof(transport.send));
        return;
    }

    var channel = this;
    this.transport = transport;

    this.send = function(data)
    {
        if (typeof(data) !== "string") {
            data = JSON.stringify(data);
        }
        channel.transport.send(data);
    }

    this.transport.onmessage = function(message)
    {
        var data = message.data;
        if (typeof data === "string") {
            data = JSON.parse(data);
        }
        switch (data.type) {
            case QWebChannelMessageTypes.signal:
                channel.handleSignal(data);
                break;
            case QWebChannelMessageTypes.response:
                channel.handleResponse(data);
                break;
            case QWebChannelMessageTypes.propertyUpdate:
                channel.handlePropertyUpdate(data);
                break;
            default:
                console.error("invalid message received:", message.data);
                break;
        }
    }

    this.execCallbacks = {};
    this.execId = 0;
    this.exec = function(data, callback)
    {
        if (!callback) {
            // if no callback is given, send directly
            channel.send(data);
            return;
        }
        if (channel.execId === Number.MAX_VALUE) {
            // wrap
            channel.execId = Number.MIN_VALUE;
        }
        if (data.hasOwnProperty("id")) {
            console.error("Cannot exec message with property id: " + JSON.stringify(data));
            return;
        }
        data.id = channel.execId++;
        channel.execCallbacks[data.id] = callback;
        channel.send(data);
    };

    this.objects = {};

    this.handleSignal = function(message)
    {
        var object = channel.objects[message.object];
        if (object) {
            object.signalEmitted(message.signal, message.args);
        } else {
            console.warn("Unhandled signal: " + message.object + "::" + message.signal);
        }
    }

    this.handleResponse = function(message)
    {
        if (!message.hasOwnProperty("id")) {
            console.error("Invalid response message received: ", JSON.stringify(message));
            return;
        }
        channel.execCallbacks[message.id](message.data);
        delete channel.execCallbacks[message.id];
    }

    this.handlePropertyUpdate = function(message)
    {
        for (var i in message.data) {
            var data = message.data[i];
            var object = channel.objects[data.object];
            if (object) {
                object.propertyUpdate(data.signals, data.properties);
            } else {
                console.warn("Unhandled property update: " + data.object + "::" + data.signal);
            }
        }
        channel.exec({type: QWebChannelMessageTypes.idle});
    }

    this.debug = function(message)
    {
        channel.send({type: QWebChannelMessageTypes.debug, data: message});
    };

    channel.exec({type: QWebChannelMessageTypes.init}, function(data) {
        for (var objectName in data) {
            var object = new QObject(objectName, data[objectName], channel);
        }
        // now unwrap properties, which might reference other registered objects
        for (var objectName in channel.objects) {
            channel.objects[objectName].unwrapProperties();
        }
        if (initCallback) {
            initCallback(channel);
        }
        channel.exec({type: QWebChannelMessageTypes.idle});
    });
};

function QObject(name, data, webChannel)
{
    this.__id__ = name;
    webChannel.objects[name] = this;

    // List of callbacks that get invoked upon signal emission
    this.__objectSignals__ = {};

    // Cache of all properties, updated when a notify signal is emitted
    this.__propertyCache__ = {};

    var object = this;

    // ----------------------------------------------------------------------

    this.unwrapQObject = function(response)
    {
        if (response instanceof Array) {
            // support list of objects
            var ret = new Array(response.length);
            for (var i = 0; i < response.length; ++i) {
                ret[i] = object.unwrapQObject(response[i]);
            }
            return ret;
        }
        if (!response
            || !response["__QObject*__"]
            || response.id === undefined) {
            return response;
        }

        var objectId = response.id;
        if (webChannel.objects[objectId])
            return webChannel.objects[objectId];

        if (!response.data) {
            console.error("Cannot unwrap unknown QObject " + objectId + " without data.");
            return;
        }

        var qObject = new QObject( objectId, response.data, webChannel );
        qObject.destroyed.connect(function() {
            if (webChannel.objects[objectId] === qObject) {
                delete webChannel.objects[objectId];
                // reset the now deleted QObject to an empty {} object
                // just assigning {} though would not have the desired effect, but the
                // below also ensures all external references will see the empty map
                // NOTE: this detour is necessary to workaround QTBUG-40021
                var propertyNames = [];
                for (var propertyName in qObject) {
                    propertyNames.push(propertyName);
                }
                for (var idx in propertyNames) {
                    delete qObject[propertyNames[idx]];
                }
            }
        });
        // here we are already initialized, and thus must directly unwrap the properties
        qObject.unwrapProperties();
        return qObject;
    }

    this.unwrapProperties = function()
    {
        for (var propertyIdx in object.__propertyCache__) {
            object.__propertyCache__[propertyIdx] = object.unwrapQObject(object.__propertyCache__[propertyIdx]);
        }
    }

    function addSignal(signalData, isPropertyNotifySignal)
    {
        var signalName = signalData[0];
        var signalIndex = signalData[1];
        object[signalName] = {
            connect: function(callback) {
                if (typeof(callback) !== "function") {
                    console.error("Bad callback given to connect to signal " + signalName);
                    return;
                }

                object.__objectSignals__[signalIndex] = object.__objectSignals__[signalIndex] || [];
                object.__objectSignals__[signalIndex].push(callback);

                if (!isPropertyNotifySignal && signalName !== "destroyed") {
                    // only required for "pure" signals, handled separately for properties in propertyUpdate
                    // also note that we always get notified about the destroyed signal
                    webChannel.exec({
                        type: QWebChannelMessageTypes.connectToSignal,
                        object: object.__id__,
                        signal: signalIndex
                    });
                }
            },
            disconnect: function(callback) {
                if (typeof(callback) !== "function") {
                    console.error("Bad callback given to disconnect from signal " + signalName);
                    return;
                }
                object.__objectSignals__[signalIndex] = object.__objectSignals__[signalIndex] || [];
                var idx = object.__objectSignals__[signalIndex].indexOf(callback);
                if (idx === -1) {
                    console.error("Cannot find connection of signal " + signalName + " to " + callback.name);
                    return;
                }
                object.__objectSignals__[signalIndex].splice(idx, 1);
                if (!isPropertyNotifySignal && object.__objectSignals__[signalIndex].length === 0) {
                    // only required for "pure" signals, handled separately for properties in propertyUpdate
                    webChannel.exec({
                        type: QWebChannelMessageTypes.disconnectFromSignal,
                        object: object.__id__,
                        signal: signalIndex
                    });
                }
            }
        };
    }

    /**
     * Invokes all callbacks for the given signalname. Also works for property notify callbacks.
     */
    function invokeSignalCallbacks(signalName, signalArgs)
    {
        var connections = object.__objectSignals__[signalName];
        if (connections) {
            connections.forEach(function(callback) {
                callback.apply(callback, signalArgs);
            });
        }
    }

    this.propertyUpdate = function(signals, propertyMap)
    {
        // update property cache
        for (var propertyIndex in propertyMap) {
            var propertyValue = propertyMap[propertyIndex];
            object.__propertyCache__[propertyIndex] = propertyValue;
        }

        for (var signalName in signals) {
            // Invoke all callbacks, as signalEmitted() does not. This ensures the
            // property cache is updated before the callbacks are invoked.
            invokeSignalCallbacks(signalName, signals[signalName]);
        }
    }

    this.signalEmitted = function(signalName, signalArgs)
    {
        invokeSignalCallbacks(signalName, signalArgs);
    }

    function addMethod(methodData)
    {
        var methodName = methodData[0];
        var methodIdx = methodData[1];
        object[methodName] = function() {
            var args = [];
            var callback;
            for (var i = 0; i < arguments.length; ++i) {
                if (typeof arguments[i] === "function")
                    callback = arguments[i];
                else
                    args.push(arguments[i]);
            }

            webChannel.exec({
                "type": QWebChannelMessageTypes.invokeMethod,
                "object": object.__id__,
                "method": methodIdx,
                "args": args
            }, function(response) {
                if (response !== undefined) {
                    var result = object.unwrapQObject(response);
                    if (callback) {
                        (callback)(result);
                    }
                }
            });
        };
    }

    function bindGetterSetter(propertyInfo)
    {
        var propertyIndex = propertyInfo[0];
        var propertyName = propertyInfo[1];
        var notifySignalData = propertyInfo[2];
        // initialize property cache with current value
        // NOTE: if this is an object, it is not directly unwrapped as it might
        // reference other QObject that we do not know yet
        object.__propertyCache__[propertyIndex] = propertyInfo[3];

        if (notifySignalData) {
            if (notifySignalData[0] === 1) {
                // signal name is optimized away, reconstruct the actual name
                notifySignalData[0] = propertyName + "Changed";
            }
            addSignal(notifySignalData, true);
        }

        Object.defineProperty(object, propertyName, {
            configurable: true,
            get: function () {
                var propertyValue = object.__propertyCache__[propertyIndex];
                if (propertyValue === undefined) {
                    // This shouldn't happen
                    console.warn("Undefined value in property cache for property \"" + propertyName + "\" in object " + object.__id__);
                }

                return propertyValue;
            },
            set: function(value) {
                if (value === undefined) {
                    console.warn("Property setter for " + propertyName + " called with undefined value!");
                    return;
                }
                object.__propertyCache__[propertyIndex] = value;
                webChannel.exec({
                    "type": QWebChannelMessageTypes.setProperty,
                    "object": object.__id__,
                    "property": propertyIndex,
                    "value": value
                });
            }
        });

    }

    // ----------------------------------------------------------------------

    data.methods.forEach(addMethod);

    data.properties.forEach(bindGetterSetter);

    data.signals.forEach(function(signal) { addSignal(signal, false); });

    for (var name in data.enums) {
        object[name] = data.enums[name];
    }
}

//required for use with nodejs
if (typeof module === 'object') {
    module.exports = {
        QWebChannel: QWebChannel
    };
}
