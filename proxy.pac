function FindProxyForURL(url, host) {
    // variable strings to return

    var proxy = "PROXY 162.246.76.250:80"; //new as of 12/14/17 alternate

    var proxy_no = "DIRECT";

    if (shExpMatch(url, "http://pswebp41:8888/*")) {
        return proxy;
    }
    if (shExpMatch(url, "https://pswebp41.tms.toyota.com*")) {
        return proxy;
    }
    if (shExpMatch(url, "http://pswebp41.tms.toyota.com:8888/*")) {
        return proxy;
    }


    // HUGE TEST SERVERS BY DOMAIN NAME (DOESN'T WORK)
    if (shExpMatch(url, "http://vmtlwebd31-proxy.tms.toyota.com/*")) {
        return proxy;
    }
    if (shExpMatch(url, "http://vmtlwebd32-proxy.tms.toyota.com/*")) {
        return proxy;
    }
    if (shExpMatch(url, "http://vmtlwebd33-proxy.tms.toyota.com/*")) {
        return proxy;
    }
    if (shExpMatch(url, "*buildfarm.tms.toyota.com*")) {
        return proxy;
    }
    if (shExpMatch(url, "*buildfarmdev.tms.toyota.com*")) {
        return proxy;
    }
    if (shExpMatch(url, "*tms.toyota*")) {
        return proxy;
    }
    if (shExpMatch(url, "*jvm2.vmtlwebt31*")) {
        return proxy;
    }

    // New AWS servers
    if (shExpMatch(url, "*aws.toyota*")) {
        return proxy;
    }
    if (shExpMatch(url, "*aws.lexus*")) {
        return proxy;
    }
    if (shExpMatch(url, "*scn.lexus*")) {
        return proxy;
    }
    if (shExpMatch(url, "*tstcpd31.lexus.com*")) {
        return proxy;
    }
    if (shExpMatch(url, "*registration.toyota.com*")) {
        return proxy;
    }
    if (shExpMatch(url, "*tmna-lcom*.azurewebsites*")) {
        return proxy;
    }
    if (shExpMatch(url, "*tmna-lexus*.azurewebsites*")) {
        return proxy;
    }

    // bypass proxy for anything else
    return proxy_no;
}