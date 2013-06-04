var request = require("request");

module.exports = new function() {

	this.url = null;
	this.jobid = null;
	this.methods = ["start","end","ping","success","warn","error","log"];

	var me = this;
		
	this.connect = function(_url, _jobid, _callback) {
		request({url: _url+'/test/'+_jobid, json: true}, function(err, res, body){
			if (!err && res.statusCode === 200 && body === "ok") {
				me.jobid = _jobid;
				me.url = _url;
				if (typeof _callback === "function") _callback(null);
			} else {
				if (typeof _callback === "function") _callback(new Error("Invalid API or JobID"));
			}
		});
	}
	
	this.api = function(_method, _message, _callback) {
		if (typeof _message === "function") {
			var _callback = _message;
			var _message = null;
		}
		if (me.jobid === null || me.url === null) {
			if (typeof _callback === "function") _callback(new Error("Invalid API or JobID"));
		} else {
			if (me.methods.indexOf(_method) < 0) {
				if (typeof _callback === "function") _callback(new Error("Invalid Method"));
			} else {
				request({
					url: [me.url, _method, me.jobid].join('/'),
					method: "POST",
					form: ((typeof _message === 'string') ? {message: _message} : {}),
					json: true,
				}, function(err, res, body){
					if (!err && res.statusCode === 200 && body === "ok") {
						if (typeof _callback === "function") _callback(null);
					} else {
						if (typeof _callback === "function") _callback(new Error("API Error"));
					}
				});
			}
		}
	}
	
	this.start = function(_callback){
		me.api("start", _callback);
	}
	
	this.end = function(_callback){
		me.api("end", _callback);
	}
	
	this.ping = function(_callback){
		me.api("ping", _callback);
	}
	
	this.success = function(_callback){
		me.api("success", _callback);
	}
	
	this.warn = function(_message, _callback){
		me.api("warn", _message, _callback);
	}
	
	this.error = function(_message, _callback){
		me.api("error", _message, _callback);
	}
	
	this.log = function(_message, _callback){
		me.api("log", _message, _callback);
	}
	
}