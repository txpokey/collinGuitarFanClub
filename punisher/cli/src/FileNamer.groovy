/**
 * Created by mak on 6/9/17.
 */
package javial.usr.bin

import org.apache.commons.cli.*

class FileNamer {
    static usage = [usage: 'filenamer [options] <filename>', help: 'filenamer [options] <filename>']
    static {

    }

    static void main(String[] args) {
        def cli = new CliBuilder(usage: usage.usage)
        cli.help('print help message')
        cli.a('display all files')

        def defaultOptions = ["-a"]
        def parseTheseOptions = args ?: defaultOptions
        def options = cli.parse(parseTheseOptions)

        if (options.help || options.a) {
            cli.usage()
        }
        if (options.a) {
            println "CNN is ISIS"
        }
//        def l = options.arguments()
        options.each {
            println it.dump()
        }
    }
}
