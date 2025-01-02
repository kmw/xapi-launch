var fs = require('fs');
try{
exports.config = JSON.parse(fs.readFileSync("./config.json"));

if(!exports.config.LRS_Username || 
	!exports.config.LRS_Password || 
	!exports.config.admin_email || 
	!exports.config.admin_pass || 
	!exports.config.host ||
	!exports.config.LRS_Url )
{
	console.log("config file incomplete. Please delete this config file and re-start the app to set up.")
}

if(exports.config.LRS_Url[exports.config.LRS_Url.length -1] !== '/')
{
	console.log("The LRS URL should end in a slash. Please fix the config file and re launch");
	process.exit();
}
if(exports.config.host[exports.config.host.length -1] == '/')
{
	console.log("The host should not end in a slash. Please fix the config file and re launch");
	process.exit();
}


if(!exports.config.connectionString)
{
	console.log("Using default connection string")
	exports.config.connectionString = 'mongodb://localhost/xapi-launch';
}

if(!exports.config.email_user || !exports.config.email_server || !exports.config.email_pass)
{
	console.log("Email is not set up in the config file. User accounts need to be verified manually by the admin.")
}

}catch(e)
{
	exports.config = null;
	return null;
}