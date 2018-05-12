package javial
/**
 * Created by mak on 7/10/17. updated 5/11/18
 */
import org.springframework.stereotype.Controller

@Controller class App {
		// gradle init artifact
    String getGreeting() {
        return 'Hello world.'
    }
    /*
     * NOT needed or used when executable jar built via:
     *     spring jar <jarName> META-INF src/main/groovy
     */
    static void main(String[] args) {
        println new App().greeting
    }
}
