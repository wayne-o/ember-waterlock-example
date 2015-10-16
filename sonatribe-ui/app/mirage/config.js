/*
You can optionally export a config that is only loaded during tests

*/
// export function testConfig() {
// 	this.urlPrefix = 'http://dev.festivaltribe.co.uk:1337';
// 	this.namespace = '/api/v1';
//
// 	this.get('/api/v1/auths/:email', function(db /*, request*/ ) {
// 		return {
// 			auths: [
//
// 			]
// 		};
//
// 	});
//
// 	this.get('/auths/login', function(db, request) {
// 		if (request.requestHeaders.Authorization === "Bearer PA$$WORD") {
// 			return {
// 				user: {
// 					id: 1,
// 					firstName: 'Chase',
// 					lastName: 'McCarthy'
// 				}
// 			};
// 		} else {
// 			return new Mirage.Response(401, {}, {});
// 		}
// 	});
// }

export default function() {
	this.urlPrefix = 'http://dev.festivaltribe.co.uk:1337';
	this.namespace = '/api/v1';

	this.get('/auths', function(/*db, request*/ ) {
		return {
			auths: [

			]
		};
	});

	this.get('/users/32', function(/*db, request*/ ) {
		return {
			// "users": [{
			// 	"createdAt": "2015-10-01T12:07:55.910Z",
			// 	"updatedAt": "2015-10-01T12:07:55.910Z",
			// 	"id": 33
			// }]
		};
	});

	this.get('/auths/usernnameExists', function(/*db, request*/){
		return false;
	});

	this.get('/auths/emailExists', function(/*db, request*/){
		return false;
	});


	this.get('/auths/generateRegistrationCode', function(/*db, request*/){
		return "sdsdfsdfsdfsfsdfsdfs";
	});

	this.post('/auths/login', function(/*db, request*/) {
		return {
			"access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIzMnx1bmRlZmluZWQiLCJzdWIiOiJzdWJqZWN0IiwiYXVkIjoiYXBwIG5hbWUiLCJleHAiOjE0NDQzMDYwMjM0NTgsIm5iZiI6MTQ0MzcwMTIyMzQ1OSwiaWF0IjoxNDQzNzAxMjIzNDU5LCJqdGkiOiJlZDVkOTczMC02ODM0LTExZTUtYTYwYy1lZGQxZDU3YzM5MmUifQ.5KVzIQ9tkE8WiCuFgpC17vN51XJu0aqzRYdv9_-1OA0",
			"expires": 1444306023458,
			"user": {
				"auth": {
					"password": "$2a$10$HbvdGeLGnEwbCn4TYjFUqOtNlAWoq.63UgnDUdMRP/kDjAzdNO57q",
					"email": "wayne22@prjatk.com",
					"createdAt": "2015-10-01T12:07:03.374Z",
					"updatedAt": "2015-10-01T12:07:03.385Z",
					"id": 32,
					"user": 32
				},
				"createdAt": "2015-10-01T12:07:03.381Z",
				"updatedAt": "2015-10-01T12:07:03.381Z",
				"id": 32
			}
		};
	});
	// These comments are here to help you get started. Feel free to delete them.

	/*
	  Config (with defaults).

	  Note: these only affect routes defined *after* them!
	*/
	// this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
	// this.namespace = '';    // make this `api`, for example, if your API is namespaced
	// this.timing = 400;      // delay for each request, automatically set to 0 during testing

	/*
	  Route shorthand cheatsheet
	*/
	/*
	  GET shorthands

	  // Collections
	  this.get('/contacts');
	  this.get('/contacts', 'users');
	  this.get('/contacts', ['contacts', 'addresses']);

	  // Single objects
	  this.get('/contacts/:id');
	  this.get('/contacts/:id', 'user');
	  this.get('/contacts/:id', ['contact', 'addresses']);
	*/

	/*
	  POST shorthands

	  this.post('/contacts');
	  this.post('/contacts', 'user'); // specify the type of resource to be created
	*/

	/*
	  PUT shorthands

	  this.put('/contacts/:id');
	  this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
	*/

	/*
	  DELETE shorthands

	  this.del('/contacts/:id');
	  this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

	  // Single object + related resources. Make sure parent resource is first.
	  this.del('/contacts/:id', ['contact', 'addresses']);
	*/

	/*
	  Function fallback. Manipulate data in the db via

	    - db.{collection}
	    - db.{collection}.find(id)
	    - db.{collection}.where(query)
	    - db.{collection}.update(target, attrs)
	    - db.{collection}.remove(target)

	  // Example: return a single object with related models
	  this.get('/contacts/:id', function(db, request) {
	    var contactId = +request.params.id;

	    return {
	      contact: db.contacts.find(contactId),
	      addresses: db.addresses.where({contact_id: contactId});
	    };
	  });

	*/
}
