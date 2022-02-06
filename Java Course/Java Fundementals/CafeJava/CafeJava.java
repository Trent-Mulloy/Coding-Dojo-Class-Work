public class CafeJava {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app. 
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";
        
        // Menu variables (add yours below)
        double mochaPrice = 3.5;
        double dripCoffeePrice = 2.5;
        double lattePrice = 4.25;
        double cappucinnoPrice = 5.5;
    
        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "Sam";
        String customer3 = "Jimmy";
        String customer4 = "Noah";
    
        // Order completions (add yours below)
        boolean isReadyOrder1 = false;
        boolean isReadyOrder2 = true;
        boolean isReadyOrder3 = false;
    
        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        // Example:
        System.out.println(generalGreeting + customer1); // Displays "Welcome to Cafe Java, Cindhuri"
    	// ** Your customer interaction print statements will go here ** //
        System.out.println(customer1 + readyMessage + displayTotalMessage + dripCoffeePrice);

        if(isReadyOrder2){
            System.out.println(customer4 + readyMessage + displayTotalMessage + cappucinnoPrice);
        }
        else{
            System.out.println(customer4 + pendingMessage);
        }
        if(isReadyOrder3){
            System.out.println(customer2 + readyMessage + displayTotalMessage + (lattePrice + lattePrice));
        }
        else{
            System.out.println(customer2 + pendingMessage);
        }
        System.out.println(displayTotalMessage + (lattePrice - dripCoffeePrice));

    }
}
