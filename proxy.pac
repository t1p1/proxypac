function FindProxyForURL(url, host)
{
// variable strings to return

var proxy = "PROXY 162.246.76.250:80";  	//new as of 12/14/17 alternate

var proxy_no   = "DIRECT";
// return proxy; // Turn it on for everything
// http://10.53.77.62:8080/mediabin/action/iw.ui
if (shExpMatch(url, "http://10.53.77.62:8080/*")) {return proxy;}

// HUGE DEV SERVERS BY IP (WORKS)
if (shExpMatch(url, "http://10.63.52.152*")) {return proxy;}
if (shExpMatch(url, "http://10.63.52.158*")) {return proxy;}
if (shExpMatch(url, "http://10.63.52.164*")) {return proxy;}
if (shExpMatch(url, "http://10.63.54.31*")) {return proxy;}

// HUGE TEST SERVERS BY IP (WORKS)
if (shExpMatch(url, "http://10.63.53.152*")) {return proxy;}
if (shExpMatch(url, "*10.63.53.152*")) {return proxy;}
if (shExpMatch(url, "http://10.63.53.158*")) {return proxy;}
if (shExpMatch(url, "http://10.63.53.164*")) {return proxy;}
if (shExpMatch(url, "http://10.63.55.31*")) {return proxy;}
// http://65.197.201.78:9001/svn/repos/
if (shExpMatch(url, "http://65.197.201.78:9001/svn/repos/*")) {return proxy;}

// HUGE DEV SERVERS CLEAR CACHE
// http://10.63.52.155:8080/lexus-web/admin/clearCache
if (shExpMatch(url, "http://10.63.52.155:8080/*")) {return proxy;}
if (shExpMatch(url, "http://10.63.54.34:8080/*")) {return proxy;}

// http://10.63.52.161:8080/lexus-web/admin/clearCache
if (shExpMatch(url, "http://10.63.52.161:8080/*")) {return proxy;}

// http://10.63.52.167:8080/lexus-web/admin/clearCache
if (shExpMatch(url, "http://10.63.52.167:8080/*")) {return proxy;}   

// HUGE TEST SERVERS CLEAR CACHE
// http://10.63.53.155:8080/lexus-web/admin/clearCache
if (shExpMatch(url, "http://10.63.53.155:8080/*")) {return proxy;}

// http://10.63.53.161:8080/lexus-web/admin/clearCache
if (shExpMatch(url, "http://10.63.53.161:8080/*")) {return proxy;}

// http://10.63.53.167:8080/lexus-web/admin/clearCache
if (shExpMatch(url, "http://10.63.53.167:8080/*")) {return proxy;}

//if (shExpMatch(url, "http://this.is.luigiman.net:8888/*")) {return proxy;}
//
if (shExpMatch(url, "http://10.53.4.153:8888/*")) {return proxy;}   
if (shExpMatch(url, "http://pswebp41:8888/*")) {return proxy;}   
if (shExpMatch(url, "https://pswebp41.tms.toyota.com*")) {return proxy;}   
if (shExpMatch(url, "http://pswebp41.tms.toyota.com:8888/*")) {return proxy;}  


// HUGE TEST SERVERS BY DOMAIN NAME (DOESN'T WORK)
if (shExpMatch(url, "http://vmtlwebd31-proxy.tms.toyota.com/*")) {return proxy;}
if (shExpMatch(url, "http://vmtlwebd32-proxy.tms.toyota.com/*")) {return proxy;}
if (shExpMatch(url, "http://vmtlwebd33-proxy.tms.toyota.com/*")) {return proxy;}
if (shExpMatch(url, "*buildfarm.tms.toyota.com*")) {return proxy;}
if (shExpMatch(url, "*buildfarmdev.tms.toyota.com*")) {return proxy;}
if (shExpMatch(url, "*tms.toyota*")) {return proxy;}
if (shExpMatch(url, "*jvm2.vmtlwebt31*")) {return proxy;}

// New AWS servers
if (shExpMatch(url, "*aws.toyota*")) {return proxy;}
if (shExpMatch(url, "*aws.lexus*")) {return proxy;}
if (shExpMatch(url, "*tstcpd31.lexus.com*")) {return proxy;}
if (shExpMatch(url, "*registration.toyota.com*")) {return proxy;}
if (shExpMatch(url, "*tmna-lcom*.azurewebsites*")) {return proxy;}
if (shExpMatch(url, "*tmna-lexus*.azurewebsites*")) {return proxy;}

// bypass proxy for anything else
return proxy_no;
}
