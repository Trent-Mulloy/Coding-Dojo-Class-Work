import java.util.Date;
public class AlfredQuotes {
    
    public String basicGreeting() {
        // You do not need to code here, this is an example method
        return "Hello, lovely to see you. How are you?";
    }
    
    public String guestGreeting(String name) {
        // YOUR CODE HERE
        return "Hello " + name + ", nice to see you";
    }
    
    public String dateAnnouncement() {
        Date date = new Date();
        return "Currently it is: " + date;
    }
    
    public String respondBeforeAlexis(String conversation) {
        int a = conversation.indexOf("Alexis");
        int b = conversation.indexOf("Alfred");
        if(a > -1){
            return "Right away sir, certainly I will be better than her!";
        }
        else if(b > -1){
            return "Right away sir, at your service, Naturally!";
        }
        else{
            return "And with that I would like to inform you of my retirement";
        }
    }
    
	// NINJA BONUS
	// See the specs to overload the guessGreeting method
    // SENSEI BONUS
    // Write your own AlfredQuote method using any of the String methods you have learned!
}

