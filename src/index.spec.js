/**
 * Created by Benou on 03/11/2016.
 */

const context = require.context('./app', true, /\.(js|ts|tsx)$/);
context.keys().forEach(context);
