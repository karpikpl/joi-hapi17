const Hapi = require('hapi');
const Joi = require('joi');

const startServer = async () => {
    try {
        const server = Hapi.server({
            port: 8081
        });

        server.route({
            method: 'POST',
            path: '/data/{id}',
            handler: function (request, h) {

                return `Trying to add data for id:${request.params.id}. Payload: ${JSON.stringify(request.payload)}`;
            },
            options: {
                validate: {
                    params: {
                        id: Joi.number()
                            .min(1)
                            .max(10)
                    },
                    payload: Joi.object({
                        id: Joi.number(),
                        url: Joi.string()
                            .uri()
                    })
                }
            }
        });

        await server.start();

        console.log(`Hapi 17 server runnint at: ${server.info.port}`);

    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

startServer();
