/**
 * MIRROR_URL: you need a custom url
 * BAN_REGION: The country or region you want to prohibit access to
 */
const MIRROR_URL = 'github.com';
const BAN_REGION = ['IN', 'KP'];
/**
 * @param {Promise} handleRequest
 */

async function handleRequest(request) {
  const url = new URL(request.url);
  url.hostname = MIRROR_URL;
  const r = await fetch(url.toString(), request);
  const country = request.cf.country;
  const banCountry = BAN_REGION;

  if (banCountry.includes(country)) {
    return new Response('Access denied: The site is not available in your region yet.', {
      status: 403
    });
  }

  return r;
}

class KVAdapter {
  ns;

  constructor(ns) {
    this.ns = ns;
  }

  async get(key) {
    return await this.ns.get(key);
  }

  async set(key, value) {
    await this.ns.put(key, value);
  }

  async has(key) {
    return (await this.ns.list()).keys.some(e => e.name === key);
  }

  async delete(key) {
    await this.ns.delete(key);
    return true;
  }

  async *entries() {
    for (const {
      name
    } of (await this.ns.list()).keys) yield [name, await this.get(name)];
  }

}

/**
 * @internal
 */
class JSONDatabaseAdapter {
  impl;

  constructor(impl) {
    this.impl = impl;
  }

  async get(key) {
    const res = await this.impl.get(key);
    if (typeof res === 'string') return JSON.parse(res);
  }

  async set(key, value) {
    return await this.impl.set(key, JSON.stringify(value));
  }

  async has(key) {
    return await this.impl.has(key);
  }

  async delete(key) {
    return await this.impl.delete(key);
  }

  async *[Symbol.asyncIterator]() {
    for await (const [id, value] of await this.impl.entries()) {
      yield [id, JSON.parse(value)];
    }
  }

}
/**
 * Routine
 */

async function cleanupDatabase(database) {
  const adapter = new JSONDatabaseAdapter(database);

  for await (const [id, {
    expires
  }] of adapter) if (expires < Date.now()) database.delete(id);
}
const bs = 'bareServer';

var httpErrors = {exports: {}};

/*!
 * depd
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module exports.
 * @public
 */

var browser = depd;

/**
 * Create deprecate for namespace in caller.
 */

function depd (namespace) {
  if (!namespace) {
    throw new TypeError('argument namespace is required')
  }

  function deprecate (message) {
    // no-op in browser
  }

  deprecate._file = undefined;
  deprecate._ignored = true;
  deprecate._namespace = namespace;
  deprecate._traced = false;
  deprecate._warned = Object.create(null);

  deprecate.function = wrapfunction;
  deprecate.property = wrapproperty;

  return deprecate
}

/**
 * Return a wrapped function in a deprecation message.
 *
 * This is a no-op version of the wrapper, which does nothing but call
 * validation.
 */

function wrapfunction (fn, message) {
  if (typeof fn !== 'function') {
    throw new TypeError('argument fn must be a function')
  }

  return fn
}

/**
 * Wrap property in a deprecation message.
 *
 * This is a no-op version of the wrapper, which does nothing but call
 * validation.
 */

function wrapproperty (obj, prop, message) {
  if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
    throw new TypeError('argument obj must be object')
  }

  var descriptor = Object.getOwnPropertyDescriptor(obj, prop);

  if (!descriptor) {
    throw new TypeError('must call property on owner object')
  }

  if (!descriptor.configurable) {
    throw new TypeError('property must be configurable')
  }
}

/* eslint no-proto: 0 */
var setprototypeof = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? setProtoOf : mixinProperties);

function setProtoOf (obj, proto) {
  obj.__proto__ = proto;
  return obj
}

function mixinProperties (obj, proto) {
  for (var prop in proto) {
    if (!Object.prototype.hasOwnProperty.call(obj, prop)) {
      obj[prop] = proto[prop];
    }
  }
  return obj
}

var require$$0 = {
	"100": "Continue",
	"101": "Switching Protocols",
	"102": "Processing",
	"103": "Early Hints",
	"200": "OK",
	"201": "Created",
	"202": "Accepted",
	"203": "Non-Authoritative Information",
	"204": "No Content",
	"205": "Reset Content",
	"206": "Partial Content",
	"207": "Multi-Status",
	"208": "Already Reported",
	"226": "IM Used",
	"300": "Multiple Choices",
	"301": "Moved Permanently",
	"302": "Found",
	"303": "See Other",
	"304": "Not Modified",
	"305": "Use Proxy",
	"307": "Temporary Redirect",
	"308": "Permanent Redirect",
	"400": "Bad Request",
	"401": "Unauthorized",
	"402": "Payment Required",
	"403": "Forbidden",
	"404": "Not Found",
	"405": "Method Not Allowed",
	"406": "Not Acceptable",
	"407": "Proxy Authentication Required",
	"408": "Request Timeout",
	"409": "Conflict",
	"410": "Gone",
	"411": "Length Required",
	"412": "Precondition Failed",
	"413": "Payload Too Large",
	"414": "URI Too Long",
	"415": "Unsupported Media Type",
	"416": "Range Not Satisfiable",
	"417": "Expectation Failed",
	"418": "I'm a Teapot",
	"421": "Misdirected Request",
	"422": "Unprocessable Entity",
	"423": "Locked",
	"424": "Failed Dependency",
	"425": "Too Early",
	"426": "Upgrade Required",
	"428": "Precondition Required",
	"429": "Too Many Requests",
	"431": "Request Header Fields Too Large",
	"451": "Unavailable For Legal Reasons",
	"500": "Internal Server Error",
	"501": "Not Implemented",
	"502": "Bad Gateway",
	"503": "Service Unavailable",
	"504": "Gateway Timeout",
	"505": "HTTP Version Not Supported",
	"506": "Variant Also Negotiates",
	"507": "Insufficient Storage",
	"508": "Loop Detected",
	"509": "Bandwidth Limit Exceeded",
	"510": "Not Extended",
	"511": "Network Authentication Required"
};

/*!
 * statuses
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module dependencies.
 * @private
 */

var codes = require$$0;

/**
 * Module exports.
 * @public
 */

var statuses = status;

// status code to message map
status.message = codes;

// status message (lower-case) to code map
status.code = createMessageToStatusCodeMap(codes);

// array of status codes
status.codes = createStatusCodeList(codes);

// status codes for redirects
status.redirect = {
  300: true,
  301: true,
  302: true,
  303: true,
  305: true,
  307: true,
  308: true
};

// status codes for empty bodies
status.empty = {
  204: true,
  205: true,
  304: true
};

// status codes for when you should retry the request
status.retry = {
  502: true,
  503: true,
  504: true
};

/**
 * Create a map of message to status code.
 * @private
 */

function createMessageToStatusCodeMap (codes) {
  var map = {};

  Object.keys(codes).forEach(function forEachCode (code) {
    var message = codes[code];
    var status = Number(code);

    // populate map
    map[message.toLowerCase()] = status;
  });

  return map
}

/**
 * Create a list of all status codes.
 * @private
 */

function createStatusCodeList (codes) {
  return Object.keys(codes).map(function mapCode (code) {
    return Number(code)
  })
}

/**
 * Get the status code for given message.
 * @private
 */

function getStatusCode (message) {
  var msg = message.toLowerCase();

  if (!Object.prototype.hasOwnProperty.call(status.code, msg)) {
    throw new Error('invalid status message: "' + message + '"')
  }

  return status.code[msg]
}

/**
 * Get the status message for given code.
 * @private
 */

function getStatusMessage (code) {
  if (!Object.prototype.hasOwnProperty.call(status.message, code)) {
    throw new Error('invalid status code: ' + code)
  }

  return status.message[code]
}

/**
 * Get the status code.
 *
 * Given a number, this will throw if it is not a known status
 * code, otherwise the code will be returned. Given a string,
 * the string will be parsed for a number and return the code
 * if valid, otherwise will lookup the code assuming this is
 * the status message.
 *
 * @param {string|number} code
 * @returns {number}
 * @public
 */

function status (code) {
  if (typeof code === 'number') {
    return getStatusMessage(code)
  }

  if (typeof code !== 'string') {
    throw new TypeError('code must be a number or string')
  }

  // '403'
  var n = parseInt(code, 10);
  if (!isNaN(n)) {
    return getStatusMessage(n)
  }

  return getStatusCode(code)
}

var inherits_browser = {exports: {}};

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  inherits_browser.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
          value: ctor,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
    }
  };
} else {
  // old school shim for old browsers
  inherits_browser.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
      ctor.super_ = superCtor;
      var TempCtor = function () {};
      TempCtor.prototype = superCtor.prototype;
      ctor.prototype = new TempCtor();
      ctor.prototype.constructor = ctor;
    }
  };
}

/*!
 * toidentifier
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module exports.
 * @public
 */

var toidentifier = toIdentifier;

/**
 * Trasform the given string into a JavaScript identifier
 *
 * @param {string} str
 * @returns {string}
 * @public
 */

function toIdentifier (str) {
  return str
    .split(' ')
    .map(function (token) {
      return token.slice(0, 1).toUpperCase() + token.slice(1)
    })
    .join('')
    .replace(/[^ _0-9a-z]/gi, '')
}

/*!
 * http-errors
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */

(function (module) {

	/**
	 * Module dependencies.
	 * @private
	 */

	browser('http-errors');
	var setPrototypeOf = setprototypeof;
	var statuses$1 = statuses;
	var inherits = inherits_browser.exports;
	var toIdentifier = toidentifier;

	/**
	 * Module exports.
	 * @public
	 */

	module.exports = createError;
	module.exports.HttpError = createHttpErrorConstructor();
	module.exports.isHttpError = createIsHttpErrorFunction(module.exports.HttpError);

	// Populate exports for all constructors
	populateConstructorExports(module.exports, statuses$1.codes, module.exports.HttpError);

	/**
	 * Get the code class of a status code.
	 * @private
	 */

	function codeClass (status) {
	  return Number(String(status).charAt(0) + '00')
	}

	/**
	 * Create a new HTTP Error.
	 *
	 * @returns {Error}
	 * @public
	 */

	function createError () {
	  // so much arity going on ~_~
	  var err;
	  var msg;
	  var status = 500;
	  var props = {};
	  for (var i = 0; i < arguments.length; i++) {
	    var arg = arguments[i];
	    var type = typeof arg;
	    if (type === 'object' && arg instanceof Error) {
	      err = arg;
	      status = err.status || err.statusCode || status;
	    } else if (type === 'number' && i === 0) {
	      status = arg;
	    } else if (type === 'string') {
	      msg = arg;
	    } else if (type === 'object') {
	      props = arg;
	    } else {
	      throw new TypeError('argument #' + (i + 1) + ' unsupported type ' + type)
	    }
	  }

	  if (typeof status !== 'number' ||
	    (!statuses$1.message[status] && (status < 400 || status >= 600))) {
	    status = 500;
	  }

	  // constructor
	  var HttpError = createError[status] || createError[codeClass(status)];

	  if (!err) {
	    // create error
	    err = HttpError
	      ? new HttpError(msg)
	      : new Error(msg || statuses$1.message[status]);
	    Error.captureStackTrace(err, createError);
	  }

	  if (!HttpError || !(err instanceof HttpError) || err.status !== status) {
	    // add properties to generic error
	    err.expose = status < 500;
	    err.status = err.statusCode = status;
	  }

	  for (var key in props) {
	    if (key !== 'status' && key !== 'statusCode') {
	      err[key] = props[key];
	    }
	  }

	  return err
	}

	/**
	 * Create HTTP error abstract base class.
	 * @private
	 */

	function createHttpErrorConstructor () {
	  function HttpError () {
	    throw new TypeError('cannot construct abstract class')
	  }

	  inherits(HttpError, Error);

	  return HttpError
	}

	/**
	 * Create a constructor for a client error.
	 * @private
	 */

	function createClientErrorConstructor (HttpError, name, code) {
	  var className = toClassName(name);

	  function ClientError (message) {
	    // create the error object
	    var msg = message != null ? message : statuses$1.message[code];
	    var err = new Error(msg);

	    // capture a stack trace to the construction point
	    Error.captureStackTrace(err, ClientError);

	    // adjust the [[Prototype]]
	    setPrototypeOf(err, ClientError.prototype);

	    // redefine the error message
	    Object.defineProperty(err, 'message', {
	      enumerable: true,
	      configurable: true,
	      value: msg,
	      writable: true
	    });

	    // redefine the error name
	    Object.defineProperty(err, 'name', {
	      enumerable: false,
	      configurable: true,
	      value: className,
	      writable: true
	    });

	    return err
	  }

	  inherits(ClientError, HttpError);
	  nameFunc(ClientError, className);

	  ClientError.prototype.status = code;
	  ClientError.prototype.statusCode = code;
	  ClientError.prototype.expose = true;

	  return ClientError
	}

	/**
	 * Create function to test is a value is a HttpError.
	 * @private
	 */

	function createIsHttpErrorFunction (HttpError) {
	  return function isHttpError (val) {
	    if (!val || typeof val !== 'object') {
	      return false
	    }

	    if (val instanceof HttpError) {
	      return true
	    }

	    return val instanceof Error &&
	      typeof val.expose === 'boolean' &&
	      typeof val.statusCode === 'number' && val.status === val.statusCode
	  }
	}

	/**
	 * Create a constructor for a server error.
	 * @private
	 */

	function createServerErrorConstructor (HttpError, name, code) {
	  var className = toClassName(name);

	  function ServerError (message) {
	    // create the error object
	    var msg = message != null ? message : statuses$1.message[code];
	    var err = new Error(msg);

	    // capture a stack trace to the construction point
	    Error.captureStackTrace(err, ServerError);

	    // adjust the [[Prototype]]
	    setPrototypeOf(err, ServerError.prototype);

	    // redefine the error message
	    Object.defineProperty(err, 'message', {
	      enumerable: true,
	      configurable: true,
	      value: msg,
	      writable: true
	    });

	    // redefine the error name
	    Object.defineProperty(err, 'name', {
	      enumerable: false,
	      configurable: true,
	      value: className,
	      writable: true
	    });

	    return err
	  }

	  inherits(ServerError, HttpError);
	  nameFunc(ServerError, className);

	  ServerError.prototype.status = code;
	  ServerError.prototype.statusCode = code;
	  ServerError.prototype.expose = false;

	  return ServerError
	}

	/**
	 * Set the name of a function, if possible.
	 * @private
	 */

	function nameFunc (func, name) {
	  var desc = Object.getOwnPropertyDescriptor(func, 'name');

	  if (desc && desc.configurable) {
	    desc.value = name;
	    Object.defineProperty(func, 'name', desc);
	  }
	}

	/**
	 * Populate the exports object with constructors for every error class.
	 * @private
	 */

	function populateConstructorExports (exports, codes, HttpError) {
	  codes.forEach(function forEachCode (code) {
	    var CodeError;
	    var name = toIdentifier(statuses$1.message[code]);

	    switch (codeClass(code)) {
	      case 400:
	        CodeError = createClientErrorConstructor(HttpError, name, code);
	        break
	      case 500:
	        CodeError = createServerErrorConstructor(HttpError, name, code);
	        break
	    }

	    if (CodeError) {
	      // export the constructor
	      exports[code] = CodeError;
	      exports[name] = CodeError;
	    }
	  });
	}

	/**
	 * Get a class name from a name identifier.
	 * @private
	 */

	function toClassName (name) {
	  return name.substr(-5) !== 'Error'
	    ? name + 'Error'
	    : name
	}
} (httpErrors));

var createHttpError = httpErrors.exports;

class BareError extends Error {
  status;
  body;

  constructor(status, body) {
    super(body.message || body.code);
    this.status = status;
    this.body = body;
  }

}
const project = {
  name: 'bare-server-worker',
  description: 'Cloudflare Bare Server',
  repository: 'https://hideip.network',
  version: '1.2.2'
};
function json(status, json) {
  return new Response(JSON.stringify(json, null, '\t'), {
    status,
    headers: {
      'content-type': 'application/json'
    }
  });
}
class Server extends EventTarget {
  routes = new Map();
  socketRoutes = new Map();
  closed = false;
  directory;
  options;
  /**
   * @internal
   */

  constructor(directory, options) {
    super();
    this.directory = directory;
    this.options = options;
  }
  /**
   * Remove all timers and listeners
   */


  close() {
    this.closed = true;
    this.dispatchEvent(new Event('close'));
  }

  shouldRoute(request) {
    return !this.closed && new URL(request.url).pathname.startsWith(this.directory);
  }

  get instanceInfo() {
    return {
      versions: ['v1', 'v2'],
      language: 'Cloudflare',
      maintainer: this.options.maintainer,
      project
    };
  }

  async routeRequest(request) {
    const service = new URL(request.url).pathname.slice(this.directory.length - 1);
    let response;
    const isSocket = request.headers.get('upgrade') === 'websocket';

    try {
      if (request.method === 'OPTIONS') {
        response = new Response(undefined, {
          status: 200
        });
      } else if (service === '/') {
        response = json(200, this.instanceInfo);
      } else if (!isSocket && this.routes.has(service)) {
        const call = this.routes.get(service);
        response = await call(request, this.options);
      } else if (isSocket && this.socketRoutes.has(service)) {
        const call = this.socketRoutes.get(service);
        response = await call(request, this.options);
      } else {
        throw new createHttpError.NotFound();
      }
    } catch (error) {
      if (this.options.logErrors) console.error(error);

      if (createHttpError.isHttpError(error)) {
        response = json(error.statusCode, {
          code: 'UNKNOWN',
          id: `error.${error.name}`,
          message: error.message,
          stack: error.stack
        });
      } else if (error instanceof Error) {
        response = json(500, {
          code: 'UNKNOWN',
          id: `error.${error.name}`,
          message: error.message,
          stack: error.stack
        });
      } else {
        response = json(500, {
          code: 'UNKNOWN',
          id: 'error.Exception',
          message: error,
          stack: new Error(error).stack
        });
      }

      if (!(response instanceof Response)) {
        if (this.options.logErrors) {
          console.error('Cannot', request.method, new URL(request.url).pathname, ': Route did not return a response.');
        }

        throw new createHttpError.InternalServerError();
      }
    }

    response.headers.set('x-robots-tag', 'noindex');
    response.headers.set('access-control-allow-headers', '*');
    response.headers.set('access-control-allow-origin', '*');
    response.headers.set('access-control-allow-methods', '*');
    response.headers.set('access-control-expose-headers', '*'); // don't fetch preflight on every request...
    // instead, fetch preflight every 10 minutes

    response.headers.set('access-control-max-age', '7200');
    return response;
  }

}

const reserveChar = '%';
function decodeProtocol(protocol) {
  let result = '';

  for (let i = 0; i < protocol.length; i++) {
    const char = protocol[i];

    if (char === reserveChar) {
      const code = parseInt(protocol.slice(i + 1, i + 3), 16);
      const decoded = String.fromCharCode(code);
      result += decoded;
      i += 2;
    } else {
      result += char;
    }
  }

  return result;
}

function randomHex(byteLength) {
  const bytes = new Uint8Array(byteLength);
  crypto.getRandomValues(bytes);
  let hex = '';

  for (const byte of bytes) hex += byte.toString(16).padStart(2, '0');

  return hex;
}
const noBody = ['GET', 'HEAD'];
async function bareFetch(request, signal, requestHeaders, remote) {
  return await fetch(`${remote.protocol}//${remote.host}:${remote.port}${remote.path}`, {
    headers: requestHeaders,
    method: request.method,
    body: noBody.includes(request.method) ? undefined : await request.blob(),
    signal,
    redirect: 'manual'
  });
}
async function upgradeBareFetch(request, signal, requestHeaders, remote) {
  const res = await fetch(`${remote.protocol}//${remote.host}:${remote.port}${remote.path}`, {
    headers: requestHeaders,
    method: request.method,
    signal
  });
  if (!res.webSocket) throw new Error("server didn't accept WebSocket");
  return [res, res.webSocket];
}

const validProtocols$1 = ['http:', 'https:', 'ws:', 'wss:'];

function loadForwardedHeaders$1(forward, target, request) {
  for (const header of forward) {
    if (request.headers.has(header)) {
      target[header] = request.headers.get(header);
    }
  }
}

function readHeaders$1(request) {
  const remote = {};
  const headers = {};
  Reflect.setPrototypeOf(headers, null);

  for (const remoteProp of ['host', 'port', 'protocol', 'path']) {
    const header = `x-bare-${remoteProp}`;

    if (request.headers.has(header)) {
      const value = request.headers.get(header);

      switch (remoteProp) {
        case 'port':
          if (isNaN(parseInt(value))) {
            throw new BareError(400, {
              code: 'INVALID_BARE_HEADER',
              id: `request.headers.${header}`,
              message: `Header was not a valid integer.`
            });
          }

          break;

        case 'protocol':
          if (!validProtocols$1.includes(value)) {
            throw new BareError(400, {
              code: 'INVALID_BARE_HEADER',
              id: `request.headers.${header}`,
              message: `Header was invalid`
            });
          }

          break;
      }

      remote[remoteProp] = value;
    } else {
      throw new BareError(400, {
        code: 'MISSING_BARE_HEADER',
        id: `request.headers.${header}`,
        message: `Header was not specified.`
      });
    }
  }

  if (request.headers.has('x-bare-headers')) {
    try {
      const json = JSON.parse(request.headers.get('x-bare-headers'));

      for (const header in json) {
        if (typeof json[header] !== 'string' && !Array.isArray(json[header])) {
          throw new BareError(400, {
            code: 'INVALID_BARE_HEADER',
            id: `bare.headers.${header}`,
            message: `Header was not a String or Array.`
          });
        }
      }

      Object.assign(headers, json);
    } catch (error) {
      if (error instanceof SyntaxError) {
        throw new BareError(400, {
          code: 'INVALID_BARE_HEADER',
          id: `request.headers.x-bare-headers`,
          message: `Header contained invalid JSON. (${error.message})`
        });
      } else {
        throw error;
      }
    }
  } else {
    throw new BareError(400, {
      code: 'MISSING_BARE_HEADER',
      id: `request.headers.x-bare-headers`,
      message: `Header was not specified.`
    });
  }

  if (request.headers.has('x-bare-forward-headers')) {
    let json;

    try {
      json = JSON.parse(request.headers.get('x-bare-forward-headers'));
    } catch (error) {
      throw new BareError(400, {
        code: 'INVALID_BARE_HEADER',
        id: `request.headers.x-bare-forward-headers`,
        message: `Header contained invalid JSON. (${error instanceof Error ? error.message : error})`
      });
    }

    loadForwardedHeaders$1(json, headers, request);
  } else {
    throw new BareError(400, {
      code: 'MISSING_BARE_HEADER',
      id: `request.headers.x-bare-forward-headers`,
      message: `Header was not specified.`
    });
  }

  return {
    remote: remote,
    headers
  };
}

const tunnelRequest$1 = async request => {
  const {
    remote,
    headers
  } = readHeaders$1(request);
  const response = await bareFetch(request, request.signal, headers, remote);
  const responseHeaders = new Headers();

  for (const [header, value] of response.headers) {
    if (header === 'content-encoding' || header === 'x-content-encoding') responseHeaders.set('content-encoding', value);else if (header === 'content-length') responseHeaders.set('content-length', value);
  }

  responseHeaders.set('x-bare-headers', JSON.stringify(Object.fromEntries(response.headers)));
  responseHeaders.set('x-bare-status', response.status.toString());
  responseHeaders.set('x-bare-status-text', response.statusText);
  return new Response(response.body, {
    status: 200,
    headers: responseHeaders
  });
};

const metaExpiration$1 = 30e3;

const wsMeta = async (request, options) => {
  if (request.method === 'OPTIONS') {
    return new Response(undefined, {
      status: 200
    });
  }

  if (!request.headers.has('x-bare-id')) {
    throw new BareError(400, {
      code: 'MISSING_BARE_HEADER',
      id: 'request.headers.x-bare-id',
      message: 'Header was not specified'
    });
  }

  const id = request.headers.get('x-bare-id');
  const meta = await options.database.get(id); // check if meta isn't undefined and if the version equals 1

  if (meta?.value.v !== 1) throw new BareError(400, {
    code: 'INVALID_BARE_HEADER',
    id: 'request.headers.x-bare-id',
    message: 'Unregistered ID'
  });
  await options.database.delete(id);
  return json(200, {
    headers: meta.value.response?.headers
  });
};

const wsNewMeta = async (request, options) => {
  const id = randomHex(16);
  await options.database.set(id, {
    value: {
      v: 1
    },
    expires: Date.now() + metaExpiration$1
  });
  return new Response(id);
};

const tunnelSocket$1 = async (request, options) => {
  const [firstProtocol, data] = request.headers.get('sec-websocket-protocol')?.split(/,\s*/g) || [];
  if (firstProtocol !== 'bare') throw new BareError(400, {
    code: 'INVALID_BARE_HEADER',
    id: `request.headers.sec-websocket-protocol`,
    message: `Meta was not specified.`
  });
  const {
    remote,
    headers,
    forward_headers: forwardHeaders,
    id
  } = JSON.parse(decodeProtocol(data));
  loadForwardedHeaders$1(forwardHeaders, headers, request);
  if (!id) throw new BareError(400, {
    code: 'INVALID_BARE_HEADER',
    id: `request.headers.sec-websocket-protocol`,
    message: `Expected ID.`
  });
  const [remoteResponse, remoteSocket] = await upgradeBareFetch(request, request.signal, headers, remote);
  const meta = await options.database.get(id);

  if (meta?.value.v === 1) {
    meta.value.response = {
      headers: Object.fromEntries(remoteResponse.headers)
    };
    await options.database.set(id, meta);
  }

  return new Response(undefined, {
    status: 101,
    webSocket: remoteSocket
  });
};

function registerV1(server) {
  server.routes.set('/v1/', tunnelRequest$1);
  server.routes.set('/v1/ws-new-meta', wsNewMeta);
  server.routes.set('/v1/ws-meta', wsMeta);
  server.socketRoutes.set('/v1/', tunnelSocket$1);
}

const MAX_HEADER_VALUE = 3072;
/**
 *
 * Splits headers according to spec
 * @param headers
 * @returns Split headers
 */

function splitHeaders(headers) {
  const output = new Headers(headers);

  if (headers.has('x-bare-headers')) {
    const value = headers.get('x-bare-headers');

    if (value.length > MAX_HEADER_VALUE) {
      output.delete('x-bare-headers');
      let split = 0;

      for (let i = 0; i < value.length; i += MAX_HEADER_VALUE) {
        const part = value.slice(i, i + MAX_HEADER_VALUE);
        const id = split++;
        output.set(`x-bare-headers-${id}`, `;${part}`);
      }
    }
  }

  return output;
}
/**
 * Joins headers according to spec
 * @param headers
 * @returns Joined headers
 */

function joinHeaders(headers) {
  const output = new Headers(headers);
  const prefix = 'x-bare-headers';

  if (headers.has(`${prefix}-0`)) {
    const join = [];

    for (const [header, value] of headers) {
      if (!header.startsWith(prefix)) {
        continue;
      }

      if (!value.startsWith(';')) {
        throw new BareError(400, {
          code: 'INVALID_BARE_HEADER',
          id: `request.headers.${header}`,
          message: `Value didn't begin with semi-colon.`
        });
      }

      const id = parseInt(header.slice(prefix.length + 1));
      join[id] = value.slice(1);
      output.delete(header);
    }

    output.set(prefix, join.join(''));
  }

  return output;
}

const validProtocols = ['http:', 'https:', 'ws:', 'wss:'];
const forbiddenForwardHeaders = ['connection', 'transfer-encoding', 'host', 'connection', 'origin', 'referer'];
const forbiddenPassHeaders = ['vary', 'connection', 'transfer-encoding', 'access-control-allow-headers', 'access-control-allow-methods', 'access-control-expose-headers', 'access-control-max-age', 'access-control-request-headers', 'access-control-request-method']; // common defaults

const defaultForwardHeaders = ['accept-encoding', 'accept-language', 'sec-websocket-extensions', 'sec-websocket-key', 'sec-websocket-version'];
const defaultPassHeaders = ['content-encoding', 'content-length', 'last-modified']; // defaults if the client provides a cache key

const defaultCacheForwardHeaders = ['if-modified-since', 'if-none-match', 'cache-control'];
const defaultCachePassHeaders = ['cache-control', 'etag'];
const cacheNotModified = 304;

function loadForwardedHeaders(forward, target, request) {
  for (const header of forward) {
    if (request.headers.has(header)) {
      target[header] = request.headers.get(header);
    }
  }
}

const splitHeaderValue = /,\s*/g;

function readHeaders(request) {
  const remote = Object.setPrototypeOf({}, null);
  const sendHeaders = Object.setPrototypeOf({}, null);
  const passHeaders = [...defaultPassHeaders];
  const passStatus = [];
  const forwardHeaders = [...defaultForwardHeaders]; // should be unique

  const cache = new URL(request.url).searchParams.has('cache');

  if (cache) {
    passHeaders.push(...defaultCachePassHeaders);
    passStatus.push(cacheNotModified);
    forwardHeaders.push(...defaultCacheForwardHeaders);
  }

  const headers = joinHeaders(request.headers);

  for (const remoteProp of ['host', 'port', 'protocol', 'path']) {
    const header = `x-bare-${remoteProp}`;

    if (headers.has(header)) {
      const value = headers.get(header);

      switch (remoteProp) {
        case 'port':
          if (isNaN(parseInt(value))) {
            throw new BareError(400, {
              code: 'INVALID_BARE_HEADER',
              id: `request.headers.${header}`,
              message: `Header was not a valid integer.`
            });
          }

          break;

        case 'protocol':
          if (!validProtocols.includes(value)) {
            throw new BareError(400, {
              code: 'INVALID_BARE_HEADER',
              id: `request.headers.${header}`,
              message: `Header was invalid`
            });
          }

          break;
      }

      remote[remoteProp] = value;
    } else {
      throw new BareError(400, {
        code: 'MISSING_BARE_HEADER',
        id: `request.headers.${header}`,
        message: `Header was not specified.`
      });
    }
  }

  if (headers.has('x-bare-headers')) {
    try {
      const json = JSON.parse(headers.get('x-bare-headers'));

      for (const header in json) {
        const value = json[header];

        if (typeof value === 'string') {
          sendHeaders[header] = value;
        } else if (Array.isArray(value)) {
          const array = [];

          for (const val in value) {
            if (typeof val !== 'string') {
              throw new BareError(400, {
                code: 'INVALID_BARE_HEADER',
                id: `bare.headers.${header}`,
                message: `Header was not a String.`
              });
            }

            array.push(val);
          }

          sendHeaders[header] = array;
        } else {
          throw new BareError(400, {
            code: 'INVALID_BARE_HEADER',
            id: `bare.headers.${header}`,
            message: `Header was not a String.`
          });
        }
      }
    } catch (error) {
      if (error instanceof SyntaxError) {
        throw new BareError(400, {
          code: 'INVALID_BARE_HEADER',
          id: `request.headers.x-bare-headers`,
          message: `Header contained invalid JSON. (${error.message})`
        });
      } else {
        throw error;
      }
    }
  } else {
    throw new BareError(400, {
      code: 'MISSING_BARE_HEADER',
      id: `request.headers.x-bare-headers`,
      message: `Header was not specified.`
    });
  }

  if (headers.has('x-bare-pass-status')) {
    const parsed = headers.get('x-bare-pass-status').split(splitHeaderValue);

    for (const value of parsed) {
      const number = parseInt(value);

      if (isNaN(number)) {
        throw new BareError(400, {
          code: 'INVALID_BARE_HEADER',
          id: `request.headers.x-bare-pass-status`,
          message: `Array contained non-number value.`
        });
      } else {
        passStatus.push(number);
      }
    }
  }

  if (headers.has('x-bare-pass-headers')) {
    const parsed = headers.get('x-bare-pass-headers').split(splitHeaderValue);

    for (let header of parsed) {
      header = header.toLowerCase();

      if (forbiddenPassHeaders.includes(header)) {
        throw new BareError(400, {
          code: 'FORBIDDEN_BARE_HEADER',
          id: `request.headers.x-bare-forward-headers`,
          message: `A forbidden header was passed.`
        });
      } else {
        passHeaders.push(header);
      }
    }
  }

  if (headers.has('x-bare-forward-headers')) {
    const parsed = headers.get('x-bare-forward-headers').split(splitHeaderValue);

    for (let header of parsed) {
      header = header.toLowerCase();

      if (forbiddenForwardHeaders.includes(header)) {
        throw new BareError(400, {
          code: 'FORBIDDEN_BARE_HEADER',
          id: `request.headers.x-bare-forward-headers`,
          message: `A forbidden header was forwarded.`
        });
      } else {
        forwardHeaders.push(header);
      }
    }
  }

  return {
    remote,
    sendHeaders,
    passHeaders,
    passStatus,
    forwardHeaders
  };
}

const tunnelRequest = async request => {
  const {
    remote,
    sendHeaders,
    passHeaders,
    passStatus,
    forwardHeaders
  } = readHeaders(request);
  loadForwardedHeaders(forwardHeaders, sendHeaders, request);
  const response = await bareFetch(request, request.signal, sendHeaders, remote);
  const responseHeaders = new Headers();

  for (const [header, value] of passHeaders) {
    if (!response.headers.has(header)) continue;
    responseHeaders.set(header, value);
  }

  const status = passStatus.includes(response.status) ? response.status : 200;

  if (status !== cacheNotModified) {
    responseHeaders.set('x-bare-status', response.status.toString());
    responseHeaders.set('x-bare-status-text', response.statusText);
    responseHeaders.set('x-bare-headers', JSON.stringify(Object.fromEntries(response.headers)));
  }

  return new Response(response.body, {
    status,
    headers: splitHeaders(responseHeaders)
  });
};

const metaExpiration = 30e3;

const getMeta = async (request, options) => {
  if (request.method === 'OPTIONS') {
    return new Response(undefined, {
      status: 200
    });
  }

  if (!request.headers.has('x-bare-id')) {
    throw new BareError(400, {
      code: 'MISSING_BARE_HEADER',
      id: 'request.headers.x-bare-id',
      message: 'Header was not specified'
    });
  }

  const id = request.headers.get('x-bare-id');
  const meta = await options.database.get(id);
  if (meta?.value.v !== 2) throw new BareError(400, {
    code: 'INVALID_BARE_HEADER',
    id: 'request.headers.x-bare-id',
    message: 'Unregistered ID'
  });
  if (!meta.value.response) throw new BareError(400, {
    code: 'INVALID_BARE_HEADER',
    id: 'request.headers.x-bare-id',
    message: 'Meta not ready'
  });
  await options.database.delete(id);
  const responseHeaders = new Headers();
  responseHeaders.set('x-bare-status', meta.value.response.status.toString());
  responseHeaders.set('x-bare-status-text', meta.value.response.statusText);
  responseHeaders.set('x-bare-headers', JSON.stringify(meta.value.response.headers));
  return new Response(undefined, {
    status: 200,
    headers: splitHeaders(responseHeaders)
  });
};

const newMeta = async (request, options) => {
  const {
    remote,
    sendHeaders,
    forwardHeaders
  } = readHeaders(request);
  const id = randomHex(16);
  await options.database.set(id, {
    expires: Date.now() + metaExpiration,
    value: {
      v: 2,
      remote,
      sendHeaders,
      forwardHeaders
    }
  });
  return new Response(id);
};

const tunnelSocket = async (request, options) => {
  const id = request.headers.get('sec-websocket-protocol');
  if (!id) throw new BareError(400, {
    code: 'INVALID_BARE_HEADER',
    id: `request.headers.sec-websocket-protocol`,
    message: `Expected ID.`
  });
  const meta = await options.database.get(id);
  if (meta?.value.v !== 2) throw new BareError(400, {
    code: 'INVALID_BARE_HEADER',
    id: `request.headers.sec-websocket-protocol`,
    message: `Bad ID.`
  });
  loadForwardedHeaders(meta.value.forwardHeaders, meta.value.sendHeaders, request);
  const [remoteResponse, remoteSocket] = await upgradeBareFetch(request, request.signal, meta.value.sendHeaders, meta.value.remote); // https://developers.cloudflare.com/workers/learning/using-websockets
  // returning it on to a client....

  meta.value.response = {
    headers: Object.fromEntries(remoteResponse.headers),
    status: remoteResponse.status,
    statusText: remoteResponse.statusText
  };
  await options.database.set(id, meta);
  return new Response(undefined, {
    status: 101,
    webSocket: remoteSocket
  });
};

function registerV2(server) {
  server.routes.set('/v2/', tunnelRequest);
  server.routes.set('/v2/ws-new-meta', newMeta);
  server.routes.set('/v2/ws-meta', getMeta);
  server.socketRoutes.set('/v2/', tunnelSocket);
}

/**
 * Create a Bare server.
 * This will handle all lifecycles for unspecified options (httpAgent, httpsAgent, metaMap).
 */

function createBareServer(directory, init = {}) {
  if (typeof directory !== 'string') throw new Error('Directory must be specified.');
  if (!directory.startsWith('/') || !directory.endsWith('/')) throw new RangeError('Directory must start and end with /');
  init.logErrors ??= false;
  const cleanup = [];

  if (!init.database) {
    const database = new Map();
    const interval = setInterval(() => cleanupDatabase(database), 1000);
    init.database = database;
    cleanup.push(() => clearInterval(interval));
  }

  const server = new Server(directory, { ...init,
    database: new JSONDatabaseAdapter(init.database)
  });
  registerV1(server);
  registerV2(server);
  server.addEventListener('close', () => {
    for (const cb of cleanup) cb();
  });
  return server;
}

const kvDB = new KVAdapter(BARE);
const bare = createBareServer(`/${bs}/`, {
  logErrors: true,
  database: kvDB
});
addEventListener('fetch', event => {
  cleanupDatabase(kvDB);

  if (bare.shouldRoute(event.request)) {
    event.respondWith(bare.routeRequest(event.request));
  } else {
    event.respondWith(handleRequest(event.request));
  }
});
