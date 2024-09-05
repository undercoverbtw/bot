module.exports = {
    server: {
        port: 5000,
        debug: true,
        version: '1.0',
        useHttps: false, // Default: false
    },
    proxy: {
        scrape: true, // Default: 'false' | Set to true to enable proxy scraping | false use proxies.txt
        protocol: 'http', // Default: 'http' | Proxy protocol, can be 'http', 'https', 'socks4', 'socks5'
        timeout: 10000
    },
    botsName: 'cloudy is best',
    botsAmount: 500
}
