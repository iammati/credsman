const config = {
    protocol: 'https',
    host: 'credsman.ddev.site',
    port: 8080,
};

export async function api(...args) {
    const endpoint = args[0];
    const data = args[1] ?? [];
    const method = args[2] ?? 'POST';

    const url = `${config.protocol}://${config.host}/api/${endpoint}.php`;

    if (Object.keys(data).length > 0) {
        return await fetch(url, {
            method: method,
            // mode: 'cors',
            // cache: 'no-cache',
            // headers: {
            //     'Content-Type': 'application/x-www-form-urlencoded',
            // },
            // redirect: 'follow',
            // referrerPolicy: 'no-referrer',
            body: JSON.stringify(data),
        });
    }

    return await fetch(url);
}
