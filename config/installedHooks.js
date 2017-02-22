module.exports.installedHooks = {
"sails-permissions": {
// load the hook into sails.hooks['sails-permissions'] instead of sails.hooks.permissions
"name": "permissions",
// configure the hook using sails.config.permissions
"configKey": "permissions"
}
};