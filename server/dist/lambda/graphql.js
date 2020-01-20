(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./graphql.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../datasources/firebase.js":
/*!**********************************!*\
  !*** ../datasources/firebase.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  DataSource
} = __webpack_require__(/*! apollo-datasource */ "apollo-datasource");

const firebase = __webpack_require__(/*! firebase/app */ "firebase/app").default;

__webpack_require__(/*! firebase/auth */ "firebase/auth"); // https://stackoverflow.com/questions/41214625/firebase-node-js-error-the-xmlhttprequest-compatibility-library-was-not-foun


global["XMLHttpRequest"] = __webpack_require__(/*! xmlhttprequest */ "xmlhttprequest").XMLHttpRequest;

class FirebaseAPI extends DataSource {
  constructor({
    firebaseConfig
  }) {
    super();

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
  }
  /**
   * This is a function that gets called by ApolloServer when being setup.
   * This function gets called with the datasource config including things
   * like caches and context. We'll assign this.context to the request context
   * here, so we can know about the user making requests
   */


  initialize(config) {
    this.context = config.context;
  }

  isLoggedIn() {
    return firebase.auth().currentUser ? true : false;
  }

  async login(args) {
    try {
      const {
        email,
        password
      } = args;
      const res = await firebase.auth().signInWithEmailAndPassword(email, password);
      return res && res.user && res.user.uid;
    } catch (error) {
      console.error(error);
      return error.message;
    }
  }

  async signup(args) {
    try {
      const {
        email,
        password
      } = args;
      const res = await firebase.auth().createUserWithEmailAndPassword(email, password);
      return res && res.user && res.user.uid;
    } catch (error) {
      console.error(error);
      return error.message;
    }
  }

}

module.exports = FirebaseAPI;

/***/ }),

/***/ "../env.js":
/*!*****************!*\
  !*** ../env.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (env) {
  const propsWeWant = ["NODE_ENV", "FIREBASE_API_KEY", "FIREBASE_AUTH_DOMAIN", "FIREBASE_DATABASE_URL", "FIREBASE_PROJECT_ID", "FIREBASE_STORAGE_BUCKET", "FIREBASE_MESSAGING_SENDER_ID", "FIREBASE_APP_ID", "FIREBASE_MEASUREMENT_ID"];
  let justTheObjectWeWant = {};

  for (key in env) {
    if (propsWeWant.indexOf(key) !== -1) {
      justTheObjectWeWant[key] = env[key];
    }
  }

  return justTheObjectWeWant;
}(process.env);

/***/ }),

/***/ "../resolvers.js":
/*!***********************!*\
  !*** ../resolvers.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

const resolvers = {
  Query: {
    isLoggedIn: (_, __, {
      dataSources: {
        firebaseAPI
      }
    }) => firebaseAPI.isLoggedIn()
  },
  Mutation: {
    login: async (_, args, {
      dataSources: {
        firebaseAPI
      }
    }) => await firebaseAPI.login(args),
    signup: async (_, args, {
      dataSources: {
        firebaseAPI
      }
    }) => await firebaseAPI.signup(args)
  }
};
module.exports = resolvers;

/***/ }),

/***/ "../schema.js":
/*!********************!*\
  !*** ../schema.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const {
  gql
} = __webpack_require__(/*! apollo-server-lambda */ "apollo-server-lambda");

const typeDefs = gql`
  type Query {
    isLoggedIn: Boolean!
  }

  type Mutation {
    login(email: String!, password: String!): String # login token
    signup(email: String!, password: String!): String
  }
`;
module.exports = typeDefs;

/***/ }),

/***/ "./graphql.js":
/*!********************!*\
  !*** ./graphql.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! dotenv */ "dotenv").config();

const {
  ApolloServer
} = __webpack_require__(/*! apollo-server-lambda */ "apollo-server-lambda");

const env = __webpack_require__(/*! ../env */ "../env.js");

const typeDefs = __webpack_require__(/*! ../schema */ "../schema.js");

const resolvers = __webpack_require__(/*! ../resolvers */ "../resolvers.js");

const FirebaseAPI = __webpack_require__(/*! ../datasources/firebase */ "../datasources/firebase.js");

const firebaseConfig = {
  apiKey: env.FIREBASE_API_KEY,
  authDomain: env.FIREBASE_AUTH_DOMAIN,
  databaseURL: env.FIREBASE_PROJECT_ID,
  projectId: env.FIREBASE_PROJECT_ID,
  storageBucket: env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.FIREBASE_MESSAGING_SENDER_ID,
  appId: env.FIREBASE_APP_ID,
  measurementId: env.FIREBASE_MEASUREMENT_ID
};

const dataSources = () => ({
  firebaseAPI: new FirebaseAPI({
    firebaseConfig
  })
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  // TODO: Make these ENV specific
  playground: true,
  introspection: true
});
exports.handler = server.createHandler({
  cors: {
    origin: '*',
    credentials: true
  }
});

/***/ }),

/***/ "apollo-datasource":
/*!************************************!*\
  !*** external "apollo-datasource" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-datasource");

/***/ }),

/***/ "apollo-server-lambda":
/*!***************************************!*\
  !*** external "apollo-server-lambda" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server-lambda");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/app");

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("firebase/auth");

/***/ }),

/***/ "xmlhttprequest":
/*!*********************************!*\
  !*** external "xmlhttprequest" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("xmlhttprequest");

/***/ })

/******/ })));