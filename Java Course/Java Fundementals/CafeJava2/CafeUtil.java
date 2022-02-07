import java.util.Date;
public class CafeUtil{
    public String getStreakGoal()  {

        int num = 10, sum = 0;

        for(int i = 1; i <= num; ++i)
        {
            sum += i;
        }
        String x = String.valueOf(sum);

        return x;
    }
}
