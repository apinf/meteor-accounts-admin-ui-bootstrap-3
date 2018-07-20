Package.describe({
  summary: "A roles based account management system using bootstrap 3",
  version: "0.3.2",
  name: "apinf:accounts-admin-ui",
  git: "https://github.com/apinf/meteor-accounts-admin-ui-bootstrap-3.git"
});

Package.onUse(function (api) {
	api.versionsFrom('1.2.1');
	api.use('templating', 'client');
	api.use('apinf:first-admin@0.1.2', 'server');
	api.use('alanning:roles@1.2.11', ['client', 'server']);
	api.use(['accounts-ui@1.0.0',
		'accounts-password@1.3.0',
		'kurounin:pagination-blaze@1.0.2',
		'session',
		'apinf:bootstrap',
		'underscore'
	]);

	// Add client & server files
	api.addFiles('libs/user_query.js', ['client', 'server']);

	// Add client files
	api.addFiles([
		'client/accounts_admin.html',
		'client/accounts_admin.js',
		'client/delete_account_modal.html',
		'client/delete_account_modal.js',
		'client/info_account_modal.html',
		'client/info_account_modal.js',
		'client/startup.js',
		'client/update_account_modal.html',
		'client/update_account_modal.js',
		'client/update_roles_modal.html',
		'client/update_roles_modal.js',
		'style/style.css'
	], 'client');

	// Add server files
	api.addFiles([
		'server/methods.js',
		'server/publish.js',
		'server/startup.js'
	], 'server');
});
