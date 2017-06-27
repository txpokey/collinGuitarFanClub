/**
 * Created by mak on 6/26/17.
 */
class FileNamerTest extends GroovyTestCase{
    void testMain() {
    }

    void testGetUsage() {
    }
    static def DOT = "."
    static def BIN = "/bin"
    static def BINTRUE = "/bin/true"
    static def NOTDIR = new File( BINTRUE )
    static def DOTDIR = new File( DOT )
    static def BINDIR = new File( BIN )
    static def TESTDIRS = [ NOTDIR, DOTDIR , BINDIR ]
    void testGroovyFileFeatures() {
        doDirectoryDiscovery()
        log.info "DONE"
    }
    def doDirectoryDiscovery() {
        def candidate = null
//
        TESTDIRS.each { input ->
            candidate = getFileName(input)
            log.info( "tested File name : ${candidate}" )
            candidate = getParentAsFile(input)
            log.info( "test for parentFile as type File : ${candidate?.isDirectory()}" )
            candidate = getParentAsString(input)
            log.info( "test for parent as string : ${candidate}" )
            candidate = getAbsolutePath(input)
            log.info( "test for absolute path: ${candidate}" )
            candidate = getCanonicalPath(input)
            log.info( "test for canonical path: ${candidate}" )
            candidate = getDirectoryAsList(input)
            log.info( "test for directory as List: ${candidate}" )
            doListDirectoryContents( candidate )
            log.info("================")
        }
    }
    def getParentAsFile(File file) {
        file?.parentFile
    }
    def getParentAsString(File file) {
        file?.parent
    }
    def getDirContentsAsList( File dir ) {
        dir?.isDirectory() ?: dir?.listFiles()
    }
    def getFileName(File file) {
        file?.name
    }
    def getAbsolutePath(File file){
        file?.absolutePath
    }
    def getCanonicalPath(File file){
        file?.canonicalPath
    }
    def getDirectoryAsList( File dir )
    {
        dir?.isDirectory() ? dir.listFiles() as List : []
    }
    def doListDirectoryContents( List<File> inputList ) {
        inputList.each { member ->
            log.info(getCanonicalPath(member))
        }
    }
}
