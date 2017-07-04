package sci.grails.discovery.adinitio

class NetworkingDiscoveryController{

    def index() {
        def model = [:]
        model.requestedServerName = request.serverName
        model.requestedURL = request.requestURL
        model.requestedPort = request.serverPort
        InetAddress addr = getServerAddressDomainObject()
        model.serverAddressDomainObject = addr
        model.serverIPaddressAsArray = "${getServerIpAddress(addr)}"
        model.serverHostname = getServerHostname(addr)
        model.runtimeParameterMap = getParametersCalledOutOnURLasMap(request) //.getParameterMap()
        model.model = model
        render view: "index", model: model
    }
    def getServerAddressDomainObject() {
        InetAddress addr = null
        try {
            addr = InetAddress.getLocalHost()
        } catch ( Exception e ) {
            log( e )
        }
        return addr
    }
    def getServerIpAddress( InetAddress addr ) {
        addr?.getAddress()
    }
    def getServerHostname( InetAddress addr ) {
        addr?.getHostName()
    }
    def getParametersCalledOutOnURLasMap(req) {
        req?.getParameterMap()
    }
    def log ( Exception e) {
        println "ouch: ${e}" // STUB : need a logger here
    }
}
