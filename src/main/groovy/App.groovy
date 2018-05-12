/**
 * Created by mak on 7/10/17. updated 5/11/18
 */
@Controller class App { 
		// gradle init artifact
    String getGreeting() {
        return 'Hello world.'
    }
		// gradle init artifact
    static void main(String[] args) {
        println new App().greeting
    }
}
