// import java.util.Date;
import java.util.ArrayList;
// import java.util.Scanner;
public class CafeUtil{
    public int getStreakGoal()  { 

        int num = 10, sum = 0;

        for(int i = 1; i <= num; ++i)
        {
            sum += i;
        }

        return sum;
    }
    public double getOrderTotal(double[] lineItems){
            double sum = 0;
            for(int i = 0; i < lineItems.length; i++)
            {
                sum = sum + lineItems[i];
            }
            return sum;
        }
    public String displayMenu(ArrayList<String> menu){
        for(int i = 0; i < menu.size(); i++)
            {
            System.out.println(i + " " + menu.get(i));
            }
        return menu.get(1);
    }
    public void addCustomer(ArrayList<String> customers){
        //Scanner inputText = new Scanner(System.in);
        String userName = System.console().readLine();
        // System.out.println("Please enter name");
        // userName = inputText.nextLine();
        System.out.printf("Hello, %s!", userName);
        customers.add(userName);
        System.out.println('\n' + "There are currently " + customers.size() + " customer(s) in line");
        
    }
}
