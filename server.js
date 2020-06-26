import { Server, enableDataRoute } from '@jungla/stack';
const port = process.env.PORT || 8080;
enableDataRoute();
Server.listen(port, () =>
	console.log(`App listening at http://localhost:${port}`)
);
